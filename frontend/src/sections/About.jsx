import React from 'react';
import { Code2, Database, Brain, TrendingUp, Sparkles, Zap, Target, Rocket } from 'lucide-react';
import { Card } from '../components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with React, Flask, FastAPI, and modern databases',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Developing ML models for classification, clustering, and predictive analytics',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Processing and analyzing large datasets with Python, SQL, and visualization tools',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Business Analytics',
      description: 'Delivering data-driven insights through A/B testing, segmentation, and statistical analysis',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '20+', label: 'Projects Completed', icon: Target },
    { number: '3+', label: 'Years Experience', icon: Zap },
    { number: '10+', label: 'Technologies', icon: Rocket },
    { number: '100%', label: 'Client Satisfaction', icon: Sparkles }
  ];

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-slate-300">About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A passionate developer and data scientist focused on building innovative solutions that solve real-world problems
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm p-6 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="space-y-3">
                  <Icon className="w-6 h-6 text-blue-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Story */}
        <div className="mb-20">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  I'm a <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">B.Tech Computer Science & Engineering student</span> at Parul University 
                  with a strong focus on Full Stack Development and Data Science. Currently, I'm honing my skills as a 
                  <span className="text-white font-semibold"> Full Stack Web Development Intern at Unified Mentor Pvt. Ltd</span>, 
                  where I build data-driven dashboards and design robust APIs.
                </p>
                
                <p>
                  My expertise spans across modern web technologies like <span className="text-white font-semibold">React and Flask</span>, 
                  combined with advanced data science techniques including <span className="text-white font-semibold">Machine Learning, Statistical Analysis, and A/B Testing</span>. 
                  I've developed multiple production-ready applications that have delivered measurable business impact, including platforms that 
                  helped reduce churn by 20-30% and saved millions in ARR.
                </p>
                
                <p>
                  Beyond coding, I actively participate in hackathons and competitions, including <span className="text-white font-semibold">Flipkart GRiD 6.0</span> and 
                  <span className="text-white font-semibold"> IIM Ahmedabad's Quantathon</span>, constantly pushing myself to learn and grow.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Enhanced Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 group relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 space-y-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className={`w-0 h-1 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
