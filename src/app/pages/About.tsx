import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { Users, TrendingUp, Globe, Briefcase, Factory, Award } from "lucide-react";
import teamPhoto from "@/imports/Team.jpeg";
import whoWeAreImg from "@/imports/WhoWe_Are-1.jpg";
import bentoImg from "@/imports/Bento-1.jpg";
import trainedWorkforceImg from "@/imports/Safety.jpg";
import oshaComplianceImg from "@/imports/OSHA.jpg";
import safetyIncentivesImg from "@/imports/SafetyInc.jpg";
import environmentalRespImg from "@/imports/Env.jpg";

export function About() {
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="pt-[68px]">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-[3vw] py-8 md:py-16 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--rust)] opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--rust)] opacity-5 blur-3xl"></div>

        <div className="relative z-10">
          <div className="mb-3">
            <div className="text-[9px] md:text-[10px] tracking-[0.3em] text-[var(--rust)]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              ABOUT HI TECH ENGINEERING
            </div>
          </div>

          <h1 className="text-[32px] md:text-[42px] lg:text-[52px] leading-tight tracking-[-0.01em] mb-6 md:mb-10" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600 }}>
            <div className="text-[var(--white)]">We Never Dreamed About Success.</div>
            <div className="text-[var(--rust)]">We Worked For It.</div>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <p className="text-[18px] md:text-[22px] lg:text-[26px] leading-[1.4]" style={{ fontFamily: 'var(--font-fraunces)', color: 'var(--white)' }}>
                A <span className="text-[var(--rust)]">disciplined</span>, <span className="text-[var(--rust)]">purpose-built</span> engineering company with the people, processes, and track record to deliver your <span className="text-[var(--rust)]">most demanding projects</span> — reliably, safely, and without excuses.
              </p>

              <div className="relative bg-[var(--ink)] border border-[var(--line)] p-6 md:p-8 group hover:border-[var(--rust)] transition-all duration-500">
                {/* Decorative corner element */}
                <div className="absolute top-0 left-0 w-2 h-full bg-[var(--rust)] group-hover:w-3 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[var(--line)] opacity-30"></div>


                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[10px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--rust)' }}>
                      WHO WE ARE
                    </div>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-[var(--rust)] to-transparent opacity-30"></div>
                  </div>

                  <p className="text-[14px] md:text-[16px] leading-relaxed mb-4" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                    Hi-Tech Engineering operates as a sister concern of Ranjeet Engineering, our parent firm established in 2002, where we built a strong presence and near-monopoly with major beverage companies like Parle and PepsiCo, consistently delivering on time and demonstrating operational excellence.
                  </p>
                  <p className="text-[14px] md:text-[16px] leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                    From structural base column fabrication and erection to equipments and machineraries poistioning and their respective piping, delivering precision engineering solutions across beverage, chemical, pharmaceutical, and industrial sectors throughout India, Nepal, Bhutan, Dubai, Sri Lanka, and African countries.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative group">
              <div className="relative h-full min-h-[450px] md:min-h-[550px]">
                {/* Main Image */}
                <div className="absolute inset-0 overflow-hidden rounded-sm">
                  <ImagePlaceholder
                    label="Professional engineering team at work"
                    aspectRatio="4/5"
                    src={whoWeAreImg}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--rust)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                </div>

                {/* Animated Border Frame */}
                <div className="absolute inset-0 border-2 border-[var(--line)] group-hover:border-[var(--rust)] transition-all duration-500 rounded-sm"></div>

                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-[var(--rust)] px-4 py-2 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                  <div className="text-[10px] tracking-[0.2em]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--white)' }}>
                    EST. 2002
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[var(--ink-2)] pt-8 md:pt-16 pb-6 md:pb-8">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[3vw]">
          {/* Asymmetric Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 mb-8 md:mb-12 pb-6 md:pb-0">
            {/* ROW 1 */}
            {/* Hero Statement - Spans full width on mobile, left 7 cols on desktop */}
            <div className="md:col-span-7 bg-[var(--ink)] border-l-4 border-[var(--rust)] p-8 md:p-12 group hover:border-l-8 transition-all duration-300">
              <div className="text-[10px] tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--rust)' }}>
                EST. 2002
              </div>
              <p className="text-[20px] md:text-[26px] lg:text-[30px] leading-[1.35]" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 400, color: 'var(--silver)' }}>
                We deliver <span className="text-[var(--white)]">precision engineering</span> without compromises. From <span className="text-[var(--rust)]">structural steel fabrication & erection</span> to <span className="text-[var(--rust)]">machinery positioning & associated piping works</span>, we handle the full spectrum.
              </p>
            </div>

            {/* Featured Stat - Large - Right 5 cols on desktop */}
            <div className="md:col-span-5 bg-[var(--rust)] p-8 md:p-12 relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--white)] opacity-5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--white)] opacity-5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10 flex items-start justify-between mb-6">
                <Factory className="w-12 h-12 md:w-14 md:h-14" style={{ color: 'var(--white)' }} strokeWidth={1.5} />
                <div className="text-[10px] tracking-[0.25em] opacity-70" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--white)' }}>
                  WORKFORCE
                </div>
              </div>

              <div className="relative z-10 flex-1">
                <div className="text-[52px] md:text-[64px] lg:text-[72px] leading-none mb-4 group-hover:scale-105 transition-transform duration-300" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, color: 'var(--white)' }}>
                  150+
                </div>
                <div className="text-[13px] md:text-[14px] tracking-[0.15em] mb-6 opacity-95" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--white)' }}>
                  ENGINEERS & TRADESPEOPLE
                </div>
                <div className="text-[12px] md:text-[13px] leading-relaxed opacity-80 max-w-xs" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--white)' }}>
                  Certified professionals across mechanical, civil, and electrical disciplines — ready to deliver excellence.
                </div>
              </div>

            </div>

            {/* ROW 2 */}
            {/* KPI Card 1 */}
            <div className="md:col-span-3 bg-[var(--ink)] border border-[var(--line)] p-6 md:p-7 flex flex-col group hover:border-[var(--rust)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden min-h-[180px] md:min-h-[200px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--rust)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-20 h-20 border border-[var(--line)] rounded-full opacity-15"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border border-[var(--line)] rounded-full opacity-10"></div>

              <div className="relative z-10 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <TrendingUp className="w-9 h-9 md:w-10 md:h-10" style={{ color: 'var(--rust)' }} strokeWidth={1.5} />
                  <div className="text-[9px] tracking-[0.2em] opacity-50" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>FY 2026</div>
                </div>
                <div className="text-[40px] md:text-[48px] leading-none mb-2" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, color: 'var(--white)' }}>
                  ₹10CR
                </div>
                <div className="text-[10px] md:text-[11px] tracking-[0.15em] mb-3" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
                  ANNUAL TURNOVER
                </div>
              </div>

              <div className="relative z-10 mt-auto pt-3 border-t border-[var(--line)]">
                <div className="flex items-center gap-2">
                  <div className="text-[13px] md:text-[14px]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--rust)' }}>+25%</div>
                  <div className="text-[11px] md:text-[12px] opacity-60" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>YoY Growth</div>
                </div>
              </div>
            </div>

            {/* Image with Overlay */}
            <div className="md:col-span-6 relative group overflow-hidden min-h-[200px] md:min-h-[240px]">
              <ImagePlaceholder label="Hi-Tech Engineering team" aspectRatio="4/3" src={teamPhoto} />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent opacity-80"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--rust)] transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-[11px] tracking-[0.25em] mb-1" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--rust)' }}>THE TEAM BEHIND IT</div>
                <div className="text-[16px] md:text-[18px]" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500, color: 'var(--white)' }}>The Centre of Our Success</div>
              </div>
            </div>

            {/* KPI Card 2 */}
            <div className="md:col-span-3 bg-[var(--ink)] border border-[var(--line)] p-6 md:p-7 flex flex-col group hover:border-[var(--rust)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden min-h-[180px] md:min-h-[200px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--rust)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4 w-16 h-16 border-2 border-[var(--line)] opacity-10"></div>
              <div className="absolute bottom-4 left-4 w-10 h-10 border-2 border-[var(--line)] opacity-20"></div>

              <div className="relative z-10 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <Briefcase className="w-9 h-9 md:w-10 md:h-10" style={{ color: 'var(--rust)' }} strokeWidth={1.5} />
                  <div className="text-[9px] tracking-[0.2em] opacity-50" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>PARTNERS</div>
                </div>
                <div className="text-[40px] md:text-[48px] leading-none mb-2" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, color: 'var(--white)' }}>
                  30+
                </div>
                <div className="text-[10px] md:text-[11px] tracking-[0.15em] mb-3" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
                  INDUSTRY LEADERS
                </div>
              </div>

              <div className="relative z-10 mt-auto pt-3 border-t border-[var(--line)]">
                <div className="flex items-center gap-2">
                  <div className="text-[13px] md:text-[14px]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--rust)' }}>6 Sectors</div>
                  <div className="text-[11px] md:text-[12px] opacity-60" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>Diversified</div>
                </div>
              </div>
            </div>

            {/* ROW 3 */}
            {/* Quote Card */}
            <div className="md:col-span-3 bg-[var(--rust)] p-6 md:p-7 flex flex-col justify-between relative overflow-hidden group min-h-[180px] md:min-h-[200px]">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--white)] opacity-5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--white)] opacity-5 rounded-full -mr-12 -mt-12"></div>
              <div className="absolute top-2 left-2 text-[140px] md:text-[160px] leading-none opacity-10 group-hover:opacity-15 transition-opacity duration-500" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, color: 'var(--white)' }}>"</div>

              <div className="relative z-10 flex-1 flex items-center">
                <div className="text-[17px] md:text-[20px] lg:text-[22px] leading-[1.4] italic" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500, color: 'var(--white)' }}>
                  Quality is non-negotiable. The work gets done right, or it doesn't get done at all.
                </div>
              </div>

              <div className="relative z-10 mt-4 pt-3 border-t border-[rgba(255,255,255,0.2)]">
                <div className="text-[10px] tracking-[0.2em] opacity-75" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--white)' }}>
                  OUR PHILOSOPHY
                </div>
              </div>
            </div>

            {/* Visual Element - Image Card */}
            <div className="md:col-span-3 relative overflow-hidden group hover:border-[var(--rust)] transition-all duration-300 min-h-[180px] md:min-h-[200px]">
              <ImagePlaceholder label="Hi Tech Engineering — blueprints and planning" aspectRatio="1/1" src={bentoImg} />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] to-transparent opacity-60"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--rust)] transition-all duration-500"></div>
            </div>

            {/* Trusted By Card */}
            <div className="md:col-span-3 bg-[var(--ink)] border border-[var(--line)] p-6 md:p-7 flex flex-col justify-between group hover:border-[var(--rust)] transition-all duration-300 min-h-[180px] md:min-h-[200px]">
              <div className="flex items-start justify-between mb-3">
                <Award className="w-9 h-9 md:w-10 md:h-10" style={{ color: 'var(--rust)' }} strokeWidth={1.5} />
                <div className="text-[9px] tracking-[0.2em] opacity-50" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>GLOBAL</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.25em] mb-3" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--rust)' }}>TRUSTED BY</div>
                <div className="text-[13px] md:text-[14px] leading-relaxed mb-3" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                  <span className="text-[var(--white)]">Bisleri, PepsiCo, Cipla, Tata, Aditya Birla</span> & more
                </div>
                <div className="text-[9px] opacity-60" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>Fortune 500 companies</div>
              </div>
            </div>

            {/* KPI Card 3 */}
            <div className="md:col-span-3 bg-[var(--ink)] border border-[var(--line)] p-6 md:p-7 flex flex-col group hover:border-[var(--rust)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden min-h-[180px] md:min-h-[200px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--rust)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="absolute top-1/2 right-4 -translate-y-1/2 w-28 h-28 rounded-full border border-[var(--line)] opacity-10"></div>

              <div className="relative z-10 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <Globe className="w-9 h-9 md:w-10 md:h-10" style={{ color: 'var(--rust)' }} strokeWidth={1.5} />
                  <div className="text-[9px] tracking-[0.2em] opacity-50" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>MARKETS</div>
                </div>
                <div className="text-[40px] md:text-[48px] leading-none mb-2" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, color: 'var(--white)' }}>
                  3+
                </div>
                <div className="text-[10px] md:text-[11px] tracking-[0.15em] mb-3" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--steel)' }}>
                  COUNTRIES SERVED
                </div>
              </div>

              <div className="relative z-10 mt-auto pt-3 border-t border-[var(--line)]">
                <div className="flex items-center gap-2">
                  <div className="text-[13px] md:text-[14px]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--rust)' }}>IND · NPL · BTN</div>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Tags */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[11px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--rust)' }}>
                INDUSTRIES WE SERVE
              </div>
              <div className="flex-1 h-[1px] bg-[var(--line)]"></div>
            </div>
            <div className="flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* Safety Band */}
      <section id="safety" className="pt-6 md:pt-12 pb-12 md:pb-24 bg-[var(--ink-2)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[3vw]">
          <div className="text-[11px] tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--rust)' }}>
            SAFETY FIRST
          </div>
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] leading-tight mb-12 md:mb-16" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, color: 'var(--white)' }}>
            Every Job. Every Day. <span className="text-[var(--rust)]">Zero Shortcuts.</span>
          </h2>

          {/* Mobile Accordion Layout */}
          <div className="lg:hidden space-y-3">
            {[
              {
                num: "01",
                title: "Daily Hazard Analysis",
                desc: "Job-specific risk assessment before work begins",
                image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
                detail: "Every task is evaluated for potential risks, ensuring our team is prepared and protected before work begins."
              },
              {
                num: "02",
                title: "Trained Workforce",
                desc: "Certified personnel with ongoing safety training",
                image: trainedWorkforceImg,
                detail: "Our team receives continuous education on the latest safety protocols and industry best practices."
              },
              {
                num: "03",
                title: "OSHA Compliance",
                desc: "International safety standards, locally enforced",
                image: oshaComplianceImg,
                detail: "We adhere to OSHA regulations and international best practices on every project site."
              },
              {
                num: "04",
                title: "Safety Incentives",
                desc: "Rewards programme for exemplary safety behaviour",
                image: safetyIncentivesImg,
                detail: "We recognize and celebrate team members who go above and beyond in maintaining safe work environments."
              },
              {
                num: "05",
                title: "Environmental Responsibility",
                desc: "Minimizing impact, maximizing accountability",
                image: environmentalRespImg,
                detail: "We implement sustainable practices and ensure our projects respect the environment and local communities."
              }
            ].map((item, i) => {
              const isActive = activePanel === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setActivePanel(i)}
                    className={`w-full text-left p-6 border-l-4 transition-all duration-300 group ${
                      isActive
                        ? 'bg-[var(--ink)] border-[var(--rust)]'
                        : 'bg-[var(--ink)] border-[var(--line)] hover:border-[var(--rust)]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`text-[24px] leading-none transition-colors duration-300 ${
                        isActive ? 'text-[var(--rust)]' : 'text-[var(--steel)]'
                      }`} style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700 }}>
                        {item.num}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-[18px] md:text-[20px] mb-2 transition-colors duration-300 ${
                          isActive ? 'text-[var(--white)]' : 'text-[var(--silver)] group-hover:text-[var(--white)]'
                        }`} style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600 }}>
                          {item.title}
                        </h3>
                        <p className={`text-[13px] md:text-[14px] leading-relaxed transition-all duration-300 ${
                          isActive ? 'opacity-80 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                        }`} style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                          {item.desc}
                        </p>
                      </div>
                      <div className={`w-2 h-2 rounded-full mt-2 transition-all duration-300 ${
                        isActive ? 'bg-[var(--rust)] scale-100' : 'bg-transparent border border-[var(--line)] scale-75'
                      }`}></div>
                    </div>
                  </button>

                  {/* Image appears directly below the active button on mobile */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isActive ? 'max-h-[500px] mt-3' : 'max-h-0'
                  }`}>
                    <div className="relative h-[350px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={i === 3 ? { objectPosition: 'center 35%' } : undefined}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent"></div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="bg-[var(--ink)] bg-opacity-90 backdrop-blur-sm border-l-4 border-[var(--rust)] p-5">
                          <p className="text-[14px] leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Side-by-Side Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-8 md:gap-12">
            {/* Left: Tab Buttons */}
            <div className="space-y-3">
              {[
                {
                  num: "01",
                  title: "Daily Hazard Analysis",
                  desc: "Job-specific risk assessment before work begins"
                },
                {
                  num: "02",
                  title: "Trained Workforce",
                  desc: "Certified personnel with ongoing safety training"
                },
                {
                  num: "03",
                  title: "OSHA Compliance",
                  desc: "International safety standards, locally enforced"
                },
                {
                  num: "04",
                  title: "Safety Incentives",
                  desc: "Rewards programme for exemplary safety behaviour"
                },
                {
                  num: "05",
                  title: "Environmental Responsibility",
                  desc: "Minimizing impact, maximizing accountability"
                }
              ].map((item, i) => {
                const isActive = activePanel === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActivePanel(i)}
                    className={`w-full text-left p-6 border-l-4 transition-all duration-300 group ${
                      isActive
                        ? 'bg-[var(--ink)] border-[var(--rust)]'
                        : 'bg-[var(--ink)] border-[var(--line)] hover:border-[var(--rust)]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`text-[24px] leading-none transition-colors duration-300 ${
                        isActive ? 'text-[var(--rust)]' : 'text-[var(--steel)]'
                      }`} style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700 }}>
                        {item.num}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-[18px] md:text-[20px] mb-2 transition-colors duration-300 ${
                          isActive ? 'text-[var(--white)]' : 'text-[var(--silver)] group-hover:text-[var(--white)]'
                        }`} style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600 }}>
                          {item.title}
                        </h3>
                        <p className={`text-[13px] md:text-[14px] leading-relaxed transition-all duration-300 ${
                          isActive ? 'opacity-80 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                        }`} style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                          {item.desc}
                        </p>
                      </div>
                      <div className={`w-2 h-2 rounded-full mt-2 transition-all duration-300 ${
                        isActive ? 'bg-[var(--rust)] scale-100' : 'bg-transparent border border-[var(--line)] scale-75'
                      }`}></div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Image Display */}
            <div className="relative h-full min-h-[500px]">
              {[
                {
                  image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000",
                  detail: "Every task is evaluated for potential risks, ensuring our team is prepared and protected before work begins."
                },
                {
                  image: trainedWorkforceImg,
                  detail: "Our team receives continuous education on the latest safety protocols and industry best practices."
                },
                {
                  image: oshaComplianceImg,
                  detail: "We adhere to OSHA regulations and international best practices on every project site."
                },
                {
                  image: safetyIncentivesImg,
                  detail: "We recognize and celebrate team members who go above and beyond in maintaining safe work environments."
                },
                {
                  image: environmentalRespImg,
                  detail: "We implement sustainable practices and ensure our projects respect the environment and local communities."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    activePanel === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="relative h-full">
                    <img
                      src={item.image}
                      alt={`Safety point ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={i === 3 ? { objectPosition: 'center 35%' } : undefined}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="bg-[var(--ink)] bg-opacity-90 backdrop-blur-sm border-l-4 border-[var(--rust)] p-6">
                        <p className="text-[14px] md:text-[15px] leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24">
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-[3vw] text-center">
          <h2 className="text-[42px] md:text-[54px] lg:text-[64px] leading-tight tracking-[-0.01em] mb-4 md:mb-6" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 500 }}>
            <span className="text-[var(--white)]">Let's Build </span>
            <span className="text-[var(--rust)]">Together.</span>
          </h2>
          <p className="text-[14px] md:text-[15px] mb-6 md:mb-8" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--silver)' }}>
            Share your project requirements and our team will respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-[var(--rust)] text-[var(--white)] text-[13px] tracking-wide transition-all hover:bg-[var(--rust-2)] hover:-translate-y-[2px]"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600 }}
          >
            GET IN TOUCH →
          </Link>
        </div>
      </section>
    </main>
  );
}