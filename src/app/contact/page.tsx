"use client";

import { useState } from "react";
import { Phone, MapPin, Mail, MessageCircle, Send, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white pt-18">
      {/* Hero */}
      <section className="relative bg-navy-950 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.08),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-200">
            Have a question or need a quote? Reach out to our UK or Zimbabwe teams.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-navy-900">Contact Details</h2>
                <p className="mt-2 text-navy-500">
                  Our teams in the UK and Zimbabwe are ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-900">
                      UK Enquiries & Quotes
                    </h3>
                    <a
                      href="tel:+447770122046"
                      className="mt-1 block text-lg font-medium text-navy-700 hover:text-orange-600"
                    >
                      +44 7770 122046
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-900">
                      Zimbabwe Enquiries & Updates
                    </h3>
                    <a
                      href="tel:+263715212141"
                      className="mt-1 block text-lg font-medium text-navy-700 hover:text-orange-600"
                    >
                      +263 71 521 2141
                    </a>
                    <a
                      href="tel:0777816368"
                      className="block text-lg font-medium text-navy-700 hover:text-orange-600"
                    >
                      0777 816 368
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-900">
                      Harare Office
                    </h3>
                    <p className="mt-1 text-navy-700">
                      661 Lorraine Drive
                      <br />
                      Bluffhill, Harare
                      <br />
                      Zimbabwe
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-900">
                      Email
                    </h3>
                    <a
                      href="mailto:info@affinitylogistics.co.uk"
                      className="mt-1 block text-navy-700 hover:text-orange-600"
                    >
                      info@affinitylogistics.co.uk
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <Link
                href="https://wa.me/447770122046?text=Hello%20Affinity%20Logistics.%20I%20would%20like%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-green-500 px-6 py-4 text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25"
              >
                <MessageCircle className="h-6 w-6" />
                <div>
                  <p className="text-sm font-semibold">Chat on WhatsApp</p>
                  <p className="text-xs opacity-90">Quick response guaranteed</p>
                </div>
              </Link>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">Message Sent!</h3>
                  <p className="mt-2 text-navy-500">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                    className="mt-6 text-sm font-medium text-orange-600 hover:text-orange-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-navy-900 mb-6">Send Us a Message</h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-navy-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-navy-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-navy-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-navy-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      >
                        <option value="">Select a service</option>
                        <option value="vehicle">Vehicle Sourcing</option>
                        <option value="truck">Truck Sourcing</option>
                        <option value="engine">Engine Sourcing</option>
                        <option value="parts">Spare Parts</option>
                        <option value="parcel">UK Parcel Shipping</option>
                        <option value="household">Household Goods</option>
                        <option value="customs">Customs Clearance</option>
                        <option value="cross-border">Cross Border Logistics</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-navy-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-orange-500 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-navy-100 bg-navy-100 h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto h-10 w-10 text-navy-400 mb-3" />
              <p className="text-navy-600 font-medium">661 Lorraine Drive, Bluffhill, Harare</p>
              <p className="text-sm text-navy-500 mt-1">Google Maps integration ready</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
