import React from 'react';
import { Cable, Wifi, MonitorCheck, Plug } from 'lucide-react';
import ServiceLayout from '../components/shared/ServiceLayout';
import FeatureList from '../components/shared/FeatureList';
import BenefitsList from '../components/shared/BenefitsList';

const features = [
  {
    icon: Cable,
    title: 'Device Connectivity',
    description: 'Seamless medical device integration'
  },
  {
    icon: Wifi,
    title: 'Wireless Solutions',
    description: 'Modern wireless device support'
  },
  {
    icon: MonitorCheck,
    title: 'Monitoring Systems',
    description: 'Real-time device monitoring'
  },
  {
    icon: Plug,
    title: 'Legacy Integration',
    description: 'Support for legacy devices'
  }
];

const benefits = [
  'Improved data accuracy',
  'Reduced manual entry',
  'Enhanced patient care',
  'Streamlined workflows'
];

export default function DeviceIntegration() {
  return (
    <ServiceLayout
      title="Medical Device Integration"
      description="Seamless integration solutions for medical devices and healthcare systems"
    >
      <FeatureList title="Device Integration Solutions" features={features} />
      <BenefitsList title="Benefits of Device Integration" benefits={benefits} />
    </ServiceLayout>
  );
}