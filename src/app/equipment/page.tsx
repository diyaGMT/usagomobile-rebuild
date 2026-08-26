import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Equipment | USA GoMobile",
  description:
    "The fully outfitted mobile van every USA GoMobile franchisee operates from — tire changer, wheel balancer, alignment system, and more.",
};

const VANS = ["Sprinter 170 HR", "Ford Transit T350 148 EXT HR"];

const CORE_EQUIPMENT = [
  {
    title: "Tire Changer",
    body: "The Corghi Master J Tire Changer is the trusted choice behind every GoMobile tire replacement — automatic mounting and demounting capabilities, intuitive touch-screen controls, and a robust, durable motor that handles even the toughest tasks with ease.",
  },
  {
    title: "Diagnostic Wheel Balancer",
    body: "The Corghi EM9280 Wheel Balancer delivers unparalleled accuracy with laser technology for pinpoint precision, intuitive touch-screen controls, and seamless data entry for various vehicle types.",
  },
  {
    title: "On-Site Diagnostic Wheel Alignment",
    body: "The AlignTech USA Alignment System ensures every vehicle's wheels are perfectly aligned for optimal safety and performance, with laser-guided accuracy and a user-friendly interface.",
    image: { src: "/equipment/aligntech.webp", alt: "GoMobile AlignTech laser alignment system" },
  },
];

const OIL_CHANGE_STEPS = [
  { step: "Extract", body: "Remove the used oil via the vehicle dipstick tube." },
  { step: "Fill", body: "Dispense new oil into the engine via our automated oil dispensing equipment." },
  { step: "Drain", body: "Automatically drain the used oil into the built-in receiver tank." },
];

const TOOLS_SERVICES = [
  "Tire changing and balancing",
  "Oil change",
  "TPMS service and replacement",
  "Wheel alignment",
];

const POWER_ITEMS = [
  "LiFePO4 batteries",
  "Inverter charger",
  "Solar charge controller",
  "DC-DC charger",
  "120V AC outputs",
  "Compressor — 100% duty cycle",
  "Intercooler and filters",
  "Auto drain valves",
];

const TECHNICIAN_STANDARDS = [
  {
    title: "Certified Tire Technicians",
    body: "Our franchisee technicians are certified professionals with extensive experience in tire installation, maintenance, and repair, and undergo rigorous training and assessment to guarantee proficiency in handling all tire-related services with precision and care.",
  },
  {
    title: "Extensive Training & High-Quality Fitment",
    body: "Every technician is extensively trained on all tools and equipment required for efficient, precise tire fitment, and is well-versed in van operations for smooth and effective mobile service.",
  },
  {
    title: "Thorough Background Checks",
    body: "We conduct thorough background checks on all franchisee technicians to ensure every technician upholds the integrity and professionalism that define the USA GoMobile brand.",
  },
  {
    title: "Clean Driving Records",
    body: "Because our service is mobile, we require all franchisee technicians to maintain a clean driving record — guaranteeing the safe and responsible operation of our service vehicles.",
  },
  {
    title: "Insured and Bonded Franchisees",
    body: "All USA GoMobile franchisees are fully insured and bonded, so every service is backed by a layer of protection for customer confidence.",
  },
  {
    title: "Safety in the Mobile Work Environment",
    body: "Whether servicing a vehicle in a driveway, parking lot, or roadside location, our technicians adhere to strict safety protocols to protect both themselves and the customer's vehicle.",
  },
];

const GALLERY = [
  { src: "/equipment/interior-1.webp", alt: "GoMobile van interior" },
  { src: "/equipment/interior-2.webp", alt: "GoMobile van interior" },
  { src: "/equipment/interior-side.webp", alt: "GoMobile van interior, side view" },
  { src: "/equipment/interior-4.webp", alt: "GoMobile van interior" },
];

