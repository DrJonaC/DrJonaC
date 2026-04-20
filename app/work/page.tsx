import { Card } from "@/components/card";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { selectedWorks, workAreas } from "@/lib/site-data";

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Work"
        title="I build technical systems, but I frame them as experiences people can inspect"
        description="This page maps the way I work: research formulation, system design, implementation, and the interface layer that helps people understand AI behavior."
      />
      <Section eyebrow="Practice" title="How I operate">
        <div className="grid gap-5 md:grid-cols-3">
          {workAreas.map((area) => (
            <Card key={area.title}>
              <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em]">{area.title}</h3>
              <p className="leading-7 text-[var(--color-muted)]">{area.text}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Selected Works"
        title="A few anchors from the broader research arc"
        description="These works show the transition from federated learning and privacy theory toward agent systems and inspectable AI behavior."
      >
        <div className="space-y-4">
          {selectedWorks.map((work) => (
            <Card key={work}>
              <p className="text-lg leading-8 text-[var(--color-muted)]">{work}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
