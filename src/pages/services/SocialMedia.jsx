import React from "react";
import socialMedia from "../../assets/socialMedia.png"
import { useNavigate } from "react-router-dom";

const SocialMedia = () => {
  const navigate=useNavigate();
  return (
    <section className="w-full bg-white">

      {/* HERO SECTION */}
      <div className="py-28 bg-[#F5F7FF]">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Social Media That <br />
              <span className="text-[#2F36C6]">
                Builds Brands & Demand
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We help businesses grow on social platforms by combining
              content, consistency, and performance-driven strategy —
              not random posting.
            </p>

            <button className="mt-8 bg-[#2F36C6] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
             onClick={()=>navigate("/contact")}>
              Build My Social Presence
            </button>
          </div>

          {/* RIGHT IFRAME */}
          <div className="flex justify-center">
            
             <img src={socialMedia}/>
           
          </div>

        </div>
      </div>

      {/* WHY SOCIAL MEDIA MATTERS */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Social Media <span className="text-[#2F36C6]">Matters</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Social media is no longer optional. It’s where customers discover,
            trust, and engage with brands before they ever convert.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Brand Visibility",
                desc: "Stay top-of-mind where your audience spends their time.",
              },
              {
                title: "Trust & Authority",
                desc: "Consistent content builds credibility and loyalty.",
              },
              {
                title: "Demand Generation",
                desc: "Create interest before users are ready to buy.",
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

      {/* OUR SOCIAL MEDIA APPROACH */}
      <div className="bg-[#F5F7FF] py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Our Social Media <span className="text-[#2F36C6]">Approach</span>
          </h2>

          <div className="mt-16 space-y-8 max-w-4xl mx-auto">
            {[
              {
                step: "Audience & Platform Strategy",
                desc: "Choosing the right platforms and content formats for your brand.",
              },
              {
                step: "Content Planning & Creation",
                desc: "High-quality creatives designed for engagement and reach.",
              },
              {
                step: "Consistent Publishing",
                desc: "Strategic posting schedules to maximize visibility.",
              },
              {
                step: "Community Engagement",
                desc: "Replies, DMs, and interactions that build relationships.",
              },
              {
                step: "Insights & Optimization",
                desc: "Performance tracking and continuous improvement.",
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

      {/* PLATFORMS */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            Platforms We <span className="text-[#2F36C6]">Work With</span>
          </h2>

          <div className="mt-12 grid md:grid-cols-5 gap-6 text-center">
            {["Instagram", "Facebook", "LinkedIn", "Pinterest", "X (Twitter)"].map(
              (platform, i) => (
                <div
                  key={i}
                  className="bg-[#F5F7FF] py-4 rounded-xl font-medium text-gray-700"
                >
                  {platform}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#2F36C6] py-24 text-center text-white">
        <h2 className="text-4xl font-bold">
          Ready to Grow on Social Media?
        </h2>
        <p className="mt-4 text-lg opacity-90">
          Let’s create a social presence your audience actually cares about.
        </p>
        <button className="mt-8 bg-white text-[#2F36C6] px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
         onClick={()=>navigate("/contact")}>
          Start My Social Strategy
        </button>
      </div>

    </section>
  );
};

export default SocialMedia;
