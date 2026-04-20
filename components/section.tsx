import type { ReactNode } from "react";
import { FadeIn } from "@/components/fade-in";

type SectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <FadeIn className="page-shell py-10 md:py-14">
      <div className="mb-8 max-w-3xl space-y-3">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{title}</h2>
        {description ? <p className="text-lg leading-8 text-[var(--color-muted)]">{description}</p> : null}
      </div>
      {children}
    </FadeIn>
  );
}
