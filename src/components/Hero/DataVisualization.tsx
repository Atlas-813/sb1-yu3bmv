import React from 'react';

export default function DataVisualization() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent rounded-3xl" />
      <div className="relative grid grid-cols-3 gap-4 p-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-gradient-to-br from-primary-200 to-primary-100
              hover:scale-102 transition-transform duration-300"
            style={{
              animation: `pulse ${2 + (i * 0.5)}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}