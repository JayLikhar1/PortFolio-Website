import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, Trophy, Users, Code, Brain, Sparkles } from 'lucide-react';
import { Card } from '../components/ui/card';

const Education = () => {
  const highlights = [
    { icon: Award, label: 'CGPA', value: '7.71', color: 'from-yellow-400 to-orange-400' },
    { icon: Calendar, label: 'Duration', value: '4 Years', color: 'from-blue-400 to-cyan-400' },
    { icon: BookOpen, label: 'Major', value: 'CSE', color: 'from-green-400 to-emerald-400' },
    { icon: Trophy, label: 'Status', value: 'Final Year', color: 'from-purple-400 to-pink-400' }
  ];

  const coursework = [
    {
      category: 'Core Computer Science',
      subjects: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Computer Networks', 'Operating Systems'],
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'AI & Machine Learning',
      subjects: ['Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'Neural Networks', 'Pattern Recognition'],
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Software Engineering',
      subjects: ['Software Engineering', 'Web Development', 'Mobile App Development', 'System Design', 'DevOps'],
      icon: BookOpen,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const achievements = [
    'Active participant in technical hackathons and coding competitions',
    'Completed multiple industry-relevant projects during coursework',
    'Strong foundation in both theoretical concepts and practical implementation',
    'Consistent academic performance with focus on emerging technologies'
  ];

  return (
    <section id="education" className="relative py-24 px-6 bg-white/[0.02] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300">Academic Background</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Building a strong foundation in computer science and engineering
          </p>
        </div>

        {/* Main Education Card */}
        <Card className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm overflow-hidden mb-12 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* University Logo/Icon Section */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
                <div className="mt-4 text-center">
                  <div className="flex items-center gap-1 justify-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
                    <BookOpen className="w-3 h-3 text-blue-400" />
                    <span className="text-xs text-blue-300 font-medium">Final Year</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-grow space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    Bachelor of Technology
                  </h3>
                  <p className="text-xl text-slate-300 font-medium">
                    Computer Science & Engineering
                  </p>
                  <p className="text-2xl text-slate-300 font-medium">
                    Parul University
                  </p>
                  
                  <div className="flex flex-wrap gap-6 text-slate-400">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 border border-white/20">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>2022 – 2026</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 border border-white/20">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-white font-semibold">CGPA: 7.71</span>
                    </div>
                  </div>
                </div>

                {/* Highlights Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {highlights.map((highlight, index) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                        <Icon className={`w-6 h-6 mx-auto mb-2 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`} />
                        <div className="text-xl font-bold text-white">{highlight.value}</div>
                        <div className="text-xs text-slate-400">{highlight.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </Card>

        {/* Coursework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {coursework.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-6 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/10 group relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${course.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300">
                      {course.category}
                    </h4>
                  </div>
                  
                  <div className="space-y-2">
                    {course.subjects.map((subject, idx) => (
                      <div key={idx} className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                        {subject}
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress indicator */}
                  <div className={`w-0 h-1 bg-gradient-to-r ${course.gradient} group-hover:w-full transition-all duration-700 rounded-full`}></div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Achievements & Activities */}
        <Card className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-xl"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Academic Achievements & Activities</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Trophy className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <p className="text-slate-400 leading-relaxed">
                My academic journey has provided a comprehensive foundation in 
                <span className="text-white font-semibold"> computer science fundamentals</span>, 
                <span className="text-white font-semibold"> modern software development practices</span>, and 
                <span className="text-white font-semibold"> emerging technologies like AI and machine learning</span>.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
