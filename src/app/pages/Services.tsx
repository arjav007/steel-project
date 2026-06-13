import { Link, useLocation } from "react-router";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { Wrench, Building2, Container, Package, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import pharanaImg from "@/imports/Pharana.jpg";
import chainBlockImg from "@/imports/ChainBlock-1.jpg";
import hydraulicJackImg from "@/imports/HydraulicJack-1.jpg";
import orbitalWeldingImg from "@/imports/OrbitalWelding-1.jpg";
import plasmaCutterImg from "@/imports/PlasmaCutter-1.jpg";
import weldingMachinesImg from "@/imports/WeldingMachines-1.jpg";
import borescopeSetImg from "@/imports/BorescopeSet-1.jpg";
import skatingRollersImg from "@/imports/SkatingRollers-1.jpg";
import telescopicGridImg from "@/imports/TelescopicCrane.jpg";
import msSsFabricationImg from "@/imports/MS___SS_Fabrication-1.jpg";
import msSsFabricationImg2 from "@/imports/s3.jpg";
import processPipingImg from "@/imports/MS__SS___CS_PROCESS_PIPING_FABRICATION-1.jpg";
import processPipingImg2 from "@/imports/MS__SS___CS_PROCESS_PIPING_FABRICATION-2.jpg";
import structuralSteelImg from "@/imports/STRUCTURAL_STEEL_FABRICATION___ERECTION-1.jpg";
import structuralSteelImg2 from "@/imports/s2.jpg";
import heavyEquipmentImg from "@/imports/HEAVY_EQUIPMENT_ERECTION___INSTALLATION-1.jpg";
import pepsicoImg from "@/imports/PepsiCo_India_Holdings_Pvt_Ltd.png";

export function Services() {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting && !visibleSections.includes(index)) {
            setVisibleSections(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Handle hash navigation - trigger on location change
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, [location]);

  const [currentImageIndices, setCurrentImageIndices] = useState<{ [key: number]: number }>({});
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mouseStart, setMouseStart] = useState<number | null>(null);
  const [mouseEnd, setMouseEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (serviceIndex: number, totalImages: number) => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    const currentIndex = currentImageIndices[serviceIndex] || 0;

    if (isLeftSwipe && currentIndex < totalImages - 1) {
      setCurrentImageIndices(prev => ({ ...prev, [serviceIndex]: currentIndex + 1 }));
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentImageIndices(prev => ({ ...prev, [serviceIndex]: currentIndex - 1 }));
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setMouseEnd(null);
    setMouseStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setMouseEnd(e.clientX);
  };

  const onMouseUp = (serviceIndex: number, totalImages: number) => {
    if (!isDragging || !mouseStart || mouseEnd === null) {
      setIsDragging(false);
      return;
    }

    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    const currentIndex = currentImageIndices[serviceIndex] || 0;

    if (isLeftSwipe && currentIndex < totalImages - 1) {
      setCurrentImageIndices(prev => ({ ...prev, [serviceIndex]: currentIndex + 1 }));
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentImageIndices(prev => ({ ...prev, [serviceIndex]: currentIndex - 1 }));
    }

    setIsDragging(false);
  };

  const services = [
    {
      id: "process-piping",
      num: "01",
      tag: "PROCESS PIPING",
      title: "MS, SS & CS PROCESS PIPING FABRICATION",
      icon: Wrench,
      para1: "Our piping team handles the full range of SS, MS and jacketed pipeline systems — from hygienic dairy and beverage piping to high-pressure chemical lines. Orbital welding capability for pharmaceutical companies, food grade piping and all process piping fabrications.",
      para2: "Turnkey projects executed across beverage, pharmaceutical, and chemical facilities. Every weld documented, every material certified, every pressure test witnessed.",
      images: [
        { src: processPipingImg, tag: "Process Piping" },
        { src: processPipingImg2, tag: "SS Piping Installation" }
      ],
      features: [
        "MS, SS & CS Process Piping",
        "Process Piping Fabrication",
        "Jacket Piping",
        "SS Schedule Piping",
        "Utility Piping",
        "Orbital Welding"
      ]
    },
    {
      id: "structural-work",
      num: "02",
      tag: "STRUCTURAL WORK",
      title: "STRUCTURAL STEEL FABRICATION & ERECTION",
      icon: Building2,
      para1: "Industrial steel frameworks, equipment platforms, pipe racks, and complete plant structures. We've proven 4,700+ tonnes at a single site — from foundation bolt setting to final handover.",
      para2: "Using conventional steel fabrication and erection methods with beams, channels, and angles for strong industrial structures. Widely used in steel plants, sugar mills, and heavy engineering projects with efficient execution capabilities.",
      images: [
        { src: structuralSteelImg, tag: "Structural Fabrication" },
        { src: structuralSteelImg2, tag: "Steel Erection" }
      ],
      features: [
        "Industrial Plant Structures",
        "Equipment Platforms",
        "Pipe Rack Structures",
        "Mezzanine Floors",
      ]
    },
    {
      id: "tank-fabrication",
      num: "03",
      tag: "TANK FABRICATION",
      title: "MS & SS TANK FABRICATION",
      icon: Container,
      para1: "Custom mild steel and stainless steel storage tanks from 20 KL to 1,500 KL capacity. Built to specification for chemical storage, food-grade tanks, and water treatment.",
      para2: "Dimensional precision verified at every stage. Full documentation package including material certificates, NDT reports, and pressure test records.",
      images: [
        { src: msSsFabricationImg, tag: "Tank Fabrication" },
        { src: msSsFabricationImg2, tag: "SS Storage Tanks" }
      ],
      features: [
        "MS Tanks 20–1,500 KL",
        "SS Process Tanks",
        "Chemical Storage Vessels",
        "Food-Grade SS Tanks",
        "Vertical & Horizontal",
        "Jacketed Tanks"
      ]
    },
    {
      id: "equipment-erection",
      num: "04",
      tag: "HEAVY LIFTING",
      title: "HEAVY EQUIPMENT ERECTION & INSTALLATION",
      icon: Package,
      para1: "Precise lifting, shifting, and installation of heavy industrial equipment — pressure vessels, reactors, brewery fillers, and processing machinery.",
      para2: "A well-defined installation hierarchy is followed for safe equipment and machinery erection, covering material staging, lifting & rigging, alignment & fixing, and testing & commissioning to ensure reliable performance and smooth plant handover to the production team.",
      images: [
        { src: heavyEquipmentImg, tag: "Equipment Erection" }
      ],
      features: [
        "Equipment Lifting & Rigging",
        "Pressure Vessel Installation",
        "Filler Machine Erection",
        "Plant Commissioning"
      ]
    },
    {
      id: "turnkey-solutions",
      num: "05",
      tag: "TURNKEY SOLUTIONS",
      title: "TURNKEY SOLUTIONS",
      icon: Package,
      para1: "Complete end-to-end industrial execution — from planning and structural fabrication to piping, equipment erection, installation, testing, and commissioning. Delivered with single-point accountability, precision coordination, and on-site execution expertise across beverage, chemical, pharmaceutical, and process industries.",
      para2: "Single-point accountability from concept to commissioning. No sub-contracting of critical work — our teams handle structure, piping, and equipment in-house. Proven track record with PepsiCo, Bisleri, and international beverage plants.",
      images: [
        { src: pepsicoImg, tag: "Turnkey Project" }
      ],
      features: [
        "Full Plant Execution",
        "Process & Utility Integration",
        "Structural & Piping Coordination",
        "Equipment Installation & Commissioning"
      ]
    }
  ];

  return (
    <main className="pt-[68px]">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[3vw] py-12 md:py-24">
        <div className="mb-3">
          <div className="text-[9px] md:text-[10px] tracking-[0.3em] text-[var(--rust)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            OUR SERVICES
          </div>
        </div>

        <h1 className="text-[36px] md:text-[52px] lg:text-[64px] leading-tight tracking-[-0.01em] mb-4 md:mb-6" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600 }}>
          <span className="text-[var(--white)]">Industrial Solutions Built For </span>
          <span className="text-[var(--rust)]">Demanding Projects</span>
        </h1>

        <p className="text-[14px] md:text-[16px] max-w-[700px]" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
          From base structural steel to process piping to equipment, machinery and full plant comissioning — every stage, covered.
        </p>
      </section>

      {/* Service Rows */}
      {services.map((service, i) => {
        const IconComponent = service.icon;
        const isVisible = visibleSections.includes(i);

        return (
          <section
            key={i}
            id={service.id}
            ref={(el) => sectionRefs.current[i] = el}
            data-index={i}
            className={`${i % 2 === 0 ? 'bg-[var(--ink)]' : 'bg-[var(--ink-2)]'} py-12 md:py-24 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-[3vw] relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
              <div className="hidden lg:block lg:col-span-1">
                <div className="text-[56px] opacity-5" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, color: 'var(--white)' }}>
                  {service.num}
                </div>
              </div>

              <div className="lg:col-span-5">
                {/* Icon with animated border */}
                <div className="mb-6 inline-flex group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[var(--rust)] opacity-10 blur-xl transition-all duration-500 group-hover:opacity-20 group-hover:blur-2xl"></div>
                    <div className="relative w-16 h-16 md:w-20 md:h-20 border-2 border-[var(--line)] flex items-center justify-center transition-all duration-300 group-hover:border-[var(--rust)]">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:scale-110" style={{ color: 'var(--rust)' }} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                <div className="text-[9px] md:text-[10px] tracking-[0.2em] mb-3 md:mb-4" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--rust)' }}>
                  END-TO-END EXECUTION
                </div>
                <h2 className="text-[28px] md:text-[34px] lg:text-[38px] leading-tight mb-4 md:mb-6 group-hover:text-[var(--rust)] transition-colors duration-300" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500, color: 'var(--white)' }}>
                  {service.title}
                </h2>
                <p className="text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed mb-3 md:mb-4" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                  {service.para1}
                </p>
                <p className="text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                  {service.para2}
                </p>
              </div>

              <div className="lg:col-span-6">
                {/* Image Carousel with Tags */}
                <div
                  className="relative mb-6 md:mb-8 touch-pan-y cursor-grab active:cursor-grabbing select-none"
                  style={{ paddingBottom: '75%' }}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={() => onTouchEnd(i, service.images.length)}
                  onMouseDown={onMouseDown}
                  onMouseMove={onMouseMove}
                  onMouseUp={() => onMouseUp(i, service.images.length)}
                  onMouseLeave={() => setIsDragging(false)}
                >
                  {service.images.map((image, imgIndex) => {
                    const currentIndex = currentImageIndices[i] || 0;
                    const isActive = imgIndex === currentIndex;

                    return (
                      <div
                        key={imgIndex}
                        className={`absolute inset-0 group transition-opacity duration-500 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      >
                        <ImagePlaceholder label={image.tag} aspectRatio="4/3" src={image.src} />
                        <div className="absolute inset-0 bg-[var(--rust)] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--rust)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        {/* Corner Badge */}
                        <div className="absolute top-4 left-4 bg-[var(--rust)] bg-opacity-90 backdrop-blur-sm px-3 py-1.5 z-10">
                          <div className="text-[10px] tracking-[0.15em]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--white)' }}>
                            {image.tag.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Navigation Dots - Inside image at bottom */}
                  {service.images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-20">
                      {service.images.map((_, imgIndex) => {
                        const currentIndex = currentImageIndices[i] || 0;
                        const isActive = imgIndex === currentIndex;

                        return (
                          <button
                            key={imgIndex}
                            onClick={() => setCurrentImageIndices(prev => ({ ...prev, [i]: imgIndex }))}
                            className={`transition-all duration-300 ${
                              isActive
                                ? 'w-8 h-2 bg-[var(--rust)]'
                                : 'w-2 h-2 bg-[var(--white)] bg-opacity-50 hover:bg-opacity-80'
                            }`}
                            aria-label={`View image ${imgIndex + 1}`}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-2 md:gap-y-3">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2 group/feature">
                      <div className="w-2.5 h-[1px] bg-[var(--rust)] transition-all duration-300 group-hover/feature:w-4"></div>
                      <div className="text-[12px] md:text-[13px] transition-colors duration-300 group-hover/feature:text-[var(--white)]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--silver)' }}>
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Tools & Tackles */}
      <section className="bg-[var(--ink-2)] py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[3vw]">
          <div className="mb-10 md:mb-16">
            <div className="mb-3">
              <div className="text-[9px] md:text-[10px] tracking-[0.3em] text-[var(--rust)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                EQUIPMENT
              </div>
            </div>
            <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-tight tracking-[-0.01em] mb-3 md:mb-4" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500 }}>
              <span className="text-[var(--white)]">Tools, Tackles & </span>
              <span className="text-[var(--rust)]">Equipment</span>
            </h2>
            <p className="text-[14px] md:text-[15px]" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
              Fully equipped with industry-grade tools — no outsourcing, no delays.
            </p>
          </div>

          {/* Equipment Carousel */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mr-6 md:-mr-[3vw] pr-6">
              {[
                {
                  name: "Pharana",
                  category: "LIFTING & RIGGING",
                  capacity: "15 Tonnes",
                  specs: "Heavy-duty crane capacity",
                  image: pharanaImg
                },
                {
                  name: "Chain Blocks",
                  category: "LIFTING EQUIPMENT",
                  capacity: "1–10 Tonnes",
                  specs: "Variable capacity range",
                  image: chainBlockImg
                },
                {
                  name: "Hydraulic Jacks",
                  category: "LIFTING & POSITIONING",
                  capacity: "2–10 Tonnes",
                  specs: "Bottle & floor jacks",
                  image: hydraulicJackImg
                },
                {
                  name: "Orbital Welding",
                  category: "PRECISION WELDING",
                  capacity: "Automated",
                  specs: "High-precision joints",
                  image: orbitalWeldingImg
                },
                {
                  name: "Plasma Cutter",
                  category: "CUTTING & FABRICATION",
                  capacity: "Industrial Grade",
                  specs: "Precision metal cutting",
                  image: plasmaCutterImg
                },
                {
                  name: "Welding Machines",
                  category: "FABRICATION",
                  capacity: "Inverter & Rectifier",
                  specs: "Multi-process capable",
                  image: weldingMachinesImg
                },
                {
                  name: "Borescope Set",
                  category: "INSPECTION & TESTING",
                  capacity: "Up to 3m",
                  specs: "Internal inspection tool",
                  image: borescopeSetImg
                },
                {
                  name: "Skating Rollers",
                  category: "MATERIAL HANDLING",
                  capacity: "Heavy Equipment",
                  specs: "Smooth transportation",
                  image: skatingRollersImg
                },
                {
                  name: "Telescopic Crawler Crane",
                  category: "LIFTING & RIGGING",
                  capacity: "Heavy Duty",
                  specs: "Mobile crawler crane",
                  image: telescopicGridImg
                }
              ].map((equipment, i) => (
                <div key={i} className="min-w-[280px] md:min-w-[340px] snap-start group">
                  <div className="bg-[var(--ink)] border border-[var(--line)] overflow-hidden transition-all duration-300 hover:border-[var(--rust)] hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img src={equipment.image} alt={equipment.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent"></div>
                      <div className="absolute top-3 right-3 px-3 py-1 bg-[var(--rust)] text-[9px] tracking-[0.2em]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--white)' }}>
                        {equipment.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      <h3 className="text-[20px] md:text-[22px] mb-3 transition-colors duration-300 group-hover:text-[var(--rust)]" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500, color: 'var(--white)' }}>
                        {equipment.name}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between pb-2 border-b border-[var(--line)]">
                          <span className="text-[11px] tracking-[0.1em]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>CAPACITY</span>
                          <span className="text-[13px]" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, color: 'var(--chalk)' }}>{equipment.capacity}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] tracking-[0.1em]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>SPECS</span>
                          <span className="text-[13px]" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, color: 'var(--chalk)' }}>{equipment.specs}</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[var(--line)]">
                        <div className="flex items-center gap-2 text-[11px] transition-colors duration-300 group-hover:text-[var(--rust)]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
                          <div className="w-8 h-[1px] bg-[var(--rust)] transition-all duration-300 group-hover:w-12"></div>
                          <span>AVAILABLE ON-SITE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-2 mt-6 justify-center md:justify-end">
              <div className="text-[11px] tracking-[0.2em]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
                SCROLL FOR MORE →
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24">
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-[3vw] text-center">
          <h4 className="text-[42px] md:text-[54px] lg:text-[64px] leading-tight tracking-[-0.01em] mb-4 md:mb-6" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600 }}>
            <span className="text-[var(--white)]">Looking For a Specialist </span>
            <span className="text-[var(--rust)]">Contractor?</span>
          </h4>
          <p className="text-[14px] md:text-[15px] mb-6 md:mb-8" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
            Share your project requirements and our team will respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-[var(--rust)] text-[var(--white)] text-[13px] tracking-wide transition-all hover:bg-[var(--rust-2)] hover:-translate-y-[2px]"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
          >
            REQUEST A QUOTE →
          </Link>
        </div>
      </section>
    </main>
  );
}