import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/nav/nav';
import HomePage from './components/home/home';
import Footer from './components/nav/footer';
import ServicesPage from './components/services/services';
import GalleryPage from './components/gallery/gallery';
import AboutPage from './components/about/about';
import ContactPage from './components/about/contact';
import PortfolioPage from './components/gallery/portifolio';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App = () => {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <div className="relative">
          <ScrollToTop />
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </Router>
  );
};

export default App;