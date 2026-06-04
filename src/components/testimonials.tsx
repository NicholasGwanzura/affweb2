"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Tendai M.",
    location: "Harare, Zimbabwe",
    rating: 5,
    text: "Affinity Logistics made importing my truck from the UK incredibly simple. From sourcing to delivery, they handled everything. The truck arrived in perfect condition.",
  },
  {
    name: "John B.",
    location: "Lusaka, Zambia",
    rating: 5,
    text: "Professional service from start to finish. The team kept me updated at every stage of the shipment. Highly recommend for anyone needing SADC logistics.",
  },
  {
    name: "Sarah K.",
    location: "Gaborone, Botswana",
    rating: 5,
    text: "I shipped household goods and a vehicle together. The customs clearance was seamless and delivery was faster than expected. True end-to-end service.",
  },
  {
    name: "Michael T.",
    location: "Bulawayo, Zimbabwe",
    rating: 5,
    text: "The UK drop-off yard made it easy to send parts and a vehicle in one shipment. Great communication and transparent pricing throughout.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-64 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-300">
            Trusted by hundreds of clients across the UK and SADC region.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-orange-500/10" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-navy-200 mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-400 text-sm font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-navy-400">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
