import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/Forms/ContactForm';

export default function Contact() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Get in touch with our team of healthcare technology experts. We're here to help you transform your healthcare operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-white">
            <Mail className="w-8 h-8 mb-4 text-primary-300" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>info@acaresolution.com</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-white">
            <Phone className="w-8 h-8 mb-4 text-primary-300" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+1 (813) 220-2013</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-white">
            <MapPin className="w-8 h-8 mb-4 text-primary-300" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p>New York, NY</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}