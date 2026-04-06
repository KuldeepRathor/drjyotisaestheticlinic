import Hero from "@/components/sections/Hero";
import Treatments from "@/components/sections/Treatments";
import SocialProof from "@/components/sections/SocialProof";
import Doctor from "@/components/sections/Doctor";
import Location from "@/components/sections/Location";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Treatments />
      <SocialProof />
      <Doctor />
      <Location />
      <CTA />
    </main>
  );
}
