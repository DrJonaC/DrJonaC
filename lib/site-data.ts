export const siteMeta = {
  name: "Jianan Chen",
  title: "LLM Agent Systems · Memory Privacy · Trustworthy AI",
  statement: "I design AI systems that make memory visible, drift traceable, and privacy worth defending.",
  shortBio:
    "Computer Science Ph.D. focused on LLM agent systems, agent memory, privacy, and trustworthy AI. I build interactive systems that make hidden agent behavior legible to people.",
  location: "West Lafayette, Indiana",
  email: "chen3873@purdue.edu",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.GITHUB_ACTIONS === "true"
      ? "https://drjonac.github.io/DrJonaC/"
      : "http://localhost:3000"),
  socialLinks: [
    { label: "GitHub", href: "https://github.com/DrJonaC" },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=9cql4fcAAAAJ&hl=zh-CN"
    }
  ]
};

export const flagshipProjects = [
  {
    slug: "midas",
    title: "MIDAS",
    subtitle: "Memory Integrity and Drift-Aware Safeguard for LLM Agents",
    summary:
      "A privacy tracing system for agent memory that detects context-drift violations and exposes relevance-privacy tension in live interactions.",
    problem:
      "LLM agents accumulate personal context over time, but existing interfaces rarely show when retrieved memory has drifted into privacy-sensitive territory.",
    coreIdea:
      "Formalize Context-Drift Violation as a privacy primitive, then make it inspectable through interactive tracing over live memory retrieval.",
    systemDesign:
      "MIDAS combines memory annotations, drift-aware retrieval checks, and an interactive inspection layer that reveals why a memory is surfaced, where privacy risk originates, and how agent reasoning changes under intervention.",
    whyItMatters:
      "It reframes agent safety from static guardrails to inspectable memory integrity, making privacy failures measurable before they compound.",
    accent: "blue",
    href: "https://github.com/DrJonaC/MIDAS"
  },
  {
    slug: "pensieve",
    title: "Pensieve",
    subtitle: "Visualizing LLM Agent Memory",
    summary:
      "A human-facing memory viewer that lets people inspect what an agent knows, what it keeps, and what may leak next.",
    problem:
      "Users rarely understand what an LLM agent has retained about them, which makes trust shallow and privacy decisions almost blind.",
    coreIdea:
      "Turn latent agent memory into an explorable surface with contextual compression, traceable snippets, and human-readable structure.",
    systemDesign:
      "Pensieve organizes remembered user context into interactive views so people can gauge coverage, inspect sensitive content, and decide what should be forgotten, clarified, or never shared.",
    whyItMatters:
      "It turns memory from an invisible side effect into a visible interface, which is essential for user trust in persistent AI systems.",
    accent: "teal",
    href: "https://github.com/DrJonaC/Pensieve"
  }
] as const;

export const researchThemes = [
  {
    title: "Agent Memory & Privacy",
    description:
      "Building memory architectures and privacy safeguards for LLM agents that persist, retrieve, compress, and evolve over repeated interaction."
  },
  {
    title: "Trustworthy AI Systems",
    description:
      "Designing AI behavior that is observable, inspectable, and aligned with human expectations instead of hidden behind polished interfaces."
  },
  {
    title: "Federated Learning",
    description:
      "Studying collaborative learning systems under decentralized data constraints, with emphasis on privacy, incentives, and system utility."
  },
  {
    title: "Human-Visible AI Behavior",
    description:
      "Creating interfaces that reveal what models know, why they act, and where user control should be restored."
  }
];

export const timeline = [
  {
    period: "2020-2025",
    title: "Ph.D. in Computer Science, Purdue University",
    detail:
      "Research on trustworthy AI, agent memory privacy, federated learning, and interactive systems for inspecting model behavior."
  },
  {
    period: "2024",
    title: "Lecturer, Introduction to Data Science",
    detail:
      "Redesigned the course and taught data science through a high-energy, performance-driven classroom format."
  },
  {
    period: "2015-2019",
    title: "B.S. in Computer Science, Beijing Normal University",
    detail:
      "Built a strong foundation in machine learning, systems thinking, and applied mathematical modeling."
  }
];

export const selectedWorks = [
  "Utility-Enhanced Personalized Privacy Preservation in Hierarchical Federated Learning, IEEE TMC, 2025",
  "Upcycling Noise for Federated Unlearning, IEEE TMC, 2025",
  "Alliance Makes Difference? Maximizing Social Welfare in Cross-Silo Federated Learning, IEEE TVT, 2024",
  "Strategic Signaling for Utility Control in Audit Games, Computers & Security, 2022"
];

export const workAreas = [
  {
    title: "Research Direction",
    text: "LLM agent systems, memory architectures, privacy-preserving interaction, and trustworthy AI behavior."
  },
  {
    title: "Builder Workflow",
    text: "AI-native prototyping with rapid iteration in agent frameworks, evaluation loops, and human-facing product surfaces."
  },
  {
    title: "Technical Toolkit",
    text: "Python, PyTorch, Transformers, RAG, MCP, differential privacy, federated learning, and systems-oriented experimentation."
  }
];

export const memoryPrompts = [
  {
    label: "Research",
    response:
      "I study how AI agents remember, drift, and expose private context, then build systems that let people inspect those dynamics."
  },
  {
    label: "Projects",
    response:
      "MIDAS and Pensieve are my two flagship systems: one audits memory privacy, the other makes agent memory visible to humans."
  },
  {
    label: "Background",
    response:
      "My training spans trustworthy AI, federated learning, and game theory, but my current identity is very much agent systems plus product-grade experimentation."
  }
];
