import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

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

/* ─── animation variants ─────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

/* ─── static data ─────────────────────────────────────────────────────── */
const services = [
  {
    path: "/services/seo", image: seoImage, title: "SEO Optimization",
    desc: "Rank higher, attract the right audience, and turn organic traffic into consistent business growth with data-driven SEO strategies.",
  },
  {
    path: "/services/ppc", image: ppc, title: "PPC Advertising",
    desc: "Maximize Business Growth with high-performing ad campaigns designed to generate qualified leads — not just clicks.",
  },
  {
    path: "/services/social-media-marketing", image: socialMedia, title: "Social Media Marketing",
    desc: "Build a strong digital presence and engage your audience with content that drives awareness, trust, and conversions.",
  },
  {
    path: "/services/content-marketing", image: advertising, title: "Content Marketing",
    desc: "Create impactful content that educates, engages, and converts — turning visitors into loyal customers.",
  },
  {
    path: "/services/web", image: webDesign, title: "Web Design",
    desc: "Design fast, modern, and conversion-focused websites that not only look great but also drive real results.",
  },
  {
    path: "/services/brand", image: search, title: "Brand Strategy",
    desc: "Build a powerful brand identity that stands out, connects with your audience, and creates long-term value.",
  },
];

const industries = [
  { icon: "🛒", label: "E-Commerce" },
  { icon: "🏥", label: "Healthcare" },
  { icon: "🏗️", label: "Real Estate" },
  { icon: "📚", label: "Education" },
  { icon: "🍽️", label: "Food & Beverage" },
  { icon: "💼", label: "Finance" },
  { icon: "✈️", label: "Travel & Tourism" },
  { icon: "🎮", label: "Technology" },
];

const testimonials = [
  {
    name: "Priya Sharma", role: "CEO, StyleNest India",
    text: "Fusion Marketing completely transformed our online presence. Our organic traffic tripled within 4 months and our ROAS on paid campaigns hit 6x. The team is responsive, data-driven, and genuinely invested in our growth.",
    rating: 5, avatar: "PS",
  },
  {
    name: "Rahul Mehta", role: "Founder, TechHub Solutions",
    text: "From a near-zero social media presence to 80K engaged followers in six months — Fusion didn't just deliver numbers, they built a community around our brand. Highly recommend.",
    rating: 5, avatar: "RM",
  },
  {
    name: "Ananya Krishnan", role: "Marketing Head, EduPath",
    text: "Their content strategy is second to none. Every blog, video, and campaign they produced positioned us as an authority in ed-tech. Lead quality improved dramatically.",
    rating: 5, avatar: "AK",
  },
  {
    name: "Vikram Joshi", role: "Director, PropInvest Realty",
    text: "The PPC campaigns Fusion ran for us generated 3x more qualified site visits at 40% lower cost-per-click than our previous agency. Outstanding ROI.",
    rating: 5, avatar: "VJ",
  },
];

const faqs = [
  {
    q: "How soon will I see results from digital marketing?",
    a: "SEO typically shows meaningful movement in 3–6 months, while PPC and social campaigns can deliver measurable results within the first few weeks. We set honest timelines during onboarding.",
  },
  {
    q: "What is your minimum engagement budget?",
    a: "We work with businesses of all sizes. Our starter packages begin at ₹25,000/month and scale based on channels, ad spend, and scope of work.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Absolutely. Our team manages campaigns across South Asia, the Middle East, and the UK. All communication is in English and we adapt to your timezone.",
  },
  {
    q: "How do you measure and report campaign performance?",
    a: "Every client gets a custom live dashboard tracking KPIs that matter to their business — not vanity metrics. We send detailed monthly reports and hold regular strategy calls.",
  },
  {
    q: "Can I combine multiple services?",
    a: "Yes — and most clients do. Bundling SEO with content marketing or PPC with social media yields compounding returns. We'll recommend the best combination for your goals.",
  },
];

