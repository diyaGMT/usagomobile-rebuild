"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "https://gomotires.com", label: "Shop for Tires", external: true },
  { href: "/map", label: "Locations" },
  { href: "/equipment", label: "Equipment" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.webp"
            alt="USA GoMobile"
            width={169}
            height={71}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="tel:+15039993647"
            className="hidden font-heading text-lg font-semibold text-brand-dark hover:text-brand-red md:block"
          >
            (503) 999-3647
          </a>
          <Link
            href="/contact"
            className="rounded bg-brand-red px-4 py-2 font-heading text-base font-semibold tracking-wide text-white transition-colors hover:bg-brand-red-dark sm:px-5 sm:text-lg"
          >
            Become a Franchisee
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded text-brand-dark hover:bg-brand-light md:hidden"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop menu line */}
      <nav className="hidden border-t border-black/5 bg-brand-light md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-8 px-4 py-2.5 font-heading text-lg font-medium tracking-wide text-brand-dark sm:px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="mobile-menu" className="border-t border-black/5 bg-brand-light md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/5 py-3 font-heading text-lg font-medium tracking-wide text-brand-dark last:border-b-0 hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+15039993647"
              className="py-3 font-heading text-lg font-semibold text-brand-dark hover:text-brand-red"
            >
              (503) 999-3647
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
