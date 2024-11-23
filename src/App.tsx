import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <Work />
      <Skills />
      <Experience />
      <Education />
      <About />
      <Footer />
    </div>
  );
}

export default App;