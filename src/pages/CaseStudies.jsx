import React from 'react';
import SEO from '../components/SEO';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Fortune 500 Automotive Company Cloud Migration',
      client: 'Major Automotive Manufacturer',
      challenge: 'Legacy infrastructure limiting scalability and innovation',
      solution: 'Comprehensive cloud migration to AWS with zero downtime',
      results: ['40% cost reduction', '3x faster deployment', '99.99% uptime'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600'
    },
    {
      title: 'Financial Services Cybersecurity Transformation',
      client: 'Leading Financial Institution',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Zero Trust architecture implementation with advanced threat detection',
      results: ['100% compliance achieved', '70% reduction in security incidents', 'Enhanced customer trust'],
      image: 'https://images.pexels.com/photos/225250/pexels-photo-225250.jpeg?w=600'
    },
    {
      title: 'Retail Analytics Platform Modernization',
      client: 'National Retail Chain',
      challenge: 'Siloed data preventing actionable insights',
      solution: 'AI-powered analytics platform with real-time dashboards',
      results: ['50% faster insights', '25% revenue increase', 'Unified customer view'],
      image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?w=600'
    }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Case Studies | VDart Digital"
        description="Explore our success stories and client transformations across industries."
      />
      
      <section className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-purple-100">
              Real results for real businesses
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-8">
                    <div className="text-sm font-semibold text-purple-600 mb-2">{study.client}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center space-x-2 text-gray-600">
                              <span className="text-green-600 font-bold">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;