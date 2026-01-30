import React from 'react';
import SEO from '../components/SEO';

const Partners = () => {
  const partners = [
    { name: 'AWS', category: 'Cloud Partner' },
    { name: 'Microsoft Azure', category: 'Cloud Partner' },
    { name: 'Google Cloud', category: 'Cloud Partner' },
    { name: 'Salesforce', category: 'Technology Partner' },
    { name: 'SAP', category: 'Enterprise Partner' },
    { name: 'ServiceNow', category: 'Technology Partner' },
    { name: 'Oracle', category: 'Enterprise Partner' },
    { name: 'Workday', category: 'Technology Partner' }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Partners | VDart Digital"
        description="VDart Digital partners with leading technology providers to deliver exceptional solutions."
      />
      
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl text-blue-100">
              Collaborating with industry leaders to deliver best-in-class solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow text-center">
                <div className="text-sm font-semibold text-blue-600 mb-2">{partner.category}</div>
                <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;