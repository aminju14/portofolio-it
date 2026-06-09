## 2024-03-24 - Dynamic Image Domain Configuration
**Learning:** Converting standard `<img>` tags to Next.js `<Image>` components requires careful handling of dynamic images. If remote image URLs are not whitelisted in `next.config.ts`, Next.js will crash at runtime.
**Action:** When replacing `<img>` with `<Image>` for dynamically sourced or remote images without modifying `next.config.ts`, use `unoptimized={true}` to prevent crashes while still gaining responsive sizing features like `sizes` and `fill`.
