import { createFileRoute } from "@tanstack/react-router";
import { PortalLoginPage } from "@/components/realty/portal-login-page";

export const Route = createFileRoute("/portal/builder")({
  head: () => ({
    meta: [
      { title: "Builder / Developer Login | Realty Managers" },
      { name: "description", content: "Sign in to your Realty Managers builder portal to access joint development pipelines, upload project documents, and coordinate milestones." },
    ],
  }),
  component: BuilderLogin,
});

function BuilderLogin() {
  return (
    <PortalLoginPage
      role="builder"
      roleLabel="Builder / Developer"
      description="Access joint development pipelines, upload project documents, and coordinate milestones with verified partners."
      accentColor="oklch(0.59 0.17 250)"
    />
  );
}
