import React, {   Suspense } from "react";
import Loader from "./components/loader";
import "./globals.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Resume from "./components/resume";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ScrollUp from "./components/scrollUp";
import Banner from "./components/home"
function Home() {


  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Banner />
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
        <ScrollUp />
      </Suspense>
    </div>
  );
}

export default Home;
