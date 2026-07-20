import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  Layers,
  Settings,
  Users,
  TerminalSquare,
  Workflow
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-background text-foreground font-sans">
      {/* Noise overlay for tactile feel */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-noise mix-blend-overlay opacity-60"></div>

      {/* Decorative background blur/gradients */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--secondary)) 0%, rgba(201,168,76,0) 70%)" }}
      ></div>
      <div 
        className="absolute top-[40%] right-[-10%] w-[40%] h-[60%] rounded-full blur-[140px] opacity-[0.15] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, rgba(139,105,20,0) 70%)" }}
      ></div>

      {/* Navigation / Header */}
      <header className="w-full border-b border-border relative z-40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="font-serif text-2xl tracking-tight text-foreground">
            Catherine Vo<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="mailto:catherine@fourfoldcreative.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} /> catherine@fourfoldcreative.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Austin, TX
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full px-6 pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
          
          <motion.div 
            className="w-full lg:w-3/5 z-10 flex flex-col items-start"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-card text-primary shadow-sm border border-border">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Fractional Chief of Staff & Integrator
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 text-foreground">
              The operational engine behind <span className="italic text-primary">visionary founders.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl text-muted-foreground">
              I step into growing tech startups and modern SMBs as your Fractional Chief of Staff and Integrator. I eliminate operational bottlenecks, unify your tech stack, and establish the execution rhythm your team needs to scale effortlessly.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href="mailto:catherine@fourfoldcreative.com"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                style={{ boxShadow: "0 10px 25px -5px rgba(139,105,20,0.3)" }}
              >
                Book an Operational Audit
                <ArrowRight size={18} />
              </a>
              <a 
                href="#experience"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all hover:bg-foreground/5 border border-foreground/20 text-foreground flex items-center justify-center"
              >
                View My Experience
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-2/5 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              {/* Decorative offset frames */}
              <div className="absolute inset-0 rounded-2xl transform translate-x-4 translate-y-4 bg-primary/20"></div>
              <div className="absolute inset-0 rounded-2xl transform -translate-x-2 -translate-y-2 border border-secondary"></div>
              <img 
                src="/images/catherine-headshot.jpg" 
                alt="Catherine Vo"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl z-10 border-4 border-background"
              />
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="w-full py-12 border-y border-border bg-card relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-muted-foreground/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-4xl md:text-5xl mb-2 text-primary">$5M</span>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Annual Savings</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-4xl md:text-5xl mb-2 text-secondary">67%</span>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Backlog Reduction</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-3xl md:text-4xl mb-2 flex items-center gap-2 text-primary">
                14d <ArrowRight size={24} className="opacity-50" /> 2m
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Processing Time</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-4xl md:text-5xl mb-2 text-secondary">10M+</span>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Automated Ops</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About & Quote Block */}
      <section id="experience" className="w-full py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight relative z-10 text-foreground">
              <div className="absolute -top-10 -left-6 text-9xl opacity-20 -z-10 font-serif text-secondary">
                &ldquo;
              </div>
              Logical systems and human space are not opposing forces—they are the foundation of true execution.
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col gap-6 text-lg text-muted-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp}>
              Most organizations don't struggle because they lack vision; they struggle because their operational infrastructure and human alignment are out of sync.
            </motion.p>
            <motion.p variants={fadeUp}>
              With a polymathic background spanning computer science (Columbia B.A.), creative direction (NYU M.A.), and professional facilitation, I build the invisible scaffolding that makes scale feel effortless.
            </motion.p>
            <motion.p variants={fadeUp}>
              Whether you need an Integrator to bring accountability to your engineering and product cadence, or an operational partner to navigate a complex company transition, I bring the technical depth to fix your stack and the emotional intelligence to unite your team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Framework Pillars */}
      <section className="w-full py-24 px-6 relative">
        <div className="absolute inset-0 opacity-40 bg-card"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="mb-16 md:mb-24 flex flex-col md:flex-row gap-6 items-end justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-foreground">
              The Execution Framework
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-md text-lg text-muted-foreground">
              Three interconnected pillars designed to bring calm clarity to complex organizational growth.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Pillar 1 */}
            <motion.div variants={fadeUp} className="p-8 md:p-10 rounded-2xl flex flex-col h-full relative overflow-hidden group bg-card shadow-sm border border-border">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-transform duration-500 group-hover:scale-110 bg-background opacity-50"></div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 relative z-10 bg-primary text-primary-foreground">
                <Settings size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-primary">
                The Technical Engine
              </h3>
              <h4 className="font-serif text-2xl mb-4 text-foreground">
                System Architecture & Process Lift
              </h4>
              <p className="mb-8 flex-grow text-muted-foreground">
                "Founders shouldn't be buried in manual workflows. I audit, connect, and automate your tool stack so information flows smoothly across teams."
              </p>
              <div className="pt-6 border-t border-muted-foreground/15">
                <div className="text-xs font-bold uppercase tracking-wider mb-2 text-secondary">Proof of Impact</div>
                <p className="text-sm italic text-foreground">
                  Slashed enterprise processing times from 14 days down to 2 minutes and prevented $1M in redundant software licensing expenditures through rigorous system governance.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div variants={fadeUp} className="p-8 md:p-10 rounded-2xl flex flex-col h-full relative overflow-hidden group bg-card shadow-sm border border-border">
               <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-transform duration-500 group-hover:scale-110 bg-background opacity-50"></div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 relative z-10 bg-primary text-primary-foreground">
                <Layers size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-primary">
                The Accountability Cadence
              </h3>
              <h4 className="font-serif text-2xl mb-4 text-foreground">
                Execution Rhythm & Scorecards
              </h4>
              <p className="mb-8 flex-grow text-muted-foreground">
                "Translating high-level company goals into clear, cross-functional deliverables, quarterly scorecards, and sprint-ready workflows."
              </p>
              <div className="pt-6 border-t border-muted-foreground/15">
                <div className="text-xs font-bold uppercase tracking-wider mb-2 text-secondary">Proof of Impact</div>
                <p className="text-sm italic text-foreground">
                  Built and mentored technical delivery teams into structured product divisions, earning recognition like H-E-B Digital's 'Swoon Award for Innovation' and the 'Because People Matter' Award.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div variants={fadeUp} className="p-8 md:p-10 rounded-2xl flex flex-col h-full relative overflow-hidden group bg-card shadow-sm border border-border">
               <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-transform duration-500 group-hover:scale-110 bg-background opacity-50"></div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 relative z-10 bg-primary text-primary-foreground">
                <Users size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-primary">
                The Facilitation Anchor
              </h3>
              <h4 className="font-serif text-2xl mb-4 text-foreground">
                Human Alignment & Group Dynamics
              </h4>
              <p className="mb-8 flex-grow text-muted-foreground">
                "Bringing calm structure and psychological safety into high-stakes rooms. I resolve cross-functional friction and guide teams through complex organizational transitions."
              </p>
              <div className="pt-6 border-t border-muted-foreground/15">
                <div className="text-xs font-bold uppercase tracking-wider mb-2 text-secondary">Credential</div>
                <p className="text-sm italic text-foreground">
                  Backed by a 15-year technical foundation (Columbia Computer Science) paired with advanced professional frameworks, including ICA Technology of Participation (ToP) Facilitation Training (July 2026).
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technical Fluency & Scope */}
      <section className="w-full py-24 px-6 border-b border-border">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            Technical Depth & Operational Scope
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            Bridging the gap between high-level strategy and technical execution.
          </motion.p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          
          <motion.div 
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6 text-secondary">
              <TerminalSquare size={20} />
              <h3 className="font-bold uppercase tracking-wider text-sm">Technical Stack</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
              {['Salesforce', 'ServiceNow', 'Zapier', 'Power BI', 'Tableau', 'SQL', 'Atlassian Suite', 'Asana', 'Smartsheet'].map((tech) => (
                <span 
                  key={tech}
                  className="px-5 py-2.5 rounded-full text-sm font-medium shadow-sm transition-transform hover:-translate-y-1 bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6 text-primary">
              <Workflow size={20} />
              <h3 className="font-bold uppercase tracking-wider text-sm">Operational Scope</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
              {['Visionary-Integrator Partnership', 'Scorecard Tracking', 'Change Management', 'M&A Onboarding', 'Cross-Functional Alignment', 'Pipeline Governance'].map((scope) => (
                <span 
                  key={scope}
                  className="px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 border bg-card text-foreground border-foreground/5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  {scope}
                </span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Footer / CTA Invitation */}
      <footer className="w-full relative px-6 py-24 md:py-32 overflow-hidden bg-card">
        {/* Giant decorative text */}
        <div className="absolute -top-10 -right-20 text-[250px] font-serif leading-none opacity-[0.03] pointer-events-none whitespace-nowrap text-foreground">
          Scale
        </div>

        <motion.div 
          className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-6 w-16 h-16 rounded-full flex items-center justify-center bg-background text-primary shadow-sm">
            <Mail size={32} />
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
            Ready to establish your execution rhythm?
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-xl mb-12 max-w-2xl text-muted-foreground">
            Let's discuss how we can clear your operational bottlenecks and build the systems your team needs to thrive.
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <a 
              href="mailto:catherine@fourfoldcreative.com"
              className="px-10 py-5 rounded-xl font-medium text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl mb-16 flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Start the Conversation
              <ArrowRight size={20} />
            </a>
          </motion.div>
          
          <motion.div variants={fadeUp} className="w-full h-px mb-12 bg-muted-foreground/15"></motion.div>
          
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between w-full gap-8 items-center text-muted-foreground">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-bold text-sm tracking-wider uppercase mb-1 text-foreground">Location</span>
              <span>Austin, TX</span>
            </div>
            
            <div className="flex flex-col items-center gap-1">
              <span className="font-bold text-sm tracking-wider uppercase mb-1 text-foreground">Direct</span>
              <a href="mailto:catherine@fourfoldcreative.com" className="hover:underline decoration-primary underline-offset-4">
                catherine@fourfoldcreative.com
              </a>
              <a href="tel:5129097536" className="hover:underline decoration-primary underline-offset-4">
                512-909-7536
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-1">
              <span className="font-bold text-sm tracking-wider uppercase mb-1 text-foreground">Studio</span>
              <span>Fourfold Creative</span>
            </div>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
}
