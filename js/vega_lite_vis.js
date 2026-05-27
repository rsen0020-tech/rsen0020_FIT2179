const charts = [
  {id: "#map",          spec: "charts/chart1.json"},
  {id: "#ch-district",  spec: "charts/chart2.json"},
  {id: "#ch-toplga",    spec: "charts/chart3.json"},
  {id: "#ch-category",  spec: "charts/chart4.json"},
  {id: "#ch-distcat",   spec: "charts/chart5.json"},
  {id: "#ch-seccat",    spec: "charts/chart6.json"},
  {id: "#ch-year",      spec: "charts/chart7.json"},
  {id: "#ch-decade",    spec: "charts/chart8.json"},
  {id: "#ch-month",     spec: "charts/chart9.json"},
  {id: "#ch-decmonth",  spec: "charts/chart10.json"},
  {id: "#ch-size",      spec: "charts/chart11.json"},
  {id: "#ch-topfires",  spec: "charts/chart12.json"}
];

charts.forEach(function (c) {
  vegaEmbed(c.id, c.spec, {actions: false}).catch(function (err) {
    console.error("Failed to render " + c.spec, err);
  });
});
