import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | USA GoMobile",
  description: "Find USA GoMobile franchise territories near you.",
};

export default function MapPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h1 className="font-heading text-5xl font-bold text-brand-dark">
        Locations
      </h1>
      <p className="mt-4 max-w-2xl text-xl text-brand-gray">
        Find my location.
      </p>
      <div className="mt-10 flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-brand-red/40 bg-brand-light p-8 text-center text-brand-gray">
        <p className="font-heading text-xl font-semibold text-brand-dark">
          Live franchise map pending
        </p>
        <p className="max-w-md text-sm">
          This will show current franchise territories once a locations
          endpoint exists in the gomotires application. Until then this is a
          placeholder — swap it for an embed or fetch call once that&rsquo;s
          built.
        </p>
      </div>
    </section>
  );
}
