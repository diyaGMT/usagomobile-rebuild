import type { Metadata } from "next";
import FranchiseLocatorMapClient from "@/components/FranchiseLocatorMapClient";
import { getActiveFranchises } from "@/lib/franchises";

export const metadata: Metadata = {
  title: "Locations | USA GoMobile",
  description: "Find a USA GoMobile franchise near you.",
};

export default async function MapPage() {
  const franchises = await getActiveFranchises();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h1 className="font-heading text-5xl font-bold text-brand-dark">
        Locations
      </h1>
      <p className="mt-4 max-w-2xl text-xl text-brand-gray">
        Find a USA GoMobile franchise near you.
      </p>

      <div className="mt-6">
        {franchises.length > 0 ? (
          <FranchiseLocatorMapClient franchises={franchises} />
        ) : (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-brand-red/40 bg-brand-light p-8 text-center text-brand-gray">
            <p className="font-heading text-xl font-semibold text-brand-dark">
              Map temporarily unavailable
            </p>
            <p className="max-w-md text-sm">
              We couldn&rsquo;t load live location data just now. Please
              check back shortly.
            </p>
          </div>
        )}
      </div>

      {franchises.length > 0 && (
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {franchises.map((f) => (
            <div
              key={f.id}
              className="rounded-lg border border-black/10 bg-brand-light p-5"
            >
              <p className="font-heading text-lg font-semibold text-brand-dark">
                {f.company_name}
              </p>
              {f.address && (
                <p className="mt-1 text-sm text-brand-gray">
                  {f.address}, {f.city}, {f.state} {f.zipcode}
                </p>
              )}
              {f.service_phone && (
                <a
                  href={`tel:${f.service_phone}`}
                  className="mt-1 block text-sm text-brand-red hover:underline"
                >
                  {f.service_phone}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
