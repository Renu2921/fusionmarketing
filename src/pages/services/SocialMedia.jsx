import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ─── Animated Counter Hook ───────────────────────────────────────────────────
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Intersection Observer Hook ──────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── Stat Card ───────────────────────────────────────────────────────────────
function StatCard({ value, suffix, label, inView }) {
  const count = useCounter(value, 1800, inView);
  return (
    <div className="text-center">
      <p className="text-5xl font-black text-[#2F36C6]">
        {count}{suffix}
      </p>
      <p className="mt-2 text-gray-500 text-sm font-medium uppercase tracking-widest">{label}</p>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
const SocialMedia = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [statsRef, statsInView] = useInView();

  const services = [
    {
      icon: "📱",
      title: "Content Strategy",
      desc: "Data-backed content calendars tailored to your brand voice, audience behavior, and platform algorithms.",
      tags: ["Editorial Calendar", "Brand Voice", "Audience Research"],
    },
    {
      icon: "🎨",
      title: "Creative Production",
      desc: "Scroll-stopping visuals, Reels, carousels, and stories crafted by designers who understand social-first design.",
      tags: ["Reels & Video", "Carousels", "Story Templates"],
    },
    {
      icon: "📣",
      title: "Paid Social Ads",
      desc: "Performance campaigns on Meta, LinkedIn, and Pinterest that turn scroll into clicks and clicks into customers.",
      tags: ["Meta Ads", "LinkedIn Ads", "Retargeting"],
    },
    {
      icon: "💬",
      title: "Community Management",
      desc: "Real-time engagement — comments, DMs, UGC — that turns followers into loyal brand advocates.",
      tags: ["DM Management", "Comment Replies", "UGC Curation"],
    },
    {
      icon: "📊",
      title: "Analytics & Reporting",
      desc: "Monthly reports with actionable insights on reach, engagement, follower growth, and ROI attribution.",
      tags: ["Monthly Reports", "ROI Tracking", "A/B Testing"],
    },
    {
      icon: "🤝",
      title: "Influencer Partnerships",
      desc: "We identify, vet, and manage nano-to-macro influencer collaborations that align with your brand and budget.",
      tags: ["Nano Influencers", "Brand Deals", "Campaign Briefs"],
    },
  ];

  const platforms = [
    {
      name: "Instagram",
      color: "#E1306C",
      bg: "#FFF0F5",
      icon: "📸",
      desc: "Visual storytelling, Reels, Stories, and shopping — the premium canvas for lifestyle and product brands.",
      best: "B2C, Fashion, Food, Lifestyle",
    },
    {
      name: "LinkedIn",
      color: "#0A66C2",
      bg: "#EFF6FF",
      icon: "💼",
      desc: "Thought leadership, B2B lead generation, and professional community building at scale.",
      best: "B2B, SaaS, Consulting, Recruitment",
    },
    {
      name: "Facebook",
      color: "#1877F2",
      bg: "#EFF6FF",
      icon: "📘",
      desc: "Unrivaled ad targeting with groups, events, and the largest global user base.",
      best: "Local Business, E-commerce, Community",
    },
    {
      name: "X (Twitter)",
      color: "#000000",
      bg: "#F5F5F5",
      icon: "𝕏",
      desc: "Real-time conversations, brand personality, and trending topics that keep you culturally relevant.",
      best: "Tech, Media, Entertainment, PR",
    },
    {
      name: "Pinterest",
      color: "#E60023",
      bg: "#FFF0F1",
      icon: "📌",
      desc: "High-intent discovery with long shelf-life pins that drive consistent referral traffic.",
      best: "DIY, Home Decor, Weddings, Recipes",
    },
    {
      name: "YouTube",
      color: "#FF0000",
      bg: "#FFF5F5",
      icon: "▶️",
      desc: "Long-form authority content and Shorts that build deep trust and dominate search.",
      best: "Education, Product Reviews, Tutorials",
    },
  ];

  const caseStudies = [
    {
      brand: "FreshLeaf Organics",
      category: "D2C Food Brand",
      result: "340% follower growth in 6 months",
      metric1: { label: "Followers", before: "2.1K", after: "9.2K" },
      metric2: { label: "Avg. Reach", before: "800", after: "14,000" },
      color: "#16a34a",
      bg: "#f0fdf4",
    },
    {
      brand: "TechFlow SaaS",
      category: "B2B Software",
      result: "220 qualified leads/month via LinkedIn",
      metric1: { label: "LinkedIn Impressions", before: "5K/mo", after: "82K/mo" },
      metric2: { label: "Demo Requests", before: "8/mo", after: "220/mo" },
      color: "#0A66C2",
      bg: "#EFF6FF",
    },
    {
      brand: "Aurelie Boutique",
      category: "Fashion Retail",
      result: "₹18L revenue attributed to Instagram Ads",
      metric1: { label: "ROAS", before: "1.2x", after: "5.8x" },
      metric2: { label: "Story Views", before: "300", after: "9,400" },
      color: "#E1306C",
      bg: "#FFF0F5",
    },
  ];

  const processSteps = [
    {
      icon: "🔍",
      title: "Discovery & Audit",
      desc: "We audit your current social presence, competitors, and audience to find growth gaps and quick wins.",
      duration: "Week 1",
    },
    {
      icon: "🗺️",
      title: "Strategy Blueprint",
      desc: "A custom 90-day content and growth strategy aligned to your business goals.",
      duration: "Week 1–2",
    },
    {
      icon: "🎬",
      title: "Content Production",
      desc: "Our creative team shoots, designs, and writes content that your audience actually wants to see.",
      duration: "Week 2–3",
    },
    {
      icon: "🚀",
      title: "Launch & Distribute",
      desc: "We publish, schedule, and amplify content across all your active platforms.",
      duration: "Week 3 onwards",
    },
    {
      icon: "📈",
      title: "Optimize & Scale",
      desc: "Weekly performance reviews and monthly strategy refreshes to compound your results.",
      duration: "Ongoing",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "₹14,999",
      period: "/month",
      desc: "For brands just starting their social journey.",
      features: [
        "2 Platforms managed",
        "12 posts/month",
        "Basic graphics & captions",
        "Monthly analytics report",
        "Email support",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Growth",
      price: "₹34,999",
      period: "/month",
      desc: "For brands ready to accelerate with strategy.",
      features: [
        "4 Platforms managed",
        "24 posts + 8 Stories/month",
        "Premium creatives & Reels",
        "Paid ad management (₹20K budget)",
        "Bi-weekly strategy calls",
        "Community management",
        "Detailed weekly reports",
      ],
      cta: "Most Popular",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For brands that need full-scale social operations.",
      features: [
        "All platforms managed",
        "Unlimited posts & content",
        "Video production & editing",
        "Influencer campaign management",
        "Dedicated account manager",
        "Custom reporting dashboard",
        "Priority support (24/7)",
      ],
      cta: "Let's Talk",
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: "How long before we see results?",
      a: "Organic growth is a compounding process. Most clients see measurable traction in 60–90 days, with significant growth momentum by month 4–6.",
    },
    {
      q: "Do you create the content or do we?",
      a: "We handle everything — strategy, writing, design, Reels, and publishing. You simply review and approve before anything goes live.",
    },
    {
      q: "Which platforms should my business be on?",
      a: "It depends on your audience and goals. After a discovery call, we recommend the right 2–3 platforms rather than spreading thin across all of them.",
    },
    {
      q: "Do you run paid ads as well?",
      a: "Yes. Our Growth and Enterprise plans include paid ad management. We handle strategy, creative, targeting, and optimization.",
    },
    {
      q: "How do you measure ROI on social media?",
      a: "We track platform analytics (reach, engagement, follower growth), website traffic from social, lead form fills, and ad ROAS. Every report ties activity to business outcomes.",
    },
    {
      q: "Can we cancel anytime?",
      a: "Our plans are month-to-month after an initial 3-month commitment. We're confident in our results, so we don't lock you in.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Mehta",
      role: "Founder, FreshLeaf Organics",
      text: "Our Instagram went from a ghost town to our #1 acquisition channel. The team understood our brand better than we did.",
      avatar: "PM",
      color: "#16a34a",
    },
    {
      name: "Arjun Kapoor",
      role: "Head of Marketing, TechFlow",
      text: "LinkedIn is now generating 40% of our pipeline. The strategy they built is something our internal team never could have pulled off alone.",
      avatar: "AK",
      color: "#0A66C2",
    },
    {
      name: "Sneha Rajan",
      role: "Owner, Aurelie Boutique",
      text: "We scaled from 0 to ₹18L/month in social-attributed revenue in under 8 months. Genuinely transformative.",
      avatar: "SR",
      color: "#E1306C",
    },
  ];

  return (
    <section className="w-full bg-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Syne', sans-serif; }
        .gradient-text { background: linear-gradient(135deg, #2F36C6, #7C3AED); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(47,54,198,0.12); }
        .tab-pill { transition: all 0.25s ease; }
        .fade-in { animation: fadeUp 0.6s ease both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .pulse-dot { animation: pulseDot 2s infinite; }
        @keyframes pulseDot { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: 0.6; } }
        .marquee-track { display: flex; gap: 2rem; animation: marquee 20s linear infinite; width: max-content; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#F0F1FF] via-white to-[#EEF2FF] py-32">
        {/* BG decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#2F36C6] opacity-5 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-400 opacity-5 translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="fade-in">
            <div className="inline-flex items-center gap-2 bg-white border border-[#2F36C6]/20 text-[#2F36C6] px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <span className="pulse-dot w-2 h-2 bg-[#2F36C6] rounded-full inline-block" />
              Social Media Marketing Agency
            </div>

            <h1 className="font-display text-6xl font-extrabold text-gray-900 leading-[1.1]">
              Social Media That<br />
              <span className="gradient-text">Builds Brands</span><br />
              & Drives Demand
            </h1>

            <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">
              We combine content strategy, creative production, and performance analytics
              to turn your social channels into your most powerful growth engine.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#2F36C6] text-white px-8 py-4 rounded-xl font-semibold text-base hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-[#2F36C6]/30"
              >
                Build My Social Presence →
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-base hover:border-[#2F36C6] hover:text-[#2F36C6] transition-all"
              >
                See Our Work
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex items-center gap-6 flex-wrap">
              {["Meta Business Partner", "Google Partner", "HubSpot Certified"].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="text-[#2F36C6]">✓</span> {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Platform Cards */}
          <div className="relative h-[460px] hidden lg:block">
            {[
              { name: "Instagram", color: "#E1306C", icon: "📸", x: "right-0", y: "top-0", followers: "9.2K", growth: "+340%" },
              { name: "LinkedIn", color: "#0A66C2", icon: "💼", x: "left-0", y: "top-16", followers: "82K reach", growth: "+220%" },
              { name: "Facebook", color: "#1877F2", icon: "📘", x: "right-12", y: "bottom-0", followers: "14K reach", growth: "+180%" },
            ].map((card, i) => (
              <div
                key={i}
                className={`absolute ${card.x} ${card.y} bg-white rounded-2xl shadow-xl p-5 w-52 card-hover`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{card.icon}</span>
                  <span className="font-semibold text-gray-800 text-sm">{card.name}</span>
                </div>
                <p className="text-2xl font-black text-gray-900">{card.followers}</p>
                <p className="text-xs text-green-600 font-semibold mt-1">↑ {card.growth} growth</p>
                <div className="mt-3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "75%", background: card.color }} />
                </div>
              </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 bg-gradient-to-br from-[#2F36C6] to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-[#2F36C6]/40">
                <span className="text-white text-4xl">📡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MARQUEE LOGOS ─────────────────────────────────────────────────── */}
      <div className="border-y border-gray-100 py-5 overflow-hidden bg-white">
        <div className="marquee-track">
          {[...["Instagram", "LinkedIn", "Facebook", "Pinterest", "X (Twitter)", "YouTube", "TikTok", "Snapchat",
            "Instagram", "LinkedIn", "Facebook", "Pinterest", "X (Twitter)", "YouTube", "TikTok", "Snapchat"]].map((p, i) => (
            <span key={i} className="text-gray-400 font-semibold text-sm whitespace-nowrap px-6 border-r border-gray-100 last:border-none">
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <div ref={statsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 divide-x divide-gray-100">
            <StatCard value={150} suffix="+" label="Brands Managed" inView={statsInView} />
            <StatCard value={8} suffix="M+" label="Organic Reach Generated" inView={statsInView} />
            <StatCard value={94} suffix="%" label="Client Retention Rate" inView={statsInView} />
            <StatCard value={5} suffix="x" label="Avg. ROAS on Paid Campaigns" inView={statsInView} />
          </div>
        </div>
      </div>

      {/* ── WHY SOCIAL MATTERS ────────────────────────────────────────────── */}
      <div className="bg-[#F5F7FF] py-24">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <p className="text-[#2F36C6] font-semibold uppercase tracking-widest text-sm">The Opportunity</p>
          <h2 className="font-display text-4xl font-bold text-gray-900 mt-3">
            Why Social Media <span className="gradient-text">Can't Wait</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Your customers live on social. If you're not there — intentionally — your competitors already are.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { icon: "👁️", title: "Brand Visibility", stat: "5.2B", statLabel: "social media users worldwide", desc: "Stay top-of-mind where your audience spends 2+ hours daily." },
              { icon: "🛡️", title: "Trust & Authority", stat: "81%", statLabel: "of consumers research on social before buying", desc: "Consistent presence builds credibility that converts browsers into buyers." },
              { icon: "⚡", title: "Demand Generation", stat: "73%", statLabel: "of marketers say social outperforms other channels", desc: "Create desire before your audience even knows they're ready to buy." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl text-left card-hover">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-display text-xl font-bold text-gray-900">{item.title}</h3>
                <div className="my-4">
                  <span className="text-4xl font-black text-[#2F36C6]">{item.stat}</span>
                  <p className="text-xs text-gray-400 mt-1">{item.statLabel}</p>
                </div>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <p className="text-[#2F36C6] font-semibold uppercase tracking-widest text-sm">What We Do</p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3">
              Full-Stack Social Media <span className="gradient-text">Services</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              From strategy to content to ads — everything you need under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group bg-[#F5F7FF] hover:bg-[#2F36C6] p-8 rounded-2xl transition-all duration-300 card-hover cursor-pointer">
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-white transition-colors">{s.title}</h3>
                <p className="mt-3 text-gray-500 group-hover:text-blue-100 transition-colors leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-white group-hover:bg-white/20 text-[#2F36C6] group-hover:text-white px-3 py-1 rounded-full font-medium transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PLATFORMS ─────────────────────────────────────────────────────── */}
      <div className="bg-[#F5F7FF] py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <p className="text-[#2F36C6] font-semibold uppercase tracking-widest text-sm">Where We Operate</p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3">
              Platforms We <span className="gradient-text">Master</span>
            </h2>
          </div>

          {/* Tab selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {platforms.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`tab-pill px-5 py-2.5 rounded-full text-sm font-semibold border ${activeTab === i ? "bg-[#2F36C6] text-white border-[#2F36C6] shadow-lg shadow-[#2F36C6]/30" : "bg-white text-gray-600 border-gray-200 hover:border-[#2F36C6]"}`}
              >
                {p.icon} {p.name}
              </button>
            ))}
          </div>

          {/* Active platform card */}
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-lg text-center">
            <div className="text-6xl mb-4">{platforms[activeTab].icon}</div>
            <h3 className="font-display text-3xl font-bold" style={{ color: platforms[activeTab].color }}>
              {platforms[activeTab].name}
            </h3>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
              {platforms[activeTab].desc}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-600 px-5 py-2 rounded-full text-sm">
              <span className="font-semibold">Best for:</span> {platforms[activeTab].best}
            </div>
            <div className="mt-8">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#2F36C6] text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Grow on {platforms[activeTab].name} →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <p className="text-[#2F36C6] font-semibold uppercase tracking-widest text-sm">How We Work</p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3">
              Our Proven <span className="gradient-text">Process</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
              From onboarding to ongoing growth — a structured system that compounds results.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#2F36C6]/20 to-transparent" />

            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="relative text-center group">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-[#F5F7FF] group-hover:bg-[#2F36C6] flex items-center justify-center text-3xl transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-[#2F36C6]/30">
                    {step.icon}
                  </div>
                  <div className="mt-2 text-xs font-semibold text-[#2F36C6] uppercase tracking-widest">{step.duration}</div>
                  <h4 className="font-display font-bold text-gray-900 mt-2 text-base">{step.title}</h4>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CASE STUDIES ──────────────────────────────────────────────────── */}
      <div className="bg-[#F5F7FF] py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <p className="text-[#2F36C6] font-semibold uppercase tracking-widest text-sm">Proof of Work</p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3">
              Real Results for <span className="gradient-text">Real Brands</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden card-hover">
                <div className="p-6" style={{ background: c.bg }}>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: c.color }}>{c.category}</p>
                  <h3 className="font-display text-xl font-bold text-gray-900 mt-1">{c.brand}</h3>
                  <p className="mt-2 font-semibold text-lg" style={{ color: c.color }}>{c.result}</p>
                </div>
                <div className="p-6 grid grid-cols-2 gap-4">
                  {[c.metric1, c.metric2].map((m, j) => (
                    <div key={j} className="bg-[#F5F7FF] rounded-xl p-4">
                      <p className="text-xs text-gray-400 font-medium mb-2">{m.label}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm text-gray-400 line-through">{m.before}</span>
                        <span className="text-base font-black text-gray-900">{m.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <p className="text-[#2F36C6] font-semibold uppercase tracking-widest text-sm">Client Love</p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#F5F7FF] p-8 rounded-2xl card-hover">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-lg">★</span>)}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: t.color }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRICING ───────────────────────────────────────────────────────── */}
      <div className="bg-[#F5F7FF] py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <p className="text-[#2F36C6] font-semibold uppercase tracking-widest text-sm">Transparent Pricing</p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3">
              Plans for Every <span className="gradient-text">Stage of Growth</span>
            </h2>
            <p className="mt-4 text-gray-500">No hidden fees. No lock-in after 3 months.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 flex flex-col card-hover ${plan.highlight ? "bg-[#2F36C6] text-white shadow-2xl shadow-[#2F36C6]/30 scale-105" : "bg-white"}`}
              >
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded-full tracking-widest">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`font-display text-xl font-bold ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                <p className={`mt-1 text-sm ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>{plan.desc}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className={`font-display text-4xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>{plan.period}</span>
                </div>

                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className={`mt-0.5 ${plan.highlight ? "text-green-300" : "text-[#2F36C6]"}`}>✓</span>
                      <span className={`text-sm ${plan.highlight ? "text-blue-100" : "text-gray-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate("/contact")}
                  className={`mt-8 w-full py-3 rounded-xl font-semibold transition-all ${plan.highlight ? "bg-white text-[#2F36C6] hover:bg-gray-50" : "bg-[#2F36C6] text-white hover:opacity-90"}`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-10">
          <div className="text-center mb-16">
            <p className="text-[#2F36C6] font-semibold uppercase tracking-widest text-sm">FAQ</p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mt-3">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === i ? "border-[#2F36C6] bg-[#F5F7FF]" : "border-gray-200 bg-white hover:border-[#2F36C6]/40"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <span className={`text-[#2F36C6] text-xl font-light transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <div className="relative bg-[#2F36C6] py-28 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-10">
          <h2 className="font-display text-5xl font-extrabold leading-tight">
            Ready to Make Social<br />Your #1 Growth Channel?
          </h2>
          <p className="mt-6 text-xl text-blue-200">
            Let's build a social presence your audience actually cares about — starting this week.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-[#2F36C6] px-10 py-4 rounded-xl font-bold text-base hover:opacity-90 active:scale-95 transition-all shadow-xl"
            >
              Start My Social Strategy →
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border border-white/30 text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all"
            >
              Book a Free Audit
            </button>
          </div>
          <p className="mt-8 text-sm text-blue-300">No commitment required · Response within 24 hours</p>
        </div>
      </div>

    </section>
  );
};

export default SocialMedia;
