import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo1.png"

const Header = () => {
  const navigate=useNavigate();
  return (
    <header className="sticky top-0 z-20 w-full bg-white border-b border-gray-200">
      <div className="max-w-full mx-auto px-10 py-4 flex items-center justify-between">
        <div className=" flex flex-col justify-center items-center text-2xl font-bold text-fusion">
         <img src={logoImage} alt="logoImage" className="h-16 w-16" onClick={()=>navigate("/")} />
         <Link to="/" className="text-[1.1rem]">Fusion Marketing</Link>
        </div>
        <nav className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
          <Link to="/" className=" hover:text-[#2F36C6]">Home</Link>
          <div className="relative group">
            <span className="cursor-pointer hover:text-[#2F36C6]">
              Services
            </span>

            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg w-48">
              <Link to="/services/seo" className="text-sm block px-4 py-2 hover:bg-gray-100">
                SEO Optimization
              </Link>
              <Link to="/services/ppc" className="text-sm block px-4 py-2 hover:bg-gray-100">
                PPC Advertising
              </Link>
               <Link to="/services/web" className="text-sm block px-4 py-2 hover:bg-gray-100">
                Web Design
              </Link>
              <Link to="/services/social-media-marketing" className="text-sm block px-4 py-2 hover:bg-gray-100">
                Social Media Marketing
              </Link>
               <Link to="/services/content-marketing" className="text-sm block px-4 py-2 hover:bg-gray-100">
               Content Marketing
              </Link>
              <Link to="/services/brand" className="text-sm block px-4 py-2 hover:bg-gray-100">
              Brand Strategy
              </Link>

            </div>
          </div>
          <Link to="/contact" className=" hover:text-[#2F36C6]">Contact</Link>
          <Link to="/aboutUs" className=" hover:text-[#2F36C6]">About Us</Link>
           <button className="bg-[#2F36C6] text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
            onClick={()=>navigate("/contact")}>
          Get a Quote
        </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
