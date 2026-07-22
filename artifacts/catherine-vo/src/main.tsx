import { createRoot } from "react-dom/client";

import App from "./App";
import { initAnalytics } from "./lib/analytics";

import "./index.css";

const verification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined;
if (verification && typeof document !== "undefined") {
  const existing = document.querySelector('meta[name="google-site-verification"]');
  if (!existing) {
    const meta = document.createElement("meta");
    meta.name = "google-site-verification";
    meta.content = verification;
    document.head.appendChild(meta);
  }
}

initAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
