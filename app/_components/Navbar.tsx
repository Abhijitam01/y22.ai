"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Rocket, Sun, Moon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Y22_URLS } from "@/lib/config";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { 
    label: "Products", 
    href: "#", 
    dropdown: [
      { label: "Whisper", href: "#whisper", description: "Real-time in-call sales assistant." },
      { label: "AI Roleplay", href: "#roleplay", description: "Practice with AI buyers." },
      { label: "Call Analytics", href: "#analytics", description: "28-point call scoring & coaching." },
    ] 
  },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    const savedTheme = localStorage.getItem("theme");
    const root = document.documentElement;
    
    if (savedTheme === "dark") {
      root.classList.add('dark');
      setIsDark(true);
    } else if (savedTheme === "light") {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        root.classList.add('dark');
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newIsDark = !isDark;
    
    if (newIsDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    setIsDark(newIsDark);
  };

  return (
    <header 
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 rounded-2xl border",
        scrolled 
          ? "glass-strong border-card-border-light dark:border-white/8 py-3 shadow-lg shadow-black/5 dark:shadow-black/40" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
           <img src="/assets/y22/logo.svg" alt="Y22" className="h-10 dark:invert dark:brightness-100" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden'); }} />
           <span className="text-2xl font-bold tracking-tighter hidden">
              <span className="text-stream">Y22</span>.ai
           </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href={link.href}
                className="text-body-sm font-medium text-primary-text-light dark:text-primary-text-dark hover:text-stream transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.dropdown && <ChevronDown className="size-4 opacity-50 transition-transform group-hover:rotate-180" />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {activeDropdown === link.label && link.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-4 w-72 p-4 rounded-xl glass-strong shadow-xl shadow-black/10 dark:shadow-black/50"
                  >
                    <div className="space-y-3">
                      {link.dropdown.map((item) => (
                        <Link 
                          key={item.label} 
                          href={item.href}
                          className="block p-3 rounded-lg hover:bg-card-bg-hover-light dark:hover:bg-white/5 transition-colors"
                        >
                          <div className="text-body-sm font-semibold text-primary-text-light dark:text-primary-text-dark">{item.label}</div>
                          <div className="text-[14px] text-subtle-text-light dark:text-subtle-text-dark font-normal mt-0.5">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg glass border border-card-border-light dark:border-white/8 hover:bg-card-bg-hover-light dark:hover:bg-white/8 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
          
          {/* Login Link */}
          <Link 
            href={Y22_URLS.app.login}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-body-sm font-medium hover:bg-white/5 transition-all text-primary-text-light dark:text-primary-text-dark"
          >
            Login
          </Link>

          {/* Get Started Button */}
          <Link
            href={Y22_URLS.app.signup}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 btn-primary !py-2.5 !px-6 text-body-sm"
          >
            Get Started
            <ArrowRight className="size-4" />
          </Link>
          
          {/* Book Demo Button - Now secondary */}
          <Link 
            href={Y22_URLS.marketing.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full glass-strong border border-white/[0.08] hover:border-stream/25 transition-all text-body-sm font-medium text-primary-text-light dark:text-primary-text-dark"
          >
            <Rocket className="size-4" />
            Book Demo
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 rounded-lg glass border border-card-border-light dark:border-white/8"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden glass-strong border-t border-card-border-light dark:border-white/8"
          >
            <div className="px-6 py-8 space-y-6">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="space-y-4">
                  <Link 
                    href={link.href}
                    className="text-xl font-semibold active:text-stream"
                    onClick={() => !link.dropdown && setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 space-y-4 border-l border-white/8 pl-4">
                      {link.dropdown.map((item) => (
                        <Link 
                          key={item.label} 
                          href={item.href}
                          className="block text-body-sm opacity-60"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTAs */}
              <div className="space-y-3 pt-2">
                <Link 
                  href={Y22_URLS.app.signup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 btn-primary w-full py-4 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                  <ArrowRight className="size-5" />
                </Link>
                
                <Link 
                  href={Y22_URLS.app.login}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 text-lg rounded-full glass-strong border border-white/[0.08] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
