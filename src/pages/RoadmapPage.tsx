
import React from "react";
import PageHeader from "../components/PageHeader";
import RoadmapItem from "../components/RoadmapItem";

const RoadmapPage = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Blueprint & Foundation",
      description: "Development of community vision, values, and initial token distribution to values-aligned members through airdrop. Creation of foundational governance structures and community channels. Key activities include finalizing architectural designs, developing and auditing LNX token and DAO contracts, and establishing the Ethics Board.",
      isActive: true
    },
    {
      phase: "Phase 2",
      title: "Funding & Community Building",
      description: "Resource gathering, partnership development, and growing the community. Identification of potential locations and preliminary land assessments. Initial DAO governance activities. Focus on promoting community engagement and monitoring organic adoption of the LNX token ecosystem while the treasury accumulates resources.",
    },
    {
      phase: "Phase 3",
      title: "Blueprint Community Construction",
      description: "Physical development begins once treasury milestones are reached. This phase proceeds in sub-phases triggered by the Community Treasury reaching specific funding goals: Land Acquisition, Foundational Infrastructure (renewable energy, water systems), Core Buildings and Initial Housing, and ongoing Expansion and Amenities.",
    },
    {
      phase: "Phase 4",
      title: "DAO Activation",
      description: "Full governance control transitions from the initial core team to the Luminary Nexus DAO. Formal activation of all governance functions, complete handover of treasury control to DAO smart contracts, and the initial core team transitions to advisory/member roles.",
    },
    {
      phase: "Phase 5",
      title: "Ongoing Development and Expansion",
      description: "The community operates and evolves under the direction of the DAO. Activities include managing ongoing operations, proposing and voting on new projects, executing the decadal technology refresh cycle, and potential expansion to establish new communities in different locations.",
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Project Roadmap" 
        subtitle="Our path to building a sustainable, decentralized community" 
      />
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-luminary-dark mb-6">Development Timeline</h2>
            <p className="text-gray-700 mb-4">
              The Luminary Nexus Community will be built in phases, with progress tied to treasury milestones 
              and community growth. Our approach emphasizes sustainable development and careful planning.
            </p>
            <p className="text-gray-700 mb-8">
              Each phase builds upon the previous one, allowing us to adapt and refine our approach based on 
              community input and real-world conditions.
            </p>
            
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <RoadmapItem
                  key={index}
                  phase={item.phase}
                  title={item.title}
                  description={item.description}
                  isActive={item.isActive}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-luminary-dark mb-4">Milestone-Based Approach</h2>
            <p className="text-gray-700 mb-4">
              Rather than setting rigid timelines, our development is guided by treasury milestones and 
              community readiness. This approach ensures we have the necessary resources and alignment 
              before proceeding with major initiatives.
            </p>
            <p className="text-gray-700">
              The DAO will have full transparency into treasury levels and project progress, with major 
              development decisions requiring community approval through governance voting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
