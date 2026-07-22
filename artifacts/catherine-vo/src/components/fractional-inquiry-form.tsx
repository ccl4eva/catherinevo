import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const fieldClass =
  "w-full px-4 py-3 rounded-xl border border-secondary/60 bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/40 transition-shadow";

const labelClass = "block text-sm font-medium mb-2 text-muted-foreground";

/** Classic HTML POST — most reliable; emails cat@catherinevo.com via FormSubmit */
const FORMSUBMIT_ACTION = "https://formsubmit.co/cat@catherinevo.com";

type FractionalInquiryFormProps = {
  idPrefix?: string;
  onSubmitted?: () => void;
};

export function FractionalInquiryForm({ idPrefix = "inquiry", onSubmitted }: FractionalInquiryFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [nextUrl, setNextUrl] = useState("/thank-you");

  useEffect(() => {
    setNextUrl(`${window.location.origin}/thank-you`);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const honeypot = new FormData(form).get("_gotcha");
    if (String(honeypot || "").trim()) {
      event.preventDefault();
      return;
    }
    setSubmitting(true);
    trackEvent("form_submit");
    onSubmitted?.();
    // Native POST to FormSubmit — browser navigates to _next (/thank-you) on success
  }

  return (
    <motion.form
      action={FORMSUBMIT_ACTION}
      method="POST"
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto p-8 md:p-10 rounded-2xl bg-card border border-border shadow-sm"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* FormSubmit: return to our thank-you page after send */}
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_subject" value="New fractional inquiry — catherinevo.com" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {/* FormSubmit honeypot */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-px w-px overflow-hidden opacity-0"
        aria-hidden="true"
      />

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

      <button
        type="submit"
        disabled={submitting}
        className="cta-glow w-full py-3.5 px-6 rounded-xl font-medium text-primary-foreground transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none"
      >
        <span className="relative z-[1]">
          {submitting ? "Sending…" : "Send my note"}
        </span>
      </button>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Or email{" "}
        <a href="mailto:cat@catherinevo.com" className="underline decoration-primary underline-offset-2">
          cat@catherinevo.com
        </a>{" "}
        directly.
      </p>
    </motion.form>
  );
}
