import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | USA GoMobile",
};

const SECTIONS = [
  {
    heading: "Who We Are",
    body: "USA GoMobile is a mobile tire franchise business based in Portland, Oregon. Our website address is https://usagomobile.com.",
  },
  {
    heading: "Information We Collect",
    body: "We collect information you provide directly to us: through the contact form on this site (name, email address, phone number, and any message you send), and through our franchise application form (name, contact details, and any information you choose to provide about your interest in franchising with us). We do not require you to create an account, and this site does not have a comments section.",
  },
  {
    heading: "How We Use Your Information",
    body: "We use the information you submit to respond to your inquiry, evaluate and follow up on franchise applications, and — where you've given consent — contact you by phone, text message, or email about franchise opportunities. We do not sell your personal information.",
  },
  {
    heading: "Third-Party Services",
    body: "Our contact form is processed through SendGrid, our email delivery provider. Our franchise application form is powered by a CRM widget hosted at links.usagomobile.com; submissions through that form are subject to that platform's own data handling practices. If you apply for equipment financing, you'll be directed to our financing partner, PEAC Solutions, whose site operates under its own privacy policy.",
  },
  {
    heading: "Cookies",
    body: "This site does not use its own tracking or advertising cookies. Our embedded franchise application widget may set cookies necessary for the form to function and submit correctly.",
  },
  {
    heading: "How Long We Retain Your Data",
    body: "We retain contact and franchise application submissions for as long as needed to respond to your inquiry and evaluate franchise opportunities, or as required to meet legal, accounting, or reporting obligations.",
  },
  {
    heading: "Your Rights",
    body: "You may request a copy of the personal information we hold about you, or ask us to correct or delete it, by contacting us at info@usagomobile.com. We will respond to legitimate requests within a reasonable time, except where we are required to retain information for legal, administrative, or security purposes.",
  },
  {
    heading: "Children's Privacy",
    body: "This site is intended for business and franchise inquiries and is not directed at, or knowingly collecting information from, children under 13.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this privacy policy from time to time. Changes will be posted on this page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-heading text-5xl font-bold text-brand-dark">
        Privacy Policy
      </h1>
      <div className="mt-10 space-y-8">
        {SECTIONS.map((section) => (
          <div key={section.heading}>
            <h2 className="font-heading text-2xl font-semibold text-brand-dark">
              {section.heading}
            </h2>
            <p className="mt-2 text-brand-gray">{section.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 border-t border-black/10 pt-6 text-sm text-brand-gray">
        <p className="font-semibold text-brand-dark">Contact</p>
        <p>
          <a href="mailto:info@usagomobile.com" className="hover:text-brand-red">
            info@usagomobile.com
          </a>
        </p>
        <p>(503) 999-3647</p>
      </div>
    </section>
  );
}
