
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, MessageSquare, FileText, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";

const CommunityPage = () => {
  const communityChannels = [
    {
      name: "Discord Server",
      description: "Join our active Discord community to connect with other members, participate in discussions, and stay updated on project developments.",
      icon: MessageSquare,
      link: "#",
      buttonText: "Join Discord"
    },
    {
      name: "Telegram Group",
      description: "Follow our Telegram channel for announcements and join the group chat to connect with the community on-the-go.",
      icon: MessageSquare,
      link: "#",
      buttonText: "Join Telegram"
    },
    {
      name: "Twitter/X",
      description: "Follow us on Twitter/X for the latest updates, announcements, and community highlights.",
      icon: Twitter,
      link: "#",
      buttonText: "Follow Twitter"
    },
    {
      name: "Medium Blog",
      description: "Read our in-depth articles about the project vision, community development, and educational content.",
      icon: FileText,
      link: "#",
      buttonText: "Read Blog"
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Join Our Community" 
        subtitle="Connect with fellow members and stay updated on project developments" 
      />
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700">
              The Luminary Nexus Community is a collaborative effort built on open communication and shared values. 
              Join our various channels to engage with other members, stay informed, and contribute to our collective vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {communityChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <channel.icon className="h-8 w-8 text-luminary-blue mr-3" />
                    <h3 className="text-xl font-semibold">{channel.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{channel.description}</p>
                  <a 
                    href={channel.link}
                    className="inline-flex items-center px-5 py-2 bg-luminary-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    {channel.buttonText} <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-section-gradient rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Involved?</h2>
            <p className="text-gray-700 mb-6">
              Take our values-alignment questionnaire to see if you're a good fit for the 
              initial community and potential token airdrop.
            </p>
            <Link 
              to="/questionnaire"
              className="btn-primary"
            >
              Take the Questionnaire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
