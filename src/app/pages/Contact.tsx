import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Check, ChevronDown } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    timeline: "",
    details: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Added loading state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const services = [
    { value: "", label: "Service Required *" },
    { value: "piping", label: "SS & MS Process Piping Fabrication" },
    { value: "structural", label: "Structural Steel Fabrication & Erection" },
    { value: "tank", label: "MS & SS Tank Fabrication" },
    { value: "equipment", label: "Heavy Equipment Erection" },
    { value: "labour", label: "Labour Supply / Manpower" },
    { value: "multiple", label: "Multiple Services" },
    { value: "full", label: "Full Project" },
    { value: "other", label: "Other" },
    { value: "unsure", label: "Not Sure Yet" }
  ];

  const validatePhone = (phone: string) => {
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length === 12 && phoneDigits.startsWith('91')) {
      setPhoneError("");
      return true;
    } else {
      setPhoneError("Please enter a valid 10-digit Indian mobile number");
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      return;
    }

    setIsSubmitting(true);

    // Find the readable label for the selected service
    const selectedServiceLabel = services.find(s => s.value === formData.service)?.label || "Not specified";

    // Prepare data for Web3Forms
    const payload = {
      access_key: "3d19bd2d-ce04-4fe5-820f-f9dd56ade25f",
      subject: `New Project Enquiry from ${formData.name} - Hi-Tech Engineering`,
      from_name: "Hi-Tech Engineering Website",
      name: formData.name,
      company: formData.company,
      phone: formData.phone,
      email: formData.email,
      service: selectedServiceLabel, // Sending the readable label
      location: formData.location,
      timeline: formData.timeline,
      details: formData.details
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed:", result);
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Ensure +91 prefix is always present
    if (!value.startsWith('+91 ')) {
      value = '+91 ';
    }

    // Remove any non-digit characters except + and space after +91
    const prefix = '+91 ';
    const digits = value.slice(4).replace(/\D/g, '');

    // Limit to 10 digits after +91
    const limitedDigits = digits.slice(0, 10);

    const newValue = prefix + limitedDigits;
    setFormData({ ...formData, phone: newValue });

    // Clear error when user is typing
    if (phoneError) setPhoneError("");
  };

  const handleServiceSelect = (value: string) => {
    setFormData({ ...formData, service: value });
    setDropdownOpen(false);
  };

  const handleNewEnquiry = () => {
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      service: "",
      location: "",
      timeline: "",
      details: ""
    });
    setIsSubmitted(false);
    setPhoneError("");
  };

  return (
    <main className="pt-[68px]">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[3vw] py-12 md:py-24">
        <div className="mb-3">
          <div className="text-[9px] md:text-[10px] tracking-[0.3em] text-[var(--rust)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            GET IN TOUCH
          </div>
        </div>

        <h1 className="text-[36px] md:text-[52px] lg:text-[64px] leading-tight tracking-[-0.01em] mb-4 md:mb-6" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600 }}>
          <span className="text-[var(--white)]">Let's Talk About </span>
          <span className="text-[var(--rust)]">Your Next Project</span>
        </h1>

        <p className="text-[14px] md:text-[16px] max-w-[700px]" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
          Whether you need a detailed project quote, a manpower arrangement, or just want to explore possibilities — our team responds within 24 hours.
        </p>
      </section>

      {/* Contact Layout */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[3vw] pb-12 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-[20px] md:text-[24px] mb-6 md:mb-8" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, color: 'var(--white)' }}>
              CONTACT INFORMATION
            </h3>

            <div className="space-y-5 md:space-y-6 mb-10 md:mb-12">
              {[
                { icon: MapPin, label: "OFFICE", value: "Maharashtra, India" },
                { icon: Phone, label: "PHONE / WHATSAPP", value: "[Your number here]" },
                { icon: Mail, label: "EMAIL", value: "[Your email here]" },
                { icon: Clock, label: "RESPONSE TIME", value: "Within 24 hours" }
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3 md:gap-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 border border-[var(--line)] flex items-center justify-center">
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5" style={{ color: 'var(--rust)' }} />
                    </div>
                  <div>
                    <div className="text-[8px] md:text-[9px] tracking-[0.2em] mb-1" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
                      {item.label}
                    </div>
                    <div className="text-[13px] md:text-[15px]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--chalk)' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
                );
              })}
            </div>

            <div className="border-t border-[var(--line)] pt-6 md:pt-8">
              <div className="text-[10px] md:text-[11px] tracking-[0.2em] mb-3 md:mb-4" style={{ fontFamily: 'var(--font-fraunces)', color: 'var(--steel)' }}>
                REGISTRATION DETAILS
              </div>
              <div className="space-y-2 md:space-y-3 text-[12px] md:text-[13px]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--silver)' }}>
                <div className="flex justify-between">
                  <span className="text-[var(--steel)]">GST Number</span>
                  <span className="font-mono">27CPNPM3508P3Z5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--steel)]">IEC Code</span>
                  <span className="font-mono">CPNPM3508P</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--steel)]">Legal Status</span>
                  <span>Proprietorship</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--steel)]">Established</span>
                  <span>2002</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Beverage", "Chemical", "Pharmaceutical", "Dairy & Food", "Refinery", "Brewery"].map((tag, i) => (
                <div key={i} className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--rust)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="relative px-4 py-2 border border-[var(--line)] text-[11px] transition-colors duration-300 group-hover:border-[var(--rust)] group-hover:text-[var(--white)]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--silver)' }}>
                    {tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-8 bg-[var(--ink-2)] p-6 md:p-12">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 md:py-20 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--rust)] flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 md:w-10 md:h-10 text-[var(--white)]" strokeWidth={3} />
                </div>
                <h3 className="text-[28px] md:text-[36px] mb-3 md:mb-4" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, color: 'var(--white)' }}>
                  Enquiry Submitted!
                </h3>
                <p className="text-[14px] md:text-[15px] mb-8 max-w-md" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--silver)' }}>
                  Thank you for reaching out. Our team will review your requirements and respond within 24 hours.
                </p>
                <button
                  onClick={handleNewEnquiry}
                  className="px-8 py-3 border border-[var(--rust)] text-[var(--rust)] text-[12px] md:text-[13px] tracking-[0.15em] transition-all hover:bg-[var(--rust)] hover:text-[var(--white)]"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600 }}
                >
                  SUBMIT ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-[24px] md:text-[28px] lg:text-[30px] mb-2 md:mb-3" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, color: 'var(--white)' }}>
                  REQUEST A QUOTE
                </h3>
                <p className="text-[13px] md:text-[14px] mb-6 md:mb-8" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
                  Fill in your project details and we'll respond with a tailored proposal.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name *"
                        className="w-full bg-transparent border-0 border-b border-[rgba(255,255,255,0.15)] pb-2 md:pb-3 text-[14px] md:text-[15px] text-[var(--chalk)] placeholder-[var(--steel)] focus:border-[var(--rust)] focus:outline-none transition-colors"
                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full bg-transparent border-0 border-b border-[rgba(255,255,255,0.15)] pb-2 md:pb-3 text-[14px] md:text-[15px] text-[var(--chalk)] placeholder-[var(--steel)] focus:border-[var(--rust)] focus:outline-none transition-colors"
                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        required
                        placeholder="+91 9876543210 *"
                        className={`w-full bg-transparent border-0 border-b pb-2 md:pb-3 text-[14px] md:text-[15px] text-[var(--chalk)] placeholder-[var(--steel)] focus:border-[var(--rust)] focus:outline-none transition-colors ${phoneError ? 'border-red-500' : 'border-[rgba(255,255,255,0.15)]'}`}
                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                      />
                      {phoneError && (
                        <div className="text-[11px] text-red-400 mt-1" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                          {phoneError}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full bg-transparent border-0 border-b border-[rgba(255,255,255,0.15)] pb-2 md:pb-3 text-[14px] md:text-[15px] text-[var(--chalk)] placeholder-[var(--steel)] focus:border-[var(--rust)] focus:outline-none transition-colors"
                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                      />
                    </div>
                  </div>

                  <div className="form-group relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full bg-transparent border-0 border-b border-[rgba(255,255,255,0.15)] pb-2 md:pb-3 text-[14px] md:text-[15px] text-left focus:border-[var(--rust)] focus:outline-none transition-colors flex items-center justify-between"
                      style={{ fontFamily: 'var(--font-dm-sans)', color: formData.service ? 'var(--chalk)' : 'var(--steel)' }}
                    >
                      <span>{formData.service ? services.find(s => s.value === formData.service)?.label : "Service Required *"}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} style={{ color: 'var(--rust)' }} />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-[var(--ink-3)] border border-[var(--line)] max-h-64 overflow-y-auto">
                        {services.map((service) => (
                          <button
                            key={service.value}
                            type="button"
                            onClick={() => handleServiceSelect(service.value)}
                            disabled={!service.value}
                            className={`w-full text-left px-4 py-3 text-[13px] md:text-[14px] transition-colors ${
                              service.value === formData.service
                                ? 'bg-[var(--rust)] text-[var(--white)]'
                                : service.value
                                  ? 'hover:bg-[var(--ink-2)] text-[var(--silver)]'
                                  : 'text-[var(--steel)] cursor-default'
                            }`}
                            style={{ fontFamily: 'var(--font-dm-sans)' }}
                          >
                            {service.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Project Location"
                        className="w-full bg-transparent border-0 border-b border-[rgba(255,255,255,0.15)] pb-2 md:pb-3 text-[14px] md:text-[15px] text-[var(--chalk)] placeholder-[var(--steel)] focus:border-[var(--rust)] focus:outline-none transition-colors"
                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        placeholder="Approx. Timeline (weeks)"
                        className="w-full bg-transparent border-0 border-b border-[rgba(255,255,255,0.15)] pb-2 md:pb-3 text-[14px] md:text-[15px] text-[var(--chalk)] placeholder-[var(--steel)] focus:border-[var(--rust)] focus:outline-none transition-colors"
                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Project Details"
                      rows={5}
                      className="w-full bg-transparent border-0 border-b border-[rgba(255,255,255,0.15)] pb-3 text-[15px] text-[var(--chalk)] placeholder-[var(--steel)] focus:border-[var(--rust)] focus:outline-none transition-colors resize-none"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[var(--rust)] text-[var(--white)] py-3 md:py-4 text-[12px] md:text-[13px] tracking-[0.15em] transition-all hover:bg-[var(--rust-2)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-[2px]'}`}
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600 }}
                  >
                    {isSubmitting ? "SENDING..." : "SEND ENQUIRY →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}