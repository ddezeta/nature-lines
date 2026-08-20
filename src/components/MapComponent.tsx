"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { mountFloraRoute } from "@/data/mountFloraRoute";

export default function MapComponent() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-105.7778, 39.7983],
      zoom: 13,
      pitch: 60,
      bearing: 45,
    });

    const m = map.current;

    m.on("load", () => {
      // Add DEM
      m.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxzoom: 14,
      });
      m.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

      // Add nav controls
      m.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Add geolocate control
      const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
        showUserHeading: true,
      });
      m.addControl(geolocate, "top-right");

      // Add route source
      m.addSource("mount-flora-route", {
        type: "geojson",
        data: mountFloraRoute as any,
      });

      // Add route line layer
      m.addLayer({
        id: "route-line",
        type: "line",
        source: "mount-flora-route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#ff5252",
          "line-width": 6,
          "line-opacity": 0.8,
        },
        filter: ["==", "$type", "LineString"],
      });

      // Add route points layer
      m.addLayer({
        id: "route-points",
        type: "circle",
        source: "mount-flora-route",
        paint: {
          "circle-radius": 6,
          "circle-color": "#ffffff",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ff5252",
        },
        filter: ["==", "$type", "Point"],
      });

      // Add route labels layer
      m.addLayer({
        id: "route-labels",
        type: "symbol",
        source: "mount-flora-route",
        layout: {
          "text-field": ["get", "name"],
          "text-variable-anchor": ["top", "bottom", "left", "right"],
          "text-radial-offset": 1.0,
          "text-justify": "auto",
          "text-size": 14,
        },
        paint: {
          "text-color": "#1f2937",
          "text-halo-color": "#ffffff",
          "text-halo-width": 2,
        },
        filter: ["==", "$type", "Point"],
      });
    });

  }, []);

  return <div ref={mapContainer} className="w-full h-full relative" />;
}
