"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

/* ─── Logo data split into two rows ─────────────────────────── */
const ROW_1 = [
  { src: "/assets/partner-logo-1.svg", name: "Salesforce" },
  { src: "/assets/partner-logo-2.svg", name: "HubSpot" },
  { src: "/assets/partner-logo-3.svg", name: "Gong" },
  { src: "/assets/partner-logo-4.svg", name: "Zoom" },
  { src: "/assets/partner-logo-5.svg", name: "Microsoft Teams" },
  { src: "/assets/partner-logo-6.svg", name: "Google Meet" },
  { src: "/assets/partner-logo-7.svg", name: "Slack" },
  { src: "/assets/partner-logo-8.svg", name: "Outreach" },
  { src: "/assets/partner-logo-9.svg", name: "Apollo" },
  { src: "/assets/partner-logo-10.svg", name: "LinkedIn Sales Nav" },
  { src: "/assets/partner-logo-11.svg", name: "Ringover" },
  { src: "/assets/partner-logo-12.svg", name: "Aircall" },
];

const ROW_2 = [
  { src: "/assets/partner-logo-13.svg", name: "Pipedrive" },
  { src: "/assets/partner-logo-14.svg", name: "Freshsales" },
  { src: "/assets/partner-logo-15.svg", name: "Zendesk" },
  { src: "/assets/partner-logo-16.svg", name: "Intercom" },
  { src: "/assets/partner-logo-17.svg", name: "Drift" },
  { src: "/assets/partner-logo-18.svg", name: "Clari" },
  { src: "/assets/partner-logo-19.svg", name: "Chorus" },
  { src: "/assets/partner-logo-20.svg", name: "Seismic" },
  { src: "/assets/partner-logo-21.svg", name: "Highspot" },
  { src: "/assets/partner-logo-22.svg", name: "Loom" },
  { src: "/assets/partner-logo-23.svg", name: "Notion" },
  { src: "/assets/partner-logo-24.svg", name: "Calendly" },
  { src: "/assets/partner-logo-25.svg", name: "ZoomInfo" },
];

/* ─── Reusable logo chip ────────────────────────────────────── */
function LogoChip({ src, name }: { src: string; name: string }) {
  return (
    <div
      className="ecosystem-chip flex-shrink-0 flex items-center justify-center px-8 py-5 rounded-xl
        bg-white/[0.03] border border-white/[0.06]
        transition-opacity duration-500"
      aria-label={name}
    >
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="h-8 w-auto opacity-70 dark:opacity-60 transition-opacity duration-500"
      />
    </div>
  );
}

/* ─── Scrolling row wrapper ─────────────────────────────────── */
function ScrollRow({
  logos,
  direction,
}: {
  logos: typeof ROW_1;
  direction: "left" | "right";
}) {
  const animClass =
    direction === "left" ? "animate-ecosystem-left" : "animate-ecosystem-right";

  return (
    <div className="relative overflow-hidden">
      {/* Gradient fade — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />
      {/* Gradient fade — right edge */}
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />

      {/* Ticker track — duplicated for seamless loop */}
      <div
        className={`flex gap-6 ${animClass} ecosystem-ticker`}
        role="marquee"
        aria-label={`Integration partners scrolling ${direction}`}
      >
        {logos.map((logo, i) => (
          <LogoChip key={`a-${i}`} {...logo} />
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, i) => (
          <LogoChip key={`b-${i}`} {...logo} />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
/*  ECOSYSTEM SECTION                                             */
/* ═══════════════════════════════════════════════════════════════ */

export default function Ecosystem() {
  return (
    <section className="py-32 relative" aria-labelledby="ecosystem-heading">
      <div className="section-divider w-full mb-32" />

      <div className="container mx-auto px-6">
        {/* ── Static headline block ────────────────────────────── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-white/[0.05] mb-8"
          >
            <Sparkles className="size-4 text-stream" />
            <span className="text-label-sm uppercase text-stream">
              Integrations
            </span>
          </motion.div>

          <motion.h2
            id="ecosystem-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-h3 lg:text-h2 font-bold leading-tight mb-6 text-primary-text-light dark:text-primary-text-dark"
          >
            The Y22 <span className="gradient-text-stream">Ecosystem</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-md lg:text-body-lg leading-relaxed text-subtle-text-light dark:text-subtle-text-dark max-w-2xl mx-auto"
          >
            Seamlessly integrates with the tools your sales team already uses
            every day.
          </motion.p>
        </div>

        {/* ── Animated logo rows ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col gap-5 max-w-6xl mx-auto"
        >
          <ScrollRow logos={ROW_1} direction="right" />
          <ScrollRow logos={ROW_2} direction="left" />
        </motion.div>
      </div>
    </section>
  );
}
