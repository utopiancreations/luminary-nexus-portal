
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="absolute inset-0 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Building a Sustainable Future, Together with AI
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl animate-fade-up">
          Join our decentralized community focused on radical acceptance, 
          sustainability, ethical technology, and personal growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/about"
            className="btn-primary flex items-center justify-center gap-2"
          >
            Learn More <ArrowRight size={18} />
          </Link>
          <Link
            to="/questionnaire"
            className="btn-secondary flex items-center justify-center gap-2"
          >
            Get Involved <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
