import Image from "next/image";
import { Card } from "@/components/card";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { siteMeta, timeline } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Researcher, builder, and interface thinker for the age of persistent AI"
        description="My work sits between research and product. I care about the internals of LLM agents, but I care just as much about the surfaces people use to understand and trust them."
        aside={
          <div className="space-y-3">
            <p className="eyebrow">Current focus</p>
            <p className="text-lg leading-8 text-[var(--color-muted)]">{siteMeta.shortBio}</p>
          </div>
        }
      />
      <Section eyebrow="Profile" title="A practice shaped by theory, systems, and human legibility">
        <div className="grid gap-6 md:grid-cols-[320px_minmax(0,1fr)]">
          <Card className="overflow-hidden p-3">
            <Image
              src="/images/jianan-chen.jpg"
              alt="Jianan Chen"
              width={640}
              height={760}
              className="h-full rounded-[1.5rem] object-cover"
            />
          </Card>
          <Card className="space-y-5">
            <p className="text-lg leading-8 text-[var(--color-muted)]">
              I am a Computer Science Ph.D. with more than six years of research experience across
              trustworthy AI, federated learning, privacy-preserving machine learning, and now LLM
              agent systems. The center of gravity of my work has shifted toward memory, privacy, and
              the human interface of AI agents.
            </p>
            <p className="text-lg leading-8 text-[var(--color-muted)]">
              I like systems that make hidden behavior visible. That is the connective tissue between
              my recent projects, my teaching style, and the way I think about trustworthy AI.
            </p>
          </Card>
        </div>
      </Section>
      <Section eyebrow="Timeline" title="Selected path">
        <div className="space-y-4">
          {timeline.map((item) => (
            <Card key={item.title} className="grid gap-4 md:grid-cols-[140px_minmax(0,1fr)]">
              <p className="font-mono text-sm text-[var(--color-muted)]">{item.period}</p>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 leading-7 text-[var(--color-muted)]">{item.detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
