import React from "react";
import seo from "../../assets/seo.jpeg";
import bg from "../../assets/bg.png";
import { useNavigate } from "react-router-dom";

const Seo = () => {
  const navigate=useNavigate();
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative z-10">

        <div className="py-28">
          <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">

            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                SEO That Brings <br />
                <span className="text-[#2F36C6]">
                  Customers, Not Just Traffic
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                We focus on search intent, visibility, and conversions —
                not vanity rankings.
              </p>

              <button className="mt-8 bg-[#2F36C6] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
              onClick={()=>navigate("/contact")}>
                Talk to an SEO Expert
              </button>
            </div>

            <div className="relative">
              <img
                src={seo}
                alt="SEO Services"
                className="rounded-3xl shadow-xl"
              />
            </div>

          </div>
        </div>

        {/* HOW SEO HELPS BUSINESS */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-10">
            <h2 className="text-4xl font-bold text-center text-gray-900">
              How SEO Helps Your{" "}
              <span className="text-[#2F36C6]">Business Grow</span>
            </h2>

            <div className="mt-16 grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "High-Intent Traffic",
                  desc: "We target users already searching for your product or service.",
                },
                {
                  title: "Lower Cost per Lead",
                  desc: "SEO delivers long-term leads without paying per click.",
                },
                {
                  title: "Brand Authority",
                  desc: "Top rankings build trust and credibility in your industry.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#F5F7FF] p-8 rounded-2xl"
                >
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

        {/* SEO PLAYBOOK */}
        <div className=" py-24">
          <div className="max-w-7xl mx-auto px-10">
            <h2 className="text-4xl font-bold text-center text-gray-900">
              Our SEO <span className="text-[#2F36C6]">Playbook</span>
            </h2>

            <div className="mt-16 space-y-8 max-w-4xl mx-auto">
              {[
                {
                  step: "Search Intent Mapping",
                  desc: "We map keywords to buyer intent — awareness, consideration, and decision.",
                },
                {
                  step: "Technical Foundation",
                  desc: "Fix crawl issues, speed, mobile experience, and indexing gaps.",
                },
                {
                  step: "Content That Converts",
                  desc: "SEO content written for humans first, algorithms second.",
                },
                {
                  step: "Authority Building",
                  desc: "Quality backlinks and brand mentions, not spammy links.",
                },
                {
                  step: "Measurement & Iteration",
                  desc: "Monthly insights, not vanity reports.",
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
                    <p className="text-gray-600 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHO IT'S FOR */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-14">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Who This SEO Service Is{" "}
                <span className="text-[#2F36C6]">For</span>
              </h2>
              <p className="mt-6 text-gray-600 text-lg">
                Our SEO services are ideal for businesses that want consistent,
                predictable growth — not short-term hacks.
              </p>
            </div>

            <ul className="space-y-4 text-gray-700">
              <li>✔ Startups looking for sustainable acquisition</li>
              <li>✔ Local businesses wanting more inbound leads</li>
              <li>✔ SaaS & service-based companies</li>
              <li>✔ Brands tired of paid ads dependency</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#2F36C6] py-24 text-center text-white">
          <h2 className="text-4xl font-bold">
            Want SEO That Actually Works?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Let’s build a strategy tailored to your business goals.
          </p>
          <button className="mt-8 bg-white text-[#2F36C6] px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
           onClick={()=>navigate("/contact")}>
            Get Your SEO Roadmap
          </button>
        </div>

      </div>
    </section>
  );
};

export default Seo;
