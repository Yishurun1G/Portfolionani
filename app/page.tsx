"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./componets/nav";
import Hero from "./componets/hero";
import Skills from "./componets/skill"; 
import Projects from "./componets/projects"; 
import Contact from "./componets/contact"; 
import Footer from "./componets/footer"; 

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Handle dark mode initialization and updates
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDarkMode = savedTheme ? savedTheme === "dark" : prefersDark;

    // Apply initial dark mode class to document root
    if (initialDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Set initial state and save to localStorage
    setDarkMode(initialDarkMode);
    localStorage.setItem("theme", initialDarkMode ? "dark" : "light");

    // Update class on state change
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: { matches: any; }) => {
      const newDarkMode = savedTheme ? savedTheme === "dark" : e.matches;
      setDarkMode(newDarkMode);
      document.documentElement.classList.toggle("dark", newDarkMode);
      localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []); // Empty dependency array for one-time setup

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}