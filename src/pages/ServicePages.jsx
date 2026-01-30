import React from 'react';
import SEO from '../components/SEO';

const GenericService = ({ title, subtitle, description, color = 'blue' }) => {
  const gradients = {
    blue: 'from-blue-900 to-indigo-900',
    purple: 'from-purple-900 to-pink-900',
    green: 'from-green-900 to-teal-900',
    orange: 'from-orange-900 to-red-900',
    cyan: 'from-cyan-900 to-blue-900'
  };

  return (
    <div className="pt-20">
      <SEO
        title={`${title} | VDart Digital`}
        description={description}
      />
      
      <section className={`bg-gradient-to-br ${gradients[color]} text-white py-20`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="text-2xl text-blue-100 mb-8">{subtitle}</p>
            <p className="text-lg text-blue-200 leading-relaxed">{description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our expert team is dedicated to delivering exceptional results that drive your business forward. Contact us to learn more about how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Blockchain = () => (
  <GenericService
    title="Blockchain"
    subtitle="Drive Resilience & Security"
    description="Drive resiliency & facilitate trust across complex networks through biometrics and tokenization with a future-proof collaborative ecosystem."
    color="purple"
  />
);

export const EnterpriseSaaS = () => (
  <GenericService
    title="Enterprise & SaaS Solutions"
    subtitle="Digitize Your Core Success"
    description="Streamline operations, enhance collaboration, and drive innovation through integration and unmatched scalability."
    color="cyan"
  />
);

export const ManagedServices = () => (
  <GenericService
    title="Managed Services"
    subtitle="Strategic IT, Seamless Execution"
    description="Engineering tech success that scales with comprehensive IT operations and service management."
    color="green"
  />
);

export const QualityEngineering = () => (
  <GenericService
    title="Quality Engineering"
    subtitle="Reinvent Quality, Reshape Workforce"
    description="Powerful performance optimization services to ensure all products meet high-quality standards."
    color="orange"
  />
);

export const SupplyChain = () => (
  <GenericService
    title="Supply Chain"
    subtitle="AI-Orchestrated. Cloud-Agnostic. Enterprise-Ready"
    description="End-to-end AI-driven supply chain execution with intelligent operational insights."
    color="blue"
  />
);