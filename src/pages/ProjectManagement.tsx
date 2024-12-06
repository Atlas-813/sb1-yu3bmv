import React from 'react';
import { Briefcase, Calendar, Users, Target } from 'lucide-react';
import ServiceLayout from '../components/shared/ServiceLayout';
import FeatureList from '../components/shared/FeatureList';
import BenefitsList from '../components/shared/BenefitsList';

const features = [
  {
    icon: Briefcase,
    title: 'Project Planning',
    description: 'Comprehensive project roadmaps'
  },
  {
    icon: Calendar,
    title: 'Timeline Management',
    description: 'Efficient project scheduling'
  },
  {
    icon: Users,
    title: 'Team Coordination',
    description: 'Effective resource management'
  },
  {
    icon: Target,
    title: 'Goal Achievement',
    description: 'Results-driven execution'
  }
];

const benefits = [
  'On-time project delivery',
  'Cost-effective execution',
  'Clear communication',
  'Risk mitigation'
];

export default function ProjectManagement() {
  return (
    <ServiceLayout
      title="Digital Project Management"
      description="Expert healthcare project management for successful digital transformations"
    >
      <FeatureList title="Project Management Solutions" features={features} />
      <BenefitsList title="Benefits of Professional PM" benefits={benefits} />
    </ServiceLayout>
  );
}