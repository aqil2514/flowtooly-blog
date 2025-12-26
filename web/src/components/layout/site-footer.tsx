import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-3xl px-6 py-8 space-y-3 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Flowtooly Blog.  
          Catatan dan insight seputar tools, UMKM, dan pengembangan produk.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <a
            href="https://flowtooly.com"
            target="_blank"
            className="hover:text-foreground"
          >
            Flowtooly
          </a>
        </div>
      </div>
    </footer>
  );
}
