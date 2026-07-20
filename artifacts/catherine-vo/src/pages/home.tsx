import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  Layers,
  Settings,
  Users,
  TerminalSquare,
  Workflow,
  ExternalLink
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

const FOURFOLD_URL = "https://papaya-wisp-6893ae.netlify.app/";

const tools = [
  "Google Sheets",
  "Zapier",
  "Make",
  "Notion",
  "Airtable",
  "Salesforce",
  "HubSpot",
  "ServiceNow",
  "Jira",
  "Asana",
  "Slack",
  "SQL",
  "Power BI",
  "Tableau",
  "Claude",
  "ChatGPT",
] as const;

const scopeItems = [
  "Companies of 10–500",
  "5–15 hours / week",
  "Education, nonprofit & social impact",
  "Tech and non-tech",
  "Founder + Integrator pairing",
  "Weekly scorecards",
  "Vision & strategy workshops",
  "Financial dashboards & revenue insight",
  "Change management",
  "Growth-ready leadership teams",
] as const;

const selectedWork = [
  {
    label: "Facilitation",
    title: "H-E-B Quality Assurance & Food Safety",
    body: "As a full-time employee, led a full-day vision and strategy workshop that produced one clarified vision statement, six strategic pillars, and business outcomes under each — then followed up with subdomain leaders on key-result workshops that shaped their roadmaps and a shared view of the business unit’s path forward.",
  },
  {
    label: "Cadence",
    title: "Integrator seat (EOS-informed)",
    body: "Stepped into the Integrator role with a growth-ready client and a small executive circle — Visionary pairing, scorecards, and a weekly rhythm. EOS-informed, not certified. I keep what works and skip the dogma.",
  },
  {
    label: "Finance ops",
    title: "Custom founder financial dashboards",
    body: "Built Google Sheets dashboards with year-over-year trends and adjustable projections — insight that informed pricing strategy, sharpened where to focus the sales pipeline, and gave the founder confidence to raise price.",
  },
] as const;

