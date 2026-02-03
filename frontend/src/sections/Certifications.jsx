import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ExternalLink, Award, Calendar, Building, Sparkles, CheckCircle, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Deloitte Australia Data Analytics Job Simulation',
      issuer: 'Forage',
      year: '2026',
      description: 'Completed hands-on data analytics simulation covering business intelligence, data visualization, and strategic insights',
      link: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_qRjPNgXnx3DYaNC',
      gradient: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      title: 'SQL (Intermediate)',
      issuer: 'HackerRank',
      year: '2025',
      description: 'Demonstrated proficiency in complex SQL queries, joins, subqueries, and database optimization',
      link: 'https://www.hackerrank.com/certificates/iframe/63dbe4adafff',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Python (Basic)',
      issuer: 'HackerRank',
      year: '2024',
      description: 'Certified in Python fundamentals including data structures, algorithms, and object-oriented programming',
      link: 'https://www.hackerrank.com/certificates/iframe/77fab85a4200',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Amazon Q Introduction',
      issuer: 'AWS',
      year: '2026',
      description: 'Completed training on Amazon Q, AWS\'s generative AI-powered assistant for business intelligence and development',
      link: 'https://skillbuilder.aws',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Career Essentials in Generative AI',
      issuer: 'Microsoft & LinkedIn',
      year: '2024',
      description: 'Comprehensive understanding of generative AI applications, ethics, and integration in professional settings',
      link: 'https://www.linkedin.com/learning/certificates/4503889aa7ae8d2ea826e113efa03bae565321d3fef8e263fb5f8158faaa0fbf',
      gradient: 'from-purple-500 to-pink-500',
      featured: true
    }
  ];

  const stats = [
    { number: '5+', label: 'Certifications', icon: Award },
    { number: '3', label: 'Platforms', icon: Building },
    { number: '2026', label: 'Latest', icon: Calendar },
    { number: '100%', label: 'Verified', icon: CheckCircle }
  ];

  return (
    <section id="certifications" className="relative py-24 px-6 bg-white/[0.02] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-slate-300">Professional Credentials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through industry-recognized credentials
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-6 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/10 group flex flex-col relative overflow-hidden ${cert.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Featured badge */}
              {cert.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-semibold text-white">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}

              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex-grow space-y-4">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${cert.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-slate-400 font-mono">{cert.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-white transition-colors duration-300">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                {/* Issuer */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 border border-white/20 w-fit">
                  <Building className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-300">{cert.issuer}</span>
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 flex-grow">
                  {cert.description}
                </p>

                {/* Progress indicator */}
                <div className={`w-0 h-1 bg-gradient-to-r ${cert.gradient} group-hover:w-full transition-all duration-700 rounded-full`}></div>
              </div>

              {/* Link Button */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/20">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    className={`w-full bg-gradient-to-r ${cert.gradient} hover:opacity-90 transition-all duration-300 text-white border-0 group/btn`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                    View Certificate
                  </Button>
                </a>
              </div>

              {/* Floating elements */}
              <div className="absolute top-6 right-6 w-2 h-2 bg-white/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Continuous Learning</h3>
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-slate-400 max-w-2xl mx-auto">
                I'm constantly updating my skills and earning new certifications to stay current with industry trends and emerging technologies.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
