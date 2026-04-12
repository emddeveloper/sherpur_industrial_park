# Design System Specification: Industrial Precision

## 1. Overview & Creative North Star: "The Architectural Blueprint"
This design system is built to evoke the same sense of permanence, precision, and monumental scale found in high-end industrial architecture. We are moving away from the "generic corporate portal" and toward an **Editorial Industrial** aesthetic. 

**Creative North Star: The Architectural Blueprint.**
Like a master architect’s plan, the UI should feel intentional, structured, and authoritative. We achieve this through "The Power of the Void"—using expansive white space and rigid typography scales to create luxury. We break the template look by using **intentional asymmetry**: large-scale display type often sits "off-center" or overlaps subtle tonal containers to create a sense of movement and modern engineering.

---

## 2. Color Strategy & Tonal Layering
The palette is grounded in the deep authority of `primary` (#002046) and the technical clarity of `secondary` (#53606e). 

### The "No-Line" Rule
To maintain a premium feel, **1px solid borders are prohibited for sectioning.** Boundaries must be defined solely through background color shifts. 
*   *Implementation:* A section using `surface-container-low` (#f3f4f5) sitting directly on a `surface` (#f8f9fa) background provides enough contrast for the eye to perceive a boundary without the "cheapness" of a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to define importance:
*   **Level 0 (Background):** `surface` (#f8f9fa) – The foundation.
*   **Level 1 (Sections):** `surface-container` (#edeeef) – Large content blocks.
*   **Level 2 (Cards/Modules):** `surface-container-lowest` (#ffffff) – Used to "lift" key information from the grey background.

### The "Glass & Gradient" Rule
Flat colors can feel static. To inject "soul":
*   **Glassmorphism:** For floating navigation or overlays, use `surface` at 80% opacity with a `20px backdrop-blur`. This allows the industrial photography underneath to bleed through softly.
*   **Signature Textures:** For Hero sections, use a subtle linear gradient from `primary` (#002046) to `primary_container` (#1b365d) at a 135-degree angle. This mimics the sheen of high-grade steel.

---

## 3. Typography: The Voice of Authority
We use a dual-font system to balance industrial strength with modern readability.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision. Use `display-lg` (3.5rem) for hero statements. Tighten letter-spacing by -2% for headlines to create a "locked-in" professional look.
*   **Body & UI (Inter):** The workhorse. Inter provides maximum legibility for technical specifications and data.
*   **Hierarchy as Brand:** Use extreme scale contrast. Pair a `display-md` headline with a `label-md` uppercase sub-header in `on_tertiary_container` (vibrant orange) to create a sophisticated, high-trust editorial layout.

---

## 4. Elevation & Depth
We reject traditional drop shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking." Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f3f4f5) background. This creates a natural, soft lift.
*   **Ambient Shadows:** If a floating effect is required (e.g., a modal), use a shadow tinted with `on-surface`: `0px 20px 40px rgba(25, 28, 29, 0.06)`. It should feel like ambient light hitting a surface, not a digital effect.
*   **The "Ghost Border" Fallback:** If a divider is essential for accessibility, use the `outline-variant` token (#c4c6cf) at **15% opacity**. Never use a 100% opaque border.

---

## 5. Component Guidelines

### Buttons: The Kinetic Engine
*   **Primary:** Uses a gradient of `on_tertiary_container` (#ff7627). It is the "Action Orange." Use `lg` (0.5rem) roundedness.
*   **Secondary:** Ghost style. No background, only a `Ghost Border` (15% opacity `outline`) with `primary` text.
*   **Haptics:** On hover, the primary button should shift 2px upward with a subtle ambient shadow, signaling "industrial readiness."

### Input Fields: Precision Entry
*   **Style:** No background fill. Only a bottom border (2px) using `outline-variant`. 
*   **Focus State:** The bottom border transforms into `primary` (#002046). Labels should use `label-md` and sit above the field in `secondary` color.

### Cards & Industrial Lists
*   **The "No Divider" Rule:** Forbid the use of line dividers. Separate list items using `16px` of vertical white space or by alternating background colors between `surface` and `surface-container-low`.
*   **Property Cards:** Use `surface-container-lowest` with a `xl` (0.75rem) corner radius. Imagery should be flush to the top with no internal padding.

### Additional Components: The "Blueprint" Map
*   **Interactive Overlays:** For plot availability, use high-contrast tooltips (`inverse_surface` background) with `label-sm` typography to mimic technical architectural callouts.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts where text blocks overlap image containers by 20-40px.
*   **Do** use `tertiary_container` (vibrant orange) sparingly—only for the final point of conversion.
*   **Do** prioritize "Breathing Room." If a section feels crowded, double the padding.

### Don’t:
*   **Don’t** use pure black (#000000). Always use `primary` or `on_surface` for dark tones to maintain the "Steel & Blue" industrial palette.
*   **Don’t** use "Standard" shadows. If you can clearly see the shadow's edge, it is too dark.
*   **Don’t** use icons with rounded, bubbly ends. Use sharp, stroke-based icons (1.5px weight) to match the industrial aesthetic.

---
**Director's Note:** *This system is about the "unspoken" quality of construction. Every pixel must feel like it was placed with a torque wrench—tight, intentional, and built to last.*