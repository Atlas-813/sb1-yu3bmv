import React from 'react';

interface BenefitsListProps {
  title: string;
  benefits: string[];
}

export default function BenefitsList({ title, benefits }: BenefitsListProps) {
  return (
    <div className="bg-primary-900 rounded-2xl p-8 text-white">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <ul className="space-y-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-primary-300 rounded-full" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}