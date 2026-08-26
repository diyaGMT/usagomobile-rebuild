import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FranchiseApplicationForm from "@/components/FranchiseApplicationForm";

export const metadata: Metadata = {
  title: "Contact Us | USA GoMobile",
  description: "Get in touch with USA GoMobile about franchise opportunities.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <h1 className="font-heading text-5xl font-bold text-brand-dark">
        Contact Us
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-brand-dark">
            Get In Touch
          </h2>
          <dl className="mt-4 space-y-3 text-brand-gray">
            <div>
              <dt className="font-semibold text-brand-dark">Phone</dt>
              <dd>
                <a href="tel:+15039993647" className="hover:text-brand-red">
                  (503) 999-3647
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-dark">Location</dt>
              <dd>Portland, Oregon 97224, USA</dd>
            </div>
          </dl>

          <div className="mt-10 rounded-lg bg-brand-light p-6 text-sm leading-relaxed text-brand-gray">
            <p>
              This website and the franchise sales information on this site
              do not constitute an offer to sell a franchise. The offer of a
              franchise can only be made through the delivery of a Franchise
              Disclosure Document.
            </p>
            <p className="mt-3">
              Franchises are not currently offered to residents of: CA, HI,
              IL, MD, MN, ND, NY, VA, and WA.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-semibold text-brand-dark">
            Franchise Application
          </h2>
          <p className="mt-2 text-brand-gray">
            Ready to get started? Fill out the form below and our franchise
            team will be in touch.
          </p>
          <div className="mt-6">
            <FranchiseApplicationForm />
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-black/10 pt-12">
        <h2 className="font-heading text-2xl font-semibold text-brand-dark">
          Have a Quick Question Instead?
        </h2>
        <p className="mt-2 max-w-2xl text-brand-gray">
          If you&rsquo;re not ready to apply and just want to ask us
          something, send a message directly to our team.
        </p>
        <div className="mt-6 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
