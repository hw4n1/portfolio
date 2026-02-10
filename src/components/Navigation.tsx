import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Activity,
  Briefcase,
  GraduationCap,
  Heart,
  Code,
  Award,
  Users,
  Code2 } from
'lucide-react';
const navItems = [
{
  id: 'hero',
  label: 'STATUS',
  icon: Activity
},
{
  id: 'career',
  label: 'CAREER',
  icon: Briefcase
},
{
  id: 'academic',
  label: 'ACADEMIC',
  icon: GraduationCap
},
{
  id: 'projects',
  label: 'OPS',
  icon: Code
},
{
  id: 'skills',
  label: 'SKILLS',
  icon: Code2
},
{
  id: 'certs',
  label: 'CERTS',
  icon: Award
},
{
  id: 'organizations',
  label: 'ORGS',
  icon: Users
},
{
  id: 'volunteering',
  label: 'MISSION',
  icon: Heart
}];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Simple section detection
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        if (
        section &&
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition)
        {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-navy-900/90 backdrop-blur-md border-navy-700 py-3' : 'bg-transparent border-transparent py-5'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection('hero')}>

          <div className="relative">
            <Shield className="w-6 h-6 text-electric group-hover:text-cyan transition-colors" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-success rounded-full animate-pulse" />
          </div>
          <span className="font-mono font-bold text-lg tracking-wider text-slate-200 group-hover:text-white transition-colors">
            <span className="text-electric">NAING</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 ${isActive ? 'text-cyan bg-cyan/10' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}>

                <Icon
                  className={`w-4 h-4 ${isActive ? 'animate-pulse' : ''}`} />

                <span className="text-xs font-bold tracking-wider">
                  {item.label}
                </span>
                {isActive &&
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan shadow-[0_0_10px_#06B6D4]" />

                }
              </button>);

          })}
        </div>

        {/* Mobile Indicator */}
        <div className="md:hidden flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-mono text-slate-400">
            SYSTEM ONLINE
          </span>
        </div>
      </div>
    </motion.nav>);

}