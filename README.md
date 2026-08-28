# Handoff: Big Five Kenya Website

## Overview
A 7-page site profiling Kenya's Big Five safari animals (Lion, Giraffe, Elephant, Buffalo, Rhino), plus a Home splash and a Parks page. Educational focus: each animal page carries key stats, the Swahili name, conservation status, and where to see it in Kenya. Structure is "multi-page" — each page is a full-viewport screen, navigated via a right-hand rail (prev/next arrows + hamburger menu), not a single continuous scroll.

## About the Design Files
The `.dc.html` files in this bundle are **design references** built in an internal HTML prototyping tool (Design Components) — they are not production code to copy as-is, and will not run outside that tool (they load a `support.js` runtime and use non-standard template syntax like `{{ }}` holes, `<sc-if>`, `<image-slot>`). Treat them as a precise visual and structural spec. Recreate the pages in the target codebase's existing stack (React, Vue, plain HTML/CSS, etc.) — or the best-fit framework if starting fresh — using standard components, real `<img>`/`<video>` tags, and normal CSS/JS.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy below are final. Recreate pixel-perfectly.

## Global layout (applies to every page)
Full-bleed screen, `100vw × 100vh` (min-height 640px), `overflow: hidden`, background `#0c1a1d`, `color: #ffffff`, font-family `'Archivo', sans-serif`.

**Layer stack (bottom to top):**
1. Full-bleed media layer (`position: absolute; inset: 0`) — a background photo/video, `object-fit: cover`.
2. Gradient scrim over the media, `pointer-events: none`, three combined gradients:
   - `linear-gradient(180deg, rgba(8,18,20,0.72) 0%, rgba(8,18,20,0) 28%)` (top fade)
   - `linear-gradient(0deg, rgba(8,18,20,0.9) 0%, rgba(8,18,20,0) 42%)` (bottom fade)
   - `linear-gradient(90deg, rgba(8,18,20,0.5) 0%, rgba(8,18,20,0) 30%)` (left fade)
3. Top bar: flex row, `justify-content: space-between`, padding `32px 48px`, right inset `88px` (clears the side rail).
   - Left: wordmark "BigFive" in Archivo Black 21px, white, with a yellow (`#f0cf3c`) period.
   - Right: small kicker text, 13px/500, `rgba(255,255,255,0.85)`, text-shadow `0 2px 12px rgba(0,0,0,0.5)` — this is the "IUCN status" line on animal pages, or the tagline on Home/Parks.
4. Hero title block: `position: absolute; left: 16%; right: 130px; top: 45%; transform: translateY(-50%)`.
   - Overline (e.g. "THE"): Archivo Black, `clamp(18px,2vw,30px)`, letter-spacing `8px`, `rgba(255,255,255,0.95)`.
   - Giant display title (e.g. "BIG FIVE" / "LION"): Archivo Black, `clamp(64px,10.5vw,185px)`, line-height 0.95, letter-spacing `-0.01em`, `rgba(255,255,255,0.88)`, text-shadow `0 12px 60px rgba(0,0,0,0.35)`, `white-space: nowrap`.
   - Subtitle below title (e.g. "SAFARI THROUGH KENYA"): `clamp(11px,0.95vw,15px)`, weight 600, letter-spacing `11px`, `rgba(255,255,255,0.85)`.
5. **Right side rail**: fixed `width: 88px`, full height, `border-left: 1px solid rgba(255,255,255,0.14)`, background `rgba(8,18,20,0.22)`, flex column, centered items.
   - Hamburger button at top (three bars: 18px/18px/12px wide, 2px tall, white, 5px gap), opens the fullscreen nav overlay.
   - Three text-link social icons below (FB / IG / YT placeholders), 10px, letter-spacing 1.5px, `rgba(255,255,255,0.5)` → yellow on hover.
   - Flexible spacer.
   - Current page number, Archivo Black 24px, e.g. "02".
   - "/ 07" page count, 11px, `rgba(255,255,255,0.45)`.
   - Prev arrow button: `88×60px`, top border `1px solid rgba(255,255,255,0.14)`, white "‹", hover background `rgba(255,255,255,0.08)`.
   - Next arrow button: `88×60px`, background `#2e6f74` (teal), yellow "›" (`#f0cf3c`), hover background `#38838a`.
