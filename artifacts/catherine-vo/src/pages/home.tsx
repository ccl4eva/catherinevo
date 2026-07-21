import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  Layers,
  TerminalSquare,
  Workflow,
  ExternalLink,
  Presentation,
  LineChart,
  Search,
  PenLine,
  Hammer,
  type LucideIcon
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

const INTRO_MAILTO = "mailto:cat@catherinevo.com?subject=Intro%20call";

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

const howIWork: {
  step: string;
  title: string;
  subtitle: string;
  body: string;
  tools: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "Discover & Align",
    subtitle: "Information Gathering",
    body: "I don't guess - I listen and map. I step into your ecosystem to understanding existing tech stacks, analyze workflows, and conduct structured alignment sessions with key stakeholders, engineering leads, and cross-functional teams.",
    tools: "ICA Technology of Participation (ToP) facilitation, executive vision workshops, stakeholder interviews.",
    icon: Search,
  },
  {
    step: "02",
    title: "Diagnose & Design",
    subtitle: "Gaps, Strategy, & Architecture",
    body: "Once the landscape is clear, I identify the critical bottlenecks and build the roadmap. Whether it's creating a sound financial dashboard to understand trends and projections, following EOS® principles via Ninety.io, or redesigning a broken operational workflow, I design the blueprint with your input before we build.",
    tools: "EOS® scorecards/Rocks, prioritization frameworks, system architecture design.",
    icon: PenLine,
  },
  {
    step: "03",
    title: "Execute & Embed",
    subtitle: "Hands-On Implementation",
    body: "I don't hand you a slide deck and walk away. I roll up my sleeves and build the systems, automate the manual work, and drive cross-functional execution. I create documentation and playbooks so the changes actually stick long-term.",
    tools: "Technical integrations (Salesforce, Power BI, custom sheets/automations), process documentation, team coaching.",
    icon: Hammer,
  },
];

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
  "Companies Of 15–150",
  "5–15 Hours / Week",
  "Education, Nonprofit & Social Impact",
  "Tech And Non-Tech",
  "Founder + Integrator Pairing",
  "Weekly Scorecards",
  "Vision & Strategy Workshops",
  "Financial Dashboards & Revenue Insight",
  "Change Management",
  "Growth-Ready Leadership Teams",
] as const;

const selectedWork: {
  label: string;
  title: string;
  outcome: string;
  outcomeNote: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    label: "Facilitation",
    title: "H-E-B Quality Assurance & Food Safety",
    outcome: "6 Strategic Pillars",
    outcomeNote: "Vision + Outcomes",
    body: "Led a full-day vision workshop, then key-result sessions with subdomain leaders to lock roadmaps.",
    icon: Presentation,
  },
  {
    label: "Cadence",
    title: "Integrator Seat (EOS-Informed)",
    outcome: "Weekly Rhythm",
    outcomeNote: "Scorecards + Ownership",
    body: "Sat in the Integrator seat with a growth-ready exec circle — pairing, scorecards, and follow-through without the dogma.",
    icon: Layers,
  },
  {
    label: "Finance Ops",
    title: "Custom Founder Financial Dashboards",
    outcome: "Pricing Confidence",
    outcomeNote: "YoY + Projections",
    body: "Built Google Sheets dashboards with trends and adjustable projections that informed pricing and pipeline focus.",
    icon: LineChart,
  },
];

const firstNinety = [
  {
    day: "30",
    title: "See Clearly",
    body: "Audit of systems and processes. A prioritized list of gaps — and concrete options to fix them.",
  },
  {
    day: "60",
    title: "Decide The Path",
    body: "Decisions locked on which improvements to pursue. A practical 1–2 year roadmap the leadership team can own.",
  },
  {
    day: "90",
    title: "Ship And Prove",
    body: "First solutions implemented. Processes documented and in testing — so relief shows up in the work, not just the slide deck.",
  },
] as const;

