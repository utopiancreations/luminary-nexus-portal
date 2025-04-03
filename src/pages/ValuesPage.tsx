
import React from "react";
import PageHeader from "../components/PageHeader";
import ValueCard from "../components/ValueCard";

const ValuesPage = () => {
  const coreValues = [
    {
      title: "Radical Acceptance",
      description: "We welcome diversity in all forms and create truly inclusive spaces where everyone belongs, regardless of background, identity, or beliefs. We celebrate our differences and learn from each other.",
      icon: "heart"
    },
    {
      title: "Environmental Stewardship",
      description: "We prioritize sustainable practices that regenerate natural systems. All our decisions consider long-term environmental impact, from energy production to waste management.",
      icon: "leaf"
    },
    {
      title: "Ethical Technology",
      description: "We develop and use technology in ways that prioritize human wellbeing, autonomy, and dignity. We believe AI and other technologies should serve humanity and help us live in harmony with nature.",
      icon: "code"
    },
    {
      title: "Community Collaboration",
      description: "We believe in the power of working together. Our strength comes from combining diverse skills, knowledge, and perspectives toward shared goals.",
      icon: "users"
    },
    {
      title: "Personal Growth",
      description: "We support each member's journey toward self-improvement and fulfillment. Our community provides resources, opportunities, and encouragement for ongoing learning and development.",
      icon: "brain"
    },
    {
      title: "Global Thinking",
      description: "While building our local community, we maintain awareness of our global context. We consider how our actions affect the broader world and how our model might inspire positive change elsewhere.",
      icon: "globe"
    },
    {
      title: "Transparency",
      description: "We operate with openness in all aspects of governance and resource management. Community members have access to clear information about decisions, finances, and operations.",
      icon: "key"
    },
    {
      title: "Balance",
      description: "We seek harmony between technological innovation and natural systems, between individual freedom and community responsibility, and between efficiency and wellbeing.",
      icon: "shield"
    },
    {
      title: "Innovation",
      description: "We embrace creative problem-solving and are willing to challenge conventional approaches. We remain adaptable and open to new ideas while staying grounded in our core values.",
      icon: "lightbulb"
    },
    {
      title: "Resilience",
      description: "We build systems that can adapt to change and withstand challenges. Our community is designed for long-term sustainability through adaptability and diversified resources.",
      icon: "home"
    },
    {
      title: "Knowledge Sharing",
      description: "We document our journey and openly share our learnings, successes, and failures. We believe in contributing to the collective wisdom available to all who seek to build better communities.",
      icon: "book"
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Core Values" 
        subtitle="The principles that guide our community and decision-making" 
      />
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            At Luminary Nexus, our values aren't just words—they're the foundation of everything we do. 
            These principles guide our governance, our relationships with each other, and our interaction 
            with the world around us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesPage;
