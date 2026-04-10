import React from "react";
import webBg from "../../assets/webBg.jpeg";
import web1 from "../../assets/web1.png";
import web2 from "../../assets/web2.png";
import web3 from "../../assets/web3.png";
import web4 from "../../assets/web4.png";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: "3s", label: "First impression window" },
  { value: "75%", label: "Judge credibility by design" },
  { value: "88%", label: "Won't return after bad UX" },
  { value: "200%", label: "Avg. conversion lift" },
];

const services = [
  {
    icon: "🖥️",
    title: "Business Websites",
    desc: "Professional, trust-building websites designed to establish authority and generate qualified leads around the clock.",
  },
  {
    icon: "🎯",
    title: "Landing Pages",
    desc: "High-converting pages engineered for paid ads, product launches, and marketing campaigns with a single clear CTA.",
  },
  {
    icon: "⚙️",
    title: "Web Applications",
    desc: "Scalable, modern web apps built with performance-first architecture and intuitive user interfaces.",
  },
  {
    icon: "🛒",
    title: "E-Commerce Stores",
    desc: "Revenue-ready online stores with smooth checkout flows, product showcases, and mobile-optimized shopping experiences.",
  },
  {
    icon: "📰",
    title: "Blogs & Content Sites",
    desc: "SEO-optimized content platforms built for organic growth, readability, and long-term audience engagement.",
  },
  {
    icon: "🔗",
    title: "Portfolio & Brand Sites",
    desc: "Visually striking personal or brand portfolios that make a lasting impression and tell your story.",
  },
];

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Node.js", color: "#339933" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Figma", color: "#F24E1E" },
  { name: "WordPress", color: "#21759B" },
  { name: "Shopify", color: "#96BF48" },
];

const faqs = [
  {
    q: "How long does a website project take?",
    a: "Most business websites take 2–4 weeks from kickoff to launch. E-commerce and web applications may take 4–8 weeks depending on complexity.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes. We handle full redesigns, partial revamps, and performance overhauls. We start with a deep audit of your current site before proposing any changes.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely. Every site we build is mobile-first by design. We test across 20+ devices and screen sizes before delivery.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. We offer maintenance retainers that cover updates, security patches, performance monitoring, and content changes.",
  },
  {
    q: "Can you integrate third-party tools like CRM or analytics?",
    a: "Yes — we integrate HubSpot, Salesforce, Google Analytics, Meta Pixel, Intercom, and many more as part of the build.",
  },
];

const testimonials = [
  {
    name: "Priya Mehta",
    role: "Founder, NovaBridge",
    text: "Our leads tripled within 60 days of launch. The team nailed our brand and built something that actually converts.",
  },
  {
    name: "Arjun Sharma",
    role: "CMO, Stackly",
    text: "The landing page they designed cut our cost-per-click in half. Brilliant UX, fast delivery, and zero hand-holding required.",
  },
  {
    name: "Sarah Lin",
    role: "CEO, Luminary Co.",
    text: "From wireframe to launch in 3 weeks. The site looks stunning and our bounce rate dropped by 40%. Highly recommend.",
  },
];

const process = [
  {
    step: "Discovery & UX Planning",
    desc: "We study your users, goals, competitors, and conversion paths to lay a strategic foundation before a single pixel is designed.",
  },
  {
    step: "Wireframing & UI Design",
    desc: "Clean, purposeful layouts with a focus on clarity, visual hierarchy, and usability — reviewed and approved before development begins.",
  },
  {
    step: "Development & Optimization",
    desc: "Fast, responsive, SEO-ready code using modern frameworks. Performance scores of 90+ are our standard, not our stretch goal.",
  },
  {
    step: "Testing & Launch",
    desc: "Rigorous cross-browser, cross-device, and load testing. We handle deployment, DNS, and go-live support end to end.",
  },
  {
    step: "Growth & Iteration",
    desc: "Post-launch analytics, A/B testing, and ongoing improvements based on real user behavior data.",
  },
];

