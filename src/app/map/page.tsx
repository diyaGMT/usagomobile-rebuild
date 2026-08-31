import type { Metadata } from "next";
import type { FeatureCollection } from "geojson";
import TerritoryMapClient from "@/components/TerritoryMapClient";

export const metadata: Metadata = {
  title: "Locations | USA GoMobile",
  description: "Find USA GoMobile franchise territories near you.",
};

const TERRITORIES_URL =
  "https://gomotires.com/.netlify/functions/public-territories-map";

async function getTerritories(): Promise<FeatureCollection | null> {
  try {
    const res = await fetch(TERRITORIES_URL, { next: { revalidate: 600 } });
    if (!res.ok) return null;
    return (await res.json()) as FeatureCollection;
  } catch {
    return null;
  }
}

export default async function MapPage() {
  const territories = await getTerritories();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h1 className="font-heading text-5xl font-bold text-brand-dark">
        Locations
      </h1>
      <p className="mt-4 max-w-2xl text-xl text-brand-gray">
        Live franchise territory coverage across the USA.
      </p>

      <div className="mt-6 flex flex-wrap gap-4 text-sm text-brand-gray">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-brand-red" />
          Operating
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-brand-yellow" />
          Coming Soon
        </span>
      </div>

      <div className="mt-6">
        {territories && territories.features.length > 0 ? (
          <TerritoryMapClient data={territories} />
        ) : (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-brand-red/40 bg-brand-light p-8 text-center text-brand-gray">
            <p className="font-heading text-xl font-semibold text-brand-dark">
              Map temporarily unavailable
            </p>
            <p className="max-w-md text-sm">
              We couldn&rsquo;t load live territory data just now. Please
              check back shortly.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
