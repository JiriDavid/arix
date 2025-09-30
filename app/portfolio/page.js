import SectionTitle from "@/components/SectionTitle";
import PortfolioGrid from "@/components/PortfolioGrid";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Portfolio",
  description:
    "A curated showcase of Arix Innovations projects across product, brand, and growth transformations.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <SectionTitle
        eyebrow="Selected Work"
        title="Transformations fueled by clarity and craft"
        description="Every project pairs strategic rigor with immersive storytelling and engineering excellence to drive measurable results."
      />
      <PortfolioGrid projects={projects} />
    </div>
  );
}
