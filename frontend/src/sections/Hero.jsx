import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, Instagram, ArrowRight, Sparkles, Code2, Database, Brain, Download } from 'lucide-react';
import { Button } from '../components/ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { icon: Code2, label: 'Full Stack', color: 'from-blue-400 to-cyan-400' },
    { icon: Database, label: 'Data Science', color: 'from-purple-400 to-pink-400' },
    { icon: Brain, label: 'Machine Learning', color: 'from-green-400 to-emerald-400' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Interactive gradient orbs that follow mouse */}
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-500/15 via-indigo-500/10 to-purple-500/15 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x * 0.5}%`,
            top: `${mousePosition.y * 0.3}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-500/12 via-pink-500/8 to-rose-500/12 rounded-full blur-3xl transition-all duration-1500 ease-out"
          style={{
            right: `${(100 - mousePosition.x) * 0.4}%`,
            bottom: `${(100 - mousePosition.y) * 0.2}%`,
            transform: 'translate(50%, 50%)',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-teal-500/6 to-emerald-500/10 rounded-full blur-3xl transition-all duration-2000 ease-out"
          style={{
            left: `${50 + mousePosition.x * 0.1}%`,
            top: `${50 + mousePosition.y * 0.1}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 to-transparent animate-pulse delay-1000" style={{animationDuration: '6s'}}></div>
        </div>
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse" style={{animationDuration: '8s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 border border-blue-400/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 border border-purple-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400/20 rotate-45 animate-bounce delay-2000"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto text-center space-y-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Enhanced Status Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-lg shadow-lg shadow-white/5 hover:shadow-white/10 transition-all duration-300 group">
          <div className="relative">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          </div>
          <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Available for opportunities</span>
          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
        </div>

        {/* Premium Main Heading */}
        <div className="space-y-8">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none relative">
              <span className="text-gradient-animated hover:text-glow transition-all duration-500 cursor-default">
                Jay Likhar
              </span>
              
              {/* Glowing background effect */}
              <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
                <span className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 bg-clip-text text-transparent blur-sm">
                  Jay Likhar
                </span>
              </div>
            </h1>
            
            {/* Enhanced floating decorative elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500/30 to-teal-500/30 rounded-full blur-lg animate-pulse delay-1000"></div>
            <div className="absolute -top-12 left-1/4 w-12 h-12 bg-gradient-to-r from-pink-500/25 to-rose-500/25 rounded-full blur-md animate-pulse delay-500"></div>
            
            {/* Animated sparkles */}
            <Sparkles className="absolute -top-6 -right-6 w-8 h-8 text-yellow-400 animate-bounce" />
            <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-blue-400 animate-bounce delay-700" />
            <Sparkles className="absolute top-1/2 -right-12 w-5 h-5 text-purple-400 animate-bounce delay-1200" />
          </div>
          
          {/* Enhanced Role Description with Typewriter Effect */}
          <div className="space-y-6">
            <div className="relative overflow-hidden">
              <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight relative">
                <span className="text-shimmer-premium">
                  Full Stack Developer
                </span>
                <span className="text-slate-300"> &</span>
              </p>
              
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-shimmer" 
                   style={{animation: 'shimmer 2s ease-in-out infinite, typewriter 3s ease-out forwards'}}></div>
              
              {/* Side accent */}
              <div className="absolute -left-6 top-1/2 w-2 h-12 bg-gradient-to-b from-blue-400 via-purple-400 to-transparent rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative overflow-hidden">
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight relative">
                <span className="text-gradient-animated hover:text-glow transition-all duration-500 cursor-default">
                  Data Science Engineer
                </span>
              </p>
              
              {/* Animated particles around text */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-2 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute bottom-2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-700"></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1100"></div>
              </div>
              
              {/* Side accent */}
              <div className="absolute -right-6 top-1/2 w-2 h-12 bg-gradient-to-b from-purple-400 via-pink-400 to-transparent rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
          
          {/* Floating text effects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 text-xs text-blue-400/30 font-mono animate-float">{'<developer/>'}</div>
            <div className="absolute top-1/3 right-1/4 text-xs text-purple-400/30 font-mono animate-float delay-1000">{'{ code }'}</div>
            <div className="absolute bottom-1/3 left-1/3 text-xs text-cyan-400/30 font-mono animate-float delay-500">{'ML()'}</div>
            <div className="absolute bottom-1/4 right-1/3 text-xs text-pink-400/30 font-mono animate-float delay-1500">{'data[]'}</div>
          </div>
        </div>

        {/* Skills Showcase */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-lg hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{skill.label}</span>
              </div>
            );
          })}
        </div>

        {/* Enhanced Description */}
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl text-slate-400 leading-relaxed">
            Crafting exceptional digital experiences with cutting-edge technology. 
            Specializing in full-stack development and machine learning solutions that drive innovation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              React & Node.js Expert
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              ML & Data Analytics
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Cloud & DevOps
            </span>
          </div>
        </div>

        {/* Premium Contact Cards */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:jaylikhar9@gmail.com" className="group">
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-lg hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-500 uppercase tracking-wide">Email</div>
                <div className="text-sm text-slate-300 group-hover:text-white transition-colors">jaylikhar9@gmail.com</div>
              </div>
            </div>
          </a>
          
          <a href="tel:+919529212362" className="group">
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-lg hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-500 uppercase tracking-wide">Phone</div>
                <div className="text-sm text-slate-300 group-hover:text-white transition-colors">+91 9529212362</div>
              </div>
            </div>
          </a>
          
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-lg">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-red-400" />
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-500 uppercase tracking-wide">Location</div>
              <div className="text-sm text-slate-300">India</div>
            </div>
          </div>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <a href="https://github.com/JayLikhar1" target="_blank" rel="noopener noreferrer" className="group">
            <Button size="lg" className="bg-gradient-to-r from-white/15 to-white/10 hover:from-white/25 hover:to-white/20 border border-white/30 hover:border-white/40 backdrop-blur-lg transition-all duration-300 text-white hover:text-white shadow-lg shadow-white/10 hover:shadow-white/20 hover:scale-105">
              <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              GitHub
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Button>
          </a>
          
          <a href="https://www.linkedin.com/in/jay-likhar-8820a6274/" target="_blank" rel="noopener noreferrer" className="group">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 border-0 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105">
              <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              LinkedIn
            </Button>
          </a>
          
          <a href="https://www.instagram.com/jayylikhar/" target="_blank" rel="noopener noreferrer" className="group">
            <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 border-0 transition-all duration-300 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105">
              <Instagram className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Instagram
            </Button>
          </a>
        </div>

        {/* Premium CTA Section */}
        <div className="pt-12 space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('projects')} 
              size="lg"
              className="group bg-gradient-to-r from-white to-slate-100 text-slate-900 hover:from-slate-100 hover:to-white transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-white/30 hover:scale-105 px-8 py-4"
            >
              <Sparkles className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              View My Work
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')} 
              size="lg"
              className="group bg-gradient-to-r from-white/15 to-white/10 hover:from-white/25 hover:to-white/20 border border-white/30 hover:border-white/40 backdrop-blur-lg transition-all duration-300 text-white hover:text-white shadow-lg shadow-white/10 hover:shadow-white/20 hover:scale-105 px-8 py-4"
            >
              <Download className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Download CV
            </Button>
          </div>
          
          <div className="flex items-center justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center gap-3 text-slate-400 hover:text-white transition-all duration-300 group"
            >
              <span className="text-sm font-medium">Discover More</span>
              <div className="flex flex-col items-center gap-1">
                <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
                <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400/60 rounded-full animate-ping"></div>
      <div className="absolute top-32 right-32 w-2 h-2 bg-purple-400/60 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-32 left-32 w-2.5 h-2.5 bg-cyan-400/60 rounded-full animate-ping delay-500"></div>
      <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-ping delay-1500"></div>
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping delay-2000"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-yellow-400/60 rounded-full animate-ping delay-2500"></div>
    </section>
  );
};

export default Hero;
