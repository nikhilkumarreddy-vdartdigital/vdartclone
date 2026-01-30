import React from 'react';
import SEO from '../components/SEO';

const GenericProduct = ({ title, description, features = [] }) => {
  return (
    <div className="pt-20">
      <SEO
        title={`${title} | VDart Digital`}
        description={description}
      />
      
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-indigo-100">{description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
            {features.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export const LendSmartAI = () => (
  <GenericProduct
    title="LendSmart AI"
    description="AI-powered lending platform that transforms the loan origination process with intelligent automation and risk assessment."
    features={[
      'Automated credit assessment and risk scoring',
      'Real-time decision making',
      'Regulatory compliance built-in',
      'Seamless integration with existing systems'
    ]}
  />
);

export const IDocLens = () => (
  <GenericProduct
    title="IDocLens"
    description="Intelligent document processing solution powered by AI to extract, analyze, and validate information from documents."
    features={[
      'Advanced OCR and document recognition',
      'Automated data extraction',
      'Multi-format document support',
      'Intelligent validation and verification'
    ]}
  />
);

export const VaartaX = () => (
  <GenericProduct
    title="VaartaX"
    description="Conversational AI platform that enables intelligent customer interactions and automated support."
    features={[
      'Natural language processing',
      'Multi-channel support',
      'Intent recognition and context awareness',
      'Seamless human handoff'
    ]}
  />
);

export const VGO = () => (
  <GenericProduct
    title="VGO™"
    description="Enterprise workflow automation platform that streamlines business processes and enhances productivity."
    features={[
      'Visual workflow designer',
      'Integration with enterprise systems',
      'Real-time monitoring and analytics',
      'Scalable cloud architecture'
    ]}
  />
);

export const VEngage = () => (
  <GenericProduct
    title="VEngage"
    description="Employee engagement platform that fosters collaboration, recognition, and organizational culture."
    features={[
      'Social collaboration tools',
      'Recognition and rewards system',
      'Pulse surveys and feedback',
      'Analytics and insights dashboard'
    ]}
  />
);

export const VValidate = () => (
  <GenericProduct
    title="V-Validate"
    description="Data validation and quality assurance platform ensuring accuracy and integrity of business data."
    features={[
      'Automated data quality checks',
      'Custom validation rules',
      'Real-time data monitoring',
      'Comprehensive reporting'
    ]}
  />
);