"use client";

import { clinicConfig } from "@/lib/clinic-config";

export default function StickyWhatsApp() {
  return (
    <a
      href={`https://wa.me/${clinicConfig.whatsapp}`}
      target="_blank"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition"
    >
      WhatsApp Us
    </a>
  );
}