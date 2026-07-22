import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  TerminalSquare,
  Workflow,
  Presentation,
  LineChart,
  Search,
  PenLine,
  Hammer,
  Zap,
  X,
  type LucideIcon
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { FractionalInquiryForm } from "@/components/fractional-inquiry-form";
import { trackEvent } from "@/lib/analytics";

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
    tools: "Executive vision workshops, stakeholder interviews, Figma mind mapping.",
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
    tools: "Technical integrations (ServiceNow, Salesforce, Power BI, custom sheets/automations), process documentation, team coaching.",
    icon: Hammer,
  },
];

const tools = [
  "Google Workspace",
  "Zapier",
  "PipeDrive",
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
  "Gemini",
  "ChatGPT",
  "Posthog",
  "Amplitude"
] as const;

const scopeItems = [
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
  title: string;
  context: string;
  deliverable: string;
  detailLabel: string;
  detail: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Enterprise Facilitation & Strategic Alignment",
    context: "H-E-B (Quality Assurance & Food Safety)",
    deliverable:
      "Led a full-day executive vision workshop followed by targeted subdomain sessions to elicit leadership strategy, define core pillars, and lock down execution roadmaps.",
    detailLabel: "The Method",
    detail:
      "Backed by intensive independent research and hours of meticulous structural prep—translating complex cross-functional needs into a focused, high-impact agenda that drove collaboration and alignment.",
    icon: Presentation,
  },
  {
    title: "Operational Rhythm & Financial Architecture",
    context: "Sound Sight Tarot",
    deliverable:
      "Partnered directly with the founder as a Fractional Integrator to establish a structured cadence (EOS-informed weekly/monthly/quarterly rhythm via Ninety.io) while architecting custom Google Sheets financial dashboards.",
    detailLabel: "The Outcome",
    detail:
      "Combined operational alignment with clear financial modeling and projections, giving the founder baseline data to drive pricing and marketing strategy, freeing up executive capacity.",
    icon: LineChart,
  },
  {
    title: "Workflow Automation & Engineering Relief",
    context: "NFP & Flipboard (Technical Operations & Process Transformation)",
    deliverable:
      "Audited and optimized complex technical workflows to eliminate operational bottlenecks, automating backend processes and freeing up engineering and HR teams from manual admin.",
    detailLabel: "The Outcome",
    detail:
      "Replaced high-friction legacy tasks with streamlined systems, reducing redundant software spend and letting core technical talent focus back on product velocity.",
    icon: Zap,
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
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const openInquiry = useCallback(() => {
    setInquiryOpen(true);
    setInquirySubmitted(false);
    trackEvent("explore_open");
    // #explore is a stable footer anchor (always in the DOM), so one click scrolls reliably.
    // A short follow-up catches the form expanding into view after mount.
    const scrollToForm = () => {
      document.getElementById("explore")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.requestAnimationFrame(scrollToForm);
    window.setTimeout(scrollToForm, 160);
  }, []);

  const closeInquiry = useCallback(() => {
    setInquiryOpen(false);
    setInquirySubmitted(false);
    if (window.location.hash === "#explore") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowHeaderCta(window.scrollY > 220);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Never auto-open from a stale hash — form only appears after a CTA click
  useEffect(() => {
    if (window.location.hash === "#explore") {
      window.history.replaceState(null, "", window.location.pathname);
    }
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
            Catherine Vo<span className="text-primary"></span>
          </div>
          <div className="relative flex items-center gap-3 md:gap-5 text-sm font-medium text-muted-foreground">
            <a
              href="mailto:cat@catherinevo.com"
              onClick={() => trackEvent("mailto_click", { location: "header" })}
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
            <button
              type="button"
              onClick={openInquiry}
              aria-expanded={inquiryOpen}
              aria-controls="explore"
              className={`cta-glow inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium text-primary-foreground transition-all duration-300 ${
                showHeaderCta
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1 pointer-events-none"
              }`}
            >
              <span className="relative z-[1] inline-flex items-center gap-1.5">
                Explore
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Offset for fixed header */}
      <div className="h-[4.25rem] md:h-[4.5rem]" aria-hidden />

      {/* Hero Section */}
      <section className="relative z-10 w-full px-6 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="z-10 flex flex-col items-start"
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
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl text-muted-foreground">
              Hi, I'm <strong className="font-semibold text-foreground">Catherine Vo</strong>. I step into your active ecosystem to design the systems and cadence that replace constant reaction with structured execution—so your business scales without burning out your people.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button 
                type="button"
                onClick={openInquiry}
                aria-expanded={inquiryOpen}
                aria-controls="explore"
                className="cta-glow w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-primary-foreground"
              >
                <span className="relative z-[1] inline-flex items-center gap-2">
                  Explore working together
                  <ArrowRight size={18} />
                </span>
              </button>
              <a 
                href="#work"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all hover:bg-foreground/5 border border-foreground/20 text-foreground flex items-center justify-center"
              >
                See selected work
              </a>
            </motion.div>
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

      {/* About Me */}
      <section id="experience" className="w-full py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
          {/* Statement quote — mark in document flow so it never crowds the text */}
          <motion.blockquote
            className="relative w-full rounded-2xl bg-card/80 px-8 py-12 md:px-14 md:py-16 lg:px-16 lg:py-20 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="mb-4 md:mb-6 font-serif italic text-[7.5rem] md:text-[10rem] lg:text-[12rem] leading-[0.7] text-secondary select-none"
              aria-hidden
            >
              &ldquo;
            </div>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-tight text-foreground max-w-4xl">
              There is an art to taking what is already in your environment, processing the challenge, and creating something new from it.
            </p>
          </motion.blockquote>

          {/* Photo | label + bio */}
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-14 lg:gap-20">
            <motion.div
              className="relative w-full md:w-[42%] max-w-md mx-auto md:mx-0 shrink-0 aspect-[4/5]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Curved offset layers + gold accent frame */}
              <div className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3 bg-secondary/30" aria-hidden />
              <div className="absolute inset-0 rounded-2xl -translate-x-2 -translate-y-2 border-2 border-secondary" aria-hidden />
              <img
                src="/images/catherine-headshot.jpg"
                alt="Catherine Vo, fractional Chief of Staff based in Austin"
                className="absolute inset-0 z-10 w-full h-full object-cover rounded-2xl shadow-xl border-[3px] border-secondary"
              />
            </motion.div>

            <motion.div
              className="flex flex-col min-w-0 md:flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeUp}
                className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-8 md:mb-10"
              >
                About Me
              </motion.h2>

              <div className="flex flex-col gap-6 md:gap-7 text-base md:text-lg text-muted-foreground leading-relaxed">
                <motion.p variants={fadeUp}>
                  I spent my early foundation bridging two distinct worlds: Computer Science at Columbia University and Fine Art at NYU. That blend taught me early on that building systems and solving creative challenges require the same core discipline—taking what is in front of you, processing the constraints, and engineering a functional structure.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Over the last 15+ years, I've applied that mindset to software engineering, product management, and high-stakes enterprise operations.
                </motion.p>
                <motion.p variants={fadeUp}>
                  In business operations, that means I don't walk in with a rigid, one-size-fits-all corporate playbook. I step into your current ecosystem, look at the actual friction points, and build clean, custom architecture that brings order to the chaos. Whether I'm running executive vision workshops, establishing a weekly cadence, or cleaning up data flows, my goal is simple: to build the structural frame so you can respond isntead of reacting and get back to leading your business.
                </motion.p>
              </div>
            </motion.div>
          </div>
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

        {/* Separate band so spacing can't collapse against the card grid */}
        <div className="max-w-7xl mx-auto relative z-10" style={{ paddingTop: 96 }}>
          <div className="max-w-3xl">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground" style={{ paddingBottom: 16 }}>
              Who I Partner With
            </h3>
            <ul className="flex flex-col gap-8 md:gap-10 list-none m-0 p-0 text-lg text-muted-foreground leading-relaxed">
              <li>
                <span className="font-medium text-foreground">You have a core leadership team:</span>{" "}
                You aren't operating as a solo founder; you have leaders in place who are ready to share the weight of execution.
              </li>
              <li>
                <span className="font-medium text-foreground">You need a steady operational anchor:</span>{" "}
                You are looking for someone to step in for ~5–15 hours a week to run strategic alignment rooms, manage cadence, and steady a messy transition.
              </li>
              <li>
                <span className="font-medium text-foreground">You want long-term relief:</span>{" "}
                My goal is to build simple, sustainable rhythms and systems so you get your time back—giving you the space to think and lead without the business grinding to a halt.
              </li>
            </ul>
          </div>
        </div>
      </section>      <section className="w-full py-24 px-6 border-b border-border">
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
                  className="p-8 md:p-10 rounded-2xl flex flex-col h-full relative overflow-hidden group bg-card shadow-sm border border-border"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-transform duration-500 group-hover:scale-110 bg-background opacity-50"></div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 relative z-10 bg-primary text-primary-foreground">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl mb-2 text-foreground relative z-10 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-wider mb-5 text-primary relative z-10">
                    {item.context}
                  </p>
                  <div className="mb-6 flex-grow relative z-10">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2 text-secondary">
                      The Deliverable
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.deliverable}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-muted-foreground/15 relative z-10">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2 text-secondary">
                      {item.detailLabel}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {item.detail}
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
          The messy operational bottlenecks, cross-functional friction, and scaling roadblocks that core leadership teams face.
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
            Move From Reaction To Response.
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-xl mb-12 max-w-2xl text-muted-foreground leading-relaxed">
            No sales pitches or pressure—just a direct conversation about your current operational bottlenecks, your leadership team, and how we can bring structure to the workflow so you can lead with clarity.
          </motion.p>
          
          {/* Stable anchor so scroll works on the first click */}
          <div id="explore" className="w-full scroll-mt-28">
            <AnimatePresence initial={false}>
              {!inquiryOpen ? (
                <motion.div
                  key="explore-cta"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="flex justify-center"
                >
                  <button 
                    type="button"
                    onClick={openInquiry}
                    aria-expanded={false}
                    aria-controls="explore-panel"
                    className="cta-glow px-10 py-5 rounded-xl font-medium text-lg transition-transform hover:scale-[1.02] active:scale-[0.98] mb-16 inline-flex items-center gap-3 text-primary-foreground"
                  >
                    <span className="relative z-[1] inline-flex items-center gap-3">
                      Explore working together
                      <ArrowRight size={20} />
                    </span>
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="explore-panel"
                  id="explore-panel"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full overflow-hidden mb-16"
                  aria-label="Inquiry form"
                >
                  <motion.div
                    className="mx-auto mb-8 h-px max-w-xl origin-center bg-secondary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden
                  />
                  <div className="mx-auto max-w-xl text-left">
                    {!inquirySubmitted ? (
                      <div className="mb-8 flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">
                            Next Step
                          </p>
                          <h3 className="font-serif text-3xl md:text-4xl text-foreground">
                            What's getting in the way?
                          </h3>
                        </div>
                        <button
                          type="button"
                          onClick={closeInquiry}
                          className="shrink-0 mt-1 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-background/80 transition-colors"
                          aria-label="Close inquiry form"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    ) : null}
                    <FractionalInquiryForm
                      idPrefix="home-inquiry"
                      onSubmitted={() => setInquirySubmitted(true)}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <motion.div variants={fadeUp} className="w-full h-px mb-12 bg-muted-foreground/15"></motion.div>
          
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between w-full gap-8 items-center text-muted-foreground">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-bold text-sm tracking-wider uppercase mb-1 text-foreground">Location</span>
              <span className="inline-flex items-center gap-2.5">
                Austin, TX
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden />
                Remote
              </span>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-1">
              <span className="font-bold text-sm tracking-wider uppercase mb-1 text-foreground">Direct</span>
              <a
                href="mailto:cat@catherinevo.com"
                onClick={() => trackEvent("mailto_click", { location: "footer" })}
                className="hover:underline decoration-primary underline-offset-4"
              >
                cat@catherinevo.com
              </a>
              <a href="tel:5129097536" className="hover:underline decoration-primary underline-offset-4">
                512-909-7536
              </a>
            </div>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
}
