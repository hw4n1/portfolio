import { AnimatedSection } from './AnimatedSection';
import { Code2, Terminal, Shield, Cloud, Database, Wrench, LucideIcon } from 'lucide-react';
import { skillsData } from '../data/skills';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Terminal,
  Code2,
  Cloud,
  Database,
  Wrench,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="w-6 h-6 text-electric" />
            <h2 className="text-3xl font-bold text-white">
              TECHNICAL <span className="text-electric">STACK</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-electric/50 to-transparent ml-4" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-navy-800 border border-slate-700 rounded-lg p-6 relative group hover:border-electric/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-electric/10 rounded-lg border border-electric/20">
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-electric transition-colors">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 flex-1">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-slate-300 bg-navy-900/50 px-3 py-1.5 rounded border border-slate-700/50 hover:border-electric/50 hover:text-electric transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

