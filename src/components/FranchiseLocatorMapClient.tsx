"use client";

import dynamic from "next/dynamic";
import type { Franchise } from "@/lib/franchises";

const FranchiseLocatorMap = dynamic(() => import("./FranchiseLocatorMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[520px] w-full items-center justify-center rounded-lg border border-black/10 bg-brand-light text-brand-gray">
      Loading map…
    </div>
  ),
});

export default function FranchiseLocatorMapClient({ franchises }: { franchises: Franchise[] }) {
  return <FranchiseLocatorMap franchises={franchises} />;
}