export default function Home() {
  const [showHeaderCta, setShowHeaderCta] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowHeaderCta(window.scrollY > 220);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-background text-foreground font-sans">
      {/* Noise sits behind content so CTA motion stays visible */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-noise mix-blend-overlay opacity-40"></div>

      {/* Decorative background blur/gradients */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, hsl(var(--secondary) / 0.9) 0%, transparent 70%)" }}
      ></div>
      <div 
        className="absolute top-[40%] right-[-10%] w-[40%] h-[60%] rounded-full blur-[140px] opacity-[0.15] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.9) 0%, transparent 70%)" }}
      ></div>

      {/* Fixed header — more reliable than sticky in embedded browsers */}
      <header className="fixed top-0 left-0 right-0 z-[60] w-full border-b border-border bg-background/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3.5 md:py-4 flex justify-between items-center gap-4">
          <div className="font-serif text-2xl tracking-tight text-foreground shrink-0">
            Catherine Vo<span className="text-primary">.</span>
          </div>
          <div className="relative flex items-center gap-3 md:gap-5 text-sm font-medium text-muted-foreground">
            <a
              href="mailto:cat@catherinevo.com"
              className={`hidden lg:flex items-center gap-2 hover:text-primary transition-opacity duration-300 ${
                showHeaderCta ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <Mail size={16} /> cat@catherinevo.com
            </a>
            <span
              className={`hidden md:flex items-center gap-2 transition-opacity duration-300 ${
                showHeaderCta ? "opacity-0" : "opacity-100"
              }`}
            >
              <MapPin size={16} /> Austin, TX
            </span>
            <a
              href={INTRO_MAILTO}
              aria-hidden={!showHeaderCta}
              tabIndex={showHeaderCta ? 0 : -1}
              className={`cta-glow inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium text-primary-foreground transition-all duration-300 ${
                showHeaderCta
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1 pointer-events-none"
              }`}
            >
              <span className="relative z-[1] inline-flex items-center gap-1.5">
                Book Intro
                <ArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Offset for fixed header */}
      <div className="h-[4.25rem] md:h-[4.5rem]" aria-hidden />

      {/* Hero Section */}
      <section className="relative z-10 w-full px-6 pt-16 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
          
          <motion.div 
            className="w-full lg:w-3/5 z-10 flex flex-col items-start"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-card text-foreground shadow-sm border border-border">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Accepting Q3/Q4 Fractional Inquiries (5–15 hrs/wk)
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 text-foreground">
              Structure where you need it.
              <br />
              <span className="italic text-primary">Clarity where you scale.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl leading-relaxed mb-5 max-w-2xl text-muted-foreground">
              I bridge executive vision with operational rigor—building the dashboards, alignment mechanisms, and systems that keep your business running effortlessly.
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm md:text-base leading-relaxed mb-10 max-w-2xl text-muted-foreground/90 border-l-2 border-secondary pl-4">
              Roughly 5–15 hours a week: structured execution so founders can breathe and the operation scales without stalling.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href={INTRO_MAILTO}
                className="cta-glow w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-primary-foreground"
              >
                <span className="relative z-[1] inline-flex items-center gap-2">
                  Book A 30-Minute Intro
                  <ArrowRight size={18} />
                </span>
              </a>
              <a 
                href="#work"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all hover:bg-foreground/5 border border-foreground/20 text-foreground flex items-center justify-center"
              >
                See Selected Work
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
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Reduced Shrink</span>
              <span className="text-xs mt-1 text-muted-foreground/70">Retail</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-4xl md:text-5xl mb-2 text-secondary">67%</span>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Unnecessary Backlog Cut</span>
              <span className="text-xs mt-1 text-muted-foreground/70">Social Platform</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-3xl md:text-4xl mb-2 flex items-center gap-2 text-primary">
                14d <ArrowRight size={24} className="opacity-50" /> 2m
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Offboarding Time</span>
              <span className="text-xs mt-1 text-muted-foreground/70">Insurance</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-4xl md:text-5xl mb-2 text-secondary">10M+</span>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Manual Labels Automated</span>
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
              Hire me when your company is roughly 15–150 people, you have a real leadership team — not a one-person shop that can't let go — and you need someone for ~5–15 hours a week to own cadence, run strategy rooms, or steady a messy transition. I put rhythms and systems in place so founders get real relief: space to think and lead without everything grinding to a halt.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How I Work */}
      <section className="w-full py-24 px-6 relative">
        <div className="absolute inset-0 opacity-40 bg-card"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="mb-16 md:mb-20 flex flex-col gap-4 max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-foreground">
              How I Work
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              A disciplined, cross-functional rhythm designed to take you out of the tactical bottleneck and put you back in the driver's seat.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {howIWork.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  className="p-8 md:p-10 rounded-2xl flex flex-col h-full relative overflow-hidden group bg-card shadow-sm border border-border"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-transform duration-500 group-hover:scale-110 bg-background opacity-50"></div>
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary text-primary-foreground">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="font-serif text-3xl text-primary/30">{item.step}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-1 text-foreground relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-wider mb-5 text-primary relative z-10">
                    {item.subtitle}
                  </p>
                  <div className="mb-6 flex-grow relative z-10">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2 text-secondary">
                      What It Looks Like
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-muted-foreground/15 relative z-10">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2 text-secondary">
                      The Tools
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {item.tools}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* First 90 days */}
      <section className="w-full py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-16 md:mb-20 flex flex-col gap-4 max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-foreground">
              First 90 Days
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              What you can expect when we work together.
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
            className="mb-16 md:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-foreground">
              Selected Work
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {selectedWork.map((item) => {
              const Icon = item.icon;
              return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex flex-col rounded-2xl bg-card border border-border shadow-sm overflow-hidden"
              >
                <div className="relative px-8 pt-8 pb-6 bg-primary/5 border-b border-border">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary text-primary-foreground">
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary pt-1">
                      {item.label}
                    </span>
                  </div>
                  <p className="font-serif text-3xl md:text-4xl text-primary leading-none mb-2">
                    {item.outcome}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.outcomeNote}
                  </p>
                </div>
                <div className="flex flex-col gap-3 p-8 flex-grow">
                  <h3 className="font-serif text-xl text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {item.body}
                  </p>
                </div>
              </motion.div>
              );
            })}
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
            What I Take On
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
            Facilitation, operating rhythm, and practical systems — for companies roughly 15–150, across industries.
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
              <h3 className="font-bold uppercase tracking-wider text-sm">Tools I Use Often</h3>
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
            Ready To Stop Firefighting?
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-xl mb-12 max-w-2xl text-muted-foreground">
            Tell me what's broken. We'll figure out if I'm the right person to fix it.
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <a 
              href={INTRO_MAILTO}
              className="cta-glow px-10 py-5 rounded-xl font-medium text-lg transition-transform hover:scale-[1.02] active:scale-[0.98] mb-16 flex items-center gap-3 text-primary-foreground"
            >
              <span className="relative z-[1] inline-flex items-center gap-3">
                Start The Conversation
                <ArrowRight size={20} />
              </span>
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
              <a href="mailto:cat@catherinevo.com" className="hover:underline decoration-primary underline-offset-4">
                cat@catherinevo.com
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
