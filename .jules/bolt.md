## 2025-03-02 - Pure CSS Animations over JS-driven Animations

**Learning:** When rendering numerous animated background elements like stars (e.g. 100+ items), using `framer-motion`'s `motion.div` leads to high CPU usage because JS continuously recalculates properties for every element on every frame.
**Action:** Always replace heavy JS-driven animations for bulk static elements with pure CSS keyframes and hardware-accelerated properties (like `transform` and `opacity`) to drastically reduce main-thread workload and enhance frame rates.