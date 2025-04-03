
import React, { useState } from "react";
import { toast } from "sonner";
import { Check } from "lucide-react";
import PageHeader from "../components/PageHeader";

const QuestionnairePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<{[key: string]: string | number}>({});

  const totalSteps = 4;

  const questionGroups = [
    // Step 1: Community and Collaboration
    [
      {
        id: "collaboration",
        question: "I believe that collaboration is essential for solving complex problems.",
        type: "likert"
      },
      {
        id: "radical_acceptance",
        question: "You are invited to a celebration or ceremony from a religious tradition that is unfamiliar to you. How would you approach the situation?",
        type: "multiple",
        options: [
          "Decline the invitation; I'm not comfortable with unfamiliar religions.",
          "Attend, but keep to myself and observe quietly.",
          "Attend and ask respectful questions to learn more about the tradition.",
          "Do some research beforehand to understand the customs and traditions, and then attend with an open mind.",
          "Politely decline, explaining that I'm not comfortable, but express my respect for their beliefs."
        ]
      },
      {
        id: "equal_opportunity",
        question: "What does the phrase 'equal opportunity' mean to you?",
        type: "textarea"
      },
      {
        id: "helping_friend",
        question: "Imagine a close friend or family member is going through a difficult time (e.g., job loss, illness, personal crisis). How would you offer your support?",
        type: "textarea"
      }
    ],
    // Step 2: Technology and the Future
    [
      {
        id: "emerging_tech",
        question: "What emerging technology are you most excited about, and why?",
        type: "textarea"
      },
      {
        id: "tech_evaluation",
        question: "New technologies should be carefully evaluated for their potential social and environmental impacts before being widely adopted.",
        type: "likert"
      },
      {
        id: "ai_interaction",
        question: "How do you feel about interacting with increasingly intelligent machines in your daily life?",
        type: "textarea"
      },
      {
        id: "new_ideas",
        question: "You encounter a new idea that challenges your existing beliefs. How do you typically respond?",
        type: "multiple",
        options: [
          "Dismiss it immediately.",
          "Research it further to understand it better.",
          "Discuss it with others to get different perspectives.",
          "Become defensive and argue against it.",
          "Consider how this new idea might integrate with or change my beliefs."
        ]
      }
    ],
    // Step 3: Personal Values and Actions
    [
      {
        id: "sustainable_living",
        question: "What steps, if any, do you take to live more sustainably?",
        type: "textarea"
      },
      {
        id: "learning",
        question: "I actively seek out opportunities to learn new things.",
        type: "likert"
      },
      {
        id: "conflict_resolution",
        question: "You have a disagreement with a neighbor about a shared resource (e.g., a fence, a parking space). How would you approach resolving the situation?",
        type: "textarea"
      },
      {
        id: "community_rights",
        question: "What responsibilities do individuals have to uphold the rights and well-being of others in a community?",
        type: "textarea"
      }
    ],
    // Step 4: Future Vision
    [
      {
        id: "life_purpose",
        question: "What gives your life meaning and purpose?",
        type: "textarea"
      },
      {
        id: "ideal_community",
        question: "Describe your ideal vision of a community in the year 2050.",
        type: "textarea"
      },
      {
        id: "decentralization",
        question: "How important is it for individuals to have a voice in decisions that affect their community?",
        type: "likert"
      },
      {
        id: "community_contribution",
        question: "Imagine you could design and live in your ideal community. Describe this community, including your ideal role and how you would contribute to its success.",
        type: "textarea"
      }
    ]
  ];

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleChange = (id: string, value: string | number) => {
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Questionnaire submitted successfully!");
    setFormSubmitted(true);
    window.scrollTo(0, 0);
  };

  const renderQuestion = (question: { id: string; question: string; type: string; options?: string[] }) => {
    switch (question.type) {
      case "text":
        return (
          <input
            type="text"
            id={question.id}
            value={formData[question.id] as string || ""}
            onChange={(e) => handleChange(question.id, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luminary-blue"
          />
        );
      case "email":
        return (
          <input
            type="email"
            id={question.id}
            value={formData[question.id] as string || ""}
            onChange={(e) => handleChange(question.id, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luminary-blue"
          />
        );
      case "textarea":
        return (
          <textarea
            id={question.id}
            rows={4}
            value={formData[question.id] as string || ""}
            onChange={(e) => handleChange(question.id, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luminary-blue"
          ></textarea>
        );
      case "likert":
        return (
          <div className="flex justify-between w-full max-w-md mx-auto mt-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <div key={value} className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => handleChange(question.id, value)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center focus:outline-none
                    ${
                      formData[question.id] === value
                        ? "bg-luminary-blue text-white"
                        : "border border-gray-300 bg-white"
                    }`}
                >
                  {value}
                </button>
                <span className="text-xs mt-1 text-gray-500">
                  {value === 1 ? "Strongly Disagree" : value === 2 ? "Disagree" : value === 3 ? "Neutral" : value === 4 ? "Agree" : "Strongly Agree"}
                </span>
              </div>
            ))}
          </div>
        );
      case "multiple":
        return (
          <div className="space-y-2 mt-2">
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-start">
                <input
                  type="radio"
                  id={`${question.id}_${index}`}
                  name={question.id}
                  value={option}
                  checked={formData[question.id] === option}
                  onChange={() => handleChange(question.id, option)}
                  className="mt-1 mr-2"
                />
                <label htmlFor={`${question.id}_${index}`} className="text-gray-700">{option}</label>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  if (formSubmitted) {
    return (
      <div>
        <PageHeader 
          title="Thank You!" 
          subtitle="Your questionnaire has been submitted successfully" 
        />
        
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Submission Received</h2>
              <p className="text-gray-700 mb-6">
                Thank you for taking the time to complete our questionnaire. Your responses will help us identify 
                values-aligned community members for the initial Luminary Nexus Community.
              </p>
              <p className="text-gray-700">
                If selected for the LNX airdrop, we'll contact you at the email address you provided. In the 
                meantime, feel free to join our community channels to stay updated on project developments.
              </p>
            </div>
            
            <a
              href="/community"
              className="btn-primary"
            >
              Join Our Community
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader 
        title="Values Alignment Questionnaire" 
        subtitle="Help us understand your alignment with the Luminary Nexus Community" 
      />
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <p className="text-gray-700">
                This questionnaire helps us identify individuals aligned with the core values and vision
                of the Luminary Nexus Community. Your responses will be considered for the initial LNX 
                token airdrop. All information is kept confidential.
              </p>
              <p className="text-gray-700 font-medium mt-4">
                Note: Submission of this questionnaire does not guarantee inclusion in the airdrop. 
                Selection will be based on values alignment and potential contribution to the community.
              </p>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Step {currentStep} of {totalSteps}</span>
                <span className="text-sm font-medium text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-luminary-blue rounded-full transition-all"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <form onSubmit={currentStep === totalSteps ? handleSubmit : handleNextStep}>
              <div className="space-y-8">
                {questionGroups[currentStep - 1].map((q) => (
                  <div key={q.id}>
                    <label htmlFor={q.id} className="block text-gray-700 font-medium mb-2">
                      {q.question}
                    </label>
                    {renderQuestion(q)}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className={`px-6 py-2 rounded-md border border-gray-300 ${
                    currentStep === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
                  }`}
                  disabled={currentStep === 1}
                >
                  Back
                </button>
                
                <button
                  type={currentStep === totalSteps ? "submit" : "button"}
                  className="btn-primary"
                >
                  {currentStep === totalSteps ? "Submit" : "Next"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnairePage;
