import { createFileRoute } from "@tanstack/react-router";
import dashboardImg from "@/assets/dashboard.jpg";
import encryptionImg from "@/assets/encryption.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arcane — A private window into your entire net worth" },
      {
        name: "description",
        content:
          "Consolidate private equity, alternative assets, and traditional holdings into a single, sovereign record. Local-first, zero-knowledge wealth management.",
      },
      { property: "og:title", content: "Arcane — Private wealth, refined." },
      {
        property: "og:description",
        content:
          "A sovereign ledger for discreet capital management. No trackers. No shared data.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="bg-surface text-foreground font-sans antialiased">
      {/* Nav */}
      <nav className="w-full py-6 bg-surface">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="font-semibold tracking-tight">Arcane</span>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6 text-sm font-medium text-foreground/60">
              <a href="#markets" className="hover:text-foreground transition-colors">Markets</a>
              <a href="#curated" className="hover:text-foreground transition-colors">Curated</a>
              <a href="#institutional" className="hover:text-foreground transition-colors">Institutional</a>
            </div>
            <button className="text-sm font-medium py-2 pr-3 pl-2 flex items-center gap-2 bg-brand text-brand-foreground rounded-lg ring-1 ring-brand hover:bg-brand-light transition-colors">
              <span className="size-4 shrink-0 bg-brand-foreground/20 rounded-full" />
              Access Ledger
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance max-w-[30ch]">
              A private window into your entire net worth.
            </h1>
            <p className="text-base sm:text-lg text-foreground/70 text-pretty max-w-[56ch]">
              Consolidate private equity, alternative assets, and traditional holdings into a single, sovereign record. No trackers, no shared data, just clarity.
            </p>
            <div className="flex items-center gap-4">
              <button className="text-sm font-medium py-2.5 pr-4 pl-3 flex items-center gap-2 bg-brand text-brand-foreground rounded-lg ring-1 ring-brand hover:bg-brand-light transition-colors">
                <span className="size-4 shrink-0 bg-brand-foreground/20 rounded-full" />
                Get Started
              </button>
              <button className="text-sm font-medium py-2.5 px-4 bg-canvas text-foreground/80 rounded-lg ring-1 ring-black/5 hover:bg-canvas/70 transition-colors">
                View Demo
              </button>
            </div>
          </div>

          <div className="mt-20">
            <img
              src={dashboardImg}
              alt="Arcane wealth dashboard preview"
              width={1920}
              height={1088}
              className="w-full aspect-[16/9] object-cover bg-canvas outline-1 -outline-offset-1 outline-black/5 rounded-[min(1vw,36px)] shadow-2xl ring-1 ring-black/5"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="markets" className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Unified Custody",
                body: "Aggregate your disparate accounts into a cohesive view. Manage fine art, real estate, and digital assets alongside public equities.",
              },
              {
                title: "Sovereign Security",
                body: "Local-first encryption means your sensitive financial history stays on your device. We never see your balances or your transactions.",
              },
              {
                title: "Portfolio Deep-Dive",
                body: "Professional grade analytics for the individual investor. Understand your true exposure and risk across every asset class.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="p-8 bg-surface rounded-[32px] ring-1 ring-black/5 flex flex-col gap-4"
              >
                <div className="size-8 bg-brand/10 rounded-[12px] flex items-center justify-center">
                  <span className="size-4 bg-brand rounded-sm" />
                </div>
                <h3 className="text-xl font-medium">{f.title}</h3>
                <p className="text-sm text-foreground/70 text-pretty max-w-[48ch]">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail */}
      <section id="curated" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-7/12">
              <img
                src={encryptionImg}
                alt="Encrypted data nodes"
                loading="lazy"
                width={1216}
                height={896}
                className="w-full aspect-[4/3] object-cover bg-canvas outline-1 -outline-offset-1 outline-black/5 rounded-[min(1vw,24px)]"
              />
            </div>
            <div className="lg:w-5/12 flex flex-col gap-6">
              <h2 className="text-3xl font-semibold tracking-tight text-balance">
                The ledger that prioritizes your silence.
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 text-pretty max-w-[48ch]">
                Arcane was built for those who value discretion. By removing the intermediary, we ensure your wealth remains a private matter, managed with institutional precision.
              </p>
              <ul className="flex flex-col gap-4 border-t border-black/5 pt-6">
                {[
                  "Zero-knowledge architecture",
                  "Automated performance reporting",
                  "Direct banking integrations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="size-4 mt-0.5 shrink-0 bg-brand/20 rounded-sm" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="institutional" className="py-12 bg-surface border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-semibold tracking-tight">Arcane</span>
            <p className="text-xs text-foreground/50 max-w-[30ch]">
              Refining the standard of personal capital management since 2024.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/40">Platform</span>
              <a href="#" className="text-xs text-foreground/70 hover:text-foreground">Ledger</a>
              <a href="#" className="text-xs text-foreground/70 hover:text-foreground">Security</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/40">Company</span>
              <a href="#" className="text-xs text-foreground/70 hover:text-foreground">Journal</a>
              <a href="#" className="text-xs text-foreground/70 hover:text-foreground">Support</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/40">Legal</span>
              <a href="#" className="text-xs text-foreground/70 hover:text-foreground">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
