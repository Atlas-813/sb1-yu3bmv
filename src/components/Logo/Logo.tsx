import React from 'react';
import { Activity, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity group">
      <div className="relative">
        <Activity 
          className="h-10 w-10 text-primary-300 absolute transform group-hover:scale-110 transition-transform" 
          strokeWidth={2}
        />
        <Heart 
          className="h-10 w-10 text-primary-100 transform translate-x-0.5 group-hover:scale-110 transition-transform" 
          strokeWidth={2}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold leading-tight text-white">Acare</span>
        <span className="text-sm leading-tight text-primary-100">Solution LLC</span>
      </div>
    </Link>
  );
}