import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
      <span className="text-brand-accent font-mono text-xl mb-4 block">05. What's Next?</span>
      <h2 className="text-4xl md:text-5xl font-bold text-brand-light mb-6">Get In Touch</h2>
      
      <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
        Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. 
        I am currently open to new opportunities and collaborations in software development and systems engineering.
      </p>

    <a 
  href="mailto:briankimani640@gmail.com" 
  className="inline-block px-8 py-4 border-2 border-brand-accent text-brand-accent font-mono font-semibold rounded-md hover:bg-brand-accent/10 transition-all duration-300 mb-20"
>
  Say Hello
</a>

      <div className="flex flex-col items-center gap-6 mt-12 border-t border-slate-800 pt-8">
        <div className="flex gap-8 justify-center">
          <a href="https://github.com/briankimani640" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-accent transition-all hover:scale-110">
            <Github size={28} />
          </a>
          
          <a href="https://linkedin.com/in/briankimani640" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-accent transition-all hover:scale-110">
            <Linkedin size={28} />
          </a>

          <a 
            href="mailto:briankimani640@gmail.com" 
            className="text-slate-400 hover:text-brand-accent transition-all hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
        
        <p className="text-slate-500 text-sm font-mono text-center mt-4">
          Designed & Built by Brian Maina <br/>
          <span className="text-xs mt-2 block">Powered by React & Tailwind v4</span>
        </p>
      </div>
    </section>
  );
}