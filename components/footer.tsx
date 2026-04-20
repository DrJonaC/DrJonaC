import Link from "next/link";
import { siteMeta } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="page-shell mt-20 border-t border-[var(--color-line)] py-8 text-sm text-[var(--color-muted)]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>{siteMeta.statement}</p>
        <div className="flex flex-wrap gap-4">
          {siteMeta.socialLinks.map((link) => (
            <Link key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </Link>
          ))}
          <Link href="/Jianan_Chen_Resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
