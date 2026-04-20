import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { withBasePath } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="page-shell grid gap-10 py-14 md:grid-cols-[minmax(0,1fr)_320px] md:items-end md:py-24">
      <FadeIn className="space-y-7">
        <p className="eyebrow">Agent Systems / Memory Privacy / Trustworthy AI</p>
        <div className="space-y-5">
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            Jianan Chen
          </h1>
          <p className="max-w-3xl text-xl leading-9 text-[var(--color-muted)] md:text-2xl">
            I design AI systems that make memory visible, drift traceable, and privacy worth defending.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(59,130,246,0.18)] bg-white/88 px-6 py-3 text-sm font-medium text-[var(--color-fg)] shadow-[0_10px_30px_rgba(59,130,246,0.08)] transition hover:-translate-y-[1px] hover:bg-white"
          >
            View flagship systems
          </Link>
          <Link
            href="/Jianan_Chen_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] px-6 py-3 text-sm font-medium text-[var(--color-fg)] transition hover:bg-white/70"
          >
            Open resume
          </Link>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="glass-panel relative overflow-hidden rounded-[2.2rem] p-5">
          <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(59,130,246,0.14),transparent)]" />
          <div className="relative flex flex-col gap-5">
            <div className="grid grid-cols-3 gap-3 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
              <span>Researcher</span>
              <span>Engineer</span>
              <span>Scholar</span>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/70">
              <Image
                src={withBasePath("/images/jianan-chen.jpg")}
                alt="Portrait of Jianan Chen"
                width={640}
                height={760}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <p className="font-mono text-sm leading-7 text-[var(--color-muted)]">
              Ph.D. in Computer Science. Building interactive systems for agent memory, privacy tracing,
              and trustworthy human-AI interfaces.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
