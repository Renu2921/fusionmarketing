import React from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate=useNavigate();
  return (
    <section className="w-full bg-white">

      {/* HERO SECTION */}
      <div className="bg-[#F5F7FF] py-28">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Content Marketing That <br />
              <span className="text-[#2F36C6]">
                Educates, Engages & Converts
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We create content that builds trust, drives organic traffic,
              and turns readers into customers — across every stage
              of the buyer journey.
            </p>

            <button className="mt-8 bg-[#2F36C6] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
             onClick={()=>navigate("/contact")}>
              Get a Content Strategy
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Problems We Solve With Content
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>❌ Blogs that don’t rank or convert</li>
              <li>❌ Inconsistent brand voice</li>
              <li>❌ Low engagement on social channels</li>
              <li>❌ No content roadmap</li>
              <li>❌ Traffic without trust</li>
            </ul>
          </div>

        </div>
      </div>

      {/* WHY CONTENT MARKETING */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Why Content Marketing <span className="text-[#2F36C6]">Matters</span>
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Build Authority",
                desc: "Position your brand as a trusted expert in your industry.",
              },
              {
                title: "Organic Growth",
                desc: "Drive long-term traffic without paying per click.",
              },
              {
                title: "Higher Conversions",
                desc: "Educated audiences convert faster and better.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#F5F7FF] p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-[#2F36C6]">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR CONTENT PROCESS */}
      <div className="bg-[#F5F7FF] py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Our Content <span className="text-[#2F36C6]">Playbook</span>
          </h2>

          <div className="mt-16 space-y-8 max-w-4xl mx-auto">
            {[
              {
                step: "Audience Research",
                desc: "Understand pain points, intent, and buyer psychology.",
              },
              {
                step: "Content Planning",
                desc: "SEO-led topics aligned with funnel stages.",
              },
              {
                step: "Content Creation",
                desc: "Blogs, landing pages, social posts & long-form assets.",
              },
              {
                step: "Optimization",
                desc: "Search optimization + conversion-focused structuring.",
              },
              {
                step: "Distribution & Scaling",
                desc: "Content amplification across platforms.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-[#2F36C6] text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.step}
                  </h4>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT TYPES */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Content We <span className="text-[#2F36C6]">Create</span>
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <ul className="space-y-4 text-gray-700">
              <li>✔ SEO Blog Articles</li>
              <li>✔ Website & Landing Page Copy</li>
              <li>✔ Social Media Content</li>
              <li>✔ Email Campaigns</li>
            </ul>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Case Studies</li>
              <li>✔ Brand Messaging</li>
              <li>✔ Thought Leadership Content</li>
              <li>✔ Content Audits & Strategy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#2F36C6] py-24 text-center text-white">
        <h2 className="text-4xl font-bold">
          Ready to Turn Content Into Revenue?
        </h2>
        <p className="mt-4 text-lg opacity-90">
          Let’s build a content engine that fuels your growth.
        </p>
        <button className="mt-8 bg-white text-[#2F36C6] px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
         onClick={()=>navigate("/contact")}>
          Start Content Marketing
        </button>
      </div>

    </section>
  );
};

export default Content;
