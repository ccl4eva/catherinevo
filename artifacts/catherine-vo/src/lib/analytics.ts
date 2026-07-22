type AnalyticsEvent =
  | "explore_open"
  | "form_submit"
  | "mailto_click";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

export function initAnalytics() {
  if (typeof document === "undefined") return;

  if (plausibleDomain && !document.querySelector("script[data-cv-plausible]")) {
    const script = document.createElement("script");
    script.defer = true;
    script.dataset.cvPlausible = "true";
    script.dataset.domain = plausibleDomain;
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);
  }

  if (gaId && !document.querySelector("script[data-cv-ga]")) {
    const loader = document.createElement("script");
    loader.async = true;
    loader.dataset.cvGa = "true";
    loader.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(loader);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", gaId, { anonymize_ip: true });
  }
}

export function trackEvent(event: AnalyticsEvent, props?: Record<string, string>) {
  if (import.meta.env.DEV) {
    console.info("[analytics]", event, props ?? {});
  }

  if (typeof window.plausible === "function") {
    window.plausible(event, props ? { props } : undefined);
  }

  if (typeof window.gtag === "function" && gaId) {
    window.gtag("event", event, props);
  }
}

export function analyticsConfigured() {
  return Boolean(plausibleDomain || gaId);
}
