## 2026-06-08 - Native Img Tags Missing Optimization Attributes
**Learning:** The codebase relies heavily on standard native HTML `<img>` tags instead of Next.js `<Image>` in several areas, but these native tags lack crucial HTML5 optimization attributes out of the box, potentially leading to slower page loads and unnecessary bandwidth usage.
**Action:** Add `loading="lazy"` and `decoding="async"` to below-the-fold `<img>` tags, and `fetchPriority="high"` to above-the-fold `<img>` tags to improve Core Web Vitals (LCP) when Next.js `<Image>` isn't used.
