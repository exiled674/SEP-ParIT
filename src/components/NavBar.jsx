import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">DaimlerConfig</div>

        {/* Navigation */}
        <div className="space-x-6 hidden md:flex">
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Features
          </a>
          <a
            href="#download"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Download
          </a>
          <a
            href="#kontakt"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
}
