import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | USA GoMobile",
};

const SECTIONS = [
  {
    heading: "Intellectual Property",
    body: "All content published and made available on our Site is the property of USA GoMobile and the Site's creators.",
  },
  {
    heading: "Sale of Goods and Services",
    body: "USA GoMobile offers tires and tire installation services. Products are sold at your own risk. We reserve the right to modify, reject, or cancel your order whenever it becomes necessary.",
  },
  {
    heading: "Third Party Goods and Services",
    body: "Our Site may feature third-party offerings. We cannot guarantee the quality or accuracy of goods and services made available by third parties on our Site.",
  },
  {
    heading: "Payments",
    body: "We accept credit card and debit card payments. By providing payment information, you authorize us to charge the amount due to your chosen payment method.",
  },
  {
    heading: "Shipping and Delivery",
    body: "Delivery occurs via courier or authorized delivery companies at no charge to the customer. Customers must provide accurate addresses; USA GoMobile is not responsible for delivery errors resulting from incomplete or inaccurate information.",
  },
  {
    heading: "Refunds",
    body: "Refund requests for goods must be submitted within 7 days of receipt. Tires that have been driven on are excluded from refund eligibility. Completed tire installation services are non-refundable.",
  },
  {
    heading: "Consumer Protection Law",
    body: "Where applicable, mandatory consumer protection laws supersede anything to the contrary in these Terms & Conditions.",
  },
  {
    heading: "Limitation of Liability",
    body: "USA GoMobile disclaims liability for damages arising from your use of the Site, to the fullest extent permitted by law.",
  },
  {
    heading: "Dispute Resolution",
    body: "The parties agree to attempt mediation before pursuing litigation, though small claims court and injunctive relief remain available options at any time.",
  },
];

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-heading text-5xl font-bold text-brand-dark">
        Terms &amp; Conditions
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
        <p>(503) 999-3647</p>
        <p>163 SW Freeman Avenue, Hillsboro, OR 97123</p>
      </div>
    </section>
  );
}
