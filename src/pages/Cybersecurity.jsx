import React from 'react';
import { Shield, Lock, Eye, FileCheck, AlertTriangle, Server } from 'lucide-react';
import SEO from '../components/SEO';

const Cybersecurity = () => {
  const services = [
    { icon: Lock, title: 'CIAM', desc: 'Customer Identity and Access Management' },
    { icon: Shield, title: 'Zero Trust Architecture', desc: 'Never trust, always verify security model' },
    { icon: Eye, title: 'Security Engineering', desc: 'Build security into your systems' },
    { icon: FileCheck, title: 'Governance & Compliance', desc: 'Risk management and regulatory compliance' },
    { icon: AlertTriangle, title: 'Cyber Defense', desc: 'Threat detection and incident response' },
    { icon: Server, title: 'Cyber Resilience', desc: 'Business continuity and disaster recovery' }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Cybersecurity Services | VDart Digital"
        description="Robust cybersecurity solutions for a reliable future. Protect your business with enterprise-grade security services."
        keywords="cybersecurity, zero trust, CIAM, security engineering, cyber defense"
      />
      
      <section className="bg-gradient-to-br from-red-900 to-orange-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Cybersecurity</h1>
            <p className="text-2xl text-orange-100 mb-8">Boost Your Digital Defense</p>
            <p className="text-lg text-orange-200 leading-relaxed">
              Reliable, resilient cybersecurity solutions tailored to keep your system data safe & secure from advanced threats.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Comprehensive Security Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <Icon className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;