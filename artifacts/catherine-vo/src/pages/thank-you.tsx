import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ThankYou() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-background text-foreground font-sans flex flex-col">
      <div className="pointer-events-none fixed inset-0 z-[1] bg-noise mix-blend-overlay opacity-40" />
      <div
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, hsl(var(--secondary) / 0.9) 0%, transparent 70%)" }}
      />

      <header className="relative z-10 w-full border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-3.5 md:py-4">
          <Link href="/" className="font-serif text-2xl tracking-tight text-foreground hover:text-primary transition-colors">
            Catherine Vo
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-lg w-full">
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            <strong className="font-semibold">Thank you for your message.</strong>
          </p>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground mb-10">
            If we are a strong mutual fit for this season, I will email you a private scheduling link within a day.
          </p>
          <Link
            href="/"
            className="cta-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-[1] inline-flex items-center gap-2">
              Back to home
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
