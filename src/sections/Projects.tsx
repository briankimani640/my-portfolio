import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-brand-accent font-mono text-xl">02.</span>
        <h2 className="text-3xl font-bold text-brand-light">Featured Systems</h2>
        <div className="h-px bg-slate-700 flex-grow ml-4 max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col justify-between bg-slate-800/30 border border-slate-700 p-8 rounded-xl hover:border-brand-accent/50 hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="text-brand-accent">
                  {/* Folder Icon using raw SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                  {project.type}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-light mb-3 group-hover:text-brand-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                {project.description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-3 mt-auto">
              {project.tech.map((tech, idx) => (
                <li key={idx} className="text-xs font-mono text-slate-300 bg-slate-800 px-2 py-1 rounded">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}