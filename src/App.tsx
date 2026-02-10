import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CareerTimeline } from './components/CareerTimeline';
import { AcademicSection } from './components/AcademicSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { OrganizationsSection } from './components/OrganizationsSection';
import { VolunteeringSection } from './components/VolunteeringSection';
export function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-200 selection:bg-electric/30 selection:text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-20" />

      {/* Ambient Glow Effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-electric/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <CareerTimeline />
        <AcademicSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <OrganizationsSection />
        <VolunteeringSection />

        {/* Footer */}
        <footer className="py-12 border-t border-slate-800 bg-navy-900/80 backdrop-blur-sm text-center">
          <div className="text-slate-500 text-sm font-mono">
            <p className="mb-2">SECURE CONNECTION ESTABLISHED</p>
            <p>© {new Date().getFullYear()} JUAN ESTEBAN MUÑOZ DÍAZ. ALL RIGHTS RESERVED.</p>
            <div className="mt-4 flex justify-center gap-6 text-xs">
              <a href="https://linkedin.com/in/juaesm" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">LINKEDIN</a>
              <a href="https://github.com/hw4n1" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">GITHUB</a>
              <a href="mailto:hola@naing.co" className="hover:text-cyan transition-colors">EMAIL</a>
            </div>
          </div>
        </footer>
      </main>
    </div>);

}