import React from 'react';

export default function RequestForm() {
  const services = [
    'Data Analytics',
    'Connectivity Consultant',
    'Website Development',
    'App Development',
    'Healthcare IT Management',
    'Medical Device Integration',
    'Interface Development',
    'Process Improvement',
    'Digital Project Management'
  ];

  return (
    <form className="space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-xl">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-white/10 border border-primary-300/30 rounded-lg 
              text-white placeholder-primary-300/50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-white mb-2">Organization</label>
          <input
            type="text"
            id="organization"
            className="w-full px-4 py-3 bg-white/10 border border-primary-300/30 rounded-lg 
              text-white placeholder-primary-300/50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Healthcare Organization"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-white/10 border border-primary-300/30 rounded-lg 
              text-white placeholder-primary-300/50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-3 bg-white/10 border border-primary-300/30 rounded-lg 
              text-white placeholder-primary-300/50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-white mb-2">Service Required</label>
        <select
          id="service"
          className="w-full px-4 py-3 bg-white/10 border border-primary-300/30 rounded-lg 
            text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service} className="text-primary-900">
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="requirements" className="block text-sm font-medium text-white mb-2">Project Requirements</label>
        <textarea
          id="requirements"
          rows={6}
          className="w-full px-4 py-3 bg-white/10 border border-primary-300/30 rounded-lg 
            text-white placeholder-primary-300/50 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Please describe your project requirements and objectives..."
        />
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">Expected Timeline</label>
        <select
          id="timeline"
          className="w-full px-4 py-3 bg-white/10 border border-primary-300/30 rounded-lg 
            text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Select timeline</option>
          <option value="immediate" className="text-primary-900">Immediate (1-2 weeks)</option>
          <option value="short" className="text-primary-900">Short term (1-2 months)</option>
          <option value="medium" className="text-primary-900">Medium term (3-6 months)</option>
          <option value="long" className="text-primary-900">Long term (6+ months)</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-medium 
          hover:bg-primary-600 transition-all duration-300"
      >
        Submit Request
      </button>
    </form>
  );
}