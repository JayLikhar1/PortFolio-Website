import React, { useEffect } from 'react';
import './App.css';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.classList.add('loaded');

    // Scroll indicator
    const updateScrollIndicator = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const indicator = document.getElementById('scroll-indicator');
      if (indicator) {
        indicator.style.transform = `scaleX(${scrolled / 100})`;
      }
    };

    window.addEventListener('scroll', updateScrollIndicator);
    return () => window.removeEventListener('scroll', updateScrollIndicator);
  }, []);

  return (
    <div className="App min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/8 via-indigo-500/6 to-purple-500/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/8 via-pink-500/6 to-rose-500/8 rounded-full blur-3xl animate-pulse delay-1000" style={{animationDuration: '10s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/6 via-teal-500/4 to-emerald-500/6 rounded-full blur-3xl animate-pulse delay-500" style={{animationDuration: '12s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse" style={{animationDuration: '6s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-1/5 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-pink-400/40 rounded-full animate-ping delay-1500"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-emerald-400/30 rounded-full animate-ping delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-yellow-400/25 rounded-full animate-ping delay-2500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Contact />
      </div>

      {/* Scroll indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transform scale-x-0 origin-left transition-transform duration-300" id="scroll-indicator"></div>
    </div>
  );
}

export default App;
