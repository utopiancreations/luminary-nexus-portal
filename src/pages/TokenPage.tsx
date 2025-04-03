
import React from "react";
import PageHeader from "../components/PageHeader";
import TokenInfoCard from "../components/TokenInfoCard";
import { Download } from "lucide-react";

const TokenPage = () => {
  const tokenInfo = [
    { title: "Name", value: "Luminary Nexus Token" },
    { title: "Symbol", value: "LNX" },
    { title: "Blockchain", value: "Polygon" },
    { title: "Initial Supply", value: "1 Billion" },
    { title: "Inflation", value: "2% initial, 1-5% DAO controlled" },
    { title: "Transaction Fee", value: "2% (1.5% Treasury, 0.5% LP)" }
  ];

  const tokenUtility = [
    {
      title: "Governance",
      description: "LNX holders can propose and vote on all aspects of the community's development and operations through the DAO."
    },
    {
      title: "Community Economy",
      description: "The token facilitates value exchange within the community, incentivizing contributions and supporting resource allocation."
    },
    {
      title: "Access",
      description: "Token holders gain access to community resources, events, and facilities according to governance-determined parameters."
    },
    {
      title: "Alignment",
      description: "The token distribution model prioritizes those aligned with community values, ensuring governance by aligned members."
    }
  ];

  return (
    <div>
      <PageHeader 
        title="LNX Token" 
        subtitle="Understanding the Luminary Nexus Token and its role in our community" 
      />
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow mb-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-luminary-blue">Important Notice</h2>
              <p className="text-xl font-bold text-red-600 mt-2">There is NO token sale.</p>
            </div>
            <p className="text-gray-700">
              The LNX token is designed for community governance and internal economy, not speculation. 
              Initial distribution is through a values-based airdrop to aligned community members. 
              The token's value comes from its utility within our ecosystem, not from artificial 
              scarcity or marketing hype.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-luminary-dark mb-6">Token Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tokenInfo.map((item, index) => (
                <TokenInfoCard key={index} title={item.title} value={item.value} />
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-luminary-dark mb-6">Token Utility</h2>
            <div className="space-y-6">
              {tokenUtility.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-medium mb-2 text-luminary-blue">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-luminary-dark mb-6">Tokenomics</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium mb-4">Initial Token Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Community Airdrop</h4>
                  <p className="text-gray-700">40% - Distributed to values-aligned community members</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Community Treasury</h4>
                  <p className="text-gray-700">30% - For community development and operations</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Founding Team</h4>
                  <p className="text-gray-700">20% - With vesting schedule for long-term alignment</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Ecosystem Development</h4>
                  <p className="text-gray-700">10% - For partnerships and ecosystem growth</p>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4">Token Mechanics</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Inflation:</strong> Initial 2% annual inflation, adjustable between 1-5% by DAO governance
                </li>
                <li>
                  <strong>Transaction Fee:</strong> 2% fee on transfers (1.5% to community treasury, 0.5% to liquidity pool)
                </li>
                <li>
                  <strong>Governance Weight:</strong> Voting power is determined by a combination of token holdings and community participation
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="#" 
              className="btn-primary inline-flex items-center"
            >
              Download Full Whitepaper <Download size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenPage;
