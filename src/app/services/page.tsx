import type { Metadata } from "next";
import {
  Car,
  Truck,
  Cog,
  Wrench,
  Ship,
  FileCheck,
  Home,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Affinity Logistics services: Vehicle Imports, Truck Imports, Engine Imports, Parcel Shipping, Household Goods, Customs Clearance, and Cross Border Logistics.",
};

const services = [
  {
    icon: Car,
    title: "Vehicle Imports",
    description:
      "Source and import cars, SUVs, and light commercial vehicles from the UK to Zimbabwe and SADC. We handle inspections, shipping, customs clearance, and final delivery.",
  },
  {
    icon: Truck,
    title: "Truck Imports",
    description:
      "Commercial truck sourcing and import for businesses across Zimbabwe and SADC. From crane trucks to curtain-siders, we find the right unit for your needs.",
  },
  {
    icon: Cog,
    title: "Engine Imports",
    description:
      "Quality used and reconditioned engines sourced from the UK. Perfect for replacements or rebuild projects, shipped securely with full customs documentation.",
  },
  {
    icon: Wrench,
    title: "Spare Parts Sourcing",
    description:
      "Hard-to-find truck and vehicle spare parts sourced from UK suppliers and shipped to your door in Zimbabwe, Zambia, Botswana or anywhere in SADC.",
  },
  {
    icon: Ship,
    title: "UK Parcel Shipping",
    description:
      "Reliable parcel shipping from the UK to Zimbabwe and SADC. Drop off at our UK yard or arrange collection — we handle the rest.",
  },
  {
    icon: Home,
    title: "Household Goods Shipping",
    description:
      "Door-to-door shipping for personal and household items. Whether you're relocating or sending goods home, we make it simple and affordable.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description:
      "Expert customs clearance support for Zimbabwe and SADC countries. We navigate regulations, paperwork, and duties so you don't have to worry.",
  },
  {
    icon: MapPin,
    title: "Cross Border Logistics",
    description:
      "Regional delivery services covering Zimbabwe, Zambia, Botswana, South Africa, Mozambique, and Malawi. Your goods, delivered where you need them.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-18">
      {/* Hero */}
      <section className="relative bg-navy-950 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.08),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 mb-4">
            What We Offer
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-200">
            Comprehensive logistics solutions from the UK to Zimbabwe and across the SADC region.
            Whatever you need moved, we have the expertise to get it there.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex gap-6 rounded-2xl border border-navy-100 bg-white p-8 transition-all hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-orange-400 transition-all group-hover:bg-orange-500 group-hover:text-white">
                  <service.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900">
            Need Something Else?
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Every logistics need is unique. Get in touch and we'll tailor a solution for you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
          >
            Get A Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
