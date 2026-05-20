"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        width: "50px",
        height: "50px",
        borderRadius: "16px",
        background: "rgba(30, 41, 59, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(59, 130, 246, 0.3)",
        color: "#60a5fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 999,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: isVisible ? "auto" : "none",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 15px rgba(59, 130, 246, 0.2)",
      }}
      className="back-to-top-btn"
      aria-label="Back to Top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>

      <style jsx>{`
        .back-to-top-btn:hover {
          background: rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.6);
          color: #fff;
          transform: translateY(-5px) !important;
          boxShadow: 0 15px 30px -5px rgba(0, 0, 0, 0.4), 0 0 20px rgba(59, 130, 246, 0.4);
        }
        
        @media (max-width: 768px) {
          .back-to-top-btn {
            bottom: 20px;
            right: 20px;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </button>
  );
}
