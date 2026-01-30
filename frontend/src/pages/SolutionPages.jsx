import React from 'react';
import SEO from '../components/SEO';

const GenericSolution = ({ title, tagline, description }) => {
  return (
    <div className="pt-20">
      <SEO
        title={`${title} | VDart Digital Solutions`}
        description={description}
      />
      
      <section className="bg-gradient-to-br from-teal-900 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="text-2xl text-teal-100 mb-4">{tagline}</p>
            <p className="text-lg text-teal-200">{description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Solution Overview</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
            <p className="text-gray-600 leading-relaxed">
              Our solution is designed to address your specific business challenges with innovative technology and proven methodologies. Contact our team to learn how we can help you implement this solution.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const DMPlus = () => (
  <GenericSolution
    title="dM+"
    tagline="Digital Modernization Plus"
    description="Comprehensive digital modernization solution that transforms legacy systems into modern, cloud-native applications."
  />
);

export const DMPS = () => (
  <GenericSolution
    title="dMPS"
    tagline="Digital Managed Platform Services"
    description="End-to-end managed platform services that ensure your digital infrastructure runs smoothly and efficiently."
  />
);

export const DXM = () => (
  <GenericSolution
    title="dxM"
    tagline="Digital Experience Management"
    description="Create exceptional digital experiences that engage customers and drive business growth across all touchpoints."
  />
);

export const DZEN = () => (
  <GenericSolution
    title="dZEN"
    tagline="Digital Zero-Touch Enterprise Network"
    description="Automated network management solution that enables zero-touch provisioning and intelligent operations."
  />
);