import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { Ticker } from "../components/Ticker";
import { Droplet, Factory, Package } from "lucide-react";
import teamPhoto from "@/imports/Team.jpeg";
import homePageImg from "@/imports/HomePage-1.jpg";
import processPipingImg from "@/imports/MS__SS___CS_PROCESS_PIPING_FABRICATION-1.jpg";
import structuralSteelImg from "@/imports/STRUCTURAL_STEEL_FABRICATION___ERECTION-1.jpg";
import msSsFabricationImg from "@/imports/MS___SS_Fabrication-1.jpg";
import heavyEquipmentImg from "@/imports/HEAVY_EQUIPMENT_ERECTION___INSTALLATION-1.jpg";
import spectrumImg from "@/imports/Spectrum-1.jpg";
import pepsicoImg from "@/imports/PepsiCo_India_Holdings_Pvt_Ltd.png";
import mangalamSF1Img from "@/imports/MangalamSF-3.jpg";
import frigorificoImg from "@/imports/Frigorifico_Allana_Pvt_Ltd-1.jpg";
import spectrumLogo from "@/imports/Frame5/60690990eb18738c9d36b8e989bd4edde4aa9cc9.png";
import mangalamLogo from "@/imports/Frame7/18e73bfef62e0474fc356b7c8888f6fa2f395a6a.png";
import frigorificoLogo from "@/imports/Frame9/bf312d9f7937fc8c17ca0a063264aa4c93bce0c3.png";

