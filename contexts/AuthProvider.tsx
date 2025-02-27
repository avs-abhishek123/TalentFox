// contexts/AuthProvider.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export default function AuthProvider({ 
  children,
  session 
}: { 
  children: ReactNode,
  session?: any
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}