import React from 'react';
import { BarChart2, PieChart, TrendingUp, Database } from 'lucide-react';
import ServiceLayout from '../components/shared/ServiceLayout';
import FeatureList from '../components/shared/FeatureList';
import BenefitsList from '../components/shared/BenefitsList';

const features = [
  {
    icon: BarChart2,
    title: 'Predictive Analytics',
    description: 'Forecast patient outcomes and optimize resource allocation'
  },
  {
    icon: PieChart,
    title: 'Population Health',
    description: 'Analyze demographic trends and health patterns'
  },
  {
    icon: TrendingUp,
    title: 'Performance Metrics',
    description: 'Track and improve operational efficiency'
  },
  {
    icon: Database,
    title: 'Data Integration',
    description: 'Seamlessly combine data from multiple sources'
  }
];

const benefits = [
  'Real-time data processing and visualization',
  'HIPAA-compliant secure data handling',
  'Custom reporting and dashboards',
  'Machine learning-powered insights'
];

export default function DataAnalytics() {
  return (
    <ServiceLayout
      title="Healthcare Data Analytics"
      description="Transform your healthcare data into actionable insights with our advanced analytics solutions"
    >
      <FeatureList title="Our Analytics Solutions" features={features} />
      <BenefitsList title="Why Choose Our Analytics?" benefits={benefits} />
    </ServiceLayout>
  );
}