import type { Metadata } from "next";
import { Truck, Globe, Anchor, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Affinity Logistics — UK to Zimbabwe & SADC logistics specialists. End-to-end sourcing, shipping, customs clearance, and delivery.",
};

const values = [
  {
    icon: Globe,
    title: "UK Sourcing Network",
    description:
      "Established relationships with trusted UK sellers, auctions, and dealers to source quality vehicles, trucks, engines, and parts at competitive prices.",
  },
  {
    icon: Anchor,
    title: "Walvis Bay Route",
    description:
      "Strategic use of the Walvis Bay corridor for efficient and reliable shipping into Southern Africa, reducing transit times and costs.",
  },
  {
    icon: Shield,
    title: "Zimbabwe Expertise",
    description:
      "Deep understanding of Zimbabwean import regulations, customs procedures, and local logistics requirements for hassle-free clearance.",
  },
  {
    icon: Truck,
    title: "End-to-End Delivery",
    description:
      "From the moment you enquire to the final handover at your door, we manage every step of the logistics chain with precision and care.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-18">
      {/* Hero */}
      <section className="relative bg-navy-950 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.08),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 mb-4">
            Our Story
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About Affinity Logistics
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-200">
            We are not just a shipping company. We are your end-to-end logistics partner,
            connecting the UK to Zimbabwe and the SADC region with reliability and care.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              To remove complexity from international logistics by providing a seamless
              <span className="font-semibold text-navy-900"> Source &rarr; Buy &rarr; Ship &rarr; Clear &rarr; Deliver </span>
              solution for individuals and businesses across the UK, Zimbabwe, and SADC.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              We believe that distance should never be a barrier to accessing quality vehicles,
              equipment, and goods. Our team works tirelessly to ensure every shipment arrives
              safely, on time, and within budget.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              What Sets Us Apart
            </h2>
            <p className="mt-4 text-lg text-navy-500">
              Four pillars that define the Affinity Logistics experience.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-5 rounded-2xl bg-white p-8 border border-navy-100"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                  <value.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="mt-1 text-sm text-navy-300">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">5+</div>
              <div className="mt-1 text-sm text-navy-300">SADC Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">100%</div>
              <div className="mt-1 text-sm text-navy-300">Commitment</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
