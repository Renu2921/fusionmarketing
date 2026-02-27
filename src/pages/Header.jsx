import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo1.png";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobile = () => setIsMobileOpen((prev) => !prev);
  const closeMobile = () => setIsMobileOpen(false);

  return (
    <header className="sticky top-0 z-20 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            navigate("/");
            closeMobile();
          }}
        >
          <img
            src={logoImage}
            alt="Fusion Marketing logo"
            className="h-12 w-12 sm:h-16 sm:w-16"
          />
          <Link to="/" className="text-lg sm:text-xl font-bold text-fusion">
            Fusion Marketing
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
          <Link to="/" className="hover:text-[#2F36C6]">
            Home
          </Link>
          <div className="relative group">
            <span className="cursor-pointer hover:text-[#2F36C6]">Services</span>

            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg w-56">
              <Link
                to="/services/seo"
                className="text-sm block px-4 py-2 hover:bg-gray-100"
              >
                SEO Optimization
              </Link>
              <Link
                to="/services/ppc"
                className="text-sm block px-4 py-2 hover:bg-gray-100"
              >
                PPC Advertising
              </Link>
              <Link
                to="/services/web"
                className="text-sm block px-4 py-2 hover:bg-gray-100"
              >
                Web Design
              </Link>
              <Link
                to="/services/social-media-marketing"
                className="text-sm block px-4 py-2 hover:bg-gray-100"
              >
                Social Media Marketing
              </Link>
              <Link
                to="/services/content-marketing"
                className="text-sm block px-4 py-2 hover:bg-gray-100"
              >
                Content Marketing
              </Link>
              <Link
                to="/services/brand"
                className="text-sm block px-4 py-2 hover:bg-gray-100"
              >
                Brand Strategy
              </Link>
            </div>
          </div>
          <Link to="/contact" className="hover:text-[#2F36C6]">
            Contact
          </Link>
          <Link to="/aboutUs" className="hover:text-[#2F36C6]">
            About Us
          </Link>
          <button
            className="bg-[#2F36C6] text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
            onClick={() => navigate("/contact")}
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={toggleMobile}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-gray-800" />
            <span className="block h-0.5 w-6 bg-gray-800" />
            <span className="block h-0.5 w-6 bg-gray-800" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
  <>
    {/* Backdrop (below header) */}
    <div
      className="fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-black/40 z-40 md:hidden"
      onClick={closeMobile}
    />

    {/* Menu Panel */}
    <div
      className={`fixed top-20 left-0 w-full bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ${
        isMobileOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="px-6 py-6 space-y-4 text-gray-700 font-medium">
        <Link to="/" onClick={closeMobile} className="block hover:text-[#2F36C6]">
          Home
        </Link>

        <details className="group">
          <summary className="flex justify-between items-center cursor-pointer list-none hover:text-[#2F36C6]">
            <span>Services</span>
            <span className="text-xs text-gray-500 group-open:rotate-180 transition-transform">
              ▼
            </span>
          </summary>

          <div className="mt-2 pl-3 space-y-2 text-sm">
            <Link to="/services/seo" onClick={closeMobile} className="block hover:text-[#2F36C6]">
              SEO Optimization
            </Link>
            <Link to="/services/ppc" onClick={closeMobile} className="block hover:text-[#2F36C6]">
              PPC Advertising
            </Link>
            <Link to="/services/web" onClick={closeMobile} className="block hover:text-[#2F36C6]">
              Web Design
            </Link>
            <Link to="/services/social-media-marketing" onClick={closeMobile} className="block hover:text-[#2F36C6]">
              Social Media Marketing
            </Link>
            <Link to="/services/content-marketing" onClick={closeMobile} className="block hover:text-[#2F36C6]">
              Content Marketing
            </Link>
            <Link to="/services/brand" onClick={closeMobile} className="block hover:text-[#2F36C6]">
              Brand Strategy
            </Link>
          </div>
        </details>

        <Link to="/contact" onClick={closeMobile} className="block hover:text-[#2F36C6]">
          Contact
        </Link>

        <Link to="/aboutUs" onClick={closeMobile} className="block hover:text-[#2F36C6]">
          About Us
        </Link>

        <button
          className="mt-2 w-full bg-[#2F36C6] text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
          onClick={() => {
            navigate("/contact");
            closeMobile();
          }}
        >
          Get a Quote
        </button>
      </nav>
    </div>
  </>
)}
    </header>
  );
};

export default Header;
