import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import ServicesPage from './pages/ServicesPage';
import SuggestionBox from './pages/SuggestionBox';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  // eslint-disable-next-line no-unused-vars
  const message = 'Hola, estoy interesado en los servicios de SEGURANZA para la mejora de mi negocio de SEGURANZA';
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/sugerencias" element={<SuggestionBox />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App; 