import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <span className="text-brand-accent font-mono text-xl">03.</span>
        <h2 className="text-3xl font-bold text-brand-light">Where I've Worked</h2>
        <div className="h-px bg-slate-700 flex-grow ml-4 max-w-xs"></div>
      </div>

      <div className="space-y-12">
        {portfolioData.experience.map((job, index) => (
          <div key={index} className="relative pl-8 border-l border-slate-700 hover:border-brand-accent transition-colors duration-300">
            {/* Timeline Dot */}
            <div className="absolute w-3 h-3 bg-brand-dark border-2 border-brand-accent rounded-full -left-[7px] top-1.5"></div>
            
            <h3 className="text-xl font-bold text-brand-light">
              {job.role} <span className="text-brand-accent">@ {job.company}</span>
            </h3>
            <p className="text-sm font-mono text-slate-400 mt-1 mb-4">{job.period}</p>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}