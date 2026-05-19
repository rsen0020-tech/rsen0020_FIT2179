var mapSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Hectares burnt by Victorian LGA",
    "width": 800,
    "height": 500,
    "projection": {"type": "mercator"},
    "data": {
        "url": "https://raw.githubusercontent.com/tonywr71/GeoJson-Data/master/australian-local-government-areas.json",
        "format": {
            "type": "topojson",
            "feature": "ne_10m_admin_2_au_local_gov"
        }
    },
    "transform": [
        {
            "lookup": "properties.NAME_2",
            "from": {
                "data": {"url": "data/vic_lga_sample.csv"},
                "key": "lga_name",
                "fields": ["hectares_burnt"]
            }
        },
        {
            "filter": "datum.properties.NAME_1 == 'Victoria'"
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
            {"field": "properties.NAME_2", "type": "nominal", "title": "LGA"},
            {"field": "hectares_burnt", "type": "quantitative", "title": "Hectares"}
        ]
    }
};

vegaEmbed("#map", mapSpec);