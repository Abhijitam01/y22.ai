"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Zap, Sparkles } from "lucide-react";

/* ─── Timeline stage data ─────────────────────────────────────────── */
const TIMELINE_STAGES = [
  {
    week: "Week 1",
    title: "Onboarding",
    traditional: {
      items: [
        "Watching pre-recorded training videos",
        "Reading product documentation",
        "Shadowing senior reps when available",
        "Waiting for next team training session",
      ],
    },
    y22: {
      items: [
        "Practicing against real objections with AI buyers",
        "Getting scored feedback after every roleplay",
        "Learning talk tracks through repetition",
        "Building muscle memory from day one",
      ],
    },
  },
  {
    week: "Week 2",
    title: "Practice",
    traditional: {
      items: [
        "Scheduled roleplay with manager if time allows",
        "Subjective feedback based on who's available",
        "No consistent practice rhythm",
        "Anxiety builds without preparation",
      ],
    },
    y22: {
      items: [
        "Unlimited on-demand practice sessions",
        "Auto-scored across 28 conversation metrics",
        "Objection handling improves daily",
        "Confidence grows with each session",
      ],
    },
  },
  {
    week: "Week 4",
    title: "Live Calls",
    traditional: {
      items: [
        "First calls happen without real-time support",
        "Feedback comes days later, if at all",
        "Learning from mistakes is slow",
        "Inconsistent coaching quality",
      ],
    },
    y22: {
      items: [
        "Whisper provides live call guidance",
        "Real-time objection handling prompts",
        "Auto-scored call reviews after every conversation",
        "Mistakes become learning moments instantly",
      ],
    },
  },
  {
    week: "Week 6",
    title: "Deal Confidence",
    traditional: {
      items: [
        "Still ramping, inconsistent performance",
        "Manager attention varies by team size",
        "Full productivity: 3–6 months out",
        "High variance in outcomes",
      ],
    },
    y22: {
      items: [
        "Handling objections with confidence",
        "Call quality metrics show clear improvement",
        "On track for full productivity by week 8",
        "Performance is standardized and measurable",
      ],
    },
  },
  {
    week: "Week 8",
    title: "Full Productivity",
    traditional: {
      items: [
        "Still in ramp, months away from quota",
        "Coaching remains inconsistent and subjective",
        "No standardized measurement of readiness",
        "Risk of early attrition due to slow progress",
      ],
    },
    y22: {
      items: [
        "Hitting quota with proven, repeatable skills",
        "Every rep trained to the same high standard",
        "Data-backed readiness scores across the team",
        "Confident, coachable, and closing deals",
      ],
    },
  },
];

