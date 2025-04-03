
import React, { useState } from "react";
import { toast } from "sonner";
import PageHeader from "../components/PageHeader";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! We'll respond as soon as possible.");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Have questions or interested in collaborating? Get in touch with our team" 
      />
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8 text-center">
              <p className="text-gray-700">
                We appreciate your interest in the Luminary Nexus Community. Fill out the form 
                below to get in touch with our team, and we'll respond within 2-3 business days.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luminary-blue"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luminary-blue"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luminary-blue"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto md:px-8"
                >
                  Send Message
                </button>
              </div>
            </form>
            
            <div className="mt-10 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Prefer email? Reach us directly at:
              </p>
              <a href="mailto:contact@luminarynexus.org" className="text-luminary-blue hover:underline">
                contact@luminarynexus.org
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
            <p className="text-gray-700 mb-6">
              For general discussions and to connect with other community members, 
              consider joining our public channels.
            </p>
            <a 
              href="/community"
              className="btn-secondary"
            >
              View Community Channels
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
