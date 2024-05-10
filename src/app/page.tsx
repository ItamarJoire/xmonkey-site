import { Hero } from "@/components/ui/hero";
import { Highlights } from "@/components/ui/highlights";
import { Services } from "@/components/ui/services";
import { Testimonials } from "@/components/ui/testimonials";
import { Work } from "@/components/ui/work";
import { Range } from "@/components/range";
import { Assessments } from "@/components/ui/assessments";
import { About } from "@/components/ui/about";
import { Footer } from "@/components/ui/footer";

import { AppProvider } from "@/hooks/useModal";

export default function Home() {
  return (
    <AppProvider>
      <Hero />
      <Highlights />
      <Services />
      <Work />
      <Testimonials />
      <Range />
      <Assessments />
      <About />
      <Footer />
    </AppProvider>
  );
}
