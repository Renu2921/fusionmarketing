import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import mainImage from "../../assets/main.png";
import seoImage from "../../assets/seo.png";
import search from "../../assets/search.png";
import webDesign from "../../assets/web-design.png";
import advertising from "../../assets/advertising.png";
import socialMedia from "../../assets/social-media.png";
import ppc from "../../assets/ppc.png";

import ChooseUs from "./ChooseUs";
import HowWeWork from "./HowWeWork";
import ContactSection from "./ContactSection";
import StatsSection from "../StateSection";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      path: "/services/seo",
      image: seoImage,
      title: "SEO Optimization",
      desc: "Improve your search rankings and organic traffic.",
    },
    {
      path: "/services/ppc",
      image: ppc,
      title: "PPC Advertising",
      desc: "Run high-converting Google & Meta ad campaigns.",
    },
    {
      path: "/services/social-media-marketing",
      image: socialMedia,
      title: "Social Media Marketing",
      desc: "Build brand awareness and audience engagement.",
    },
    {
      path: "/services/content-marketing",
      image: advertising,
      title: "Content Marketing",
      desc: "Attract customers with powerful content strategies.",
    },
    {
      path: "/services/web",
      image: webDesign,
      title: "Web Design",
      desc: "Modern, responsive, conversion-focused websites.",
    },
    {
      path: "/services/brand",
      image: search,
      title: "Brand Strategy",
      desc: "Create a strong and memorable brand identity.",
    },
  ];

  return (
    <div className="w-full">

      {/* HERO SECTION */}

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold text-gray-900 leading-tight">
              Grow Your Business with{" "}
              <span className="text-fusion">Digital Marketing</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              We help brands increase traffic, generate quality leads,
              and boost revenue through result-driven marketing strategies.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                className="bg-[#2F36C6] text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
                onClick={() => navigate("/contact")}
              >
                Get Free Consultation
              </button>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={mainImage}
              alt="Digital Marketing"
              className="w-full"
            />
          </motion.div>

        </div>
      </section>

      {/* SERVICES SECTION */}

      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900"
          >
            Our Digital Marketing Services
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-8"
          >

            {services.map((item, index) => (

              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >

                <div className="flex items-center gap-3">

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-blue-50 rounded-xl p-3"
                  >
                    <img src={item.image} className="w-10 h-10" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-fusion">
                    {item.title}
                  </h3>

                </div>

                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>

                <button
                  className="mt-4 text-[#2F36C6] font-medium hover:underline"
                  onClick={() => navigate(item.path)}
                >
                  Learn More →
                </button>

              </motion.div>

            ))}

          </motion.div>

        </div>
      </section>

      {/* OTHER SECTIONS */}

      <ChooseUs />
      <StatsSection/>
      <HowWeWork />
      <ContactSection />

    </div>
  );
};

export default Home;