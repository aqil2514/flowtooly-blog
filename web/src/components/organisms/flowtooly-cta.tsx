import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FlowtoolyCTA() {
  return (
    <section className="rounded-lg border bg-muted/40 p-6 space-y-3">
      <h3 className="font-semibold">Butuh Tools Praktis?</h3>
      <p className="text-sm text-muted-foreground">
        Semua pembahasan di blog ini berangkat dari tools yang benar-benar
        digunakan.
      </p>
      <Link
        href="https://flowtooly.com"
        target="_blank"
        className="inline-flex items-center gap-2 text-sm font-medium"
      >
        Kunjungi Flowtooly
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
