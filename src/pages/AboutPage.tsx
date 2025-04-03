
import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const AboutPage = () => {
  return (
    <div>
      <PageHeader 
        title="About Our Vision" 
        subtitle="Creating a sustainable future that harmoniously integrates nature, technology, and community" 
      />
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-luminary-blue mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Luminary Nexus is building a real-world, self-sustaining, decentralized community 
              that prioritizes radical acceptance, sustainability, ethical technology integration, 
              personal growth, and collaborative governance.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We believe in creating spaces where humans and advanced AI can coexist harmoniously, 
              working together to build regenerative systems that respect natural resources while 
              leveraging ethical technology for the benefit of all.
            </p>
            <p className="text-lg text-gray-700">
              Our community model combines decentralized governance through our DAO with 
              physical infrastructure, creating a blueprint for sustainable living that can be 
              replicated and adapted worldwide.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-luminary-green mb-6">The Problems We're Addressing</h2>
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-medium mb-2">Environmental Degradation</h3>
                <p className="text-gray-700">
                  Many communities aren't designed with sustainability in mind, leading to resource 
                  depletion and ecosystem damage. We're building with regenerative practices at our core.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-medium mb-2">Ethical Technology Integration</h3>
                <p className="text-gray-700">
                  As AI and other technologies advance, we need intentional frameworks for their 
                  ethical implementation. We're developing guidelines that prioritize human 
                  wellbeing and environmental harmony.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-medium mb-2">Social Fragmentation</h3>
                <p className="text-gray-700">
                  Modern society often lacks the strong community bonds that support human 
                  flourishing. We're creating spaces built on radical acceptance and genuine 
                  connection.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-medium mb-2">Centralized Power Structures</h3>
                <p className="text-gray-700">
                  Traditional governance systems often concentrate power among the few. Our DAO 
                  model distributes decision-making power to all community members.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-luminary-teal mb-6">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-6">
              The Luminary Nexus community combines physical infrastructure with digital 
              coordination tools, creating a hybrid model that leverages the best of both worlds:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Physical Community:</strong> Real-world spaces designed for sustainable 
                living, collaboration, and personal growth.
              </li>
              <li>
                <strong>Decentralized Governance:</strong> Our DAO (Decentralized Autonomous 
                Organization) ensures all community members have a voice in decision-making.
              </li>
              <li>
                <strong>Ethical Technology:</strong> Integrating AI and other technologies in ways 
                that respect human autonomy and environmental limits.
              </li>
              <li>
                <strong>Community Economy:</strong> The LNX token supports internal value exchange 
                and resource allocation based on community priorities.
              </li>
              <li>
                <strong>Regenerative Design:</strong> Creating systems that give back more than they take, 
                from energy production to food systems.
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <Link to="/values" className="btn-primary">
              Explore Our Core Values
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
