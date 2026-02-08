"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FileText, Mic, Video, BarChart3 } from "lucide-react";

/* ─── Data sources ────────────────────── */
const DATA_SOURCES = [
  {
    icon: Mic,
    label: "Call Recordings",
    desc: "Surfaces patterns from real conversations to show what top performers do differently.",
    id: "calls",
  },
  {
    icon: FileText,
    label: "CRM Data",
    desc: "Connects deal stages and pipeline changes to identify coaching signals that matter.",
    id: "crm",
  },
  {
    icon: Video,
    label: "Video Calls",
    desc: "Analyzes engagement in face-to-face meetings to refine delivery and timing.",
    id: "video",
  },
  {
    icon: BarChart3,
    label: "Sales Metrics",
    desc: "Links rep behavior directly to revenue outcomes so coaching stays grounded in results.",
    id: "metrics",
  },
];

/* ─── Roles (simple list, no cards) ─────── */
const ROLES = [
  { role: "Sales reps", outcome: "Get confident faster" },
  { role: "Managers", outcome: "Coach with real signals" },
  { role: "Revenue leaders", outcome: "Predictable ramp & results" },
  { role: "Enablement", outcome: "One system, no guesswork" },
];

/* ─── Positions for source nodes around the Y22 core (%) ─────── */
const NODE_POSITIONS = [
  { x: 50, y: 12 },
  { x: 88, y: 50 },
  { x: 50, y: 88 },
  { x: 12, y: 50 },
];

/* ═══════════════════════════════════════════════════════════════ */

export default function BuiltForYourTeam() {
  const [hoveredSource, setHoveredSource] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="section-divider w-full mb-32" />

      <div className="container mx-auto px-6">
        {/* ── Section Header ──────────────────────── */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.05] bg-white/[0.02] mb-8"
          >
            <span className="text-label-sm uppercase text-subtle-text-light dark:text-subtle-text-dark">
              Built for Your Team
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-h3 lg:text-h2 font-bold leading-tight mb-6 text-primary-text-light dark:text-primary-text-dark"
          >
            Built for every sales role —{" "}
            <span className="gradient-text-stream">powered by your data</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-md lg:text-body-lg leading-relaxed text-subtle-text-light dark:text-subtle-text-dark max-w-3xl mx-auto"
          >
            Y22 adapts to how your reps sell, how your deals move, and how your
            pipeline actually works — so coaching improves as your team grows.
          </motion.p>
        </div>

        {/* ── Two Column Layout ─────────────────── */}
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          {/* ── LEFT COLUMN — Roles (Simple Text List) ──── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            {ROLES.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-baseline gap-3 group"
              >
                <span className="font-semibold text-body-lg text-primary-text-light dark:text-primary-text-dark min-w-fit">
                  {item.role}
                </span>
                <span className="text-subtle-text-light dark:text-subtle-text-dark">
                  →
                </span>
                <span className="text-body-md text-subtle-text-light dark:text-subtle-text-dark group-hover:text-stream transition-colors duration-300">
                  {item.outcome}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* ── RIGHT COLUMN — Data Sources ─────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 space-y-8"
          >
            {/* Small heading */}
            <h3 className="text-h5 font-semibold text-primary-text-light dark:text-primary-text-dark">
              Learns from what actually happens in your pipeline
            </h3>

            {/* Visual with Y22 node + data sources */}
            <div className="relative">
              {/* Y22 Intelligence Node (Smaller, Centered) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-square max-w-[280px] mx-auto mb-10"
              >
                {/* SVG connection lines + flowing dots */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                  aria-hidden="true"
                >
                  {DATA_SOURCES.map((source, i) => {
                    const pos = NODE_POSITIONS[i];
                    const isHovered = hoveredSource === source.id;
                    return (
                      <g key={source.id}>
                        <line
                          x1={pos.x}
                          y1={pos.y}
                          x2={50}
                          y2={50}
                          stroke={
                            isHovered
                              ? "rgba(59, 130, 246, 0.15)"
                              : "rgba(255, 255, 255, 0.03)"
                          }
                          strokeWidth={isHovered ? "0.3" : "0.15"}
                          style={{
                            transition:
                              "stroke 0.6s ease, stroke-width 0.6s ease",
                          }}
                        />
                        {!shouldReduceMotion && isHovered && (
                          <circle
                            r="0.6"
                            fill="rgba(59, 130, 246, 0.35)"
                            style={{
                              transition: "fill 0.6s ease",
                            }}
                          >
                            <animateMotion
                              dur={`${3 + i * 0.5}s`}
                              repeatCount="indefinite"
                              path={`M${pos.x},${pos.y} L50,50`}
                            />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Ambient rings (subtle) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/[0.02]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/[0.015]" />

                {/* Y22 Core (smaller) */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-[72px] h-[72px] rounded-full border border-stream/[0.08] flex items-center justify-center relative bg-white/[0.01]">
                    <div className="absolute inset-0 rounded-full bg-stream/[0.02]" />
                    <span className="text-h5 font-bold gradient-text-stream relative z-10">
                      Y22
                    </span>
                  </div>
                </motion.div>

                {/* Source indicator dots (smaller) */}
                {DATA_SOURCES.map((source, i) => {
                  const pos = NODE_POSITIONS[i];
                  const isHovered = hoveredSource === source.id;
                  return (
                    <motion.div
                      key={source.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                      className="absolute"
                      style={{
                        top: `${pos.y}%`,
                        left: `${pos.x}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div
                        className={`size-8 rounded-lg border flex items-center justify-center transition-all duration-500 ${
                          isHovered
                            ? "border-stream/15 bg-stream/[0.05]"
                            : "border-white/[0.04] bg-white/[0.015]"
                        }`}
                      >
                        <source.icon
                          className={`size-4 transition-colors duration-500 ${
                            isHovered ? "text-stream" : "text-white/20"
                          }`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Data source items (compact, no large cards) */}
              <div className="space-y-3">
                {DATA_SOURCES.map((source, i) => (
                  <motion.div
                    key={source.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + i * 0.1,
                      ease: "easeOut",
                    }}
                    onMouseEnter={() => setHoveredSource(source.id)}
                    onMouseLeave={() => setHoveredSource(null)}
                    className={`group p-4 rounded-lg border transition-all duration-500 cursor-default ${
                      hoveredSource === source.id
                        ? "border-stream/10 bg-stream/[0.02]"
                        : "border-white/[0.03] bg-white/[0.01]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`size-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                          hoveredSource === source.id
                            ? "bg-stream/[0.06]"
                            : "bg-white/[0.02]"
                        }`}
                      >
                        <source.icon
                          className={`size-4 transition-colors duration-500 ${
                            hoveredSource === source.id
                              ? "text-stream"
                              : "text-white/30"
                          }`}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-body-sm text-primary-text-light dark:text-primary-text-dark mb-1">
                          {source.label}
                        </h4>
                        <p className="text-[13px] leading-relaxed text-subtle-text-light dark:text-subtle-text-dark">
                          {source.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

