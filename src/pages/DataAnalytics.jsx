import React from 'react';
import { BarChart3, Database, TrendingUp, PieChart, Activity, Layers } from 'lucide-react';
import SEO from '../components/SEO';

const DataAnalytics = () => {
  const services = [
    { icon: Database, title: 'Data Science', desc: 'Advanced analytics and modeling' },
    { icon: BarChart3, title: 'Analytics', desc: 'Business intelligence and insights' },
    { icon: TrendingUp, title: 'Big Data & Data Lake', desc: 'Scalable data infrastructure' },
    { icon: PieChart, title: 'Reports & Visualization', desc: 'Interactive dashboards and reporting' },
    { icon: Activity, title: 'IoT Analytics', desc: 'Internet of Things data processing' },
    { icon: Layers, title: 'Data Fabric', desc: 'Unified data architecture' }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Data & Analytics Services | VDart Digital"
        description="Turn data into actionable insights and drive smarter decisions for strategic growth with our data analytics services."
        keywords="data analytics, big data, business intelligence, data science, IoT"
      />
      
      <section className="bg-gradient-to-br from-green-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Data & Analytics</h1>
            <p className="text-2xl text-green-100 mb-8">Driving Growth Through Data Intelligence</p>
            <p className="text-lg text-green-200 leading-relaxed">
              Turn data into actionable insights, and drive smarter decisions for strategic growth, keeping you ahead of your competition.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Data-Driven Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <Icon className="w-12 h-12 text-green-600 mb-4" />
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

export default DataAnalytics;