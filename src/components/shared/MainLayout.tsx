import React, { ReactNode, Suspense } from 'react';
import NetworkBackground from '../Background/NetworkBackground';
import LoadingScreen from './LoadingScreen';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white relative">
      <NetworkBackground />
      <Suspense fallback={<LoadingScreen />}>
        <div className="relative z-10">
          {children}
        </div>
      </Suspense>
    </div>
  );
}