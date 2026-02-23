import React from "react";
import chooseUs from "../../assets/chooseus.png"

const ChooseUs = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[3rem] font-bold text-gray-900">
            Why Businesses Choose{" "}
            <span className="text-[#2F36C6]">Fusion Marketing</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            We focus on real growth, measurable results, and long-term success —
            not just clicks and impressions.
          </p>

          <ul className="mt-8 space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#2F36C6] font-bold">✔</span>
              ROI-focused digital strategies, not vanity metrics
            </li>
            <li className="flex gap-3">
              <span className="text-[#2F36C6] font-bold">✔</span>
              Dedicated account management with regular performance reports
            </li>
            <li className="flex gap-3">
              <span className="text-[#2F36C6] font-bold">✔</span>
              Customized solutions aligned with your business goals
            </li>
            <li className="flex gap-3">
              <span className="text-[#2F36C6] font-bold">✔</span>
              Expertise in Meta Ads, Google Ads, SEO & Web Development
            </li>
            <li className="flex gap-3">
              <span className="text-[#2F36C6] font-bold">✔</span>
              Scalable services for startups and established brands
            </li>
          </ul>

          <p className="mt-8 text-lg font-semibold text-gray-900">
            We don’t just market businesses —{" "}
            <span className="text-[#2F36C6]">
              we help them grow sustainably.
            </span>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center w-full">
          <img
            src={chooseUs}
            alt="Why Choose Fusion Marketing"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default ChooseUs;
