import React from "react";
import brandingImage from "../../assets/branding.png"
import { useNavigate } from "react-router-dom";

const Brand = () => {
  const navigate=useNavigate();
  return (
    <div className="w-full bg-[#f8fbff]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight">
            Building Strong Brands with
            <span className="text-blue-600"> Fusion Marketing</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We help businesses create a powerful brand identity through
            strategic design, digital presence, and performance-driven
            marketing solutions.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
           onClick={()=>navigate("/contact")}>
            Explore Our Branding Services
          </button>
        </div>

        {/* Right Illustration */}
        <div className="w-full flex-1">
          <img
            src={brandingImage}
            alt="Fusion Marketing Brand"
            className="w-full max-w-xl mx-auto"
          />
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#0f172a]">
            Our Branding Expertise
          </h2>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine creativity, strategy, and technology to deliver
            impactful brand experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {/* Card 1 */}
            <div className="p-8 rounded-xl shadow-sm border hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600">
                Brand Identity
              </h3>
              <p className="mt-4 text-gray-600">
                Logo design, color systems, typography, and visual guidelines
                that reflect your brand values.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-xl shadow-sm border hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600">
                Digital Presence
              </h3>
              <p className="mt-4 text-gray-600">
                Websites, landing pages, and social branding optimized for
                engagement and conversion.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-xl shadow-sm border hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600">
                Brand Strategy
              </h3>
              <p className="mt-4 text-gray-600">
                Market research, positioning, and messaging strategies that
                drive long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to Elevate Your Brand?
          </h2>
          <p className="mt-4 text-blue-100">
            Partner with Fusion Marketing and turn your brand into a growth
            engine.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
           onClick={()=>navigate("/contact")}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Brand;
