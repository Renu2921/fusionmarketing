import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import contact from "../assets/contact1.png";
import ContactForm from "./Home/ContactForm";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import x from "../assets/twitter-x.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";
import mail from "../assets/email.svg";

/* ── animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemFade = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ── floating blob ── */
const Blob = ({ className, style }) => (
  <div
    className={`absolute rounded-full blur-3xl opacity-30 pointer-events-none ${className}`}
    style={style}
  />
);

/* ── contact info row ── */
const InfoRow = ({ icon, label, sub, children }) => (
  <motion.div
    variants={itemFade}
    whileHover={{ x: 6 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#F5F7FF] transition-colors cursor-default group border border-transparent hover:border-[#DDE1FF]"
  >
    <motion.div
      whileHover={{ scale: 1.15, rotate: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
      style={{ background: "rgba(47,54,198,0.08)" }}
    >
      <img src={icon} alt={label} className="w-6 h-6" />
    </motion.div>
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
      <p className="font-semibold text-gray-900 text-[15px]">{children}</p>
      {sub && <p className="text-sm text-gray-400 mt-0.5">{sub}</p>}
    </div>
  </motion.div>
);

/* ── social pill ── */
const socials = [
  { icon: instagram, label: "Instagram", hover: "hover:bg-pink-50 hover:border-pink-200" },
  { icon: facebook,  label: "Facebook",  hover: "hover:bg-blue-50 hover:border-blue-200" },
  { icon: linkedin,  label: "LinkedIn",  hover: "hover:bg-sky-50 hover:border-sky-200" },
  { icon: x,         label: "X",         hover: "hover:bg-gray-100 hover:border-gray-300" },
];

/* ── stat pill ── */
const Stat = ({ num, label }) => (
  <div className="text-center">
    <span className="block text-2xl font-bold text-[#2F36C6]" style={{ fontFamily: "'Sora', sans-serif" }}>{num}</span>
    <span className="text-xs text-gray-400">{label}</span>
  </div>
);

/* ════════════════════════════════════════ */
const Contact = () => {
  const infoRef  = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-80px" });

  return (
    <section className="relative w-full overflow-hidden py-24" style={{ background: "linear-gradient(135deg, #f0f3ff 0%, #ffffff 50%, #eef6ff 100%)" }}>

      {/* ── background blobs ── */}
      <Blob className="w-96 h-96 bg-indigo-300 -top-20 -right-20 animate-[floatBlob_8s_ease-in-out_infinite]" />
      <Blob className="w-72 h-72 bg-blue-200 bottom-10 -left-16 animate-[floatBlob_10s_ease-in-out_infinite_reverse]" />
      <Blob className="w-52 h-52 bg-violet-200 top-1/2 left-1/3 animate-[floatBlob_6s_ease-in-out_2s_infinite]" />

      {/* ── keyframes injected once ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap');
        @keyframes floatBlob {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-24px) scale(1.06); }
        }
        @keyframes spinOrbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseShadow {
          0%,100% { box-shadow: 0 24px 64px rgba(47,54,198,.25), 0 0 0 0 rgba(47,54,198,.12); }
          50%     { box-shadow: 0 36px 80px rgba(47,54,198,.35), 0 0 0 18px rgba(47,54,198,0); }
        }
        @keyframes blink {
          0%,100% { opacity:1; } 50% { opacity:.3; }
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">

        {/* ══ HERO ══ */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          {/* illustration */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            className="flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center w-80 h-80 md:w-96 md:h-96">
              {/* orbit rings */}
              {[{ size: 280, dur: "20s" }, { size: 360, dur: "30s", rev: true }].map(({ size, dur, rev }, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-dashed border-indigo-200"
                  style={{
                    width: size, height: size,
                    animation: `spinOrbit ${dur} linear infinite ${rev ? "reverse" : ""}`,
                  }}
                >
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: 12, height: 12,
                      background: i === 0 ? "#2F36C6" : "#6366f1",
                      top: -6, left: "50%", marginLeft: -6,
                      boxShadow: "0 0 8px rgba(99,102,241,.7)",
                    }}
                  />
                </div>
              ))}

              {/* glow circle */}
              <div
                className="w-44 h-44 md:w-52 md:h-52 rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  background: "linear-gradient(135deg,#2F36C6,#6366f1,#818cf8)",
                  animation: "pulseShadow 4s ease-in-out infinite",
                }}
              >
                <img src={contact} alt="Contact" className="w-full h-full object-cover" />
              </div>

              {/* floating chips */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-6 right-0 bg-white px-3 py-2 rounded-xl shadow-lg text-xs font-semibold text-[#2F36C6] border border-indigo-100 flex items-center gap-1.5"
              >
                <span>💬</span> New message
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-0 bg-white px-3 py-2 rounded-xl shadow-lg text-xs font-semibold text-emerald-600 border border-emerald-100 flex items-center gap-1.5"
              >
                <span>✓</span> Message sent!
              </motion.div>
            </div>
          </motion.div>

          {/* copy */}
          <motion.div variants={fadeRight} initial="hidden" animate="show">
            {/* live badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#2F36C6] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-indigo-100 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F36C6]" style={{ animation: "blink 2s ease-in-out infinite" }} />
              We're here to help
            </div>

            <h1
              className="text-5xl font-bold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Let's Connect <br />
              <span className="text-[#2F36C6]">&amp; Grow Together</span>
            </h1>

            <p className="text-gray-500 text-lg max-w-md leading-relaxed mb-8">
              Fill out the form or reach out directly — let's start building your
              digital success story together.
            </p>

            <motion.a
              href="#contact-form"
              whileHover={{ y: -3, boxShadow: "0 16px 36px rgba(47,54,198,.45)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#2F36C6] text-white font-semibold px-7 py-4 rounded-full transition-all"
              style={{ boxShadow: "0 8px 24px rgba(47,54,198,.35)" }}
            >
              Start a Conversation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* ══ CARDS ══ */}
        <div id="contact-form" className="grid md:grid-cols-2 gap-8 items-start">

          {/* form card */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="bg-white rounded-3xl p-10 border border-slate-100"
            style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}
          >
            <p className="text-xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>
              Send a Message
            </p>
            <ContactForm />
          </motion.div>

          {/* info card */}
          <motion.div
            ref={infoRef}
            variants={fadeUp}
            custom={0.45}
            initial="hidden"
            animate={infoInView ? "show" : "hidden"}
            className="bg-white rounded-3xl p-10 border border-slate-100"
            style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}
          >
            <p className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
              Get in Touch
            </p>

            <motion.div variants={staggerContainer} initial="hidden" animate={infoInView ? "show" : "hidden"} className="space-y-2">
              <InfoRow icon={phone} label="Phone" sub="Mon–Fri, 9am–6pm IST">
                +91 95181 59791
              </InfoRow>
              <InfoRow icon={mail} label="Email" sub="We reply within 24 hours">
                info@fusionmarketing.com
              </InfoRow>
              <InfoRow icon={location} label="Office" sub="Innovate City, India">
                123 Digital Drive, Suite 400
              </InfoRow>
            </motion.div>

            {/* divider */}
            <div className="my-7 border-t border-gray-100" />

            {/* socials */}
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">Follow Us</p>
            <div className="flex gap-3">
              {socials.map(({ icon, label, hover }, i) => (
                <motion.button
                  key={i}
                  whileHover={{ y: -5, boxShadow: "0 10px 24px rgba(0,0,0,0.14)" }}
                  whileTap={{ scale: 0.93 }}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border border-gray-200 bg-white transition-colors ${hover}`}
                  aria-label={label}
                >
                  <img src={icon} alt={label} className="w-5 h-5" />
                </motion.button>
              ))}
            </div>

            {/* stats */}
            <div className="mt-8 pt-7 border-t border-gray-100 grid grid-cols-3 gap-4">
              <Stat num="500+" label="Clients" />
              <Stat num="5yr"  label="Experience" />
              <Stat num="98%"  label="Satisfaction" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
