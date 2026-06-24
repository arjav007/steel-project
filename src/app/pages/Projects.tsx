import { useState } from "react";
import { Link } from "react-router";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { Factory, Droplet, Beer, Flame, Package } from "lucide-react";
import iceBeveragesImg from "@/imports/Ice_Beverages-1.jpg";
import pepsicoImg from "@/imports/PepsiCo_India_Holdings_Pvt_Ltd.png";
import yetiBreweryImg from "@/imports/YetiBrewery-1.jpg";
import lifeFoodImg from "@/imports/Life_Food___Beverage_Pvt_Ltd__Nepal_-1.jpg";
import frigorificoImg from "@/imports/Frigorifico_Allana_Pvt_Ltd-1.jpg";
import sipaIndiaImg from "@/imports/Sipa_India-1.jpg";
import puresurelogo from "@/imports/pure-sure.jpg";
import bisleri1Img from "@/imports/bisleri-new.jpg";
import structuralSteelImg from "@/imports/STRUCTURAL_STEEL_FABRICATION___ERECTION-1.jpg";
import processPipingImg from "@/imports/MS__SS___CS_PROCESS_PIPING_FABRICATION-1.jpg";
import reputeEngineeringsImg from "@/imports/Repute_Engineerings-1.jpg";
import spectrumImg from "@/imports/Spectrum-1.jpg";
import raviDyewareImg from "@/imports/ravi.jpg";
import priviSpecialityImg from "@/imports/PriviSpeciality-1.jpg";
import pepsicoLogo from "@/imports/Frame2-1/0d3328b2f8456d5c6d7e12880ddc7fc0b8a815ac.png";
import priviLogo from "@/imports/Frame13/74f1491ec71c61204b016d091651cb04528a985c.png";
import Surelogo from "@/imports/Sure-logo.jpg";
import Bislerilogo from "@/imports/Frame3/bisleri-logo.png";
import yetiBreweryLogo from "@/imports/Frame4-1/67f69dfa0b8d4a4adf9796ced9cd8565a19b0441.png";
import spectrumLogo from "@/imports/Frame5/60690990eb18738c9d36b8e989bd4edde4aa9cc9.png";
import reputeLogo from "@/imports/Frame6/ac17534b7d89606bd9802b81066a3ac60812dafa.png";
import mangalamLogo from "@/imports/Frame7/18e73bfef62e0474fc356b7c8888f6fa2f395a6a.png";
import sipaLogo from "@/imports/Frame8/c8d873323bafe808490bc9a6389edaddf695ba87.png";
import frigorificoLogo from "@/imports/Frame9/bf312d9f7937fc8c17ca0a063264aa4c93bce0c3.png";
import lifeFoodLogo from "@/imports/Frame10/f96382435edfbaf75e7af34dce8f6198c68072b4.png";
import iceBeveragesLogo from "@/imports/Frame11/3dcfec3c84826ba96ecf658cf14e50c661c3364d.png";
import raviDyewareLogo from "@/imports/Frame12/760161393303624ad1cbebc3274bdc916e69f544.png";

