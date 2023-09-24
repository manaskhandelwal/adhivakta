import type { Metadata } from "next";
import { Header } from "../../../module/header";

export const metadata: Metadata = {
  title: `Client Dashboard | Adhivakta`,
};

export default function ClientSignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Header type="landing" /> */}
      {children}
    </>
  );
}
