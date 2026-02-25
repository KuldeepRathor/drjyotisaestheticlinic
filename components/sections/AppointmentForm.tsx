"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { clinicConfig } from "@/lib/clinic-config";

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
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Name */}
      <div>
        <Label>Name</Label>
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Phone */}
      <div>
        <Label>Phone</Label>
        <Input
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      {/* Treatment */}
      <div>
        <Label>Treatment</Label>
        <Select value={treatment} onValueChange={(value) => setTreatment(value)}>
          <SelectTrigger className={!treatment ? "border-red-300" : ""}>
            <SelectValue placeholder="Select treatment" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Acne Treatment">Acne Treatment</SelectItem>
            <SelectItem value="Laser Hair Removal">Laser Hair Removal</SelectItem>
            <SelectItem value="Hair Fall Treatment">Hair Fall Treatment</SelectItem>
            <SelectItem value="PRP Facial">PRP Facial</SelectItem>
            <SelectItem value="Chemical Peel">Chemical Peel</SelectItem>
            <SelectItem value="Weight Loss">Weight Loss</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Preferred Time */}
      <div>
        <Label>Preferred Time</Label>
        <Input
          placeholder="e.g. Tomorrow evening"
          value={preferredTime}
          onChange={(e) => setPreferredTime(e.target.value)}
        />
      </div>

      {/* Message */}
      <div>
        <Label>Message</Label>
        <Textarea
          placeholder="Describe your concern"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button className="w-full" size="lg" disabled={loading}>
        {loading ? "Booking..." : "Book Appointment"}
      </Button>

      {success && (
        <p className="text-green-600 text-sm">
          Appointment request sent successfully!
        </p>
      )}
    </form>
  );
}
