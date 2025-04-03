
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
    // Step 1: Basic Information
    [
      {
        id: "name",
        question: "What is your name? (Optional)",
        type: "text"
      },
      {
        id: "email",
        question: "What email address can we use to contact you if selected for the airdrop?",
        type: "email"
      },
      {
        id: "interests",
        question: "What aspects of the Luminary Nexus Community interest you most?",
        type: "text"
      },
      {
        id: "background",
        question: "What relevant skills, experiences, or perspectives would you bring to the community?",
        type: "textarea"
      }
    ],
    // Step 2: Values Alignment
    [
      {
        id: "sustainability",
        question: "How important is environmental sustainability to you in your daily life? (1-5)",
        type: "likert"
      },
      {
        id: "tech_ethics",
        question: "How concerned are you about the ethical implications of advancing technology? (1-5)",
        type: "likert"
      },
      {
        id: "community",
        question: "How much do you value being part of a collaborative community? (1-5)",
        type: "likert"
      },
      {
        id: "personal_growth",
        question: "How important is continuous personal growth and learning to you? (1-5)",
        type: "likert"
      }
    ],
    // Step 3: Deeper Questions
    [
      {
        id: "vision",
        question: "What does a sustainable, ethical future look like to you?",
        type: "textarea"
      },
      {
        id: "contribution",
        question: "How do you envision contributing to the Luminary Nexus Community?",
        type: "textarea"
      },
      {
        id: "ai_views",
        question: "What are your thoughts on the role of AI in society and communities?",
        type: "textarea"
      },
      {
        id: "challenge",
        question: "What do you see as the biggest challenge facing community-building efforts today?",
        type: "textarea"
      }
    ],
    // Step 4: Final Questions
    [
      {
        id: "token_utility",
        question: "How would you like to see the LNX token used within the community?",
        type: "textarea"
      },
      {
        id: "governance",
        question: "How important is participating in community governance to you? (1-5)",
        type: "likert"
      },
      {
        id: "time_commitment",
        question: "How much time could you realistically commit to community participation weekly?",
        type: "text"
      },
      {
        id: "additional",
        question: "Is there anything else you'd like to share with us?",
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

  const renderQuestion = (question: { id: string; question: string; type: string }) => {
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
                  {value === 1 ? "Low" : value === 5 ? "High" : ""}
                </span>
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
