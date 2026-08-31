"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import type { Map as LeafletMap } from "leaflet";
import type { Feature, FeatureCollection } from "geojson";
import "leaflet/dist/leaflet.css";

const STATUS_COLORS: Record<string, string> = {
  operating: "#eb202b",
  in_progress: "#ffd800",
};

function styleFeature(feature?: Feature) {
  const status = (feature?.properties?.lumped_status as string) ?? "operating";
  const color = STATUS_COLORS[status] ?? STATUS_COLORS.operating;
  return {
    color,
    weight: 1,
    fillColor: color,
    fillOpacity: 0.45,
  };
}

function FitBounds({ data }: { data: FeatureCollection }) {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!mapRef.current || data.features.length === 0) return;
    import("leaflet").then((L) => {
      const layer = L.geoJSON(data);
      const bounds = layer.getBounds();
      if (bounds.isValid()) {
        mapRef.current?.fitBounds(bounds, { padding: [20, 20] });
      }
    });
  }, [data]);

  return (
    <MapContainer
      ref={mapRef}
      center={[39.8, -98.6]}
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={data} style={styleFeature} />
    </MapContainer>
  );
}

export default function TerritoryMap({ data }: { data: FeatureCollection }) {
  return (
    <div className="h-[520px] w-full overflow-hidden rounded-lg border border-black/10">
      <FitBounds data={data} />
    </div>
  );
}
