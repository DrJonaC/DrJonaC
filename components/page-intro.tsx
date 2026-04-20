import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, aside }: PageIntroProps) {
  return (
    <section className="page-shell grid gap-10 py-14 md:grid-cols-[minmax(0,1fr)_280px] md:py-20">
      <div className="space-y-5">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{title}</h1>
        <p className="balanced-text max-w-2xl text-lg leading-8 text-[var(--color-muted)]">{description}</p>
      </div>
      {aside ? <div className="glass-panel rounded-[2rem] p-6">{aside}</div> : null}
    </section>
  );
}
