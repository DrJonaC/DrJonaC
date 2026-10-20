import Link from "next/link";
type ProjectCardProps = {
  title: string;
  subtitle: string;
  summary: string;
  accent: "blue" | "teal";
  href: string;
};
export function ProjectCard({
  title,
  subtitle,
  summary,
  accent,
  href,
}: ProjectCardProps) {
  return (
    <article className={`project-card project-${accent}`}>
      <div className="project-visual" aria-hidden="true">
        <span className="project-index">
          {accent === "blue" ? "SYSTEM 01 / SAFEGUARD" : "SYSTEM 02 / MEMORY"}
        </span>
        <div className={accent === "blue" ? "trace-graphic" : "stack-graphic"}>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} />
          ))}
        </div>
        <span className="visual-caption">
          {accent === "blue"
            ? "Detect. Trace. Intervene."
            : "Remember. Inspect. Understand."}
        </span>
      </div>
      <div className="project-content">
        <h3>
          {title}
          <span aria-hidden="true">↗</span>
        </h3>
        <p className="project-subtitle">{subtitle}</p>
        <p className="muted leading-7">{summary}</p>
        <div className="project-links">
          <Link className="text-link" href={`/projects#${title.toLowerCase()}`}>
            Explore system <span aria-hidden="true">→</span>
          </Link>
          <a href={href} target="_blank" rel="noreferrer">
            GitHub ↗<span className="sr-only"> (opens a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
