"use client";

import React, { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);

  useEffect(() => {
    const scrollActive = () => {
      const sections = document.querySelectorAll("section[id]") as NodeListOf<HTMLElement>;
      const scrollY = window.pageYOffset + window.innerHeight / 3;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            ?.querySelector(`.nav_menu a[href*=${sectionId}]`)
            ?.classList.add("active_link");
        } else {
          document
            ?.querySelector(`.nav_menu a[href*=${sectionId}]`)
            ?.classList.remove("active_link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);

    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  useEffect(() => {
    const scrollHeader = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 30) header?.classList.add("scroll_header");
      else header?.classList.remove("scroll_header");
    };

    window.addEventListener("scroll", scrollHeader);

    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  const menuHandler = () => setShowmenu(false);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-gray-100 ${showmenu ? "shadow-md" : ""}`}>
      <nav className="container mx-4 flex justify-between items-center py-5 px-12">
        <div className="text-2xl font-semibold text-gray-800">Muhammad Kashif</div>
        <div className={`nav_menu ${showmenu ? "fixed top-0 left-0 w-full h-full bg-gray-100 p-8" : "hidden md:flex md:items-center md:gap-8"}`}>
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
            {["home", "about", "resume", "projects", "contact"].map((section) => (
              <li key={section} className="nav_item">
                <a href={`#${section}`} className="flex flex-col items-center text-gray-700 hover:text-gray-900 font-medium" onClick={menuHandler}>
                  <i className={`uil uil-${section === "home" ? "estate" : section} text-xl`}></i> {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <i className="uil uil-times text-2xl absolute top-6 right-6 cursor-pointer md:hidden" onClick={() => setShowmenu(false)}></i>
        </div>
        <div className="text-2xl cursor-pointer md:hidden" onClick={() => setShowmenu(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
