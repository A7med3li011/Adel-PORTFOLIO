import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const cairo = Cairo({ subsets: ["latin", "arabic"] });

export const metadata: Metadata = {
  title: "Adel Mostafa - Flutter Developer",
  description:
    "Flutter Developer | Mobile Software Engineer specializing in cross-platform iOS and Android apps. Top Rated on Upwork.",
  icons: {
    icon: "/assets/images/profile.jpeg",
    apple: "/assets/images/profile.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cairo.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
