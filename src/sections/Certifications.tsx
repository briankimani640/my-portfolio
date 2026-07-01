import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-brand-accent font-mono text-xl">04.</span>
        <h2 className="text-3xl font-bold text-brand-light">Certifications & Training</h2>
        <div className="h-px bg-slate-700 flex-grow ml-4 max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {portfolioData.certifications.map((cert, index) => (
          <div 
            key={index} 
            className="group bg-slate-800/30 border border-slate-700 p-6 rounded-xl hover:border-brand-accent/50 hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Certificate Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent mb-4 group-hover:scale-110 transition-transform">
              <path d="M22 8.5V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.5"></path>
              <path d="M2 8.5l10-4 10 4"></path>
              <path d="M12 22v-9.5"></path>
              <path d="M8 12.5v7"></path>
              <path d="M16 12.5v7"></path>
            </svg>
            
            <h3 className="text-lg font-bold text-brand-light mb-2">{cert.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>
            
            <div className="text-xs font-mono text-brand-accent bg-brand-accent/10 inline-block px-3 py-1 rounded-full border border-brand-accent/20">
              {cert.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}