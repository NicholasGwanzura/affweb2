"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Ship, FileCheck, Truck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Tell Us What You Need",
    description: "Share your requirements — whether it's a vehicle, truck, engine, spare parts, or household goods.",
  },
  {
    step: "02",
    icon: Search,
    title: "We Source It",
    description: "Our UK team locates and inspects the best options from our trusted network of sellers.",
  },
  {
    step: "03",
    icon: Ship,
    title: "We Ship It",
    description: "Your goods are securely loaded and shipped via container or RoRo to Walvis Bay.",
  },
  {
    step: "04",
    icon: FileCheck,
    title: "We Clear It",
    description: "We handle all customs clearance procedures for Zimbabwe and SADC countries.",
  },
  {
    step: "05",
    icon: Truck,
    title: "We Deliver It",
    description: "Final delivery to your door anywhere in Zimbabwe, Zambia, Botswana or across SADC.",
  },
];

export function ProcessSection() {
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
            How It Works
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Our Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-500">
            Simple, transparent, and stress-free logistics from start to finish.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-navy-100" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-orange-400 shadow-lg shadow-navy-900/20 ring-4 ring-white">
                  <step.icon className="h-7 w-7" />
                </div>

                {/* Step number */}
                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-500">
                  Step {step.step}
                </span>

                <h3 className="text-lg font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
