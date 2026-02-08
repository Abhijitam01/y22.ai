"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Sparkles,
  Users,
  Crown,
  Shield,
  Target,
  TrendingUp,
  BarChart3,
  MessageCircle,
  Zap,
  Award,
  Phone,
  Mail,
  MessageSquare,
  Settings,
  Database,
  Lock,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   PRICING PLANS DATA
   ═══════════════════════════════════════════════════════════════ */

const PRICING_PLANS = [
  {
    name: "Individual Plan",
    price: "$59",
    period: "/month",
    description: "Perfect for freelancers and independent reps",
    popular: false,
    cta: "Get Started",
    ctaLink: "https://y22.ai",
    gradient: "from-stream/10 to-stream/5",
    borderColor: "border-stream/20 hover:border-stream/40",
    features: [
      "Unlimited Custom ICP Prospects",
      "Unlimited AI Roleplay Simulations",
      "Smart Objection Handling (Discovery, Demo, Negotiation)",
      "AI Call Scoring & Coaching (upload unlimited transcripts)",
      "Access to all ICP & Persona Libraries",
      "Email Support",
      "2 hours of training included",
      "Extra usage billed at $45/hour",
    ],
    perfectFor: [
      "Reps, New hires, SDRs, AEs, Closers,",
      "Career-driven sellers.",
    ],
  },
  {
    name: "Business Plan",
    price: "$69",
    period: "/month",
    subtitle: "(up to 20 users)",
    description: "For sales teams who want to scale smart",
    popular: true,
    cta: "Get Started",
    ctaLink: "https://y22.ai",
    gradient: "from-studio/20 to-studio/10",
    borderColor: "border-studio/30 hover:border-studio/50",
    features: [
      "Everything Under Individual",
      "Team Reporting Dashboard",
      "Manager Coaching Insights (per rep + team-level)",
      "Shared Team Playbooks & Templates",
      "Team Goals & Skill Tracking",
      "Performance Benchmarks Across Reps",
      "Priority Email & Slack Support",
    ],
    perfectFor: [
      "Teams Looking To Reduce Ramp Time,",
      "Standardize Training, And operationalize",
      "coaching.",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    priceAlt: "Pricing",
    period: "",
    description: "For large-scale sales organizations",
    popular: false,
    cta: "Contact Sales",
    ctaLink: "https://y22.ai",
    gradient: "from-cloud/10 to-cloud/5",
    borderColor: "border-cloud/20 hover:border-cloud/40",
    features: [
      "Everything Under Business",
      "Dedicated Account Manager",
      "Enterprise Analytics & Multi-Level Score Reports",
      "Admin Controls & Advanced Team Management",
      "Custom Training Modules Built for Your Product & ICP",
      "Persona & ICP libraries",
      "Dedicated Slack Channel",
      "Procurement Support",
      "Early Access to New AI Features",
    ],
    perfectFor: [
      "Scaling sales orgs, enablement teams,",
      "enterprise call centers, high-volume",
      "organizations.",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PRICING COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Pricing() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* ── Background Effects ──────────────────────────────────── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.04] bg-[url('/assets/grid-bg.svg')] bg-center bg-repeat" />
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-stream/10 dark:bg-stream/[0.04] blur-[150px] rounded-full" />
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-studio/8 dark:bg-studio/[0.03] blur-[140px] rounded-full" />
        <div className="absolute bottom-[20%] left-[50%] w-[400px] h-[400px] bg-cloud/8 dark:bg-cloud/[0.03] blur-[130px] rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        {/* ── Section Header ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-stream/15 mb-6">
            <Sparkles className="size-4 text-stream" />
            <span className="text-label-sm uppercase text-stream">
              Simple Pricing
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-h2 mb-6 text-primary-text-light dark:text-primary-text-dark">
            Choose Your <span className="gradient-text-stream">Plan</span>
          </h2>

          {/* Subheadline */}
          <p className="text-body-lg text-subtle-text-light dark:text-subtle-text-dark">
            Start training with AI today. Scale as your team grows. Enterprise
            solutions for organizations that need more.
          </p>
        </motion.div>

        {/* ── Pricing Cards Grid ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${
                plan.popular
                  ? "lg:scale-105 lg:z-10 lg:shadow-2xl"
                  : "lg:mt-8"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1.5 rounded-full bg-studio text-white text-label-sm uppercase shadow-lg">
                    Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full p-8 lg:p-10 rounded-[28px] glass-card border ${
                  plan.popular
                    ? "border-studio/30 bg-gradient-to-br from-studio/5 to-studio/[0.02]"
                    : plan.borderColor
                } transition-all duration-500 card-shadow flex flex-col`}
                data-slot="card"
                style={{
                  backgroundColor: plan.popular
                    ? "rgba(139, 92, 246, 0.08)"
                    : undefined,
                }}
              >
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-h5 mb-3 text-primary-text-light dark:text-primary-text-dark">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    {plan.priceAlt ? (
                      <div className="text-[56px] font-bold leading-none text-primary-text-light dark:text-primary-text-dark">
                        {plan.priceAlt}
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-[56px] font-bold leading-none text-primary-text-light dark:text-primary-text-dark">
                          {plan.price}
                        </span>
                        <span className="text-body-md text-subtle-text-light dark:text-subtle-text-dark">
                          {plan.period}
                        </span>
                      </div>
                    )}
                    {plan.subtitle && (
                      <div className="text-body-sm text-subtle-text-light dark:text-subtle-text-dark mt-1">
                        {plan.subtitle}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-body-sm text-subtle-text-light dark:text-subtle-text-dark">
                    {plan.description}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-full text-center font-semibold transition-all duration-300 mb-10 inline-flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-studio hover:bg-studio-light text-white shadow-lg hover:shadow-xl"
                      : "glass-strong border border-card-border-light dark:border-white/8 hover:border-stream/25 text-primary-text-light dark:text-primary-text-dark"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="size-4" />
                </a>

                {/* Features Section */}
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="text-label uppercase mb-4 text-primary-text-light dark:text-primary-text-dark">
                      Features
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-body-sm text-subtle-text-light dark:text-subtle-text-dark"
                        >
                          <Check
                            className={`size-5 flex-shrink-0 mt-0.5 ${
                              plan.popular
                                ? "text-studio"
                                : "text-stream"
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Perfect For */}
                  <div className="pt-6 border-t border-dividers-light dark:border-dividers-dark">
                    <div className="text-label uppercase mb-3 text-primary-text-light dark:text-primary-text-dark">
                      Perfect For
                    </div>
                    <div className="space-y-2">
                      {plan.perfectFor.map((line, i) => (
                        <p
                          key={i}
                          className="text-body-sm text-subtle-text-light dark:text-subtle-text-dark flex items-start gap-2"
                        >
                          <span
                            className={`inline-block size-1.5 rounded-full mt-2 flex-shrink-0 ${
                              plan.popular ? "bg-studio" : "bg-stream"
                            }`}
                          />
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Trust Signal ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-6 rounded-2xl glass-strong border border-white/[0.05]">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-xl bg-stream/15 flex items-center justify-center">
                <Shield className="size-6 text-stream" />
              </div>
              <div className="text-left">
                <div className="text-body-sm font-semibold text-primary-text-light dark:text-primary-text-dark">
                  No credit card required
                </div>
                <div className="text-[13px] text-subtle-text-light dark:text-subtle-text-dark">
                  Start free trial today
                </div>
              </div>
            </div>

            <div className="w-px h-12 bg-dividers-light dark:bg-dividers-dark" />

            <div className="flex items-center gap-3">
              <div className="size-12 rounded-xl bg-studio/15 flex items-center justify-center">
                <Zap className="size-6 text-studio" />
              </div>
              <div className="text-left">
                <div className="text-body-sm font-semibold text-primary-text-light dark:text-primary-text-dark">
                  5-min setup
                </div>
                <div className="text-[13px] text-subtle-text-light dark:text-subtle-text-dark">
                  Get started instantly
                </div>
              </div>
            </div>

            <div className="w-px h-12 bg-dividers-light dark:bg-dividers-dark hidden lg:block" />

            <div className="flex items-center gap-3">
              <div className="size-12 rounded-xl bg-cloud/15 flex items-center justify-center">
                <Award className="size-6 text-cloud" />
              </div>
              <div className="text-left">
                <div className="text-body-sm font-semibold text-primary-text-light dark:text-primary-text-dark">
                  250+ teams
                </div>
                <div className="text-[13px] text-subtle-text-light dark:text-subtle-text-dark">
                  Trusted by sales pros
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Additional CTA ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-body-md text-subtle-text-light dark:text-subtle-text-dark mb-6">
            Need a custom solution or have questions?
          </p>
          <a
            href="https://y22.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-strong border border-stream/20 hover:border-stream/40 transition-all text-body-md font-medium text-primary-text-light dark:text-primary-text-dark"
          >
            <MessageCircle className="size-5 text-stream" />
            Talk to our team
          </a>
        </motion.div>
      </div>
    </section>
  );
}

