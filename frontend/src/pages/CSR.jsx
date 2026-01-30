import React from 'react';
import { Heart, Users, Book, Sprout } from 'lucide-react';
import SEO from '../components/SEO';

const CSR = () => {
  const initiatives = [
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Partnering with local organizations to support underserved communities'
    },
    {
      icon: Users,
      title: 'Education Programs',
      description: 'Providing technology education and training to youth'
    },
    {
      icon: Book,
      title: 'Food Security',
      description: 'Working with food banks to combat hunger in our communities'
    },
    {
      icon: Sprout,
      title: 'Environmental Responsibility',
      description: 'Committed to sustainable practices and reducing our carbon footprint'
    }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Corporate Social Responsibility | VDart Digital"
        description="Learn about VDart Digital's commitment to social responsibility and community impact."
      />
      
      <section className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Corporate Social Responsibility</h1>
            <p className="text-xl text-emerald-100">
              Making a positive impact in our communities
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At VDart Digital, we believe in giving back to the communities we serve. Our CSR initiatives focus on education, food security, community support, and environmental sustainability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We partner with organizations like Atlanta Community Food Bank (ACFB) to make a meaningful difference in people's lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <div key={initiative.title} className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-emerald-100 rounded-full">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h3>
                      <p className="text-gray-600">{initiative.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">VDart Digital x ACFB Partnership</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We're proud to partner with the Atlanta Community Food Bank to help feed our communities. Through volunteer efforts and financial support, we're working together to combat hunger and food insecurity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Join us in making a difference. Together, we can create positive change in our communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSR;