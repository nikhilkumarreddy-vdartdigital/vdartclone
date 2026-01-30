import React from 'react';
import { Code, Smartphone, Wrench, Zap, GitBranch, Layout } from 'lucide-react';
import SEO from '../components/SEO';

const DigitalServices = () => {
  const services = [
    { icon: Code, title: 'Full Stack Web Development', desc: 'End-to-end web application development' },
    { icon: Smartphone, title: 'Mobile App Development', desc: 'Native and cross-platform mobile apps' },
    { icon: Wrench, title: 'Apps Support & Maintenance', desc: 'Ongoing support and optimization' },
    { icon: Zap, title: 'Hyperautomation', desc: 'Intelligent process automation' },
    { icon: GitBranch, title: 'DevSecOps & Automation', desc: 'Secure CI/CD pipelines' },
    { icon: Layout, title: 'UI/UX & Front-End Dev', desc: 'Beautiful, intuitive user experiences' }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Digital Services | VDart Digital"
        description="Transforming ideas into digital reality. Full-stack development, mobile apps, and digital transformation services."
        keywords="digital services, web development, mobile apps, UI/UX, DevOps"
      />
      
      <section className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Digital Services</h1>
            <p className="text-2xl text-purple-100 mb-8">Transforming Ideas into Digital Reality</p>
            <p className="text-lg text-purple-200 leading-relaxed">
              Boost your online visibility with creative solutions and strategies designed for web, mobile, front-end, back-end, and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Comprehensive Digital Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <Icon className="w-12 h-12 text-purple-600 mb-4" />
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

export default DigitalServices;