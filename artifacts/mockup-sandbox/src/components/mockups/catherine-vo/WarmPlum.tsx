import React from "react";
import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone,
  Layers,
  Settings,
  Users,
  TerminalSquare,
  Workflow
} from "lucide-react";

export function WarmPlum() {
  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden"
      style={{ 
        backgroundColor: "#F5F3F8", 
        color: "#1A1535",
        fontFamily: "'Plus Jakarta Sans', sans-serif" 
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap');
        
        .font-serif {
          font-family: 'Fraunces', serif;
        }
        
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
        }
        
        .btn-plum {
          background-color: #6B3FA0;
          color: #FFFFFF;
          box-shadow: 0 10px 25px -5px rgba(107,63,160,0.3);
        }
        .btn-plum:hover {
          background-color: #5A2E8A;
        }
      `}} />

      {/* Noise overlay for tactile feel */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-noise mix-blend-overlay"></div>

      {/* Decorative background blur/gradients */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #6B3FA0 0%, rgba(107,63,160,0) 70%)" }}
      ></div>
      <div 
        className="absolute top-[40%] right-[-10%] w-[40%] h-[60%] rounded-full blur-[140px] opacity-[0.15] pointer-events-none"
        style={{ background: "radial-gradient(circle, #9B72CF 0%, rgba(155,114,207,0) 70%)" }}
      ></div>

      {/* Navigation / Header */}
      <header className="w-full border-b" style={{ borderColor: "rgba(107,63,160,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="font-serif text-2xl tracking-tight" style={{ color: "#1A1535" }}>
            Catherine Vo<span style={{ color: "#6B3FA0" }}>.</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: "#6B6480" }}>
            <span className="flex items-center gap-2">
              <Mail size={16} /> catherine@fourfoldcreative.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Austin, TX
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full px-6 pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
          
          <div className="w-full lg:w-3/5 z-10 flex flex-col items-start">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{ backgroundColor: "#EBE6F5", color: "#6B3FA0" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#6B3FA0" }}></span>
              Fractional Chief of Staff & Integrator
            </div>
            
            <h1 
              className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
              style={{ color: "#1A1535" }}
            >
              The operational engine behind <span className="italic" style={{ color: "#6B3FA0" }}>visionary founders.</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
              style={{ color: "#6B6480" }}
            >
              I step into growing tech startups and modern SMBs as your Fractional Chief of Staff and Integrator. I eliminate operational bottlenecks, unify your tech stack, and establish the execution rhythm your team needs to scale effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button 
                className="btn-plum w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                Book an Operational Audit
                <ArrowRight size={18} />
              </button>
              <button 
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all hover:bg-black/5"
                style={{ border: "1px solid #1A1535", color: "#1A1535" }}
              >
                View My Experience
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 relative z-10">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              {/* Decorative offset frames */}
              <div 
                className="absolute inset-0 rounded-2xl transform translate-x-4 translate-y-4"
                style={{ backgroundColor: "#9B72CF", opacity: 0.2 }}
              ></div>
              <div 
                className="absolute inset-0 rounded-2xl transform -translate-x-2 -translate-y-2 border"
                style={{ borderColor: "#6B3FA0" }}
              ></div>
              <img 
                src="/__mockup/images/catherine-headshot.jpg" 
                alt="Catherine Vo"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl z-10"
                style={{ border: "4px solid #F5F3F8" }}
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Metrics Banner */}
      <section 
        className="w-full py-12 border-y"
        style={{ borderColor: "rgba(107,63,160,0.1)", backgroundColor: "#EBE6F5" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x" style={{ divideColor: "rgba(107,100,128,0.2)" }}>
            <div className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-4xl md:text-5xl mb-2" style={{ color: "#6B3FA0" }}>$5M</span>
              <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6B6480" }}>Annual Savings</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-4xl md:text-5xl mb-2" style={{ color: "#1A1535" }}>67%</span>
              <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6B6480" }}>Backlog Reduction</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-3xl md:text-4xl mb-2 flex items-center gap-2" style={{ color: "#6B3FA0" }}>
                14d <ArrowRight size={24} className="opacity-50" /> 2m
              </span>
              <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6B6480" }}>Processing Time</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-4xl md:text-5xl mb-2" style={{ color: "#1A1535" }}>10M+</span>
              <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6B6480" }}>Automated Ops</span>
            </div>
          </div>
        </div>
      </section>

      {/* About & Quote Block */}
      <section className="w-full py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight relative z-10"
              style={{ color: "#1A1535" }}
            >
              <div 
                className="absolute -top-10 -left-6 text-9xl opacity-20 -z-10 font-serif"
                style={{ color: "#9B72CF" }}
              >
                &ldquo;
              </div>
              Logical systems and human space are not opposing forces—they are the foundation of true execution.
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-lg" style={{ color: "#6B6480" }}>
            <p>
              Most organizations don't struggle because they lack vision; they struggle because their operational infrastructure and human alignment are out of sync.
            </p>
            <p>
              With a polymathic background spanning computer science (Columbia B.A.), creative direction (NYU M.A.), and professional facilitation, I build the invisible scaffolding that makes scale feel effortless.
            </p>
            <p>
              Whether you need an Integrator to bring accountability to your engineering and product cadence, or an operational partner to navigate a complex company transition, I bring the technical depth to fix your stack and the emotional intelligence to unite your team.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Pillars */}
      <section className="w-full py-24 px-6 relative">
        <div className="absolute inset-0 opacity-40" style={{ backgroundColor: "#EBE6F5" }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row gap-6 items-end justify-between">
            <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "#1A1535" }}>
              The Execution Framework
            </h2>
            <p className="max-w-md text-lg" style={{ color: "#6B6480" }}>
              Three interconnected pillars designed to bring calm clarity to complex organizational growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div 
              className="p-8 md:p-10 rounded-2xl flex flex-col h-full relative overflow-hidden group"
              style={{ backgroundColor: "#F5F3F8", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}
            >
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: "#EBE6F5", opacity: 0.5 }}
              ></div>
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 relative z-10"
                style={{ backgroundColor: "#6B3FA0", color: "#FFFFFF" }}
              >
                <Settings size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "#6B3FA0" }}>
                The Technical Engine
              </h3>
              <h4 className="font-serif text-2xl mb-4" style={{ color: "#1A1535" }}>
                System Architecture & Process Lift
              </h4>
              <p className="mb-8 flex-grow" style={{ color: "#6B6480" }}>
                "Founders shouldn't be buried in manual workflows. I audit, connect, and automate your tool stack so information flows smoothly across teams."
              </p>
              <div className="pt-6 border-t" style={{ borderColor: "rgba(107,100,128,0.15)" }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#1A1535" }}>Proof of Impact</div>
                <p className="text-sm italic" style={{ color: "#1A1535" }}>
                  Slashed enterprise processing times from 14 days down to 2 minutes and prevented $1M in redundant software licensing expenditures through rigorous system governance.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div 
              className="p-8 md:p-10 rounded-2xl flex flex-col h-full relative overflow-hidden group"
              style={{ backgroundColor: "#F5F3F8", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}
            >
               <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: "#EBE6F5", opacity: 0.5 }}
              ></div>
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 relative z-10"
                style={{ backgroundColor: "#6B3FA0", color: "#FFFFFF" }}
              >
                <Layers size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "#6B3FA0" }}>
                The Accountability Cadence
              </h3>
              <h4 className="font-serif text-2xl mb-4" style={{ color: "#1A1535" }}>
                Execution Rhythm & Scorecards
              </h4>
              <p className="mb-8 flex-grow" style={{ color: "#6B6480" }}>
                "Translating high-level company goals into clear, cross-functional deliverables, quarterly scorecards, and sprint-ready workflows."
              </p>
              <div className="pt-6 border-t" style={{ borderColor: "rgba(107,100,128,0.15)" }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#1A1535" }}>Proof of Impact</div>
                <p className="text-sm italic" style={{ color: "#1A1535" }}>
                  Built and mentored technical delivery teams into structured product divisions, earning recognition like H-E-B Digital's 'Swoon Award for Innovation' and the 'Because People Matter' Award.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div 
              className="p-8 md:p-10 rounded-2xl flex flex-col h-full relative overflow-hidden group"
              style={{ backgroundColor: "#F5F3F8", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}
            >
               <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: "#EBE6F5", opacity: 0.5 }}
              ></div>
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 relative z-10"
                style={{ backgroundColor: "#6B3FA0", color: "#FFFFFF" }}
              >
                <Users size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "#6B3FA0" }}>
                The Facilitation Anchor
              </h3>
              <h4 className="font-serif text-2xl mb-4" style={{ color: "#1A1535" }}>
                Human Alignment & Group Dynamics
              </h4>
              <p className="mb-8 flex-grow" style={{ color: "#6B6480" }}>
                "Bringing calm structure and psychological safety into high-stakes rooms. I resolve cross-functional friction and guide teams through complex organizational transitions."
              </p>
              <div className="pt-6 border-t" style={{ borderColor: "rgba(107,100,128,0.15)" }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#1A1535" }}>Credential</div>
                <p className="text-sm italic" style={{ color: "#1A1535" }}>
                  Backed by a 15-year technical foundation (Columbia Computer Science) paired with advanced professional frameworks, including ICA Technology of Participation (ToP) Facilitation Training (July 2026).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Fluency & Scope */}
      <section className="w-full py-24 px-6 border-b" style={{ borderColor: "rgba(107,63,160,0.1)" }}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-6" style={{ color: "#1A1535" }}>
            Technical Depth & Operational Scope
          </h2>
          <p className="text-lg" style={{ color: "#6B6480" }}>
            Bridging the gap between high-level strategy and technical execution.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6" style={{ color: "#1A1535" }}>
              <TerminalSquare size={20} />
              <h3 className="font-bold uppercase tracking-wider text-sm">Technical Stack</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {['Salesforce', 'ServiceNow', 'Zapier', 'Power BI', 'Tableau', 'SQL', 'Atlassian Suite', 'Asana', 'Smartsheet'].map((tech) => (
                <span 
                  key={tech}
                  className="px-5 py-2.5 rounded-full text-sm font-medium shadow-sm transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: "#1A1535", color: "#FFFFFF" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6" style={{ color: "#6B3FA0" }}>
              <Workflow size={20} />
              <h3 className="font-bold uppercase tracking-wider text-sm">Operational Scope</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {['Visionary-Integrator Partnership', 'Scorecard Tracking', 'Change Management', 'M&A Onboarding', 'Cross-Functional Alignment', 'Pipeline Governance'].map((scope) => (
                <span 
                  key={scope}
                  className="px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 border"
                  style={{ backgroundColor: "#EBE6F5", color: "#1A1535", borderColor: "rgba(26,21,53,0.05)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#6B3FA0" }}></span>
                  {scope}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer / CTA Invitation */}
      <footer className="w-full relative px-6 py-24 md:py-32 overflow-hidden">
        {/* Deep, warm background for footer */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: "#EBE6F5" }}
        ></div>
        
        {/* Giant decorative text */}
        <div 
          className="absolute -top-10 -right-20 text-[250px] font-serif leading-none opacity-[0.03] pointer-events-none whitespace-nowrap"
          style={{ color: "#1A1535" }}
        >
          Scale
        </div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F5F3F8", color: "#6B3FA0" }}>
            <Mail size={32} />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8" style={{ color: "#1A1535" }}>
            Ready to establish your execution rhythm?
          </h2>
          
          <p className="text-xl mb-12 max-w-2xl" style={{ color: "#6B6480" }}>
            Let's discuss how we can clear your operational bottlenecks and build the systems your team needs to thrive.
          </p>
          
          <button 
            className="btn-plum px-10 py-5 rounded-xl font-medium text-lg transition-all hover:scale-[1.02] active:scale-[0.98] mb-16 flex items-center gap-3"
          >
            Start the Conversation
            <ArrowRight size={20} />
          </button>
          
          <div className="w-full h-px mb-12" style={{ backgroundColor: "rgba(107,100,128,0.15)" }}></div>
          
          <div className="flex flex-col md:flex-row justify-between w-full gap-8 items-center" style={{ color: "#6B6480" }}>
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-bold text-sm tracking-wider uppercase mb-1" style={{ color: "#1A1535" }}>Location</span>
              <span>Austin, TX</span>
            </div>
            
            <div className="flex flex-col items-center gap-1">
              <span className="font-bold text-sm tracking-wider uppercase mb-1" style={{ color: "#1A1535" }}>Direct</span>
              <a href="mailto:catherine@fourfoldcreative.com" className="hover:underline decoration-[#6B3FA0] underline-offset-4">
                catherine@fourfoldcreative.com
              </a>
              <a href="tel:5129097536" className="hover:underline decoration-[#6B3FA0] underline-offset-4">
                512-909-7536
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-1">
              <span className="font-bold text-sm tracking-wider uppercase mb-1" style={{ color: "#1A1535" }}>Studio</span>
              <span>Fourfold Creative</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default WarmPlum;
