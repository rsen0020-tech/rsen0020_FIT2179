# Victorian Bushfires

An interactive single-page data story about Victorian bushfires and the schools that
sit in their path. It combines two public datasets — the Bushfire At-Risk Register of
education facilities and a century of historical fire boundaries — into a map and a
series of charts built with [Vega-Lite](https://vega.github.io/vega-lite/) and
[Pure.css](https://purecss.io/).

## Data sources

- **Bushfire At-Risk Register (BARR) 2025–26** — Victorian Department of Education,
  via [data.vic.gov.au](https://discover.data.vic.gov.au/dataset/de-2025-2026-bushfire-at-risk-register-february-2026).
- **Historical Bushfire Boundaries v2.0** — Digital Atlas of Australia / Geoscience
  Australia, [digital.atlas.gov.au](https://digital.atlas.gov.au/datasets/digitalatlas::historical-bushfire-boundaries-version-2-0).
- **LGA boundaries** — Australian Bureau of Statistics, Local Government Areas (ASGS 2011).

## Structure

- `index.html` — the page: hero, Part 1 (who is at risk today), Part 2 (a century of fire), and sources.
- `css/layout.css` — typography, palette and layout.
- `js/vega_lite_vis.js` — embeds the chart specifications.
- `charts/` — one Vega-Lite specification per figure (`chart1.json` is the map).
- `data/` — small summary tables and the simplified Victorian LGA boundaries.

The summary tables in `data/` are aggregated extracts of the two source datasets,
trimmed to Victoria so the page loads quickly; the large raw boundary file is not stored
in the repository.

## Running locally

Serve the folder over HTTP (the charts load local files), for example:

```
python3 -m http.server
```

then open <http://localhost:8000>.
