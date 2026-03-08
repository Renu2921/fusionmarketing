import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: 150,
    suffix: "+",
    label: "Ad Campaigns",
  },
  {
    number: 2.5,
    suffix: "Cr+",
    label: "Client Revenue Generated",
  },
  {
    number: 300,
    suffix: "%",
    label: "Avg ROI from PPC",
  },
  {
    number: 96,
    suffix: "%",
    label: "Client Retention Rate",
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <span className="text-[#2F36C6] bg-gray-100 px-4 py-1 rounded-full text-xl md:text-2xl font-bold">
            Strong growth
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Let the numbers talk!
          </h2>

          <p className="text-gray-600 mt-3">
            We provide support for more than 500+ Businesses.
          </p>
        </div>

        {/* Stats */}

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
        >
          {stats.map((item, index) => (
            <div key={index}>

              <h3 className="text-4xl md:text-6xl font-bold text-black">
                {inView && (
                  <CountUp
                    end={item.number}
                    duration={2}
                    decimals={item.number % 1 !== 0 ? 1 : 0}
                  />
                )}
                {item.suffix}
              </h3>

              <p className="mt-3 font-semibold text-gray-700">
                {item.label}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;