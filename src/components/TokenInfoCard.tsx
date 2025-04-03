
import React from "react";

interface TokenInfoCardProps {
  title: string;
  value: string;
}

const TokenInfoCard: React.FC<TokenInfoCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-center">
      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">{title}</h3>
      <p className="text-xl font-semibold text-luminary-dark">{value}</p>
    </div>
  );
};

export default TokenInfoCard;
