// Embed each Vega-Lite spec into its container.
// Add a new entry here when you build charts 5-11 (create charts/chartN.json
// and a matching <div id="..."> in index.html).
const charts = [
  {id: "#map",           spec: "charts/chart1.json"}, // required choropleth map
  {id: "#chart-trend",   spec: "charts/chart2.json"}, // area burnt per season (line)
  {id: "#chart-season",  spec: "charts/chart3.json"}, // fires by month/year (heatmap)
  {id: "#chart-climate", spec: "charts/chart4.json"}  // temperature vs area burnt (scatter)
];

charts.forEach(function (c) {
  vegaEmbed(c.id, c.spec, {actions: false})
    .catch(function (err) { console.error("Failed to render " + c.spec, err); });
});
