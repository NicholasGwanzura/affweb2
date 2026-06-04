"use client";

import Link from "next/link";
import { Truck, MapPin, Phone, Mail, Clock } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Vehicle Sourcing", href: "/services" },
    { label: "Truck Sourcing", href: "/services" },
    { label: "Engine Imports", href: "/services" },
    { label: "Spare Parts", href: "/services" },
    { label: "UK Parcel Shipping", href: "/services" },
    { label: "Customs Clearance", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "UK Drop-Off", href: "/uk-drop-off" },
    { label: "Track Shipment", href: "/tracking" },
    { label: "Contact", href: "/contact" },
  ],
  regions: [
    "Zimbabwe",
    "Zambia",
    "Botswana",
    "South Africa",
    "Mozambique",
    "Malawi",
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-white">
                  Affinity
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-orange-400">
                  Logistics
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-navy-300">
              UK to Zimbabwe & SADC logistics specialists. We Source. We Ship. We
              Clear. We Deliver.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                <div>
                  <p className="text-white font-medium">UK Enquiries</p>
                  <p>+44 7770 122046</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                <div>
                  <p className="text-white font-medium">Zimbabwe Enquiries</p>
                  <p>+263 71 521 2141</p>
                  <p>0777 816 368</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                <div>
                  <p className="text-white font-medium">Harare Office</p>
                  <p>661 Lorraine Drive, Bluffhill, Harare, Zimbabwe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              SADC Coverage
            </h3>
            <ul className="space-y-3">
              {footerLinks.regions.map((region) => (
                <li key={region} className="flex items-center gap-2 text-sm text-navy-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  {region}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-navy-400">
              &copy; {new Date().getFullYear()} Affinity Logistics. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-navy-400 hover:text-navy-200">
                Privacy Policy
              </Link>
              <Link href="/" className="text-sm text-navy-400 hover:text-navy-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
