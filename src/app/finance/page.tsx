import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finance | USA GoMobile",
  description:
    "Financing options for USA GoMobile franchisees through our financial partners.",
};

export default function FinancePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
      <h1 className="font-heading text-5xl font-bold text-brand-dark">
        Finance
      </h1>
      <p className="mt-6 text-xl text-brand-gray">
        Take advantage of financing from our financial partners to get your
        USA GoMobile franchise on the road.
      </p>
      <p className="mt-2 text-brand-gray">
        Applications are processed through our financing partner, PEAC
        Solutions.
      </p>
      <a
        href="https://apply.peacsolutions.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded bg-brand-red px-8 py-4 font-heading text-xl font-semibold tracking-wide text-white transition-colors hover:bg-brand-red-dark"
      >
        Apply For Finance
      </a>
      <p className="mt-10 text-sm text-brand-gray">
        Have questions before you apply?{" "}
        <Link href="/contact" className="text-brand-red hover:underline">
          Contact our team
        </Link>
        .
      </p>
    </section>
  );
}
