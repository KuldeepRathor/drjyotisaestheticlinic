import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, treatment, preferredTime, message } = body;

    await resend.emails.send({
      from: "Clinic <onboarding@resend.dev>",
      to: ["drjyotiaestheticlinic@gmail.com"], // CHANGE THIS
    //   to: ["cooldeep226@gmail.com"], // CHANGE THIS
      subject: "New Appointment Booking",
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Treatment:</strong> ${treatment}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
