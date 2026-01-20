import React from 'react';
import ProfileSection from './components/ProfileSection';
import ProjectsSection from './components/ProjectsSection';
import SocialLinks from './components/SocialLinks';
import Newsletter from './components/Newsletter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans selection:bg-orange-100 selection:text-orange-900">
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        
        <ProfileSection />
        
        <Newsletter />
        
        <ProjectsSection />
        
        <SocialLinks />

        <footer className="mt-20 pt-8 border-t border-stone-200 text-center md:text-left">
          <p className="text-xs text-stone-400 font-medium">
            © {new Date().getFullYear()} Joseph Christopherson. All rights reserved.
            <span className="mx-2">•</span>
            Designed with <span className="text-red-400">♥</span>
          </p>
        </footer>

      </main>
    </div>
  );
};

export default App;