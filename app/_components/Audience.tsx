"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Target, BarChart3, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const TIERS = [
  {
    name: "Whisper",
    description: "Your live in-call assistant that gives reps real-time prompts, objection responses, and deal-moving questions.",
    colorClass: "stream",
    icon: MessageCircle,
    features: ["Smart Questions", "Objection Handling", "Deal-Moving Prompts", "Zero Disruption"],
    href: "#whisper",
  },
  {
    name: "AI Roleplay",
    description: "Practice with AI buyers modeled on your ICP. Get realistic pushback, scoring, and instant feedback.",
    colorClass: "studio",
    icon: Target,
    features: ["ICP-Based Buyers", "28-Point Scoring", "Instant Feedback", "Unlimited Practice"],
    href: "#roleplay",
  },
  {
    name: "Call Analytics",
    description: "Score every real call automatically. Track rep growth, identify coaching moments, and improve team performance.",
    colorClass: "cloud",
    icon: BarChart3,
    features: ["Auto Call Scoring", "Rep Dashboards", "Coach Insights", "Trend Analysis"],
    href: "#analytics",
  },
];

export default function Audience() {
  return (
    <section className="py-32 relative">
      <div className="section-divider w-full mb-32" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-white/[0.05] mb-8"
          >
            <Sparkles className="size-4 text-stream" />
            <span className="text-label-sm uppercase text-stream">Platform</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-h3 lg:text-h2 font-bold leading-tight mb-6 text-primary-text-light dark:text-primary-text-dark"
          >
            Your Complete <span className="gradient-text-stream">Sales Training</span> Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-md lg:text-body-lg leading-relaxed text-subtle-text-light dark:text-subtle-text-dark max-w-2xl mx-auto"
          >
            From practice to live calls to coaching — Y22 covers every step of your sales team&apos;s growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              data-slot="card"
              className="group relative p-10 rounded-[24px] glass-card border border-white/[0.05] hover:border-studio/15 flex flex-col justify-between transition-all duration-500 card-shadow card-shadow-hover overflow-hidden"
            >
              {/* Hover glow */}
              <div className={`absolute top-0 right-0 w-48 h-48 ${tier.colorClass === 'stream' ? 'bg-stream/[0.03]' : tier.colorClass === 'studio' ? 'bg-studio/[0.03]' : 'bg-cloud/[0.03]'} blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative">
                <div className={`size-16 rounded-2xl ${tier.colorClass === 'stream' ? 'bg-stream/12' : tier.colorClass === 'studio' ? 'bg-studio/12' : 'bg-cloud/12'} flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-500`}>
                  <tier.icon className={`size-8 ${tier.colorClass === 'stream' ? 'text-stream' : tier.colorClass === 'studio' ? 'text-studio' : 'text-cloud'}`} />
                </div>
                <h3 className="text-h4 font-bold mb-4 text-primary-text-light dark:text-primary-text-dark">{tier.name}</h3>
                <p className="text-body-sm leading-relaxed text-subtle-text-light dark:text-subtle-text-dark mb-10">{tier.description}</p>
                <ul className="space-y-4 mb-10">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-body-sm text-subtle-text-light dark:text-subtle-text-dark">
                      <span className={`size-2 rounded-full ${tier.colorClass === 'stream' ? 'bg-stream' : tier.colorClass === 'studio' ? 'bg-studio' : 'bg-cloud'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={tier.href} className={`flex items-center gap-2 text-body-sm font-semibold ${tier.colorClass === 'stream' ? 'text-stream' : tier.colorClass === 'studio' ? 'text-studio' : 'text-cloud'} group-hover:gap-3 transition-all`}>
                Learn more <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
