import React from 'react';
import { Smartphone, Cloud, Shield, Zap } from 'lucide-react';
import ServiceLayout from '../components/shared/ServiceLayout';
import FeatureList from '../components/shared/FeatureList';
import BenefitsList from '../components/shared/BenefitsList';

const features = [
  {
    icon: Smartphone,
    title: 'Native Apps',
    description: 'iOS and Android healthcare applications'
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Seamless data synchronization'
  },
  {
    icon: Shield,
    title: 'Secure Data',
    description: 'HIPAA-compliant mobile solutions'
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'Instant notifications and alerts'
  }
];

const benefits = [
  'Enhanced patient engagement',
  'Improved care coordination',
  'Real-time health monitoring',
  'Efficient care delivery'
];

export default function AppDevelopment() {
  return (
    <ServiceLayout
      title="Healthcare App Development"
      description="Mobile solutions that transform healthcare delivery and patient engagement"
    >
      <FeatureList title="Mobile Development Solutions" features={features} />
      <BenefitsList title="Benefits of Healthcare Apps" benefits={benefits} />
    </ServiceLayout>
  );
}