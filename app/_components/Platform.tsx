"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   CAPABILITY PILLARS — data for each alternating block
   ═══════════════════════════════════════════════════════════════ */

interface Pillar {
  label: string;
  headline: string;
  headlineAccent: string;
  description: string;
  details: string[];
  visual: "realtime" | "data" | "configure" | "infra" | "unified";
}

const PILLARS: Pillar[] = [
  {
    label: "Real-Time Support",
    headline: "Guidance during live calls,",
    headlineAccent: "not after them",
    description:
      "Whisper listens to every sales call and surfaces relevant context in real time. Objection responses, discovery questions, and deal progression prompts — delivered when they matter.",
    details: [
      "Context-aware suggestions based on conversation flow",
      "Zero disruption to the prospect experience",
      "Immediate feedback loop — no waiting for reviews",
    ],
    visual: "realtime",
  },
  {
    label: "Your Data",
    headline: "Trained on your pipeline,",
    headlineAccent: "not generic models",
    description:
      "Y22 connects to your call recordings, CRM, and pipeline data. The system improves as your data grows. Every coaching signal reflects what actually works for your team.",
    details: [
      "Ingests calls, CRM records, and sales metrics",
      "Models adapt to your specific deal patterns",
      "Coaching quality compounds over time",
    ],
    visual: "data",
  },
  {
    label: "Configuration",
    headline: "Configure how",
    headlineAccent: "your AI behaves",
    description:
      "Define scoring criteria, set coaching thresholds, and customize AI buyer personas. The platform adapts to your sales methodology — not the other way around.",
    details: [
      "Custom 28-point scoring rubrics",
      "Adjustable coaching sensitivity and style",
      "Personas modeled after your actual ICP",
    ],
    visual: "configure",
  },
  {
    label: "Infrastructure",
    headline: "Reliable infrastructure",
    headlineAccent: "at any scale",
    description:
      "Built to handle thousands of concurrent sessions with low-latency real-time processing. Enterprise-grade security and compliance from day one.",
    details: [
      "Sub-200ms response times for live call support",
      "SOC 2 compliant with end-to-end encryption",
      "99.9% uptime SLA across all services",
    ],
    visual: "infra",
  },
  {
    label: "Unified System",
    headline: "Practice, coaching, and analytics",
    headlineAccent: "in one system",
    description:
      "No tool-switching. No data silos. From AI roleplay to live call support to performance tracking — everything operates on the same data layer.",
    details: [
      "Single source of truth for rep performance",
      "Shared data layer across all modules",
      "One login, one dashboard, one workflow",
    ],
    visual: "unified",
  },
];

/* ═══════════════════════════════════════════════════════════════
   ABSTRACT SVG VISUALS — product-adjacent illustrations
   ═══════════════════════════════════════════════════════════════ */

