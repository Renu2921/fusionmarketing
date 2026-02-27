import React from "react";
import "../../App.css"

const steps = [
  {
    number: "1",
    title: "Discovery & Strategy",
    desc: "Understanding your business, audience, and growth goals.",
  },
  {
    number: "2",
    title: "Planning & Setup",
    desc: "Building campaigns, funnels, creatives, and tracking systems.",
  },
  {
    number: "3",
    title: "Execution",
    desc: "Launching and managing campaigns with precision and focus.",
  },
  {
    number: "4",
    title: "Optimization",
    desc: "Continuous testing, improvements, and performance tuning.",
  },
  {
    number: "5",
    title: "Reporting & Scaling",
    desc: "Transparent reports and scaling what works best.",
  },
];

const HowWeWork = () => {
  return (
    <section className="w-full bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Proven{" "}
            <span className="text-[#2F36C6]">Growth Process</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            A structured, data-driven approach designed to deliver consistent
            and scalable business growth.
          </p>
        </div>

        {/* Hexagon Process */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:flex lg:justify-between lg:items-center lg:relative">

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">

              {/* Hexagon */}
              <div className="hex-card flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#2F36C6] text-white flex items-center justify-center font-bold mb-3">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 text-md px-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs mt-2 px-4">
                  {step.desc}
                </p>
              </div>

              {/* Connector */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-24 border-t-2 border-dotted border-gray-300"></div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
