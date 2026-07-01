import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications'; // New Import
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light font-sans selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      
      <main className="pt-20">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications /> 
        <Contact />
      </main>
    </div>
  );
}