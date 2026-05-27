// Embed each Vega-Lite spec into its container.
const charts = [
  {id: "#map",          spec: "charts/chart1.json"},  // choropleth map (required)
  {id: "#ch-district",  spec: "charts/chart2.json"},  // facilities by fire weather district
  {id: "#ch-toplga",    spec: "charts/chart3.json"},  // top 15 LGAs
  {id: "#ch-category",  spec: "charts/chart4.json"},  // facilities by risk category
  {id: "#ch-distcat",   spec: "charts/chart5.json"},  // district x category heatmap
  {id: "#ch-seccat",    spec: "charts/chart6.json"},  // sector x category stacked bar
  {id: "#ch-year",      spec: "charts/chart7.json"},  // area burnt per year
  {id: "#ch-decade",    spec: "charts/chart8.json"},  // area burnt per decade by type
  {id: "#ch-month",     spec: "charts/chart9.json"},  // fires by month by type
  {id: "#ch-decmonth",  spec: "charts/chart10.json"}, // decade x month bushfire heatmap
  {id: "#ch-size",      spec: "charts/chart11.json"}, // fire size histogram
  {id: "#ch-topfires",  spec: "charts/chart12.json"}  // largest bushfires
];

charts.forEach(function (c) {
  vegaEmbed(c.id, c.spec, {actions: false})
    .catch(function (err) { console.error("Failed to render " + c.spec, err); });
});
