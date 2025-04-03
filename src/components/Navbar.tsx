
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Core Values", path: "/values" },
    { name: "LNX Token", path: "/token" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Whitepaper", path: "/whitepaper" },
    { name: "Community", path: "/community" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-serif font-bold text-2xl text-luminary-blue">
                Luminary<span className="text-luminary-green">Nexus</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-3 py-2 text-sm font-medium text-luminary-dark hover:text-luminary-teal transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/questionnaire"
              className="ml-4 px-4 py-2 rounded-md bg-luminary-blue text-white hover:bg-opacity-90 transition-colors"
            >
              Get Involved
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-luminary-dark"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-luminary-dark hover:text-luminary-teal"
                onClick={toggleNavbar}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/questionnaire"
              className="block px-3 py-2 text-base font-medium bg-luminary-blue text-white rounded-md"
              onClick={toggleNavbar}
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
