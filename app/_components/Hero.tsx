"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  Clock,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Phone,
  Target,
  Sparkles,
  Calendar,
} from "lucide-react";
import { Y22_URLS } from "@/lib/config";

/* ─── Stats row data ─────────────────────────────────────────── */
const STATS = [
  {
    label: "Faster Rep Ramp Time",
    value: "60%",
    description: "Average time to first qualified meeting reduced from 45 to 18 days",
    context: "Measured across 250+ sales teams over 90 days",
    icon: Clock,
    color: "text-stream",
    bgFrom: "from-stream/20",
    bgTo: "to-stream/5",
  },
  {
    label: "Increase in Call Quality",
    value: "+34%",
    description: "Composite score improvement across 28 conversation metrics",
    context: "Based on talk-to-listen ratio, objection handling, discovery questions",
    icon: TrendingUp,
    color: "text-studio",
    bgFrom: "from-studio/20",
    bgTo: "to-studio/5",
  },
  {
    label: "Win Rate Improvement",
    value: "+7%",
    description: "Percentage point increase in closed-won deals after Y22 adoption",
    context: "Measured after 30 days of consistent usage (min. 15 sessions per rep)",
    icon: BarChart3,
    color: "text-cloud",
    bgFrom: "from-cloud/20",
    bgTo: "to-cloud/5",
  },
];

/* ─── Partner/trust logos for animated ticker ──────────────── */
const PARTNER_LOGOS = [
  "/assets/partner-logo-1.svg",
  "/assets/partner-logo-2.svg",
  "/assets/partner-logo-3.svg",
  "/assets/partner-logo-4.svg",
  "/assets/partner-logo-5.svg",
  "/assets/partner-logo-6.svg",
  "/assets/partner-logo-7.svg",
  "/assets/partner-logo-8.svg",
];

