import { PageIntro } from "@/components/page-intro";
import { ProjectBlock } from "@/components/project-block";
import { Section } from "@/components/section";
import { flagshipProjects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Flagship systems for the future of agent memory"
        description="The emphasis here is on system narrative rather than bullet-point resume entries. These projects represent the clearest expression of what I want to build next."
      />
      <Section
        eyebrow="Flagship Work"
        title="MIDAS and Pensieve"
        description="Two complementary systems: one audits privacy drift inside agent memory, the other makes memory legible to the user."
      >
        <div className="space-y-6">
          {flagshipProjects.map((project) => (
            <ProjectBlock key={project.slug} {...project} />
          ))}
        </div>
      </Section>
    </>
  );
}
