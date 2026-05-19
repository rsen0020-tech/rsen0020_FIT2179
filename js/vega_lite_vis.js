var mapSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Victorian Bushfires by LGA",
    "width": 800,
    "height": 600,
    "projection": {"type": "mercator"},
    "data": {
        "url": "https://raw.githubusercontent.com/rsen0020-tech/rsen0020_FIT2179/refs/heads/main/data/LGA_2025_AUST_GDA2020.json",
        "format": {"type": "topojson", "feature": "LGA_2025_AUST_GDA2020"}
    },
    "transform": [
        {
            "lookup": "properties.LGA_NAME25",
            "from": {
                "data": {"url": "https://raw.githubusercontent.com/rsen0020-tech/rsen0020_FIT2179/refs/heads/main/data/vic_lga.csv"},
                "key": "lga_name",
                "fields": ["hectares_burnt"]
            }
        },
        {
            "filter": "datum.properties.STE_NAME21 == 'Victoria'"
        }
    ],
    "mark": {"type": "geoshape", "stroke": "white", "strokeWidth": 0.5},
    "encoding": {
        "color": {
            "field": "hectares_burnt",
            "type": "quantitative",
            "scale": {"scheme": "oranges"},
            "title": "Hectares burnt"
        },
        "tooltip": [
            {"field": "properties.LGA_NAME25", "type": "nominal", "title": "LGA"},
            {"field": "hectares_burnt", "type": "quantitative", "title": "Hectares"}
        ]
    }
};

vegaEmbed("#map", mapSpec);