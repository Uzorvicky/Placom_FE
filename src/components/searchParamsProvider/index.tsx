'use client';
import { Suspense } from 'react';
import { Loader2Icon } from "lucide-react"
export function SearchParamsProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className='max-w max-h min-h-screen min-w-full'><Loader2Icon className='animate-spain h-10 w-10'/></div>}>
      {children}
    </Suspense>
  );
}