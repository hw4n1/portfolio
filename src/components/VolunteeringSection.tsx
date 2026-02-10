import { AnimatedSection } from './AnimatedSection';
import { Heart, Globe } from 'lucide-react';
import { volunteeringData } from '../data/volunteering';

export function VolunteeringSection() {
  return (
    <section id="volunteering" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <Heart className="w-6 h-6 text-electric" />
            <h2 className="text-3xl font-bold text-white">
              MISSION <span className="text-electric">BRIEFINGS</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-electric/50 to-transparent ml-4" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {volunteeringData.map((mission, index) =>
          <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-navy-800/50 border border-slate-700 p-6 rounded-lg hover:bg-navy-800 transition-colors relative overflow-hidden">
                {/* Stamp Effect */}
                <div className="absolute -right-4 -top-4 w-24 h-24 border-4 border-slate-700/20 rounded-full flex items-center justify-center rotate-12 pointer-events-none">
                  <span className="text-[10px] font-mono font-bold text-slate-700/30 tracking-widest">
                    CLASSIFIED
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-4 h-4 text-electric" />
                  <span className="text-xs font-mono text-electric tracking-wider">
                    {mission.org.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {mission.title}
                </h3>
                <div className="text-sm text-cyan mb-4">{mission.role}</div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {mission.description}
                </p>

                <div className="inline-block px-2 py-1 bg-slate-700/30 rounded text-[10px] font-mono text-slate-400 border border-slate-600/30">
                  STATUS: {mission.status}
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>);

}