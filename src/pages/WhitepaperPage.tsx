
import React from "react";
import { Download } from "lucide-react";
import PageHeader from "../components/PageHeader";

const WhitepaperPage = () => {
  return (
    <div>
      <PageHeader 
        title="Whitepaper" 
        subtitle="Access the complete Luminary Nexus Community whitepaper" 
      />
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-luminary-dark mb-6">
              Luminary Nexus Community Whitepaper
            </h2>
            
            <p className="text-gray-700 mb-8">
              Our comprehensive whitepaper details the vision, values, governance structure, 
              tokenomics, and development roadmap for the Luminary Nexus Community. Download 
              the full document to understand the project in depth.
            </p>
            
            <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 mb-8">
              <div className="flex flex-col items-center">
                <svg 
                  className="w-16 h-16 text-luminary-blue mb-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M15 2v5a2 2 0 002 2h5"
                  ></path>
                </svg>
                <span className="text-gray-600 mb-2">Luminary_Nexus_Whitepaper.pdf</span>
              </div>
            </div>
            
            <a 
              href="#" 
              className="btn-primary inline-flex items-center px-8 py-4 text-lg"
            >
              Download Whitepaper <Download size={20} className="ml-2" />
            </a>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">What's Inside</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow">
                <h4 className="font-medium mb-2">Project Vision & Philosophy</h4>
                <p className="text-gray-600">Detailed exploration of our mission and the problems we're addressing</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow">
                <h4 className="font-medium mb-2">Governance Structure</h4>
                <p className="text-gray-600">Complete breakdown of our DAO model and decision-making processes</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow">
                <h4 className="font-medium mb-2">Tokenomics</h4>
                <p className="text-gray-600">Comprehensive explanation of token utility, distribution, and mechanics</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow">
                <h4 className="font-medium mb-2">Development Roadmap</h4>
                <p className="text-gray-600">Detailed timeline and milestones for community development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitepaperPage;
