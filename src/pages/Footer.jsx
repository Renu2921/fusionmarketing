import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/fusionMarketing.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const services = [
  { label: "SEO Optimization",       path: "/services/seo" },
  { label: "PPC Advertising",        path: "/services/ppc" },
  { label: "Web Design",             path: "/services/web" },
  { label: "Social Media Marketing", path: "/services/social-media-marketing" },
  { label: "Content Marketing",      path: "/services/content-marketing" },
  { label: "Brand Strategy",         path: "/services/brand" },
];

const quickLinks = [
  // { label: "Home",     path: "/" },
  { label: "About Us", path: "/aboutUs" },
  { label: "Contact",  path: "/contact" },
  // { label: "Blog",     path: "/blog" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-gray-300 relative overflow-hidden">

      {/* ── decorative top glow ───────────────────────────────────────── */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-[#2F36C6] opacity-10 blur-[80px] rounded-full" />

      {/* ── top accent line ───────────────────────────────────────────── */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#2F36C6] to-transparent opacity-60" />

      {/* ── MAIN GRID ────────────────────────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
      >

        {/* ── Brand column ─────────────────────────────────────────── */}
        <motion.div variants={fadeUp} className="lg:col-span-1 space-y-5">
          <img src={logo} alt="Fusion Marketing" className="w-24 h-24 object-contain" />
          <p className="text-gray-400 text-sm leading-relaxed">
            End-to-end digital marketing solutions that turn traffic into revenue. No fluff — just measurable growth.
          </p>

          {/* social icons */}
          <div className="flex gap-3 pt-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#2F36C6] border border-white/10 hover:border-[#2F36C6] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Services column ──────────────────────────────────────── */}
        <motion.div variants={fadeUp}>
          <h3 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
            <span className="w-1 h-4 rounded-full bg-[#2F36C6] inline-block" />
            Services
          </h3>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.path}>
                <Link
                  to={s.path}
                  className="text-gray-400 text-sm hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#2F36C6] opacity-0 group-hover:opacity-100 transition" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Quick Links column ───────────────────────────────────── */}
        <motion.div variants={fadeUp}>
          <h3 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
            <span className="w-1 h-4 rounded-full bg-[#2F36C6] inline-block" />
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="text-gray-400 text-sm hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#2F36C6] opacity-0 group-hover:opacity-100 transition" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Contact / CTA column ─────────────────────────────────── */}
        <motion.div variants={fadeUp} className="space-y-5">
          <h3 className="text-white font-semibold text-base flex items-center gap-2">
            <span className="w-1 h-4 rounded-full bg-[#2F36C6] inline-block" />
            Get In Touch
          </h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-[#2F36C6]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <a href="mailto:hello@fusionmarketing.in" className="hover:text-white transition">
                hello@fusionmarketing.in
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-[#2F36C6]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <a href="tel:+919876543210" className="hover:text-white transition">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-[#2F36C6]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span>Mumbai, India</span>
            </li>
          </ul>

          {/* mini CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2F36C6] hover:bg-[#252db0] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition hover:scale-105 shadow-lg shadow-blue-950/40 mt-2"
          >
            Book a Free Call
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

      </motion.div>

      {/* ── DIVIDER ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="border-t border-white/10" />
      </div>

      {/* ── BOTTOM BAR ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[#2F36C6]">Fusion Marketing</span>.
          All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
          <Link to="/sitemap" className="hover:text-white transition">Sitemap</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
