import React from 'react';
import { Card } from '../components/ui/card';
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Code, Database, Sparkles, CheckCircle } from 'lucide-react';

const Experience = () => {
  const achievements = [
    { icon: TrendingUp, label: 'Data Dashboards Built', value: '5+' },
    { icon: Code, label: 'APIs Designed', value: '10+' },
    { icon: Database, label: 'Data Pipelines', value: '3+' },
    { icon: Users, label: 'Team Collaboration', value: '100%' }
  ];

  const responsibilities = [
    {
      title: 'Data-Driven Dashboard Development',
      description: 'Developed interactive dashboards using Python, SQL, and Streamlit, enabling real-time analytics and business intelligence',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'RESTful API Design & Implementation',
      description: 'Designed and implemented robust APIs and data flows for seamless integration between frontend and backend systems',
      icon: Code,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cross-Functional Team Collaboration',
      description: 'Collaborated with teams through code reviews, testing, and iterative feedback, ensuring high-quality deliverables',
      icon: Users,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Scalable Data Pipeline Architecture',
      description: 'Built scalable data pipelines and visualization systems that improved decision-making efficiency by 40%',
      icon: Database,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const skills = ['Python', 'SQL', 'Streamlit', 'Flask', 'API Design', 'Data Visualization', 'Agile', 'Git', 'MongoDB', 'React'];

  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Briefcase className="w-4 h-4 text-green-400" />
            <span className="text-sm text-slate-300">Professional Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Building impactful solutions and growing through hands-on experience
          </p>
        </div>

        {/* Main Experience Card */}
        <Card className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm overflow-hidden mb-12 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Company Logo/Icon Section */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-12 h-12 text-white" />
                </div>
                <div className="mt-4 text-center">
                  <div className="flex items-center gap-1 justify-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-300 font-medium">Current</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-grow space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    Full Stack Web Development Intern
                  </h3>
                  <p className="text-2xl text-slate-300 font-medium">
                    Unified Mentor Pvt. Ltd
                  </p>
                  
                  <div className="flex flex-wrap gap-6 text-slate-400">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 border border-white/20">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>January 2026 – April 2026</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 border border-white/20">
                      <MapPin className="w-4 h-4 text-green-400" />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>

                {/* Achievements Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                        <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                        <div className="text-xl font-bold text-white">{achievement.value}</div>
                        <div className="text-xs text-slate-400">{achievement.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
        </Card>

        {/* Responsibilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {responsibilities.map((responsibility, index) => {
            const Icon = responsibility.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-6 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/10 group relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${responsibility.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${responsibility.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300">
                      {responsibility.title}
                    </h4>
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {responsibility.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className={`w-0 h-1 bg-gradient-to-r ${responsibility.gradient} group-hover:w-full transition-all duration-700 rounded-full`}></div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Skills & Technologies */}
        <Card className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Technologies & Skills Used</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm text-slate-300 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-300 cursor-default hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <p className="text-slate-400 leading-relaxed">
                This internship has been instrumental in developing my full-stack capabilities and understanding of 
                <span className="text-white font-semibold"> enterprise-level development practices</span>, 
                <span className="text-white font-semibold"> data-driven decision making</span>, and 
                <span className="text-white font-semibold"> collaborative software development</span>.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;