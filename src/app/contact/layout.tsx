import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Zahle App",
  description:
    "Get in touch with the Zahle App team. Questions, business listings, or feedback — we're here to help.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
