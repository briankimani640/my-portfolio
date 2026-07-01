import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12 animate-fade-in-up">
        <span className="text-brand-accent font-mono text-xl">01.</span>
        <h2 className="text-3xl font-bold text-brand-light">Technical Arsenal</h2>
        <div className="h-px bg-slate-700 flex-grow ml-4 max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {portfolioData.skills.map((skillGroup, index) => (
          <div 
            key={index} 
            className="bg-slate-800/30 border border-slate-700 p-8 rounded-xl hover:border-brand-accent/50 hover:bg-slate-800/50 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-brand-light mb-6 tracking-wide">
              {skillGroup.category}
            </h3>
            <ul className="space-y-4">
              {skillGroup.items.map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-400 font-mono text-sm">
                  <span className="text-brand-accent mr-3">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}