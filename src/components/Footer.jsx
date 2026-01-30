import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0D3B4E] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/awards" className="hover:text-cyan-400 transition-colors">Awards</Link></li>
              <li><Link to="/partners" className="hover:text-cyan-400 transition-colors">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/cloud-services" className="hover:text-cyan-400 transition-colors">Cloud Services</Link></li>
              <li><Link to="/cybersecurity" className="hover:text-cyan-400 transition-colors">Cybersecurity</Link></li>
              <li><Link to="/managed-services" className="hover:text-cyan-400 transition-colors">Managed Services</Link></li>
              <li><Link to="/digital-services" className="hover:text-cyan-400 transition-colors">Digital Services</Link></li>
              <li><Link to="/blockchain" className="hover:text-cyan-400 transition-colors">Blockchain Services</Link></li>
              <li><Link to="/enterprise-saas" className="hover:text-cyan-400 transition-colors">Enterprise & SaaS Solutions</Link></li>
              <li><Link to="/data-analytics" className="hover:text-cyan-400 transition-colors">Data Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/lendsmart-ai" className="hover:text-cyan-400 transition-colors">LendSmart AI</Link></li>
              <li><Link to="/idoclens" className="hover:text-cyan-400 transition-colors">IDocLens</Link></li>
              <li><Link to="/vaartax" className="hover:text-cyan-400 transition-colors">VaartaX</Link></li>
              <li><Link to="/vgo" className="hover:text-cyan-400 transition-colors">VGO™</Link></li>
              <li><Link to="/vengage" className="hover:text-cyan-400 transition-colors">VEngage</Link></li>
              <li><Link to="/v-validate" className="hover:text-cyan-400 transition-colors">V-Validate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/dm-plus" className="hover:text-cyan-400 transition-colors">dM+</Link></li>
              <li><Link to="/dmps" className="hover:text-cyan-400 transition-colors">dMPS</Link></li>
              <li><Link to="/dxm" className="hover:text-cyan-400 transition-colors">dxM</Link></li>
              <li><Link to="/dzen" className="hover:text-cyan-400 transition-colors">dZEN</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact-us" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy (US)</Link></li>
              <li><Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© VDart Digital 2026. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;