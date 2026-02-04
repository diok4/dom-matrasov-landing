import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "./componnts/Navbar";
import Footer from "./componnts/Footer";
import Loading from "./componnts/Loading";
import FloatingChat from "./componnts/FloatingChat";
import ScrollToTop from "./componnts/ScrollToTop";

// ✅ Lazy loaded sections
const Hero = lazy(() => import("./componnts/Hero"));
const Products = lazy(() => import("./componnts/Products"));
const About = lazy(() => import("./componnts/About"));
const WhyChooseUs = lazy(() => import("./componnts/WhyChooseUs"));
const Types = lazy(() => import("./componnts/Types"));
const Contact = lazy(() => import("./componnts/Contact"));
const HowToChoose = lazy(() => import("./pages/HowToChoose"));

function App() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  // ✅ Minimal initial loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Language change loader (to‘g‘ri qoladi)
  useEffect(() => {
    const handleLanguageChange = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 500);
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => i18n.off("languageChanged", handleLanguageChange);
  }, [i18n]);

  return (
    <Router>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Navbar />

          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Products />
                    <About />
                    <WhyChooseUs />
                    <Types />
                    <Contact />
                    <FloatingChat />
                    <ScrollToTop />
                  </>
                }
              />

              {/* 🔥 YANGI PAGE */}
              <Route
                path="/how-to-choose"
                element={
                  <>
                    <HowToChoose />
                    <FloatingChat />
                    <ScrollToTop />
                  </>
                }
              />
            </Routes>
          </Suspense>

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