function RealtimeVisual() {
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto" aria-hidden="true">
      {/* Background grid */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 42 + 6} x2="400" y2={i * 42 + 6} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 44 + 6} y1="0" x2={i * 44 + 6} y2="300" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
      ))}

      {/* Audio waveform — central element */}
      <g transform="translate(60, 100)">
        {[20, 35, 50, 28, 60, 42, 30, 55, 38, 22, 48, 62, 34, 45, 26, 52, 40].map((h, i) => (
          <rect
            key={i}
            x={i * 16}
            y={50 - h / 2}
            width="6"
            height={h}
            rx="3"
            fill={i >= 6 && i <= 10 ? "rgba(59,130,246,0.35)" : "rgba(255,255,255,0.08)"}
          >
            <animate
              attributeName="height"
              values={`${h};${h * 0.6};${h}`}
              dur={`${2 + i * 0.15}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values={`${50 - h / 2};${50 - (h * 0.6) / 2};${50 - h / 2}`}
              dur={`${2 + i * 0.15}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>

      {/* Connection node — top right */}
      <circle cx="320" cy="60" r="24" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
      <circle cx="320" cy="60" r="8" fill="rgba(59,130,246,0.2)" />

      {/* Data card — bottom right */}
      <rect x="280" y="180" width="100" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <rect x="292" y="195" width="40" height="4" rx="2" fill="rgba(59,130,246,0.2)" />
      <rect x="292" y="207" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="292" y="218" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />

      {/* Connection lines */}
      <line x1="280" y1="210" x2="200" y2="130" stroke="rgba(59,130,246,0.08)" strokeWidth="0.5" strokeDasharray="4 4" />
      <line x1="320" y1="84" x2="220" y2="110" stroke="rgba(59,130,246,0.08)" strokeWidth="0.5" strokeDasharray="4 4" />

      {/* Pulse ring on node */}
      <circle cx="320" cy="60" r="24" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5">
        <animate attributeName="r" values="24;36;24" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function DataVisual() {
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto" aria-hidden="true">
      {/* Subtle grid */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 42 + 6} x2="400" y2={i * 42 + 6} stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
      ))}

      {/* Layered data cards flowing into center */}
      {/* Source card 1 — top left */}
      <g transform="translate(30, 30)">
        <rect width="100" height="65" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <rect x="12" y="14" width="30" height="4" rx="2" fill="rgba(245,158,11,0.25)" />
        <rect x="12" y="26" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="12" y="37" width="45" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
        <rect x="12" y="48" width="52" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
      </g>

      {/* Source card 2 — top right */}
      <g transform="translate(270, 20)">
        <rect width="110" height="65" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <rect x="12" y="14" width="35" height="4" rx="2" fill="rgba(139,92,246,0.25)" />
        <rect x="12" y="26" width="70" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="12" y="37" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
        <rect x="12" y="48" width="58" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
      </g>

      {/* Source card 3 — bottom left */}
      <g transform="translate(20, 200)">
        <rect width="105" height="65" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <rect x="12" y="14" width="28" height="4" rx="2" fill="rgba(59,130,246,0.25)" />
        <rect x="12" y="26" width="55" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="12" y="37" width="68" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
        <rect x="12" y="48" width="42" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
      </g>

      {/* Central processing node */}
      <circle cx="200" cy="150" r="28" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
      <circle cx="200" cy="150" r="10" fill="rgba(59,130,246,0.2)" />

      {/* Ambient ring */}
      <circle cx="200" cy="150" r="50" fill="none" stroke="rgba(59,130,246,0.04)" strokeWidth="0.5" />
      <circle cx="200" cy="150" r="75" fill="none" stroke="rgba(59,130,246,0.02)" strokeWidth="0.5" />

      {/* Flow lines from cards to center */}
      <path d="M130 62 Q165 100 200 122" stroke="rgba(245,158,11,0.12)" strokeWidth="0.8" fill="none" />
      <path d="M270 52 Q235 95 200 122" stroke="rgba(139,92,246,0.12)" strokeWidth="0.8" fill="none" />
      <path d="M125 232 Q165 195 200 178" stroke="rgba(59,130,246,0.12)" strokeWidth="0.8" fill="none" />

      {/* Output arrow — right */}
      <line x1="228" y1="150" x2="360" y2="150" stroke="rgba(59,130,246,0.1)" strokeWidth="0.8" strokeDasharray="6 4" />
      <polygon points="360,146 370,150 360,154" fill="rgba(59,130,246,0.15)" />

      {/* Flowing dots on paths */}
      <circle r="2.5" fill="rgba(245,158,11,0.3)">
        <animateMotion dur="4s" repeatCount="indefinite" path="M130,62 Q165,100 200,122" />
      </circle>
      <circle r="2.5" fill="rgba(139,92,246,0.3)">
        <animateMotion dur="4.5s" repeatCount="indefinite" path="M270,52 Q235,95 200,122" />
      </circle>
      <circle r="2.5" fill="rgba(59,130,246,0.3)">
        <animateMotion dur="5s" repeatCount="indefinite" path="M125,232 Q165,195 200,178" />
      </circle>
    </svg>
  );
}

