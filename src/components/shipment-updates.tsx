"use client";

import { motion } from "framer-motion";
import { MapPin, Ship, Anchor, Truck, Home, CheckCircle2, Clock } from "lucide-react";

const routeSteps = [
  {
    location: "UK",
    description: "Collection & Loading",
    icon: MapPin,
    status: "completed",
    date: "Completed",
  },
  {
    location: "Port",
    description: "Export Clearance",
    icon: Ship,
    status: "completed",
    date: "Completed",
  },
  {
    location: "Walvis Bay",
    description: "Arrival & Discharge",
    icon: Anchor,
    status: "in-progress",
    date: "In Transit",
  },
  {
    location: "Botswana",
    description: "Cross Border Transit",
    icon: Truck,
    status: "pending",
    date: "Upcoming",
  },
  {
    location: "Zimbabwe",
    description: "Final Delivery",
    icon: Home,
    status: "pending",
    date: "Upcoming",
  },
];

export function ShipmentUpdates() {
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
            Live Tracking
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Live Shipment Updates
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-500">
            Track your shipment every step of the way from the UK to your doorstep.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="rounded-2xl border border-navy-100 bg-navy-50/50 p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-semibold text-navy-900">Shipment Route</h3>
                <p className="text-sm text-navy-500">UK &rarr; Walvis Bay &rarr; Zimbabwe</p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                <Clock className="h-4 w-4" />
                In Transit
              </div>
            </div>

            {/* Route Timeline */}
            <div className="relative">
              {/* Progress bar background */}
              <div className="absolute top-5 left-0 right-0 h-1 bg-navy-200 rounded-full hidden sm:block" />
              {/* Progress bar fill */}
              <div className="absolute top-5 left-0 h-1 bg-orange-500 rounded-full hidden sm:block" style={{ width: "45%" }} />

              <div className="grid gap-6 sm:grid-cols-5">
                {routeSteps.map((step, index) => (
                  <motion.div
                    key={step.location}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative flex flex-row sm:flex-col items-start sm:items-center gap-4 sm:gap-0"
                  >
                    <div
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        step.status === "completed"
                          ? "bg-green-500 text-white"
                          : step.status === "in-progress"
                          ? "bg-orange-500 text-white ring-4 ring-orange-100"
                          : "bg-navy-200 text-navy-500"
                      }`}
                    >
                      {step.status === "completed" ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <step.icon className="h-5 w-5" />
                      )}
                    </div>
                    <div className="sm:mt-3 sm:text-center">
                      <p className="text-sm font-semibold text-navy-900">{step.location}</p>
                      <p className="text-xs text-navy-500 mt-0.5">{step.description}</p>
                      <span
                        className={`mt-1 inline-block text-[10px] font-medium uppercase tracking-wider ${
                          step.status === "completed"
                            ? "text-green-600"
                            : step.status === "in-progress"
                            ? "text-orange-600"
                            : "text-navy-400"
                        }`}
                      >
                        {step.date}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
