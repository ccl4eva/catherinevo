import React from 'react';
import { ArrowRight, Mail, MapPin, Phone, Settings, Users, BarChart3, Database, Zap } from 'lucide-react';

export function StructuredAuthority() {
  return (
    <div className="min-h-screen w-full bg-[#F7F5F0] text-[#1C1E21] font-sans selection:bg-[#A85A32] selection:text-white flex flex-col">
      {/* Font Imports */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
      `}} />

      {/* HEADER */}
      <header className="w-full border-b border-[#1C1E21]/10 bg-[#F7F5F0] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-display font-extrabold text-xl tracking-tight text-[#1C1E21]">
            CATHERINE VO
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-body text-[#6B6560] font-medium">
            <span className="flex items-center gap-2 hover:text-[#A85A32] transition-colors cursor-pointer">
              <Mail size={16} /> catherine@fourfoldcreative.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Austin, TX
            </span>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="w-full pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-block px-4 py-1.5 border border-[#1C1E21] text-[#1C1E21] text-xs font-bold tracking-widest uppercase mb-8">
              Fractional Chief of Staff & Integrator
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#1C1E21] mb-6">
              The operational engine behind visionary founders.
            </h1>
            <p className="font-body text-xl text-[#6B6560] leading-relaxed mb-10 max-w-2xl">
              I step into growing tech startups and modern SMBs as your Fractional Chief of Staff and Integrator. I eliminate operational bottlenecks, unify your tech stack, and establish the execution rhythm your team needs to scale effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#A85A32] hover:bg-[#8e4a28] transition-colors text-white font-body font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 group">
                Book an Operational Audit
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#1C1E21] text-[#1C1E21] hover:bg-[#1C1E21] hover:text-[#F7F5F0] transition-colors font-body font-bold text-sm tracking-wider uppercase">
                View My Experience
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] bg-[#EAE6DF] border-[12px] border-[#EAE6DF] shadow-2xl">
              <img 
                src="/__mockup/images/catherine-headshot.jpg" 
                alt="Catherine Vo" 
                className="w-full h-full object-cover grayscale-[15%] contrast-[1.1]"
              />
              {/* Formal caption block */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-[#F7F5F0] border-t-4 border-[#A85A32] p-5 shadow-xl min-w-[200px]">
                <div className="font-display font-extrabold text-[#1C1E21] text-lg uppercase tracking-wider mb-1">Catherine Vo</div>
                <div className="font-body text-[#3D4F58] font-bold text-xs uppercase tracking-widest">Fourfold Creative</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="w-full bg-[#EAE6DF] py-16 border-y border-[#1C1E21]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 lg:divide-x divide-[#1C1E21]/20">
            <div className="flex flex-col lg:pl-6 first:pl-0">
              <div className="font-display text-5xl font-extrabold text-[#1C1E21] mb-2">$5M</div>
              <div className="font-body text-xs font-bold text-[#6B6560] uppercase tracking-widest">Annual Savings</div>
            </div>
            <div className="flex flex-col lg:pl-10">
              <div className="font-display text-5xl font-extrabold text-[#1C1E21] mb-2">67%</div>
              <div className="font-body text-xs font-bold text-[#6B6560] uppercase tracking-widest">Eng. Backlog Reduction</div>
            </div>
            <div className="flex flex-col lg:pl-10">
              <div className="font-display text-5xl font-extrabold text-[#1C1E21] mb-2 whitespace-nowrap">
                14<span className="text-3xl text-[#6B6560]">d</span> <span className="text-[#A85A32] text-4xl">→</span> 2<span className="text-3xl text-[#6B6560]">m</span>
              </div>
              <div className="font-body text-xs font-bold text-[#6B6560] uppercase tracking-widest">Processing Time</div>
            </div>
            <div className="flex flex-col lg:pl-10">
              <div className="font-display text-5xl font-extrabold text-[#1C1E21] mb-2">10M+</div>
              <div className="font-body text-xs font-bold text-[#6B6560] uppercase tracking-widest">Automated Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="w-full bg-[#3D4F58] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 max-w-3xl">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 tracking-tight">The Execution Framework</h2>
            <p className="font-body text-xl text-[#EAE6DF]/80 leading-relaxed font-light">
              Building the invisible scaffolding that makes scale feel effortless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Pillar 1 */}
            <div className="flex flex-col group">
              <div className="w-14 h-14 bg-[#EAE6DF] text-[#3D4F58] flex items-center justify-center mb-8 shadow-lg group-hover:bg-[#A85A32] group-hover:text-white transition-colors">
                <Settings size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 tracking-tight">System Architecture & Process Lift</h3>
              <p className="font-body text-[#EAE6DF]/90 leading-relaxed mb-10 flex-grow font-light">
                Founders shouldn't be buried in manual workflows. I audit, connect, and automate your tool stack so information flows smoothly across teams.
              </p>
              <div className="bg-[#1C1E21]/40 p-6 border-l-4 border-[#A85A32]">
                <div className="font-body text-[10px] font-bold text-[#A85A32] uppercase tracking-widest mb-3">Proof Point</div>
                <p className="font-display text-sm text-[#EAE6DF] font-medium leading-relaxed">
                  "Slashed enterprise processing times from 14 days down to 2 minutes and prevented $1M in redundant software licensing expenditures through rigorous system governance."
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col group">
              <div className="w-14 h-14 bg-[#EAE6DF] text-[#3D4F58] flex items-center justify-center mb-8 shadow-lg group-hover:bg-[#A85A32] group-hover:text-white transition-colors">
                <BarChart3 size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 tracking-tight">Execution Rhythm & Scorecards</h3>
              <p className="font-body text-[#EAE6DF]/90 leading-relaxed mb-10 flex-grow font-light">
                Translating high-level company goals into clear, cross-functional deliverables, quarterly scorecards, and sprint-ready workflows.
              </p>
              <div className="bg-[#1C1E21]/40 p-6 border-l-4 border-[#A85A32]">
                <div className="font-body text-[10px] font-bold text-[#A85A32] uppercase tracking-widest mb-3">Proof Point</div>
                <p className="font-display text-sm text-[#EAE6DF] font-medium leading-relaxed">
                  "Built and mentored technical delivery teams into structured product divisions, earning recognition like H-E-B Digital's 'Swoon Award for Innovation' and the 'Because People Matter' Award."
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col group">
              <div className="w-14 h-14 bg-[#EAE6DF] text-[#3D4F58] flex items-center justify-center mb-8 shadow-lg group-hover:bg-[#A85A32] group-hover:text-white transition-colors">
                <Users size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 tracking-tight">Human Alignment & Group Dynamics</h3>
              <p className="font-body text-[#EAE6DF]/90 leading-relaxed mb-10 flex-grow font-light">
                Bringing calm structure and psychological safety into high-stakes rooms. I resolve cross-functional friction and guide teams through complex organizational transitions.
              </p>
              <div className="bg-[#1C1E21]/40 p-6 border-l-4 border-[#A85A32]">
                <div className="font-body text-[10px] font-bold text-[#A85A32] uppercase tracking-widest mb-3">Credential</div>
                <p className="font-display text-sm text-[#EAE6DF] font-medium leading-relaxed">
                  "Backed by a 15-year technical foundation (Columbia Computer Science) paired with advanced professional frameworks, including ICA Technology of Participation (ToP) Facilitation Training (July 2026)."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT & TECH SECTION */}
      <section className="w-full bg-[#F7F5F0] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Bio Side */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-10">
              <svg className="w-10 h-10 text-[#A85A32] mb-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1C1E21] leading-tight mb-10 tracking-tight">
                Logical systems and human space are not opposing forces—they are the foundation of true execution.
              </h2>
              <div className="space-y-6 font-body text-lg text-[#6B6560] leading-relaxed">
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
          </div>
          
          {/* Tech Fluency Side */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white p-10 border border-[#EAE6DF] shadow-sm relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#3D4F58]"></div>
              
              <h3 className="font-display text-lg font-extrabold text-[#1C1E21] uppercase tracking-widest mb-6 flex items-center gap-3">
                <Database size={20} className="text-[#A85A32]" />
                Technical Stack
              </h3>
              <div className="flex flex-wrap gap-2 mb-12">
                {["Salesforce", "ServiceNow", "Zapier", "Power BI", "Tableau", "SQL", "Atlassian Suite", "Asana", "Smartsheet"].map(tech => (
                  <span key={tech} className="bg-[#3D4F58] text-white px-3 py-2 text-sm font-body font-bold tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>
              
              <h3 className="font-display text-lg font-extrabold text-[#1C1E21] uppercase tracking-widest mb-6 flex items-center gap-3">
                <Zap size={20} className="text-[#A85A32]" />
                Operational Scope
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Visionary-Integrator Partnership", "Scorecard Tracking", "Change Management", "M&A Onboarding", "Cross-Functional Alignment", "Pipeline Governance"].map(scope => (
                  <span key={scope} className="bg-[#EAE6DF] text-[#1C1E21] px-3 py-2 text-sm font-body font-bold tracking-wide">
                    {scope}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-[#1C1E21] text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight">Ready to fix your operational engine?</h2>
          <p className="font-body text-xl text-[#EAE6DF]/70 mb-10 font-light">
            Stop losing time to manual workflows and misaligned teams. Let's build the execution rhythm your company needs.
          </p>
          <button className="px-10 py-5 bg-[#A85A32] hover:bg-[#8e4a28] transition-colors text-white font-body font-bold text-sm tracking-wider uppercase inline-flex items-center justify-center gap-3 group">
            Book an Operational Audit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#F7F5F0] border-t border-[#1C1E21]/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-xl font-extrabold tracking-tight text-[#1C1E21]">
            CATHERINE VO
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-body text-sm font-bold text-[#6B6560]">
            <span className="hover:text-[#A85A32] transition-colors cursor-pointer flex items-center gap-2">
              <Mail size={16} /> catherine@fourfoldcreative.com
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} /> 512-909-7536
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Austin, TX
            </span>
          </div>
          <div className="font-body text-xs font-bold text-[#1C1E21]/40 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Fourfold Creative
          </div>
        </div>
      </footer>
    </div>
  );
}
