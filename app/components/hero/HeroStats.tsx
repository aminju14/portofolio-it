"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Clock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function HeroStats() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const ts = t.stats;

  const columns = [
    {
      impact: { icon: "🚀", text: t.impact1, highlight: "20+" },
      stat: { label: ts.experience, value: "9+", icon: Clock, color: "var(--accent-blue)" },
    },
    {
      impact: { icon: "⚡", text: t.impact2, highlight: "70%" },
      stat: { label: ts.projects, value: "20+", icon: CheckCircle, color: "var(--accent-cyan)" },
    },
    {
      impact: { icon: "🤖", text: t.impact3, highlight: "Expert" },
      stat: { label: ts.satisfaction, value: "95%", icon: Award, color: "var(--accent-purple)" },
    },
  ];

  return (
    <div className="hero-stats-grid grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-auto relative z-10">
      {columns.map(({ impact, stat }, i) => {
        const parts = impact.text.split(impact.highlight);
        const Icon = stat.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            {/* Impact Label above card */}
            <div className="flex items-center gap-2">
              <span className="text-base">{impact.icon}</span>
              <p className="text-sm font-medium text-gray-100 tracking-wide">
                {parts.length === 2 ? (
                  <>
                    {parts[0]}
                    <span className="text-accent-cyan font-bold text-base">{impact.highlight}</span>
                    {parts[1]}
                  </>
                ) : (
                  <>
                    <span className="text-accent-cyan font-bold text-base">{impact.highlight}</span>{" "}
                    {impact.text.replace(impact.highlight, "").trim()}
                  </>
                )}
              </p>
            </div>

            {/* Stat Card */}
            <div className="glass-card p-6 flex flex-col items-center justify-center gap-4 group relative text-center w-full min-h-[180px]">
              {/* Subtle Glow Backdrop */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 blur-3xl pointer-events-none"
                style={{ backgroundColor: stat.color }}
              />

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center glass-effect border-2 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-black/20"
                style={{ borderColor: `${stat.color}33`, color: stat.color }}
              >
                <Icon size={20} strokeWidth={1.5} />
              </div>

              <div className="flex flex-col items-center gap-1">
                <motion.span
                  className="text-3xl md:text-4xl font-black text-white tracking-tighter"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.8 + i * 0.1 }}
                >
                  {stat.value}
                </motion.span>

                <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase whitespace-nowrap">
                  {stat.label}
                </span>
              </div>

              {/* Accent Line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-1/2 transition-all duration-500 rounded-full"
                style={{ backgroundColor: stat.color }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
