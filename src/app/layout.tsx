import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const description =
  "E-Marketplace for legal professionals and Case management system";

export const metadata: Metadata = {
  title: `Adhivakta: ${description}`,
  description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(inter.className)}>
      <body>{children}</body>
    </html>
  );
}
