import React from "react";
import { useNavigate } from "react-router-dom";

const Ppc = () => {
  const navigate=useNavigate();
  return (
    <section className="w-full bg-white">

      {/* HERO — MONEY-FIRST MESSAGE */}
      <div className="py-28 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-5xl font-bold leading-tight">
              We Don’t Run Ads. <br />
              <span className="text-[#2F36C6]">
                We Control Customer Acquisition Costs.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              PPC should be a predictable growth channel, not an expense.
              We engineer paid advertising systems that scale profitably.
            </p>

            <button className="mt-8 bg-[#2F36C6] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"  
            onClick={()=>navigate("/contact")}>
              Discuss Growth Strategy
            </button>
          </div>

          <div className="bg-white text-gray-900 rounded-3xl shadow-xl p-10">
            <h3 className="font-semibold text-lg mb-4">
              What Usually Goes Wrong with PPC
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>❌ Ads optimized for clicks, not revenue</li>
              <li>❌ No visibility into real acquisition cost</li>
              <li>❌ Scaling spend without scaling returns</li>
              <li>❌ Disconnected ads & landing pages</li>
            </ul>
          </div>

        </div>
      </div>

      {/* SHIFT IN THINKING */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-10 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            PPC Needs a <span className="text-[#2F36C6]">Different Mindset</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Most agencies manage ads.  
            We manage unit economics — cost per lead, conversion rate, and lifetime value.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Profit-First Campaigns",
                desc: "Every campaign is built backwards from revenue targets.",
              },
              {
                title: "Full Funnel Visibility",
                desc: "From click to conversion to sale — nothing is hidden.",
              },
              {
                title: "Controlled Scaling",
                desc: "We scale only when numbers prove it’s safe to do so.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#F5F7FF] p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-[#2F36C6]">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHERE PPC ACTUALLY WORKS */}
      <div className="bg-[#F5F7FF] py-24">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-14">

          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Where PPC Works <span className="text-[#2F36C6]">Best</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Paid ads perform best when the business model supports
              measurable returns and fast feedback loops.
            </p>
          </div>

          <ul className="space-y-4 text-gray-700">
            <li>✔ Lead-driven businesses</li>
            <li>✔ E-commerce with repeat buyers</li>
            <li>✔ High-margin services</li>
            <li>✔ Time-sensitive offers</li>
            <li>✔ Brands validating new markets</li>
          </ul>

        </div>
      </div>

      {/* OUR EXECUTION MODEL */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            How We Execute <span className="text-[#2F36C6]">Paid Growth</span>
          </h2>

          <div className="mt-16 space-y-8 max-w-4xl mx-auto">
            {[
              {
                title: "Unit Economics Breakdown",
                desc: "We define allowable CPA before spending a single rupee.",
              },
              {
                title: "Audience & Intent Engineering",
                desc: "Targeting is built around buyer psychology, not interests.",
              },
              {
                title: "Creative Stress Testing",
                desc: "Ads are tested aggressively before scaling budgets.",
              },
              {
                title: "Signal-Based Optimization",
                desc: "We optimize using revenue signals, not platform guesses.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-[#2F36C6] text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-[#2F36C6] py-24 text-center text-white">
        <h2 className="text-4xl font-bold">
          If PPC Is a Cost for You, Something Is Broken.
        </h2>
        <p className="mt-4 text-lg opacity-90">
          Let’s fix it — with a strategy built for profitability.
        </p>
        <button className="mt-8 bg-white text-[#2F36C6] px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"  onClick={()=>navigate("/contact")}>
          Book a PPC Strategy Call
        </button>
      </div>

    </section>
  );
};

export default Ppc;
