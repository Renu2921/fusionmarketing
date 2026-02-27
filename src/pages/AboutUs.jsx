import React from "react";
import aboutUs from "../assets/about.png"

const AboutUs = () => {
  return (
    <section className="w-full bg-blue-50">

      {/* INTRO STORY */}
      <div className="max-w-7xl mx-auto py-16 md:py-28 px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            We Build Digital Growth Systems <br />
            Not Just Campaigns
          </h1>

          <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-600">
            Fusion Marketing was created with one belief: sustainable growth
            happens when strategy, execution, and data work together. We help
            brands move beyond guesswork and build marketing systems that scale.
          </p>
        </div>
         <div className="w-full">
            <img src={aboutUs} className="w-full h-full max-w-xl mx-auto" alt="About Fusion Marketing" />
         </div>
      </div>

      {/* OUR STORY */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Our <span className="text-[#2F36C6]">Story</span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              We started Fusion Marketing after seeing businesses spend heavily
              on digital ads without understanding what was working and why.
              Most agencies focused on activity, not outcomes.
            </p>

            <p className="mt-4 text-gray-600">
              So we built an agency that values clarity, accountability, and
              long-term results. Every strategy we create is rooted in business
              goals, not trends.
            </p>
          </div>

          <div className="bg-[#F5F7FF] rounded-2xl p-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What We Believe In
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Growth should be measurable and predictable</li>
              <li>✔ Transparency builds stronger partnerships</li>
              <li>✔ Strategy matters more than tools</li>
              <li>✔ Long-term wins beat short-term hacks</li>
            </ul>
          </div>
        </div>
      </div>

      {/* HOW WE THINK */}
      <div className="bg-[#F9FAFF] py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            How We Think About <span className="text-[#2F36C6]">Growth</span>
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Strategy First",
                desc: "Every decision starts with understanding the business model, audience, and economics.",
              },
              {
                title: "Data Over Opinions",
                desc: "We rely on performance data, not assumptions, to guide optimizations.",
              },
              {
                title: "Systems Over Tactics",
                desc: "We build repeatable growth systems, not one-off marketing efforts.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow">
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

      {/* WHO WE WORK WITH */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Who We Work <span className="text-[#2F36C6]">Best With</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl">
            Fusion Marketing partners with founders and teams who value growth,
            transparency, and long-term success.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5F7FF] p-8 rounded-2xl">
              <h4 className="font-semibold text-gray-900">Great Fit For</h4>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✔ Growth-focused startups</li>
                <li>✔ Service-based businesses</li>
                <li>✔ E-commerce brands</li>
                <li>✔ Founders who want clarity & control</li>
              </ul>
            </div>

            <div className="bg-[#F5F7FF] p-8 rounded-2xl">
              <h4 className="font-semibold text-gray-900">Not a Good Fit For</h4>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✖ Short-term ad-only thinking</li>
                <li>✖ One-size-fits-all strategies</li>
                <li>✖ Vanity metrics without outcomes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CLOSING */}
      <div className="bg-[#2F36C6] py-24 text-white">
        <div className="max-w-4xl mx-auto px-10 text-center">
          <h2 className="text-4xl font-bold">
            We Don’t Chase Trends. <br />
            We Build Growth That Lasts.
          </h2>
          <p className="mt-6 text-lg opacity-90">
            If you’re looking for a strategic partner who cares about results as
            much as you do, we’d love to talk.
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
