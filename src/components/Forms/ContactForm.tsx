import React from 'react';

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">First Name</label>
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-3 bg-white/10 border border-primary-300/30 rounded-lg 
              text-white placeholder-primary-300/50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="w-full px-4 py-3 bg-white/10 border border-primary-300/30 rounded-lg 
              text-white placeholder-primary-300/50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Doe"
          />
        </div>
      </div>

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
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 bg-white/10 border border-primary-300/30 rounded-lg 
            text-white placeholder-primary-300/50 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-medium 
          hover:bg-primary-600 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
}