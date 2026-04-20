import { Card } from "@/components/card";
import { Hero } from "@/components/hero";
import { MemoryExplorer } from "@/components/memory-explorer";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { flagshipProjects, researchThemes, siteMeta } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        eyebrow="Flagship Systems"
        title="Two systems that define my current research identity"
        description="MIDAS and Pensieve anchor my work at the intersection of agent memory, privacy tracing, and human-visible AI behavior."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {flagshipProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Research Themes"
        title="I work on systems where memory is part of the interface"
        description="Instead of listing papers up front, the site foregrounds the questions that shape the work."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {researchThemes.map((theme) => (
            <Card key={theme.title}>
              <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em]">{theme.title}</h3>
              <p className="leading-7 text-[var(--color-muted)]">{theme.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Interactive Prompt"
        title="A small interface for exploring who I am"
        description="This section borrows from agent-memory tooling: a lightweight prompt surface that reveals different slices of my work."
      >
        <MemoryExplorer />
      </Section>
      <Section
        eyebrow="Contact"
        title="Available for agent systems, applied AI research, and research engineering roles"
        description={siteMeta.shortBio}
      >
        <Card className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-medium">{siteMeta.email}</p>
            <p className="mt-2 text-[var(--color-muted)]">West Lafayette, Indiana</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
            {siteMeta.socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
            <a href="/Jianan_Chen_Resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </Card>
      </Section>
    </>
  );
}
