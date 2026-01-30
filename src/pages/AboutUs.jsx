import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';

const AboutUs = () => {
  const values = [
    { icon: Target, title: 'Mission-Driven', desc: 'We are committed to delivering exceptional value through innovation' },
    { icon: Users, title: 'Client-Centric', desc: 'Your success is our success - we partner for long-term growth' },
    { icon: Award, title: 'Excellence', desc: 'We maintain the highest standards in everything we do' },
    { icon: TrendingUp, title: 'Innovation', desc: 'We stay ahead of technology trends to deliver cutting-edge solutions' }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="About Us | VDart Digital"
        description="Learn about VDart Digital's mission to transform businesses through digital innovation and technology excellence."
        keywords="about vdart digital, digital transformation company, technology consulting"
      />
      
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About VDart Digital</h1>
            <p className="text-xl text-blue-100">
              Transforming businesses through digital innovation since 2007
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                alt="Team Collaboration"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                VDart Digital is a leading digital transformation consulting firm that partners with organizations worldwide to deliver end-to-end technology solutions. With over 15 years of experience, we've helped hundreds of companies modernize their operations and achieve their digital goals.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our team of experienced professionals is passionate about helping our clients succeed in the digital age. We have a deep understanding of the latest technologies and trends, and we are committed to providing our clients with the best possible solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By deeply understanding your unique IT infrastructure and business goals, we craft tailored solutions that optimize efficiency and unlock hidden potential within your business processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl text-blue-200">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl text-blue-200">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-xl text-blue-200">Global Clients</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;