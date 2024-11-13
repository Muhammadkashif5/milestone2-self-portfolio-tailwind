"use client";
import React, { useEffect, useState } from "react";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 500);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#home"
      className={`fixed right-10 ${
        isVisible ? "bottom-12" : "-bottom-20"
      } bg-gray-800/80 p-2 rounded-md z-50 transition-all duration-400 hover:bg-gray-700`}
    >
      <i className="uil uil-arrow-up text-white text-2xl"></i>
    </a>
  );
};

export default ScrollUp;
