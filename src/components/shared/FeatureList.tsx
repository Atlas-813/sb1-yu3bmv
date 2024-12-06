import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureListProps {
  title: string;
  features: Feature[];
}

export default function FeatureList({ title, features }: FeatureListProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-primary-900">{title}</h2>
      <div className="space-y-4">
        {features.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-primary-50 rounded-lg">
            <item.icon className="w-6 h-6 text-primary-500 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-primary-900">{item.title}</h3>
              <p className="text-primary-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}