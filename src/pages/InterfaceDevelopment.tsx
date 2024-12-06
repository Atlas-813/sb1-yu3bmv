import React from 'react';
import { Network, Code2, GitBranch, Terminal } from 'lucide-react';
import ServiceLayout from '../components/shared/ServiceLayout';
import FeatureList from '../components/shared/FeatureList';
import BenefitsList from '../components/shared/BenefitsList';

const features = [
  {
    icon: Network,
    title: 'Protocol Implementation',
    description: 'POCT1A, HL7, ASTM standards'
  },
  {
    icon: Code2,
    title: 'Custom Interfaces',
    description: 'Tailored integration solutions'
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Managed interface versions'
  },
  {
    icon: Terminal,
    title: 'Testing Tools',
    description: 'Comprehensive interface testing'
  }
];

const benefits = [
  'Standards compliance',
  'Improved interoperability',
  'Reduced integration time',
  'Enhanced data exchange'
];

export default function InterfaceDevelopment() {
  return (
    <ServiceLayout
      title="Interface Development"
      description="Expert implementation of healthcare data exchange protocols and standards"
    >
      <FeatureList title="Interface Development Solutions" features={features} />
      <BenefitsList title="Benefits of Standard Interfaces" benefits={benefits} />
    </ServiceLayout>
  );
}