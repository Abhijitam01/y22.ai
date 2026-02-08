"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, X, CheckCircle2, Users, Clock, Target } from "lucide-react";

interface ChallengeCardProps {
  problem: string;
  problemDesc: string;
  consequence: string;
  solution: string;
  solutionDesc: string;
  result: string;
  resultMetric?: string;
  delay?: number;
}

const ChallengeCard = ({
  problem,
  problemDesc,
  consequence,
  solution,
  solutionDesc,
  result,
  resultMetric,
  delay = 0,
}: ChallengeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch gap-4 md:gap-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Problem Card ─────────────────────────────── */}
      <div className="flex flex-col p-8 lg:p-9 rounded-[20px] glass-card border border-red-400/12 dark:border-red-400/8 relative overflow-hidden group hover:border-red-400/20 transition-all duration-500 bg-red-500/[0.02]">
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/[0.06] dark:bg-red-400/[0.03] blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="relative flex flex-col h-full">
          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="size-6 rounded-md bg-red-400/10 flex items-center justify-center">
              <X className="size-3.5 text-red-400" strokeWidth={3} />
            </div>
            <span className="text-label-sm uppercase text-red-400/70">
              Problem
            </span>
          </div>

          {/* Problem title */}
          <h4 className="text-h5 font-bold text-primary-text-light dark:text-primary-text-dark mb-3 leading-snug">
            {problem}
          </h4>

          {/* Description */}
          <p className="text-body-sm text-subtle-text-light dark:text-subtle-text-dark leading-relaxed mb-4">
            {problemDesc}
          </p>

          {/* Consequence */}
          <div className="mt-auto pt-4 border-t border-red-400/8">
            <p className="text-body-sm text-red-400/80 font-medium">
              → {consequence}
            </p>
          </div>
        </div>
      </div>

      {/* ── Arrow Connector ─────────────────────────── */}
      <div className="flex items-center justify-center py-4 md:py-0">
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            boxShadow: isHovered
              ? "0 8px 24px -6px rgba(59, 130, 246, 0.2)"
              : "0 2px 8px -2px rgba(59, 130, 246, 0.08)",
          }}
          transition={{ duration: 0.3 }}
          className="size-12 rounded-full glass-card border-2 border-stream/25 flex items-center justify-center text-stream shadow-lg bg-stream/[0.04]"
        >
          <MoveRight className="size-5" strokeWidth={2.5} />
        </motion.div>
      </div>

      {/* ── Solution Card ────────────────────────────── */}
      <div className="flex flex-col p-8 lg:p-9 rounded-[20px] glass-card border border-stream/15 dark:border-stream/10 relative overflow-hidden group hover:border-stream/30 transition-all duration-500 bg-stream/[0.02]">
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-stream/[0.06] dark:bg-stream/[0.04] blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="relative flex flex-col h-full">
          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="size-6 rounded-md bg-stream/12 flex items-center justify-center">
              <CheckCircle2 className="size-3.5 text-stream" strokeWidth={3} />
            </div>
            <span className="text-label-sm uppercase text-stream/70">
              Y22 Fixes This
            </span>
          </div>

          {/* Solution title */}
          <h4 className="text-h5 font-bold gradient-text-stream mb-3 leading-snug">
            {solution}
          </h4>

          {/* Description */}
          <p className="text-body-sm text-subtle-text-light dark:text-subtle-text-dark leading-relaxed mb-4">
            {solutionDesc}
          </p>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
            className="mt-auto pt-4 border-t border-stream/12"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-body-sm text-stream font-semibold">
                ✓ {result}
              </p>
              {resultMetric && (
                <span className="text-[13px] px-3 py-1.5 rounded-lg bg-stream/8 text-stream font-bold">
                  {resultMetric}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Challenges() {
  const challenges = [
    {
      problem: "Roleplays feel fake",
      problemDesc:
        "Peer roleplay is awkward and scripted. Reps avoid practice, go into calls unprepared, and freeze when prospects push back.",
      consequence: "Reps waste time training but still lose deals",
      solution: "AI Roleplays trained on your ICP",
      solutionDesc:
        "Practice with AI buyers that sound like real prospects in your industry. Get realistic objections, scoring, and instant feedback.",
      result: "Reps ramp faster",
      resultMetric: "60% faster",
    },
    {
      problem: "No real-time support on live calls",
      problemDesc:
        "Reps go into calls blind with no coaching prompts. When prospects raise objections, they stumble or give weak responses.",
      consequence: "Deals stall because reps can't handle objections",
      solution: "Whisper — Live call coaching",
      solutionDesc:
        "Get real-time prompts for objection handling, discovery questions, and talk-tracks during live calls. Reps stay on track without fumbling.",
      result: "More confident calls",
      resultMetric: "+34% quality",
    },
    {
      problem: "Coaching is guesswork",
      problemDesc:
        "Managers can't measure what's working. They give generic feedback or skip coaching entirely because they don't have data.",
      consequence: "Training stays broken and performance doesn't improve",
      solution: "28-Point Call Scoring + Auto-Coaching",
      solutionDesc:
        "Score every call automatically. See where reps struggle, what's improving, and get personalized coaching paths based on real data.",
      result: "Better coaching visibility",
      resultMetric: "+7% win rate",
    },
  ];

  return (
    <section className="py-28 lg:py-36 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-dividers-light dark:via-dividers-dark to-transparent" />

      <div className="container mx-auto px-6">
        {/* ── Header ─────────────────────────────────────── */}
        <div className="text-center mb-20 lg:mb-24 max-w-3xl mx-auto">
          {/* Small badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-white/[0.06] mb-8"
          >
            <span className="text-label-sm uppercase text-primary-text-light/60 dark:text-primary-text-dark/60">
              Why Y22?
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-h3 lg:text-h2 font-bold leading-tight mb-6 text-primary-text-light dark:text-primary-text-dark"
          >
            Why Current Sales Training Fails —{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text-stream">
              And What Actually Works
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-md lg:text-body-lg leading-relaxed text-subtle-text-light dark:text-subtle-text-dark"
          >
            Traditional training is slow, passive, and doesn&apos;t stick.{" "}
            <strong className="text-primary-text-light dark:text-primary-text-dark font-semibold">
              Y22 gives reps real practice + live coaching that moves deals
              forward.
            </strong>
          </motion.p>
        </div>

        {/* ── Problem → Solution Cards ───────────────────── */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {challenges.map((item, i) => (
            <ChallengeCard key={i} {...item} delay={i * 0.12} />
          ))}
        </div>

        {/* ── Bottom trust signal ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-10 px-10 py-6 rounded-2xl glass-card border border-white/[0.05]">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-xl bg-stream/10 flex items-center justify-center">
                <Users className="size-6 text-stream" />
              </div>
              <div className="text-left">
                <div className="text-body-sm font-bold text-primary-text-light dark:text-primary-text-dark">
                  250+ teams
                </div>
                <div className="text-[13px] text-subtle-text-light dark:text-subtle-text-dark">
                  actively using Y22
                </div>
              </div>
            </div>

            <div className="w-px h-12 bg-dividers-light dark:bg-dividers-dark" />

            <div className="flex items-center gap-3">
              <div className="size-12 rounded-xl bg-studio/10 flex items-center justify-center">
                <Clock className="size-6 text-studio" />
              </div>
              <div className="text-left">
                <div className="text-body-sm font-bold text-primary-text-light dark:text-primary-text-dark">
                  500K+ calls
                </div>
                <div className="text-[13px] text-subtle-text-light dark:text-subtle-text-dark">
                  scored and coached
                </div>
              </div>
            </div>

            <div className="w-px h-12 bg-dividers-light dark:bg-dividers-dark" />

            <div className="flex items-center gap-3">
              <div className="size-12 rounded-xl bg-cloud/10 flex items-center justify-center">
                <Target className="size-6 text-cloud" />
              </div>
              <div className="text-left">
                <div className="text-body-sm font-bold text-primary-text-light dark:text-primary-text-dark">
                  7% avg increase
                </div>
                <div className="text-[13px] text-subtle-text-light dark:text-subtle-text-dark">
                  in win rates
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
