"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { clinicConfig } from "@/lib/clinic-config";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { fadeUp, staggerContainer, cardItem } from "@/lib/animations";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!treatment) {
      alert("Please select treatment");
      setLoading(false);
      return;
    }

    // 1️⃣ Save to Supabase
    const { error } = await supabase.from("appointments").insert([
      {
        name,
        phone,
        treatment,
        preferred_time: preferredTime,
        message,
      },
    ]);

    // ❗ Stop if DB failed
    if (error) {
      setLoading(false);
      alert("Error booking appointment. Try again.");
      return;
    }

    // 2️⃣ Send email
    await fetch("/api/send-booking-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        treatment,
        preferredTime,
        message,
      }),
    });

    // 3️⃣ Open WhatsApp
    const whatsappNumber = clinicConfig.whatsapp;

    const whatsappMessage = `New Appointment

  Name: ${name}
  Phone: ${phone}
  Treatment: ${treatment}
  Preferred Time: ${preferredTime}
  Message: ${message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    // 4️⃣ Reset UI
    setSuccess(true);
    setName("");
    setPhone("");
    setTreatment("");
    setPreferredTime("");
    setMessage("");
    setLoading(false);
  };

  return (
    <motion.form
      className="space-y-6"
      onSubmit={handleSubmit}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Name */}
      <motion.div variants={fadeUp}>
        <Label>Name</Label>
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="transition-all duration-200 focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400"
        />
      </motion.div>

      {/* Phone */}
      <motion.div variants={fadeUp}>
        <Label>Phone</Label>
        <Input
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="transition-all duration-200 focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400"
        />
      </motion.div>

      {/* Treatment */}
      <motion.div variants={fadeUp}>
        <Label>Treatment</Label>
        <Select value={treatment} onValueChange={(value) => setTreatment(value)}>
          <SelectTrigger className={!treatment ? "border-red-300" : ""}>
            <SelectValue placeholder="Select treatment" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Acne Treatment">Acne Treatment</SelectItem>
            <SelectItem value="Laser Hair Reduction">Laser Hair Reduction</SelectItem>
            <SelectItem value="Hair Fall Treatment">Hair Fall Treatment</SelectItem>
            <SelectItem value="PRP Facial">PRP Facial</SelectItem>
            <SelectItem value="Chemical Peel">Chemical Peel</SelectItem>
            <SelectItem value="Weight Loss">Weight Loss</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      {/* Preferred Time */}
      <motion.div variants={fadeUp}>
        <Label>Preferred Time</Label>
        <Input
          placeholder="e.g. Tomorrow evening"
          value={preferredTime}
          onChange={(e) => setPreferredTime(e.target.value)}
          className="transition-all duration-200 focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400"
        />
      </motion.div>

      {/* Message */}
      <motion.div variants={fadeUp}>
        <Label>Message</Label>
        <Textarea
          placeholder="Describe your concern"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="transition-all duration-200 focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400"
        />
      </motion.div>

      {/* Submit button */}
      <motion.div variants={cardItem}>
        <motion.div
          whileHover={!loading ? { scale: 1.02 } : {}}
          whileTap={!loading ? { scale: 0.98 } : {}}
          transition={{ duration: 0.15 }}
        >
          <Button className="w-full" size="lg" disabled={loading}>
            {loading ? (
              <span className="flex items-center gap-2">
                {/* Spinner */}
                <svg
                  className="animate-spin h-4 w-4 text-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Booking…
              </span>
            ) : (
              "Book Appointment"
            )}
          </Button>
        </motion.div>
      </motion.div>

      {/* Success message */}
      <AnimatePresence>
        {success && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-2 text-green-600 text-sm font-medium px-3 py-2 rounded-lg bg-green-50 border border-green-200"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
            Appointment request sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