6. **Bottom info row**: `position: absolute; left: 0; right: 88px; bottom: 0`, flex row with `flex-wrap: wrap`, `gap: 28px 48px`, `align-items: flex-end`, padding `0 48px 34px`, `pointer-events: none` on the row (children get `pointer-events: auto` if interactive).
   - Column 1: animal/place name (e.g. "Lion", "Simba" is the Swahili name — see per-page copy below) at 18px/700 white, with a smaller 12px caption underneath at `rgba(255,255,255,0.55)`.
   - Column 2 (`flex: 1 1 300px; max-width: 440px; min-width: 240px`): body paragraph, 13px, line-height 1.7, `rgba(255,255,255,0.72)`; below it a yellow all-caps tag line, 11px/600, letter-spacing 2px, `#f0cf3c`.
   - Column 3 (`display:flex; flex-wrap:wrap; gap:20px 40px; max-width:420px`): 3 stat blocks, each: big number in Archivo Black 24px `#f0cf3c`, label underneath 11px `rgba(255,255,255,0.6)`.
7. **Fullscreen nav overlay** (hidden by default, toggled by the hamburger): `position: fixed; inset: 0; z-index: 50`, background `rgba(8,18,20,0.97)`, flex column centered, padding `0 14vw`. Close "✕" button top-right. Menu items stacked (4px gap), each a flex row with a small yellow index number (13px) + the page name in Archivo Black `clamp(26px,3.6vw,48px)` white, turning yellow on hover. Same 7 items link to all pages in order: Home, Lion, Giraffe, Elephant, Buffalo, Rhino, Parks (indices 01–07).

## Screens / Pages
All 7 pages share the layout above. Per-page values:

| # | Page | Hero title | Overline | Kicker (top-right) | Name / Swahili | Stats (value — label) |
|---|------|-----------|----------|---------------------|-----------------|------------------------|
| 01 | Home | BIG FIVE | THE | The essential Kenya field guide | Kenya / East Africa | 05 — iconic species · 24 — national parks · 1977 — hunting banned |
| 02 | Lion | LION | THE | IUCN status · Vulnerable | Simba / Swahili for lion | 190 — kg, heaviest males · 80 — km/h at full sprint · 2,500 — lions left in Kenya |
| 03 | Giraffe | GIRAFFE | THE | IUCN status · Endangered | Twiga / Swahili for giraffe | 5.5 — m tall, adult bulls · 60 — km/h at a gallop · 45 — cm of prehensile tongue |
| 04 | Elephant | ELEPHANT | THE | IUCN status · Endangered | Ndovu / Swahili for elephant | 6.0 — tonnes, largest bulls · 36,280 — elephants in Kenya · 22 — months of pregnancy |
| 05 | Buffalo | BUFFALO | THE | IUCN status · Near Threatened | Nyati / Swahili for buffalo | 870 — kg, heaviest bulls · 57 — km/h at full charge · 1,000+ — animals in one herd |
| 06 | Rhino | RHINO | THE | IUCN status · Critically Endangered | Kifaru / Swahili for rhino | 1.4 — tonnes, black rhino · 55 — km/h despite the bulk · 1,000+ — black rhinos in Kenya |
| 07 | Parks | PARKS | THE | Big Five country | Karibu / Swahili for welcome | 1,510 — km², Maasai Mara · 13,747 — km², Tsavo East & West · 03 — parks with all five |

