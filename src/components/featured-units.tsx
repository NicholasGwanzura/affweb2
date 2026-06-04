"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Gauge, Calendar, Fuel } from "lucide-react";

const units = [
  {
    name: "MAN TGL 7.180 Crane Truck",
    image: "/truck-1.jpg",
    specs: {
      year: "2016",
      mileage: "180,000 km",
      fuel: "Diesel",
    },
    price: "£24,500",
  },
  {
    name: "Volvo FL250 7 Ton Curtainside",
    image: "/truck-2.jpg",
    specs: {
      year: "2018",
      mileage: "145,000 km",
      fuel: "Diesel",
    },
    price: "£31,200",
  },
  {
    name: "Iveco Daily 35S Refrigerated",
    image: "/truck-3.jpg",
    specs: {
      year: "2019",
      mileage: "98,000 km",
      fuel: "Diesel",
    },
    price: "£18,750",
  },
  {
    name: "DAF CF75.310 Grabber",
    image: "/truck-4.jpg",
    specs: {
      year: "2015",
      mileage: "210,000 km",
      fuel: "Diesel",
    },
    price: "£27,900",
  },
];

export function FeaturedUnits() {
  return (
    <section className="py-24 bg-navy-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block rounded-full bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-600 mb-4">
              Available Now
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Featured Units For Sale
            </h2>
            <p className="mt-4 max-w-xl text-lg text-navy-500">
              Quality trucks and commercial vehicles sourced from the UK, ready for shipping.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            View All Inventory
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {units.map((unit, index) => (
            <motion.div
              key={unit.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white border border-navy-100 transition-all hover:shadow-xl hover:shadow-navy-900/5"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-navy-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-navy-400">
                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/50">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium">{unit.name}</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                  {unit.price}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold text-navy-900 line-clamp-1">
                  {unit.name}
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center rounded-lg bg-navy-50 py-2">
                    <Calendar className="h-3.5 w-3.5 text-navy-500 mb-1" />
                    <span className="text-xs font-medium text-navy-700">{unit.specs.year}</span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-navy-50 py-2">
                    <Gauge className="h-3.5 w-3.5 text-navy-500 mb-1" />
                    <span className="text-xs font-medium text-navy-700">{unit.specs.mileage}</span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-navy-50 py-2">
                    <Fuel className="h-3.5 w-3.5 text-navy-500 mb-1" />
                    <span className="text-xs font-medium text-navy-700">{unit.specs.fuel}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-4 block w-full rounded-lg bg-navy-900 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
