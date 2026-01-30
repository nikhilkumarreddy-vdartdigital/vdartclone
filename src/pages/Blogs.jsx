import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Blogs = () => {
  const blogs = [
    {
      title: 'What is Zero Trust and why should we care?',
      category: 'Cybersecurity',
      date: 'January 15, 2026',
      author: 'VDart Digital',
      image: 'https://images.pexels.com/photos/225250/pexels-photo-225250.jpeg?w=400',
      excerpt: 'Discover the importance of Zero Trust architecture in modern cybersecurity and how it protects your organization.'
    },
    {
      title: 'Protecting Your People and Data: Guide to Mobile Device Management',
      category: 'Cybersecurity',
      date: 'January 10, 2026',
      author: 'VDart Digital',
      image: 'https://images.unsplash.com/photo-1633184297371-6a91e49832d9?w=400',
      excerpt: 'Learn best practices for mobile device management and how to secure your corporate data on mobile devices.'
    },
    {
      title: 'How to Protect Your Business Against Cyber Threats',
      category: 'Cybersecurity',
      date: 'January 5, 2026',
      author: 'VDart Digital',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?w=400',
      excerpt: 'Essential strategies and best practices to safeguard your business from evolving cyber threats.'
    },
    {
      title: 'Cloud Migration Best Practices for 2026',
      category: 'Cloud',
      date: 'December 20, 2025',
      author: 'VDart Digital',
      image: 'https://images.unsplash.com/photo-1752670352717-00f00392792e?w=400',
      excerpt: 'Step-by-step guide to successful cloud migration with minimal disruption to your business operations.'
    },
    {
      title: 'AI-Driven Analytics: Transforming Business Intelligence',
      category: 'Data & Analytics',
      date: 'December 15, 2025',
      author: 'VDart Digital',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=400',
      excerpt: 'How artificial intelligence is revolutionizing data analytics and business intelligence.'
    },
    {
      title: 'The Future of Enterprise Software Development',
      category: 'Digital Services',
      date: 'December 10, 2025',
      author: 'VDart Digital',
      image: 'https://images.unsplash.com/photo-1580920461931-fcb03a940df5?w=400',
      excerpt: 'Exploring emerging trends in enterprise software development and what they mean for your business.'
    }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Blog | VDart Digital Insights"
        description="Stay updated with the latest insights on digital transformation, cloud, AI, cybersecurity, and technology trends."
        keywords="digital transformation blog, technology insights, cloud computing blog, AI articles"
      />
      
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-blue-100">
              Insights, trends, and best practices in digital transformation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm font-semibold text-blue-600 mb-2">{blog.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;