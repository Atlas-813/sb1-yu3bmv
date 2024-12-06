import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-primary-900 mb-4">{title}</h1>
      <p className="text-xl text-primary-700 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}