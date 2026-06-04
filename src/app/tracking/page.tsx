"use client";

import { useState } from "react";
import { MapPin, Clock, Package, CheckCircle2, Truck, Ship, Anchor, Home } from "lucide-react";

const mockTrackingData: Record<string, {
  currentLocation: string;
  status: string;
  eta: string;
  progress: number;
  history: { location: string; description: string; date: string; icon: typeof MapPin }[];
}> = {
  "AFF-240601": {
    currentLocation: "Walvis Bay, Namibia",
    status: "In Transit",
    eta: "2024-06-28",
    progress: 60,
    history: [
      { location: "UK", description: "Collected from yard", date: "2024-06-01", icon: MapPin },
      { location: "Port of Felixstowe", description: "Loaded on vessel", date: "2024-06-05", icon: Ship },
      { location: "At Sea", description: "En route to Walvis Bay", date: "2024-06-10", icon: Anchor },
      { location: "Walvis Bay", description: "Arrived, awaiting clearance", date: "2024-06-20", icon: Truck },
    ],
  },
  "AFF-240512": {
    currentLocation: "Harare, Zimbabwe",
    status: "Delivered",
    eta: "Delivered",
    progress: 100,
    history: [
      { location: "UK", description: "Collected", date: "2024-05-12", icon: MapPin },
      { location: "Port of Felixstowe", description: "Shipped", date: "2024-05-15", icon: Ship },
      { location: "Walvis Bay", description: "Cleared customs", date: "2024-05-28", icon: Anchor },
      { location: "Zimbabwe", description: "Delivered to client", date: "2024-06-02", icon: Home },
    ],
  },
};

export default function TrackingPage() {
  const [reference, setReference] = useState("");
  const [result, setResult] = useState<typeof mockTrackingData[string] | null>(null);
  const [error, setError] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    const trimmed = reference.trim().toUpperCase();
    if (!trimmed) {
      setError("Please enter a reference number.");
      return;
    }

    if (mockTrackingData[trimmed]) {
      setResult(mockTrackingData[trimmed]);
    } else {
      setError("Reference number not found. Please check and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white pt-18">
      {/* Hero */}
      <section className="relative bg-navy-950 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.08),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 mb-4">
            Track Your Shipment
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Shipment Tracking
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-200">
            Enter your reference number to check the current status and location of your shipment.
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleTrack} className="space-y-4">
            <div>
              <label htmlFor="reference" className="block text-sm font-medium text-navy-700 mb-2">
                Reference Number
              </label>
              <input
                id="reference"
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="e.g. AFF-240601"
                className="w-full rounded-xl border border-navy-200 bg-navy-50 px-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-orange-500 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Track Shipment
            </button>
          </form>

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Demo hint */}
          <div className="mt-6 rounded-xl border border-navy-100 bg-navy-50 p-4 text-sm text-navy-600">
            <p className="font-medium text-navy-800 mb-1">Demo Reference Numbers:</p>
            <p>Try <code className="rounded bg-white px-1.5 py-0.5 text-xs font-mono border border-navy-200">AFF-240601</code> (In Transit) or <code className="rounded bg-white px-1.5 py-0.5 text-xs font-mono border border-navy-200">AFF-240512</code> (Delivered)</p>
          </div>
        </div>
      </section>

      {/* Results */}
      {result && (
        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-8">
              {/* Status Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-xl font-bold text-navy-900">Shipment Status</h2>
                  <p className="text-sm text-navy-500 mt-1">Ref: {reference.toUpperCase()}</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                  <Clock className="h-4 w-4" />
                  {result.status}
                </div>
              </div>

              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-navy-600 mb-2">
                  <span>Progress</span>
                  <span className="font-semibold text-navy-900">{result.progress}%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-navy-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-orange-500 transition-all duration-700"
                    style={{ width: `${result.progress}%` }}
                  />
                </div>
              </div>

              {/* Details */}
              <div className="grid gap-4 sm:grid-cols-2 mb-10">
                <div className="rounded-xl bg-white p-4 border border-navy-100">
                  <div className="flex items-center gap-2 text-sm text-navy-500 mb-1">
                    <MapPin className="h-4 w-4" />
                    Current Location
                  </div>
                  <p className="text-base font-semibold text-navy-900">{result.currentLocation}</p>
                </div>
                <div className="rounded-xl bg-white p-4 border border-navy-100">
                  <div className="flex items-center gap-2 text-sm text-navy-500 mb-1">
                    <Clock className="h-4 w-4" />
                    ETA
                  </div>
                  <p className="text-base font-semibold text-navy-900">{result.eta}</p>
                </div>
              </div>

              {/* History Timeline */}
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Shipment History</h3>
              <div className="space-y-6">
                {result.history.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-orange-400">
                        <event.icon className="h-5 w-5" />
                      </div>
                      {index < result.history.length - 1 && (
                        <div className="mt-2 h-full w-0.5 bg-navy-200 min-h-[2rem]" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-sm font-semibold text-navy-900">{event.location}</p>
                      <p className="text-sm text-navy-500">{event.description}</p>
                      <p className="text-xs text-navy-400 mt-1">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
