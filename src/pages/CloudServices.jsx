import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Server, Lock, DollarSign, Shield, Code, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const CloudServices = () => {
  const services = [
    { icon: Cloud, title: 'Cloud Migration', desc: 'Seamless migration to cloud infrastructure' },
    { icon: Server, title: 'Platform Engineering', desc: 'Build scalable cloud platforms' },
    { icon: Lock, title: 'Cloud Security', desc: 'Enterprise-grade security solutions' },
    { icon: DollarSign, title: 'Cloud FinOps', desc: 'Optimize cloud costs and spending' },
    { icon: Shield, title: 'Cloud Managed Services', desc: '24/7 cloud infrastructure management' },
    { icon: Code, title: 'SAP on Cloud', desc: 'SAP implementation and migration' }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Cloud Services & Solutions | VDart Digital"
        description="The ultimate destination for all your cloud solutions. Cost-effective, flexible, and seamless cloud management for uninterrupted access."
        keywords="cloud services, cloud migration, cloud security, AWS, Azure, Google Cloud, cloud finops"
      />
      
      <section className="bg-gradient-to-br from-cyan-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Cloud Services</h1>
            <p className="text-2xl text-cyan-100 mb-8">
              The Ultimate Destination for All Your Cloud Solutions
            </p>
            <p className="text-lg text-cyan-200 leading-relaxed">
              Cost-effective, flexible, and seamless cloud management for uninterrupted access. We help organizations modernize infrastructure, optimize costs, and accelerate innovation through comprehensive cloud solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Seamless Cloud Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <Icon className="w-12 h-12 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Cloud Services?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our cloud experts help you navigate the complexity of cloud adoption, ensuring your infrastructure is secure, scalable, and optimized for performance and cost.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Multi-cloud and hybrid cloud expertise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Security-first approach with compliance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">24/7 monitoring and support</span>
                </li>
              </ul>
              <Link
                to="/contact-us"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                <span>Start Your Cloud Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1752670352717-00f00392792e?w=600"
                alt="Cloud Services"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServices;