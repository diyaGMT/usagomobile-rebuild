"use client";

import dynamic from "next/dynamic";
import type { FeatureCollection } from "geojson";

const TerritoryMap = dynamic(() => import("./TerritoryMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[520px] w-full items-center justify-center rounded-lg border border-black/10 bg-brand-light text-brand-gray">
      Loading map…
    </div>
  ),
});

export default function TerritoryMapClient({ data }: { data: FeatureCollection }) {
  return <TerritoryMap data={data} />;
}