const projects = [
  {
    id: 1,
    client: "PepsiCo India Holdings Pvt Ltd",
    category: "Beverage",
    scope: "Full Turnkey Project, Structure Pipeline and Heavy Equipments Erection",
    capacity: "Full Turnkey Solution",
    icon: Droplet,
    image: pepsicoImg
  },
  {
    id: 2,
    client: "Spectrum Ethers Ltd",
    category: "Chemical & Fertilizer",
    scope: "SS & MS Piping",
    capacity: "50000 Inch Mtr & above",
    icon: Factory,
    image: spectrumImg
  },
  {
    id: 3,
    client: "Repute Engineerings",
    category: "Beverage & Dairy",
    scope: "SS Process Piping",
    capacity: "18000 Inch Mtr",
    icon: Droplet,
    image: reputeEngineeringsImg
  },
  {
    id: 4,
    client: "Mangalam Organics Ltd",
    category: "Chemical",
    scope: "Structural Fabrication & Erection,CS & SS Piping,Equipment Erection",
    capacity: "Full Turnkey Solution",
    icon: Factory,
    image: structuralSteelImg
  },
  {
    id: 5,
    client: "Sure and Pure Agro Packaging Ltd.",
    category: "Beverage",
    scope: "SS & MS Piping",
    capacity: "Full Turnkey Solution",
    icon: Droplet,
    image: puresurelogo
  },
  {
    id: 6,
    client: "Bisleri International Pvt Ltd",
    category: "Beverage",
    scope: "Equipment Erection",
    capacity: "Full Turnkey Solution",
    icon: Droplet,
    image: bisleri1Img
  },
  {
    id: 7,
    client: "Sipa India Pvt Ltd",
    category: "Beverage",
    scope: "Equipment Erection",
    capacity: "240 Ton",
    icon: Droplet,
    image: sipaIndiaImg
  },
  {
    id: 8,
    client: "Frigorifico Allana Pvt Ltd",
    category: "Refinery Oil",
    scope: "Structure, Pipeline & Equipment Erection",
    capacity: "400 TPD Project",
    icon: Flame,
    image: frigorificoImg
  },
  {
    id: 9,
    client: "Life Food & Beverage Pvt Ltd (Nepal)",
    category: "Beverage",
    scope: "Hot & Cold Fill Filler Installation with Process and Utility Piping and Structure",
    capacity: "Full Turnkey Solution",
    icon: Droplet,
    image: lifeFoodImg
  },
  {
    id: 10,
    client: "Yeti Brewery Pvt Ltd (Nepal)",
    category: "Brewery",
    scope: "Full Turnkey Project, Structure Pipeline and Heavy Equipments Erection",
    capacity: "Full Turnkey Solution",
    icon: Beer,
    image: yetiBreweryImg
  },
  {
    id: 11,
    client: "Ice Beverages Pvt Ltd (Bhutan)",
    category: "Beverage",
    scope: "Full Turnkey Project, Structure Pipeline and Heavy Equipments Erection",
    capacity: "Full Turnkey Solution",
    icon: Droplet,
    image: iceBeveragesImg
  },
  {
    id: 12,
    client: "Ravi Dyeware Company Pvt Ltd",
    category: "Chemical",
    scope: "Turnkey Solution - 460 MT Structure, 250 MT Equipment Erection, 9000 In.mtr+ Piping",
    capacity: "Full Turnkey Solution",
    icon: Factory,
    image: raviDyewareImg
  },
  {
    id: 13,
    client: "Privi Speciality Chemicals Ltd",
    category: "Chemical",
    scope: "Turnkey Solution - 200 Ton Structure, 120 Ton Equipment Erection, 13000 In.mtr+ Piping",
    capacity: "Full Turnkey Solution",
    icon: Factory,
    image: priviSpecialityImg
  }
];

