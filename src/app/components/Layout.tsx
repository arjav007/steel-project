import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--chalk)]">
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
