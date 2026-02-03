import React from 'react';
import { Card } from '../components/ui/card';
import { Trophy, Target, Calendar, Users, Sparkles, Medal, Zap, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Flipkart GRiD 6.0',
      category: 'Software Development Track',
      description: 'Participated in one of India\'s largest hackathons, competing in the software development track. Demonstrated problem-solving skills and technical innovation in building scalable solutions.',
      year: '2024',
      icon: Trophy,
      gradient: 'from-blue-500 to-cyan-500',
      participants: '50,000+',
      featured: true
    },
    {
      title: 'Quantathon – TRBS 2024',
      category: 'IIM Ahmedabad',
      description: 'Competed in the prestigious quantitative analytics competition organized by IIM Ahmedabad. Applied advanced data analysis and statistical modeling techniques to solve real-world business problems.',
      year: '2024',
      icon: Target,
      gradient: 'from-purple-500 to-pink-500',
      participants: '1,000+',
      featured: true
    }
  ];

  const stats = [
    { number: '2', label: 'Major Competitions', icon: Trophy },
    { number: '50K+', label: 'Total Participants', icon: Users },
    { number: '2024', label: 'Active Year', icon: Calendar },
    { number: '100%', label: 'Completion Rate', icon: Medal }
  ];

  const skills = [
    'Problem Solving', 'Team Collaboration', 'Time Management', 'Innovation', 
    'Technical Presentation', 'Competitive Programming', 'Data Analysis', 'Strategic Thinking'
  ];

  return (
    <section id="achievements" className="relative py-24 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-slate-300">Competitive Achievements</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Hackathons and competitive programming experiences that shaped my problem-solving skills
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm p-4 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="space-y-2">
                  <Icon className="w-6 h-6 text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 group relative overflow-hidden"
              >
                {/* Featured badge */}
                {achievement.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-semibold text-white">
                      <Star className="w-3 h-3" />
                      Major Event
                    </div>
                  </div>
                )}

                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${achievement.gradient} bg-opacity-20 flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-slate-400 font-mono block">
                        {achievement.year}
                      </span>
                      <div className="flex items-center gap-1 mt-1 px-2 py-1 rounded-full bg-white/10 border border-white/20">
                        <Users className="w-3 h-3 text-slate-400" />
                        <span className="text-xs text-slate-400">{achievement.participants}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r ${achievement.gradient} bg-opacity-20 border border-white/20`}>
                        <Medal className="w-4 h-4 text-white" />
                        <span className="text-sm text-white font-semibold">
                          {achievement.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Badge */}
                  <div className="pt-4 border-t border-white/20">
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${achievement.gradient} bg-opacity-20 border border-white/20 text-sm font-medium text-white`}>
                      <Zap className="w-4 h-4" />
                      Competition Participant
                    </span>
                  </div>

                  {/* Progress indicator */}
                  <div className={`w-0 h-1 bg-gradient-to-r ${achievement.gradient} group-hover:w-full transition-all duration-700 rounded-full`}></div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-white/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            );
          })}
        </div>

        {/* Skills Gained */}
        <Card className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Skills Developed Through Competition</h3>
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
                These competitive experiences have been instrumental in developing my 
                <span className="text-white font-semibold"> problem-solving mindset</span>, 
                <span className="text-white font-semibold"> ability to work under pressure</span>, and 
                <span className="text-white font-semibold"> collaborative skills in high-stakes environments</span>.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;
