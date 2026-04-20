import Link from "next/link";
import { Card } from "@/components/card";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  summary: string;
  accent: "blue" | "teal";
  href: string;
};

const accentStyles = {
  blue: "from-blue-500/18 to-transparent",
  teal: "from-emerald-500/18 to-transparent"
};

export function ProjectCard({ title, subtitle, summary, accent, href }: ProjectCardProps) {
  return (
    <Link href="/projects" className="group block">
      <Card className="relative h-full overflow-hidden">
        <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${accentStyles[accent]}`} />
        <div className="relative space-y-6">
          <div className="space-y-3">
            <p className="eyebrow">{subtitle}</p>
            <h3 className="text-3xl font-semibold tracking-[-0.04em]">{title}</h3>
          </div>
          <p className="text-base leading-7 text-[var(--color-muted)]">{summary}</p>
          <div className="flex items-center justify-between pt-6 text-sm text-[var(--color-muted)]">
            <span>Flagship system</span>
            <span className="transition group-hover:translate-x-1">Explore</span>
          </div>
          <p className="font-mono text-xs text-[var(--color-muted)]">{href}</p>
        </div>
      </Card>
    </Link>
  );
}
