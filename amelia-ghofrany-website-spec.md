# Amelia Ghofrany — Personal Brand Website

> **Purpose**: A single-page personal brand website for Amelia Ghofrany — investor, entrepreneur, strategic consultant, and coach. This site replaces ameliaghofrany.com.au and sits alongside her advisory business at compasspoint.vercel.app.
>
> **Inspiration**: [Janine Allis](https://www.janineallis.com.au/) (aspirational storytelling, strong personal hero), [Julie Fedele](https://www.juliefedele.com/) (editorial elegance, logo bar, coaching programs, warm tone).
>
> **Tone**: Classy, approachable, earthy. Warm and human — not corporate. Think luxury editorial meets grounded founder energy.

---

## Design System

### Colour Palette

```css
:root {
  /* ─── Base / Warm Neutrals ─── */
  --cream:          #FAF6F1;
  --cream-dark:     #F0EAE0;
  --warm-white:     #FFFDF9;
  --sand:           #E8DED1;
  --taupe:          #8C7B6B;
  --taupe-light:    #B5A898;

  /* ─── Gold Accents ─── */
  --gold:           #C4A265;
  --gold-light:     #D4B87A;
  --gold-dark:      #A68845;

  /* ─── Plum / Maroon (syncs with CompassPoint Advisory branding) ─── */
  --plum:           #6B2D5B;
  --plum-light:     #8A4178;
  --plum-dark:      #4A1E3E;

  /* ─── Warm Accent ─── */
  --terracotta:     #C17D5E;

  /* ─── Neutrals / Text ─── */
  --charcoal:       #2C2C2C;
  --charcoal-light: #4A4A4A;
  --text-primary:   #2C2C2C;
  --text-secondary: #5A5A5A;
  --text-light:     #8C8C8C;
}
```

### Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display / Headings | **Cormorant Garamond** | 300, 400, 500 italic | Elegant serif. Use italic for emphasis words like *purpose*, *impact* |
| Body / UI | **DM Sans** | 300, 400, 500 | Clean, warm sans-serif. Light weight (300) for body copy |
| Labels / Eyebrows | DM Sans | 500 | 0.75–0.85rem, uppercase, wide letter-spacing (0.15–0.25em), gold colour |

### Spacing Scale

- Section padding: `8rem` vertical (desktop), `5rem` (mobile)
- Max content width: `1100px`
- Grid gaps: `2rem` cards, `4–5rem` major layout grids

### Visual Texture & Atmosphere

- **Noise grain overlay**: Subtle SVG feTurbulence filter fixed over entire page at ~2.5% opacity
- **Cursor glow**: 300px radial gold gradient that follows cursor on desktop (pointer: fine only)
- **Radial gradients**: Soft gold and plum gradial blobs positioned behind hero and CTA sections for depth
- **Border accents**: 1px gold borders on image frames at ~30% opacity
- **Decorative rectangles**: Offset geometric frames behind images (gold outline, low opacity)

---

## Animations & Interactions (GSAP + ScrollTrigger)

### Global Setup

```
Install: gsap, @gsap/scrolltrigger, @gsap/scroll-to-plugin
Optional: Lenis for smooth scrolling
```

### Animation Inventory

| Element | Trigger | Animation | Easing |
|---------|---------|-----------|--------|
| Hero eyebrow | Page load (delay 0.3s) | Fade up from y:20 | power3.out |
| Hero title | Page load (staggered) | Fade up from y:30 | power3.out |
| Hero subtitle | Page load (staggered) | Fade up from y:20 | power3.out |
| Hero CTA buttons | Page load (staggered) | Fade up from y:20 | power3.out |
| Hero image | Page load (staggered) | Fade in from x:40 | power3.out |
| `.reveal` elements | ScrollTrigger (top 88%) | Fade up from y:40, opacity 0→1 | power3.out, 0.9s |
| `.reveal-left` | ScrollTrigger (top 88%) | Slide in from x:-40 | power3.out, 1s |
| `.reveal-right` | ScrollTrigger (top 88%) | Slide in from x:40 | power3.out, 1s |
| `.reveal-scale` | ScrollTrigger (top 88%) | Scale from 0.95→1, opacity 0→1 | power3.out, 0.8s |
| Service cards | ScrollTrigger (top 90%) | Staggered fade up, delay i×0.1s | power3.out |
| Stat numbers | ScrollTrigger (top 90%, once) | Counter from 0 → target value | power2.out, 2s |
| Logo marquee | CSS animation | Continuous translateX scroll, 35s linear infinite, pauses on hover | linear |
| Hero decorative box | ScrollTrigger scrub | Parallax y:80, slight rotation | none (scrub) |
| Nav background | Scroll > 80px | Blur backdrop + shadow on scroll | CSS transition 0.5s |
| Button hover | Hover | Plum colour sweep via ::before translateX | cubic-bezier(0.22,1,0.36,1) |
| Nav link underline | Hover | Gold underline width 0→100% | cubic-bezier(0.22,1,0.36,1) |
| Service card hover | Hover | translateY(-4px), border glow, plum gradient overlay | 0.5s |
| Image frames | Hover | Subtle scale(1.02) on the image inside | 0.6s ease |

### Smooth Scrolling (Optional Enhancement)

```js
// Lenis smooth scroll synced with GSAP
import Lenis from 'lenis';
const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 1.4 });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

---

## Site Structure & Content

---

### 1. NAVIGATION (Fixed)

```
Logo (left):        "Amelia Ghofrany" — Cormorant Garamond, 500 weight
Links (right):      About | Services | Coaching | [Work With Me] (CTA button)
Behaviour:          Transparent on load → frosted cream backdrop-blur on scroll
Mobile:             Hamburger → full-screen overlay menu
```

---

### 2. HERO SECTION

**Layout**: Two-column grid (text left, image right). Full viewport height. Warm radial gradient blobs in background.

#### Left Column — Text

**Eyebrow**:
```
Investor · Entrepreneur · Strategic Consultant · Coach
```

**Headline** (Cormorant Garamond, 300 weight, clamp 2.8rem–4.5rem):
```
Clarity, courage
& the confidence
to lead with *purpose.*
```
> The word "purpose" should be italic and in plum colour.

**Subtitle** (DM Sans 300, 1.1rem):
```
I partner with ambitious leaders and businesses to navigate complexity,
unlock growth, and create lasting impact — grounded in 20+ years of
enterprise experience and a belief in the power of diverse perspectives.
```

**CTA Buttons**:
- Primary: `Book a Discovery Call` → links to https://calendly.com/ameliaghofrany
- Secondary: `Explore Services →` (arrow animates right on hover)

#### Right Column — Image

```
┌─────────────────────────────┐
│                             │
│    [IMAGE PLACEHOLDER]      │
│                             │
│    Professional portrait    │
│    of Amelia                │
│    Aspect ratio: 3:4        │
│    Style: warm, natural     │
│    light, confident but     │
│    approachable. Think      │
│    editorial magazine       │
│    portrait.                │
│                             │
│    Filename:                │
│    hero-portrait.jpg        │
│                             │
└─────────────────────────────┘
        ┌──────────┐
        │ Decorative│  ← Gold outline rectangle,
        │ offset    │     offset top-right, low opacity
        └──────────┘
```

---

### 3. ABOUT SECTION

**Background**: `--warm-white`
**Layout**: Two-column grid (left: heading + quote + stats, right: body copy)

#### Left Column

**Label**: `About Amelia` (gold, uppercase, spaced)

**Heading** (Cormorant Garamond):
```
Enterprise rigour.
Founder energy.
*Human-first* leadership.
```
> "Human-first" in italic plum.

**Pull Quote** (cream background, gold left border):
```
"Diverse perspectives don't just matter — they're the spark for
creativity, smarter decisions, and long-term success."
```

**Stats Grid** (2×2 below the quote):

| Number | Label |
|--------|-------|
| 20+ | Years Experience |
| 26 | Countries Explored |
| 3 | Continents Lived On |
| 6 | Continents Visited |

> Numbers animate up (counter) when scrolled into view. Numbers are Cormorant Garamond, plum colour.

#### Right Column — Body Copy

```
I've spent over 20 years helping organisations lead through complex
change — bringing people, processes and technology together to deliver
sustainable growth, exceptional customer and employee experiences,
and meaningful impact.

Today, I partner with businesses of all sizes — from ambitious startups
to large enterprises — to help them transform and scale with purpose.
Through CompassPoint Advisory, I offer practical, forward-thinking
strategies grounded in real-world experience.

Whether I'm consulting, investing, coaching or mentoring — I bring
curiosity, courage and a strong belief in inclusive leadership.
I've built businesses from scratch, advised executive teams, and led
major digital transformation programs across industries.

Outside of work, I'm a curious traveller and global citizen. I've lived
on three continents and travelled to 26 countries across six — just
Antarctica to go.
```

> "CompassPoint Advisory" is a link to https://compasspoint.vercel.app/ styled in plum with gold underline.

---

### 4. IMAGE FEATURE STRIP — "My World"

**Layout**: Full-width horizontal strip of lifestyle/experience images. Three images side by side with slight overlap or staggered vertical offset for visual interest.

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│              │  │              │  │              │
│ [IMAGE]      │  │ [IMAGE]      │  │ [IMAGE]      │
│              │  │              │  │              │
│ Amelia       │  │ Speaking at  │  │ Travel /     │
│ working /    │  │ an event or  │  │ lifestyle    │
│ consulting   │  │ conference   │  │ photo        │
│ candid       │  │              │  │              │
│              │  │              │  │              │
│ lifestyle-   │  │ speaking-    │  │ travel-      │
│ consulting   │  │ event.jpg    │  │ lifestyle    │
│ .jpg         │  │              │  │ .jpg         │
└──────────────┘  └──────────────┘  └──────────────┘
```

> These should have a subtle parallax scroll effect (different speeds). Consider Cormorant Garamond caption text below each.

**Captions** (optional, in taupe, italic):
```
Image 1: "Building what matters."
Image 2: "Sharing the stage."
Image 3: "Exploring, always."
```

---

### 5. COMPANIES / LOGO MARQUEE

**Background**: `--cream`
**Behaviour**: Infinite horizontal scroll marquee. Pauses on hover. Fade-out masks on left and right edges.

**Label**: `Trusted Experience` (gold, uppercase)
**Heading**: `Companies I Have Worked With` (Cormorant Garamond)

**Logo track**: Continuous scrolling row of company logos (greyscale, ~45% opacity, full colour on hover).

```
LOGO PLACEHOLDERS — Replace with Amelia's saved business logo files:

┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐
│IBM  │ │Fuji-│ │DXC  │ │Bupa │ │Logo │ │Logo │ │Logo │ │Logo │
│     │ │tsu  │ │     │ │     │ │ 5   │ │ 6   │ │ 7   │ │ 8   │
└─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘

Filenames: logo-ibm.png, logo-fujitsu.png, logo-dxc.png, logo-bupa.png,
           logo-05.png, logo-06.png, logo-07.png, logo-08.png ...

Requirements:
- All logos should be transparent PNG or SVG
- Max height: 42px
- Filter: grayscale(100%) at rest, grayscale(0%) on hover
- Opacity: 0.45 at rest, 0.85 on hover
- Duplicate the set for seamless infinite loop
```

---

### 6. SERVICES SECTION

**Background**: `--charcoal` (dark section for contrast)
**Text colour**: `--cream`

**Label**: `What I Offer`
**Heading**:
```
Strategic expertise, delivered
with purpose and pragmatism.
```

**Grid**: 3 columns × 2 rows of service cards

Each card has:
- Numbered index (01–06) in gold at low opacity
- Title (Cormorant Garamond)
- Description paragraph
- "Learn more →" link in gold

| # | Title | Description | Link |
|---|-------|-------------|------|
| 01 | Strategic Consulting | I advise SMEs and business leaders on strategy, business transformation, scaling for growth, and operational improvement through CompassPoint Advisory. | → compasspoint.vercel.app/services |
| 02 | Executive Coaching | I coach ambitious leaders and professionals who are successful — but ready for more clarity, direction, and alignment in their career and life. | → #coaching |
| 03 | Speaking & Workshops | Available for keynotes, panel discussions, workshops and podcasts — sharing insights on women in leadership, business growth, and driving meaningful change. | → #contact |
| 04 | AI & Digital Transformation | Practical, high-impact AI opportunities and a digital transformation roadmap right-sized for your business — not a bloated enterprise playbook. | → compasspoint.vercel.app |
| 05 | Change Leadership | Human-centred change management for restructures, technology rollouts, and culture shifts — because transformation is ultimately about people. | → compasspoint.vercel.app |
| 06 | Investing & Mentoring | I invest in and mentor early-stage founders building purpose-driven businesses — bringing strategic guidance, connections, and real operational experience. | → #contact |

**Card hover behaviour**: Slight lift (translateY -4px), plum gradient overlay fading in, gold border glow.

---

### 7. IMAGE FEATURE — FULL WIDTH

A full-width atmospheric image between services and coaching. Creates a breathing moment.

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│    [FULL-WIDTH IMAGE PLACEHOLDER]                                  │
│                                                                    │
│    Amelia in a professional/lifestyle setting.                      │
│    Could be: city skyline, working in a café,                      │
│    walking through Melbourne, at an event.                          │
│    Should feel aspirational and warm.                               │
│                                                                    │
│    Aspect ratio: ~21:9 (cinematic wide)                            │
│    Height: 50vh                                                     │
│    object-fit: cover                                                │
│    Optional: subtle parallax scroll on background-attachment        │
│                                                                    │
│    Filename: lifestyle-wide.jpg                                     │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

> Optional text overlay (centered, Cormorant Garamond, cream):
> `"I always go around the corner — so I can only look forward."`

---

### 8. COACHING PROGRAMS

**Background**: `--warm-white`

**Label**: `Coaching Programs`
**Heading**: `Structured support for your next chapter.`
**Subtitle**: `If you're thinking "there's more than this" — let's find it.`

**Layout**: Two coaching tier cards side by side.

#### Bronze Tier

```
Name:       Bronze
Tagline:    "I know something needs to change — I just don't know what."

Ideal For:
- Corporate professionals feeling stuck or unfulfilled
- Emerging leaders stepping into bigger roles
- SME owners overwhelmed by decision-making

What's Included:
- 1:1 coaching sessions (virtual)
- Values & strengths alignment framework
- Career & life priorities mapping
- Practical actions between sessions

CTA: Book a Discovery Call → calendly.com/ameliaghofrany
```

#### Gold Tier (Featured — "Most Popular" badge)

```
Name:       Gold
Tagline:    "I'm ready for change — but I want to move forward with intention."

Ideal For:
- Leaders stepping into executive roles
- SME owners juggling leadership, growth & identity
- Corporate professionals planning an exit or pivot

What's Included:
- 1:1 coaching sessions (virtual)
- Leadership & transition framework
- Executive presence & confidence building
- Career or business transition roadmap
- Voice note / email support between sessions

CTA: Book a Discovery Call → calendly.com/ameliaghofrany
```

> Gold card has a gold top border and subtle gold-tinted gradient background. "Most Popular" label in gold pill top-right.

---

### 9. BEYOND THE BOARDROOM — TRAVEL & LIFESTYLE

**Background**: `--cream`
**Layout**: Centered text with stats, flanked by image gallery.

**Label**: `Beyond the Boardroom`
**Heading**: `A curious traveller & global citizen.`
**Body**:
```
Each place I've visited has shaped how I see the world and how I lead,
build, and connect — with empathy, openness, and a sense of adventure.
```

**Stats row** (centered, large numbers):

| 26 | 6 | 3 | 1 |
|----|---|---|---|
| Countries | Continents | Continents Called Home | Bucket List (Antarctica) |

**Travel Image Gallery** — Grid or masonry of travel/lifestyle photos:

```
┌────────────────┐ ┌──────────┐
│                │ │          │
│  [IMAGE]       │ │ [IMAGE]  │
│                │ │          │
│  Travel photo  │ │ Travel   │
│  landscape     │ │ portrait │
│  16:9          │ │ 3:4      │
│                │ │          │
│  travel-01.jpg │ │ travel-  │
│                │ │ 02.jpg   │
└────────────────┘ └──────────┘
┌──────────┐ ┌────────────────┐
│          │ │                │
│ [IMAGE]  │ │  [IMAGE]       │
│          │ │                │
│ Culture  │ │  Adventure     │
│ moment   │ │  photo         │
│ 1:1      │ │  16:9          │
│          │ │                │
│ travel-  │ │  travel-04.jpg │
│ 03.jpg   │ │                │
└──────────┘ └────────────────┘
```

> Images should have rounded corners (4px), slight shadow, and a subtle zoom on hover.

---

### 10. TESTIMONIAL / SOCIAL PROOF (Optional Section)

**Background**: `--warm-white`
**Layout**: Single featured testimonial or rotating carousel.

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ┌──────┐                                                      │
│  │      │  "Amelia always has such great insight, ideas and    │
│  │[IMG] │   tools to help think about approaching situations   │
│  │      │   and life events in different ways."                │
│  │head- │                                                      │
│  │shot  │  — Client Name, Title                                │
│  │.jpg  │                                                      │
│  └──────┘                                                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

> Placeholder for future testimonials. Headshot image placeholder: `testimonial-01.jpg` (1:1, 80px circle)

---

### 11. CONTACT / CTA SECTION

**Background**: `--plum-dark` (deep plum)
**Text**: `--cream`
**Radial gradient blob** behind for depth.

**Label**: `Ready to Begin?`
**Heading** (Cormorant Garamond):
```
Let's create something
meaningful together.
```

**Body**:
```
Whether you're navigating a growth inflection point, ready for a career
shift, or looking to sharpen your strategy — I'd love to hear from you.
```

**CTA Button**: `Book Your Free Discovery Call` → gold background, plum text, hover lifts with shadow.

**Small print**:
```
Confidential · No sales pressure · Just straight-talking strategic advice.
```

---

### 12. FOOTER

**Background**: `--charcoal`
**Content**:

```
© 2026 Amelia Ghofrany. All rights reserved.
Melbourne, Australia · CompassPoint Advisory (link)
```

**Optional additions**:
- LinkedIn icon/link
- Instagram icon/link
- Email link

---

## Image Placeholder Summary

All images Amelia will need to supply. Recommended specs included.

| # | Filename | Location | Aspect Ratio | Description |
|---|----------|----------|-------------|-------------|
| 1 | `hero-portrait.jpg` | Hero section | 3:4 | Professional editorial portrait. Warm natural light, confident and approachable. |
| 2 | `lifestyle-consulting.jpg` | Image strip | 4:3 | Amelia working/consulting — candid, natural moment. |
| 3 | `speaking-event.jpg` | Image strip | 4:3 | Amelia speaking at an event, on a panel, or at a workshop. |
| 4 | `travel-lifestyle.jpg` | Image strip | 4:3 | Travel or lifestyle photo — exploring a city, nature, cultural moment. |
| 5 | `lifestyle-wide.jpg` | Full-width break | 21:9 | Cinematic wide shot — city, café, event, Melbourne laneway. Aspirational mood. |
| 6 | `travel-01.jpg` | Beyond section | 16:9 | Travel landscape — dramatic scenery, cityscape, or nature. |
| 7 | `travel-02.jpg` | Beyond section | 3:4 | Travel portrait — Amelia exploring, street scene, or cultural moment. |
| 8 | `travel-03.jpg` | Beyond section | 1:1 | Square — food, culture, architecture detail, or candid travel moment. |
| 9 | `travel-04.jpg` | Beyond section | 16:9 | Adventure or experience photo — something memorable and personal. |
| 10 | `testimonial-01.jpg` | Testimonials | 1:1 (80px) | Client headshot (circle crop). |
| 11+ | `logo-*.png` or `logo-*.svg` | Logo marquee | Varied (42px height) | Company logos — transparent PNG or SVG, greyscale originals preferred. |

---

## Technical Notes for Cursor Build

### Recommended Stack
- **Framework**: Next.js (App Router) or Astro — either works well for a single-page site
- **Styling**: Tailwind CSS with custom CSS variables, or CSS Modules
- **Animations**: GSAP + ScrollTrigger (install via npm: `gsap`)
- **Smooth scroll**: Lenis (optional but recommended: `lenis`)
- **Fonts**: Google Fonts — Cormorant Garamond + DM Sans
- **Deployment**: Vercel

### Key Implementation Details
1. **GSAP ScrollTrigger** — register plugin globally, create scroll reveals for `.reveal` / `.reveal-left` / `.reveal-right` / `.reveal-scale` classes
2. **Logo marquee** — CSS `@keyframes` infinite translateX. Duplicate logo set in DOM for seamless loop. Fade masks via pseudo-elements with gradients.
3. **Stat counter** — GSAP `textContent` tween from 0 to target, `snap: { textContent: 1 }`, triggered once on scroll
4. **Hero stagger** — GSAP timeline with sequential delays, runs on page load
5. **Nav state** — ScrollTrigger watching scroll position > 80px to add `.scrolled` class (backdrop-blur + shadow)
6. **Image frames** — Decorative offset rectangles (absolute positioned, gold border, low opacity) behind hero and feature images
7. **Button sweep** — `::before` pseudo-element with plum background, `translateX(-101%)` → `translateX(0)` on hover
8. **Noise overlay** — Fixed SVG feTurbulence filter at 2.5% opacity over entire body
9. **Cursor glow** — 300px radial gradient following mouse, only on `(pointer: fine)` devices
10. **Responsive** — Mobile breakpoint at 768px. Single column layouts, hamburger nav, adjusted padding.

### Performance Considerations
- Lazy load all images below the fold
- Use `will-change: transform` on animated elements
- Preconnect to Google Fonts
- Optimise images (WebP format, appropriate sizing)
- GSAP ScrollTrigger handles cleanup automatically but kill triggers on unmount in React/Next.js

---

## File Structure (Suggested)

```
ameliaghofrany.com.au/
├── public/
│   ├── images/
│   │   ├── hero-portrait.jpg
│   │   ├── lifestyle-consulting.jpg
│   │   ├── speaking-event.jpg
│   │   ├── travel-lifestyle.jpg
│   │   ├── lifestyle-wide.jpg
│   │   ├── travel-01.jpg
│   │   ├── travel-02.jpg
│   │   ├── travel-03.jpg
│   │   ├── travel-04.jpg
│   │   ├── testimonial-01.jpg
│   │   └── logos/
│   │       ├── logo-ibm.png
│   │       ├── logo-fujitsu.png
│   │       ├── logo-dxc.png
│   │       ├── logo-bupa.png
│   │       └── ...
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ImageStrip.tsx
│   │   ├── LogoMarquee.tsx
│   │   ├── Services.tsx
│   │   ├── FullWidthImage.tsx
│   │   ├── Coaching.tsx
│   │   ├── BeyondBoardroom.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ContactCTA.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   └── useSmoothScroll.ts
│   └── lib/
│       └── animations.ts
├── tailwind.config.ts
├── package.json
└── README.md
```

---

*This document is a complete build specification. Hand it to Cursor and it has everything it needs — copy, design tokens, animation specs, image requirements, and technical guidance — to build a production-quality personal brand site for Amelia Ghofrany.*
