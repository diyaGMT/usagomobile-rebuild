"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { Map as LeafletMap, LatLngBoundsExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Franchise } from "@/lib/franchises";

function FitBounds({ franchises }: { franchises: Franchise[] }) {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!mapRef.current || franchises.length === 0) return;
    import("leaflet").then((L) => {
      const bounds: LatLngBoundsExpression = franchises.map((f) => [
        f.latitude,
        f.longitude,
      ]);
      const b = L.latLngBounds(bounds);
      if (b.isValid()) {
        mapRef.current?.fitBounds(b, { padding: [30, 30], maxZoom: 10 });
      }
    });
  }, [franchises]);

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
      {franchises.map((f) => (
        <Marker key={f.id} position={[f.latitude, f.longitude]}>
          <Popup>
            <div className="font-heading text-base font-semibold text-brand-dark">
              {f.company_name}
            </div>
            {f.address && (
              <div className="text-sm text-brand-gray">
                {f.address}, {f.city}, {f.state} {f.zipcode}
              </div>
            )}
            {f.service_phone && (
              <a href={`tel:${f.service_phone}`} className="text-sm text-brand-red">
                {f.service_phone}
              </a>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default function FranchiseLocatorMap({ franchises }: { franchises: Franchise[] }) {
  return (
    <div className="h-[520px] w-full overflow-hidden rounded-lg border border-black/10">
      <FitBounds franchises={franchises} />
    </div>
  );
}
