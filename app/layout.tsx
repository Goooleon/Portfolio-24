import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
 
const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "Shengfeng Gu · Designer",
  description: "Discover the portfolio of Shengfeng Gu (a.k.a. Gü), a Product Designer dedicated to crafting meaningful digital experiences. Explore a curated selection of works that showcase his unique approach and personality.",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}