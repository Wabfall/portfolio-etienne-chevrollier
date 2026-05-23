import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { LangProvider } from "./lib/lang";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <LangProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 text-slate-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          </Routes>
          <Footer />
        </div>
      </LangProvider>
    </StaticRouter>
  );
}
