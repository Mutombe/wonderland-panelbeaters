import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/nav/nav';
import HomePage from './components/home/home';
import Footer from './components/nav/footer';
import ServicesPage from './components/services/services';
import GalleryPage from './components/gallery/gallery';
import AboutPage from './components/about/about';
import ContactPage from './components/about/contact';

const App = () => {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <div className="relative">
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </Router>
  );
};

export default App;