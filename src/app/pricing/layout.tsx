import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List Your Business on Zahle App — Pricing",
  description:
    "Get your restaurant, café, or business listed on Zahle App. Choose from three flexible plans.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
