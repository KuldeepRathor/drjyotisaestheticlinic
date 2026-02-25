/**
 * Global Color Tokens — Dr Jyoti's Aesthetic Clinic
 *
 * This is the **single source of truth** for all colors used across the site.
 * To change the look of the entire website, edit values here only.
 *
 * Palette:
 *   Primary   → Shades of White  (backgrounds, foreground text on dark)
 *   Secondary → Shades of Black  (page/section backgrounds)
 *   Tertiary  → Shades of #CAB482 (gold accent — buttons, dividers, icons)
 */

export const colors = {
    // ─── PRIMARY: Shades of White ──────────────────────────────────────────────
    primary: "#FAFAFA",         // Lightest off-white (main body text on dark bg)
    primaryLight: "#FFFFFF",    // Pure white
    primaryDark: "#F0EDE8",     // Warm off-white tint
    primaryFaint: "#F5F5F5",    // Slightly off-white for headings

    // ─── SECONDARY: Shades of Black ────────────────────────────────────────────
    secondary: "#0D0D0D",       // Deepest black (main page background)
    secondaryDark: "#111111",   // Section-level background
    secondaryCard: "#161616",   // Card / surface background
    secondarySubtle: "#1C1C1C", // Subtle dark panel

    // ─── TERTIARY: Shades of #CAB482 (Gold) ────────────────────────────────────
    tertiary: "#CAB482",        // Main gold accent
    tertiaryLight: "#E8D4A8",   // Light gold (gradient highlight)
    tertiaryDark: "#9A7A2E",    // Deep gold (hover states)

    // ─── MUTED / SUPPORTING TEXT ───────────────────────────────────────────────
    textMuted: "#A0A0A0",       // Muted body text on dark background
    textSubtle: "#808080",      // Subtle secondary text
    textFaint: "#707070",       // Faint descriptive text
    textVeryFaint: "#505050",   // Copyright / footer micro text

    // ─── GRADIENTS (as inline-style compatible strings) ────────────────────────
    gradientTertiary: "linear-gradient(135deg, #CAB482 0%, #E8D4A8 50%, #CAB482 100%)",
    gradientTertiaryReverse: "linear-gradient(135deg, #E8D4A8 0%, #CAB482 50%, #E8D4A8 100%)",
    gradientDividerH: "linear-gradient(90deg, transparent, #CAB482, transparent)",
    gradientDividerL: "linear-gradient(90deg, transparent, #CAB482)",
    gradientDividerR: "linear-gradient(90deg, #CAB482, transparent)",

    // ─── BORDERS & OVERLAYS ────────────────────────────────────────────────────
    borderTertiary40: "rgba(202,180,130,0.4)",
    borderTertiary30: "rgba(202,180,130,0.3)",
    borderTertiary25: "rgba(202,180,130,0.25)",
    borderTertiary20: "rgba(202,180,130,0.2)",
    borderTertiary15: "rgba(202,180,130,0.15)",
    borderTertiary12: "rgba(202,180,130,0.12)",
    borderTertiary08: "rgba(202,180,130,0.08)",

    // ─── GLOWS & BACKGROUNDS ───────────────────────────────────────────────────
    glowTertiary13: "rgba(202,180,130,0.13)",
    glowTertiary12: "rgba(202,180,130,0.12)",
    glowTertiary10: "rgba(202,180,130,0.10)",
    glowTertiary08: "rgba(202,180,130,0.08)",
    bgTertiary15: "rgba(202,180,130,0.15)",
} as const;

export type ColorKey = keyof typeof colors;
