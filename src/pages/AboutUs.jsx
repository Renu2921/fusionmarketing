import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import aboutUs from "../assets/about.png";

/* ── shared animation variants ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
};

const stagger = (staggerChildren = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren } },
});

const itemFade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/* ── helpers ── */
const SectionTag = ({ children }) => (
  <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#2F36C6] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-indigo-100 mb-5">
    <span className="w-1.5 h-1.5 rounded-full bg-[#2F36C6] animate-pulse" />
    {children}
  </div>
);

const Blob = ({ className }) => (
  <div className={`absolute rounded-full blur-3xl opacity-25 pointer-events-none ${className}`} />
);

/* ── section wrapper with inView trigger ── */
const Section = ({ children, className = "", ...props }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} className={className} {...props}>
      {children}
    </motion.div>
  );
};

/* ══════════════════════════════════ */
const AboutUs = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  /* stats counter */
  const stats = [
    { num: "150+", label: "Brands Scaled" },
    { num: "8yr",  label: "In Business" },
    { num: "98%",  label: "Retention Rate" },
    { num: "4.9★", label: "Client Rating" },
  ];

  const beliefs = [
    "Growth should be measurable and predictable",
    "Transparency builds stronger partnerships",
    "Strategy matters more than tools",
    "Long-term wins beat short-term hacks",
    "Data-driven decisions outperform gut feelings",
    "Every rupee spent must be accountable",
  ];

  const pillars = [
    {
      icon: "🎯",
      title: "Strategy First",
      desc: "Every decision starts with understanding the business model, audience, and economics — not guesswork.",
      color: "from-indigo-50 to-indigo-100",
      border: "border-indigo-200",
    },
    {
      icon: "📊",
      title: "Data Over Opinions",
      desc: "We rely on performance data and attribution modelling, not assumptions, to guide every optimisation.",
      color: "from-violet-50 to-violet-100",
      border: "border-violet-200",
    },
    {
      icon: "⚙️",
      title: "Systems Over Tactics",
      desc: "We build repeatable, scalable growth systems — not one-off campaigns that fizzle out.",
      color: "from-sky-50 to-sky-100",
      border: "border-sky-200",
    },
    {
      icon: "🤝",
      title: "Partnership Mindset",
      desc: "We act like your in-house growth team, invested in your outcomes — not just deliverables.",
      color: "from-emerald-50 to-emerald-100",
      border: "border-emerald-200",
    },
    {
      icon: "🔍",
      title: "Full Transparency",
      desc: "Clear reporting, honest conversations, and no black-box promises. You always know where your money goes.",
      color: "from-amber-50 to-amber-100",
      border: "border-amber-200",
    },
    {
      icon: "🚀",
      title: "Speed & Execution",
      desc: "Great strategy is worthless without speed. We move fast, test faster, and double down on what works.",
      color: "from-rose-50 to-rose-100",
      border: "border-rose-200",
    },
  ];

  const services = [
    { icon: "📣", label: "Performance Marketing" },
    { icon: "🔎", label: "SEO & Content" },
    { icon: "📧", label: "Email & CRM" },
    { icon: "🎨", label: "Brand Strategy" },
    { icon: "📱", label: "Social Media" },
    { icon: "📈", label: "Growth Analytics" },
    { icon: "🛒", label: "E-commerce Growth" },
    { icon: "💡", label: "Conversion Optimisation" },
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "We deep-dive into your business model, audience, competitors, and goals to build a clear growth picture." },
    { step: "02", title: "Strategy", desc: "A tailored 90-day growth roadmap covering channels, messaging, and KPIs — no cookie-cutter templates." },
    { step: "03", title: "Launch", desc: "Rapid execution across chosen channels with a focus on speed, quality, and measurable early signals." },
    { step: "04", title: "Optimise", desc: "Weekly data reviews, A/B tests, and budget reallocation to compound results month over month." },
    { step: "05", title: "Scale", desc: "Once the system is proven, we scale aggressively — expanding reach, channels, and revenue." },
  ];

  const team = [
    { name: "Arjun Mehta",    role: "Founder & Growth Strategist", initials: "AM", color: "bg-indigo-100 text-indigo-700" },
    { name: "Priya Sharma",   role: "Head of Performance Marketing", initials: "PS", color: "bg-violet-100 text-violet-700" },
    { name: "Rahul Verma",    role: "SEO & Content Lead",            initials: "RV", color: "bg-sky-100 text-sky-700" },
    { name: "Sneha Kapoor",   role: "Brand & Creative Director",     initials: "SK", color: "bg-rose-100 text-rose-700" },
  ];

  const testimonials = [
    {
      quote: "Fusion helped us go from ₹2L/month in revenue to ₹14L in just 6 months. Real strategy, real results.",
      name: "Karan Bhatia",
      company: "UrbanCart",
      initials: "KB",
    },
    {
      quote: "Finally an agency that talks business, not just impressions and clicks. They feel like a co-founder.",
      name: "Meena Iyer",
      company: "TalentBridge SaaS",
      initials: "MI",
    },
    {
      quote: "Transparent, fast, and incredibly data-driven. Our CAC dropped 40% in the first quarter.",
      name: "Dev Anand",
      company: "FitFuel D2C",
      initials: "DA",
    },
  ];

  return (
    <section className="w-full overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .sora { font-family: 'Sora', sans-serif; }
      `}</style>

      {/* ══════════ 1. HERO ══════════ */}
      <div
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg,#f0f3ff 0%,#ffffff 55%,#eef6ff 100%)" }}
      >
        <Blob className="w-[480px] h-[480px] bg-indigo-300 -top-32 -right-32" />
        <Blob className="w-80 h-80 bg-violet-200 bottom-10 -left-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-28 grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeLeft} initial="hidden" animate="show">
            <SectionTag>About Fusion Marketing</SectionTag>
            <h1 className="sora text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              We Build Digital <br />
              <span className="text-[#2F36C6]">Growth Systems</span><br />
              Not Just Campaigns
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-10">
              Fusion Marketing was created with one belief: sustainable growth happens when
              strategy, execution, and data work together. We help brands move beyond
              guesswork and build marketing systems that scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#our-story"
                whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(47,54,198,.4)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#2F36C6] text-white font-semibold px-7 py-4 rounded-full"
                style={{ boxShadow: "0 8px 24px rgba(47,54,198,.3)" }}
              >
                Our Story
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              <motion.a
                href="#team"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white text-[#2F36C6] font-semibold px-7 py-4 rounded-full border border-indigo-200"
              >
                Meet the Team
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" animate="show" style={{ y: heroY, opacity: heroOpacity }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-100 to-violet-100 blur-2xl opacity-60" />
              <motion.img
                src={aboutUs}
                alt="About Fusion Marketing"
                className="relative w-full max-w-xl mx-auto rounded-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              {/* floating stat chips */}
              {[
                { label: "📈 +240% avg ROAS", pos: "top-4 -left-6", delay: 0 },
                { label: "🏆 Top 1% agency", pos: "bottom-10 -right-6", delay: 1.5 },
              ].map(({ label, pos, delay }) => (
                <motion.div
                  key={label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay }}
                  className={`absolute ${pos} bg-white px-4 py-2.5 rounded-2xl shadow-xl text-sm font-semibold text-gray-800 border border-gray-100`}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 text-xs"
        >
          <span>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>

      {/* ══════════ 2. STATS BAR ══════════ */}
      <Section
        variants={stagger(0.1)}
        className="bg-[#2F36C6] py-14"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ num, label }) => (
            <motion.div key={label} variants={itemFade} className="text-center text-white">
              <span className="sora block text-4xl md:text-5xl font-bold mb-1">{num}</span>
              <span className="text-indigo-200 text-sm font-medium uppercase tracking-wider">{label}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════════ 3. OUR STORY ══════════ */}
      <div id="our-story" className="py-28" style={{ background: "#F9FAFF" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Section variants={fadeLeft}>
              <SectionTag>Our Story</SectionTag>
              <h2 className="sora text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Built From <span className="text-[#2F36C6]">Frustration.</span><br />
                Driven by Results.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                We started Fusion Marketing after watching businesses pour lakhs into digital ads
                without ever understanding what was working and why. Most agencies were obsessed
                with activity — impressions, reach, posts — while the actual business metrics stalled.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                So we built something different: an agency that values clarity, accountability,
                and long-term results above all else. Every strategy we create is rooted in
                business goals, not trends or vanity metrics.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Today, we've partnered with 150+ brands across India and helped them build
                scalable, predictable growth engines they're proud of.
              </p>
            </Section>

            <Section variants={fadeRight}>
              <div className="bg-white rounded-3xl p-10 border border-indigo-50 shadow-sm">
                <h3 className="sora text-xl font-bold text-gray-900 mb-8">What We Believe In</h3>
                <motion.ul variants={stagger(0.1)} className="space-y-4">
                  {beliefs.map((b, i) => (
                    <motion.li
                      key={i}
                      variants={itemFade}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-3 text-gray-700 cursor-default"
                    >
                      <span className="mt-1 w-5 h-5 rounded-full bg-indigo-100 text-[#2F36C6] flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
                      {b}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </Section>
          </div>
        </div>
      </div>

      {/* ══════════ 4. HOW WE THINK (PILLARS) ══════════ */}
      <div className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Section variants={fadeUp(0)} className="text-center mb-16">
            <SectionTag>How We Think</SectionTag>
            <h2 className="sora text-4xl md:text-5xl font-bold text-gray-900">
              How We Think About <span className="text-[#2F36C6]">Growth</span>
            </h2>
            <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto">
              Six principles that guide every engagement, every campaign, and every conversation we have.
            </p>
          </Section>

          <Section variants={stagger(0.1)}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {pillars.map(({ icon, title, desc, color, border }, i) => (
                <motion.div
                  key={i}
                  variants={itemFade}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.09)" }}
                  className={`bg-gradient-to-br ${color} p-8 rounded-2xl border ${border} transition-shadow cursor-default`}
                >
                  <div className="text-3xl mb-4">{icon}</div>
                  <h3 className="sora text-lg font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* ══════════ 5. WHAT WE DO (SERVICES TAG CLOUD) ══════════ */}
      <div className="py-24" style={{ background: "#F9FAFF" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <Section variants={fadeUp(0)}>
            <SectionTag>What We Do</SectionTag>
            <h2 className="sora text-4xl font-bold text-gray-900 mb-4">
              Full-Stack <span className="text-[#2F36C6]">Growth Services</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
              We cover every growth lever your business needs — from top-of-funnel awareness to bottom-of-funnel conversion.
            </p>
          </Section>
          <Section variants={stagger(0.08)}>
            <div className="flex flex-wrap justify-center gap-4">
              {services.map(({ icon, label }, i) => (
                <motion.div
                  key={i}
                  variants={itemFade}
                  whileHover={{ y: -4, scale: 1.04, boxShadow: "0 10px 28px rgba(47,54,198,.18)" }}
                  className="flex items-center gap-2.5 bg-white border border-indigo-100 text-gray-800 font-semibold px-6 py-3.5 rounded-full shadow-sm cursor-default text-sm"
                >
                  <span className="text-xl">{icon}</span> {label}
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* ══════════ 6. OUR PROCESS ══════════ */}
      <div className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Section variants={fadeUp(0)} className="text-center mb-20">
            <SectionTag>How We Work</SectionTag>
            <h2 className="sora text-4xl md:text-5xl font-bold text-gray-900">
              Our <span className="text-[#2F36C6]">Process</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
              A proven 5-step system we use with every client to deliver predictable, compounding growth.
            </p>
          </Section>

          <Section variants={stagger(0.14)}>
            <div className="relative">
              {/* connector line */}
              <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-indigo-100 z-0 mx-16" />
              <div className="grid md:grid-cols-5 gap-8">
                {process.map(({ step, title, desc }, i) => (
                  <motion.div key={i} variants={itemFade} className="relative z-10 text-center flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -4 }}
                      className="w-16 h-16 rounded-2xl bg-[#2F36C6] text-white sora font-bold text-lg flex items-center justify-center mb-5 shadow-lg"
                      style={{ boxShadow: "0 8px 24px rgba(47,54,198,.3)" }}
                    >
                      {step}
                    </motion.div>
                    <h4 className="sora font-bold text-gray-900 mb-2">{title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* ══════════ 7. WHO WE WORK WITH ══════════ */}
      <div className="py-28" style={{ background: "#F9FAFF" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Section variants={fadeUp(0)} className="mb-12">
            <SectionTag>Ideal Clients</SectionTag>
            <h2 className="sora text-4xl md:text-5xl font-bold text-gray-900">
              Who We Work <span className="text-[#2F36C6]">Best With</span>
            </h2>
            <p className="mt-5 text-gray-500 text-lg max-w-3xl">
              We're selective about who we partner with — because the best results come from mutual alignment.
            </p>
          </Section>

          <Section variants={stagger(0.12)}>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Great Fit For",
                  icon: "✅",
                  bg: "bg-white border-emerald-200",
                  tag: "bg-emerald-50 text-emerald-700 border-emerald-200",
                  items: [
                    "Growth-focused startups & scale-ups",
                    "Service-based businesses with strong unit economics",
                    "E-commerce brands ready to scale profitably",
                    "Founders who value clarity, data & accountability",
                    "Teams who see marketing as an investment",
                  ],
                },
                {
                  title: "Not a Good Fit For",
                  icon: "❌",
                  bg: "bg-white border-red-200",
                  tag: "bg-red-50 text-red-700 border-red-200",
                  items: [
                    "Short-term, ad-only 'spray and pray' thinking",
                    "Brands expecting overnight viral success",
                    "Businesses that can't share clear business goals",
                    "Teams who rely on vanity metrics over revenue",
                  ],
                },
              ].map(({ title, icon, bg, tag, items }) => (
                <motion.div
                  key={title}
                  variants={itemFade}
                  className={`${bg} border p-10 rounded-3xl`}
                >
                  <div className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border mb-6 ${tag}`}>
                    {icon} {title}
                  </div>
                  <ul className="space-y-3">
                    {items.map((item, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3 text-gray-700 text-sm cursor-default"
                      >
                        <span className="mt-0.5 text-base">{icon}</span> {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* ══════════ 8. MEET THE TEAM ══════════ */}
      <div id="team" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Section variants={fadeUp(0)} className="text-center mb-16">
            <SectionTag>The People</SectionTag>
            <h2 className="sora text-4xl md:text-5xl font-bold text-gray-900">
              Meet the <span className="text-[#2F36C6]">Team</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
              Growth strategists, data nerds, and creative thinkers — all obsessed with your results.
            </p>
          </Section>

          <Section variants={stagger(0.12)}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
              {team.map(({ name, role, initials, color }, i) => (
                <motion.div
                  key={i}
                  variants={itemFade}
                  whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(0,0,0,0.1)" }}
                  className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm transition-shadow"
                >
                  <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-lg font-bold mx-auto mb-4`}>
                    {initials}
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-xs text-gray-400 mt-1">{role}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* ══════════ 9. TESTIMONIALS ══════════ */}
      <div className="py-28" style={{ background: "#F9FAFF" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Section variants={fadeUp(0)} className="text-center mb-16">
            <SectionTag>Client Voices</SectionTag>
            <h2 className="sora text-4xl md:text-5xl font-bold text-gray-900">
              What Our <span className="text-[#2F36C6]">Clients Say</span>
            </h2>
          </Section>

          <Section variants={stagger(0.14)}>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map(({ quote, name, company, initials }, i) => (
                <motion.div
                  key={i}
                  variants={itemFade}
                  whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(0,0,0,0.09)" }}
                  className="bg-white rounded-3xl p-8 border border-indigo-50 shadow-sm relative"
                >
                  <span className="text-5xl text-indigo-100 font-serif leading-none absolute top-6 right-8">"</span>
                  <p className="text-gray-600 leading-relaxed mb-8 relative z-10 text-sm">{quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-[#2F36C6] font-bold text-sm flex items-center justify-center">
                      {initials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{name}</p>
                      <p className="text-xs text-gray-400">{company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* ══════════ 10. CLOSING CTA ══════════ */}
      <div className="relative py-32 overflow-hidden bg-[#2F36C6]">
        <Blob className="w-96 h-96 bg-indigo-400 -top-24 -right-24 opacity-20" />
        <Blob className="w-72 h-72 bg-violet-400 -bottom-20 -left-20 opacity-20" />

        <Section variants={fadeUp(0)} className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <SectionTag>Work With Us</SectionTag>
          <h2 className="sora text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We Don't Chase Trends.<br />
            <span className="text-indigo-200">We Build Growth That Lasts.</span>
          </h2>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            If you're looking for a strategic partner who cares about results as much as you do,
            we'd love to show you exactly how we'd grow your business.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(0,0,0,.25)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-white text-[#2F36C6] font-bold px-8 py-4 rounded-full text-sm"
            >
              Book a Free Strategy Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#2F36C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-indigo-300 text-white font-semibold px-8 py-4 rounded-full text-sm hover:bg-indigo-500 transition-colors"
            >
              Explore Services
            </motion.a>
          </div> */}
        </Section>
      </div>

    </section>
  );
};

export default AboutUs;
