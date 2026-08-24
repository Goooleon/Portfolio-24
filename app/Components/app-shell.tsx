'use client';

import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import SplashScreen from './splash';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <SplashScreen /> : <>{children}<Analytics /></>}
    </>
  );
}
