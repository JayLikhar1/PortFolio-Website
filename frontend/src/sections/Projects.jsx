import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ExternalLink, Github, Rocket, Star, TrendingUp, Zap, Code2, Database, Brain, Shield } from 'lucide-react';

const projectData = [
  {
    title: 'User Behaviour Analytics & Segmentation Platform',
    description: 'Advanced platform using KMeans clustering and Random Forest for customer segmentation and churn prediction.',
    tech: ['Python', 'KMeans', 'Random Forest', 'Streamlit'],
    github: 'https://github.com/JayLikhar1/User-Behaviour-Analytics-and-Segmentation-Platform',
    live: 'https://user-behaviour-analytics-and-segmentation-platform.streamlit.app/',
    category: 'Data Science',
    icon: TrendingUp,
    gradient: 'from-blue-500 to-cyan-500',
    featured: true
  },
  {
    title: 'A/B Testing & Experimentation System',
    description: 'Microsoft-style experimentation platform for hypothesis testing and statistical analysis.',
    tech: ['Python', 'SciPy', 'statsmodels', 'Streamlit'],
    github: 'https://github.com/JayLikhar1/A-B-Testing-and-Experimentation-System',
    live: 'https://a-b-testing-and-experimentation-system-lq9zdfc2lj39mvnunrshhh.streamlit.app/',
    category: 'Analytics',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
    featured: true
  },
  {
    title: 'Amazon Customer Segmentation',
    description: 'KMeans-based customer segmentation tool providing marketing recommendations.',
    tech: ['Python', 'KMeans', 'Pandas', 'Streamlit'],
    github: 'https://github.com/JayLikhar1/Amazon-Customer-Segmentation',
    live: 'https://amazon-customer-segmentation-ghzq6fsiyhj4vpjarcfusn.streamlit.app/',
    category: 'Machine Learning',
    icon: Database,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'AI Chatbot (Groq + LLM)',
    description: 'Conversational AI chatbot powered by Groq inference and Llama 3.1 8B model.',
    tech: ['Python', 'LangChain', 'Groq', 'Llama 3.1'],
    github: 'https://github.com/JayLikhar1/AI-ChatBot-by-Jay',
    live: 'https://ai-chatbot-by-jay-ct6zsdpii6bbyk3q9lz4wv.streamlit.app/',
    category: 'AI/ML',
    icon: Zap,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Accessibility Analyzer',
    description: 'AI-powered WCAG 2.1 compliance analyzer for websites.',
    tech: ['React', 'AI Analysis', 'WCAG Standards'],
    github: 'https://github.com/JayLikhar1/Accessibility-Analyzer',
    live: 'https://accessibility-analyzer-git-main-jaylikhar1s-projects.vercel.app/',
    category: 'Web Development',
    icon: Shield,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Smart Study Scheduler',
    description: 'Full-stack ML-powered study scheduling platform with React, Flask, and MongoDB.',
    tech: ['React', 'Flask', 'MongoDB', 'JWT', 'ML'],
    github: 'https://github.com/JayLikhar1/smart-study-scheduler',
    live: 'https://smart-study-scheduler-8b7c-git-main-jaylikhar1s-projects.vercel.app/',
    category: 'Full Stack',
    icon: Code2,
    gradient: 'from-teal-500 to-blue-500',
    featured: true
  },
  {
    title: 'Heart Disease Predictor',
    description: 'Healthcare ML application using Random Forest classifier.',
    tech: ['Python', 'Random Forest', 'Scikit-learn'],
    github: 'https://github.com/JayLikhar1/HeartGuard-AI',
    live: 'https://heartguard-ai.onrender.com',
    category: 'Healthcare',
    icon: Brain,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Advanced Password Strength Checker',
    description: 'Security-focused password analysis tool with entropy calculation.',
    tech: ['Python', 'Flask', 'Security Analysis'],
    github: 'https://github.com/JayLikhar1/Advanced-Password-Checker',
    live: 'https://advanced-password-checker.onrender.com',
    category: 'Security',
    icon: Shield,
    gradient: 'from-gray-500 to-slate-500'
  }
];

const ProjectCard = ({ project, index }) => {
  const Icon = project.icon;
  
  return (
    <Card className={`bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm overflow-hidden hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 group flex flex-col relative ${project.featured ? 'lg:col-span-2' : ''}`}>
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-semibold text-white">
            <Star className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      {/* Background gradient effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      <div className="relative z-10 p-8 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white border border-white/20`}>
                {project.category}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-xs text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-6 border-t border-white/20">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button 
              variant="outline" 
              className="w-full bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-white hover:text-white group/btn"
            >
              <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
              Code
            </Button>
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-all duration-300 text-white border-0 group/btn`}>
              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
              Live Demo
            </Button>
          </a>
        </div>

        {/* Progress indicator */}
        <div className={`w-0 h-1 bg-gradient-to-r ${project.gradient} group-hover:w-full transition-all duration-700 rounded-full mt-4`}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-6 right-6 w-2 h-2 bg-white/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
};

const Projects = () => {
  const stats = [
    { number: '8+', label: 'Projects Built', icon: Rocket },
    { number: '100%', label: 'Success Rate', icon: Star },
    { number: '5+', label: 'Technologies', icon: Code2 },
    { number: '3', label: 'Featured Apps', icon: TrendingUp }
  ];

  return (
    <section id="projects" className="relative py-24 px-6 bg-white/[0.02] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-slate-300">Featured Projects</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            My Work
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Production-ready applications delivering real business value and solving complex problems
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm p-4 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="space-y-2">
                  <Icon className="w-6 h-6 text-purple-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold text-white">Want to see more?</h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Check out my GitHub for more projects and contributions to open source
              </p>
              <a href="https://github.com/JayLikhar1" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 group">
                  <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View All Projects
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