function ConfigureVisual() {
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto" aria-hidden="true">
      {/* Modular blocks — configurable components */}

      {/* Block row 1 */}
      <g transform="translate(40, 30)">
        <rect width="140" height="50" rx="8" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <rect x="12" y="12" width="8" height="8" rx="2" fill="rgba(59,130,246,0.3)" />
        <rect x="28" y="13" width="50" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="28" y="23" width="80" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
        {/* Toggle */}
        <rect x="100" y="14" width="24" height="12" rx="6" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5" />
        <circle cx="118" cy="20" r="4" fill="rgba(59,130,246,0.4)" />
      </g>

      <g transform="translate(200, 30)">
        <rect width="160" height="50" rx="8" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <rect x="12" y="12" width="8" height="8" rx="2" fill="rgba(245,158,11,0.3)" />
        <rect x="28" y="13" width="60" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="28" y="23" width="90" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
        {/* Slider */}
        <rect x="12" y="35" width="100" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
        <rect x="12" y="35" width="65" height="3" rx="1.5" fill="rgba(245,158,11,0.2)" />
        <circle cx="77" cy="36.5" r="5" fill="rgba(245,158,11,0.3)" stroke="rgba(245,158,11,0.2)" strokeWidth="0.5" />
      </g>

      {/* Block row 2 */}
      <g transform="translate(60, 100)">
        <rect width="280" height="70" rx="10" fill="rgba(255,255,255,0.025)" stroke="rgba(59,130,246,0.08)" strokeWidth="0.5" />
        {/* Mini bar chart */}
        {[18, 30, 24, 38, 22, 34, 42, 28, 36, 20].map((h, i) => (
          <rect key={i} x={20 + i * 25} y={55 - h} width="10" height={h} rx="2" fill={i === 6 ? "rgba(59,130,246,0.25)" : "rgba(255,255,255,0.05)"} />
        ))}
        <text x="20" y="18" fontSize="8" fill="rgba(255,255,255,0.15)" fontFamily="system-ui">Scoring Rubric</text>
      </g>

      {/* Block row 3 — persona cards */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${40 + i * 115}, 195)`}>
          <rect width="100" height="75" rx="8" fill="rgba(255,255,255,0.025)" stroke={i === 1 ? "rgba(59,130,246,0.12)" : "rgba(255,255,255,0.05)"} strokeWidth="0.5" />
          <circle cx="20" cy="20" r="8" fill={["rgba(59,130,246,0.1)", "rgba(59,130,246,0.15)", "rgba(139,92,246,0.1)"][i]} stroke={["rgba(59,130,246,0.12)", "rgba(59,130,246,0.2)", "rgba(139,92,246,0.12)"][i]} strokeWidth="0.5" />
          <rect x="36" y="16" width="45" height="3.5" rx="1.5" fill="rgba(255,255,255,0.07)" />
          <rect x="12" y="40" width="70" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
          <rect x="12" y="50" width="55" height="3" rx="1.5" fill="rgba(255,255,255,0.03)" />
          <rect x="12" y="60" width="62" height="3" rx="1.5" fill="rgba(255,255,255,0.03)" />
        </g>
      ))}

      {/* Connecting dotted lines between rows */}
      <line x1="200" y1="80" x2="200" y2="100" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5" strokeDasharray="3 3" />
      <line x1="200" y1="170" x2="200" y2="195" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5" strokeDasharray="3 3" />
    </svg>
  );
}

function InfraVisual() {
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto" aria-hidden="true">
      {/* Network topology — nodes and connections */}

      {/* Central cluster */}
      <circle cx="200" cy="150" r="20" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.18)" strokeWidth="1" />
      <circle cx="200" cy="150" r="6" fill="rgba(59,130,246,0.3)" />

      {/* Outer nodes */}
      {[
        { x: 80, y: 60 },
        { x: 320, y: 60 },
        { x: 60, y: 180 },
        { x: 340, y: 180 },
        { x: 120, y: 250 },
        { x: 280, y: 250 },
        { x: 200, y: 40 },
        { x: 200, y: 260 },
      ].map((pos, i) => (
        <g key={i}>
          {/* Connection line */}
          <line x1={pos.x} y1={pos.y} x2="200" y2="150" stroke="rgba(255,255,255,0.035)" strokeWidth="0.5" />
          {/* Node */}
          <circle cx={pos.x} cy={pos.y} r="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <circle cx={pos.x} cy={pos.y} r="3.5" fill={i < 3 ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.08)"} />
        </g>
      ))}

      {/* Secondary connections (mesh) */}
      <line x1="80" y1="60" x2="200" y2="40" stroke="rgba(255,255,255,0.02)" strokeWidth="0.3" />
      <line x1="320" y1="60" x2="200" y2="40" stroke="rgba(255,255,255,0.02)" strokeWidth="0.3" />
      <line x1="80" y1="60" x2="60" y2="180" stroke="rgba(255,255,255,0.02)" strokeWidth="0.3" />
      <line x1="320" y1="60" x2="340" y2="180" stroke="rgba(255,255,255,0.02)" strokeWidth="0.3" />
      <line x1="60" y1="180" x2="120" y2="250" stroke="rgba(255,255,255,0.02)" strokeWidth="0.3" />
      <line x1="340" y1="180" x2="280" y2="250" stroke="rgba(255,255,255,0.02)" strokeWidth="0.3" />
      <line x1="120" y1="250" x2="200" y2="260" stroke="rgba(255,255,255,0.02)" strokeWidth="0.3" />
      <line x1="280" y1="250" x2="200" y2="260" stroke="rgba(255,255,255,0.02)" strokeWidth="0.3" />

      {/* Ambient rings around center */}
      <circle cx="200" cy="150" r="50" fill="none" stroke="rgba(59,130,246,0.04)" strokeWidth="0.5" />
      <circle cx="200" cy="150" r="90" fill="none" stroke="rgba(59,130,246,0.025)" strokeWidth="0.5" />
      <circle cx="200" cy="150" r="130" fill="none" stroke="rgba(59,130,246,0.015)" strokeWidth="0.5" />

      {/* Status indicators — bottom */}
      <g transform="translate(120, 280)">
        <rect width="160" height="12" rx="6" fill="rgba(255,255,255,0.02)" />
        <rect width="152" height="12" rx="6" fill="rgba(59,130,246,0.06)" x="4" />
        <text x="65" y="9" fontSize="6" fill="rgba(59,130,246,0.3)" textAnchor="middle" fontFamily="system-ui">99.9% uptime</text>
      </g>

      {/* Flowing data packet */}
      <circle r="2" fill="rgba(59,130,246,0.4)">
        <animateMotion dur="3s" repeatCount="indefinite" path="M80,60 L200,150 L320,60" />
      </circle>
      <circle r="2" fill="rgba(59,130,246,0.3)">
        <animateMotion dur="4s" repeatCount="indefinite" path="M60,180 L200,150 L340,180" />
      </circle>
    </svg>
  );
}

function UnifiedVisual() {
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto" aria-hidden="true">
      {/* Converging pipelines into unified platform */}

      {/* Three input streams */}
      {/* Stream 1 — AI Roleplay */}
      <g>
        <rect x="20" y="30" width="100" height="45" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(245,158,11,0.1)" strokeWidth="0.5" />
        <rect x="32" y="42" width="32" height="4" rx="2" fill="rgba(245,158,11,0.2)" />
        <rect x="32" y="52" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />
        <rect x="32" y="61" width="45" height="3" rx="1.5" fill="rgba(255,255,255,0.03)" />
      </g>

      {/* Stream 2 — Live Coaching */}
      <g>
        <rect x="20" y="128" width="100" height="45" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5" />
        <rect x="32" y="140" width="38" height="4" rx="2" fill="rgba(59,130,246,0.2)" />
        <rect x="32" y="150" width="55" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />
        <rect x="32" y="159" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.03)" />
      </g>

      {/* Stream 3 — Analytics */}
      <g>
        <rect x="20" y="226" width="100" height="45" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(139,92,246,0.1)" strokeWidth="0.5" />
        <rect x="32" y="238" width="28" height="4" rx="2" fill="rgba(139,92,246,0.2)" />
        <rect x="32" y="248" width="65" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />
        <rect x="32" y="257" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.03)" />
      </g>

      {/* Converging lines */}
      <path d="M120 52 C180 52, 200 120, 240 150" stroke="rgba(245,158,11,0.1)" strokeWidth="0.8" fill="none" />
      <path d="M120 150 L240 150" stroke="rgba(59,130,246,0.1)" strokeWidth="0.8" fill="none" />
      <path d="M120 248 C180 248, 200 180, 240 150" stroke="rgba(139,92,246,0.1)" strokeWidth="0.8" fill="none" />

      {/* Central merge point */}
      <circle cx="250" cy="150" r="16" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.15)" strokeWidth="0.8" />
      <circle cx="250" cy="150" r="5" fill="rgba(59,130,246,0.25)" />

      {/* Unified output — dashboard card */}
      <g transform="translate(285, 95)">
        <rect width="100" height="110" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5" />
        {/* Mini header */}
        <rect x="10" y="12" width="40" height="4" rx="2" fill="rgba(59,130,246,0.2)" />
        {/* Mini chart bars */}
        {[20, 32, 26, 38, 30].map((h, i) => (
          <rect key={i} x={12 + i * 16} y={85 - h} width="8" height={h} rx="2" fill={i === 3 ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.04)"} />
        ))}
        {/* Mini stat line */}
        <rect x="10" y="92" width="80" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
      </g>

      {/* Output arrow */}
      <line x1="266" y1="150" x2="285" y2="150" stroke="rgba(59,130,246,0.12)" strokeWidth="0.8" />

      {/* Flowing dots */}
      <circle r="2" fill="rgba(245,158,11,0.35)">
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M120,52 C180,52 200,120 240,150" />
      </circle>
      <circle r="2" fill="rgba(59,130,246,0.35)">
        <animateMotion dur="3s" repeatCount="indefinite" path="M120,150 L240,150" />
      </circle>
      <circle r="2" fill="rgba(139,92,246,0.35)">
        <animateMotion dur="4s" repeatCount="indefinite" path="M120,248 C180,248 200,180 240,150" />
      </circle>
    </svg>
  );
}

const VISUAL_MAP: Record<Pillar["visual"], React.FC> = {
  realtime: RealtimeVisual,
  data: DataVisual,
  configure: ConfigureVisual,
  infra: InfraVisual,
  unified: UnifiedVisual,
};

/* ═══════════════════════════════════════════════════════════════
   SINGLE PILLAR BLOCK — alternating layout
   ═══════════════════════════════════════════════════════════════ */

interface PillarBlockProps {
  pillar: Pillar;
  index: number;
  reducedMotion: boolean;
}

function PillarBlock({ pillar, index, reducedMotion }: PillarBlockProps) {
  const isReversed = index % 2 !== 0; // Odd index → visual LEFT, text RIGHT
  const Visual = VISUAL_MAP[pillar.visual];

  // Animation direction
  const textX = reducedMotion ? 0 : isReversed ? 30 : -30;
  const visualX = reducedMotion ? 0 : isReversed ? -30 : 30;

  return (
    <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}>
      {/* Text side */}
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: textX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: reducedMotion ? 0 : 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">
          <span className="text-[10px] uppercase tracking-[0.15em] text-subtle-text-dark font-medium">
            {pillar.label}
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-h4 lg:text-h3 font-bold leading-tight text-primary-text-light dark:text-primary-text-dark">
          {pillar.headline}
          <br />
          <span className="gradient-text-stream">{pillar.headlineAccent}</span>
        </h3>

        {/* Description */}
        <p className="text-body-md leading-relaxed text-subtle-text-light dark:text-subtle-text-dark max-w-lg">
          {pillar.description}
        </p>

        {/* Supporting details */}
        <ul className="space-y-3 pt-2">
          {pillar.details.map((detail, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0 : 0.35,
                delay: reducedMotion ? 0 : 0.4 + i * 0.08,
                ease: "easeOut",
              }}
              className="flex items-start gap-3"
            >
              <span className="mt-2 size-1.5 rounded-full bg-stream/40 flex-shrink-0" />
              <span className="text-body-sm text-subtle-text-light dark:text-subtle-text-dark leading-relaxed">
                {detail}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Visual side */}
      <motion.div
        className="flex-1 relative max-w-[500px] w-full"
        initial={{ opacity: 0, x: visualX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: reducedMotion ? 0 : 0.7,
          delay: reducedMotion ? 0 : 0.15,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Subtle glow behind visual */}
        <div className="absolute inset-0 bg-stream/[0.02] blur-[60px] rounded-full pointer-events-none" />

        <div className="relative rounded-2xl border border-white/[0.04] bg-white/[0.015] p-6 lg:p-8 overflow-hidden">
          <Visual />
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PLATFORM SECTION — main export
   ═══════════════════════════════════════════════════════════════ */

export default function Platform() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-stream/[0.02] blur-[250px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-24 lg:mb-32 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-subtle-text-dark font-semibold">
              Platform
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
            className="text-h3 lg:text-h2 font-bold leading-tight mb-6 text-primary-text-light dark:text-primary-text-dark"
          >
            How it all{" "}
            <span className="gradient-text-stream">works</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="text-body-md lg:text-body-lg leading-relaxed text-subtle-text-light dark:text-subtle-text-dark"
          >
            Five capabilities. One connected system.
            <br className="hidden sm:inline" />
            Built to handle real sales workflows from day one.
          </motion.p>
        </div>

        {/* Pillar blocks */}
        <div className="space-y-28 lg:space-y-40 max-w-6xl mx-auto">
          {PILLARS.map((pillar, i) => (
            <PillarBlock
              key={pillar.visual}
              pillar={pillar}
              index={i}
              reducedMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

