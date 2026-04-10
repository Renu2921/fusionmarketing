import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import seo from "../../assets/seo.jpeg";
// import bg from "../../assets/bg.png";

/* ─── Inline SVG Icons ─── */
const Icon = ({ d, size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

/* ─── Animated Counter ─── */
const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const animate = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(animate);
          else setCount(end);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── FAQ Item ─── */
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid #e5e7eb",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "17px",
          fontWeight: 600,
          color: "#111827",
          fontFamily: "inherit",
        }}
      >
        {q}
        <span style={{
          fontSize: "22px",
          color: "#2F36C6",
          transform: open ? "rotate(45deg)" : "rotate(0)",
          transition: "transform 0.3s ease",
          flexShrink: 0,
          marginLeft: "12px",
        }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? "300px" : "0",
        overflow: "hidden",
        transition: "max-height 0.4s ease",
      }}>
        <p style={{ color: "#6b7280", lineHeight: 1.7, paddingBottom: "20px", fontSize: "15px" }}>{a}</p>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const Seo = () => {
  const navigate = useNavigate();

  /* ---------- styles ---------- */
  const s = {
    page: {
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      color: "#111827",
      overflowX: "hidden",
    },
    /* Hero */
    hero: {
      position: "relative",
      background: "linear-gradient(135deg, #0a0e2e 0%, #1a1f6e 50%, #0d1340 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    },
    heroOrb1: {
      position: "absolute", top: "-100px", right: "-100px",
      width: "600px", height: "600px", borderRadius: "50%",
      background: "radial-gradient(circle, rgba(79,70,229,0.4) 0%, transparent 70%)",
      pointerEvents: "none",
    },
    heroOrb2: {
      position: "absolute", bottom: "-150px", left: "-150px",
      width: "500px", height: "500px", borderRadius: "50%",
      background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
      pointerEvents: "none",
    },
    heroGrid: {
      position: "absolute", inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    },
    heroContent: {
      position: "relative", zIndex: 10,
      maxWidth: "1200px", margin: "0 auto",
      padding: "120px 40px 80px",
    },
    badge: {
      display: "inline-flex", alignItems: "center", gap: "8px",
      background: "rgba(79,70,229,0.2)", border: "1px solid rgba(99,102,241,0.4)",
      color: "#a5b4fc", borderRadius: "100px", padding: "8px 18px",
      fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em",
      textTransform: "uppercase", marginBottom: "28px",
    },
    heroTitle: {
      fontSize: "clamp(44px, 6vw, 80px)",
      fontWeight: 800, lineHeight: 1.1,
      color: "#fff", marginBottom: "24px",
    },
    heroAccent: { color: "#818cf8" },
    heroSub: {
      fontSize: "18px", color: "rgba(255,255,255,0.7)",
      maxWidth: "580px", lineHeight: 1.8, marginBottom: "40px",
    },
    btnPrimary: {
      background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
      color: "#fff", padding: "16px 36px", borderRadius: "12px",
      fontWeight: 700, fontSize: "16px", border: "none",
      cursor: "pointer", transition: "all 0.2s",
      boxShadow: "0 8px 32px rgba(79,70,229,0.4)",
      fontFamily: "inherit",
    },
    btnSecondary: {
      background: "rgba(255,255,255,0.1)",
      color: "#fff", padding: "16px 32px", borderRadius: "12px",
      fontWeight: 600, fontSize: "16px",
      border: "1px solid rgba(255,255,255,0.2)",
      cursor: "pointer", transition: "all 0.2s",
      fontFamily: "inherit",
    },
    /* Stats bar */
    statsBar: {
      background: "#fff",
      borderBottom: "1px solid #e5e7eb",
      padding: "40px",
    },
    statsGrid: {
      maxWidth: "1100px", margin: "0 auto",
      display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px", textAlign: "center",
    },
    statNum: { fontSize: "42px", fontWeight: 800, color: "#2F36C6", lineHeight: 1 },
    statLabel: { fontSize: "14px", color: "#6b7280", marginTop: "6px", fontWeight: 500 },
    /* Section common */
    section: { padding: "100px 40px" },
    sectionInner: { maxWidth: "1200px", margin: "0 auto" },
    sectionTag: {
      display: "inline-block",
      background: "#eef2ff", color: "#4338ca",
      padding: "6px 16px", borderRadius: "100px",
      fontSize: "13px", fontWeight: 700,
      letterSpacing: "0.06em", textTransform: "uppercase",
      marginBottom: "16px",
    },
    sectionTitle: {
      fontSize: "clamp(32px, 4vw, 50px)",
      fontWeight: 800, lineHeight: 1.15, color: "#111827",
    },
    sectionSub: {
      fontSize: "17px", color: "#6b7280",
      lineHeight: 1.8, maxWidth: "580px", marginTop: "16px",
    },
    /* Services cards */
    servicesGrid: {
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px", marginTop: "60px",
    },
    serviceCard: {
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: "20px", padding: "36px",
      transition: "all 0.3s ease",
      cursor: "default",
    },
    serviceIcon: {
      width: "56px", height: "56px", borderRadius: "16px",
      background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
      display: "flex", alignItems: "center", justifyContent: "center",
      marginBottom: "20px",
    },
    /* Process */
    processBg: {
      background: "linear-gradient(180deg, #f8f9ff 0%, #fff 100%)",
    },
    processStep: {
      display: "flex", gap: "28px", alignItems: "flex-start",
      background: "#fff", border: "1px solid #e5e7eb",
      borderRadius: "20px", padding: "32px",
      transition: "all 0.3s",
    },
    stepNum: {
      width: "48px", height: "48px", minWidth: "48px",
      borderRadius: "14px", background: "linear-gradient(135deg, #2F36C6, #7c3aed)",
      color: "#fff", fontWeight: 800, fontSize: "18px",
      display: "flex", alignItems: "center", justifyContent: "center",
    },
    /* Results ticker */
    resultsBg: {
      background: "linear-gradient(135deg, #0a0e2e 0%, #1a1f6e 100%)",
      padding: "100px 40px",
    },
    resultCard: {
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "20px", padding: "40px",
      textAlign: "center", flex: "1",
    },
    /* Tools grid */
    toolChip: {
      background: "#f3f4f6", borderRadius: "100px",
      padding: "10px 20px", fontSize: "14px", fontWeight: 600,
      color: "#374151", border: "1px solid #e5e7eb",
      display: "inline-block", margin: "6px",
    },
    /* Testimonials */
    testimonialsGrid: {
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "24px", marginTop: "60px",
    },
    testimonialCard: {
      background: "#fff", border: "1px solid #e5e7eb",
      borderRadius: "20px", padding: "32px",
    },
    stars: { color: "#f59e0b", fontSize: "18px", letterSpacing: "2px", marginBottom: "16px" },
    /* Pricing */
    pricingGrid: {
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "24px", marginTop: "60px",
    },
    pricingCard: {
      background: "#fff", border: "2px solid #e5e7eb",
      borderRadius: "24px", padding: "40px",
      transition: "all 0.3s",
    },
    pricingCardFeatured: {
      background: "linear-gradient(135deg, #2F36C6, #7c3aed)",
      border: "2px solid transparent",
      borderRadius: "24px", padding: "40px",
      color: "#fff",
    },
    /* CTA */
    ctaBg: {
      background: "linear-gradient(135deg, #2F36C6 0%, #7c3aed 100%)",
      padding: "100px 40px",
      textAlign: "center",
    },
  };

  const services = [
    {
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      title: "Technical SEO Audit",
      desc: "Deep-dive crawl analysis fixing Core Web Vitals, indexation issues, broken links, schema markup, and site architecture problems holding your rankings back.",
      tags: ["Crawl Fixes", "Core Web Vitals", "Schema"],
    },
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: "Content Strategy & SEO Writing",
      desc: "Topical authority clusters, keyword-mapped landing pages, and long-form content that ranks — written for real humans, not search bots.",
      tags: ["Topical Authority", "Blog Content", "Landing Pages"],
    },
    {
      icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
      title: "Link Building & Authority",
      desc: "White-hat backlink acquisition through digital PR, HARO outreach, and editorial partnerships — building domain authority that lasts.",
      tags: ["Digital PR", "HARO", "Outreach"],
    },
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Local SEO",
      desc: "Dominate Google Maps and local pack rankings. GMB optimization, local citation building, and review strategy for city-specific growth.",
      tags: ["Google Maps", "GMB Optimization", "Citations"],
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "SEO Analytics & Reporting",
      desc: "Custom dashboards tracking rankings, traffic, conversions, and ROI — not vanity metrics. Monthly strategy calls included.",
      tags: ["Custom Dashboards", "Conversion Tracking", "ROI Reports"],
    },
    {
      icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
      title: "eCommerce SEO",
      desc: "Product page optimization, category architecture, duplicate content fixes, and structured data for Shopify, WooCommerce, and custom stores.",
      tags: ["Product Pages", "Structured Data", "Shopify"],
    },
  ];

  const process = [
    { step: "Discovery & Audit", desc: "We start with a comprehensive technical and content audit — analyzing your competitors, keyword gaps, backlink profile, and site health to build a baseline." },
    { step: "Search Intent Mapping", desc: "We map every keyword to buyer intent stages — awareness, consideration, and decision — ensuring every piece of content has a purpose." },
    { step: "Technical Foundation", desc: "We fix crawl issues, improve page speed, optimize mobile experience, implement schema markup, and solve indexing gaps before anything else." },
    { step: "Content That Converts", desc: "Our SEO writers produce topically authoritative content that answers search queries better than anyone else on page one." },
    { step: "Authority Building", desc: "We earn high-DA backlinks through digital PR, editorial outreach, and HARO — never PBNs, never link farms." },
    { step: "Track, Iterate & Scale", desc: "Monthly reporting with real KPIs: organic traffic, conversion rate, revenue from SEO — plus strategy calls to adjust based on what's working." },
  ];

  const testimonials = [
    {
      name: "Priya Sharma", role: "Founder, TechLaunch India",
      quote: "We went from page 5 to #1 for our core keyword in 4 months. The team understands both technical SEO and content strategy deeply.",
      stars: 5,
    },
    {
      name: "Rahul Mehta", role: "CMO, GrowthStack SaaS",
      quote: "Organic leads are now 60% of our pipeline. The ROI on SEO far surpassed what we were spending on Google Ads.",
      stars: 5,
    },
    {
      name: "Ananya Gupta", role: "Director, Luxe Interiors",
      quote: "Our local SEO results transformed our business. Google Maps rankings brought us 3x more walk-ins within 6 weeks.",
      stars: 5,
    },
  ];

  const faqs = [
    { q: "How long does SEO take to show results?", a: "SEO is a long-term investment. Most clients see meaningful ranking improvements within 3–6 months, with significant traffic and revenue gains between 6–12 months. Timelines depend on your starting point, competition, and how aggressively we execute." },
    { q: "What makes your SEO approach different?", a: "We don't sell link packages or content volume. We build topical authority, fix technical foundations first, and align every piece of SEO work to your business goals — not just keyword rankings." },
    { q: "Do you work with businesses outside India?", a: "Yes. We serve clients across India, the US, UK, Australia, and Southeast Asia. SEO strategy is largely geography-agnostic, though local SEO campaigns are highly location-specific." },
    { q: "How do you measure SEO success?", a: "Beyond rankings, we track organic traffic growth, conversion rate from organic, revenue attributed to SEO, and share of voice against competitors. We build custom dashboards so you see real numbers." },
    { q: "Can I keep my current content team?", a: "Absolutely. We can work alongside your existing team, providing strategy, briefs, and review — or handle end-to-end content production ourselves." },
    { q: "What industries do you specialize in?", a: "We have deep experience in SaaS, eCommerce, real estate, healthcare, fintech, legal services, and professional B2B services. We adapt our playbook to every vertical." },
  ];

  const tools = [
    "Ahrefs", "Semrush", "Screaming Frog", "Google Search Console",
    "Surfer SEO", "Clearscope", "PageSpeed Insights", "GA4",
    "DataStudio", "Hotjar", "BrightLocal", "Moz Pro",
    "Answer The Public", "AlsoAsked", "HARO", "Hunter.io",
  ];

  return (
    <div style={s.page}>

      {/* ══ HERO ══ */}
      <section style={s.hero}>
        <div style={s.heroOrb1} />
        <div style={s.heroOrb2} />
        <div style={s.heroGrid} />
        <div style={s.heroContent}>
          <div style={s.badge}>
            <span>🚀</span> Trusted by 200+ growing businesses
          </div>
          <h1 style={s.heroTitle}>
            SEO That Brings<br />
            <span style={s.heroAccent}>Customers,</span><br />
            Not Just Traffic
          </h1>
          <p style={s.heroSub}>
            We engineer organic growth through technical mastery, content strategy, and
            authority building — so the right people find you at the exact moment
            they're ready to buy.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button style={s.btnPrimary} onClick={() => navigate("/contact")}
              onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.target.style.transform = "translateY(0)"}>
              Talk to an SEO Expert →
            </button>
            {/* <button style={s.btnSecondary} onClick={() => navigate("/case-studies")}
              onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.1)"}>
              View Case Studies
            </button> */}
          </div>

          {/* mini trust row */}
          <div style={{ marginTop: "60px", display: "flex", gap: "40px", flexWrap: "wrap" }}>
            {[["200+", "Clients Ranked"], ["4.9★", "Average Rating"], ["3.2x", "Avg. Traffic Growth"], ["$0", "Wasted Ad Spend"]].map(([val, lbl]) => (
              <div key={lbl}>
                <div style={{ fontSize: "24px", fontWeight: 800, color: "#fff" }}>{val}</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══ */}
      <section style={s.statsBar}>
        <div style={s.statsGrid}>
          {[
            { end: 94, suffix: "%", label: "Clients see ranking improvement in 90 days" },
            { end: 320, suffix: "%", label: "Average organic traffic growth (12 months)" },
            { end: 48, suffix: "hr", label: "Time to your first SEO audit report" },
            { end: 200, suffix: "+", label: "Businesses scaled with organic search" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={s.statNum}>
                <Counter end={stat.end} suffix={stat.suffix} />
              </div>
              <div style={s.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ HOW SEO HELPS ══ */}
      <section style={{ ...s.section, background: "#f9fafb" }}>
        <div style={s.sectionInner} >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={s.sectionTag}>Why SEO</span>
            <h2 style={s.sectionTitle}>
              How SEO Helps Your{" "}
              <span style={{ color: "#2F36C6" }}>Business Grow</span>
            </h2>
            <p style={{ ...s.sectionSub, margin: "16px auto 0", textAlign: "center", maxWidth: "600px" }}>
              SEO isn't just a marketing channel — it's compounding equity that grows in value the longer you invest in it.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { emoji: "🎯", title: "High-Intent Traffic", desc: "We bring visitors who are actively searching for your products or services — people who are ready to convert, not just browse." },
              { emoji: "💰", title: "Lower Cost per Lead", desc: "Unlike paid ads, SEO generates consistent leads over time without paying for every click, improving long-term profitability." },
              { emoji: "🏆", title: "Brand Authority", desc: "Ranking on page one builds trust. 75% of users never scroll past the first page — be where decisions are made." },
              { emoji: "📈", title: "Compounding Returns", desc: "Every piece of content and every backlink earned keeps working for you. SEO results compound over time unlike ads." },
              // { emoji: "🔍", title: "Competitive Intelligence", desc: "We decode what your top competitors are doing in search and systematically outflank their strategy." },
              // { emoji: "⚡", title: "Faster Conversions", desc: "Users who find you via organic search already have purchase intent. Your sales cycle shortens significantly." },
            ].map((item) => (
              <div
  key={item.title}
  style={{
    background: "#fff",
    borderRadius: "20px",
    padding: "32px",
    border: "1px solid #e5e7eb",
    transition: "all 0.3s",
  }}
  onMouseEnter={(e) => {
    const card = e.currentTarget;

    card.style.background = "#2F36C6";
    card.style.color = "#fff";
    card.style.boxShadow = "0 12px 40px rgba(47,54,198,0.2)";
    card.style.transform = "translateY(-4px)";

    // change inner text colors
    card.querySelector("h3").style.color = "#fff";
    card.querySelector("p").style.color = "#fff";
  }}
  onMouseLeave={(e) => {
    const card = e.currentTarget;

    card.style.background = "#fff";
    card.style.color = "#000";
    card.style.boxShadow = "none";
    card.style.transform = "translateY(0)";

    // reset text colors
    card.querySelector("h3").style.color = "#2F36C6";
    card.querySelector("p").style.color = "#6b7280";
  }}
>
  <div style={{ fontSize: "36px", marginBottom: "16px" }}>
    {item.emoji}
  </div>

  <h3
    style={{
      fontWeight: 700,
      fontSize: "18px",
      color: "#2F36C6",
      marginBottom: "10px",
    }}
  >
    {item.title}
  </h3>

  <p
    style={{
      color: "#6b7280",
      lineHeight: 1.7,
      fontSize: "15px",
    }}
  >
    {item.desc}
  </p>
</div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section style={s.section}>
        <div style={s.sectionInner}>
          <span style={s.sectionTag}>What We Do</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
            <h2 style={{ ...s.sectionTitle, maxWidth: "480px" }}>
              Full-Spectrum<br />
              <span style={{ color: "#2F36C6" }}>SEO Services</span>
            </h2>
            <p style={{ ...s.sectionSub, marginTop: 0 }}>
              From technical foundations to content and links — every lever, pulled strategically.
            </p>
          </div>
          <div style={s.servicesGrid}>
            {services.map((svc) => (
              <div
  key={svc.title}
  style={s.serviceCard}
  onMouseEnter={(e) => {
    const card = e.currentTarget;

    // card styles
    card.style.background = "#2F36C6";
    card.style.color = "#fff";
    card.style.boxShadow = "0 16px 48px rgba(47,54,198,0.2)";
    card.style.transform = "translateY(-6px)";
    card.style.borderColor = "#2F36C6";

    // text
    card.querySelector("h3").style.color = "#fff";
    card.querySelector("p").style.color = "#fff";

    // tags
    card.querySelectorAll(".tag").forEach((el) => {
      el.style.background = "#fff";
      el.style.color = "#2F36C6";
    });
  }}
  onMouseLeave={(e) => {
    const card = e.currentTarget;

    // reset card
    card.style.background = "#fff";
    card.style.color = "#000";
    card.style.boxShadow = "none";
    card.style.transform = "translateY(0)";
    card.style.borderColor = "#e5e7eb";

    // reset text
    card.querySelector("h3").style.color = "#000";
    card.querySelector("p").style.color = "#6b7280";

    // reset tags
    card.querySelectorAll(".tag").forEach((el) => {
      el.style.background = "#eef2ff";
      el.style.color = "#4338ca";
    });
  }}
>
  <div style={s.serviceIcon}>
    <Icon d={svc.icon} color="#fff" size={24} />
  </div>

  <h3 style={{ fontWeight: 700, fontSize: "19px", marginBottom: "12px" }}>
    {svc.title}
  </h3>

  <p
    style={{
      color: "#6b7280",
      lineHeight: 1.7,
      fontSize: "14px",
      marginBottom: "20px",
    }}
  >
    {svc.desc}
  </p>

  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
    {svc.tags.map((t) => (
      <span
        key={t}
        className="tag"
        style={{
          background: "#eef2ff",
          color: "#4338ca",
          borderRadius: "100px",
          padding: "4px 12px",
          fontSize: "12px",
          fontWeight: 600,
        }}
      >
        {t}
      </span>
    ))}
  </div>
</div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RESULTS ══ */}
      <section style={s.resultsBg}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ ...s.sectionTag, background: "rgba(79,70,229,0.25)", color: "#a5b4fc" }}>Real Results</span>
            <h2 style={{ ...s.sectionTitle, color: "#fff" }}>
              What Our Clients <span style={{ color: "#818cf8" }}>Actually Achieve</span>
            </h2>
          </div>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {[
              { metric: "3.2×", label: "Average traffic growth in 12 months", detail: "Measured across 50+ clients in competitive niches" },
              { metric: "#1", label: "Rankings achieved for core keywords", detail: "For target buyer-intent terms, not vanity phrases" },
              { metric: "60%", label: "Of pipeline from organic SEO (avg. SaaS client)", detail: "After 9 months of full-funnel SEO strategy" },
              { metric: "41%", label: "Reduction in cost per acquisition", detail: "By replacing paid traffic with organic intent signals" },
            ].map(r => (
              <div key={r.metric} style={s.resultCard}>
                <div style={{ fontSize: "52px", fontWeight: 800, color: "#818cf8", lineHeight: 1 }}>{r.metric}</div>
                <div style={{ fontSize: "16px", fontWeight: 600, color: "#fff", margin: "12px 0 8px" }}>{r.label}</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{r.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TOOLS ══ */}
      <section style={{ ...s.section, background: "#f9fafb" }}>
        <div style={{ ...s.sectionInner, textAlign: "center" }}>
          <span style={s.sectionTag}>Our Arsenal</span>
          <h2 style={s.sectionTitle}>
            Industry-Leading <span style={{ color: "#2F36C6" }}>SEO Tools</span>
          </h2>
          <p style={{ ...s.sectionSub, margin: "16px auto 48px", textAlign: "center" }}>
            We invest in best-in-class tooling so every decision is backed by data, not guesswork.
          </p>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {tools.map(t => (
              <span key={t} style={s.toolChip}>{t}</span>
            ))}
          </div>
        </div>
      </section>
  

      {/* ══ TESTIMONIALS ══ */}
      <section style={{ ...s.section, background: "#f9fafb" }}>
        <div style={s.sectionInner}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={s.sectionTag}>Client Stories</span>
            <h2 style={s.sectionTitle}>
              Results Clients <span style={{ color: "#2F36C6" }}>Rave About</span>
            </h2>
          </div>
          <div style={s.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.name} style={t.featured ? { ...s.testimonialCard, border: "2px solid #c7d2fe" } : s.testimonialCard}>
                <div style={s.stars}>{"★".repeat(t.stars)}</div>
                <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "15px", marginBottom: "24px", fontStyle: "italic" }}>"{t.quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "16px" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "15px" }}>{t.name}</div>
                    <div style={{ fontSize: "13px", color: "#9ca3af" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      

      {/* ══ FAQ ══ */}
      <section style={{ ...s.section, background: "#f9fafb" }}>
        <div style={{ ...s.sectionInner, maxWidth: "760px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={s.sectionTag}>FAQ</span>
            <h2 style={s.sectionTitle}>
              Common <span style={{ color: "#2F36C6" }}>Questions</span>
            </h2>
          </div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={s.ctaBg}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ fontSize: "52px", marginBottom: "20px" }}>🚀</div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: "20px" }}>
            Ready to Own Page One?
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", marginBottom: "40px", lineHeight: 1.8 }}>
            Let's build a tailored SEO strategy aligned to your business goals.
            Book a free 30-minute consultation — no sales pitch, just a real plan.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              style={{ background: "#fff", color: "#2F36C6", padding: "18px 40px", borderRadius: "14px", fontWeight: 800, fontSize: "17px", border: "none", cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
              onClick={() => navigate("/contact")}
              onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.target.style.transform = "translateY(0)"}
            >
              Get Your Free SEO Roadmap
            </button>
            {/* <button
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "18px 32px", borderRadius: "14px", fontWeight: 600, fontSize: "17px", border: "2px solid rgba(255,255,255,0.3)", cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit" }}
              onClick={() => navigate("/case-studies")}
              onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.25)"}
              onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.15)"}
            >
              See Our Work
            </button> */}
          </div>
          <p style={{ marginTop: "24px", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
            No commitment required · Response within 24 hours · 100% confidential
          </p>
        </div>
      </section>

    </div>
  );
};

export default Seo;
