import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          href="/"
          className="font-semibold tracking-tight hover:opacity-80"
        >
          Flowtooly Blog
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <a
            href="https://flowtooly.com"
            target="_blank"
            className="hover:text-foreground"
          >
            Flowtooly
          </a>
        </nav>
      </div>
    </header>
  );
}
