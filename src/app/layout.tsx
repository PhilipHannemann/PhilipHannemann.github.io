import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import LoadBootstrap from "@/components/utils/LoadBootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Philip Hannemann",
  description: "Head of Process Automation",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <LoadBootstrap />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
