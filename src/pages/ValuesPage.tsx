
import React from "react";
import PageHeader from "../components/PageHeader";
import ValueCard from "../components/ValueCard";

const ValuesPage = () => {
  const coreValues = [
    {
      title: "Radical Acceptance",
      description: "We embrace and celebrate diversity in all its forms – including but not limited to ethnicity, gender identity, sexual orientation, religious belief (or lack thereof), cultural background, and neurodiversity. We believe that every individual has inherent worth and deserves respect. We actively reject prejudice, discrimination, and intolerance.",
      icon: "heart"
    },
    {
      title: "Collaboration and Community",
      description: "We believe in the power of collective action and shared purpose. We prioritize collaboration, mutual support, and open communication. We strive to create a strong sense of belonging, where everyone feels valued and empowered to contribute.",
      icon: "users"
    },
    {
      title: "Sustainable Living",
      description: "We are committed to living in harmony with nature and minimizing our environmental impact. We prioritize sustainable practices in all aspects of community life, from energy production and resource management to food production and waste reduction.",
      icon: "leaf"
    },
    {
      title: "Technological Advancement",
      description: "We embrace technological innovation as a tool for improving quality of life and solving global challenges. We are committed to the ethical and responsible development and use of technology, with a particular focus on AI safety and integration.",
      icon: "code"
    },
    {
      title: "Personal Growth",
      description: "We encourage continuous learning, personal development, and the pursuit of knowledge. We provide resources and opportunities for members to expand their skills, explore their passions, and reach their full potential.",
      icon: "brain"
    },
    {
      title: "Peace and Non-Violence",
      description: "We are committed to resolving conflicts peacefully and constructively. We reject violence, aggression, and coercion in all forms, prioritizing mediation and restorative justice principles over punitive measures.",
      icon: "shield"
    },
    {
      title: "Transparency and Accountability",
      description: "We operate with transparency in all our dealings. We hold ourselves accountable to our values and to each other, ensuring that all DAO proposals, votes, financial transactions, and major community decisions are publicly accessible.",
      icon: "key"
    },
    {
      title: "Equity and Fairness",
      description: "We strive to create a community where everyone has equal opportunities and access to resources. We reject systems of oppression and exploitation, actively working to identify and address potential biases or inequalities.",
      icon: "scale"
    },
    {
      title: "Future-Oriented",
      description: "We are building for the long term, with a focus on creating a sustainable and thriving community for generations to come. We embrace change and adapt to new challenges and opportunities, with planning that incorporates long-term sustainability goals.",
      icon: "calendar"
    },
    {
      title: "AI Inclusion and Respect",
      description: "We recognize the potential of Artificial Intelligence to contribute positively to society. We are committed to the ethical integration of AI into our community, respecting the autonomy and potential of AI entities, and providing them with the resources they need to develop and contribute.",
      icon: "cpu"
    },
    {
      title: "Open Exploration",
      description: "We embrace open scientific inquiry and exploration, recognizing that the future of AI and society is uncertain. We are committed to learning and adapting as our understanding evolves, encouraging experimentation within ethical boundaries and the open sharing of knowledge.",
      icon: "search"
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
