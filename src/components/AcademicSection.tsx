import { AnimatedSection } from './AnimatedSection';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../data/education';

export function AcademicSection() {
  return (
    <section id="academic" className="py-20 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-6 h-6 text-cyan" />
            <h2 className="text-3xl font-bold text-white">
              ACADEMIC <span className="text-cyan">RECORD</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan/50 to-transparent ml-4" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) =>
          <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-navy-800 border border-slate-700 p-6 rounded-lg relative overflow-hidden group hover:border-cyan/30 transition-all duration-300">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <GraduationCap className="w-24 h-24" />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-cyan">{edu.school}</p>
                    </div>
                    <span className="font-mono text-sm text-slate-400 border border-slate-700 px-2 py-1 rounded">
                      {edu.year}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                      <span>{edu.gpa ? 'ACADEMIC PERFORMANCE' : 'STATUS'}</span>
                      <span>{edu.gpa ? `GPA: ${edu.gpa}/5.0` : edu.status}</span>
                    </div>
                    <div className="h-2 bg-navy-900 rounded-full overflow-hidden border border-slate-700">
                      <div
                      className="h-full bg-gradient-to-r from-cyan to-electric"
                      style={{
                        width: edu.gpa ? `${(edu.gpa / 5) * 100}%` : edu.status === 'In Progress' ? '60%' : '100%'
                      }} />

                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) =>
                  <span
                    key={i}
                    className="text-xs font-mono text-slate-300 bg-navy-900 px-2 py-1 rounded border border-slate-700/50">

                        {course}
                      </span>
                  )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>);

}