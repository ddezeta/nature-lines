import { FeatureCollection, Geometry } from "geojson";

export const mountFloraRoute: FeatureCollection<Geometry> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Mount Flora Trail",
        description: "Trail from Berthoud Pass to Mount Flora Peak",
        distance: "3.2 miles (one way)",
        elevationGain: "1,770 ft",
        peakElevation: "13,136 ft",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          // Berthoud Pass Trailhead
          [-105.7778, 39.7983],
          // Switchbacks and ascent simulation
          [-105.7725, 39.8000],
          [-105.7680, 39.7985],
          [-105.7635, 39.8005],
          [-105.7590, 39.8020],
          [-105.7555, 39.8055],
          [-105.7510, 39.8080],
          [-105.7460, 39.8105],
          [-105.7410, 39.8125],
          // Mount Flora Peak
          [-105.7368, 39.8143],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Trailhead (Berthoud Pass)",
        type: "trailhead",
      },
      geometry: {
        type: "Point",
        coordinates: [-105.7778, 39.7983],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Mount Flora Peak",
        type: "peak",
      },
      geometry: {
        type: "Point",
        coordinates: [-105.7368, 39.8143],
      },
    },
  ],
};
