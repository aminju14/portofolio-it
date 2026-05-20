"use client";

import type { CSSProperties, ElementType } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Cpu, Database, Server, Smartphone, GitBranch } from "lucide-react";

// ── Reusable node box ─────────────────────────────────────────────────────
function NodeBox({
  icon: Icon,
  label,
  color,
  style,
}: {
  icon: ElementType;
  label: string;
  color: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(4, 10, 32, 0.92)",
        border: `1px solid ${color}55`,
        borderRadius: 10,
        padding: "7px 14px",
        backdropFilter: "blur(14px)",
        boxShadow: `0 4px 18px ${color}18, inset 0 1px 0 rgba(255,255,255,0.04)`,
        zIndex: 2,
        whiteSpace: "nowrap" as const,
        ...style,
      }}
    >
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: 7,
          background: `${color}18`,
          border: `1px solid ${color}50`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={13} color={color} />
      </div>
      <span
        style={{
          fontSize: "0.74rem",
          color: "#dde6f5",
          fontWeight: 600,
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Animated dot along a line ─────────────────────────────────────────────
function FlowDot({
  x1, y1, x2, y2,
  color = "#3b82f6",
  delay = 0,
  duration = 1.8,
}: {
  x1: number; y1: number; x2: number; y2: number;
  color?: string; delay?: number; duration?: number;
}) {
  return (
    <motion.circle
      r={3}
      fill={color}
      animate={{ cx: [x1, x2], cy: [y1, y2], opacity: [0, 1, 0] }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay, repeatDelay: 1 }}
    />
  );
}

// ── Main component ────────────────────────────────────────────────────────
export default function ArchitectureViz() {
  /* ── Canvas ── */
  const W = 490;
  const H = 300;

  /* ── Profile avatar ── */
  const av = { cx: 58, cy: 150, r: 52 };

  /* ── Tier 1: Client layer ── */
  const mw  = { left: 152, top:  48, cy:  68 };   // Mobile/Web App
  const ci  = { left: 152, top: 214, cy: 234 };   // CI/CD Pipeline

  /* ── Tier 2: Gateway ── */
  const ag  = { left: 275, top: 127, cy: 147 };   // API Gateway

  /* ── Tier 3: Services + Data ── */
  const ms  = { left: 375, top:  55, cy:  75 };   // Microservices
  const db  = { left: 375, top: 205, cy: 225 };   // Database  (Server icon)

  /* ── Node right-edges for line starts (approx box widths) ── */
  const mwRight = mw.left + 150;  // "Mobile / Web App" ≈ 150px
  const ciRight = ci.left + 125;  // "CI/CD Pipeline"   ≈ 125px
  const agRight = ag.left + 118;  // "API Gateway"      ≈ 118px

  /* ── Line helper (dashed) ── */
  const LINE = (
    x1: number, y1: number,
    x2: number, y2: number,
    color: string,
    markerId: string
  ) => (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color}
      strokeWidth="1.5"
      strokeDasharray="5 4"
      markerEnd={`url(#${markerId})`}
    />
  );

  return (
    <div
      className="animate-float-hero"
      style={{ position: "relative", width: W, height: H, maxWidth: "100%" }}
    >

      {/* ── Ambient background glow ── */}
      <div style={{
        position: "absolute",
        inset: "8px 20px",
        borderRadius: "44%",
        border: "1px dashed rgba(59,130,246,0.08)",
        background:
          "radial-gradient(ellipse at 45% 50%, rgba(12,28,88,0.18) 0%, transparent 68%)",
        pointerEvents: "none",
      }} />

      {/* ── SVG: lines + animated dots ── */}
      <svg
        style={{ position: "absolute", inset: 0, overflow: "visible", zIndex: 1 }}
        width={W}
        height={H}
      >
        <defs>
          <marker id="arr-blue" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M0 0L7 3.5L0 7z" fill="rgba(59,130,246,0.7)" />
          </marker>
          <marker id="arr-cyan" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M0 0L7 3.5L0 7z" fill="rgba(34,211,238,0.7)" />
          </marker>
          <marker id="arr-purple" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M0 0L7 3.5L0 7z" fill="rgba(167,139,250,0.7)" />
          </marker>
        </defs>

        {/* 1. Avatar → Mobile/Web App (diagonal up-right) */}
        {LINE(av.cx + av.r - 2, av.cy - 24, mw.left - 4, mw.cy, "rgba(59,130,246,0.38)", "arr-blue")}

        {/* 2. Avatar → CI/CD (diagonal down-right) */}
        {LINE(av.cx + av.r - 2, av.cy + 24, ci.left - 4, ci.cy, "rgba(59,130,246,0.30)", "arr-blue")}

        {/* 3. Mobile/Web App → API Gateway */}
        {LINE(mwRight + 2, mw.cy, ag.left - 4, ag.cy - 14, "rgba(34,211,238,0.42)", "arr-cyan")}

        {/* 4. CI/CD → API Gateway */}
        {LINE(ciRight + 2, ci.cy, ag.left - 4, ag.cy + 14, "rgba(59,130,246,0.32)", "arr-blue")}

        {/* 5. API Gateway → Microservices */}
        {LINE(agRight + 2, ag.cy - 10, ms.left - 4, ms.cy, "rgba(34,211,238,0.42)", "arr-cyan")}

        {/* 6. API Gateway → Database */}
        {LINE(agRight + 2, ag.cy + 10, db.left - 4, db.cy, "rgba(167,139,250,0.38)", "arr-purple")}

        {/* ── Animated flow dots ── */}
        <FlowDot x1={av.cx + av.r} y1={av.cy - 24} x2={mw.left} y2={mw.cy} color="#3b82f6" delay={0} duration={1.8} />
        <FlowDot x1={av.cx + av.r} y1={av.cy + 24} x2={ci.left} y2={ci.cy} color="#3b82f6" delay={0.6} duration={1.8} />
        <FlowDot x1={mwRight} y1={mw.cy} x2={ag.left} y2={ag.cy - 14} color="#22d3ee" delay={1.0} duration={1.5} />
        <FlowDot x1={ciRight} y1={ci.cy} x2={ag.left} y2={ag.cy + 14} color="#3b82f6" delay={1.4} duration={1.5} />
        <FlowDot x1={agRight} y1={ag.cy - 10} x2={ms.left} y2={ms.cy} color="#22d3ee" delay={2.0} duration={1.3} />
        <FlowDot x1={agRight} y1={ag.cy + 10} x2={db.left} y2={db.cy} color="#a78bfa" delay={2.4} duration={1.3} />
      </svg>

      {/* ── Profile photo avatar ── */}
      <motion.div
        whileHover={{ scale: 1.06 }}
        style={{
          position: "absolute",
          left: av.cx - av.r,
          top: av.cy - av.r,
          width: av.r * 2,
          height: av.r * 2,
          borderRadius: "50%",
          overflow: "hidden",
          border: "2.5px solid rgba(29,104,242,0.6)",
          boxShadow:
            "0 0 0 8px rgba(29,104,242,0.07), 0 0 28px rgba(29,104,242,0.55), 0 0 70px rgba(29,104,242,0.18)",
          zIndex: 3,
          cursor: "default",
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/profile.png"
          alt="Profile"
          width={av.r * 2}
          height={av.r * 2}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          priority
        />
      </motion.div>

      {/* ── Tier 1: Client Layer ── */}
      <NodeBox icon={Smartphone}  label="Mobile / Web App" color="#3b82f6" style={{ left: mw.left, top: mw.top }} />
      <NodeBox icon={GitBranch}   label="CI/CD Pipeline"   color="#3b82f6" style={{ left: ci.left, top: ci.top }} />

      {/* ── Tier 2: Gateway ── */}
      <NodeBox icon={Globe} label="API Gateway" color="#22d3ee" style={{ left: ag.left, top: ag.top }} />

      {/* ── Tier 3: Services & Data ── */}
      <NodeBox icon={Cpu}      label="Microservices" color="#22d3ee" style={{ left: ms.left, top: ms.top }} />
      <NodeBox icon={Database} label="Database"      color="#a78bfa" style={{ left: db.left, top: db.top }} />
    </div>
  );
}
