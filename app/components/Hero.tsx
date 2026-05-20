"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import BackgroundEffect from "./hero/BackgroundEffect";
import ArchitectureViz from "./hero/ArchitectureViz";
import HeroStats from "./hero/HeroStats";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center pb-[100px] mb-16 overflow-hidden bg-space-dark" style={{ paddingTop: "80px" }}>
      {/* Background Layer */}
      <BackgroundEffect />

      <div className="hero-content-wrapper w-full max-w-[1140px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

          {/* Left Side: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left w-full gap-6 md:gap-8"
          >
            {/* Main Heading & Badge Group */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight whitespace-nowrap">
                Halo, i'm <span className="text-gradient drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Aminju...</span>
              </h1>

              {/* Status Badge - below name */}
              <div className="relative group inline-block self-start">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-lime-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
                <div className="relative flex items-center gap-2 px-4 py-1.5 glass-effect rounded-full border border-green-500/50 shadow-[0_8px_30px_rgba(34,197,94,0.35)] bg-slate-900/80 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-bold tracking-wider text-green-400 uppercase whitespace-nowrap">{t.badge}</span>
                </div>
              </div>

              <div className="flex items-center flex-wrap gap-4 mt-1">
                <span className="text-lg md:text-xl font-semibold text-gray-400">{t.role1}</span>
                <span className="h-5 w-px bg-gray-700 hidden sm:block"></span>
                <span className="text-lg md:text-xl font-bold text-accent-cyan">{t.role2}</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="w-full pr-0 md:pr-4">
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                {t.description}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex items-center flex-wrap gap-4">
              <Link
                href="/projects"
                className="btn-primary"
                style={{ fontSize: "0.85rem", padding: "8px 20px" }}
              >
                {t.ctaProjects}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </Link>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline"
                style={{ fontSize: "0.85rem", padding: "8px 20px" }}
              >
                {t.ctaContact}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side: Architecture Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex justify-center items-center w-full mt-8 lg:mt-12"
          >
            <div className="transform scale-[0.6] min-[400px]:scale-75 sm:scale-90 lg:scale-[0.88] origin-center">
              <ArchitectureViz />
            </div>
          </motion.div>
        </div>

        {/* Divider / Transition Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mt-24 md:mt-32"
        />

        {/* Bottom Section: Impact Ribbon & Stats Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
          style={{ marginTop: "80px" }}
        >
          {/* Stats Cards with impact labels above each */}
          <div className="w-full">
            <HeroStats />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
