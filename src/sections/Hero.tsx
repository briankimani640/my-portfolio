export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 max-w-6xl mx-auto">
      <div className="space-y-6 max-w-3xl animate-fade-in-up">
        <p className="text-brand-accent font-mono">Hi, my name is</p>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-light">
          Brian Maina.
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400">
          I build robust systems & modern interfaces.
        </h2>
        
        <p className="text-lg text-slate-400 max-w-xl leading-relaxed pt-4">
          I'm a Full-Stack Developer and Mathematics & Computer Science undergraduate at JKUAT. 
          Currently honing my skills during an industrial attachment at JHUB Africa, I specialize 
          in bridging complex backend logic with seamless frontend experiences.
        </p>
        
        <div className="flex gap-4 pt-8">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-brand-accent text-brand-dark font-semibold rounded-md hover:bg-emerald-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            Check out my work
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border border-brand-accent text-brand-accent font-semibold rounded-md hover:bg-brand-accent/10 transition-all duration-300"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}