const blogPosts = [
  {
    tag: "SEO", date: "Mar 28, 2025",
    title: "Why E-E-A-T Is the Most Important Google Ranking Signal in 2025",
    excerpt: "Experience, Expertise, Authoritativeness, and Trust are now the backbone of every top-ranking page. Here's how to build all four.",
    readTime: "5 min read",
  },
  {
    tag: "PPC", date: "Mar 15, 2025",
    title: "Performance Max vs. Standard Shopping: Which Wins for Indian D2C Brands?",
    excerpt: "We analysed ₹2 crore in ad spend across 18 brands. The results challenge conventional wisdom about PMax campaigns.",
    readTime: "7 min read",
  },
  {
    tag: "Social Media", date: "Mar 5, 2025",
    title: "The Instagram Reels Strategy That Generated 4M Views in 30 Days",
    excerpt: "A step-by-step breakdown of the content formula we used for a food & beverage client to achieve viral scale without paid promotion.",
    readTime: "6 min read",
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We learn about your business, goals, competitors, and current marketing setup in a focused 60-minute session." },
  { step: "02", title: "Strategy Blueprint", desc: "Our team builds a customised growth roadmap: channel mix, budget allocation, content plan, and KPI targets." },
  { step: "03", title: "Campaign Launch", desc: "Assets are created, campaigns are configured, and everything goes live with full tracking and analytics in place." },
  { step: "04", title: "Optimise & Scale", desc: "We analyse performance weekly, make data-backed optimisations, and scale what works to compound your results." },
];

/* ─── sub-components ──────────────────────────────────────────────────── */

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.35 2.436c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.663 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
      </svg>
    ))}
  </div>
);

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-800 hover:bg-blue-50 transition"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <span className={`ml-4 shrink-0 text-[#2F36C6] transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-gray-600 leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
};

