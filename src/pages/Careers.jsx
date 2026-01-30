import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const Careers = () => {
  const openings = [
    {
      title: 'Senior Cloud Architect',
      department: 'Cloud Services',
      location: 'Atlanta, GA / Remote',
      type: 'Full-time'
    },
    {
      title: 'Cybersecurity Consultant',
      department: 'Cybersecurity',
      location: 'New York, NY / Hybrid',
      type: 'Full-time'
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI & Data',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time'
    },
    {
      title: 'Full Stack Developer',
      department: 'Digital Services',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'DevOps Engineer',
      department: 'Digital Services',
      location: 'Chicago, IL / Hybrid',
      type: 'Full-time'
    },
    {
      title: 'Data Analyst',
      department: 'Data & Analytics',
      location: 'Boston, MA / Remote',
      type: 'Full-time'
    }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Careers | VDart Digital"
        description="Join our team of talented professionals and help transform businesses through technology."
      />
      
      <section className="bg-gradient-to-br from-green-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Careers at VDart Digital</h1>
            <p className="text-xl text-green-100">
              Join our team and make an impact
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
            <p className="text-gray-600 leading-relaxed">
              At VDart Digital, we're passionate about technology and innovation. We offer a collaborative environment where talented professionals can grow their careers while working on challenging and meaningful projects.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h3>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;