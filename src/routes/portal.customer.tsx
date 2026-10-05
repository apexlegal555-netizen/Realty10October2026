import { createFileRoute } from "@tanstack/react-router";
import { PortalLoginPage } from "@/components/realty/portal-login-page";

export const Route = createFileRoute("/portal/customer")({
  head: () => ({
    meta: [
      { title: "Customer Login | Realty Managers" },
      { name: "description", content: "Sign in to your Realty Managers customer account to browse verified properties, track inquiries, and manage your property journey." },
    ],
  }),
  component: CustomerLogin,
});

function CustomerLogin() {
  return (
    <PortalLoginPage
      role="customer"
      roleLabel="Customer"
      description="Browse verified properties, track your inquiries, and manage your property journey."
      accentColor="oklch(0.685 0.18 45)"
    />
  );
}
