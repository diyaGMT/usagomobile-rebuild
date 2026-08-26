import Script from "next/script";

const FORM_ID = "zJ3B0p08Wf9t6fK94tr4";

export default function FranchiseApplicationForm() {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-2">
      <iframe
        src={`https://links.usagomobile.com/widget/form/${FORM_ID}`}
        style={{ width: "100%", height: "600px", border: "none", borderRadius: "3px" }}
        id={`inline-${FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Franchisee Lead Form"
        data-height="1079"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        title="Franchisee Lead Form"
      />
      <Script src="https://links.usagomobile.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
