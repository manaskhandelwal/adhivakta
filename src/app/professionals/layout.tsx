import type { Metadata } from "next";
import { Header } from "../../module/header";

export const metadata: Metadata = {
  title: `Client Dashboard | Adhivakta`,
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header type="client" />
      {children}
    </>
  );
}
