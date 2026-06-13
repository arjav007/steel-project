import { Link } from "react-router";
import { Phone, Mail, MapPin, Award } from "lucide-react";
import HiTechEngineeringLogo from "../../imports/HiTechEngineeringLogo2/HiTechEngineeringLogo2";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] border-t border-[var(--line)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-[3vw] py-10 md:py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="h-10 w-[160px] mb-4">
              <HiTechEngineeringLogo />
            </div>
            <p className="text-[13px] leading-relaxed mb-4" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
              Precision industrial engineering contractor specializing in SS & MS fabrication, structural steel, and heavy equipment erection.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4" style={{ color: 'var(--rust)' }} strokeWidth={1.5} />
              <div className="text-[11px] tracking-[0.1em]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--silver)' }}>
                OSHA CERTIFIED
              </div>
            </div>
            <div className="text-[11px]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
              GST: 27CPNPM3508P3Z5<br/>
              IEC: CPNPM3508P
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] mb-4 relative inline-block" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, color: 'var(--rust)' }}>
              SERVICES
              <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[var(--rust)] -mb-2"></div>
            </h4>
            <div className="flex flex-col gap-2 mt-4">
              <Link to="/services#process-piping" className="text-[13px] text-[var(--silver)] hover:text-[var(--rust)] transition-colors flex items-center gap-2 group" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <div className="w-1.5 h-[1px] bg-[var(--rust)] transition-all duration-300 group-hover:w-3"></div>
                Process Piping
              </Link>
              <Link to="/services#structural-work" className="text-[13px] text-[var(--silver)] hover:text-[var(--rust)] transition-colors flex items-center gap-2 group" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <div className="w-1.5 h-[1px] bg-[var(--rust)] transition-all duration-300 group-hover:w-3"></div>
                Structural Fabrication
              </Link>
              <Link to="/services#tank-fabrication" className="text-[13px] text-[var(--silver)] hover:text-[var(--rust)] transition-colors flex items-center gap-2 group" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <div className="w-1.5 h-[1px] bg-[var(--rust)] transition-all duration-300 group-hover:w-3"></div>
                Tank Fabrication
              </Link>
              <Link to="/services#equipment-erection" className="text-[13px] text-[var(--silver)] hover:text-[var(--rust)] transition-colors flex items-center gap-2 group" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <div className="w-1.5 h-[1px] bg-[var(--rust)] transition-all duration-300 group-hover:w-3"></div>
                Heavy Erection
              </Link>
              <Link to="/services#turnkey-solutions" className="text-[13px] text-[var(--silver)] hover:text-[var(--rust)] transition-colors flex items-center gap-2 group" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <div className="w-1.5 h-[1px] bg-[var(--rust)] transition-all duration-300 group-hover:w-3"></div>
                Turnkey Solutions
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] mb-4 relative inline-block" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, color: 'var(--rust)' }}>
              COMPANY
              <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[var(--rust)] -mb-2"></div>
            </h4>
            <div className="flex flex-col gap-2 mt-4">
              <Link to="/about" className="text-[13px] text-[var(--silver)] hover:text-[var(--rust)] transition-colors flex items-center gap-2 group" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <div className="w-1.5 h-[1px] bg-[var(--rust)] transition-all duration-300 group-hover:w-3"></div>
                About Us
              </Link>
              <Link to="/about#safety" className="text-[13px] text-[var(--silver)] hover:text-[var(--rust)] transition-colors flex items-center gap-2 group" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <div className="w-1.5 h-[1px] bg-[var(--rust)] transition-all duration-300 group-hover:w-3"></div>
                Safety Standards
              </Link>
              <Link to="/projects" className="text-[13px] text-[var(--silver)] hover:text-[var(--rust)] transition-colors flex items-center gap-2 group" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <div className="w-1.5 h-[1px] bg-[var(--rust)] transition-all duration-300 group-hover:w-3"></div>
                Projects
              </Link>
              <Link to="/contact" className="text-[13px] text-[var(--silver)] hover:text-[var(--rust)] transition-colors flex items-center gap-2 group" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <div className="w-1.5 h-[1px] bg-[var(--rust)] transition-all duration-300 group-hover:w-3"></div>
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] mb-4 relative inline-block" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, color: 'var(--rust)' }}>
              CONTACT
              <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[var(--rust)] -mb-2"></div>
            </h4>
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 transition-colors group-hover:text-[var(--rust)]" style={{ color: 'var(--silver)' }} strokeWidth={1.5} />
                <div>
                  <a href="tel:+919011141833" className="text-[13px] text-[var(--silver)] hover:text-[var(--rust)] transition-colors block" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    +91 90494 42141
                  </a>
                  <a href="tel:+919921842662" className="text-[13px] text-[var(--silver)] hover:text-[var(--rust)] transition-colors block" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    +91 98224 90695
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 transition-colors group-hover:text-[var(--rust)]" style={{ color: 'var(--silver)' }} strokeWidth={1.5} />
                <a href="mailto:hitechengineerings2020@gmail.com" className="text-[13px] text-[var(--silver)] hover:text-[var(--rust)] transition-colors break-all" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                 techengineerings1@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 transition-colors group-hover:text-[var(--rust)]" style={{ color: 'var(--silver)' }} strokeWidth={1.5} />
                <div className="text-[13px] leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--silver)' }}>
                  Maharashtra, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with accent */}
        <div className="relative mb-6">
          
          
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-5 border-t border-[var(--line)] flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-[11px]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
            © {new Date().getFullYear()} Hi Tech Engineerings. All rights reserved.
          </div>
          <div className="text-[11px] tracking-[0.1em] text-center md:text-right italic" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
            "We never dreamed about success. We worked for it."
          </div>
        </div>
      </div>
    </footer>
  );
}