import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 1,
    title: 'Search Engine Optimization',
    short: 'SEO',
    path: '/services/seo',
    description: 'Dominate search rankings with data-driven SEO strategies that drive organic growth and sustainable traffic.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon">
        <circle cx="21" cy="21" r="13" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M32 32L42 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M16 21h10M21 16v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#6C63FF',
    bg: '#F0EFFF',
    stat: '3x',
    statLabel: 'avg. traffic growth',
  },
  {
    id: 2,
    title: 'Pay-Per-Click Advertising',
    short: 'PPC',
    path: '/services/ppc',
    description: 'Maximize ROI with precision-targeted ad campaigns across Google, Bing, and beyond.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="3"/>
        <path d="M16 30l6-8 6 5 6-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="34" cy="18" r="3" fill="currentColor"/>
      </svg>
    ),
    color: '#FF6B6B',
    bg: '#FFF0F0',
    stat: '4.2x',
    statLabel: 'avg. ROAS',
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    short: 'Social',
    path: '/services/social-media-marketing',
    description: 'Build a loyal community and amplify your brand voice across all major social platforms.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon">
        <circle cx="12" cy="24" r="5" stroke="currentColor" strokeWidth="3"/>
        <circle cx="36" cy="12" r="5" stroke="currentColor" strokeWidth="3"/>
        <circle cx="36" cy="36" r="5" stroke="currentColor" strokeWidth="3"/>
        <path d="M17 21l14-7M17 27l14 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#FF9F43',
    bg: '#FFF6ED',
    stat: '180%',
    statLabel: 'engagement boost',
  },
  {
    id: 4,
    title: 'Content Marketing',
    short: 'Content',
    path: '/services/content-marketing',
    description: 'Tell your story compellingly with strategic content that educates, engages, and converts audiences.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon">
        <rect x="8" y="6" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="3"/>
        <path d="M15 16h18M15 22h18M15 28h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="34" cy="36" r="6" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
        <path d="M32 36l1.5 1.5L36 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#1DD1A1',
    bg: '#EDFFF9',
    stat: '70%',
    statLabel: 'more leads',
  },
  {
    id: 5,
    title: 'Web Design & Development',
    short: 'Web',
    path: '/services/web',
    description: 'Craft stunning, high-performance websites that convert visitors into customers and reflect your brand.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="3"/>
        <path d="M4 16h40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="11" cy="12" r="2" fill="currentColor"/>
        <circle cx="18" cy="12" r="2" fill="currentColor"/>
        <path d="M20 28l-6-4 6-4M28 20l6 4-6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#54A0FF',
    bg: '#EDF4FF',
    stat: '2.5x',
    statLabel: 'conversion rate',
  },
  {
    id: 6,
    title: 'Brand Strategy & Identity',
    short: 'Brand',
    path: '/services/brand',
    description: 'Build a memorable brand identity that resonates, differentiates, and leaves a lasting impression.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon">
        <path d="M24 6l4.5 9 10 1.5-7.2 7 1.7 10L24 29l-9 4.5 1.7-10L9.5 16.5l10-1.5z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M24 16v8M20 24h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#A29BFE',
    bg: '#F3F0FF',
    stat: '95%',
    statLabel: 'client retention',
  },
]

const useInView = (threshold = 0.15) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={service.path}
      ref={ref}
      className={`service-card ${inView ? 'card-visible' : 'card-hidden'}`}
      style={{
        transitionDelay: `${index * 80}ms`,
        '--card-color': service.color,
        '--card-bg': service.bg,
        textDecoration: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-inner" style={{ transform: hovered ? 'translateY(-6px)' : 'translateY(0)' }}>
        <div className="icon-wrap" style={{ background: service.bg, color: service.color }}>
          {service.icon}
        </div>
        <div className="card-badge" style={{ background: service.bg, color: service.color }}>
          {service.short}
        </div>
        <h3 className="card-title">{service.title}</h3>
        <p className="card-desc">{service.description}</p>
        <div className="card-stat">
          <span className="stat-num" style={{ color: service.color }}>{service.stat}</span>
          <span className="stat-label">{service.statLabel}</span>
        </div>
        <div className="card-cta" style={{ color: service.color }}>
          Learn more
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 4, transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  )
}

