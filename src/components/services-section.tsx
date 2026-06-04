"use client";

import { motion } from "framer-motion";
import {
  Car,
  Truck,
  Cog,
  Wrench,
  Ship,
  FileCheck,
  Home,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Car,
    title: "Vehicle Sourcing",
    description: "Find and purchase vehicles in the UK with our trusted sourcing network.",
  },
  {
    icon: Truck,
    title: "Truck Sourcing",
    description: "Commercial trucks and heavy equipment sourced from verified UK sellers.",
  },
  {
    icon: Cog,
    title: "Engine Sourcing",
    description: "Quality used engines from the UK for all vehicle types.",
  },
  {
    icon: Wrench,
    title: "Spare Parts",
    description: "Truck and vehicle spare parts sourced and shipped to SADC.",
  },
  {
    icon: Ship,
    title: "Shipping",
    description: "Container and RoRo shipping from the UK to Walvis Bay and beyond.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Zimbabwe and SADC customs clearance support handled professionally.",
  },
  {
    icon: Home,
    title: "Household Goods",
    description: "Door-to-door shipping for personal and household items.",
  },
  {
    icon: MapPin,
    title: "Cross Border Logistics",
    description: "Regional delivery services across Zimbabwe, Zambia, Botswana and SADC.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-600 mb-4">
            What We Do
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Our Core Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-500">
            Comprehensive logistics solutions tailored for the UK to SADC corridor.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 transition-all hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400 transition-all group-hover:bg-orange-500 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-all hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
