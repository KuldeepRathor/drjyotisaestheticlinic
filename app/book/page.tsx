import AppointmentForm from "@/components/sections/AppointmentForm";

export default function BookPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">
        Book Appointment
      </h1>

      <AppointmentForm />
    </main>
  );
}
