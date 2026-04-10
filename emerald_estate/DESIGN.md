# Design System Document: The Pastoral Modernist

## 1. Overview & Creative North Star
**Creative North Star: The Digital Agrarian**
This design system rejects the "rustic" tropes of traditional agriculture in favor of a high-end, editorial showcase. The goal is to present the farm not just as a place of labor, but as a site of precision, luxury, and organic beauty. 

To break the "template" look, we utilize **Asymmetric Bento Layouts**. Unlike a rigid grid, containers should vary in aspect ratio and vertical alignment, creating a rhythmic flow that mimics the organic yet organized rows of a cultivated field. We prioritize "Breathing Room" over density; every element must feel curated, not crowded.

## 2. Colors
Our palette balances the sterile precision of a gallery with the vibrant life of the Emerald accent.

*   **Primary (`#006c49`) & Primary Container (`#10b981`):** These represent the lifeblood of the system. Use the vibrant Emerald (`#10b981`) for interactive moments and the deeper Forest (`#006c49`) for high-contrast grounding.
*   **Neutral Palette:** Transitions from `surface` (`#f9f9ff`) to `surface_container_lowest` (`#ffffff`). The goal is a "White-on-White" aesthetic that feels expensive and clean.
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for structural sectioning. Instead of "boxing" content, use background shifts. A `surface_container_low` section should sit against a `surface` background to define its territory.
*   **Surface Hierarchy & Nesting:** Treat the UI as stacked sheets of fine vellum. 
    *   *Base:* `surface`
    *   *Section:* `surface_container_low`
    *   *Card:* `surface_container_lowest` (Pure White)
*   **The "Glass & Gradient" Rule:** Floating navigation or high-end product overlays must use **Glassmorphism**. Apply `surface` at 70% opacity with a `24px` backdrop blur. For main Hero CTAs, use a subtle linear gradient from `primary` to `primary_container` at a 135-degree angle to add "soul" and depth.

## 3. Typography
The interplay between **Manrope** and **Inter** creates an "Editorial Tech" vibe.

*   **Display & Headlines (Manrope):** Chosen for its geometric modernism and slightly wider stance. Use `display-lg` for hero statements with tight tracking (-0.02em). This is the "voice" of the farm.
*   **Body & Labels (Inter):** The workhorse. Inter provides maximum legibility for technical farm data (pH levels, harvest dates, etc.). 
*   **Hierarchy as Identity:** Use a high-contrast scale. A `display-md` headline should be paired with a `body-md` description to create a clear visual "hook" followed by digestible information.

## 4. Elevation & Depth
In this design system, shadows and layers mimic natural sunlight hitting architectural surfaces.

*   **The Layering Principle:** Depth is achieved by "stacking." Place a `surface_container_lowest` card on a `surface_container_low` background. The slight shift in brightness creates a soft, natural lift.
*   **Ambient Shadows:** For the Bento cards, use an extra-diffused shadow. 
    *   *Values:* `0px 20px 40px`
    *   *Color:* `on_surface` (Charcoal) at **4% opacity**. It should be felt, not seen.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., in a high-glare environment), use `outline_variant` at **15% opacity**. Never use 100% opaque borders.
*   **Glassmorphism & Depth:** Use semi-transparent layers for persistent headers. This allows the lush emerald accents and imagery to bleed through as the user scrolls, maintaining a sense of place.

## 5. Components
### Buttons
*   **Primary:** `primary` fill with `on_primary` text. Radius: `md` (0.75rem). High-end feel: use a subtle `0px 4px 12px` shadow matching the button color at 20% opacity.
*   **Secondary:** `outline` border (at 20% opacity) with `primary` text. No fill.
*   **Tertiary:** Pure text with a 2px underline appearing only on hover.

### Bento Cards
*   **Styling:** Background `surface_container_lowest`, Radius `xl` (1.5rem), Ambient Shadow.
*   **Rule:** Forbid divider lines within cards. Use `spacing-lg` to separate image from text.

### Inputs & Fields
*   **Style:** Minimalist. No bottom line or box fill. Use `surface_container_low` as the field background with a `md` radius. 
*   **Focus State:** A 2px `primary_container` border.

### Interactive Chips
*   **Selection:** Use `secondary_container` for the background and `on_secondary_container` for the text. Radius: `full`.

### Signature Component: The "Growth Metric" List
*   Instead of standard lists, use a horizontal scroll of cards where the background is a soft `surface_variant` with an `emerald` sparkline. No dividers—only white space.

## 6. Do’s and Don’ts
### Do:
*   **Do** use asymmetrical margins. A hero image can bleed off the right side of the screen while text stays aligned to the left grid.
*   **Do** use Manrope for all numerical data in hero sections to make numbers feel like design elements.
*   **Do** prioritize high-quality, desaturated photography with pops of natural green.

### Don’t:
*   **Don't** use 1px solid `#e5e7eb` borders for layout separation. Use the Tonal Layering Principle.
*   **Don't** use standard "Drop Shadows." If the shadow looks like a shadow, it’s too dark. It should look like "ambient occlusion."
*   **Don't** use the Emerald accent for everything. It is a spice, not the main dish. Save it for high-intent actions (Buy, Subscribe, View Growth).