/* ═══════════════════════════════════════════════════════════════ */

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden min-h-screen flex items-center">
      {/* ── Background Effects (simplified) ──────────────── */}
      <div className="absolute inset-0 -z-10 bg-background-light dark:bg-background-dark">
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.04] bg-[url('/assets/grid-bg.svg')] bg-center bg-repeat" />
        <div className="absolute top-[20%] left-[10%] w-[800px] h-[800px] bg-stream/10 dark:bg-stream/[0.04] blur-[200px] rounded-full" />
        <div className="absolute top-[5%] right-[10%] w-[500px] h-[500px] bg-cloud/8 dark:bg-cloud/[0.03] blur-[180px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* ── Main two-column grid ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Left: Copy ──────────────────────────────── */}
          <div className="space-y-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-strong border border-stream/15 hover:border-stream/30 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stream opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-stream" />
              </span>
              <span className="text-label-sm uppercase text-stream">
                AI-Powered Sales Training
              </span>
            </motion.div>

            {/* ── Headline — Big and Bold ─────────────────── */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[42px] lg:text-[60px] font-bold leading-[1.08] tracking-tight text-primary-text-light dark:text-primary-text-dark"
            >
              Train with AI Buyers.
              <br className="hidden sm:block" />
              <span className="gradient-text-stream">
                Coach Reps in Real Time.
              </span>
              <br className="hidden sm:block" />
              Close More Deals.
            </motion.h1>

            {/* ── Subheadline — Larger, more readable ────── */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-body-lg lg:text-body-xl leading-relaxed text-subtle-text-light dark:text-subtle-text-dark max-w-xl"
            >
              Y22 lets your reps practice against AI buyers modeled on your ICP,
              then gives them{" "}
              <strong className="text-stream font-semibold">
                live objection handling and talk-track guidance
              </strong>{" "}
              during real sales calls — so every conversation improves.
            </motion.p>

            {/* ── CTAs ──────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-5 pt-2"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Primary CTA - Get Started */}
                <a
                  href={Y22_URLS.app.signup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-4 px-9 text-[17px]"
                >
                  Get Started Free
                  <ArrowRight className="size-5" />
                </a>

                {/* Secondary CTA - Book Demo */}
                <a
                  href={Y22_URLS.marketing.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 rounded-full glass-strong border border-card-border-light dark:border-white/8 hover:border-stream/25 transition-all text-[17px] font-medium text-primary-text-light dark:text-primary-text-dark"
                >
                  <span className="size-9 rounded-full bg-stream/15 flex items-center justify-center group-hover:bg-stream/25 transition-colors">
                    <Calendar className="size-4 text-stream" />
                  </span>
                  Book a Demo
                </a>
              </div>

              {/* Micro-trust copy */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-body-sm text-subtle-text-light dark:text-subtle-text-dark">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-stream/70" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-stream/70" />
                  5-min setup
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-stream/70" />
                  Used by 250+ sales teams
                </span>
              </div>
            </motion.div>

            {/* ── Inline trust metrics ──────────────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-10 pt-4"
            >
              {[
                {
                  label: "Ramp Time",
                  value: "60% faster",
                  sub: "avg · 30 days",
                },
                {
                  label: "Call Quality",
                  value: "+34%",
                  sub: "28-pt scoring",
                },
                { label: "Win Rate", value: "+7%", sub: "after 30 days" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-4">
                  {i > 0 && (
                    <div className="w-px h-10 bg-dividers-light dark:bg-dividers-dark" />
                  )}
                  <div>
                    <div className="text-xl font-bold text-stream">
                      {s.value}
                    </div>
                    <div className="text-label-sm uppercase text-subtle-text-light dark:text-subtle-text-dark">
                      {s.label}
                    </div>
                    <div className="text-[12px] text-subtle-text-light/50 dark:text-subtle-text-dark/50 mt-0.5">
                      {s.sub}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Platform Visual ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-10 bg-stream/8 dark:bg-stream/[0.04] blur-[80px] rounded-[40px]" />

            {/* Main platform card */}
            <div className="relative glass-card rounded-[28px] overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/20">
              <img
                src="/assets/y22/train-platform.png"
                alt="Y22 Platform"
                className="w-full h-auto"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = "none";
                }}
              />

              {/* Fallback visual if image fails */}
              <div className="hidden aspect-[4/3] bg-gradient-to-br from-[#111318] to-[#0A0A0B] p-8 flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs text-white/30 font-mono">
                    y22.ai — dashboard
                  </span>
                </div>
              </div>
            </div>

            {/* Floating cards — solid dark bg for visibility in dark mode */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-1/4 p-4 rounded-2xl bg-white dark:bg-[#1A1A1F] border border-gray-200 dark:border-white/[0.1] shadow-xl shadow-black/10 dark:shadow-black/40 flex items-center gap-3"
            >
              <div className="size-11 rounded-xl bg-stream/15 flex items-center justify-center">
                <Phone className="size-5 text-stream" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  Live Call
                </div>
                <div className="text-[12px] text-stream font-medium">
                  Whisper Active
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-1/4 p-4 rounded-2xl bg-white dark:bg-[#1A1A1F] border border-gray-200 dark:border-white/[0.1] shadow-xl shadow-black/10 dark:shadow-black/40 flex items-center gap-3"
            >
              <div className="size-11 rounded-xl bg-studio/15 flex items-center justify-center">
                <Target className="size-5 text-studio" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  AI Roleplay
                </div>
                <div className="text-[12px] text-studio font-medium">
                  ICP Trained
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 top-8 p-3 rounded-xl bg-white dark:bg-[#1A1A1F] border border-gray-200 dark:border-white/[0.1] shadow-lg shadow-black/10 dark:shadow-black/40 flex items-center gap-2"
            >
              <Sparkles className="size-4 text-cloud" />
              <span className="text-[12px] font-semibold text-gray-900 dark:text-white">
                28-Point Score
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Animated Logo Ticker (Social Proof) ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-24 max-w-5xl mx-auto overflow-hidden"
        >
          <div className="text-center mb-8">
            <p className="text-label-sm uppercase text-primary-text-light/50 dark:text-primary-text-dark/50">
              Trusted by sales teams at
            </p>
          </div>

          {/* Ticker container */}
          <div className="relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />

            {/* Ticker track */}
            <div className="flex gap-12 animate-ticker">
              {PARTNER_LOGOS.map((logo, i) => (
                <div
                  key={`logo-1-${i}`}
                  className="flex-shrink-0 flex items-center justify-center px-6 py-4 rounded-xl glass-strong border border-white/[0.05] hover:border-white/[0.12] transition-all"
                >
                  <img
                    src={logo}
                    alt={`Partner ${i + 1}`}
                    className="h-8 w-auto opacity-70 dark:opacity-60 hover:opacity-100 dark:hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
              {PARTNER_LOGOS.map((logo, i) => (
                <div
                  key={`logo-2-${i}`}
                  className="flex-shrink-0 flex items-center justify-center px-6 py-4 rounded-xl glass-strong border border-white/[0.05] hover:border-white/[0.12] transition-all"
                >
                  <img
                    src={logo}
                    alt={`Partner ${i + 1}`}
                    className="h-8 w-auto opacity-70 dark:opacity-60 hover:opacity-100 dark:hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Stats Row ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-6xl mx-auto"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="group relative p-10 rounded-[24px] glass-card border border-white/[0.05] hover:border-stream/15 transition-all duration-500 card-shadow card-shadow-hover overflow-hidden"
            >
              <div className="absolute inset-0 bg-stream/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]" />

              <div className="relative flex flex-col">
                {/* Icon + Value */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`size-14 rounded-2xl bg-gradient-to-br ${stat.bgFrom} ${stat.bgTo} flex items-center justify-center flex-shrink-0`}
                  >
                    <stat.icon className={`size-7 ${stat.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-[48px] font-bold leading-none text-primary-text-light dark:text-primary-text-dark tracking-tight">
                      {stat.value}
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="text-body-sm font-bold uppercase tracking-wide text-primary-text-light dark:text-primary-text-dark mb-3">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-body-sm leading-relaxed text-subtle-text-light dark:text-subtle-text-dark mb-4">
                  {stat.description}
                </p>

                {/* Context */}
                <div className="pt-4 border-t border-dividers-light dark:border-dividers-dark">
                  <p className="text-[13px] text-subtle-text-light/50 dark:text-subtle-text-dark/50">
                    {stat.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none" />
    </section>
  );
}