const WebDesign = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${webBg})` }}
    >
      <div className="absolute inset-0 bg-white/10"></div>
      <div className="relative z-10">

        {/* ── HERO ── */}
        <div className="py-28">
          <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#2F36C6]/20 text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
                Web Design & Development
              </span>
              <h1 className="text-5xl font-bold text-white leading-tight">
                Websites That <br />
                <span className="text-[#2F36C6]">
                  Convert Visitors Into Customers
                </span>
              </h1>
              <p className="mt-6 text-lg text-white max-w-xl">
                Your website isn't just a design — it's your strongest sales
                asset. We build fast, scalable, conversion-focused websites
                that grow with your business.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  className="bg-[#2F36C6] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
                  onClick={() => navigate("/contact")}
                >
                  Get a Free Website Audit
                </button>
                <button
                  className="bg-white/20 text-white border border-white/40 px-8 py-3 rounded-xl font-medium hover:bg-white/30 transition"
                  onClick={() => navigate("/portfolio")}
                >
                  View Our Work
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Why Design Matters
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span>⚡</span>
                  <span>First impressions formed in under 3 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>📱</span>
                  <span>Mobile-first user experience by default</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>🚀</span>
                  <span>Speed & Core Web Vitals optimized</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>🎯</span>
                  <span>Design guided by conversion psychology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>🔒</span>
                  <span>Secure, scalable, and future-proof architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>📈</span>
                  <span>SEO-ready from day one</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── STATS STRIP ── */}
        <div className="bg-[#2F36C6] py-14">
          <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-4xl font-bold">{s.value}</p>
                <p className="mt-2 text-sm opacity-80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── PORTFOLIO SHOWCASE ── */}
        <div className="py-24 bg-[#F5F7FF]">
          <div className="max-w-7xl mx-auto px-10">
            <p className="text-center text-[#2F36C6] font-medium text-sm uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h2 className="text-4xl font-bold text-center text-gray-900">
              What We <span className="text-[#2F36C6]">Design & Build</span>
            </h2>
            <p className="mt-4 text-center text-gray-500 max-w-xl mx-auto">
              A snapshot of recent projects — from lean landing pages to full
              enterprise platforms.
            </p>
            <div className="mt-16 grid md:grid-cols-4 gap-4">
              {[web1, web2, web3, web4].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition group"
                >
                  <img
                    src={item}
                    alt={`Project ${i + 1}`}
                    className="w-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button
                className="border border-[#2F36C6] text-[#2F36C6] px-8 py-3 rounded-xl font-medium hover:bg-[#2F36C6] hover:text-white transition"
                onClick={() => navigate("/portfolio")}
              >
                View Full Portfolio →
              </button>
            </div>
          </div>
        </div>

        {/* ── SERVICES GRID ── */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-10">
            <p className="text-center text-[#2F36C6] font-medium text-sm uppercase tracking-widest mb-3">
              Services
            </p>
            <h2 className="text-4xl font-bold text-center text-white">
              Everything You Need{" "}
              <span className="text-[#2F36C6]">Under One Roof</span>
            </h2>
            <p className="mt-4 text-center text-white/70 max-w-xl mx-auto">
              Whether you're starting from scratch or scaling what you have,
              we've got the right solution.
            </p>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition"
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PROCESS ── */}
        <div className="py-24 bg-[#F5F7FF]">
          <div className="max-w-7xl mx-auto px-10">
            <p className="text-center text-[#2F36C6] font-medium text-sm uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2 className="text-4xl font-bold text-center text-gray-900">
              Our Web Design{" "}
              <span className="text-[#2F36C6]">Process</span>
            </h2>
            <p className="mt-4 text-center text-gray-500 max-w-xl mx-auto">
              A proven 5-step framework that delivers great results — every
              time, on every budget.
            </p>
            <div className="mt-16 max-w-4xl mx-auto space-y-8">
              {process.map((item, i) => (
                <div key={i} className="flex gap-6 items-center">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#2F36C6] text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.step}
                    </h4>
                    <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TECH STACK ── */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-10 text-center">
            <p className="text-[#2F36C6] font-medium text-sm uppercase tracking-widest mb-3">
              Technology
            </p>
            <h2 className="text-4xl font-bold text-white">
              Built With the <span className="text-[#2F36C6]">Best Tools</span>
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              We choose the right technology for each project — not the most
              fashionable one.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {techStack.map((t, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition"
                >
                  {t.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <div className="py-24 bg-[#F5F7FF]">
          <div className="max-w-7xl mx-auto px-10">
            <p className="text-center text-[#2F36C6] font-medium text-sm uppercase tracking-widest mb-3">
              Testimonials
            </p>
            <h2 className="text-4xl font-bold text-center text-gray-900">
              What Our <span className="text-[#2F36C6]">Clients Say</span>
            </h2>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm border"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, si) => (
                      <span key={si} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2F36C6] text-white flex items-center justify-center font-bold text-sm">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {t.name}
                      </p>
                      <p className="text-gray-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="py-24">
          <div className="max-w-4xl mx-auto px-10">
            <p className="text-center text-[#2F36C6] font-medium text-sm uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-4xl font-bold text-center text-white">
              Frequently Asked{" "}
              <span className="text-[#2F36C6]">Questions</span>
            </h2>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-white/10 border border-white/20 rounded-2xl group"
                >
                  <summary className="cursor-pointer px-6 py-5 font-semibold text-white flex justify-between items-center list-none">
                    {faq.q}
                    <span className="text-[#2F36C6] text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-5 text-white/70 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="bg-[#2F36C6] py-24 text-center text-white">
          <p className="text-sm uppercase tracking-widest opacity-70 mb-3">
            Let's Build Something Great
          </p>
          <h2 className="text-4xl font-bold">
            Ready to Upgrade Your Website?
          </h2>
          <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
            Let's design a site that actually works for your business —
            beautiful, fast, and built to convert.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="bg-white text-[#2F36C6] px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              onClick={() => navigate("/contact")}
            >
              Start My Project
            </button>
            <button
              className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
              onClick={() => navigate("/contact")}
            >
              Book a Discovery Call
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebDesign;
