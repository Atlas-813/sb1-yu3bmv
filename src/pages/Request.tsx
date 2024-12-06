import React from 'react';
import RequestForm from '../components/Forms/RequestForm';

export default function Request() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Request Our Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Tell us about your project and requirements. We'll get back to you with a tailored solution for your healthcare organization.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <RequestForm />
        </div>
      </div>
    </div>
  );
}