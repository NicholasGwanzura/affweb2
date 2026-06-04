"use client";

import { motion } from "framer-motion";
import { Warehouse, Route, Shield, Clock, Truck, Globe, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: Warehouse,
    title: "UK Drop-Off Yard",
    description: "Secure UK yard for vehicle and parcel drop-offs at PE14 8JD, Jubilee Lane.",
  },
  {
    icon: Route,
    title: "End-to-End Service",
    description: "From sourcing in the UK to final delivery in SADC — we handle everything.",
  },
  {
    icon: Shield,
    title: "Trusted Logistics Partner",
    description: "500+ satisfied clients trust us with their vehicles, trucks, and goods.",
  },
  {
    icon: FileCheck,
    title: "Customs Expertise",
    description: "Deep knowledge of Zimbabwe and SADC customs regulations and clearance.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Optimized shipping routes and processes for the quickest delivery times.",
  },
  {
    icon: Globe,
    title: "SADC Delivery Network",
    description: "Established network covering Zimbabwe, Zambia, Botswana and beyond.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-navy-800/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 mb-4">
            Why Affinity
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-300">
            We combine UK expertise with deep SADC knowledge to deliver seamless logistics.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-orange-500/20 hover:bg-white/[0.04]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition-all group-hover:bg-orange-500 group-hover:text-white">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
