import React from "react";
import mainImage from "../../assets/main.png"
import seoImage from "../../assets/seo.png"
import ChooseUs from "./ChooseUs";
import HowWeWork from "./HowWeWork";
import ContactSection from "./ContactSection";
import search from "../../assets/search.png"
import webDesign from "../../assets/web-design.png"
import advertising from "../../assets/advertising.png"
import socialMedia from "../../assets/social-media.png"
import ppc from "../../assets/ppc.png"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  return (
    <div className=" w-full">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Grow Your Business with <br />
              <span className="text-fusion">Digital Marketing</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              We help brands increase traffic, generate quality leads,
              and boost revenue through result-driven marketing strategies.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-[#2F36C6] text-white px-6 py-3 rounded-xl font-medium"
              onClick={()=>navigate("/contact")}>
                Get Free Consultation
              </button>
              <button className="border border-fusion text-fusion px-6 py-3 rounded-xl font-medium">
                Our Services
              </button>
            </div>
          </div>
          <div>
            <img
              src={mainImage}
              alt="Digital Marketing"
              className="w-full"
            />
          </div>

        </div>
      </section>
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold text-center text-gray-900">
            Our Digital Marketing Services
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            {[
              {path:"/services/seo", image:seoImage, title: "SEO Optimization", desc: "Improve your search rankings and organic traffic." },
              {path:"/services/ppc",image:ppc, title: "PPC Advertising", desc: "Run high-converting Google & Meta ad campaigns." },
              {path:"/services/social-media-marketing",image:socialMedia, title: "Social Media Marketing", desc: "Build brand awareness and audience engagement." },
              {path:"/services/content-marketing",image:advertising, title: "Content Marketing", desc: "Attract customers with powerful content strategies." },
              {path:"/services/web",image:webDesign, title: "Web Design", desc: "Modern, responsive, conversion-focused websites." },
              {path:"/services/brand",image:search, title: "Brand Strategy", desc: "Create a strong and memorable brand identity." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2">
                    <div className=" bg-blue-50 rounded-xl p-2">
                <img src={item.image} className="w-10 h-10"/>
                   </div>
                <h3 className="text-xl font-semibold text-fusion">
                  {item.title}
                </h3>
                </div>
                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>
                <button className="mt-4 text-fusion font-medium text-[#2F36C6]"
                onClick={()=>navigate(item?.path)}>
                  Learn More →
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>
      <ChooseUs/>
      <HowWeWork/>
<ContactSection/>
    </div>
  );
};

export default Home;
