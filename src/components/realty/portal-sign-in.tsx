import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Building, HardHat, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/realty/reveal";

const portals = [
  {
    role: "Landlord",
    description:
      "Manage your properties, track tenant agreements, and monitor rental income — all from a single, secure dashboard.",
    icon: Building,
    href: "/portal/landlord",
    accent: "from-orange-600 to-amber-500",
  },
  {
    role: "Builder",
    description:
      "Access joint development pipelines, upload project documents, and coordinate milestones with verified land partners.",
    icon: HardHat,
    href: "/portal/builder",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    role: "Manager",
    subtitle: "Staff",
    description:
      "Oversee franchise operations, verify RERA compliance, and manage listings across your assigned territory.",
    icon: ShieldCheck,
    href: "/portal/manager",
    accent: "from-emerald-500 to-teal-400",
  },
] as const;

export function PortalSignIn() {
  return (
    <section className="portal-section">
      <div className="content-width">
        <Reveal className="text-center mb-16">
          <span className="eyebrow mx-auto justify-center">
            <span className="eyebrow-line" />
            PORTAL ACCESS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 text-white">
            Sign in to your portal
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            Choose your role to access a dedicated dashboard tailored to your
            needs. Secure, streamlined, and built for productivity.
          </p>
        </Reveal>

        <div className="portal-grid">
          {portals.map((portal, index) => (
            <Reveal key={portal.role} delay={index * 0.1}>
              <Link
                to={portal.href as any}
                className="portal-card group"
                aria-label={`Sign in as ${portal.role}`}
              >
                {/* Gradient accent bar */}
                <div
                  className={`portal-card-accent bg-gradient-to-r ${portal.accent}`}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="portal-card-icon">
                  <portal.icon strokeWidth={1.4} />
                </div>

                {/* Content */}
                <div className="portal-card-body">
                  <h3>
                    {portal.role}
                    {portal.subtitle && (
                      <span className="portal-subtitle">
                        {" "}
                        / {portal.subtitle}
                      </span>
                    )}
                  </h3>
                  <p>{portal.description}</p>
                </div>

                {/* CTA */}
                <div className="portal-card-cta">
                  <span>Sign in</span>
                  <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