const firstNinety = [
  {
    day: "30",
    title: "See clearly",
    body: "Audit of systems and processes. A prioritized list of gaps — and concrete options to fix them.",
  },
  {
    day: "60",
    title: "Decide the path",
    body: "Decisions locked on which improvements to pursue. A practical 1–2 year roadmap the leadership team can own.",
  },
  {
    day: "90",
    title: "Ship and prove",
    body: "First solutions implemented. Processes documented and in testing — so relief shows up in the work, not just the slide deck.",
  },
] as const;

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
              I help founders get out of the weeds —{" "}
              <span className="italic text-primary">and get their life back a little.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl text-muted-foreground">
              Fractional Chief of Staff for companies of about 10–500 — tech, education, nonprofits, and other mission-driven orgs ready to grow to the next level. I work best with leadership teams that can actually let go. Roughly 5–15 hours a week: cadence, hard rooms, and handoffs — so founders can breathe again without the operation stalling.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href="mailto:catherine@fourfoldcreative.com?subject=Intro%20call"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                style={{ boxShadow: "0 10px 25px -5px rgba(139,105,20,0.3)" }}
              >
                Book a 30-minute intro
                <ArrowRight size={18} />
              </a>
              <a 
                href="#work"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all hover:bg-foreground/5 border border-foreground/20 text-foreground flex items-center justify-center"
              >
                See selected work
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
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Reduced shrink</span>
              <span className="text-xs mt-1 text-muted-foreground/70">Retail</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-4xl md:text-5xl mb-2 text-secondary">67%</span>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Unnecessary backlog cut</span>
              <span className="text-xs mt-1 text-muted-foreground/70">Social platform</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-3xl md:text-4xl mb-2 flex items-center gap-2 text-primary">
                14d <ArrowRight size={24} className="opacity-50" /> 2m
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Offboarding time</span>
              <span className="text-xs mt-1 text-muted-foreground/70">Insurance</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-4xl md:text-5xl mb-2 text-secondary">10M+</span>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Manual labels automated</span>
              <span className="text-xs mt-1 text-muted-foreground/70">Retail</span>
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
              Good systems don't replace people. They give people room to do the work that matters.
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
              Most companies don't fail for lack of vision. They stall because owners, habits, and tools don't line up — and nobody owns the room where decisions get made. I work with tech companies and with education, nonprofits, government-adjacent, and social-impact groups that are funded and ready to grow.
            </motion.p>
            <motion.p variants={fadeUp}>
              I've sat in the Integrator seat with a past client (EOS-informed, not certified), facilitated vision and strategy work for H-E-B's Quality Assurance and Food Safety teams, and spent 15 years in tech and creative work (Columbia CS, NYU). Fifteen years in engineering means I can sit with product, eng, and ops without getting snowed — I know when “it's complex” is a real constraint, and when it's a stall.
            </motion.p>
            <motion.p variants={fadeUp}>
              Hire me when you have a real leadership team — not a one-person shop that can't let go — and you need someone for ~5–15 hours a week to own cadence, run strategy rooms, or steady a messy transition. I put rhythms and systems in place so founders get real relief: space to think and lead without everything grinding to a halt.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How I work — cadence & facilitation first, tools third */}
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
              How I work
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-md text-lg text-muted-foreground">
              Three equal lanes: cadence, facilitation, and systems. Tech is a lever — not the whole story.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="p-8 md:p-10 rounded-2xl flex flex-col h-full relative overflow-hidden group bg-card shadow-sm border border-border">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-transform duration-500 group-hover:scale-110 bg-background opacity-50"></div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 relative z-10 bg-primary text-primary-foreground">
                <Layers size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-primary">
                Cadence & ownership
              </h3>
              <h4 className="font-serif text-2xl mb-4 text-foreground">
                Who owns what, every week
              </h4>
              <p className="mb-8 flex-grow text-muted-foreground">
                Visionary/Integrator pairing, simple scorecards, and a rhythm the company can keep. I've done this in the Integrator seat — EOS-informed, not a certified Implementer — so founders get relief from being the bottleneck. And because I've shipped as an engineer, I can push back when delivery stories don't add up and help the team get to a clear plan instead of another vague status update.
              </p>
              <div className="pt-6 border-t border-muted-foreground/15">
                <div className="text-xs font-bold uppercase tracking-wider mb-2 text-secondary">Proof of impact</div>
                <p className="text-sm text-foreground">
                  Built and mentored delivery teams into structured product groups — including H-E-B Digital's Swoon Award for Innovation and the Because People Matter Award.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="p-8 md:p-10 rounded-2xl flex flex-col h-full relative overflow-hidden group bg-card shadow-sm border border-border">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-transform duration-500 group-hover:scale-110 bg-background opacity-50"></div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 relative z-10 bg-primary text-primary-foreground">
                <Users size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-primary">
                Meetings that decide
              </h3>
              <h4 className="font-serif text-2xl mb-4 text-foreground">
                Get the room unstuck
              </h4>
              <p className="mb-8 flex-grow text-muted-foreground">
                Vision and strategy workshops, hard cross-functional conversations, and transitions that need a steady facilitator — not another slide deck.
              </p>
              <div className="pt-6 border-t border-muted-foreground/15">
                <div className="text-xs font-bold uppercase tracking-wider mb-2 text-secondary">Proof of impact</div>
                <p className="text-sm text-foreground">
                  Facilitated vision and strategy workshops with H-E-B Quality Assurance and Food Safety. Backed by ICA Technology of Participation (ToP) facilitation training (July 2026).
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="p-8 md:p-10 rounded-2xl flex flex-col h-full relative overflow-hidden group bg-card shadow-sm border border-border">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-transform duration-500 group-hover:scale-110 bg-background opacity-50"></div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 relative z-10 bg-primary text-primary-foreground">
                <Settings size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-primary">
                Tools & workflows
              </h3>
              <h4 className="font-serif text-2xl mb-4 text-foreground">
                Stop the busywork
              </h4>
              <p className="mb-8 flex-grow text-muted-foreground">
                When the stack is the bottleneck, I audit, connect, and automate — so information moves and founders aren't buried in manual work. That includes practical builds, not just strategy decks.
              </p>
              <div className="pt-6 border-t border-muted-foreground/15">
                <div className="text-xs font-bold uppercase tracking-wider mb-2 text-secondary">Proof of impact</div>
                <p className="text-sm text-foreground">
                  Designed and implemented custom financial dashboards in Google Sheets that informed founder revenue strategy. Also cut enterprise processing from 14 days to 2 minutes, and stopped about $1M in redundant software spend through clearer system ownership.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* First 90 days */}
      <section className="w-full py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-16 md:mb-20 flex flex-col md:flex-row gap-6 items-end justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-foreground">
              First 90 days
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-md text-lg text-muted-foreground">
              What you can expect when we work together — clear enough to hold me to it.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {firstNinety.map((item) => (
              <motion.div
                key={item.day}
                variants={fadeUp}
                className="flex flex-col gap-4 p-8 md:p-10 rounded-2xl bg-card border border-border shadow-sm"
              >
                <span className="font-serif text-5xl text-primary">{item.day}</span>
                <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="w-full py-24 md:py-32 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-16 md:mb-20 flex flex-col md:flex-row gap-6 items-end justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-foreground">
              Selected work
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-md text-lg text-muted-foreground">
              Short proofs — not a full portfolio. Studio case studies live at{" "}
              <a
                href={FOURFOLD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:opacity-80"
              >
                Fourfold Creative
              </a>
              .
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {selectedWork.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex flex-col gap-4 p-8 md:p-10 rounded-2xl bg-card border border-border shadow-sm"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  {item.label}
                </span>
                <h3 className="font-serif text-2xl text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground flex-grow leading-relaxed">
                  {item.body}
                </p>
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 pt-2"
                  >
                    {item.linkLabel}
                    <ExternalLink size={14} />
                  </a>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scope & tools — scope first, tools compact */}
      <section className="w-full py-24 px-6 border-b border-border">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            What I take on
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            Facilitation, operating rhythm, and practical systems — for companies roughly 10–500, across industries.
          </motion.p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto flex flex-col gap-14">
          <motion.div 
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6 text-primary">
              <Workflow size={20} />
              <h3 className="font-bold uppercase tracking-wider text-sm">Scope</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
              {scopeItems.map((scope) => (
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

          <motion.div 
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4 text-secondary">
              <TerminalSquare size={20} />
              <h3 className="font-bold uppercase tracking-wider text-sm">Tools I use often</h3>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm text-muted-foreground mb-6 max-w-lg text-center">
              A sampling — not a shopping list. Happy to meet you in whatever stack you already have.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2">
              {tools.map((tech) => (
                <span 
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-secondary/80 text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer / CTA Invitation */}
      <footer className="w-full relative px-6 py-24 md:py-32 overflow-hidden bg-card">
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
            Ready to stop firefighting?
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-xl mb-12 max-w-2xl text-muted-foreground">
            Tell me what's broken. We'll figure out if I'm the right person to fix it.
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <a 
              href="mailto:catherine@fourfoldcreative.com?subject=Intro%20call"
              className="px-10 py-5 rounded-xl font-medium text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl mb-16 flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Start the conversation
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
              <a
                href={FOURFOLD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline decoration-primary underline-offset-4 inline-flex items-center gap-1.5"
              >
                Fourfold Creative
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
}
