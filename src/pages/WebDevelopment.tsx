import React from 'react';
import { Globe, Code, Lock, Smartphone } from 'lucide-react';
import ServiceLayout from '../components/shared/ServiceLayout';
import FeatureList from '../components/shared/FeatureList';
import BenefitsList from '../components/shared/BenefitsList';

const features = [
  {
    icon: Globe,
    title: 'Custom Healthcare Portals',
    description: 'Secure patient and provider portals'
  },
  {
    icon: Code,
    title: 'Modern Web Apps',
    description: 'Progressive web applications for healthcare'
  },
  {
    icon: Lock,
    title: 'HIPAA Compliance',
    description: 'Secure, compliant web solutions'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first healthcare websites'
  }
];

const benefits = [
  'Improved patient engagement',
  'Streamlined healthcare workflows',
  'Enhanced data accessibility',
  'Reduced operational costs'
];

export default function WebDevelopment() {
  return (
    <ServiceLayout
      title="Healthcare Web Development"
      description="Custom web solutions designed specifically for healthcare providers and organizations"
    >
      <FeatureList title="Web Development Solutions" features={features} />
      <BenefitsList title="Benefits of Custom Healthcare Web Solutions" benefits={benefits} />
    </ServiceLayout>
  );
}