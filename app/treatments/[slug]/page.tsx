import { Button } from "@/components/ui/button";
import Link from "next/link";

type Treatment = {
  title: string;
  description: string;
};

const treatmentData: Record<string, Treatment> = {
  "acne-treatment": {
    title: "Acne Treatment",
    description:
      "Advanced acne treatment with dermatology-approved procedures and personalized plans.",
  },
  "laser-hair-removal": {
    title: "Laser Hair Reduction",
    description:
      "Safe and effective laser hair reduction treatment for long-lasting smooth skin.",
  },
  "hair-fall-treatment": {
    title: "Hair Fall Treatment",
    description:
      "Treat hair fall with PRP, medical therapy, and expert diagnosis.",
  },
  "prp-facial": {
    title: "PRP Facial",
    description:
      "Skin rejuvenation using PRP therapy for glowing and youthful skin.",
  },
  "chemical-peel": {
    title: "Chemical Peel",
    description:
      "Improve skin tone, texture, and pigmentation with medical chemical peels.",
  },
  "weight-loss": {
    title: "Weight Loss Treatment",
    description:
      "Clinically guided weight loss solutions tailored to your body.",
  },
};

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const treatment = treatmentData[slug];

  if (!treatment) {
    return (
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-xl font-semibold">Treatment not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        {treatment.title}
      </h1>

      <p className="text-gray-600 mb-6">{treatment.description}</p>

      <div className="bg-gray-100 h-[300px] rounded-xl mb-6 flex items-center justify-center text-gray-400">
        Before / After Images
      </div>

      <p className="mb-8">
        Detailed content, FAQs, and treatment benefits will go here for SEO.
      </p>

      <Link href="/book">
        <Button size="lg">Book Consultation</Button>
      </Link>
    </main>
  );
}
