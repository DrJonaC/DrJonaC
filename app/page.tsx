import Link from "next/link";
import { Hero } from "@/components/hero";
import { MemoryExplorer } from "@/components/memory-explorer";
import { ProjectCard } from "@/components/project-card";
import {
  flagshipProjects,
  researchThemes,
  selectedWorks,
  siteMeta,
  withBasePath,
} from "@/lib/site-data";
export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="systems" className="page-shell home-section">
        <div className="section-heading">
          <p className="eyebrow">01 / Selected systems</p>
          <div>
            <h2>
              Making the invisible
              <br />
              <span className="serif-word">inspectable.</span>
            </h2>
            <p>
              Two systems exploring what agents remember, how context drifts,
              and where human control begins.
            </p>
          </div>
        </div>
        <div className="project-grid">
          {flagshipProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>
      <section className="research-band">
        <div className="page-shell home-section">
          <div className="section-heading">
            <p className="eyebrow">02 / Research directions</p>
            <div>
              <h2>
                Trust is a<br />
                <span className="serif-word">systems problem.</span>
              </h2>
              <p>
                From decentralized learning to persistent AI agents, my work
                asks how intelligent systems can remain accountable to people.
              </p>
            </div>
          </div>
          <div className="theme-grid">
            {researchThemes.map((theme, index) => (
              <div className="theme" key={theme.title}>
                <span className="eyebrow">0{index + 1}</span>
                <h3>{theme.title}</h3>
                <p>{theme.description}</p>
              </div>
            ))}
          </div>
          <div className="publication-heading">
            <h3>Selected publications</h3>
            <Link className="text-link" href="/research">
              Research archive ↗
            </Link>
          </div>
          <div className="publication-list">
            {selectedWorks.map((work, index) => (
              <div key={work}>
                <span className="eyebrow">0{index + 1}</span>
                <p>{work}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="page-shell home-section">
        <div className="section-heading">
          <p className="eyebrow">03 / Personal index</p>
          <div>
            <h2>
              A few threads
              <br />
              <span className="serif-word">to follow.</span>
            </h2>
          </div>
        </div>
        <MemoryExplorer />
      </section>
      <section className="page-shell contact-section">
        <p className="eyebrow">04 / Start a conversation</p>
        <h2>
          Better systems begin
          <br />
          with <span className="serif-word">a question.</span>
        </h2>
        <p>Agent systems, applied AI research, and research engineering.</p>
        <a className="contact-email" href={`mailto:${siteMeta.email}`}>
          {siteMeta.email} <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-links">
          {siteMeta.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
          <a
            href={withBasePath("/Jianan_Chen_Resume.pdf")}
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </section>
    </>
  );
}
