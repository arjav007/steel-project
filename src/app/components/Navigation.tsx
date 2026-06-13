import { Link, useLocation } from "react-router";
import { useState } from "react";
import HiTechEngineeringLogo from "../../imports/HiTechEngineeringLogo2/HiTechEngineeringLogo2";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] border-b border-[var(--line)]" style={{ backgroundColor: 'rgba(12, 13, 16, 0.92)', backdropFilter: 'blur(16px)' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-[3vw] h-full flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="h-8 md:h-10 w-[120px] md:w-[160px]">
            <HiTechEngineeringLogo />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
        <Link
          to="/"
          className="text-[13px] tracking-[0.08em] transition-colors hover:text-[var(--rust)]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, color: isActive('/') ? 'var(--rust)' : 'var(--steel)' }}
        >
          HOME
        </Link>
        <Link
          to="/about"
          className="text-[13px] tracking-[0.08em] transition-colors hover:text-[var(--rust)]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, color: isActive('/about') ? 'var(--rust)' : 'var(--steel)' }}
        >
          ABOUT
        </Link>
        <Link
          to="/services"
          className="text-[13px] tracking-[0.08em] transition-colors hover:text-[var(--rust)]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, color: isActive('/services') ? 'var(--rust)' : 'var(--steel)' }}
        >
          SERVICES
        </Link>
        <Link
          to="/projects"
          className="text-[13px] tracking-[0.08em] transition-colors hover:text-[var(--rust)]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, color: isActive('/projects') ? 'var(--rust)' : 'var(--steel)' }}
        >
          PROJECTS
        </Link>
        <Link
          to="/contact"
          className="px-6 py-2 bg-[var(--rust)] text-[var(--white)] text-[13px] tracking-[0.08em] transition-all hover:bg-[var(--rust-2)] hover:-translate-y-[2px]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
        >
          GET A QUOTE
        </Link>
      </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-[2px] bg-[var(--white)] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-[2px] bg-[var(--white)] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-[2px] bg-[var(--white)] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[68px] left-0 right-0 bg-[var(--ink)] border-b border-[var(--line)] py-6">
          <div className="max-w-[1440px] mx-auto px-4 flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[13px] tracking-[0.08em] py-2 transition-colors hover:text-[var(--rust)]"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, color: isActive('/') ? 'var(--rust)' : 'var(--steel)' }}
            >
              HOME
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[13px] tracking-[0.08em] py-2 transition-colors hover:text-[var(--rust)]"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, color: isActive('/about') ? 'var(--rust)' : 'var(--steel)' }}
            >
              ABOUT
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[13px] tracking-[0.08em] py-2 transition-colors hover:text-[var(--rust)]"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, color: isActive('/services') ? 'var(--rust)' : 'var(--steel)' }}
            >
              SERVICES
            </Link>
            <Link
              to="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[13px] tracking-[0.08em] py-2 transition-colors hover:text-[var(--rust)]"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, color: isActive('/projects') ? 'var(--rust)' : 'var(--steel)' }}
            >
              PROJECTS
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 bg-[var(--rust)] text-[var(--white)] text-[13px] tracking-[0.08em] text-center transition-all hover:bg-[var(--rust-2)]"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}