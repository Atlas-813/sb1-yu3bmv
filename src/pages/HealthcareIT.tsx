import React from 'react';
import { Server, Shield, Users, Settings } from 'lucide-react';
import ServiceLayout from '../components/shared/ServiceLayout';
import FeatureList from '../components/shared/FeatureList';
import BenefitsList from '../components/shared/BenefitsList';

const features = [
  {
    icon: Server,
    title: 'Infrastructure Management',
    description: 'Robust healthcare IT infrastructure'
  },
  {
    icon: Shield,
    title: 'Security Services',
    description: 'Comprehensive security solutions'
  },
  {
    icon: Users,
    title: 'User Support',
    description: '24/7 technical assistance'
  },
  {
    icon: Settings,
    title: 'System Optimization',
    description: 'Performance tuning and maintenance'
  }
];

const benefits = [
  'Reduced IT complexity',
  'Enhanced system reliability',
  'Improved data security',
  'Optimized resource utilization'
];

export default function HealthcareIT() {
  return (
    <ServiceLayout
      title="Healthcare IT Management"
      description="Comprehensive IT solutions for modern healthcare organizations"
    >
      <FeatureList title="IT Management Solutions" features={features} />
      <BenefitsList title="Benefits of Professional IT Management" benefits={benefits} />
    </ServiceLayout>
  );
}