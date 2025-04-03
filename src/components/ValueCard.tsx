
import React from "react";
import { 
  Heart, Shield, Users, Leaf, 
  Brain, Globe, Code, Lightbulb,
  Key, Home, BookOpen
} from "lucide-react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  const getIcon = () => {
    switch(icon) {
      case 'heart': return <Heart className="text-luminary-blue mb-4" size={32} />;
      case 'shield': return <Shield className="text-luminary-blue mb-4" size={32} />;
      case 'users': return <Users className="text-luminary-blue mb-4" size={32} />;
      case 'leaf': return <Leaf className="text-luminary-blue mb-4" size={32} />;
      case 'brain': return <Brain className="text-luminary-blue mb-4" size={32} />;
      case 'globe': return <Globe className="text-luminary-blue mb-4" size={32} />;
      case 'code': return <Code className="text-luminary-blue mb-4" size={32} />;
      case 'lightbulb': return <Lightbulb className="text-luminary-blue mb-4" size={32} />;
      case 'key': return <Key className="text-luminary-blue mb-4" size={32} />;
      case 'home': return <Home className="text-luminary-blue mb-4" size={32} />;
      case 'book': return <BookOpen className="text-luminary-blue mb-4" size={32} />;
      default: return <Heart className="text-luminary-blue mb-4" size={32} />;
    }
  };

  return (
    <div className="flex flex-col p-6 glass-card hover:shadow-xl transition-all">
      <div className="flex justify-center">
        {getIcon()}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-luminary-dark">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ValueCard;
