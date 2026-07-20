import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export function EditorialLight() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1C1E21] font-sans selection:bg-[#A85A32] selection:text-white">
      {/* Navigation / Header */}
      <header className="border-b border-[#EAE6DF] px-6 py-6 md:px-12 flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="font-serif text-xl md:text-2xl font-medium tracking-tight">Catherine Vo</div>
        <div className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-[#6B6560]">
          Fractional Chief of Staff & Integrator
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto">
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center px-6 md:px-12 py-16 md:py-24">
          <div className="lg:col-span-7 flex flex-col items-start z-10 pr-0 md:pr-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A85A32] mb-8 flex items-center gap-3">
              <span className="w-10 h-px bg-[#A85A32]"></span>
              Fractional Chief of Staff & Integrator
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif leading-[1.05] tracking-tight mb-8 text-[#1C1E21]">
              The operational engine behind <span className="italic font-light text-[#A85A32]">visionary</span> founders.
            </h1>
            <p className="text-lg md:text-xl text-[#6B6560] max-w-xl leading-relaxed mb-12 font-light">
              I step into growing tech startups and modern SMBs as your Fractional Chief of Staff and Integrator. I eliminate operational bottlenecks, unify your tech stack, and establish the execution rhythm your team needs to scale effortlessly.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-16 w-full">
              <button className="bg-[#A85A32] hover:bg-[#8e4926] text-white px-8 py-4 text-xs md:text-sm uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-2 border border-[#A85A32]">
                Book an Operational Audit
                <ArrowRight size={16} />
              </button>
              <button className="border border-[#1C1E21] hover:bg-[#1C1E21] hover:text-[#F7F5F0] text-[#1C1E21] px-8 py-4 text-xs md:text-sm uppercase tracking-widest font-bold transition-all duration-300">
                View My Experience
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm text-[#6B6560] border-t border-[#EAE6DF] pt-8 w-full">
              <a href="mailto:catherine@fourfoldcreative.com" className="flex items-center gap-2 hover:text-[#A85A32] transition-colors"><Mail size={16} /> catherine@fourfoldcreative.com</a>
              <span className="hidden sm:inline text-[#EAE6DF]">|</span>
              <span className="flex items-center gap-2"><MapPin size={16} /> Austin, TX</span>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative p-4 md:p-6 pb-12 md:pb-16 bg-[#EAE6DF] max-w-sm mx-auto lg:ml-auto lg:mr-10 lg:rotate-2 hover:rotate-0 transition-transform duration-700 ease-out shadow-sm">
              <div className="aspect-[4/5] relative overflow-hidden bg-[#F7F5F0]">
                <img 
                  src="/__mockup/images/catherine-headshot.jpg" 
                  alt="Catherine Vo" 
                  className="object-cover w-full h-full grayscale-[20%] contrast-110"
                />
              </div>
              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                <p className="font-serif text-3xl text-[#1C1E21] italic leading-none">Scale</p>
                <p className="text-[10px] uppercase tracking-widest text-[#6B6560]">Effortlessly</p>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS SECTION */}
        <section className="border-y border-[#EAE6DF] bg-[#F7F5F0]">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#EAE6DF]">
            <div className="flex flex-col justify-center px-8 py-16 text-center">
              <span className="text-4xl md:text-5xl font-serif text-[#1C1E21] mb-3">$5M</span>
              <span className="text-[10px] uppercase tracking-widest text-[#6B6560]">Annual Savings</span>
            </div>
            <div className="flex flex-col justify-center px-8 py-16 text-center">
              <span className="text-4xl md:text-5xl font-serif text-[#1C1E21] mb-3">67%</span>
              <span className="text-[10px] uppercase tracking-widest text-[#6B6560]">Engineering Backlog Reduction</span>
            </div>
            <div className="flex flex-col justify-center px-8 py-16 text-center">
              <div className="text-4xl md:text-5xl font-serif text-[#1C1E21] mb-3 flex items-center justify-center gap-3">
                14d <span className="text-[#A85A32] text-3xl font-sans font-light">→</span> 2m
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#6B6560]">Process Time</span>
            </div>
            <div className="flex flex-col justify-center px-8 py-16 text-center">
              <span className="text-4xl md:text-5xl font-serif text-[#1C1E21] mb-3">10M+</span>
              <span className="text-[10px] uppercase tracking-widest text-[#6B6560]">Automated Operations</span>
            </div>
          </div>
        </section>

        {/* FRAMEWORK PILLARS */}
        <section className="px-6 md:px-12 py-24 md:py-32">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#1C1E21] mb-20 flex items-center gap-4">
            <span className="w-12 h-px bg-[#1C1E21]"></span>
            Operational Framework
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16">
            
            {/* Pillar 1 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 text-8xl font-serif text-[#EAE6DF] -z-10 -translate-y-10 -translate-x-6 opacity-40 transition-transform duration-500 group-hover:-translate-x-8">01</div>
              <h3 className="text-2xl font-serif mb-2 text-[#1C1E21]">System Architecture <br/><span className="italic font-light text-[#6B6560]">& Process Lift</span></h3>
              <p className="text-[10px] uppercase tracking-widest text-[#A85A32] mb-6">The Technical Engine</p>
              <p className="text-[#6B6560] leading-relaxed mb-8 font-light text-base">
                Founders shouldn't be buried in manual workflows. I audit, connect, and automate your tool stack so information flows smoothly across teams.
              </p>
              <div className="bg-[#EAE6DF] p-6 text-sm text-[#1C1E21] leading-relaxed border-l-2 border-[#A85A32]">
                <strong className="font-semibold">Proof:</strong> Slashed enterprise processing times from 14 days down to 2 minutes and prevented $1M in redundant software licensing expenditures through rigorous system governance.
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group relative lg:mt-16">
              <div className="absolute top-0 left-0 text-8xl font-serif text-[#EAE6DF] -z-10 -translate-y-10 -translate-x-6 opacity-40 transition-transform duration-500 group-hover:-translate-x-8">02</div>
              <h3 className="text-2xl font-serif mb-2 text-[#1C1E21]">Execution Rhythm <br/><span className="italic font-light text-[#6B6560]">& Scorecards</span></h3>
              <p className="text-[10px] uppercase tracking-widest text-[#A85A32] mb-6">The Accountability Cadence</p>
              <p className="text-[#6B6560] leading-relaxed mb-8 font-light text-base">
                Translating high-level company goals into clear, cross-functional deliverables, quarterly scorecards, and sprint-ready workflows.
              </p>
              <div className="bg-[#EAE6DF] p-6 text-sm text-[#1C1E21] leading-relaxed border-l-2 border-[#A85A32]">
                <strong className="font-semibold">Proof:</strong> Built and mentored technical delivery teams into structured product divisions, earning recognition like H-E-B Digital's "Swoon Award for Innovation" and the "Because People Matter" Award.
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative lg:mt-32">
              <div className="absolute top-0 left-0 text-8xl font-serif text-[#EAE6DF] -z-10 -translate-y-10 -translate-x-6 opacity-40 transition-transform duration-500 group-hover:-translate-x-8">03</div>
              <h3 className="text-2xl font-serif mb-2 text-[#1C1E21]">Human Alignment <br/><span className="italic font-light text-[#6B6560]">& Group Dynamics</span></h3>
              <p className="text-[10px] uppercase tracking-widest text-[#A85A32] mb-6">The Facilitation Anchor</p>
              <p className="text-[#6B6560] leading-relaxed mb-8 font-light text-base">
                Bringing calm structure and psychological safety into high-stakes rooms. I resolve cross-functional friction and guide teams through complex organizational transitions.
              </p>
              <div className="bg-[#EAE6DF] p-6 text-sm text-[#1C1E21] leading-relaxed border-l-2 border-[#A85A32]">
                <strong className="font-semibold">Credential:</strong> Backed by a 15-year technical foundation (Columbia Computer Science) paired with advanced professional frameworks, including ICA Technology of Participation (ToP) Facilitation Training (July 2026).
              </div>
            </div>

          </div>
        </section>

        {/* BIO / ABOUT */}
        <section className="px-6 md:px-12 py-24 border-t border-[#EAE6DF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-5 relative pr-0 lg:pr-8">
              <div className="sticky top-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-[#1C1E21] mb-8">
                  "Logical systems and human space are not opposing forces—they are the foundation of <span className="italic text-[#A85A32]">true execution.</span>"
                </h2>
                <div className="w-16 h-px bg-[#A85A32]"></div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-16 border-l-0 lg:border-l border-[#EAE6DF]">
              <div className="max-w-xl">
                <p className="text-xl text-[#1C1E21] leading-relaxed mb-8 font-serif">
                  Most organizations don't struggle because they lack vision; they struggle because their operational infrastructure and human alignment are out of sync. 
                </p>
                <p className="text-base text-[#6B6560] leading-relaxed mb-8 font-light">
                  With a polymathic background spanning computer science (Columbia B.A.), creative direction (NYU M.A.), and professional facilitation, I build the invisible scaffolding that makes scale feel effortless. 
                </p>
                <p className="text-base text-[#6B6560] leading-relaxed font-light">
                  Whether you need an Integrator to bring accountability to your engineering and product cadence, or an operational partner to navigate a complex company transition, <strong className="font-medium text-[#1C1E21]">I bring the technical depth to fix your stack and the emotional intelligence to unite your team.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL FLUENCY */}
        <section className="border-t border-[#EAE6DF] py-24 md:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1C1E21] mb-20 flex items-center gap-4 justify-center">
              <span className="w-8 h-px bg-[#1C1E21]"></span>
              Technical Fluency & Scope
              <span className="w-8 h-px bg-[#1C1E21]"></span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
              <div>
                <h3 className="text-xl font-serif italic text-[#1C1E21] mb-8 flex items-center gap-4">
                  The Tool Stack <span className="flex-1 h-px bg-[#EAE6DF]"></span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Salesforce', 'ServiceNow', 'Zapier', 'Power BI', 'Tableau', 'SQL', 'Atlassian Suite', 'Asana', 'Smartsheet'].map((tech) => (
                    <span key={tech} className="bg-[#3D4F58] text-white px-4 py-2.5 text-[10px] uppercase tracking-widest font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif italic text-[#1C1E21] mb-8 flex items-center gap-4">
                  Areas of Impact <span className="flex-1 h-px bg-[#EAE6DF]"></span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Visionary-Integrator Partnership', 'Scorecard Tracking', 'Change Management', 'M&A Onboarding', 'Cross-Functional Alignment', 'Pipeline Governance'].map((scope) => (
                    <span key={scope} className="bg-[#EAE6DF] text-[#1C1E21] px-4 py-2.5 text-[10px] uppercase tracking-widest font-semibold">
                      {scope}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#1C1E21] text-[#F7F5F0] pt-24 pb-12 px-6 md:px-12 mt-auto border-t-[12px] border-[#A85A32]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-8 text-white">Ready to align your operations?</h2>
              <button className="bg-[#A85A32] hover:bg-[#8e4926] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold transition-colors duration-300 inline-flex items-center gap-2">
                Book an Operational Audit
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="flex flex-col md:items-end justify-center space-y-6">
              <a href="mailto:catherine@fourfoldcreative.com" className="flex items-center gap-4 text-[#EAE6DF] hover:text-[#A85A32] transition-colors group text-lg md:text-xl font-light">
                <Mail size={20} className="text-[#A85A32]" />
                catherine@fourfoldcreative.com
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 text-[#A85A32]" />
              </a>
              <a href="tel:512-909-7536" className="flex items-center gap-4 text-[#EAE6DF] hover:text-[#A85A32] transition-colors group text-lg md:text-xl font-light">
                <Phone size={20} className="text-[#A85A32]" />
                512-909-7536
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 text-[#A85A32]" />
              </a>
              <div className="flex items-center gap-4 text-[#EAE6DF] text-lg md:text-xl font-light">
                <MapPin size={20} className="text-[#A85A32]" />
                Austin, TX
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#EAE6DF]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#EAE6DF]/40">
            <div className="font-light">&copy; {new Date().getFullYear()} Fourfold Creative. All rights reserved.</div>
            <div className="uppercase tracking-widest text-[10px] font-semibold text-[#EAE6DF]/60">Fractional Chief of Staff & Integrator</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
