import { AnimatedSection } from './AnimatedSection';
import { Award, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export function CertificationsSection() {
  return (
    <section id="certs" className="py-20 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-6 h-6 text-cyan" />
            <h2 className="text-3xl font-bold text-white">
              VERIFIED <span className="text-cyan">CREDENTIALS</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan/50 to-transparent ml-4" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) =>
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-navy-800 border border-slate-700 rounded-lg p-6 relative group hover:border-cyan/50 transition-all duration-300">
                {/* Logo en lugar del escudo */}
                <div className="absolute top-4 right-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/5 rounded-lg p-2 border border-slate-700/50 group-hover:border-cyan/30 transition-colors">
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="h-10 w-auto object-contain max-w-[80px]"
                      onError={(e) => {
                        // Fallback al escudo si la imagen no carga
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement;
                        if (fallback) {
                          fallback.innerHTML = '<svg class="w-10 h-10 text-slate-700 group-hover:text-cyan/20 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>';
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span className="text-xs font-mono text-success tracking-wider">
                      VERIFIED
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 h-8">
                    {cert.fullName}
                  </p>

                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="flex justify-between text-xs font-mono text-slate-500">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                    <div className="mt-1 text-[10px] font-mono text-slate-600">
                      {cert.id}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>);

}