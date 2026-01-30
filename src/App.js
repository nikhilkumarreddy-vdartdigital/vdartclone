import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

// Pages
import Home from "./pages/Home";
import AIAgenticAI from "./pages/AIAgenticAI";
import CloudServices from "./pages/CloudServices";
import Cybersecurity from "./pages/Cybersecurity";
import DigitalServices from "./pages/DigitalServices";
import DataAnalytics from "./pages/DataAnalytics";
import { Blockchain, EnterpriseSaaS, ManagedServices, QualityEngineering, SupplyChain } from "./pages/ServicePages";
import { LendSmartAI, IDocLens, VaartaX, VGO, VEngage, VValidate } from "./pages/ProductPages";
import { DMPlus, DMPS, DXM, DZEN } from "./pages/SolutionPages";
import Blogs from "./pages/Blogs";
import CaseStudies from "./pages/CaseStudies";
import AboutUs from "./pages/AboutUs";
import Awards from "./pages/Awards";
import Partners from "./pages/Partners";
import Careers from "./pages/Careers";
import CSR from "./pages/CSR";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Services */}
              <Route path="/ai-agentic-ai" element={<AIAgenticAI />} />
              <Route path="/cloud-services" element={<CloudServices />} />
              <Route path="/cybersecurity" element={<Cybersecurity />} />
              <Route path="/digital-services" element={<DigitalServices />} />
              <Route path="/data-analytics" element={<DataAnalytics />} />
              <Route path="/blockchain" element={<Blockchain />} />
              <Route path="/enterprise-saas" element={<EnterpriseSaaS />} />
              <Route path="/managed-services" element={<ManagedServices />} />
              <Route path="/quality-engineering" element={<QualityEngineering />} />
              <Route path="/supply-chain" element={<SupplyChain />} />
              
              {/* Products */}
              <Route path="/lendsmart-ai" element={<LendSmartAI />} />
              <Route path="/idoclens" element={<IDocLens />} />
              <Route path="/vaartax" element={<VaartaX />} />
              <Route path="/vgo" element={<VGO />} />
              <Route path="/vengage" element={<VEngage />} />
              <Route path="/v-validate" element={<VValidate />} />
              
              {/* Solutions */}
              <Route path="/dm-plus" element={<DMPlus />} />
              <Route path="/dmps" element={<DMPS />} />
              <Route path="/dxm" element={<DXM />} />
              <Route path="/dzen" element={<DZEN />} />
              
              {/* Insights */}
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              
              {/* Company */}
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/csr" element={<CSR />} />
              
              {/* Contact */}
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
