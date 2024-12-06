import React from 'react';
import { 
  BarChart2, Cloud, Globe, Smartphone, 
  Stethoscope, Cable, Network, LineChart, Briefcase 
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: BarChart2,
    title: 'Data Analytics',
    description: 'Transform healthcare data into actionable insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    to: '/services/data-analytics'
  },
  {
    icon: Cloud,
    title: 'Connectivity Consultant',
    description: 'Expert guidance for seamless system integration',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    to: '/services/connectivity'
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom healthcare web solutions',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
    to: '/services/web-development'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Mobile solutions for healthcare providers',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
    to: '/services/app-development'
  },
  {
    icon: Stethoscope,
    title: 'Healthcare IT Management',
    description: 'Comprehensive IT solutions for healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    to: '/services/healthcare-it'
  },
  {
    icon: Cable,
    title: 'Medical Device Integration',
    description: 'Seamless device connectivity solutions',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800',
    to: '/services/device-integration'
  },
  {
    icon: Network,
    title: 'Interface Development',
    description: 'POCT1A, HL7, ASTM implementations',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    to: '/services/interface-development'
  },
  {
    icon: LineChart,
    title: 'Process Improvement',
    description: 'Optimize healthcare workflows',
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=800',
    to: '/services/process-improvement'
  },
  {
    icon: Briefcase,
    title: 'Digital Project Management',
    description: 'Healthcare project delivery expertise',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    to: '/services/project-management'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-primary-50/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Our Services</h2>
        <p className="text-xl text-center mb-12 text-primary-100 max-w-3xl mx-auto">
          Comprehensive healthcare technology solutions to transform your organization
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}