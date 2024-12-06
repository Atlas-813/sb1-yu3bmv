import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  to: string;
}

export default function ServiceCard({ icon: Icon, title, description, image, to }: ServiceCardProps) {
  return (
    <Link 
      to={to}
      className="group relative bg-white/5 backdrop-blur-sm overflow-hidden rounded-xl 
        hover:scale-102 transition-all duration-300"
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 
            group-hover:scale-110 opacity-20 group-hover:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-primary-900/40" />
      </div>
      
      <div className="relative p-8">
        <Icon size={48} className="text-primary-300 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-300 transition-colors">
          {title}
        </h3>
        <p className="text-primary-100">{description}</p>
      </div>
    </Link>
  );
}