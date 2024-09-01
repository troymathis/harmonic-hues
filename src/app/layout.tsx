import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const gambarino = localFont({
  src: "../../public/fonts/gambarino.ttf",
  variable: "--font-gambarino",
});

export const metadata: Metadata = {
  title: "Harmonic Hues",
  description: "Photography by Harmonic Hues",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gambarino.variable}>{children}</body>
    </html>
  );
}
