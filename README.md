# Victorian Bushfires — FIT2179 Data Visualisation 2

An interactive single-page data story about where, when, and why Victoria burns,
built with [Vega-Lite](https://vega.github.io/vega-lite/) and [Pure.css](https://purecss.io/).

> **Status: scaffold with SAMPLE data.** The page renders end-to-end, but the
> numbers and map geometry are placeholders. Replace them with real data before
> submitting. Submitting fabricated data breaches the assignment rules.

## Live page

Enable GitHub Pages (Settings → Pages → deploy from `main` or this branch, root),
then the site is served at the URL GitHub shows you.

## Project structure

| Path | What it is |
|------|------------|
| `index.html` | The single-page story: header, four story sections (Where / When / Why / Who), metadata footer. |
| `css/layout.css` | Typography, bushfire palette, responsive layout, chart cards. |
| `js/vega_lite_vis.js` | Embeds each chart spec into its `<div>`. Add new charts to the `charts` array. |
| `charts/chart1.json` | **Required map** — choropleth of area burnt by LGA (equal-area projection). |
| `charts/chart2.json` | Line — area burnt per season. |
| `charts/chart3.json` | Heatmap — fires by month and year. |
| `charts/chart4.json` | Scatter — temperature vs area burnt (combines two sources). |
| `data/LGA_VIC.topojson` | **Placeholder** Victorian LGA boundaries (replace with real ABS boundaries). |
| `data/burnt_area_by_lga.csv` | **Placeholder** burnt-area values joined to the map. |

Charts 5–11 are laid out as dashed "TODO" cards in `index.html` with the
suggested idiom and data source for each.

## How to swap in real data

1. **Map boundaries** — download Victorian LGA boundaries from the ABS (ASGS),
   simplify and convert to TopoJSON at [mapshaper.org](https://mapshaper.org),
   and save over `data/LGA_VIC.topojson`. Keep the object name `lga` and a
   `lga_name` property (or update those names in `charts/chart1.json`).
2. **Map values** — replace `data/burnt_area_by_lga.csv` with real per-LGA totals
   from DEECA Fire History, matching the `lga_name` spelling used in the boundaries.
3. **Other charts** — replace the inline `values` arrays in `charts/chart2-4.json`
   with real figures (or point them at CSV files in `/data` via a `url`).
4. **Build charts 5–11** — copy an existing spec as a template, save as
   `charts/chartN.json`, add a `<div id="...">` in `index.html`, and register it
   in the `charts` array in `js/vega_lite_vis.js`.
5. Delete the `.banner` element in `index.html` once no sample data remains.

## Data sources to use (combine at least two)

- **DEECA / DELWP Victorian Fire History** — data.vic.gov.au (burnt-area history)
- **Bureau of Meteorology** — bom.gov.au (temperature, rainfall, fire danger)
- **ABS** — abs.gov.au (LGA boundaries, population)
- **NASA FIRMS** — active-fire hotspots (optional second map)

Record the exact dataset URLs in the footer of `index.html`.

## Assignment checklist

- [ ] ≥ 10 visualisations, including ≥ 1 geographic map
- [ ] A substantial number of *different* idioms (not 10 bar charts)
- [ ] Data combined from ≥ 2 different sources
- [ ] Real, recent data; total download under a few MB
- [ ] One scrollable page, no horizontal scroll on a small laptop
- [ ] Storytelling, layout, typography; What / Why / How framework
- [ ] Author name, date, and all data-source URLs in the footer
- [ ] AI use acknowledged (already noted in the footer)
- [ ] Paper sketch photographed → PDF in the repo → URL on Moodle
- [ ] 500-word write-up submitted on Moodle

## Author

[Your Full Name] — [Student ID]. Developed with the assistance of generative AI
(see acknowledgment in the page footer).
