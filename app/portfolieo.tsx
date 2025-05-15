"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPhp, FaGithub, 
  FaExternalLinkAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin
} from "react-icons/fa";
import { SiTailwindcss, SiC } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize and update dark mode
  useEffect(() => {
    // Check for saved theme or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial dark mode: saved theme > system preference > light (default)
    const initialDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark;
    setDarkMode(initialDarkMode);
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save theme to localStorage whenever darkMode changes
    localStorage.setItem('theme', initialDarkMode ? 'dark' : 'light');
  }, []);

  // Update dark mode class and localStorage when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // Skills data (unchanged)
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="h-8 w-8 text-orange-500" />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt className="h-8 w-8 text-blue-500" />, level: 85 },
    { name: "JavaScript", icon: <FaJs className="h-8 w-8 text-yellow-500" />, level: 80 },
    { name: "React.js", icon: <FaReact className="h-8 w-8 text-blue-400" />, level: 75 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="h-8 w-8 text-teal-500" />, level: 85 },
    { name: "C", icon: <SiC className="h-8 w-8 text-gray-600" />, level: 70 },
    { name: "Java", icon: <FaJava className="h-8 w-8 text-red-500" />, level: 65 },
    { name: "PHP", icon: <FaPhp className="h-8 w-8 text-purple-500" />, level: 60 },
  ];

  // Projects data (unchanged)
  const projects = [
    {
      title: "movie-app",
      description: "A movie application that fetches data from a public API. Built with React.js and Tailwind CSS.",
      image: "/movie.jpg",
      tags: ["React.js", "Tailwind CSS", "JavaScript"],
      liveLink: "https://movie-react-nani.vercel.app/",
      githubLink: "#",
    },
    {
      title: "Weather-App ",
        description: "A weather application that fetches data from a public API. Built with JavaScript and CSS.",
      image: "/weather.jpg",
      tags: ["PHP", "JavaScript", "MySQL", "API"],
      liveLink: "https://weather-appnan.vercel.app/",
      githubLink: "#",
    },
    {
      title: "Todo List",
      description: "A simple todo list application built with HTML, CSS, and JavaScript. Demonstrates my ability to create user-friendly interfaces.",
      image: "/task.jpg",
      tags: ["Java", "OOP", "UI Design"],
      liveLink: "https://to-do-listnan.vercel.app/",
      githubLink: "#",
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                Portfolio
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  About
                </Link>
                <Link href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Skills
                </Link>
                <Link href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Projects
                </Link>
                <Link href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Contact
                </Link>
                {/* <button 
                  className="p-2 rounded-full text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onClick={toggleTheme}
                  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {darkMode ? <BsSun className="h-5 w-5" /> : <BsMoon className="h-5 w-5" />}
                </button> */}
              </div>

            
               <div className="md:hidden flex items-center">
                {/* <button 
                  className="p-2 mr-2 rounded-full text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onClick={toggleTheme}
                  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {darkMode ? <BsSun className="h-5 w-5" /> : <BsMoon className="h-5 w-5" />}
                </button> */}
                <button 
                  className="p-2 rounded-full text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-2 py-2 space-y-2">
                <Link
                  href="#about"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>

        <main>
          {/* Hero Section (unchanged) */}
          <section id="about" className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                  <h1 className="text-3xl md:text-5xl md:whitespace-nowrap font-bold text-gray-900 dark:text-white mb-4">
                    Hi, I'm <span className="whitespace-nowrap text-purple-600 dark:text-purple-400">Yishurun Getachew</span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    Full Stack Developer
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                   I'm  passionated full-stack developer focused on front-end technologies. I enjoy building responsive, modern web apps and constantly seek to learn, grow, and collaborate with others in the field.  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors">
                      Download Resume
                      //use Yishurun's CV.pdf for the resume
                    </button>
                    <Link href="#contact">
                    <button className="px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 font-medium rounded-md hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors">
                      Contact Me
                    </button>
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-600 dark:border-purple-400 shadow-xl">
  <Image
    src="/me.jpg"
    alt="Your Name"
    fill
    className="object-cover scale-140 object-bottom transform"
    priority
  />
</div>

                </div>
              </div>
            </div>
          </section>

          {/* Skills Section (unchanged) */}
          <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  I've worked with a variety of programming languages and technologies. Here's an overview of my technical
                  skills.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105"
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-4">{skill.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{skill.name}</h3>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                        <div
                          className="bg-purple-600 dark:bg-purple-400 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section (unchanged) */}
          <section id="projects" className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Here are some of the projects I've worked on. Each project demonstrates different skills and technologies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                  >
                    <div className="relative h-48 w-full">
                      <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <FaExternalLinkAlt className="h-4 w-4" /> Live
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <FaGithub className="h-4 w-4" /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section (unchanged) */}
          <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Subject"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your message here..."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[150px]"
                      ></textarea>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors">
                      <FaEnvelope className="h-4 w-4" /> Send Message
                    </button>
                  </form>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                          <FaEnvelope className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                          <p className="text-gray-600 dark:text-gray-400">Yishurungetachew@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                          <FaPhone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                          <p className="text-gray-600 dark:text-gray-400">+251 98 511 6850</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                          <FaMapMarkerAlt className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                          <p className="text-gray-600 dark:text-gray-400">AddisAbaba, Ethiopia</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Follow Me</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/Yishurun1G"
                        className="bg-gray-200 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900 p-3 rounded-full transition-colors"
                      >
                        <FaGithub className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      </a>
                      <a
                        href="https://x.com/Yishurun_g?t=yH4W1iXCCHpEu5HKplQHhQ&s=09"
                        className="bg-gray-200 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900 p-3 rounded-full transition-colors"
                      >
                        <FaTwitter className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/yishurun-getachew"
                        className="bg-gray-200 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900 p-3 rounded-full transition-colors"
                      >
                        <FaLinkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      </a>
                      <a
                        href="https://www.instagram.com/shalomjeshurun?igsh=dms4cTQ4dzdmMXc2"
                        className="bg-gray-200 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900 p-3 rounded-full transition-colors"
                      >
                        <FaInstagram className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer (unchanged) */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Yishurun Getachew</h3>
                <p className="text-gray-400 mb-4">
                  A passionate full-stack developer focused on creating clean, user-friendly applications.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Email: Yishurungetachew@gmail.com</li>
                  <li>Phone: +251 98 511 6850</li>
                  <li>Location:AddisAbaba , Ethiopia</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
              <p>© {new Date().getFullYear()} Yishurun Getachew. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}