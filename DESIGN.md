---
name: Alpine Vernacular
colors:
  surface: '#121412'
  surface-dim: '#121412'
  surface-bright: '#383937'
  surface-container-lowest: '#0d0e0d'
  surface-container-low: '#1b1c1a'
  surface-container: '#1f201e'
  surface-container-high: '#292a28'
  surface-container-highest: '#343533'
  on-surface: '#e3e2df'
  on-surface-variant: '#c3c8c0'
  inverse-surface: '#e3e2df'
  inverse-on-surface: '#30312f'
  outline: '#8d928b'
  outline-variant: '#434842'
  surface-tint: '#b4cdb6'
  primary: '#b4cdb6'
  on-primary: '#203525'
  primary-container: '#1a2f1f'
  on-primary-container: '#809882'
  inverse-primary: '#4d6451'
  secondary: '#abd0af'
  on-secondary: '#173720'
  secondary-container: '#2e4e35'
  on-secondary-container: '#9abe9e'
  tertiary: '#f0bd8b'
  on-tertiary: '#482904'
  tertiary-container: '#412300'
  on-tertiary-container: '#b6885b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d0e9d1'
  primary-fixed-dim: '#b4cdb6'
  on-primary-fixed: '#0b2011'
  on-primary-fixed-variant: '#364c3a'
  secondary-fixed: '#c7ecca'
  secondary-fixed-dim: '#abd0af'
  on-secondary-fixed: '#02210c'
  on-secondary-fixed-variant: '#2e4e35'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#f0bd8b'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#623f18'
  background: '#121412'
  on-background: '#e3e2df'
  surface-variant: '#343533'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '900'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '900'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '300'
    lineHeight: 24px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

This design system is built for a premium, editorial exploration of mountain ecology and sustainable agriculture. The aesthetic blends **Organic Minimalism** with **Glassmorphism**, creating a digital environment that feels as structured as a topographical map yet as fluid as a natural landscape. 

The target audience consists of researchers, eco-conscious consumers, and outdoor enthusiasts who value high-fidelity data visualization. The UI should evoke a sense of "quiet prestige"—grounded, atmospheric, and technically precise. To achieve this, the system utilizes deep tonal layers, subtle film grain textures to mimic high-end print media, and expansive whitespace to allow complex infographic data to breathe.

## Colors

The palette is rooted in a "Deep Forest" dark mode. The primary background is a near-black green, providing a high-contrast foundation for the cream-colored typography. 

- **Primary & Secondary:** Used for structural elements and deep-layered containers.
- **Accents:** Amber, Terracotta, and Ochre are reserved for data highlights, call-to-actions, and infographic nodes, representing the earth and harvest.
- **Sky Blue:** Used exclusively for atmospheric highlights or water-related data points.
- **Gradients:** Use linear gradients (top-to-bottom) transitioning from `#1A2F1F` to `#0D160E` for page sections. For decorative "Sunrise" accents, use a radial blur of `#D4A373` at 10% opacity in the upper corners.

## Typography

The typographic strategy relies on **extreme weight contrast**. 

- **Headings:** Use Montserrat at its heaviest weights (700-900). For large displays, use tight letter spacing to create a "blocky," authoritative feel reminiscent of classic environmental journals.
- **Body:** Use Inter with a Light (300) weight. High line-height (1.6x - 1.8x) is essential to maintain legibility against the dark, textured background.
- **Labels:** Use uppercase Inter with wide tracking for metadata, navigational breadcrumbs, and small infographic captions.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous outer margins to simulate an editorial spread. 

- **Desktop:** 12-column grid with 24px gutters. Content should be centered with a max-width of 1280px.
- **Mobile:** 4-column grid. Margins shrink to 20px, and section vertical spacing reduces to 64px.
- **Rhythm:** Use a base-8 spacing scale. Components like cards and sections should favor large vertical gaps (`section-gap`) to ensure the "organic" and "airy" brand feeling is preserved.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows.

1.  **Level 0 (Base):** Deep forest background with a subtle grain texture overlay (3% opacity).
2.  **Level 1 (Cards):** Surfaces use the Secondary Green (`#3A5A40`) at 40% opacity with a `24px` backdrop blur. A 1px border of white at 10% opacity provides definition.
3.  **Level 2 (Navigation/Floating):** Use a more pronounced glass effect with 60% opacity and a subtle inner glow (`box-shadow: inset 0 1px 1px rgba(255,255,255,0.1)`).
4.  **Interactive Glows:** Instead of shadows, hovered elements should emit a soft, localized outer glow using the primary accent color (`#D4A373`) with a 40px blur at 15% opacity.

## Shapes

The shape language is ultra-rounded and organic. 

- **Cards:** Apply `rounded-3xl` (1.5rem / 24px) to all main content containers.
- **Buttons & Badges:** Use the "Pill" (full border-radius) approach.
- **Icons:** Icons should be enclosed in circular containers when used within buttons or as standalone infographic markers. 
- **Containers:** Avoid sharp corners entirely to maintain the natural, non-industrial aesthetic.

## Components

### Buttons
- **Primary:** Pill-shaped, Amber (`#D4A373`) background, dark text. Includes a leading circular icon container with a slightly darker tint.
- **Ghost:** Pill-shaped, 1px cream border, 10% white fill on hover.

### Cards
- Use `rounded-3xl` corners.
- Background: Glassmorphic blur (24px) with a subtle grain texture.
- Border: 1px stroke using a gradient of `rgba(255,255,255,0.1)` to `transparent`.

### Navigation Bar
- Positioned at the top, floating with a 16px margin from the screen edges.
- Full glassmorphism effect: high blur, semi-transparent base, pill-shaped silhouette.

### Input Fields
- Underlined style or softly rounded glass containers. 
- Focus state: The bottom border transitions to Ochre (`#E9C46A`) with a soft outer glow.

### Chips & Badges
- Small pill shapes with glass backgrounds.
- Used for category tags like "High Altitude," "Organic," or "Sustainable."

### Infographic Nodes
- Circular points with pulsing radial gradients.
- Use the Accent colors (Terracotta/Ochre) to differentiate data types.