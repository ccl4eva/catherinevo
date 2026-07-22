import { useEffect } from "react";

/** Legacy path — send visitors home; form opens only via CTA */
export default function Explore() {
  useEffect(() => {
    window.location.replace("/");
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-muted-foreground text-sm">
      Redirecting…
    </div>
  );
}
