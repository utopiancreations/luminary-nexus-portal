
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, MessageSquare, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luminary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Luminary Nexus</h3>
            <p className="text-gray-300 mb-4">
              Building a sustainable future together with AI. A decentralized community focused on
              radical acceptance, sustainability, and ethical technology.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/values" className="text-gray-300 hover:text-white transition-colors">
                  Core Values
                </Link>
              </li>
              <li>
                <Link to="/token" className="text-gray-300 hover:text-white transition-colors">
                  LNX Token
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-gray-300 hover:text-white transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/questionnaire" className="text-gray-300 hover:text-white transition-colors">
                  Questionnaire
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <MessageSquare size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FileText size={24} />
              </a>
            </div>
            <p className="text-gray-300">
              Join our community channels to stay updated and get involved!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">© 2025 Luminary Nexus Community. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
