import React, { ReactNode } from 'react';
import PageHeader from './PageHeader';
import CallToAction from './CallToAction';

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function ServiceLayout({ title, description, children }: ServiceLayoutProps) {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <PageHeader title={title} description={description} />
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {children}
        </div>
        <CallToAction text="Request a Meeting" />
      </div>
    </div>
  );
}