export default function Efficiency() {
  return (
    <section className="py-28 relative">
      <div className="section-divider w-full mb-28" />

      {/* Background glow - isolated in its own overflow container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-stream/[0.05] blur-[150px] rounded-full -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-white/[0.06] mb-6"
          >
            <Sparkles className="size-3.5 text-stream" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-stream font-semibold">
              Comparison
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[36px] lg:text-[44px] font-semibold leading-tight mb-5 text-primary-text-light dark:text-primary-text-dark"
          >
            What Actually Happens in the{" "}
            <span className="gradient-text-stream">First 45 Days?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[17px] leading-relaxed text-subtle-text-light dark:text-subtle-text-dark max-w-2xl mx-auto"
          >
            Follow a new sales rep&apos;s journey. See exactly how Y22 transforms ramp time from
            months into weeks.
          </motion.p>
        </div>

        {/* Stat callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 max-w-3xl mx-auto"
        >
          <div className="flex-1 px-6 py-4 rounded-2xl glass-card border border-red-500/10">
            <div className="text-[13px] text-subtle-text-light dark:text-subtle-text-dark mb-1">
              Traditional Training
            </div>
            <div className="text-[20px] font-semibold text-red-400/90">3–6 months</div>
            <div className="text-[12px] text-subtle-text-light dark:text-subtle-text-dark mt-1">
              Typical ramp time
            </div>
          </div>
          <div className="flex-1 px-6 py-4 rounded-2xl glass-card border border-stream/15 glow-stream-light">
            <div className="text-[13px] text-subtle-text-light dark:text-subtle-text-dark mb-1">
              The Y22 Way
            </div>
            <div className="text-[20px] font-semibold text-stream">4–6 weeks</div>
            <div className="text-[12px] text-subtle-text-light dark:text-subtle-text-dark mt-1">
              Measured ramp time
            </div>
          </div>
        </motion.div>

        {/* Stacked Cards Container - Desktop only */}
        <div className="hidden lg:block">
          <StackedTimeline stages={TIMELINE_STAGES} />
        </div>

        {/* Normal Sequential Layout - Mobile */}
        <div className="lg:hidden space-y-16 max-w-6xl mx-auto">
          {TIMELINE_STAGES.map((stage, index) => (
            <MobileTimelineStage key={stage.week} stage={stage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stacked Timeline with CSS Sticky Stacking Cards ────────────── */
interface StackedTimelineProps {
  stages: typeof TIMELINE_STAGES;
}

function StackedTimeline({ stages }: StackedTimelineProps) {
  return (
    <div className="relative max-w-6xl mx-auto">
      {stages.map((stage, index) => {
        const isLast = index === stages.length - 1;

        return (
          <div
            key={stage.week}
            className="sticky"
            style={{
              top: `${96 + index * 12}px`,
              zIndex: (index + 1) * 10,
              marginBottom: isLast ? "0" : "40vh",
            }}
          >
            {/* Outer card with solid background so it fully covers cards below */}
            <div
              className="
                rounded-[28px] p-10 lg:p-14 
                bg-[#f5f5f7] dark:bg-[#0f1118]
                border border-black/[0.06] dark:border-white/[0.08]
                shadow-[0_-8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.5)]
                transition-shadow duration-300
              "
            >
              {/* Week indicator */}
              <div className="flex justify-center mb-10">
                <div className="inline-flex flex-col items-center">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-strong border border-white/[0.06] mb-3">
                    <div className="size-2 rounded-full bg-stream" />
                    <span className="text-[12px] uppercase tracking-[0.15em] font-semibold text-stream">
                      {stage.week}
                    </span>
                  </div>
                  <h3 className="text-[26px] font-semibold text-primary-text-light dark:text-primary-text-dark">
                    {stage.title}
                  </h3>
                </div>
              </div>

              {/* Comparison cards side by side */}
              <div className="grid grid-cols-2 gap-8">
                <ComparisonCard
                  type="traditional"
                  items={stage.traditional.items}
                  delay={0}
                />
                <ComparisonCard type="y22" items={stage.y22.items} delay={0} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Mobile Timeline Stage (Sequential Scroll) ─────────────────── */
interface MobileTimelineStageProps {
  stage: (typeof TIMELINE_STAGES)[0];
  index: number;
}

function MobileTimelineStage({ stage }: MobileTimelineStageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Week indicator */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-strong border border-white/[0.06] mb-3">
            <div className="size-2 rounded-full bg-stream" />
            <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-stream">
              {stage.week}
            </span>
          </div>
          <h3 className="text-[24px] font-semibold text-primary-text-light dark:text-primary-text-dark">
            {stage.title}
          </h3>
        </div>
      </div>

      {/* Comparison cards - stacked vertically on mobile */}
      <div className="space-y-6">
        <ComparisonCard
          type="traditional"
          items={stage.traditional.items}
          delay={0.1}
        />
        <ComparisonCard type="y22" items={stage.y22.items} delay={0.2} />
      </div>
    </motion.div>
  );
}

/* ─── Comparison Card Component (Larger Size) ────────────────────── */
interface ComparisonCardProps {
  type: "traditional" | "y22";
  items: string[];
  delay: number;
}

function ComparisonCard({ type, items, delay }: ComparisonCardProps) {
  const isTraditional = type === "traditional";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      className={`
        p-10 lg:p-12 rounded-[24px] glass-card relative overflow-hidden
        ${
          isTraditional
            ? "border border-red-500/10"
            : "border border-stream/15 glow-stream-light"
        }
      `}
    >
      {/* Background glow */}
      <div
        className={`
        absolute top-0 right-0 w-40 h-40 blur-[60px] rounded-full
        ${isTraditional ? "bg-red-500/[0.04]" : "bg-stream/[0.06]"}
      `}
      />

      {/* Header */}
      <div className="relative mb-8">
        <div className="flex items-center gap-3">
          <div
            className={`
            p-2.5 rounded-lg
            ${isTraditional ? "bg-red-500/10" : "bg-stream/15"}
          `}
          >
            {isTraditional ? (
              <Clock className="size-5 text-red-400" />
            ) : (
              <Zap className="size-5 text-stream" />
            )}
          </div>
          <h4
            className={`
            text-[17px] font-semibold
            ${
              isTraditional
                ? "text-primary-text-light dark:text-primary-text-dark"
                : "gradient-text-stream"
            }
          `}
          >
            {isTraditional ? "Traditional Training" : "The Y22 Way"}
          </h4>
        </div>
      </div>

      {/* Content items */}
      <div className="relative space-y-5">
        {items.map((item, index) => (
          <div key={index} className="flex gap-3.5">
            <div
              className={`
              mt-2 flex-shrink-0 size-1.5 rounded-full
              ${isTraditional ? "bg-red-400/40" : "bg-stream/60"}
            `}
            />
            <p
              className={`
              text-[15px] leading-relaxed
              text-subtle-text-light dark:text-subtle-text-dark
            `}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