Body paragraph + yellow tag line per page (exact copy — see each `.dc.html`'s bottom-info-row section for the verbatim text with HTML entities already resolved):
- **Home**: intro paragraph on the Big Five term and Kenya's 1977 hunting ban; tag line "LION · GIRAFFE · ELEPHANT · BUFFALO · RHINO".
- **Lion**: lions resting 20 hrs/day, maneless Tsavo males; tag line "MAASAI MARA · TSAVO · AMBOSELI".
- **Giraffe**: Kenya's three giraffe subspecies, neck vertebra fact; tag line "MAASAI MARA · SAMBURU · GIRAFFE CENTRE".
- **Elephant**: Amboseli's studied elephants, matriarch memory; tag line "AMBOSELI · TSAVO · SAMBURU".
- **Buffalo**: herd defense behavior; tag line "MAASAI MARA · ABERDARE · LAKE NAKURU".
- **Rhino**: Ol Pejeta's black rhino stronghold + last two northern white rhinos; tag line "OL PEJETA · LAKE NAKURU · TSAVO WEST".
- **Parks**: overview of Big Five country across parks; tag line "MAASAI MARA · TSAVO · AMBOSELI · SAMBURU · LAKE NAKURU · OL PEJETA".

## Interactions & Behavior
- **Hamburger menu**: click toggles a boolean; opens the fullscreen nav overlay described above. Click the ✕ or a nav link to close/navigate.
- **Prev/next arrows**: plain links cycling through the 7 pages in a loop (Parks → Home wraps around).
- **Hover states**: nav rail icons and arrows brighten/change background on hover (see colors above); nav overlay links turn yellow on hover.
- **Media per page**: Home/Parks currently use a placeholder image drop-zone (empty state, no real photo yet). Lion, Giraffe, Elephant, Buffalo, and Rhino use a real looping background video (`autoplay`, `muted`, `loop`, `playsinline`, `object-fit: cover`) — see each file's media layer for the exact asset filename; swap for whatever final asset the target app serves.
- No other animation/transition — this is a static single-screen-per-page site, not a scrolling parallax experience.

## State Management
Minimal: only local UI state, one boolean per page (`menuOpen`) controlling the fullscreen nav overlay. No data fetching, no global state.

## Design Tokens
- **Background**: `#0c1a1d` (near-black teal)
- **Accent yellow**: `#f0cf3c`
- **Teal button**: `#2e6f74` (hover `#38838a`)
- **White text**: `#ffffff` at full, 0.95, 0.92, 0.88, 0.85, 0.82, 0.72, 0.6, 0.55, 0.5, 0.45 opacity depending on hierarchy (see layout section for which value goes where)
- **Rail border / scrims**: `rgba(255,255,255,0.14)`, `rgba(255,255,255,0.08)`, `rgba(8,18,20,0.22)`, `rgba(8,18,20,0.97)`
- **Typography**: Google Fonts "Archivo" (weights 400/500/600/700) for body/UI text; "Archivo Black" for all display/headline text (wordmark, hero title, stat numbers, nav overlay items, page number).
- **Side rail width**: `88px` fixed, used consistently as a right inset on every other layer.
- **Radius/shadows**: no border-radius anywhere in this design (sharp edges throughout); text-shadows only on text sitting directly over photo/video (see values above); no box-shadows.

## Assets
- Fonts loaded via Google Fonts (`Archivo`, `Archivo Black`).
- Background media: user-supplied stock video/photo per animal (filenames referenced in each `.dc.html`'s media layer — replace with final production assets, e.g. from a stock/licensed footage library).
- `image-slot.js` is a prototyping-tool-only placeholder component (drag-and-drop image zone) used on Home and Parks where no final photo was supplied yet — not needed in production; replace with a normal `<img>`.

## Files
- `Home.dc.html`, `Lion.dc.html`, `Giraffe.dc.html`, `Elephant.dc.html`, `Buffalo.dc.html`, `Rhino.dc.html`, `Parks.dc.html` — one file per screen, full markup/styles/copy as built.
- `image-slot.js` — reference only (prototype-tool placeholder component, see Assets above).