const categories = ["All", "Beverage", "Beverage & Dairy", "Chemical", "Chemical & Fertilizer", "Refinery Oil", "Brewery"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <main className="pt-[68px]">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[3vw] pt-12 md:pt-20 pb-8 md:pb-12 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--rust)] opacity-5 blur-3xl"></div>

        <div className="relative z-10">
          <div className="mb-3">
            <div className="text-[9px] md:text-[10px] tracking-[0.3em] text-[var(--rust)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              OUR PORTFOLIO
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end mb-12 md:mb-16">
            <div className="lg:col-span-7">
              <h1 className="text-[36px] md:text-[48px] lg:text-[60px] leading-tight tracking-[-0.01em] mb-6" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600 }}>
                <div className="text-[var(--white)]">Projects That</div>
                <div className="text-[var(--rust)]">Define Excellence.</div>
              </h1>
              <p className="text-[16px] md:text-[18px] leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>From pharmaceutical-grade installations to large-scale industrial infrastructure — explore our track record of delivering complex engineering projects across India, Nepal, Bhutan and other countries.</p>
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-[1px] bg-[var(--line)]"></div>
                <div className="text-center">
                  <div className="text-[40px] md:text-[48px] mb-1" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, color: 'var(--rust)' }}>
                    {filteredProjects.length}
                  </div>
                  <div className="text-[11px] tracking-[0.15em] opacity-60" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
                    COMPLETED PROJECTS
                  </div>
                </div>
                <div className="flex-1 h-[1px] bg-[var(--line)]"></div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[var(--rust)] border-[var(--rust)] text-[var(--white)]'
                    : 'border-[var(--line)] text-[var(--steel)] hover:border-[var(--rust)] hover:text-[var(--white)]'
                }`}
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.05em' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-[var(--ink-2)] py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[3vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="group relative bg-[var(--ink)] border border-[var(--line)] hover:border-[var(--rust)] transition-all duration-500 overflow-hidden"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-[240px] overflow-hidden">
                    <ImagePlaceholder
                      label={project.client}
                      aspectRatio="16/10"
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-80 z-0"></div>
                    <div className={`absolute inset-0 bg-[var(--rust)] transition-opacity duration-700 z-10 ${hoveredProject === project.id ? 'opacity-10' : 'opacity-0'}`}></div>

                    {/* Logo Overlay - PepsiCo (ID: 1) */}
                    {project.id === 1 && (
                      <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <img src={pepsicoLogo} alt="PepsiCo Logo" className="w-48 md:w-56 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}

                    {/* Logo Overlay - Spectrum (ID: 2) */}
                    {project.id === 2 && (
                      <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <img src={spectrumLogo} alt="Spectrum Logo" className="w-52 md:w-60 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}

                    {/* Logo Overlay - Repute Engineerings (ID: 3) */}
                    {project.id === 3 && (
                      <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <img src={reputeLogo} alt="Repute Engineerings Logo" className="w-40 md:w-48 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}

                    {/* Logo Overlay - Mangalam Organics (ID: 4) */}
                    {project.id === 4 && (
                      <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <img src={mangalamLogo} alt="Mangalam Organics Logo" className="w-52 md:w-60 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}

                    {/* Logo Overlay - Sure and Pure Agro (ID: 5) */}
                    {project.id === 5 && (
                      <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <img src={Surelogo} alt="Sure and pure Logo" className="w-48 md:w-56 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}
                    {/* Logo Overlay - Bisleri (ID: 6) */}
                    {project.id === 6 && (
                      <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <img src={Bislerilogo} alt="Sure and pure Logo" className="w-48 md:w-56 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}

                    {/* Logo Overlay - Sipa India (ID: 7) */}
                    {project.id === 7 && (
                      <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <img src={sipaLogo} alt="Sipa India Logo" className="w-44 md:w-52 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}

                    {/* Logo Overlay - Frigorifico Allana (ID: 8) */}
                    {project.id === 8 && (
                      <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <img src={frigorificoLogo} alt="Frigorifico Allana Logo" className="w-36 md:w-44 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}

                    {/* Logo Overlay - Life Food & Beverage (ID: 9) */}
                    {project.id === 9 && (
                      <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <img src={lifeFoodLogo} alt="Life Food & Beverage Logo" className="w-36 md:w-44 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}

                    {/* Logo Overlay - Yeti Brewery (ID: 10) */}
                    {project.id === 10 && (
                      <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <img src={yetiBreweryLogo} alt="Yeti Brewery Logo" className="w-40 md:w-48 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}

                    {/* Logo Overlay - Ice Beverages (ID: 11) */}
                    {project.id === 11 && (
                      <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <img src={iceBeveragesLogo} alt="Ice Beverages Logo" className="w-32 md:w-40 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}

                    {/* Logo Overlay - Ravi Dyeware (ID: 12) */}
                    {project.id === 12 && (
                      <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <img src={raviDyewareLogo} alt="Ravi Dyeware Logo" className="w-40 md:w-48 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      </div>
                    )}

                    {/* Logo Overlay - Privi Speciality Chemicals (ID: 13) */}
                    {project.id === 13 && (
                      <div className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-20 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <img src={priviLogo} alt="Privi Speciality Chemicals Logo" className="w-52 md:w-60 h-auto transition-transform duration-500 group-hover:scale-110" loading="lazy" />
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
                    <div className="text-[11px] tracking-[0.2em] mb-3 opacity-60" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
                      PROJECT #{project.id.toString().padStart(2, '0')}
                    </div>

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
                    <div className={`h-[2px] bg-[var(--rust)] transition-all duration-500 ${hoveredProject === project.id ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24">
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-[3vw] text-center">
          <h2 className="text-[42px] md:text-[54px] lg:text-[64px] leading-tight tracking-[-0.01em] mb-4 md:mb-6" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600 }}>
            <span className="text-[var(--white)]">Your Project </span>
            <span className="text-[var(--rust)]">Starts Here.</span>
          </h2>
          <p className="text-[14px] md:text-[15px] mb-6 md:mb-8" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
            Share your project requirements and our team will respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-[var(--rust)] text-[var(--white)] text-[13px] tracking-wide transition-all hover:bg-[var(--rust-2)] hover:-translate-y-[2px]"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
          >
            GET IN TOUCH →
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}