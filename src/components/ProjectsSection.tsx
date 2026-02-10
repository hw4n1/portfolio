import { AnimatedSection } from './AnimatedSection';
import { Code, ExternalLink, Activity } from 'lucide-react';
import { projectsData } from '../data/projects';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-6 h-6 text-electric" />
            <h2 className="text-3xl font-bold text-white">
              ACTIVE <span className="text-electric">OPERATIONS</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-electric/50 to-transparent ml-4" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) =>
          <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group h-full bg-navy-800 border border-slate-700 rounded-lg overflow-hidden hover:border-electric/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] flex flex-col">
                {/* Top Accent Line */}
                <div className="h-1 w-full bg-gradient-to-r from-electric to-cyan opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${project.statusColor}`}>

                      {project.status}
                    </div>
                    <Activity className="w-4 h-4 text-slate-600 group-hover:text-electric transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) =>
                  <span
                    key={i}
                    className="text-xs text-slate-500 font-mono">

                        #{tag}
                      </span>
                  )}
                  </div>

                  <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm text-cyan hover:text-white transition-colors mt-auto">

                    <span>VIEW INTEL</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>);

}