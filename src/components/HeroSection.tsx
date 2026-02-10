import { AnimatedSection } from './AnimatedSection';
import { RadarGraphic } from './RadarGraphic';
import { Terminal, MapPin, ChevronRight } from 'lucide-react';
export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20">

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <AnimatedSection className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-xs font-mono font-bold text-success tracking-wider">
              THREAT LEVEL: FRIENDLY
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Juan Esteban{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">
              Muñoz Diaz
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-400 mb-6 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-electric" />
            <span>Cybersecurity Engineer | Ethical Hacking</span>
          </h2>

          <p className="text-slate-400 max-w-lg mb-8 leading-relaxed">
          Cybersecurity Engineer and M.S. student in Information Security with hands-on experience in Application Security, Ethical Hacking, and vulnerability management. Experience performing web and API security testing aligned with OWASP Top 10, integrating SAST/DAST into CI/CD pipelines, and participating in Bug Bounty programs.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
              <MapPin className="w-4 h-4 text-cyan" />
              <span>Bogotá, Colombia</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
              <span className="w-2 h-2 bg-electric rounded-full" />
              <span>+57 305 895 7432</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
              <span className="w-2 h-2 bg-cyan rounded-full" />
              <a href="mailto:hola@naing.co" className="hover:text-cyan transition-colors">hola@naing.co</a>
            </div>
          </div>

          <button
            onClick={() =>
            document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth'
            })
            }
            className="group relative px-6 py-3 bg-electric/10 border border-electric/50 text-electric font-mono text-sm tracking-wider hover:bg-electric/20 transition-all duration-300 flex items-center gap-2 overflow-hidden">

            <span className="relative z-10">INITIATE PROTOCOL</span>
            <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-electric/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </AnimatedSection>

        {/* Visual Content */}
        <AnimatedSection
          delay={0.2}
          className="order-1 lg:order-2 flex justify-center lg:justify-end">

          <div className="relative">
            <RadarGraphic />

            {/* Decorative Elements around Radar */}
            <div className="absolute -top-10 -right-10 w-20 h-20 border-t-2 border-r-2 border-cyan/20 rounded-tr-3xl" />
            <div className="absolute -bottom-10 -left-10 w-20 h-20 border-b-2 border-l-2 border-electric/20 rounded-bl-3xl" />

            <div className="absolute top-0 left-0 text-[10px] font-mono text-slate-600">
              SYS.MONITORING
              <br />
              V.2.0.4
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] font-mono text-slate-500">
          SCROLL TO SCAN
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-cyan to-transparent" />
      </div>
    </section>);

}