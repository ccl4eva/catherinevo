import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const fieldClass =
  "w-full px-4 py-3 rounded-xl border border-secondary/60 bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/40 transition-shadow";

const labelClass = "block text-sm font-medium mb-2 text-muted-foreground";

const FORM_ENDPOINT = "/";
const FORM_NAME = "fractional-inquiry";

type FractionalInquiryFormProps = {
  idPrefix?: string;
  onSubmitted?: () => void;
};

export function FractionalInquiryForm({ idPrefix = "inquiry", onSubmitted }: FractionalInquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", FORM_NAME);

    try {
      // Local preview: Netlify Forms only work on a deployed Netlify URL
      if (import.meta.env.DEV) {
        console.info("[forms] Dev mode — skipping Netlify POST. Deploy to Netlify to receive submissions.");
        setSubmitted(true);
        onSubmitted?.();
        trackEvent("form_submit");
        return;
      }

      const body = new URLSearchParams();
      formData.forEach((value, key) => {
        body.append(key, String(value));
      });

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error(`Form endpoint returned ${response.status}`);
      }

      setSubmitted(true);
      onSubmitted?.();
      trackEvent("form_submit");
    } catch (err) {
      console.error("[forms] submit failed", err);
      setError("Something went wrong. Please try again or email cat@catherinevo.com.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="confirmation"
          role="status"
          aria-live="polite"
          className="w-full max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border-2 border-secondary bg-background text-secondary"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 380, damping: 22, delay: 0.08 }}
          >
            <Check size={28} strokeWidth={2.25} aria-hidden />
          </motion.div>

          <motion.h3
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Thank you.
          </motion.h3>

          <motion.div
            className="mt-6 mb-7 h-px origin-left bg-secondary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          />

          <motion.p
            className="text-lg md:text-xl leading-relaxed text-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            I review every note personally.
          </motion.p>
          <motion.p
            className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
          >
            If your current stage and operational bottlenecks match my capacity for Q3/Q4 (5–15 hrs/wk), I will email you a private scheduling link within 24 hours.
          </motion.p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          name="fractional-inquiry"
          method="POST"
          action="/"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="w-full max-w-xl mx-auto p-8 md:p-10 rounded-2xl bg-card border border-border shadow-sm"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <input type="hidden" name="form-name" value="fractional-inquiry" />

          <p className="hidden" aria-hidden="true">
            <label>
              Don’t fill this out if you're human:{" "}
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <div className="mb-5">
            <label htmlFor={`${idPrefix}-name`} className={labelClass}>
              Your Name <span className="text-secondary">*</span>
            </label>
            <input
              id={`${idPrefix}-name`}
              type="text"
              name="name"
              required
              aria-required="true"
              autoComplete="name"
              className={fieldClass}
            />
          </div>

          <div className="mb-5">
            <label htmlFor={`${idPrefix}-email`} className={labelClass}>
              Work Email <span className="text-secondary">*</span>
            </label>
            <input
              id={`${idPrefix}-email`}
              type="email"
              name="email"
              required
              aria-required="true"
              autoComplete="email"
              className={fieldClass}
            />
          </div>

          <div className="mb-5">
            <label htmlFor={`${idPrefix}-company`} className={labelClass}>
              Company Name & Approximate Size <span className="text-secondary">*</span>
            </label>
            <input
              id={`${idPrefix}-company`}
              type="text"
              name="company-size"
              required
              aria-required="true"
              placeholder="e.g., Acme Co. / 25 people"
              className={fieldClass}
            />
          </div>

          <div className="mb-8">
            <label htmlFor={`${idPrefix}-bottleneck`} className={labelClass}>
              What is the primary operational bottleneck you're facing right now?{" "}
              <span className="text-secondary">*</span>
            </label>
            <textarea
              id={`${idPrefix}-bottleneck`}
              name="bottleneck"
              rows={4}
              required
              aria-required="true"
              className={`${fieldClass} resize-y min-h-[7rem]`}
            />
          </div>

          {error ? (
            <p className="mb-4 text-sm text-destructive" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="cta-glow w-full py-3.5 px-6 rounded-xl font-medium text-primary-foreground transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none"
          >
            <span className="relative z-[1]">
              {submitting ? "Sending…" : "Send my note"}
            </span>
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
