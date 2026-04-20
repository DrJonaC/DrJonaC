import Link from "next/link";
import { Card } from "@/components/card";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { siteMeta } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let’s build agent systems people can actually trust"
        description="I am especially interested in research engineering, agent systems, applied AI, and product-facing work around memory, privacy, and trustworthy interaction."
      />
      <Section eyebrow="Reach Out" title="Open to conversation">
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="space-y-4">
            <p className="eyebrow">Email</p>
            <a href={`mailto:${siteMeta.email}`} className="text-2xl font-semibold tracking-[-0.03em]">
              {siteMeta.email}
            </a>
            <p className="leading-7 text-[var(--color-muted)]">
              Best for collaboration, roles, research conversations, or product ideas around AI
              agents and memory interfaces.
            </p>
          </Card>
          <Card className="space-y-4">
            <p className="eyebrow">Links</p>
            <div className="flex flex-col gap-3 text-lg text-[var(--color-muted)]">
              {siteMeta.socialLinks.map((link) => (
                <Link key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </Link>
              ))}
              <Link href="/Jianan_Chen_Resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </Link>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
