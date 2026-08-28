# Big Five Kenya — built site

Plain HTML/CSS/JS recreation of the `design_handoff_bigfive_kenya` spec. No build step.

## Run

```bash
python -m http.server 8777
```

Then open <http://localhost:8777/>. (Opening the files directly with `file://`
works too, but a server avoids browser quirks with relative paths.)

## Files

| File | Page |
|------|------|
| `index.html` | 01 Home |
| `lion.html` | 02 Lion |
| `giraffe.html` | 03 Giraffe |
| `elephant.html` | 04 Elephant |
| `buffalo.html` | 05 Buffalo |
| `rhino.html` | 06 Rhino |
| `parks.html` | 07 The Parks |
| `assets/style.css` | all shared styles + per-page `--media` gradient (video-load fallback) |
| `assets/menu.js` | fullscreen nav overlay toggle (the only JS / state) |
| `assets/media/*.mp4` | looping background videos for the five animal pages |

## Backgrounds

The five animal pages use real looping video
(`assets/media/{lion,giraffe,elephant,buffalo,rhino}.mp4`, autoplay/muted/loop/
playsinline). The per-page `--media` gradient on `<main>` stays as the fill
shown while the video buffers.

**Home and Parks** still use gradient-only placeholders — no photo was supplied.
To add one, replace `<div class="media"></div>` with:

```html
<div class="media"><img src="assets/media/home.jpg" alt=""></div>
```

`.media > img` / `.media > video` are already styled `object-fit: cover`.

## Notes vs. the handoff

- Colors, type, spacing, and copy follow the spec exactly.
- `Buffalo.dc.html` showed `870` in the side-rail page-number slot (a stray
  copy-paste in the reference); corrected to `05` here per the README table.
- Fonts load from Google Fonts, as specified.
