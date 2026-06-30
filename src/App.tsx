import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Objective } from './components/Objective';
import { Contact } from './components/Contact';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-slate-900 min-h-screen font-sans selection:bg-cyan-500/30 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Objective />
          <Education />
          <Experience />
          <Projects />
          <Skills />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
