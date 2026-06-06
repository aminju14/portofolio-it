"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function BackgroundEffect() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Space Gradient */}
      <div className="absolute inset-0 bg-space-gradient opacity-80" />

      {/* Nebula 1 */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent-blue/10 rounded-full blur-[120px] animate-nebula"
      />

      {/* Nebula 2 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-purple/10 rounded-full blur-[100px] animate-nebula"
        transition={{ delay: 2 }}
      />

      {/* Stars / Particles */}
      <StarField />

      {/* Light Streaks */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent animate-streak" />
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent animate-streak" style={{ animationDelay: "4s" }} />

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(5,8,22,1)]" />
    </div>
  );
}

// Memoized StarField to prevent re-renders, and using CSS animations instead of JS-based Framer Motion for better performance on 100+ elements
const StarField = React.memo(function StarField() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const starCount = 100;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 3, // random start delay
    }));
    setStars(newStars);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--duration": `${star.duration}s`,
            "--delay": `${star.delay}s`,
            "--opacity": 0.8,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
});