export default function EquipmentPage() {
  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="font-heading text-5xl font-bold">Equipment</h1>
          <p className="mt-4 max-w-2xl text-xl text-white/80">
            Every franchise van is built for innovation, convenience, and
            customer-centricity — bringing tire changes, oil changes, and
            wheel alignments directly to your customer&rsquo;s location.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4 text-brand-gray">
            <h2 className="font-heading text-3xl font-bold text-brand-dark">
              What&rsquo;s Included
            </h2>
            <p>
              USA GoMobile represents the future of the automotive service
              industry by blending innovation, convenience, and
              customer-centricity. We offer a full suite of on-demand
              services — tire changes, oil changes, and wheel alignments —
              all delivered directly to the customer&rsquo;s location using
              advanced mobile equipment and digital scheduling.
            </p>
            <p>
              We prioritize sustainability by implementing eco-friendly
              practices, reducing waste, and promoting responsible disposal.
            </p>
            <p>
              What truly sets us apart is our commitment to customer
              satisfaction — our expert technicians ensure the highest
              quality service at every stop.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/equipment/van.webp"
              alt="USA GoMobile service van"
              width={800}
              height={533}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-heading text-3xl font-bold text-brand-dark">
            Vehicle Fleet
          </h2>
          <p className="mt-2 text-brand-gray">
            Two van options are available, both custom wrapped in USA
            GoMobile livery:
          </p>
          <ul className="mt-4 flex flex-wrap gap-4">
            {VANS.map((van) => (
              <li
                key={van}
                className="rounded-full bg-brand-light px-5 py-2 font-heading text-lg font-semibold text-brand-dark"
              >
                {van}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-brand-gray">
            ** Vehicle options may vary depending on availability.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {GALLERY.map((photo) => (
            <div key={photo.src} className="aspect-square overflow-hidden rounded-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-10">
          {CORE_EQUIPMENT.map((item) => (
            <div
              key={item.title}
              className={
                item.image
                  ? "grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center"
                  : undefined
              }
            >
              <div>
                <h3 className="font-heading text-2xl font-semibold text-brand-red">
                  {item.title}
                </h3>
                <p className="mt-2 text-brand-gray">{item.body}</p>
              </div>
              {item.image && (
                <div className="overflow-hidden rounded-lg sm:w-64">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}

          <div>
            <h3 className="font-heading text-2xl font-semibold text-brand-red">
              Automated Oil Change System
            </h3>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              {OIL_CHANGE_STEPS.map((item) => (
                <div key={item.step} className="rounded-lg bg-brand-light p-5">
                  <p className="font-heading text-lg font-semibold text-brand-dark">
                    {item.step}
                  </p>
                  <p className="mt-1 text-sm text-brand-gray">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-brand-dark">
              Tools &amp; Equipment
            </h3>
            <p className="mt-2 text-brand-gray">
              All tools and equipment are included in the vehicle for the
              following services:
            </p>
            <ul className="mt-2 space-y-2 text-brand-gray">
              {TOOLS_SERVICES.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-brand-red">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-semibold text-brand-dark">
              Power &amp; Pneumatics
            </h3>
            <p className="mt-2 text-brand-gray">
              Everything you need to operate the equipment in your van:
            </p>
            <ul className="mt-2 grid grid-cols-1 gap-2 text-brand-gray sm:grid-cols-2">
              {POWER_ITEMS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-brand-red">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <div className="rounded-lg bg-brand-light p-6">
            <h3 className="font-heading text-2xl font-bold text-brand-dark">
              Interior
            </h3>
            <p className="mt-2 text-brand-gray">
              All walls and the roof are paneled in aluminum diamond plate.
              Equipment is mounted to the floor and walls using
              industry-specific mounting methods.
            </p>
          </div>
          <div className="rounded-lg bg-brand-light p-6">
            <h3 className="font-heading text-2xl font-bold text-brand-dark">
              Safety
            </h3>
            <p className="mt-2 text-brand-gray">
              Jack, jack stands, and wheel pucks — the tools needed to
              ensure the vehicle is safely raised and stable while changing
              tires.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-heading text-3xl font-bold text-brand-dark">
            Technician Standards
          </h2>
          <p className="mt-2 max-w-3xl text-brand-gray">
            At the heart of our operation are our highly skilled and
            professional franchisee technicians. Our commitment to quality
            and safety ensures every technician meets the highest industry
            standards, giving customers peace of mind when using our mobile
            tire service.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {TECHNICIAN_STANDARDS.map((item) => (
              <div key={item.title}>
                <h3 className="font-heading text-xl font-semibold text-brand-red">
                  {item.title}
                </h3>
                <p className="mt-2 text-brand-gray">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-brand-gray">
            With USA GoMobile, customers can expect top-tier service from
            certified, background-checked, and highly trained professionals
            who prioritize safety and quality in every tire installation.
          </p>
        </div>
      </section>
    </>
  );
}
