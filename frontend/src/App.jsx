import { profile, skills, projects, experiences } from './data/portfolioData';
import BackgroundOrbs from './components/BackgroundOrbs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-950">
      {/* Background ambient orbs */}
      <BackgroundOrbs />

      {/* Navigation */}
      <Navbar profile={profile} />

      {/* Main Content */}
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experiences={experiences} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />
    </div>
  );
}

export default App;