/* ─── main component ──────────────────────────────────────────────────── */

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full font-sans">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-blue-100 opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-50 opacity-60 blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            {/* trust badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2F36C6] text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2F36C6] animate-pulse" />
              Trusted by 150+ Growing Businesses
            </div>

            <h1 className="text-[2.6rem] md:text-[3.4rem] font-extrabold text-gray-900 leading-[1.15] tracking-tight">
              Turn Your Marketing Into{" "}
              <span className="text-[#2F36C6] relative">
                Measurable Growth
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" preserveAspectRatio="none" fill="none">
                  <path d="M0 6 Q75 0 150 6 Q225 12 300 6" stroke="#2F36C6" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg">
              At Fusion Marketing, every campaign is designed to drive measurable growth. No guesswork, no vanity metrics — just strategies that turn clicks into customers and effort into Business Growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="bg-[#2F36C6] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#252db0] hover:scale-105 transition shadow-lg shadow-blue-200"
                onClick={() => navigate("/contact")}
              >
                Start Growing Today →
              </button>
              <button
                className="border-2 border-gray-200 text-gray-700 px-7 py-3.5 rounded-xl font-semibold hover:border-[#2F36C6] hover:text-[#2F36C6] transition"
                onClick={() => navigate("/services")}
              >
                View Our Services
              </button>
            </div>

            {/* social proof strip */}
            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <div className="flex -space-x-2">
                {["BK", "SR", "MT", "PJ", "AD"].map((initials, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <StarRating />
                <p className="text-sm text-gray-500 mt-0.5">4.9 / 5 from 80+ reviews</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <img src={mainImage} alt="Digital Marketing" className="w-full drop-shadow-xl" />
          </motion.div>
        </div>
      </section>

      {/* ── LOGO / PARTNER BAR ───────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">Brands That Trust Us</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-60">
            {["NovaTech", "GreenLeaf Co.", "Urbanize", "ClearPath", "BrightSpark", "Meridian"].map((brand) => (
              <span key={brand} className="text-gray-500 font-bold text-lg tracking-tight">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <span className="text-[#2F36C6] font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Our Digital Marketing Services</h2>
            <p className="mt-3 text-gray-500">A full suite of performance-driven services to put your brand in front of the right people and convert them into paying customers.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-8"
          >
            {services.map((item, index) => (
  <motion.div
    key={index}
    variants={cardVariants}
    whileHover={{ y: -8, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer group hover:bg-[#2F36C6]"
    onClick={() => navigate(item.path)}
  >
    <div className="flex items-center gap-3">
      <div className="bg-blue-50 rounded-xl p-3  transition">
        <img src={item.image} className="w-10 h-10" alt={item.title} />
      </div>

      {/* 👇 TEXT COLOR CHANGE */}
      <h3 className="text-xl font-semibold text-[#2F36C6] group-hover:text-white">
        {item.title}
      </h3>
    </div>

    {/* 👇 DESCRIPTION TEXT */}
    <p className="mt-3 text-gray-600 group-hover:text-white/90">
      {item.desc}
    </p>

    {/* 👇 BUTTON TEXT */}
    <button
      className="mt-4 text-[#2F36C6] font-medium hover:underline group-hover:text-white"
      onClick={(e) => {
        e.stopPropagation();
        navigate(item.path);
      }}
    >
      Learn More →
    </button>
  </motion.div>
))}
          </motion.div>
        </div>
      </section>

      {/* ── CHOOSE US + STATS + HOW WE WORK (existing) ───────────────── */}
      <ChooseUs />
      <StatsSection />

      {/* ── PROCESS STEPS ────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#2F36C6] font-semibold text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">From First Call to Real Results</h2>
            <p className="mt-3 text-gray-500">A simple, transparent four-step process that gets your marketing machine running fast.</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-4 gap-8 relative">
            {/* connector line — desktop only */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-[#2F36C6] to-blue-200 opacity-30 z-0" />

            {process.map((item, i) => (
              <motion.div key={i} variants={cardVariants} className="relative z-10 bg-blue-50 rounded-2xl p-7 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#2F36C6] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────── */}
     <section className="relative bg-[#2F36C6]">
  {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
      <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z" fill="white" />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-6 py-24">
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
      <span className="text-blue-300 font-semibold text-sm uppercase tracking-widest">Sectors We Serve</span>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">We Grow Businesses Across Every Industry</h2>
    </motion.div>

    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-5">
      {industries.map((ind, i) => (
        <motion.div
          key={i} variants={cardVariants}
          whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.18)" }}
          className="bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-center gap-3 text-white cursor-default transition"
        >
          <span className="text-4xl">{ind.icon}</span>
          <span className="font-semibold text-sm text-center">{ind.label}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
      <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z" fill="white" />
    </svg>
  </div>
</section>
      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#2F36C6] font-semibold text-sm uppercase tracking-widest">Client Stories</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Results That Speak for Themselves</h2>
            <p className="mt-3 text-gray-500">Don't take our word for it — hear from the businesses we've helped grow.</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-7">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={cardVariants} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col gap-4">
                <StarRating count={t.rating} />
                <p className="text-gray-700 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2F36C6] to-indigo-400 flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW WE WORK (existing) ───────────────────────────────────── */}
      <HowWeWork />
    

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <span className="text-[#2F36C6] font-semibold text-sm uppercase tracking-widest">Got Questions?</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={cardVariants}>
                <FaqItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-4">
            <span className="text-[#2F36C6] font-semibold text-sm uppercase tracking-widest">Why Fusion Marketing?</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Us vs. The Traditional Agency
            </h2>
            <p className="mt-3 text-gray-500">
              See why growth-focused businesses choose Fusion over conventional marketing agencies.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="mt-10 rounded-2xl overflow-hidden shadow-xl border border-gray-100">

              {/* Table header */}
              <div className="grid grid-cols-3 bg-[#2F36C6] text-white text-center font-bold text-sm md:text-base">
                <div className="px-6 py-4 text-left">Factor</div>
                <div className="px-6 py-4 border-l border-white/20 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  Fusion Marketing
                </div>
                <div className="px-6 py-4 border-l border-white/20 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                  Traditional Agency
                </div>
              </div>

              {/* Table rows */}
              {[
                {
                  factor: "Strategy Approach",
                  us: { icon: "✅", text: "Custom, data-driven per business" },
                  them: { icon: "❌", text: "One-size-fits-all templates" },
                },
                {
                  factor: "Reporting & Transparency",
                  us: { icon: "✅", text: "Live dashboard + monthly deep-dives" },
                  them: { icon: "❌", text: "PDF reports every quarter" },
                },
                {
                  factor: "ROI Focus",
                  us: { icon: "✅", text: "Revenue & lead quality first" },
                  them: { icon: "⚠️", text: "Impressions & reach focused" },
                },
                {
                  factor: "Communication",
                  us: { icon: "✅", text: "Dedicated account manager, always reachable" },
                  them: { icon: "❌", text: "Slow email threads, no direct access" },
                },
                {
                  factor: "Contract Flexibility",
                  us: { icon: "✅", text: "Month-to-month, no lock-ins" },
                  them: { icon: "❌", text: "Long-term contracts with penalties" },
                },
                {
                  factor: "Multi-Channel Expertise",
                  us: { icon: "✅", text: "SEO, PPC, Social, Content, Web — all in-house" },
                  them: { icon: "⚠️", text: "Outsourced to sub-agencies" },
                },
                {
                  factor: "Onboarding Speed",
                  us: { icon: "✅", text: "Live within 7 days" },
                  them: { icon: "❌", text: "4–6 week setup process" },
                },
                {
                  factor: "Pricing",
                  us: { icon: "✅", text: "Transparent, value-based pricing" },
                  them: { icon: "❌", text: "Hidden fees & markups" },
                },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-3 text-sm md:text-base ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t border-gray-100 hover:bg-blue-50/40 transition`}
                >
                  <div className="px-6 py-4 font-semibold text-gray-800">{row.factor}</div>
                  <div className="px-6 py-4 border-l border-gray-100 text-center text-gray-700">
                    <span className="mr-1.5">{row.us.icon}</span>{row.us.text}
                  </div>
                  <div className="px-6 py-4 border-l border-gray-100 text-center text-gray-500">
                    <span className="mr-1.5">{row.them.icon}</span>{row.them.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA nudge */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 mb-4">Still deciding? Let's show you what we can do for your business — for free.</p>
              <button
                className="bg-[#2F36C6] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#252db0] hover:scale-105 transition shadow-lg shadow-blue-200"
                onClick={() => navigate("/contact")}
              >
                Get a Free Strategy Audit →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="relative bg-[#2F36C6] rounded-3xl px-8 md:px-16 py-14 overflow-hidden text-center"
          >
            {/* decorative circles */}
            <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-white/5" />

            <h2 className="relative text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Ready to Scale Your Business?<br />Let's Build Your Growth Strategy.
            </h2>
            <p className="relative mt-4 text-blue-200 text-lg max-w-xl mx-auto">
              Book a free 30-minute strategy call and walk away with a custom roadmap for your brand — no strings attached.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-4 justify-center">
              <button
                className="bg-white text-[#2F36C6] px-8 py-3.5 rounded-xl font-bold hover:scale-105 transition shadow-xl"
                onClick={() => navigate("/contact")}
              >
                Book Free Strategy Call
              </button>
              <button
                className="border-2 border-white/50 text-white px-8 py-3.5 rounded-xl font-semibold hover:border-white transition"
                onClick={() => navigate("/services")}
              >
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT (existing) ───────────────────────────────────────── */}
      <ContactSection />

    </div>
  );
};

export default Home;
