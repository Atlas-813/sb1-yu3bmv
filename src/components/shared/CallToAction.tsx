import React from 'react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  text: string;
}

export default function CallToAction({ text }: CallToActionProps) {
  return (
    <div className="text-center">
      <Link
        to="/request"
        className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-medium 
          hover:bg-primary-600 transition-all duration-300"
      >
        {text}
      </Link>
    </div>
  );
}