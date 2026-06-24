import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";

// Lazy load the components. The .then() handles your named exports.
const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("./pages/Services").then((m) => ({ default: m.Services })));
const Projects = lazy(() => import("./pages/Projects").then((m) => ({ default: m.Projects })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));

// A reusable loading wrapper for the lazy components
const PageLoader = ({ children }: { children: React.ReactNode }) => (
  <Suspense
    fallback={
      <div
        className="min-h-screen flex items-center justify-center text-[var(--rust)] tracking-widest text-sm"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        LOADING...
      </div>
    }
  >
    {children}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <PageLoader><Home /></PageLoader> },
      { path: "about", element: <PageLoader><About /></PageLoader> },
      { path: "services", element: <PageLoader><Services /></PageLoader> },
      { path: "projects", element: <PageLoader><Projects /></PageLoader> },
      { path: "contact", element: <PageLoader><Contact /></PageLoader> },
    ],
  },
]);