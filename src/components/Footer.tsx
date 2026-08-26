import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-brand-yellow">
              USA GoMobile
            </h3>
            <p className="mt-3 text-sm text-white/70">
              As long as there are vehicles running on tires, we will have a
              business.
            </p>
            <p className="mt-4 text-sm text-white/70">Portland, Oregon 97224, USA</p>
            <a
              href="tel:+15039993647"
              className="mt-1 block text-sm text-white/70 hover:text-brand-yellow"
            >
              (503) 999-3647
            </a>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold uppercase tracking-wide text-white/90">
              Franchise
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <Link href="/equipment" className="hover:text-brand-yellow">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="/finance" className="hover:text-brand-yellow">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-brand-yellow">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-yellow">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold uppercase tracking-wide text-white/90">
              Legal
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-yellow">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/tc" className="hover:text-brand-yellow">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/50">
          <p>
            This website and the franchise sales information on this site do
            not constitute an offer to sell a franchise. The offer of a
            franchise can only be made through the delivery of a Franchise
            Disclosure Document. Certain states require that we register the
            FDD before it is made available. This information is not
            intended as an offer to sell, or the solicitation of an offer to
            buy, a franchise. It is for information purposes only. Currently,
            the following states regulate the offer and sale of franchises:
            California, Hawaii, Illinois, Maryland, Minnesota, New York,
            North Dakota, Virginia, and Washington. If you are a resident of
            or want to locate a franchise in one of these states, we will
            not offer you a franchise unless and until we have complied with
            applicable pre-sale registration and disclosure requirements in
            your state.
          </p>
          <p className="mt-4">© {new Date().getFullYear()} USA GoMobile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
