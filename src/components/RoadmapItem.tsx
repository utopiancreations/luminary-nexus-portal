
import React from "react";

interface RoadmapItemProps {
  phase: string;
  title: string;
  description: string;
  isActive?: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ 
  phase, 
  title, 
  description, 
  isActive = false 
}) => {
  return (
    <div className={`relative flex flex-col md:flex-row ${isActive ? 'opacity-100' : 'opacity-80'}`}>
      <div className="md:w-1/4 mb-4 md:mb-0">
        <div className={`p-4 rounded-lg ${isActive ? 'bg-luminary-blue text-white' : 'bg-gray-100 text-gray-600'}`}>
          <span className="text-sm font-medium">{phase}</span>
          <h3 className="text-lg font-semibold mt-1">{title}</h3>
        </div>
      </div>
      
      <div className="hidden md:flex items-center px-4">
        <div className="w-full h-0.5 bg-gray-200"></div>
      </div>
      
      <div className="md:w-3/4">
        <div className={`p-4 rounded-lg ${isActive ? 'border-2 border-luminary-blue' : 'border border-gray-200'}`}>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapItem;
