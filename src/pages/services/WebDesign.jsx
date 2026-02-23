import React from "react";
import webBg from "../../assets/webBg.jpeg";
import web1 from "../../assets/web1.png"
import web2 from "../../assets/web2.png"
import web3 from "../../assets/web3.png"
import web4 from "../../assets/web4.png"
import { useNavigate } from "react-router-dom";

const WebDesign = () => {
  const navigate=useNavigate();
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${webBg})` }}
    >
      <div className="absolute inset-0 bg-white/10"></div>
      <div className="relative z-10">
        <div className="py-28">
          <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">

            <div>
              <h1 className="text-5xl font-bold text-white leading-tight">
                Websites That <br />
                <span className="text-[#2F36C6]">
                  Convert Visitors Into Customers
                </span>
              </h1>

              <p className="mt-6 text-lg text-white max-w-xl">
                Your website isn’t just a design — it’s your strongest
                sales asset. We build fast, scalable, conversion-focused
                websites that grow with your business.
              </p>

              <button className="mt-8 bg-[#2F36C6] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
               onClick={()=>navigate("/contact")}>
                Get a Website Audit
              </button>
            </div>

            {/* STAT CARD */}
            <div className="bg-white rounded-3xl shadow-xl p-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Why Design Matters
              </h3>
              <ul className="space-y-4 text-grya-900">
                <li>⚡ First impressions in under 3 seconds</li>
                <li>📱 Mobile-first user experience</li>
                <li>🚀 Speed & performance optimized</li>
                <li>🎯 Design guided by conversion psychology</li>
                <li>🔒 Secure & scalable architecture</li>
              </ul>
            </div>

          </div>
        </div>

        {/* WHAT WE BUILD */}
        <div className="py-24 bg-[#F5F7FF]">
          <div className="max-w-10xl mx-auto px-10">
            <h2 className="text-4xl font-bold text-center text-gray-900">
              What We <span className="text-[#2F36C6]">Design & Build</span>
            </h2>

            {/* <div className="mt-16 grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Business Websites",
                  desc: "Professional websites built to establish trust and generate leads.",
                },
                {
                  title: "Landing Pages",
                  desc: "High-converting pages designed for ads, launches, and campaigns.",
                },
                {
                  title: "Web Applications",
                  desc: "Scalable, modern interfaces built with performance in mind.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-[#2F36C6]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div> */}
              <div className="mt-16 grid md:grid-cols-4 gap-4">
              {[web1,web2,web3,web4].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border  rounded-2xl shadow-sm"
                >
                 <img src={item} className=""/>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OUR PROCESS */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-10">
            <h2 className="text-4xl font-bold text-center text-white">
              Our Web Design <span className="text-[#2F36C6]">Process</span>
            </h2>

            <div className="mt-16 max-w-4xl mx-auto space-y-8">
              {[
                {
                  step: "Discovery & UX Planning",
                  desc: "Understanding your users, goals, and conversion paths.",
                },
                {
                  step: "Wireframing & UI Design",
                  desc: "Clean layouts focused on clarity and usability.",
                },
                {
                  step: "Development & Optimization",
                  desc: "Fast, responsive, SEO-friendly development.",
                },
                {
                  step: "Testing & Launch",
                  desc: "Cross-browser, device, and performance testing.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#2F36C6] text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {item.step}
                    </h4>
                    <p className="text-white mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#2F36C6] py-24 text-center text-white">
          <h2 className="text-4xl font-bold">
            Ready to Upgrade Your Website?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Let’s design a site that actually works for your business.
          </p>
          <button className="mt-8 bg-white text-[#2F36C6] px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
           onClick={()=>navigate("/contact")}>
            Start My Project
          </button>
        </div>

      </div>
    </section>
  );
};

export default WebDesign;
