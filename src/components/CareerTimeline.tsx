import { AnimatedSection } from './AnimatedSection';
import { Briefcase, Calendar } from 'lucide-react';
import { careerData } from '../data/career';

export function CareerTimeline() {
  return (
    <section id="career" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-6 h-6 text-electric" />
            <h2 className="text-3xl font-bold text-white">
              PROFESSIONAL <span className="text-electric">CAREER</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-electric/50 to-transparent ml-4" />
          </div>
        </AnimatedSection>

        <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
          {careerData.map((job, index) =>
          <AnimatedSection
            key={index}
            delay={index * 0.1}
            className="relative pl-8 md:pl-12">

              {/* Timeline Node */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-navy-900 border-2 border-electric shadow-[0_0_10px_#3B82F6] z-10">
                <div className="absolute inset-0 rounded-full bg-electric animate-ping opacity-20" />
              </div>

              <div className="bg-navy-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-electric/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-electric transition-colors">
                      {job.role}
                    </h3>
                    <div className="text-cyan font-medium">{job.company}</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-mono text-slate-400 bg-navy-900/50 px-3 py-1 rounded-full border border-slate-700">
                    <Calendar className="w-3 h-3" />
                    {job.period}
                  </div>
                </div>

                <p className="text-slate-400 mb-4">{job.description}</p>

                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) =>
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-300">

                      <span className="mt-1.5 w-1 h-1 bg-electric rounded-full flex-shrink-0" />
                      {achievement}
                    </li>
                )}
                </ul>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>);

}