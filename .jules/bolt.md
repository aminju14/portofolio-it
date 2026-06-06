## 2025-06-06 - Offload high-quantity particle animations to CSS
**Learning:** Using JS-driven animation libraries like Framer Motion (`<motion.div>`) for high quantities of elements (e.g. 100+ stars) causes significant main-thread overhead and cascading re-renders. This project's hero background was dropping frames due to this pattern.
**Action:** Always prefer GPU-accelerated CSS keyframes and standard `<div>` elements with custom CSS variables (`--duration`, `--delay`) for high-quantity particle or background effects to ensure a smooth, off-thread animation loop.
