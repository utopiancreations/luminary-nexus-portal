
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "../components/HeroSection";
import ValueCard from "../components/ValueCard";

const HomePage = () => {
  const coreValues = [
    {
      title: "Radical Acceptance",
      description: "Embracing diversity and creating a truly inclusive community",
      icon: "heart"
    },
    {
      title: "Sustainability",
      description: "Prioritizing environmental responsibility in all decisions",
      icon: "leaf"
    },
    {
      title: "Ethical Technology",
      description: "Developing and using technology that prioritizes human well-being",
      icon: "code"
    },
    {
      title: "Personal Growth",
      description: "Supporting individual development and lifelong learning",
      icon: "brain"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Core Values Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Core Values</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Luminary Nexus, we're guided by principles that promote sustainability,
            inclusion, and ethical integration of technology with nature.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/values" className="inline-flex items-center text-luminary-blue hover:text-luminary-teal transition-colors">
            View All Core Values <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
      
      {/* LNX Token Section */}
      <section className="bg-section-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-semibold mb-4">Luminary Nexus Token (LNX)</h2>
              <p className="text-gray-600 mb-6">
                Our community token enables decentralized governance and 
                supports our internal economy. LNX is built on the Polygon
                blockchain with a focus on utility rather than speculation.
              </p>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg inline-block">
                <p className="font-semibold text-luminary-dark">Important Note:</p>
                <p className="text-red-600 font-medium">There is NO token sale.</p>
              </div>
              <div className="mt-6">
                <Link to="/token" className="btn-primary inline-flex items-center">
                  Learn About Tokenomics <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="md:w-5/12">
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">Key Token Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Token Name</span>
                    <span className="font-medium">Luminary Nexus Token</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Symbol</span>
                    <span className="font-medium">LNX</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Blockchain</span>
                    <span className="font-medium">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Initial Supply</span>
                    <span className="font-medium">1 Billion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Roadmap Overview */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Project Roadmap</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our path to building a sustainable, decentralized community with 
            clear milestones and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-gray-200 text-center hover:border-luminary-blue transition-all">
            <div className="w-12 h-12 bg-luminary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold text-xl mb-2">Blueprint & Foundation</h3>
            <p className="text-gray-600">
              Community formation, initial planning, and token distribution to aligned members.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border border-gray-200 text-center hover:border-luminary-blue transition-all">
            <div className="w-12 h-12 bg-luminary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold text-xl mb-2">Funding & Community</h3>
            <p className="text-gray-600">
              Resource gathering, partnership development, and growing our community.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border border-gray-200 text-center hover:border-luminary-blue transition-all">
            <div className="w-12 h-12 bg-luminary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="font-semibold text-xl mb-2">Construction & DAO</h3>
            <p className="text-gray-600">
              Physical development and activation of full decentralized governance.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link to="/roadmap" className="btn-secondary inline-flex items-center">
            View Full Roadmap <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-luminary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Luminary Nexus Community?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take our values-alignment questionnaire to see if you're a good fit for the
            initial community and potential token airdrop.
          </p>
          <Link to="/questionnaire" className="btn-primary text-lg px-8 py-4">
            Take the Questionnaire
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
