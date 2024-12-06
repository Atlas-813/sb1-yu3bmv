import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NetworkBackground from '../Background/NetworkBackground';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <NetworkBackground />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight mb-6 text-white">
            Healthcare Connectivity and Analytics Reimagined
          </h1>
          <p className="text-xl text-primary-100 mb-8">
            Transform healthcare data into actionable insights with our enterprise-grade analytics platform designed for modern healthcare providers.
          </p>
          <Link 
            to="/request"
            className="inline-flex bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-medium 
              hover:bg-primary-600 transition-all duration-300 items-center space-x-2 shadow-lg shadow-primary-900/50"
          >
            <span>Request a Meeting</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}