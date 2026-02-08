"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

/* ─── Product sections data ──────────────────────────────────── */
const PRODUCTS = [
  {
    id: "whisper",
    name: "Whisper",
    heading: "Help Reps Win Every Call",
    description:
      "Whisper gives your reps real-time coaching during live sales calls. When a prospect raises an objection or the conversation stalls, Whisper suggests the right response.",
    benefits: [
      "Real-time objection handling prompts",
      "Smart discovery questions based on conversation context",
      "Talk-track guidance that keeps deals moving",
      "Works silently — prospects never know",
      "Reduces anxiety and improves confidence",
    ],
    stat: "+34% call quality",
  },
  {
    id: "roleplay",
    name: "AI Roleplay",
    heading: "Train Reps Before They Hit the Field",
    description:
      "AI Roleplay lets your reps practice with AI buyers trained on your actual ICP. They get realistic objections, pushback, and challenging questions — so they're ready for real calls.",
    benefits: [
      "AI buyers modeled after your ideal customer profile",
      "Realistic objections and buying scenarios",
      "28-point scoring with instant feedback",
      "Unlimited practice without peer awkwardness",
      "Build confidence before talking to prospects",
    ],
    stat: "60% faster ramp",
  },
  {
    id: "analytics",
    name: "Call Analytics",
    heading: "Coach with Real Data, Not Guesswork",
    description:
      "Call Analytics scores every call automatically using 28 conversation metrics. Managers see where reps struggle, what's improving, and get personalized coaching recommendations.",
    benefits: [
      "28-point call scoring on every conversation",
      "Track rep performance trends over time",
      "Identify coaching priorities based on data",
      "Auto-generate personalized training paths",
      "Team-wide visibility for managers",
    ],
    stat: "+7% win rate",
  },
];

/* ═══════════════════════════════════════════════════════════════ */

export default function Convergence() {
  const [activeSection, setActiveSection] = useState("whisper");
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("data-section-id");
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-stream/[0.03] blur-[180px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-white/[0.06] mb-8"
          >
            <Sparkles className="size-4 text-stream" />
            <span className="text-label-sm uppercase text-stream">
              Complete Platform
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-h3 lg:text-h2 font-bold leading-tight mb-6 text-primary-text-light dark:text-primary-text-dark"
          >
            Your Complete{" "}
            <span className="gradient-text-stream">Sales Training Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-md lg:text-body-lg leading-relaxed text-subtle-text-light dark:text-subtle-text-dark"
          >
            One platform that handles practice, live coaching, and performance
            analytics — so your reps get better faster.
          </motion.p>
        </div>

        {/* ── Two Column Layout ──── */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* ── LEFT: Sticky Navigation ──────────────── */}
            <div className="hidden lg:block lg:w-44 flex-shrink-0">
              <div className="sticky top-36 space-y-7">
                {PRODUCTS.map((product) => {
                  const isActive = activeSection === product.id;

                  return (
                    <button
                      key={product.id}
                      onClick={() => {
                        const section = sectionRefs.current[product.id];
                        if (section) {
                          section.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                        }
                      }}
                      className="block text-left w-full group"
                    >
                      <motion.span
                        animate={{
                          opacity: isActive ? 1 : 0.3,
                          fontWeight: isActive ? 600 : 400,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`
                          text-body-md transition-colors duration-300
                          ${
                            isActive
                              ? "text-primary-text-light dark:text-primary-text-dark"
                              : "text-subtle-text-light dark:text-subtle-text-dark group-hover:opacity-50"
                          }
                        `}
                      >
                        {product.name}
                      </motion.span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── RIGHT: Scrolling Content ──────────────── */}
            <div className="flex-1 space-y-12 lg:space-y-16">
              {PRODUCTS.map((product, index) => (
                <div
                  key={product.id}
                  id={product.id}
                  ref={(el) => {
                    sectionRefs.current[product.id] = el;
                  }}
                  data-section-id={product.id}
                  className="scroll-mt-32"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Mobile: Show product name */}
                    <div className="lg:hidden mb-5">
                      <h3 className="text-body-md font-semibold text-stream">
                        {product.name}
                      </h3>
                    </div>

                    {/* Content card */}
                    <div className="glass-card rounded-[24px] border border-white/[0.06] p-10 lg:p-12 shadow-xl shadow-black/8 relative overflow-hidden">
                      {/* Subtle card glow */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-stream/[0.04] blur-[70px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                      <div className="relative">
                        {/* Heading */}
                        <h3 className="text-h4 lg:text-h3 font-bold text-primary-text-light dark:text-primary-text-dark mb-5 leading-tight">
                          {product.heading}
                        </h3>

                        {/* Description */}
                        <p className="text-body-md lg:text-body-lg leading-relaxed text-subtle-text-light dark:text-subtle-text-dark mb-10">
                          {product.description}
                        </p>

                        {/* Benefits */}
                        <div className="space-y-4 mb-8">
                          {product.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2
                                className="size-5 text-stream flex-shrink-0 mt-0.5"
                                strokeWidth={2}
                              />
                              <p className="text-body-sm text-subtle-text-light dark:text-subtle-text-dark leading-relaxed">
                                {benefit}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Stat */}
                        <div className="inline-block">
                          <div className="px-5 py-2.5 rounded-lg glass-strong border border-stream/15">
                            <span className="text-body-sm font-bold text-stream">
                              {product.stat}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
