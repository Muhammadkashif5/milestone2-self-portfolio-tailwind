import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4" data-aos="zoom-in">
          Muhammad Kashif
        </h1>

        <ul className="flex justify-center gap-6 mb-4" data-aos="fade-down">
          <li>
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
          </li>
          <li>
            <a href="#resume" className="text-gray-700 hover:text-gray-900">
              Resume
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 hover:text-gray-900">
              Projects
            </a>
          </li>
        </ul>

        <span className="block mt-8 text-sm text-gray-600">
          &#169; Muhammad Kashif. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
