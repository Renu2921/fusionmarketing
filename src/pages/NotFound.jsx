import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6">
      <div className="text-center max-w-2xl">
        
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F36C6]">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-gray-900">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          The page you are looking for doesn’t exist or may have been moved.
          Let’s get you back on track and grow your business 🚀
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-[#2F36C6] text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Go Back Home
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="border border-[#2F36C6] text-[#2F36C6] px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition"
          >
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFound;