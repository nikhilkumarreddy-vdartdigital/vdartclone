import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const servicesMenu = [
    {
      title: 'AI & Agentic AI',
      path: '/ai-agentic-ai',
      desc: 'Intelligent, adaptive, & scalable AI solutions'
    },
    {
      title: 'Data & Analytics',
      path: '/data-analytics',
      desc: 'Turn data into actionable insights'
    },
    {
      title: 'Cloud',
      path: '/cloud-services',
      desc: 'Seamless cloud management'
    },
    {
      title: 'Cybersecurity',
      path: '/cybersecurity',
      desc: 'Reliable cybersecurity solutions'
    },
    {
      title: 'Digital Services',
      path: '/digital-services',
      desc: 'Transforming ideas into digital reality'
    },
    {
      title: 'Blockchain',
      path: '/blockchain',
      desc: 'Drive resiliency & security'
    },
    {
      title: 'Enterprise & SaaS',
      path: '/enterprise-saas',
      desc: 'Streamline operations and innovation'
    },
    {
      title: 'Managed Services',
      path: '/managed-services',
      desc: 'Strategic IT, seamless execution'
    },
    {
      title: 'Quality Engineering',
      path: '/quality-engineering',
      desc: 'Reinvent quality standards'
    },
    {
      title: 'Supply Chain',
      path: '/supply-chain',
      desc: 'AI-driven supply chain ecosystem'
    }
  ];

  const productsMenu = [
    { title: 'LendSmart AI', path: '/lendsmart-ai' },
    { title: 'IDocLens', path: '/idoclens' },
    { title: 'VaartaX', path: '/vaartax' },
    { title: 'VGO™', path: '/vgo' },
    { title: 'VEngage', path: '/vengage' },
    { title: 'V-Validate', path: '/v-validate' }
  ];

  const solutionsMenu = [
    { title: 'dM+', path: '/dm-plus' },
    { title: 'dMPS', path: '/dmps' },
    { title: 'dxM', path: '/dxm' },
    { title: 'dZEN', path: '/dzen' }
  ];

  const insightsMenu = [
    { title: 'Blogs', path: '/blogs' },
    { title: 'Case Studies', path: '/case-studies' }
  ];

  const companyMenu = [
    { title: 'About Us', path: '/about-us' },
    { title: 'Awards', path: '/awards' },
    { title: 'Partners', path: '/partners' },
    { title: 'Careers', path: '/careers' },
    { title: 'CSR', path: '/csr' }
  ];

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 5L35 15L35 25L20 35L5 25L5 15L20 5Z" fill="#003D7A" />
              <path d="M20 15L28 20L20 25L12 20L20 15Z" fill="#00A3E0" />
            </svg>
            <span className="text-2xl font-bold text-gray-900">VDart Digital</span>
          </Link>

          <div className="flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openMenu === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4">
                  <div className="grid gap-2">
                    {servicesMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="font-semibold text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openMenu === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-4">
                  <div className="grid gap-2">
                    {productsMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="p-2 hover:bg-gray-50 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openMenu === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
                  <div className="grid gap-2">
                    {solutionsMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="p-2 hover:bg-gray-50 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('insights')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Insights</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openMenu === 'insights' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
                  <div className="grid gap-2">
                    {insightsMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="p-2 hover:bg-gray-50 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openMenu === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
                  <div className="grid gap-2">
                    {companyMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="p-2 hover:bg-gray-50 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact-us"
              className="px-6 py-2 bg-[#003D7A] text-white rounded-lg hover:bg-[#002855] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;