import React from 'react';
import { 
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Database,
  Award,
  ChevronRight,
  CheckCircle2,
  Workflow,
  Cpu,
  Terminal,
  BarChart,
  Settings,
  Layers,
  Code
} from 'lucide-react';

const PortraitPlaceholder = () => (
  <div className="relative w-full max-w-md aspect-[4/5] bg-[#1A1814] overflow-hidden border border-[#302C24] flex items-center justify-center group mx-auto md:ml-auto shadow-2xl shadow-black/50">
    <div className="absolute inset-0 bg-gradient-to-br from-[#11100C] via-[#1A1814] to-[#11100C] z-0" />
    <div className="absolute w-72 h-72 border border-[#302C24] rounded-full -top-12 -right-12 opacity-40 transition-transform duration-1000 group-hover:scale-110" />
    <div className="absolute w-56 h-56 border border-[#D47A43]/20 rounded-full bottom-24 -left-12 transition-transform duration-1000 group-hover:-translate-y-4" />
    
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-28 h-28 mb-8 border border-[#D47A43] flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-700 ease-in-out bg-[#1A1814]">
        <div className="w-14 h-14 bg-[#D47A43]/10 border border-[#D47A43]/50 transition-all duration-700 group-hover:scale-125" />
      </div>
      <div className="text-[#EAE6DB] font-serif text-4xl tracking-widest uppercase">CV</div>
      <div className="text-[#9A9483] font-mono text-xs tracking-[0.3em] mt-3 uppercase">Fractional CoS</div>
    </div>
    
    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#302C24] -translate-x-1/2 opacity-30" />
    <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#302C24] -translate-y-1/2 opacity-30" />
  </div>
);

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#11100C] text-[#EAE6DB] selection:bg-[#D47A43] selection:text-[#11100C] font-sans antialiased">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 border-b border-[#302C24] sticky top-0 bg-[#11100C]/90 backdrop-blur-md z-50">
        <div className="font-mono text-xs tracking-widest text-[#EAE6DB] uppercase flex items-center gap-3">
          <div className="w-2 h-2 bg-[#D47A43]" />
          Fourfold Creative
        </div>
        <div className="flex gap-8 font-mono text-xs tracking-widest text-[#9A9483]">
          <span className="hidden md:flex items-center gap-2">
            <MapPin size={12} className="text-[#D47A43]" /> Austin, TX
          </span>
          <a href="#contact" className="hover:text-[#D47A43] transition-colors flex items-center gap-2">
            Contact <ArrowRight size={12} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 border border-[#D47A43]/30 px-4 py-1.5 bg-[#D47A43]/5 rounded-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D47A43] animate-pulse" />
              <span className="font-mono text-xs text-[#D47A43] tracking-widest uppercase">Fractional Chief of Staff & Integrator</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#EAE6DB] leading-[1.1] tracking-tight">
              I turn <span className="italic text-[#9A9483] font-light">vision</span> into a working machine.
            </h1>
            
            <p className="text-lg md:text-xl text-[#9A9483] max-w-xl leading-relaxed font-light">
              Catherine Vo is the rare operator who built enterprise software for 15 years before pivoting to executive operations. Not a generalist coordinator—a technical systems architect who runs the room.
            </p>
            
            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
               <a href="#contact" className="bg-[#D47A43] hover:bg-[#E39D73] text-[#11100C] font-mono text-sm tracking-widest uppercase px-8 py-4 transition-colors flex items-center gap-3 group">
                 Initiate Contact 
                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </a>
               <div className="text-xs font-mono text-[#9A9483] uppercase tracking-widest flex items-center gap-2">
                 <div className="w-1 h-1 bg-[#D47A43] rounded-full" />
                 Accepting Q4 Clients
               </div>
            </div>
          </div>
          
          <div className="md:col-span-5 relative">
            <PortraitPlaceholder />
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="border-y border-[#302C24] bg-[#1A1814]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#302C24]">
          <div className="p-8 md:p-12 space-y-3 group hover:bg-[#11100C] transition-colors duration-500">
            <div className="text-[#D47A43] text-4xl md:text-5xl lg:text-6xl font-serif">$5M</div>
            <div className="font-mono text-xs text-[#9A9483] tracking-[0.2em] uppercase leading-relaxed">Annual Savings<br/>Engineered</div>
          </div>
          <div className="p-8 md:p-12 space-y-3 group hover:bg-[#11100C] transition-colors duration-500">
            <div className="text-[#D47A43] text-4xl md:text-5xl lg:text-6xl font-serif">67%</div>
            <div className="font-mono text-xs text-[#9A9483] tracking-[0.2em] uppercase leading-relaxed">Reduction in<br/>Eng Backlog</div>
          </div>
          <div className="p-8 md:p-12 space-y-3 group hover:bg-[#11100C] transition-colors duration-500">
            <div className="text-[#D47A43] text-4xl md:text-5xl lg:text-6xl font-serif">10M+</div>
            <div className="font-mono text-xs text-[#9A9483] tracking-[0.2em] uppercase leading-relaxed">Automated<br/>Operations</div>
          </div>
          <div className="p-8 md:p-12 space-y-3 group hover:bg-[#11100C] transition-colors duration-500">
            <div className="text-[#D47A43] text-4xl md:text-5xl lg:text-6xl font-serif">14<span className="text-2xl text-[#9A9483]">d</span><span className="mx-1 text-2xl font-sans text-[#302C24]">→</span>2<span className="text-2xl text-[#9A9483]">m</span></div>
            <div className="font-mono text-xs text-[#9A9483] tracking-[0.2em] uppercase leading-relaxed">Process<br/>Compression</div>
          </div>
        </div>
      </section>

      {/* The Problem / Edge */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Terminal size={16} className="text-[#D47A43]" />
              <h2 className="text-3xl md:text-4xl font-serif text-[#EAE6DB]">The Visionary Bottleneck</h2>
            </div>
            <p className="text-[#9A9483] mb-6 leading-relaxed text-lg font-light">
              Visionary founders reach a critical inflection point where the sheer velocity of their ideas breaks the systems supporting them. Operational chaos ensues.
            </p>
            <p className="text-[#9A9483] leading-relaxed text-lg font-light">
              Most companies hire generalist operators who coordinate the chaos. But coordination isn't enough when the underlying architecture is fragile. You don't need a better meeting agenda; you need a redesigned operating system.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-8 md:-left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D47A43] to-transparent" />
            <div className="flex items-center gap-3 mb-8">
              <Cpu size={16} className="text-[#D47A43]" />
              <h2 className="text-3xl md:text-4xl font-serif text-[#EAE6DB]">The Architect's Edge</h2>
            </div>
            <p className="text-[#9A9483] mb-6 leading-relaxed text-lg font-light">
              I spent 15 years as a Senior Java Developer and Technical Product Manager. I understand the codebase, the data architecture, and the human systems that execute them.
            </p>
            <p className="text-[#9A9483] leading-relaxed text-lg font-light">
              When I step in as an Integrator, I bridge the gap between executive strategy and technical execution. I design organizations with the same rigor I used to design enterprise software.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#1A1814] border-t border-[#302C24]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#EAE6DB]">Career Architecture</h2>
            <div className="font-mono text-xs text-[#D47A43] tracking-widest hidden md:block border border-[#D47A43]/30 px-3 py-1 bg-[#D47A43]/5">
              15+ YEARS / TECH TO OPS
            </div>
          </div>
          
          <div className="space-y-0 border-b border-[#302C24]">
            {/* H-E-B */}
            <div className="group border-t border-[#302C24] py-10 md:py-16 grid md:grid-cols-12 gap-8 hover:bg-[#11100C] transition-colors md:-mx-12 md:px-12">
              <div className="md:col-span-3 font-mono text-sm text-[#9A9483] flex flex-col justify-start gap-2">
                <span className="text-lg text-[#EAE6DB]">H-E-B</span>
                <span className="text-[#D47A43] text-xs uppercase tracking-widest">Sr. Product Manager</span>
              </div>
              <div className="md:col-span-7">
                <p className="text-[#EAE6DB] text-xl mb-6 font-serif">Enterprise digital transformation at unprecedented scale.</p>
                <ul className="space-y-4 text-[#9A9483] font-light">
                  <li className="flex gap-4"><CheckCircle2 size={18} className="text-[#D47A43] shrink-0 mt-0.5" /> Engineered $5M in annual savings through systemic optimization of store processes.</li>
                  <li className="flex gap-4"><CheckCircle2 size={18} className="text-[#D47A43] shrink-0 mt-0.5" /> Managed 10M+ automated operations daily across the enterprise infrastructure.</li>
                  <li className="flex gap-4"><CheckCircle2 size={18} className="text-[#D47A43] shrink-0 mt-0.5" /> Eliminated manual processes for 12,000+ store partners, increasing frontline efficiency.</li>
                </ul>
                <div className="mt-8 inline-flex items-center gap-3 border border-[#302C24] px-4 py-2 bg-[#1A1814]">
                  <Award size={16} className="text-[#D47A43]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EAE6DB]">"Swoon Award" for Innovation, Nov 2024</span>
                </div>
              </div>
              <div className="md:col-span-2 flex justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity md:pt-2">
                 <ArrowRight className="text-[#D47A43]" />
              </div>
            </div>
            
            {/* Flipboard */}
            <div className="group border-t border-[#302C24] py-10 md:py-16 grid md:grid-cols-12 gap-8 hover:bg-[#11100C] transition-colors md:-mx-12 md:px-12">
              <div className="md:col-span-3 font-mono text-sm text-[#9A9483] flex flex-col justify-start gap-2">
                <span className="text-lg text-[#EAE6DB]">Flipboard</span>
                <span className="text-[#D47A43] text-xs uppercase tracking-widest">Sr. Growth PM</span>
              </div>
              <div className="md:col-span-7">
                <p className="text-[#EAE6DB] text-xl mb-6 font-serif">Stabilized a fragile organization through rigorous backlog management.</p>
                <ul className="space-y-4 text-[#9A9483] font-light">
                  <li className="flex gap-4"><CheckCircle2 size={18} className="text-[#D47A43] shrink-0 mt-0.5" /> Reduced engineering backlog by 67%, clearing technical debt and accelerating feature delivery.</li>
                  <li className="flex gap-4"><CheckCircle2 size={18} className="text-[#D47A43] shrink-0 mt-0.5" /> Re-aligned cross-functional teams to execute on critical, high-impact growth metrics.</li>
                </ul>
              </div>
              <div className="md:col-span-2 flex justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity md:pt-2">
                 <ArrowRight className="text-[#D47A43]" />
              </div>
            </div>

            {/* NFP */}
            <div className="group border-t border-[#302C24] py-10 md:py-16 grid md:grid-cols-12 gap-8 hover:bg-[#11100C] transition-colors md:-mx-12 md:px-12">
              <div className="md:col-span-3 font-mono text-sm text-[#9A9483] flex flex-col justify-start gap-2">
                <span className="text-lg text-[#EAE6DB]">NFP</span>
                <span className="text-[#D47A43] text-xs uppercase tracking-widest">Technical PM</span>
              </div>
              <div className="md:col-span-7">
                <p className="text-[#EAE6DB] text-xl mb-6 font-serif">Process compression and deep technical cost-savings.</p>
                <ul className="space-y-4 text-[#9A9483] font-light">
                  <li className="flex gap-4"><CheckCircle2 size={18} className="text-[#D47A43] shrink-0 mt-0.5" /> Compressed 14-day manual processes into 2-minute automated workflows using Zapier and API integrations.</li>
                  <li className="flex gap-4"><CheckCircle2 size={18} className="text-[#D47A43] shrink-0 mt-0.5" /> Prevented $1M in unnecessary licensing spend through comprehensive tech stack audits.</li>
                </ul>
              </div>
              <div className="md:col-span-2 flex justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity md:pt-2">
                 <ArrowRight className="text-[#D47A43]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competencies & Tech Stack */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto border-t border-[#302C24]">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
             <h3 className="text-xs font-mono text-[#D47A43] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
               <Workflow size={14} /> Core Competencies
             </h3>
             <div className="flex flex-wrap gap-3">
               {[
                 'Cross-functional alignment', 
                 'Executive stakeholder relations', 
                 'Tech stack transitions', 
                 'Automated reporting frameworks', 
                 'EOS® Integrator methodology', 
                 'Strategic partnerships', 
                 'Go-to-market execution'
               ].map(item => (
                 <span key={item} className="px-5 py-2.5 border border-[#302C24] text-[#EAE6DB] text-sm bg-[#1A1814] hover:border-[#D47A43] hover:text-[#D47A43] transition-colors cursor-default font-light">
                   {item}
                 </span>
               ))}
             </div>
          </div>
          <div>
             <h3 className="text-xs font-mono text-[#D47A43] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
               <Code size={14} /> Technical Fluency
             </h3>
             <div className="grid grid-cols-2 gap-x-8 gap-y-6 font-mono text-sm text-[#9A9483]">
               <div className="flex items-center justify-between border-b border-[#302C24] pb-2 hover:text-[#EAE6DB] transition-colors">
                 <span className="flex items-center gap-3"><Database size={14} /> SQL / Databases</span>
               </div>
               <div className="flex items-center justify-between border-b border-[#302C24] pb-2 hover:text-[#EAE6DB] transition-colors">
                 <span className="flex items-center gap-3"><Layers size={14} /> Zapier</span>
               </div>
               <div className="flex items-center justify-between border-b border-[#302C24] pb-2 hover:text-[#EAE6DB] transition-colors">
                 <span className="flex items-center gap-3"><BarChart size={14} /> Power BI</span>
               </div>
               <div className="flex items-center justify-between border-b border-[#302C24] pb-2 hover:text-[#EAE6DB] transition-colors">
                 <span className="flex items-center gap-3"><BarChart size={14} /> Tableau</span>
               </div>
               <div className="flex items-center justify-between border-b border-[#302C24] pb-2 hover:text-[#EAE6DB] transition-colors">
                 <span className="flex items-center gap-3"><Settings size={14} /> Salesforce</span>
               </div>
               <div className="flex items-center justify-between border-b border-[#302C24] pb-2 hover:text-[#EAE6DB] transition-colors">
                 <span className="flex items-center gap-3"><Settings size={14} /> ServiceNow</span>
               </div>
               <div className="flex items-center justify-between border-b border-[#302C24] pb-2 hover:text-[#EAE6DB] transition-colors">
                 <span className="flex items-center gap-3"><Settings size={14} /> Atlassian</span>
               </div>
               <div className="flex items-center justify-between border-b border-[#302C24] pb-2 hover:text-[#EAE6DB] transition-colors">
                 <span className="flex items-center gap-3"><Settings size={14} /> Asana</span>
               </div>
               <div className="flex items-center justify-between border-b border-[#302C24] pb-2 hover:text-[#EAE6DB] transition-colors">
                 <span className="flex items-center gap-3"><Settings size={14} /> Ninety.io</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Current Practice: Fourfold Creative */}
      <section className="py-24 md:py-32 bg-[#D47A43] text-[#11100C] relative overflow-hidden border-t border-[#D47A43]">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #11100C 2px, transparent 0)', backgroundSize: '32px 32px' }}>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif mb-4 text-[#11100C] leading-none">Fourfold Creative</h2>
              <p className="font-mono text-sm tracking-[0.2em] uppercase font-bold text-[#11100C]/70">Independent Practice • Austin, TX</p>
            </div>
            <div className="font-mono text-sm tracking-[0.2em] uppercase bg-[#11100C] text-[#D47A43] px-4 py-2 self-start md:self-auto">
              Oct 2025 – Present
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Camp Champ */}
            <div className="bg-[#1A1814] text-[#EAE6DB] p-10 border border-[#1A1814] hover:border-[#11100C] transition-all duration-300 hover:-translate-y-2 shadow-2xl">
              <div className="font-mono text-xs text-[#9A9483] mb-4 tracking-[0.2em] uppercase flex items-center justify-between">
                <span>EdTech</span>
                <div className="w-2 h-2 bg-[#D47A43]" />
              </div>
              <h4 className="font-serif text-2xl mb-8 text-[#D47A43]">Camp Champ</h4>
              <ul className="space-y-4 text-sm text-[#9A9483] font-light">
                <li className="flex gap-3 items-start"><ChevronRight size={16} className="mt-0.5 text-[#D47A43] shrink-0"/> Built comprehensive go-to-market framework.</li>
                <li className="flex gap-3 items-start"><ChevronRight size={16} className="mt-0.5 text-[#D47A43] shrink-0"/> Productized systems pilot for scalable deployment.</li>
              </ul>
            </div>
            
            {/* Sound Sight Tarot */}
            <div className="bg-[#1A1814] text-[#EAE6DB] p-10 border border-[#1A1814] hover:border-[#11100C] transition-all duration-300 hover:-translate-y-2 shadow-2xl">
              <div className="font-mono text-xs text-[#9A9483] mb-4 tracking-[0.2em] uppercase flex items-center justify-between">
                <span>Service / E-Comm</span>
                <div className="w-2 h-2 bg-[#D47A43]" />
              </div>
              <h4 className="font-serif text-2xl mb-8 text-[#D47A43]">Sound Sight Tarot</h4>
              <ul className="space-y-4 text-sm text-[#9A9483] font-light">
                <li className="flex gap-3 items-start"><ChevronRight size={16} className="mt-0.5 text-[#D47A43] shrink-0"/> Full EOS® Implementation & Rollout.</li>
                <li className="flex gap-3 items-start"><ChevronRight size={16} className="mt-0.5 text-[#D47A43] shrink-0"/> Built automated financial dashboards.</li>
                <li className="flex gap-3 items-start"><ChevronRight size={16} className="mt-0.5 text-[#D47A43] shrink-0"/> Executed critical pricing strategy shifts.</li>
              </ul>
            </div>
            
            {/* AAAFF */}
            <div className="bg-[#1A1814] text-[#EAE6DB] p-10 border border-[#1A1814] hover:border-[#11100C] transition-all duration-300 hover:-translate-y-2 shadow-2xl">
              <div className="font-mono text-xs text-[#9A9483] mb-4 tracking-[0.2em] uppercase flex items-center justify-between">
                <span>Non-Profit / Event</span>
                <div className="w-2 h-2 bg-[#D47A43]" />
              </div>
              <h4 className="font-serif text-2xl mb-8 text-[#D47A43]">Austin Asian American Film Festival</h4>
              <ul className="space-y-4 text-sm text-[#9A9483] font-light">
                <li className="flex gap-3 items-start"><ChevronRight size={16} className="mt-0.5 text-[#D47A43] shrink-0"/> Full event logistics ownership.</li>
                <li className="flex gap-3 items-start"><ChevronRight size={16} className="mt-0.5 text-[#D47A43] shrink-0"/> Comprehensive Run of Show documentation & execution.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Contact Footer */}
      <footer id="contact" className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto border-t border-[#302C24]">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <div className="mb-12">
              <h3 className="font-mono text-[#D47A43] uppercase tracking-[0.2em] text-xs mb-8 flex items-center gap-3">
                <Award size={14} /> Academic Foundation
              </h3>
              <div className="space-y-8">
                <div className="border-l-2 border-[#302C24] pl-6 hover:border-[#D47A43] transition-colors">
                  <div className="text-[#EAE6DB] font-serif text-2xl mb-1">Columbia University</div>
                  <div className="text-[#9A9483] font-mono text-sm tracking-widest uppercase">B.A. Computer Science</div>
                </div>
                <div className="border-l-2 border-[#302C24] pl-6 hover:border-[#D47A43] transition-colors">
                  <div className="text-[#EAE6DB] font-serif text-2xl mb-1">New York University</div>
                  <div className="text-[#9A9483] font-mono text-sm tracking-widest uppercase">M.A. Art in Media</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1A1814] p-10 md:p-16 border border-[#302C24] relative overflow-hidden group hover:border-[#D47A43]/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D47A43]/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            
            <h2 className="text-4xl md:text-5xl font-serif text-[#EAE6DB] mb-4 relative z-10">Ready to architect your operations?</h2>
            <p className="text-[#9A9483] mb-12 text-lg font-light relative z-10">Currently accepting select Visionary founders for Q4 integrations.</p>
            
            <div className="space-y-6 relative z-10">
              <a href="mailto:catherine@fourfoldcreative.com" className="flex items-center gap-6 text-[#EAE6DB] hover:text-[#D47A43] transition-colors group/link bg-[#11100C] p-4 border border-[#302C24] hover:border-[#D47A43]">
                <div className="w-12 h-12 bg-[#1A1814] border border-[#302C24] flex items-center justify-center group-hover/link:border-[#D47A43] transition-colors">
                  <Mail size={18} />
                </div>
                <span className="font-mono text-sm tracking-widest uppercase">catherine@fourfoldcreative.com</span>
              </a>
              <a href="tel:5129097536" className="flex items-center gap-6 text-[#EAE6DB] hover:text-[#D47A43] transition-colors group/link bg-[#11100C] p-4 border border-[#302C24] hover:border-[#D47A43]">
                <div className="w-12 h-12 bg-[#1A1814] border border-[#302C24] flex items-center justify-center group-hover/link:border-[#D47A43] transition-colors">
                  <Phone size={18} />
                </div>
                <span className="font-mono text-sm tracking-widest uppercase">512-909-7536</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
