import React from 'react';
import { Network, Shield, Zap, Workflow } from 'lucide-react';
import ServiceLayout from '../components/shared/ServiceLayout';
import FeatureList from '../components/shared/FeatureList';
import BenefitsList from '../components/shared/BenefitsList';

const features = [
  {
    icon: Network,
    title: 'System Integration',
    description: 'Seamless connectivity between healthcare systems'
  },
  {
    icon: Shield,
    title: 'Secure Transfer',
    description: 'HIPAA-compliant data transmission protocols'
  },
  {
    icon: Zap,
    title: 'Real-time Sync',
    description: 'Instant data synchronization across platforms'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Streamlined processes and reduced manual work'
  }
];

const benefits = [
  'Reduced system integration complexity',
  'Enhanced data accuracy and reliability',
  'Improved operational efficiency',
  'Comprehensive technical support'
];

export default function Connectivity() {
  return (
    <ServiceLayout
      title="Connectivity Consulting"
      description="Expert guidance for seamless healthcare system integration and interoperability"
    >
      <FeatureList title="Our Connectivity Solutions" features={features} />
      <BenefitsList title="Why Choose Our Consulting?" benefits={benefits} />
    </ServiceLayout>
  );
}