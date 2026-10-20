"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];
export function SiteHeader() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <Link
          className="wordmark"
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Jianan Chen home"
        >
          <span className="monogram">
            jc<span>·</span>
          </span>
          <span>JIANAN CHEN</span>
        </Link>
        <button
          ref={menuButton}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              menuButton.current?.focus();
            }
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
