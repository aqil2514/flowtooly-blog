import { HomeHero } from "@/components/organisms/home-hero";
import { FlowtoolyCTA } from "@/components/organisms/flowtooly-cta";
import { ValueItem } from "@/components/molecules/value-item";
import { LatestArticles } from "@/components/organisms/latest-article";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-16">
      <HomeHero />

      <section className="grid gap-6 sm:grid-cols-3">
        <ValueItem title="Praktis" description="Berangkat dari kasus nyata." />
        <ValueItem title="Sederhana" description="Tanpa bahasa ribet." />
        <ValueItem title="Terhubung" description="Langsung ke Flowtooly." />
      </section>

      <LatestArticles />
      <FlowtoolyCTA />
    </main>
  );
}
