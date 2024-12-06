import React from 'react';
import { LineChart, TrendingUp, Target, ClipboardCheck } from 'lucide-react';
import ServiceLayout from '../components/shared/ServiceLayout';
import FeatureList from '../components/shared/FeatureList';
import BenefitsList from '../components/shared/BenefitsList';

const features = [
  {
    icon: LineChart,
    title: 'Workflow Analysis',
    description: 'Detailed process evaluation'
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Efficiency improvements'
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Measurable improvement targets'
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Assurance',
    description: 'Continuous quality monitoring'
  }
];

const benefits = [
  'Increased efficiency',
  'Reduced operational costs',
  'Improved patient satisfaction',
  'Enhanced staff productivity'
];

export default function ProcessImprovement() {
  return (
    <ServiceLayout
      title="Process Improvement Consultation"
      description="Optimize healthcare workflows and operational efficiency"
    >
      <FeatureList title="Process Improvement Solutions" features={features} />
      <BenefitsList title="Benefits of Process Optimization" benefits={benefits} />
    </ServiceLayout>
  );
}