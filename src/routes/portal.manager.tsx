import { createFileRoute } from "@tanstack/react-router";
import { PortalLoginPage } from "@/components/realty/portal-login-page";

export const Route = createFileRoute("/portal/manager")({
  head: () => ({
    meta: [
      { title: "Manager / Staff Login | Realty Managers" },
      { name: "description", content: "Sign in to the Realty Managers staff portal to oversee franchise operations, verify RERA compliance, and manage listings." },
    ],
  }),
  component: ManagerLogin,
});

function ManagerLogin() {
  return (
    <PortalLoginPage
      role="manager"
      roleLabel="Manager / Staff"
      description="Oversee franchise operations, verify RERA compliance, and manage listings across your territory."
      accentColor="oklch(0.55 0.16 160)"
    />
  );
}
