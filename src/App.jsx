import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Rectory from './components/Rectory/Rectory';
import Events from './components/Events/Events';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Stats from './components/Stats/Stats';
import Admissions from './components/Admissions/Admissions';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Courses />
                  <Gallery />
                  <Stats />
                  <About />
                  <Contact />
                </>
              }
            />
            <Route path="/sobre" element={<About />}/>
            <Route path="/cursos" element={<Courses />}/>
            <Route path="/galeria" element={<Gallery />}/>
            <Route path="/eventos" element={<Events />}/>
            <Route path="/admissao" element={<Admissions />}/>
            <Route path="/contactos" element={<Contact />}/>
            <Route path="/reitoria" element={<Rectory />}/>
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App; 