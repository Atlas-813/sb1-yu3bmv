import React from 'react';
import { Activity } from 'lucide-react';
import NetworkBackground from '../Background/NetworkBackground';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50">
      <NetworkBackground />
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="flex items-center space-x-2 mb-8">
          <Activity 
            className="h-12 w-12 text-primary-300 animate-[pulse_3s_ease-in-out_infinite]" 
            strokeWidth={1.5}
          />
          <div className="flex flex-col">
            <span className="text-3xl font-bold leading-tight text-white animate-[fadeIn_3s_ease-in-out]">Acare</span>
            <span className="text-lg leading-tight text-primary-300 animate-[fadeIn_3s_ease-in-out_200ms]">Solution LLC</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-primary-300 animate-[bounce_3s_ease-in-out_infinite_0ms]"></div>
          <div className="w-3 h-3 rounded-full bg-primary-400 animate-[bounce_3s_ease-in-out_infinite_200ms]"></div>
          <div className="w-3 h-3 rounded-full bg-primary-500 animate-[bounce_3s_ease-in-out_infinite_400ms]"></div>
        </div>
      </div>
    </div>
  );
}