import { AnimatedSection } from './AnimatedSection';
import { Users, Building2, CheckCircle2 } from 'lucide-react';
import { organizationsData } from '../data/organizations';

export function OrganizationsSection() {
  return (
    <section id="organizations" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <Users className="w-6 h-6 text-electric" />
            <h2 className="text-3xl font-bold text-white">
              PROFESSIONAL <span className="text-electric">ORGANIZATIONS</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-electric/50 to-transparent ml-4" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizationsData.map((org, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className="h-full">
              <div className="bg-navy-800 border border-slate-700 rounded-lg p-6 relative group hover:border-electric/50 transition-all duration-300 h-full flex flex-col">
                <div className="absolute top-4 right-4 text-slate-700 group-hover:text-electric/20 transition-colors">
                  <Building2 className="w-12 h-12" />
                </div>

                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span className={`text-xs font-mono tracking-wider ${
                      org.status === 'LEADERSHIP' 
                        ? 'text-electric border-electric/30 bg-electric/10 px-2 py-0.5 rounded border' 
                        : 'text-success'
                    }`}>
                      {org.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric transition-colors">
                    {org.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-3">
                    {org.fullName}
                  </p>

                  <div className="mb-4 flex-1 flex flex-col">
                    <div className="text-sm font-mono text-cyan mb-2">
                      {org.role}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed flex-1">
                      {org.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