const Services = () => {
  const [heroRef, heroInView] = useInView(0.1)

  return (
    <div className="services-page">
      <style>{`
        .services-page {
          min-height: 100vh;
          background: #f8f7ff;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        /* Hero */
        .services-hero {
          text-align: center;
          padding: 96px 24px 64px;
          max-width: 700px;
          margin: 0 auto;
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .services-hero.hero-hidden { opacity: 0; transform: translateY(30px); }
        .services-hero.hero-visible { opacity: 1; transform: translateY(0); }

        .hero-eyebrow {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6C63FF;
          background: #F0EFFF;
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 20px;
        }
        .hero-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #1a1a2e;
          line-height: 1.15;
          margin: 0 0 18px;
          letter-spacing: -0.02em;
        }
        .hero-title span {
          background: linear-gradient(135deg, #6C63FF 0%, #a29bfe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.7;
          margin: 0;
        }

        /* Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px 100px;
        }

        /* Card */
        .service-card {
          display: block;
          border-radius: 20px;
          background: #fff;
          border: 1.5px solid #ebebf5;
          overflow: hidden;
          transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .service-card:hover {
          border-color: var(--card-color);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .card-hidden { opacity: 0; transform: translateY(40px); }
        .card-visible { opacity: 1; transform: translateY(0); }

        .card-inner {
          padding: 28px;
          transition: transform 0.3s ease;
        }

        .icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .service-icon { width: 30px; height: 30px; }

        .card-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 12px;
        }

        .card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 10px;
          line-height: 1.3;
        }

        .card-desc {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.65;
          margin: 0 0 20px;
        }

        .card-stat {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f0f0f5;
        }
        .stat-num {
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-size: 0.82rem;
          color: #999;
        }

        .card-cta {
          display: flex;
          align-items: center;
          font-size: 0.88rem;
          font-weight: 600;
        }

        /* Bottom CTA strip */
        .services-cta {
          background: #1a1a2e;
          text-align: center;
          padding: 80px 24px;
        }
        .cta-title {
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 12px;
        }
        .cta-sub {
          font-size: 1rem;
          color: #aaa;
          margin: 0 0 32px;
        }
        .cta-btn {
          display: inline-block;
          background: #6C63FF;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          padding: 14px 36px;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .cta-btn:hover { background: #5a52e0; transform: scale(1.03); }

        /* Floating shapes decoration */
        .deco-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.25;
          pointer-events: none;
          z-index: 0;
        }
        .hero-wrapper {
          position: relative;
          overflow: hidden;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .float-anim { animation: float 6s ease-in-out infinite; }
        .float-anim-2 { animation: float 8s ease-in-out infinite reverse; }
      `}</style>

      {/* Hero */}
      <div className="hero-wrapper">
        <div className="deco-blob float-anim" style={{ width: 300, height: 300, background: '#6C63FF', top: -80, left: -80 }} />
        <div className="deco-blob float-anim-2" style={{ width: 200, height: 200, background: '#FF6B6B', top: 40, right: -40 }} />
        <div
          ref={heroRef}
          className={`services-hero ${heroInView ? 'hero-visible' : 'hero-hidden'}`}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <span className="hero-eyebrow">What We Do</span>
          <h1 className="hero-title">
            Services that <span>drive real results</span>
          </h1>
          <p className="hero-sub">
            From search visibility to stunning design — we offer end-to-end digital marketing solutions tailored to accelerate your growth.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="services-grid">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>

      {/* CTA */}
      <div className="services-cta">
        <h2 className="cta-title">Ready to grow your business?</h2>
        <p className="cta-sub">Let's build a custom strategy that works for you.</p>
        <a href="/contact" className="cta-btn">Get a free consultation</a>
      </div>
    </div>
  )
}

export default Services
