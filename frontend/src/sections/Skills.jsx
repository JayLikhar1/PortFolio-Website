import React from 'react';
import { Card } from '../components/ui/card';
import { Code, Layers, Database, BarChart3, Wrench, Sparkles, Zap, Brain, Cpu, Globe, Bot } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'C++', 'Java (Basics)'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Layers,
      title: 'Frameworks & Libraries',
      skills: ['React', 'Flask', 'FastAPI', 'Pandas', 'NumPy', 'Scikit-learn', 'KMeans Clustering', 'Random Forest', 'Decision Tree', 'Artificial Neural Networks', 'Reinforcement Learning'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MySQL', 'MongoDB Atlas', 'MongoDB Compass'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Brain,
      title: 'Data Science & ML',
      skills: ['Statistical Analysis', 'Exploratory Data Analysis (EDA)', 'A/B Testing', 'Feature Engineering', 'Model Evaluation'],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    },
    {
      icon: Bot,
      title: 'AI Tools & Platforms',
      skills: ['ChatGPT', 'Google Gemini', 'GitHub Copilot', 'Cursor AI', 'Emergent AI', 'Amazon Kiro', 'Replit'],
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-500/10 to-purple-500/10'
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: ['Power BI', 'Tableau', 'Streamlit', 'Git'],
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-500/10 to-purple-500/10'
    }
  ];

  const proficiencyLevels = [
    { name: 'Expert', count: 8, color: 'from-green-400 to-emerald-400' },
    { name: 'Advanced', count: 15, color: 'from-blue-400 to-cyan-400' },
    { name: 'Intermediate', count: 8, color: 'from-yellow-400 to-orange-400' },
    { name: 'Learning', count: 4, color: 'from-purple-400 to-pink-400' }
  ];

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300">Technical Skills</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            My Tech Stack
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Proficiency Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {proficiencyLevels.map((level, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm p-4 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="space-y-2">
                <div className={`text-2xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}>
                  {level.count}+
                </div>
                <div className="text-sm text-slate-400">{level.name}</div>
                <div className={`w-full h-1 bg-gradient-to-r ${level.color} rounded-full opacity-60`}></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 group relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                        {category.title}
                      </h3>
                      <div className="text-sm text-slate-400">
                        {category.skills.length} skills
                      </div>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm text-slate-300 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-300 cursor-default group-hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Progress indicator */}
                  <div className={`w-0 h-1 bg-gradient-to-r ${category.gradient} group-hover:w-full transition-all duration-700 rounded-full`}></div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10 text-center space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Always Learning</h3>
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
                Currently exploring <span className="text-white font-semibold">Cloud Computing</span>, 
                <span className="text-white font-semibold"> DevOps</span>, and 
                <span className="text-white font-semibold"> Advanced AI/ML techniques</span>.
              </p>
              
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-slate-300">Open to new technologies</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-slate-300">Fast learner</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
