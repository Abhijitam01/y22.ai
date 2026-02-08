"use client";

import React from "react";
import { motion } from "framer-motion";
import { Headphones, Upload, MessageSquare, Sparkles } from "lucide-react";

export default function AIMagic() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[700px] h-[700px] bg-stream/[0.04] blur-[200px] rounded-full -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Section label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-white/[0.05] mb-8">
                <Sparkles className="size-4 text-stream" />
                <span className="text-label-sm uppercase text-stream">Real-Time Support</span>
              </div>

              <h2 className="text-h3 lg:text-h2 font-bold leading-tight mb-7 text-primary-text-light dark:text-primary-text-dark">
                Your In-Call <span className="gradient-text-stream">Sales Edge</span>
              </h2>
              <p className="text-body-md lg:text-body-lg leading-relaxed text-subtle-text-light dark:text-subtle-text-dark mb-12">
                Whisper joins every live sales call to give your reps the edge they need. 
                Smart questions, objection handling, and deal-moving prompts — all in 
                real time without the prospect knowing.
              </p>
              
              <div className="space-y-5">
                {[
                  { icon: Headphones, title: "Smart Questions on the Fly", desc: "Whisper suggests discovery questions based on conversation context.", color: "stream" },
                  { icon: MessageSquare, title: "Objection Handling Lines", desc: "Get proven rebuttals delivered at the exact moment you need them.", color: "studio" },
                  { icon: Upload, title: "Deal-Moving Prompts", desc: "Context-aware prompts that help advance the deal to the next stage.", color: "cloud" }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 p-6 rounded-2xl glass-card border border-white/[0.04] hover:border-stream/15 transition-all duration-500 group"
                  >
                    <div className={`p-3.5 rounded-xl ${feature.color === 'stream' ? 'bg-stream/12 text-stream' : feature.color === 'studio' ? 'bg-studio/12 text-studio' : 'bg-cloud/12 text-cloud'} h-fit flex-shrink-0 group-hover:scale-105 transition-transform duration-500`}>
                      <feature.icon className="size-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-body-md text-primary-text-light dark:text-primary-text-dark mb-1.5">{feature.title}</h4>
                      <p className="text-body-sm text-subtle-text-light dark:text-subtle-text-dark leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Glow behind */}
              <div className="absolute -inset-8 bg-stream/[0.06] blur-[60px] rounded-[40px]" />

              <div className="relative glass-card rounded-[24px] overflow-hidden border border-stream/10 glow-stream-light">
                <img 
                  src="/assets/y22/real-time-support.png" 
                  alt="Whisper Real-Time Support" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
