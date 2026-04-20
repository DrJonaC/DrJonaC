import { Card } from "@/components/card";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { researchThemes, selectedWorks } from "@/lib/site-data";

export default function ResearchPage() {
  return (
    <>
      <PageIntro
        eyebrow="Research"
        title="Organized by questions, not by archive"
        description="I prefer to present research as a set of conceptual threads. Publications matter, but the themes behind them matter more."
      />
      <Section eyebrow="Themes" title="Current research themes">
        <div className="grid gap-5 md:grid-cols-2">
          {researchThemes.map((theme, index) => (
            <Card key={theme.title}>
              <p className="eyebrow mb-3">Theme {index + 1}</p>
              <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em]">{theme.title}</h3>
              <p className="leading-7 text-[var(--color-muted)]">{theme.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Key Works"
        title="Selected papers and systems"
        description="A minimal set of anchors behind the themes."
      >
        <div className="space-y-4">
          {selectedWorks.map((work) => (
            <Card key={work}>
              <p className="leading-7 text-[var(--color-muted)]">{work}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
