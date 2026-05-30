const V = "v18";
const charts = [
  {id: "#map",          spec: "charts/chart1.json?" + V},
  {id: "#ch-district",  spec: "charts/chart2.json?" + V},
  {id: "#ch-toplga",    spec: "charts/chart3.json?" + V},
  {id: "#ch-category",  spec: "charts/chart4.json?" + V},
  {id: "#ch-distcat",   spec: "charts/chart5.json?" + V},
  {id: "#ch-seccat",    spec: "charts/chart6.json?" + V},
  {id: "#ch-year",      spec: "charts/chart7.json?" + V},
  {id: "#ch-decade",    spec: "charts/chart8.json?" + V},
  {id: "#ch-month",     spec: "charts/chart9.json?" + V},
  {id: "#ch-decmonth",  spec: "charts/chart10.json?" + V},
  {id: "#ch-size",      spec: "charts/chart11.json?" + V},
  {id: "#ch-topfires",  spec: "charts/chart12.json?" + V}
];

charts.forEach(function (c) {
  vegaEmbed(c.id, c.spec, {actions: false}).catch(function (err) {
    console.error("Failed to render " + c.spec, err);
  });
});

// For each .equal-pair row, set both insight boxes to the taller content
// height so paired insights align top-and-bottom.
function equalizeInsightPairs() {
  document.querySelectorAll(".equal-pair").forEach(function (row) {
    var insights = row.querySelectorAll(".insight");
    if (insights.length < 2) return;
    insights.forEach(function (i) { i.style.minHeight = ""; });
    var max = 0;
    insights.forEach(function (i) { if (i.offsetHeight > max) max = i.offsetHeight; });
    insights.forEach(function (i) { i.style.minHeight = max + "px"; });
  });
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { setTimeout(equalizeInsightPairs, 50); });
} else {
  setTimeout(equalizeInsightPairs, 50);
}
window.addEventListener("resize", equalizeInsightPairs);
