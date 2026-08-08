import type { Metadata } from "next";
import { Space_Grotesk, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Adel Mostafa - Flutter Developer",
  description:
    "Flutter Developer | Mobile Software Engineer specializing in cross-platform iOS and Android apps. Top Rated on Upwork.",
  icons: {
    icon: "/assets/images/profile.png",
    apple: "/assets/images/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${archivo.variable} ${spaceGrotesk.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}