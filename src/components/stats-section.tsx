"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Truck, Users, Globe, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Truck,
    value: 20,
    suffix: "+",
    label: "Trucks Imported Monthly",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    icon: Globe,
    value: 5,
    suffix: "+",
    label: "SADC Countries Served",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "End-to-End Service",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-navy-50/50 p-8 text-center transition-all hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-orange-400 transition-transform group-hover:scale-110">
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="text-4xl font-bold text-navy-900">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-navy-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
