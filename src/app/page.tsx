import { Hero } from "@/components/ui/hero";
import { Highlights } from "@/components/ui/highlights";
import { Services } from "@/components/ui/services";
import { Testimonials } from "@/components/ui/testimonials";
import { Work } from "@/components/ui/work";
import { Range } from "@/components/range";
import { Assessments } from "@/components/ui/assessments";

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Services />
      <Work />
      <Testimonials />
      <Range />
      <Assessments />
    </main>
  );
}
