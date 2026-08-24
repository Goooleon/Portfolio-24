import { Inter, Alegreya } from 'next/font/google';
import './globals.css';
import React from 'react';
import AppShell from './Components/app-shell';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
 subsets: ['latin'],
 display: 'swap',
 variable: '--font-inter',
});

const alegreya = Alegreya({
 subsets: ['latin'],
 display: 'swap',
 variable: '--font-alegreya',
});

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
   <html lang="en" className={`${inter.variable} ${alegreya.variable}`}>
     <head>
       <link rel="icon" href="/favicon.ico" sizes="any" />
       <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
       <link rel="apple-touch-icon" href="/apple-icon.png" type="image/png" sizes="180x180" />
     </head>
     <body>
       <AppShell>{children}</AppShell>
       <SpeedInsights />
     </body>
   </html>
 );
}