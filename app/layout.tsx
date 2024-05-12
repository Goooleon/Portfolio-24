'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import React, { useState, useEffect } from "react";
import SplashScreen from "./Components/splash";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
 
const inter = Inter({ subsets: ["latin"] });
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed
 
    return () => clearTimeout(timer);
  }, []);
 
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon.svg"
          type="image/svg+xml"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />
      </head>
      <body className={inter.className}>
        {loading ? (
          <SplashScreen />
        ) : (
          <>
            {children}
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}