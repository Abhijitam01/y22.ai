"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Twitter, Github, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Y22_URLS } from "../../lib/config";

const FAQS = [
  {
    question: "What is Y22?",
    answer: "Y22 is an AI-powered sales training and enablement platform. It helps your reps practice with AI roleplay, get real-time coaching during live calls with Whisper, and automatically scores every conversation."
  },
  {
    question: "How does Whisper work?",
    answer: "Whisper is your in-call AI assistant. It listens to your live sales calls and provides real-time suggestions — objection handling lines, discovery questions, and deal-moving prompts — directly on your screen without the prospect knowing."
  },
  {
    question: "Can Y22 train on our specific sales process?",
    answer: "Yes! Y22 learns from your ICP, your deal data, and your actual call recordings. AI buyers in roleplay are modeled after your real prospects, and coaching is tailored to your playbook."
  },
  {
    question: "How is this different from Gong or Chorus?",
    answer: "Gong and Chorus analyze calls after the fact. Y22 goes further — we provide AI roleplay for practice, real-time in-call support with Whisper, and auto-coaching after every call. It's the full training + enablement stack."
  }
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <footer className="pt-28 pb-16 bg-gray-950 dark:bg-black text-white relative overflow-hidden">
      {/* Background Shape */}
      <img 
        src="/assets/footer-shape.png" 
        className="absolute top-0 right-0 w-1/2 opacity-15 pointer-events-none" 
      />

      <div className="container mx-auto px-6">
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-36">
          <h2 className="text-h3 lg:text-h2 font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div 
                key={i} 
                className="border-b border-white/8 transition-all duration-300" 
                data-slot="faq-item"
                data-state={openIndex === i ? "open" : "closed"}
              >
                <button
                  className="w-full py-7 flex items-center justify-between text-left transition-colors group"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  data-slot="faq-trigger"
                >
                  <span className="text-h5 font-semibold transition-colors" data-slot="faq-question">{faq.question}</span>
                  <div className="p-2 rounded-full group-hover:bg-studio/10 transition-colors">
                    {openIndex === i ? <Minus className="size-5 text-studio" /> : <Plus className="size-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-9 text-body-md opacity-50 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links & Branding */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-24 border-t border-white/8 pt-20">
          <div className="col-span-1 md:col-span-1 space-y-7">
            <Link href="/" className="inline-block group">
               <img src="/assets/y22/footer-logo.svg" className="w-44 opacity-90 group-hover:opacity-100 transition-opacity invert hue-rotate-180" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </Link>
            <p className="text-body-sm opacity-40 max-w-xs leading-relaxed">
              Train with AI. Cheat on Sales Calls. Close the Deal. 
              The AI-powered sales training and enablement platform.
            </p>
            <div className="flex gap-4">
              <Link href={Y22_URLS.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 hover:bg-studio/15 hover:text-studio transition-all">
                <Twitter className="size-5" />
              </Link>
              <Link href={Y22_URLS.social.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 hover:bg-studio/15 hover:text-studio transition-all">
                <Github className="size-5" />
              </Link>
              <Link href={Y22_URLS.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 hover:bg-studio/15 hover:text-studio transition-all">
                <Linkedin className="size-5" />
              </Link>
              <Link href={Y22_URLS.social.discord} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 hover:bg-studio/15 hover:text-studio transition-all">
                <MessageCircle className="size-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-7">
            <h4 className="text-body-lg font-bold">Product</h4>
            <ul className="space-y-5 opacity-50 text-body-sm">
              <li><Link href={Y22_URLS.products.whisper} target="_blank" rel="noopener noreferrer" className="hover:text-studio transition-colors">Whisper</Link></li>
              <li><Link href={Y22_URLS.products.roleplay} target="_blank" rel="noopener noreferrer" className="hover:text-studio transition-colors">AI Roleplay</Link></li>
              <li><Link href={Y22_URLS.products.analytics} target="_blank" rel="noopener noreferrer" className="hover:text-studio transition-colors">Call Analytics</Link></li>
              <li><Link href={Y22_URLS.marketing.pricing} target="_blank" rel="noopener noreferrer" className="hover:text-studio transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="space-y-7">
            <h4 className="text-body-lg font-bold">Resources</h4>
            <ul className="space-y-5 opacity-50 text-body-sm">
              <li><Link href={Y22_URLS.marketing.blog} target="_blank" rel="noopener noreferrer" className="hover:text-studio transition-colors">Blog</Link></li>
              <li><Link href={Y22_URLS.marketing.about} target="_blank" rel="noopener noreferrer" className="hover:text-studio transition-colors">About Us</Link></li>
              <li><Link href={Y22_URLS.marketing.contact} target="_blank" rel="noopener noreferrer" className="hover:text-studio transition-colors">Contact</Link></li>
              <li><Link href="#faq" className="hover:text-studio transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="space-y-7">
            <h4 className="text-body-lg font-bold">Legal</h4>
            <ul className="space-y-5 opacity-50 text-body-sm">
              <li><Link href={Y22_URLS.legal.terms} target="_blank" rel="noopener noreferrer" className="hover:text-studio transition-colors">Terms of Service</Link></li>
              <li><Link href={Y22_URLS.legal.privacy} target="_blank" rel="noopener noreferrer" className="hover:text-studio transition-colors">Privacy Policy</Link></li>
              <li><Link href={Y22_URLS.legal.cookies} target="_blank" rel="noopener noreferrer" className="hover:text-studio transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-10 border-t border-white/5 text-body-xs opacity-25 mt-12">
           © {new Date().getFullYear()} Y22.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
