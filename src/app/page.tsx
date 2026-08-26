import Link from "next/link";

const FEATURES = [
  {
    title: "National Relationships",
    body: "As a franchisee, you will have full access to our national relationships.",
  },
  {
    title: "Wheels, Tires & Oil",
    body: "Focused services of wheels, tires and oil — all performed at the client's site. Automotive service convenience at its best.",
  },
  {
    title: "Fleet Service",
    body: "Supply tires and oil changes to your local fleet customers directly from your GMT van.",
  },
  {
    title: "Minimal Inventory",
    body: "Unlike most brick and mortar tire shops, you will carry 0 tire inventory.",
  },
  {
    title: "Online Store",
    body: "You will have an online store that your customers can purchase from — comparable to any other online tire sales site.",
  },
  {
    title: "Financing",
    body: "Take advantage of financing from our financial partners to get your business on the road.",
  },
];

const INVESTMENT = [
  { label: "Franchise Fee", value: "$40,000" },
  { label: "Equipment Package", value: "$160,000" },
  { label: "Advertising & Marketing", value: "$30,000" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="font-heading text-lg font-semibold uppercase tracking-[0.2em] text-brand-yellow">
            Franchise Opportunity
          </p>
          <h1 className="mt-4 font-heading text-5xl font-bold leading-tight sm:text-7xl">
            Want to Become
            <br />a Franchisee?
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/80">
            Welcome to the fastest growing mobile tire franchise in the USA.
          </p>
          <p className="mt-2 max-w-2xl font-heading text-2xl italic text-brand-yellow">
            &ldquo;As long as there are vehicles running on tires, we will
            have a business.&rdquo;
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded bg-brand-red px-8 py-4 font-heading text-xl font-semibold tracking-wide text-white transition-colors hover:bg-brand-red-dark"
            >
              Start Your Own Tire Mobile Shop
            </Link>
            <Link
              href="/equipment"
              className="rounded border border-white/30 px-8 py-4 font-heading text-xl font-semibold tracking-wide text-white transition-colors hover:border-white"
            >
              See the Equipment
            </Link>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-heading text-4xl font-bold text-brand-dark">
          Why USA GoMobile
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-black/5 bg-brand-light p-6"
            >
              <h3 className="font-heading text-2xl font-semibold text-brand-red">
                {feature.title}
              </h3>
              <p className="mt-2 text-brand-gray">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investment / CTA */}
      <section className="bg-brand-red">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-heading text-4xl font-bold text-white">
            Start Your Own Tire Mobile Shop
          </h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
            {INVESTMENT.map((item) => (
              <div
                key={item.label}
                className="rounded-lg bg-white/10 p-6 backdrop-blur"
              >
                <p className="font-heading text-3xl font-bold text-brand-yellow">
                  {item.value}
                </p>
                <p className="mt-1 text-sm uppercase tracking-wide text-white/80">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-white/90">
            Exclusive territories available. Equipment includes a fully
            outfitted Mercedes Sprinter or Ford Transit van — tire changer,
            wheel balancer, compressor, solar power, and everything you need
            for day-one operations.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded bg-white px-8 py-4 font-heading text-xl font-semibold tracking-wide text-brand-red transition-colors hover:bg-brand-yellow"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
