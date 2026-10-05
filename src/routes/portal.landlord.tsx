import { createFileRoute } from "@tanstack/react-router";
import { PortalLoginPage } from "@/components/realty/portal-login-page";

export const Route = createFileRoute("/portal/landlord")({
  head: () => ({
    meta: [
      { title: "Landlord Login | Realty Managers" },
      { name: "description", content: "Sign in to your Realty Managers landlord portal to manage properties, track tenant agreements, and monitor rental income." },
    ],
  }),
  component: LandlordLogin,
});

function LandlordLogin() {
  return (
    <PortalLoginPage
      role="landlord"
      roleLabel="Landlord"
      description="Manage your properties, track tenant agreements, and monitor rental income from one dashboard."
      accentColor="oklch(0.685 0.18 45)"
    />
  );
}
