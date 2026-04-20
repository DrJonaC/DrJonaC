import Link from "next/link";
import { siteMeta } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[rgba(245,245,247,0.72)] backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="text-sm font-medium tracking-[0.18em] text-[var(--color-muted)] uppercase">
          {siteMeta.name}
        </Link>
        <nav className="flex flex-wrap justify-end gap-3 text-sm text-[var(--color-muted)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-transparent px-3 py-1.5 transition hover:border-[var(--color-line)] hover:bg-white/60 hover:text-[var(--color-fg)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
