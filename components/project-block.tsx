import Link from "next/link";
import { Card } from "@/components/card";

type ProjectBlockProps = {
  title: string;
  subtitle: string;
  problem: string;
  coreIdea: string;
  systemDesign: string;
  whyItMatters: string;
  href: string;
};

export function ProjectBlock({
  title,
  subtitle,
  problem,
  coreIdea,
  systemDesign,
  whyItMatters,
  href
}: ProjectBlockProps) {
  const sections = [
    { label: "Problem", text: problem },
    { label: "Core Idea", text: coreIdea },
    { label: "System Design", text: systemDesign },
    { label: "Why It Matters", text: whyItMatters }
  ];

  return (
    <Card className="space-y-8 p-8 md:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="eyebrow">{subtitle}</p>
          <h2 className="text-4xl font-semibold tracking-[-0.05em]">{title}</h2>
        </div>
        <Link
          href={href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--color-line)] px-4 py-2 text-sm transition hover:bg-white/70"
        >
          Open repository
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <div key={section.label} className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/55 p-5">
            <p className="eyebrow mb-3">{section.label}</p>
            <p className="leading-7 text-[var(--color-muted)]">{section.text}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
