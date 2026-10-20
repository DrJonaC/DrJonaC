import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="page-shell hero">
      <div className="hero-topline">
        <span className="eyebrow">
          Independent thinking. Inspectable intelligence.
        </span>
        <span className="eyebrow hero-edition">Research portfolio / 01</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="identity">
            <span className="status-dot" /> Jianan Chen{" "}
            <span className="identity-role">/ Computer Science Ph.D.</span>
          </p>
          <h1>
            Intelligence.
            <br />
            With <span className="serif-word">memory.</span>
            <br />
            <span className="outline-word">With trust.</span>
          </h1>
          <p className="hero-description">
            I design AI systems that make memory visible, drift traceable, and
            privacy worth defending.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" href="/projects">
              Explore the systems <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/research">
              Research <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div
          className="memory-art"
          role="img"
          aria-label="Conceptual diagram: agent memory connected to context, retrieval, and privacy safeguards"
        >
          <div className="art-caption">
            <span>FIG. 01 / THE MEMORY SYSTEM</span>
            <span className="art-cross">+</span>
          </div>
          <div className="orbital orbital-one" />
          <div className="orbital orbital-two" />
          <div className="orbital orbital-three" />
          <div className="memory-core">
            <span className="core-cross">✳</span>
            <span>MEMORY</span>
            <small>Context / Continuity</small>
          </div>
          <span className="orbit-node node-context">
            01 <b>Context</b>
          </span>
          <span className="orbit-node node-retrieval">
            02 <b>Retrieval</b>
          </span>
          <span className="orbit-node node-privacy">
            03 <b>Privacy</b>
          </span>
          <div className="art-baseline">
            <span>HUMAN-VISIBLE BY DESIGN</span>
            <span>↗</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="profile-mini">
          <Image
            src={withBasePath("/images/homepage-jianan-chen.jpeg")}
            alt="Jianan Chen"
            width={52}
            height={52}
            priority
          />
          <span>
            Researcher. Engineer. Builder.
            <br />
            <span className="muted">West Lafayette, Indiana</span>
          </span>
        </div>
        <p>
          Agent systems <span>/</span> Memory privacy <span>/</span> Trustworthy
          AI
        </p>
        <a
          href="#systems"
          className="scroll-link"
          aria-label="Scroll to selected systems"
        >
          ↓
        </a>
      </div>
    </section>
  );
}
