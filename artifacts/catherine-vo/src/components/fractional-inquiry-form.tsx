import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const fieldClass =
  "w-full px-4 py-3 rounded-xl border border-secondary/60 bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/40 transition-shadow";

const fieldErrorClass =
  "w-full px-4 py-3 rounded-xl border border-destructive bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-destructive/30 transition-shadow";

const labelClass = "block text-sm font-medium mb-2 text-muted-foreground";

/** Classic HTML POST — most reliable; emails cat@catherinevo.com via FormSubmit */
const FORMSUBMIT_ACTION = "https://formsubmit.co/cat@catherinevo.com";

/**
 * Practical email check: has local@domain.tld shape, no spaces,
 * and a plausible domain. Not RFC-perfect — intentionally readable for users.
 */
const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function isValidEmail(value: string): boolean {
  const email = value.trim();
  if (!email || email.length > 254) return false;
  if (!EMAIL_PATTERN.test(email)) return false;
  const [local, domain] = email.split("@");
  if (!local || !domain) return false;
  if (local.length > 64) return false;
  if (domain.includes("..")) return false;
  // Require at least one dot in domain (blocks "user@localhost")
  if (!domain.includes(".")) return false;
  return true;
}

type FractionalInquiryFormProps = {
  idPrefix?: string;
  onSubmitted?: () => void;
};

export function FractionalInquiryForm({ idPrefix = "inquiry", onSubmitted }: FractionalInquiryFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [nextUrl, setNextUrl] = useState("/thank-you");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailTouched, setEmailTouched] = useState(false);

  useEffect(() => {
    setNextUrl(`${window.location.origin}/thank-you`);
  }, []);

  function validateEmailField(value: string): string | null {
    const trimmed = value.trim();
    if (!trimmed) return "Please enter your work email.";
    if (!isValidEmail(trimmed)) return "Please enter a valid email address (e.g. name@company.com).";
    return null;
  }

  function handleEmailBlur() {
    setEmailTouched(true);
    setEmailError(validateEmailField(email));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot — bots that fill hidden fields are dropped silently
    if (String(formData.get("_gotcha") || "").trim()) {
      event.preventDefault();
      return;
    }

    const emailValue = String(formData.get("email") || "");
    const emailValidationError = validateEmailField(emailValue);
    if (emailValidationError) {
      event.preventDefault();
      setEmailTouched(true);
      setEmailError(emailValidationError);
      document.getElementById(`${idPrefix}-email`)?.focus();
      return;
    }

    setEmailError(null);
    setSubmitting(true);
    trackEvent("form_submit");
    onSubmitted?.();
    // Native POST to FormSubmit — browser navigates to _next (/thank-you) on success
  }

  const showEmailError = emailTouched && emailError;

  return (
    <motion.form
      action={FORMSUBMIT_ACTION}
      method="POST"
      onSubmit={handleSubmit}
      noValidate
      className="relative w-full max-w-xl mx-auto p-8 md:p-10 rounded-2xl bg-card border border-border shadow-sm"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* FormSubmit: return to our thank-you page after send */}
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_subject" value="New fractional inquiry — catherinevo.com" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {/* FormSubmit honeypot — invisible to people, bots often fill it */}
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
          maxLength={120}
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
          aria-invalid={showEmailError ? true : undefined}
          aria-describedby={showEmailError ? `${idPrefix}-email-error` : undefined}
          autoComplete="email"
          inputMode="email"
          maxLength={254}
          spellCheck={false}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailTouched) setEmailError(validateEmailField(e.target.value));
          }}
          onBlur={handleEmailBlur}
          pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+"
          title="Enter a valid email like name@company.com"
          className={showEmailError ? fieldErrorClass : fieldClass}
        />
        {showEmailError ? (
          <p id={`${idPrefix}-email-error`} className="mt-2 text-sm text-destructive" role="alert">
            {emailError}
          </p>
        ) : null}
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
          maxLength={200}
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
          maxLength={4000}
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
