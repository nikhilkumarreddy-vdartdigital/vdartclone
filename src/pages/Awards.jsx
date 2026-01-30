import React from 'react';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import SEO from '../components/SEO';

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: 'Inc. 5000 Fastest Growing Companies',
      year: '2024',
      description: 'Recognized for exceptional growth and innovation'
    },
    {
      icon: Award,
      title: 'MBE Certified',
      year: '2023',
      description: 'Minority Business Enterprise certification'
    },
    {
      icon: Star,
      title: 'Best Digital Transformation Partner',
      year: '2024',
      description: 'Industry recognition for excellence in digital services'
    },
    {
      icon: Medal,
      title: 'Top IT Services Company',
      year: '2024',
      description: 'Ranked among leading IT service providers'
    }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Awards & Recognition | VDart Digital"
        description="Explore VDart Digital's awards and industry recognition for excellence in digital transformation and technology services."
      />
      
      <section className="bg-gradient-to-br from-yellow-900 to-orange-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Awards & Recognition</h1>
            <p className="text-xl text-yellow-100">
              Celebrating our achievements and industry recognition
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award) => {
              const Icon = award.icon;
              return (
                <div key={award.title} className="flex items-start space-x-6 p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-yellow-100 rounded-full">
                      <Icon className="w-8 h-8 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-yellow-600 mb-2">{award.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{award.title}</h3>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;