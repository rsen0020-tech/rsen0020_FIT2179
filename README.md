# Victorian Bushfires — FIT2179 Data Visualisation 2

An interactive single-page data story about Victorian bushfires and the education
facilities at risk from them, built with [Vega-Lite](https://vega.github.io/vega-lite/)
and [Pure.css](https://purecss.io/). It combines two independent public datasets.

## Live page

Enable GitHub Pages (Settings → Pages → deploy from this branch, root); the site is
then served at the URL GitHub shows you.

## Data sources

1. **Bushfire At-Risk Register (BARR) 2025–26** — Victorian Department of Education,
   via [data.vic.gov.au](https://discover.data.vic.gov.au/dataset/de-2025-2026-bushfire-at-risk-register-february-2026).
   893 at-risk education facilities with LGA, fire-weather district, risk category and sector.
2. **Historical Bushfire Boundaries v2.0** — Digital Atlas of Australia / Geoscience Australia,
   [digital.atlas.gov.au](https://digital.atlas.gov.au/datasets/digitalatlas::historical-bushfire-boundaries-version-2-0).
   ~77,500 Victorian fire footprints since 1903 (filtered from the national file).
3. **LGA boundaries** — ABS Local Government Areas (ASGS 2011), filtered to Victoria and
   simplified to a 180 KB GeoJSON for fast loading.

## Project structure

| Path | What it is |
|------|------------|
| `index.html` | The single-page story: hero, Part 1 (who is at risk), Part 2 (a century of fire), metadata footer. |
| `css/layout.css` | Typography (Oswald + Source Sans 3), bushfire palette, responsive layout. |
| `js/vega_lite_vis.js` | Embeds all 12 chart specs into their containers. |
| `charts/chart1.json` | **Required map** — choropleth of at-risk facilities per LGA (equal-area projection). |
| `charts/chart2–6.json` | BARR: district bar, top-15 LGAs, risk category, district×category heatmap, sector×category stacked bar. |
| `charts/chart7–12.json` | HISTORY: area burnt per year, per decade, fires by month, decade×month heatmap, size histogram, largest fires. |
| `data/*.csv` | Small aggregated tables (≈10 KB total) derived from the two source spreadsheets. |
| `data/LGA_VIC.geojson` | Simplified Victorian LGA boundaries (180 KB). |

## Visualisations (12 total, ≥1 map)

Idioms used: choropleth map, horizontal/vertical bar, ranked bar, grouped bar,
stacked bar, two heatmaps, multi-series line, and a histogram.

## Regenerating the aggregated data

The `data/*.csv` files were produced from the two source `.xlsx` workbooks by a
one-off Python script (filtering to Victoria and aggregating). The raw 23 MB
national workbook is intentionally **not** committed — only the small derived tables are.

## Still to do before submitting

- [ ] Fill in `[Your Full Name]` / `[Student ID]` in `index.html` and the `<meta author>`.
- [ ] Enable GitHub Pages and confirm the page is publicly accessible.
- [ ] Add a **hand-drawn** sketch (PDF) to the repo and link it on Moodle.
- [ ] Write the 500-word Moodle summary (domain/why/who, data/what, idioms/how).

## Author

[Your Full Name] — [Student ID]. Developed with the assistance of generative AI
(see the acknowledgment in the page footer).