export function Home() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateNumbers = () => {
    const targets = [24, 30, 10, 150, 10];
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(targets.map(target => Math.floor(target * easeProgress)));

      if (step >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, increment);
  };

  return (
    <main className="pt-[68px]">
      {/* Hero Section */}
      <section className="relative h-[875px] md:min-h-screen overflow-hidden">
        <div className="absolute h-full md:h-[70vh] left-0 top-0 w-full overflow-hidden">
          <img src={homePageImg} alt="Industrial crane erection at golden hour" loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 75%' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,13,16,0.4)] via-[rgba(5,6,7,0.3)] via-25% via-[rgba(2,2,2,0.2)] via-50% via-[rgba(0,0,0,0.1)] via-75% to-transparent"></div>
        </div>

        <div className="absolute h-[875px] md:inset-0 left-0 top-0 w-full bg-gradient-to-t from-[#0c0d10] to-[rgba(12,13,16,0.2)] via-[40%] via-[rgba(12,13,16,0.98)]"></div>

        <div className="absolute bottom-0 left-0 right-0 pb-20 md:pb-28 z-10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-[3vw]">
            <div className="mb-6 md:mb-8">
              <div className="inline-block px-4 py-2 bg-[var(--ink)]/90 backdrop-blur-sm border border-[var(--rust)]/30 text-[8px] md:text-[10px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--rust-2)' }}>
                SPECIALIST INDUSTRIAL CONTRACTOR · EST. 2002
              </div>
            </div>

            <h1 className="text-[48px] md:text-[80px] lg:text-[120px] leading-[0.9] tracking-[-0.02em] mb-8 md:mb-12" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600 }}>
              <div className="text-[var(--white)]">Built to Last.</div>
              <div className="text-[var(--rust)]">Engineered Right.</div>
            </h1>

            <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-12 mb-8 md:mb-12">
              <p className="text-[14px] md:text-[15px] leading-relaxed max-w-[420px]" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                From precision SS & MS pipeline systems to large-scale structural fabrication and heavy equipment erection — delivered on time, within budget, and to the most demanding safety standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="px-6 md:px-8 py-3 md:py-4 bg-[var(--rust)] text-[var(--white)] text-[11px] md:text-[12px] tracking-wide transition-all hover:bg-[var(--rust-2)] hover:-translate-y-[2px] text-center"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
                >
                  REQUEST A QUOTE →
                </Link>
                <Link
                  to="/services"
                  className="px-6 md:px-8 py-3 md:py-4 border border-[rgba(255,255,255,0.2)] text-[var(--chalk)] text-[11px] md:text-[12px] tracking-wide transition-all hover:border-[rgba(255,255,255,0.4)] text-center"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
                >
                  OUR SERVICES
                </Link>
              </div>
            </div>

            <div ref={statsRef} className="border-t border-[var(--line)] pt-6 md:pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
              {[
                { number: "24+", label: "YEARS OF EXCELLENCE", suffix: "+" },
                { number: "30+", label: "MARQUEE CLIENTS", suffix: "+" },
                { number: "₹10CR", label: "ANNUAL TURNOVER", prefix: "₹", suffix: "CR" },
                { number: "150+", label: "SKILLED & UNSKILLED PROFESSIONALS", suffix: "+" },
                { number: "10", label: "COUNTRIES SERVED", suffix: "" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 md:gap-2">
                  <div className="text-[28px] md:text-[36px] lg:text-[44px] text-[var(--white)]" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600 }}>
                    {stat.prefix || ""}{counts[i]}{stat.suffix}
                  </div>
                  <div className="text-[9px] md:text-[10px] lg:text-[11px] tracking-[0.15em] text-[var(--steel)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
          </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Company Introduction */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[3vw] py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div className="relative">
            <ImagePlaceholder label="Hi-Tech Engineering team on site" aspectRatio="4/3" src={teamPhoto} />
            <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-[var(--rust)] -z-10"></div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-3">
              <div className="text-[9px] md:text-[10px] tracking-[0.3em] text-[var(--rust)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                WHO WE ARE
              </div>
            </div>

            <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-tight tracking-[-0.01em] mb-4 md:mb-6" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, color: 'var(--white)' }}>
              PRECISION ENGINEERING. NO COMPROMISES.
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-[15px] leading-[1.9]" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                Founded in 2002 on a belief that industrial projects deserve better planning, execution, and accountability. We are a purpose-built engineering company with the people, processes, and track record to deliver your most demanding projects.
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                From structural base column fabrication and erection to equipments and machineraries poistioning and their respective piping— across India, Nepal, Bhutan, Dubai, Sri Lanka, and African countries. Quality is non-negotiable.
              </p>
            </div>

            <Link
              to="/about"
              className="text-[13px] text-[var(--rust)] hover:text-[var(--white)] transition-colors inline-flex items-center gap-2"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
            >
              READ OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[var(--ink-2)] py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[3vw]">
          <div className="mb-10 md:mb-16">
            <div className="mb-3">
              <div className="text-[9px] md:text-[10px] tracking-[0.3em] text-[var(--rust)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                ENGINEERING IN ACTION
              </div>
            </div>
            <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-tight tracking-[-0.01em] mb-3 md:mb-4" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500 }}>
              <span className="text-[var(--white)]">What We </span>
              <span className="text-[var(--rust)]">Build</span>
            </h2>
            <p className="text-[14px] md:text-[15px]" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
              Specialist services across the full industrial project lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[var(--line)]">
            {[
              {
                id: "process-piping",
                tag: "PROCESS PIPING",
                title: "MS, SS & CS PROCESS PIPING FABRICATION",
                description: "Full range of SS, MS and jacketed pipeline systems — from hygienic dairy and beverage piping to high-pressure chemical lines. Orbital welding capability for pharmaceutical companies.",
                image: "Service / SS & MS Process Piping",
                src: processPipingImg
              },
              {
                id: "structural-work",
                tag: "STRUCTURAL WORK",
                title: "STRUCTURAL STEEL FABRICATION & ERECTION",
                description: "Industrial steel frameworks, equipment platforms, pipe racks, and complete plant structures. 4,700+ tonnes proven at a single site — from foundation bolt setting to final handover.",
                image: "Service / Structural Steel",
                src: structuralSteelImg
              },
              {
                id: "tank-fabrication",
                tag: "TANK FABRICATION",
                title: "MS & SS TANK FABRICATION",
                description: "Custom mild steel and stainless steel storage tanks from 20 KL to 1,500 KL capacity. Built to specification for chemical storage, food-grade tanks, and water treatment.",
                image: "Service / Tank Fabrication",
                src: msSsFabricationImg
              },
              {
                id: "equipment-erection",
                tag: "HEAVY LIFTING",
                title: "HEAVY EQUIPMENT ERECTION & INSTALLATION",
                description: "Precise lifting, shifting, and installation of heavy industrial equipment — pressure vessels, reactors, brewery fillers, and processing machinery.",
                image: "Service / Equipment Erection",
                src: heavyEquipmentImg
              },
              {
                id: "turnkey-solutions",
                tag: "TURNKEY SOLUTIONS",
                title: "TURNKEY SOLUTIONS",
                description: "Complete end-to-end industrial execution — from planning and structural fabrication to piping, equipment erection, installation, testing, and commissioning. Single-point accountability.",
                image: "Service / Turnkey Solutions",
                src: pepsicoImg
              }
            ].map((service, i) => (
              <Link key={i} to={`/services#${service.id}`} className="group border-b md:border-r border-[var(--line)] md:last:border-r-0 p-6 md:p-8 transition-all duration-300 hover:bg-[var(--ink-3)] hover:border-[var(--rust)] hover:-translate-y-1 relative overflow-hidden block">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--rust)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-4 md:mb-6 overflow-hidden">
                    <ImagePlaceholder label={service.image} aspectRatio="16/9" className="group-hover:scale-105 transition-transform duration-500" src={service.src} />
                  </div>
                  <div className="text-[9px] md:text-[10px] tracking-[0.2em] mb-2 md:mb-3" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--rust)' }}>
                    {service.tag}
                  </div>
                  <h3 className="text-[18px] md:text-[20px] lg:text-[22px] leading-tight mb-3 md:mb-4" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500, color: 'var(--white)' }}>
                    {service.title}
                  </h3>
                  <p className="text-[12px] md:text-[13px] leading-relaxed mb-3 md:mb-4" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
                    {service.description}
                  </p>
                  <div className="text-[13px] text-[var(--rust)] group-hover:text-[var(--white)] transition-colors duration-300" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    VIEW SERVICE →
                  </div>
                </div>
              </Link>
            ))}

            <div className="border-b border-[var(--line)] p-6 md:p-8 bg-[var(--rust)] flex flex-col items-center justify-center text-center">
              <div className="text-[11px] md:text-[13px] tracking-[0.2em] mb-3 md:mb-4 opacity-70" style={{ fontFamily: 'var(--font-fraunces)', color: 'var(--white)' }}>
                HAVE A PROJECT?
              </div>
              <h3 className="text-[24px] md:text-[30px] lg:text-[34px] leading-tight mb-4 md:mb-6" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500, color: 'var(--white)' }}>
                LET'S TALK ABOUT IT.
              </h3>
              <Link
                to="/contact"
                className="px-6 py-3 border border-[var(--white)] text-[var(--white)] text-[12px] tracking-wide hover:bg-[var(--white)] hover:text-[var(--rust)] transition-all"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                GET A QUOTE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[3vw] py-8 md:py-16">
        <div className="mb-8 md:mb-12">
          <div className="mb-3">
            <div className="text-[10px] tracking-[0.3em] text-[var(--rust)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              WHAT SETS UP APART
            </div>
          </div>
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-tight tracking-[-0.01em]" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500 }}>
            <span className="text-[var(--white)]">The Difference Is </span>
            <span className="text-[var(--rust)]">Discipline</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            {
              num: "01",
              title: "QUALIFIED ENGINEERING CORE",
              desc: "Our team combines certified engineers with highly skilled field operatives. Every project has technical ownership from planning to handover."
            },
            {
              num: "02",
              title: "ON-TIME, ON-BUDGET DELIVERY",
              desc: "We plan rigorously and execute with discipline. Dedicated project teams are accountable for timelines and cost targets."
            },
            {
              num: "03",
              title: "OSHA-COMPLIANT SAFETY CULTURE",
              desc: "Daily job hazard analysis, trained personnel, and a proprietary safety programme that rewards safe behaviour."
            },
            {
              num: "04",
              title: "CROSS-INDUSTRY PROVEN TRACK RECORD",
              desc: "From pharmaceutical-grade piping to 1,500 KL tank fabrication for refineries — across multiple countries."
            },
            {
              num: "05",
              title: "SINGLE-SOURCE PROJECT PARTNER",
              desc: "Fabrication, erection, commissioning, manpower — we cover the full lifecycle."
            },
            {
              num: "06",
              title: "EXPERT CONSULTANT NETWORK",
              desc: "Backed by specialist freelance consultants for niche technical requirements."
            }
          ].map((item, i) => (
            <div key={i} className="group bg-[var(--ink)] border border-[var(--line)] p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:border-[var(--rust)] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--rust)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 text-[80px] md:text-[100px] opacity-[0.03] leading-none" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, color: 'var(--white)' }}>
                {item.num}
              </div>
              <div className="relative z-10">
                <h3 className="text-[18px] md:text-[20px] mb-3 leading-tight" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, color: 'var(--white)' }}>
                  {item.title}
                </h3>
                <p className="text-[13px] md:text-[14px] leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Portfolio */}
      <section className="bg-[var(--ink-2)] py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[3vw]">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="mb-3">
                <div className="text-[10px] tracking-[0.3em] text-[var(--rust)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  LATEST PROJECTS
                </div>
              </div>
              <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-tight tracking-[-0.01em] mb-3 md:mb-4" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500 }}>
                <span className="text-[var(--white)]">Recent </span>
                <span className="text-[var(--rust)]">Deliveries</span>
              </h2>
              <p className="text-[14px] md:text-[15px]" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                Real projects. Real results. Delivered across India, Nepal, and Bhutan.
              </p>
            </div>
            
            <Link 
              to="/projects" 
              className="hidden md:flex px-6 md:px-8 py-3 md:py-4 bg-[var(--rust)] text-[var(--white)] text-[12px] md:text-[13px] tracking-wide transition-all hover:bg-[var(--rust-2)] hover:-translate-y-[2px] text-center items-center justify-center"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
            >
              VIEW ALL PROJECTS →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {[
              {
                client: "Spectrum Ethers Ltd",
                category: "Beverage",
                scope: "SS & MS Piping",
                capacity: "50000 Inch Mtr & above",
                icon: Droplet,
                image: spectrumImg
              },
              {
                client: "Mangalam Organics Ltd",
                category: "Chemical",
                scope: "Structural Fabrication & Erection",
                capacity: "4700 Ton & above",
                icon: Factory,
                image: mangalamSF1Img
              },
              {
                client: "Frigorifico Allana Pvt Ltd",
                category: "Dairy & Food",
                scope: "Structure, Pipeline & Equipment Erection",
                capacity: "400 TPD Project",
                icon: Package,
                image: frigorificoImg
              }
            ].map((project, i) => {
              const Icon = project.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-[var(--ink)] border border-[var(--line)] hover:border-[var(--rust)] transition-all duration-500 overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-[240px] overflow-hidden">
                    <ImagePlaceholder
                      label={project.client}
                      aspectRatio="16/10"
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-80"></div>
                    <div className="absolute inset-0 bg-[var(--rust)] transition-opacity duration-700 opacity-0 group-hover:opacity-10"></div>

                    {/* Logo Overlays */}
                    {i === 0 && (
                      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none">
                        <img src={spectrumLogo} alt="Spectrum Logo" className="w-52 md:w-60 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}
                    {i === 1 && (
                      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none">
                        <img src={mangalamLogo} alt="Mangalam Organics Logo" className="w-52 md:w-60 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}
                    {i === 2 && (
                      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none">
                        <img src={frigorificoLogo} alt="Frigorifico Allana Logo" className="w-36 md:w-44 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-[var(--rust)] bg-opacity-90 backdrop-blur-sm px-3 py-1.5">
                      <div className="text-[10px] tracking-[0.15em]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--white)' }}>
                        {project.category.toUpperCase()}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 border-2 border-[var(--rust)] bg-[var(--ink)] bg-opacity-80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon className="w-6 h-6" style={{ color: 'var(--rust)' }} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-[18px] md:text-[20px] leading-tight mb-3 group-hover:text-[var(--rust)] transition-colors duration-300" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, color: 'var(--white)' }}>
                      {project.client}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[var(--rust)] rounded-full mt-2"></div>
                        <div>
                          <div className="text-[10px] tracking-wider opacity-50 mb-0.5" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>SCOPE</div>
                          <div className="text-[13px] leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                            {project.scope}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[var(--rust)] rounded-full mt-2"></div>
                        <div>
                          <div className="text-[10px] tracking-wider opacity-50 mb-0.5" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>CAPACITY</div>
                          <div className="text-[20px]" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500, color: 'var(--rust)' }}>
                            {project.capacity}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover indicator */}
                    <div className="h-[2px] bg-[var(--rust)] transition-all duration-500 w-0 group-hover:w-full"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile button - shows below cards */}
          <div className="md:hidden flex">
            <Link 
              to="/projects" 
              className="px-6 py-3 bg-[var(--rust)] text-[var(--white)] text-[12px] tracking-wide transition-all hover:bg-[var(--rust-2)] hover:-translate-y-[2px] text-center"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
            >
              VIEW ALL PROJECTS →
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Band */}
      <section className="bg-[var(--rust)] py-10 md:py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[3vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <div>
              <div className="text-[10px] md:text-[11px] tracking-[0.3em] mb-3 opacity-60" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--white)' }}>
                SAFETY FIRST
              </div>
              <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-tight mb-4 md:mb-6" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500 }}>
                <span style={{ color: 'var(--white)' }}>Every Job. Every Day. </span>
                <span style={{ color: 'var(--ink)' }}>Zero Shortcuts.</span>
              </h2>
              <p className="text-[14px] md:text-[15px] leading-relaxed opacity-75" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--white)' }}>
                Safety is not a checkbox. It's a culture we build into every project, every site, and every team member.
              </p>
            </div>

            <div className="divide-y divide-[rgba(255,255,255,0.15)]">
              {[
                { num: "01", title: "DAILY HAZARD ANALYSIS", desc: "Job-specific risk assessment before work begins" },
                { num: "02", title: "TRAINED WORKFORCE", desc: "Certified personnel with ongoing safety training" },
                { num: "03", title: "OSHA COMPLIANCE", desc: "International safety standards, locally enforced" },
                { num: "04", title: "SAFETY INCENTIVES", desc: "Rewards programme for exemplary safety behaviour" },
                { num: "05", title: "ENVIRONMENTAL RESPONSIBILITY", desc: "Minimizing impact, maximizing accountability" }
              ].map((item, i) => (
                <div key={i} className="py-3 md:py-4 grid grid-cols-12 gap-3 md:gap-4">
                  <div className="col-span-3 md:col-span-2 text-[20px] md:text-[24px]" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, color: 'var(--white)' }}>
                    {item.num}
                  </div>
                  <div className="col-span-9 md:col-span-10">
                    <div className="text-[13px] md:text-[15px] mb-1" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, color: 'var(--white)' }}>
                      {item.title}
                    </div>
                    <div className="text-[12px] md:text-[13px] opacity-75" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--white)' }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-[var(--ink-2)] py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[3vw]">
          <div className="mb-8 md:mb-12">
            <div className="mb-3">
              <div className="text-[10px] tracking-[0.3em] text-[var(--rust)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                OUR CLIENTS
              </div>
            </div>
            <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-tight tracking-[-0.01em]" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500 }}>
              <span className="text-[var(--white)]">Trusted By </span>
              <span className="text-[var(--rust)]">Industry Leaders</span>
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                category: "BEVERAGE",
                clients: ["Parle International", "PepsiCo India", "Coca-Cola Southwest", "Bisleri International", "Repute Engineers", "Railneer", "Life Food & Beverage (Nepal)", "Ice Beverage (Bhutan)"]
              },
              {
                category: "CHEMICAL",
                clients: ["Mangalam Organics", "Privi Organics", "Spectrum Ethers", "Silicone International Products", "CavinKare India", "Birla Carbon", "Royal Carbon Black", "Aditya Birla Cement"]
              },
              {
                category: "DAIRY, SNACKS & BAKERY",
                clients: ["Prabhat Dairy (Mother Dairy)", "Mahananda Dairy", "Shree Krishna Milk Dairy", "PepsiCo Kurkure", "Priya Gold", "Tiffany Foods", "Dairy Classic"]
              },
              {
                category: "PHARMA, REFINERY & BREWERY",
                clients: ["Cipla Ltd", "Tata Chemicals", "Frigorifico Allana", "Ghodawat Foods", "United Breweries", "SABMiller India", "Yeti Brewery (Nepal)"]
              }
            ].map((group, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[10px] tracking-[0.2em] text-[var(--steel)] min-w-[180px]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {group.category}
                  </div>
                  <div className="flex-1 h-[1px] bg-[var(--line)]"></div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.clients.map((client, j) => (
                    <div key={j} className="px-4 py-2 border border-[var(--line)] text-[13px] text-[var(--silver)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,67,15,0.12),transparent_70%)]"></div>
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-[3vw] text-center">
          <h2 className="text-[42px] md:text-[60px] lg:text-[80px] leading-tight tracking-[-0.01em] mb-4 md:mb-6" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500 }}>
            <div className="text-[var(--white)]">Ready to Build</div>
            <div className="text-[var(--rust)]">Something Lasting?</div>
          </h2>
          <p className="text-[14px] md:text-[15px] mb-6 md:mb-8 max-w-[600px] mx-auto" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
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