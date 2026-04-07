import React from "react";
import { motion } from "framer-motion";
import chooseUs from "../../assets/chooseus.png";

const ChooseUs = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-[3rem] font-bold text-gray-900">
           Why Smart Businesses Choose {" "}
           <span className="text-[#2F36C6]">Fusion Marketing</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            We focus on what actually matters — growing your business, not just your numbers.
          </p>

          <ul className="mt-8 space-y-4 text-gray-700">

            {[
              "Strategies built for real business growth, not just traffic",
              "Clear communication and full transparency at every step",
              "Campaigns designed to generate leads and revenue",
              "Data-backed decisions, not guesswork",
              "Flexible solutions that grow with your business",
            ].map((item, index) => (

              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <span className="text-[#2F36C6] font-bold">✔</span>
                {item}
              </motion.li>

            ))}

          </ul>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 text-lg font-semibold text-gray-900"
          >
            We don’t just market businesses —{" "}
            <span className="text-[#2F36C6]">
              we help them grow sustainably.
            </span>
          </motion.p>

        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex justify-center w-full"
        >

          <motion.img
            src={chooseUs}
            alt="Why Choose Fusion Marketing"
            className="w-full max-w-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

        </motion.div>

      </div>
    </section>
  );
};

export default ChooseUs;