import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jaylikhar9@gmail.com',
      link: 'mailto:jaylikhar9@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9529212362',
      link: 'tel:+919529212362',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: null,
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/JayLikhar1',
      color: 'hover:text-purple-400',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jay-likhar-8820a6274/',
      color: 'hover:text-blue-400',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      link: 'https://www.instagram.com/jayylikhar/',
      color: 'hover:text-pink-400',
      gradient: 'from-pink-600 to-purple-600'
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'Let\'s Chat',
      description: 'Send me a message',
      action: 'mailto:jaylikhar9@gmail.com',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a meeting',
      action: 'tel:+919529212362',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="contact" className="relative py-24 px-6 bg-white/[0.02] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Send className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    Contact Information
                  </h3>
                  <p className="text-slate-400">
                    Feel free to reach out through any of these channels
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 relative overflow-hidden">
                        {/* Hover gradient effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                        
                        <div className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="relative z-10">
                          <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{item.label}</p>
                          <p className="text-white font-medium group-hover:text-white transition-colors">{item.value}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    );

                    return item.link ? (
                      <a key={index} href={item.link} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-slate-400 mb-6">Connect on social media</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative"
                        >
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${social.gradient} bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110 border border-white/10 hover:border-white/20`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    Let's Collaborate
                  </h3>
                  <p className="text-slate-400">
                    Ready to start your next project? Choose how you'd like to connect
                  </p>
                </div>

                <div className="space-y-4">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <a key={index} href={action.action} className="block group">
                        <div className={`p-6 rounded-xl bg-gradient-to-r ${action.gradient} bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 border border-white/10 hover:border-white/20 group-hover:scale-105 relative overflow-hidden`}>
                          {/* Hover effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                          
                          <div className="relative z-10 flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
                                {action.title}
                              </h4>
                              <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                                {action.description}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      I'm currently available for full-time opportunities, freelance projects, and interesting collaborations in:
                    </p>
                    <ul className="space-y-3 text-slate-400">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                        Full Stack Development
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400"></div>
                        Data Science & Machine Learning
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                        Web Application Development
                      </li>
                    </ul>
                  </div>

                  <a href="mailto:jaylikhar9@gmail.com" className="block mt-6">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 group">
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Email
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-slate-400">
            © 2026 Jay Likhar. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
