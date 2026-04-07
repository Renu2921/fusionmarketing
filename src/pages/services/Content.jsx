import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="w-full bg-white font-sans">

      {/* HERO SECTION */}
      <div className="bg-[#F5F7FF] py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2F36C6] opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-[#2F36C6]/10 text-[#2F36C6] text-sm font-semibold px-4 py-2 rounded-full mb-5">
              Content Marketing Services
            </span>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Content Marketing That <br />
              <span className="text-[#2F36C6]">Educates, Engages & Converts</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We create content that builds trust, drives organic traffic, and turns readers into customers — across every stage of the buyer journey.
            </p>
            <div className="flex gap-4 mt-8">
              <button
                className="bg-[#2F36C6] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
                onClick={() => navigate("/contact")}
              >
                Get a Content Strategy
              </button>
              <button
                className="border-2 border-[#2F36C6] text-[#2F36C6] px-8 py-3 rounded-xl font-medium hover:bg-[#2F36C6]/5 transition"
                onClick={() => navigate("/case-studies")}
              >
                See Case Studies
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Problems We Solve With Content</h3>
            <ul className="space-y-3 text-gray-600">
              <li>❌ Blogs that don't rank or convert</li>
              <li>❌ Inconsistent brand voice</li>
              <li>❌ Low engagement on social channels</li>
              <li>❌ No content roadmap</li>
              <li>❌ Traffic without trust</li>
              <li>❌ High bounce rates on key pages</li>
              <li>❌ Content that doesn't support sales</li>
            </ul>
          </div>
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="bg-[#2F36C6] py-14">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { number: "3x", label: "More leads vs outbound" },
            { number: "62%", label: "Lower cost per lead" },
            { number: "6x", label: "Higher conversion rates" },
            { number: "97%", label: "Client retention rate" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold">{stat.number}</div>
              <div className="mt-2 text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CONTENT MARKETING */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Content Marketing <span className="text-[#2F36C6]">Matters</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              The brands that dominate tomorrow are building their content engines today.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "🏆",
                title: "Build Authority",
                desc: "Position your brand as a trusted expert in your industry. Consistent, high-value content signals credibility to both audiences and search engines.",
              },
              {
                icon: "📈",
                title: "Organic Growth",
                desc: "Drive long-term traffic without paying per click. A strong content foundation compounds over time — building an asset that keeps working for you 24/7.",
              },
              {
                icon: "💰",
                title: "Higher Conversions",
                desc: "Educated audiences convert faster and better. Content nurtures prospects through every stage of the funnel, shortening sales cycles significantly.",
              },
              {
                icon: "🔗",
                title: "Stronger SEO",
                desc: "Quality content earns backlinks naturally. The more valuable your content, the more other sites link to you — boosting domain authority over time.",
              },
              {
                icon: "🤝",
                title: "Customer Retention",
                desc: "Content isn't just for acquisition. Educational resources, newsletters, and community content keep existing customers engaged and loyal.",
              },
              {
                icon: "🌐",
                title: "Brand Awareness",
                desc: "Shareable content puts your brand in front of new audiences at no extra cost. Every piece is a potential touchpoint with a future customer.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#F5F7FF] p-8 rounded-2xl hover:shadow-md transition">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#2F36C6]">{item.title}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT TYPES */}
      <div className="bg-[#F5F7FF] py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Content We <span className="text-[#2F36C6]">Create</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              From top-of-funnel awareness to bottom-of-funnel conversions, we craft every content format your brand needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "✍️",
                category: "Written Content",
                items: ["SEO Blog Articles", "Long-Form Guides", "Whitepapers & eBooks", "Press Releases", "Product Descriptions"],
              },
              {
                icon: "🌐",
                category: "Web & Landing Pages",
                items: ["Homepage Copy", "Service/Product Pages", "Landing Pages", "About & Story Pages", "FAQ Pages"],
              },
              {
                icon: "📱",
                category: "Social & Email",
                items: ["Social Media Content", "LinkedIn Thought Leadership", "Email Newsletters", "Drip Campaigns", "Ad Copy"],
              },
              {
                icon: "📊",
                category: "Authority Content",
                items: ["Case Studies", "Industry Reports", "Research Summaries", "Comparison Content", "Testimonial Pages"],
              },
              {
                icon: "🎙️",
                category: "Multimedia Scripts",
                items: ["Podcast Scripts", "Video Scripts", "Webinar Content", "YouTube Descriptions", "Explainer Copy"],
              },
              {
                icon: "🧭",
                category: "Strategy & Audits",
                items: ["Content Audits", "Keyword Strategy", "Content Calendars", "Brand Voice Guides", "Competitor Analysis"],
              },
            ].map((cat, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">{cat.category}</h4>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F36C6] inline-block" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR CONTENT PROCESS */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Content <span className="text-[#2F36C6]">Playbook</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              A proven, repeatable process that turns business goals into content that performs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "Discovery & Audience Research",
                desc: "We start by deeply understanding your business, competitors, and target audience. We map pain points, buying psychology, and content gaps to build a rock-solid foundation.",
                tag: "Week 1",
              },
              {
                step: "Content Strategy & Planning",
                desc: "SEO-led topic clusters, funnel-stage mapping, and an editorial calendar tailored to your goals. Every piece has a purpose — no random acts of content.",
                tag: "Week 2",
              },
              {
                step: "Content Creation",
                desc: "Our senior writers produce blogs, landing pages, social content, and long-form assets — all optimized for your brand voice and target keywords.",
                tag: "Ongoing",
              },
              {
                step: "SEO & Conversion Optimization",
                desc: "Every piece is structured for search visibility and reader action. We optimize for featured snippets, internal linking, CTAs, and readability scores.",
                tag: "Ongoing",
              },
              {
                step: "Publishing & Distribution",
                desc: "We manage publishing, social distribution, email campaigns, and content syndication — maximizing reach across every relevant channel.",
                tag: "Ongoing",
              },
              {
                step: "Performance Tracking & Iteration",
                desc: "Monthly reporting on traffic, rankings, engagement, and conversions. We continuously optimize based on what the data tells us.",
                tag: "Monthly",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start bg-[#F5F7FF] rounded-2xl p-6">
                <div className="w-10 h-10 min-w-[2.5rem] rounded-full bg-[#2F36C6] text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-lg font-semibold text-gray-900">{item.step}</h4>
                    <span className="text-xs bg-[#2F36C6]/10 text-[#2F36C6] px-3 py-1 rounded-full font-medium">{item.tag}</span>
                  </div>
                  <p className="text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHO WE SERVE */}
      <div className="bg-[#F5F7FF] py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Who We <span className="text-[#2F36C6]">Serve</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We work with growth-focused businesses across industries who understand the long-term power of content.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🚀", label: "SaaS & Tech Startups" },
              { icon: "🏥", label: "Healthcare & Wellness" },
              { icon: "🏦", label: "Finance & Fintech" },
              { icon: "🏠", label: "Real Estate" },
              { icon: "🛒", label: "eCommerce Brands" },
              { icon: "⚖️", label: "Legal & Professional Services" },
              { icon: "🎓", label: "EdTech & Education" },
              { icon: "🏭", label: "B2B & Manufacturing" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-gray-800 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESULTS / CASE STUDIES STRIP */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Real Results From <span className="text-[#2F36C6]">Real Clients</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Numbers don't lie. Here's what consistent, strategic content does.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "SaaS Platform",
                industry: "Technology",
                result: "+312% organic traffic in 6 months",
                detail: "Built a topical authority content cluster that ranked for 180+ keywords and reduced paid ad dependency by 40%.",
                metric: "312%",
                metricLabel: "Traffic Increase",
              },
              {
                company: "Health Clinic Network",
                industry: "Healthcare",
                result: "4x increase in inbound leads",
                detail: "Educational blog content and optimized service pages turned site visitors into booked appointments across 3 clinic locations.",
                metric: "4x",
                metricLabel: "Lead Growth",
              },
              {
                company: "B2B Consultancy",
                industry: "Professional Services",
                result: "60% shorter sales cycles",
                detail: "Case studies, thought leadership, and email nurture sequences educated prospects before calls — closing deals faster.",
                metric: "60%",
                metricLabel: "Shorter Sales Cycle",
              },
            ].map((cs, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-8 hover:border-[#2F36C6] hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-bold text-gray-900">{cs.company}</p>
                    <p className="text-sm text-gray-500">{cs.industry}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#2F36C6]">{cs.metric}</div>
                    <div className="text-xs text-gray-500">{cs.metricLabel}</div>
                  </div>
                </div>
                <p className="text-[#2F36C6] font-semibold text-sm mb-3">{cs.result}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{cs.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="bg-[#F5F7FF] py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What Our <span className="text-[#2F36C6]">Clients Say</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Within 4 months, our blog went from generating zero leads to being our #1 source of inbound inquiries. The team truly understands both SEO and human psychology.",
                name: "Aarav Mehta",
                title: "CEO, TechFlow SaaS",
                avatar: "AM",
              },
              {
                quote: "They didn't just write content — they built us a brand voice and a content system. We now publish consistently and our audience actually looks forward to our emails.",
                name: "Priya Sharma",
                title: "Marketing Head, HealthBridge",
                avatar: "PS",
              },
              {
                quote: "The ROI on content has been phenomenal. We rank for 200+ keywords, and our cost per acquisition dropped by 55%. Best investment we've made in marketing.",
                name: "Rohan Kapoor",
                title: "Founder, FinEdge",
                avatar: "RK",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-[#2F36C6] text-4xl font-serif leading-none mb-4">"</div>
                <p className="text-gray-700 leading-relaxed italic">{t.quote}</p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="w-11 h-11 rounded-full bg-[#2F36C6] text-white flex items-center justify-center font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT VS PAID ADS COMPARISON */}
      <div className="py-24">
        <div className="max-w-5xl mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Content Marketing vs. <span className="text-[#2F36C6]">Paid Ads</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">Why smart brands invest in content alongside or instead of ads.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2F36C6] text-white">
                  <th className="py-4 px-6 text-left font-semibold">Factor</th>
                  <th className="py-4 px-6 text-center font-semibold">Content Marketing</th>
                  <th className="py-4 px-6 text-center font-semibold">Paid Ads</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Long-term ROI", "✅ Compounds over time", "❌ Stops when budget stops"],
                  ["Cost per lead", "✅ Decreases over time", "❌ Increases with competition"],
                  ["Trust & credibility", "✅ Very high", "⚠️ Moderate"],
                  ["Brand authority", "✅ Builds significantly", "❌ Minimal impact"],
                  ["Speed to results", "⚠️ 3–6 months", "✅ Immediate"],
                  ["Scalability", "✅ Low incremental cost", "❌ Budget-dependent"],
                  ["Customer education", "✅ Excellent", "❌ Limited"],
                  ["SEO benefit", "✅ Directly improves rankings", "❌ No SEO value"],
                ].map(([factor, content, paid], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F7FF]"}>
                    <td className="py-4 px-6 font-medium text-gray-800">{factor}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{content}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* PRICING TIERS */}
      <div className="bg-[#F5F7FF] py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Flexible <span className="text-[#2F36C6]">Packages</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Whether you're starting out or scaling up, we have a plan built for your stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                plan: "Starter",
                price: "₹29,999",
                period: "/month",
                desc: "For startups and small businesses establishing their content presence.",
                features: ["4 SEO blog articles/month", "Basic keyword research", "Content calendar", "1 social media pack (8 posts)", "Monthly performance report"],
                highlight: false,
              },
              {
                plan: "Growth",
                price: "₹59,999",
                period: "/month",
                desc: "For businesses ready to build authority and accelerate organic traffic.",
                features: ["8 SEO blog articles/month", "Advanced keyword & competitor research", "Full content strategy", "2 social media packs", "Email newsletter (2/month)", "Case study (1/quarter)", "Bi-weekly reporting"],
                highlight: true,
              },
              {
                plan: "Authority",
                price: "₹1,19,999",
                period: "/month",
                desc: "For companies building dominant content engines at scale.",
                features: ["16 SEO articles/month", "Full topical authority strategy", "Landing page copywriting", "Social + email + PR content", "Monthly long-form asset", "Dedicated content strategist", "Weekly reporting & strategy calls"],
                highlight: false,
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 ${pkg.highlight ? "bg-[#2F36C6] text-white shadow-2xl scale-105" : "bg-white shadow-sm"}`}
              >
                <p className={`text-sm font-semibold uppercase tracking-wider ${pkg.highlight ? "text-white/70" : "text-[#2F36C6]"}`}>{pkg.plan}</p>
                <div className="mt-3 flex items-end gap-1">
                  <span className={`text-4xl font-bold ${pkg.highlight ? "text-white" : "text-gray-900"}`}>{pkg.price}</span>
                  <span className={`mb-1 text-sm ${pkg.highlight ? "text-white/70" : "text-gray-500"}`}>{pkg.period}</span>
                </div>
                <p className={`mt-3 text-sm leading-relaxed ${pkg.highlight ? "text-white/80" : "text-gray-600"}`}>{pkg.desc}</p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-2 text-sm ${pkg.highlight ? "text-white/90" : "text-gray-600"}`}>
                      <span className={`mt-0.5 font-bold ${pkg.highlight ? "text-white" : "text-[#2F36C6]"}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 rounded-xl font-semibold transition ${pkg.highlight ? "bg-white text-[#2F36C6] hover:opacity-90" : "bg-[#2F36C6] text-white hover:opacity-90"}`}
                  onClick={() => navigate("/contact")}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">All plans include onboarding, brand voice guidelines, and a dedicated account manager. Custom enterprise plans available.</p>
        </div>
      </div>

      {/* TOOLS WE USE */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Tools & <span className="text-[#2F36C6]">Technology</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We use industry-leading tools to research, create, optimize, and measure every piece of content.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Ahrefs", category: "SEO Research" },
              { name: "SEMrush", category: "Keyword Analysis" },
              { name: "Surfer SEO", category: "Content Optimization" },
              { name: "Clearscope", category: "Content Grading" },
              { name: "Google Analytics", category: "Performance Tracking" },
              { name: "Search Console", category: "Search Insights" },
              { name: "HubSpot", category: "Content Management" },
              { name: "Notion", category: "Editorial Planning" },
            ].map((tool, i) => (
              <div key={i} className="bg-[#F5F7FF] rounded-xl p-5 text-center hover:shadow-md transition">
                <div className="font-bold text-gray-900">{tool.name}</div>
                <div className="text-xs text-[#2F36C6] mt-1">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-[#F5F7FF] py-24">
        <div className="max-w-4xl mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Frequently Asked <span className="text-[#2F36C6]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does it take to see results from content marketing?",
                a: "Content marketing is a long-term strategy. Most clients start seeing measurable improvements in organic traffic and leads within 3–6 months. Some industries and competitive niches may take 6–12 months for significant ranking gains. However, the results compound — unlike paid ads, content keeps working indefinitely.",
              },
              {
                q: "Do you write content in our brand voice?",
                a: "Absolutely. Our onboarding process includes a thorough brand voice discovery session where we document your tone, language preferences, audience personas, and messaging pillars. Every piece of content we create is reviewed against this guide before delivery.",
              },
              {
                q: "Will you handle publishing and distribution too?",
                a: "Yes, depending on your package, we handle everything from CMS publishing to social distribution and email campaigns. We can work within your existing systems (WordPress, HubSpot, Webflow, etc.) or recommend the right setup for your needs.",
              },
              {
                q: "What industries do you specialize in?",
                a: "We have deep expertise in SaaS, healthcare, finance, legal, real estate, eCommerce, and B2B services. Our team includes writers with domain-specific knowledge so your content is always accurate, credible, and authoritative.",
              },
              {
                q: "Can I see content before it's published?",
                a: "Yes, always. Every piece goes through our internal quality review before being sent to you for approval. We use a collaborative review process and will revise content until you're completely satisfied before anything goes live.",
              },
              {
                q: "Do you offer one-time content projects or only monthly retainers?",
                a: "We offer both. For clients who need a content audit, a one-time strategy document, website copy, or a batch of articles, we offer project-based engagements. Monthly retainers are recommended for ongoing growth, but we're flexible.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-gray-900"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <span className="text-[#2F36C6] text-xl ml-4">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#2F36C6] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-white rounded-full -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-white rounded-full translate-y-1/2" />
        </div>
        <div className="relative max-w-3xl mx-auto px-10">
          <h2 className="text-4xl font-bold">Ready to Turn Content Into Revenue?</h2>
          <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
            Let's build a content engine that attracts, educates, and converts your ideal customers — month after month.
          </p>
          <div className="flex gap-4 justify-center mt-10 flex-wrap">
            <button
              className="bg-white text-[#2F36C6] px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              onClick={() => navigate("/contact")}
            >
              Start Content Marketing
            </button>
            <button
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
              onClick={() => navigate("/contact")}
            >
              Book a Free Strategy Call
            </button>
          </div>
          <p className="mt-6 text-white/60 text-sm">No commitment. Just a conversation about your content goals.</p>
        </div>
      </div>

    </section>
  );
};

export default Content;
