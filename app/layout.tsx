import { Inter, Splash } from "next/font/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <>
            {children}
            <Analytics />
            <SpeedInsights />
          </>
      </body>
    </html>
  );
}
