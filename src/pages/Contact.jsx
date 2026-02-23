import React from "react";
import contact from "../assets/contact1.png";
import ContactForm from "./Home/ContactForm";

import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import x from "../assets/twitter-x.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";
import mail from "../assets/email.svg";

const Contact = () => {
  return (
    <section className="w-full bg-[#F5F7FF] py-24">
      <div className="max-w-7xl mx-auto px-10">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <img
            src={contact}
            alt="Contact Illustration"
            className="w-full max-w-md mx-auto"
          />

          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Let’s Connect <br />
              <span className="text-[#2F36C6]">& Grow Together</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-md">
              Fill out the form or reach out directly — let’s start building your
              digital success story together.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-3xl shadow-lg p-10">
            <ContactForm />
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-10 space-y-8">

            <div className="flex items-start gap-4">
              <img src={phone} className="w-10 h-10" />
              <div>
                <p className="font-semibold text-gray-900">Call Us</p>
                <p className="text-gray-600">+91 95181 59791</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src={mail} className="w-10 h-10" />
              <div>
                <p className="font-semibold text-gray-900">Email Us</p>
                <p className="text-gray-600">
                  info@fusionmarketing.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src={location} className="w-10 h-10" />
              <div>
                <p className="font-semibold text-gray-900">Our Office</p>
                <p className="text-gray-600">
                  123 Digital Drive, Suite 400 <br />
                  Innovate City, India
                </p>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="pt-6 border-t border-gray-200">
              <p className="mb-4 font-semibold text-gray-900">
                Follow Us
              </p>

              <div className="flex gap-4">
                {[instagram, facebook, linkedin, x].map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    className="w-9 h-9 cursor-pointer hover:scale-110 transition"
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
