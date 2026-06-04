import type { Metadata } from "next";
import { MapPin, Package, Car, Clock, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UK Drop-Off Yard",
  description:
    "Drop off your vehicles, parcels, and goods at our UK yard in PE14 8JD, Jubilee Lane, United Kingdom. Collections available.",
};

const features = [
  {
    icon: Package,
    title: "Parcel Drop Off",
    description:
      "Send parcels of any size to Zimbabwe and SADC. Simply drop off at our UK yard and we'll handle packaging, shipping, and delivery.",
  },
  {
    icon: Car,
    title: "Vehicle Drop Off",
    description:
      "Leave your vehicle or truck at our secure UK yard before shipping. We ensure safe storage until your shipment is ready to depart.",
  },
  {
    icon: Clock,
    title: "Collections Available",
    description:
      "Can't make it to the yard? We offer collection services from your location within the UK for vehicles and large goods.",
  },
];

export default function UKDropOffPage() {
  return (
    <div className="min-h-screen bg-white pt-18">
      {/* Hero */}
      <section className="relative bg-navy-950 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.08),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 mb-4">
            UK Operations
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            UK Drop-Off Yard
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-200">
            Convenient UK base for all your shipping needs. Drop off vehicles, parcels,
            and goods for seamless transit to Zimbabwe and SADC.
          </p>
        </div>
      </section>

      {/* Address Card */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl border border-navy-100 bg-navy-50 p-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-orange-400">
              <MapPin className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">Our UK Address</h2>
            <div className="mt-6 space-y-1 text-lg text-navy-700">
              <p className="font-semibold text-navy-900">Affinity Logistics UK</p>
              <p>Jubilee Lane</p>
              <p>PE14 8JD</p>
              <p>United Kingdom</p>
            </div>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Link
                href="tel:+447770122046"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-600"
              >
                <Phone className="h-4 w-4" />
                +44 7770 122046
              </Link>
              <p className="text-xs text-navy-500">
                Contact us before visiting to ensure availability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              What You Can Drop Off
            </h2>
            <p className="mt-4 text-lg text-navy-500">
              We accept a wide range of items for shipping to Zimbabwe and SADC.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 border border-navy-100"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900">
            Ready to Ship?
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Get in touch for drop-off instructions, collection booking, or a shipping quote.
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
