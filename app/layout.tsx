import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adel Mostafa - Flutter Developer",
  description: "Flutter Developer | Mobile Software Engineer specializing in cross-platform iOS and Android apps. Top Rated on Upwork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#030712] text-white antialiased`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
