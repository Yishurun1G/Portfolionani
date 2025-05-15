import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiC, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="h-8 w-8 text-orange-500" />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt className="h-8 w-8 text-blue-500" />, level: 85 },
  { name: "JavaScript", icon: <FaJs className="h-8 w-8 text-yellow-500" />, level: 80 },
  { name: "React.js", icon: <FaReact className="h-8 w-8 text-blue-400" />, level: 75 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-8 w-8 text-teal-500" />, level: 85 },
{ name: "SQL", icon: <SiMysql className="h-8 w-8 text-gray-600" />, level: 70 },
  { name: "Java", icon: <FaJava className="h-8 w-8 text-red-500" />, level: 65 },
  { name: "PHP", icon: <FaPhp className="h-8 w-8 text-purple-500" />, level: 60 },
];

export default function Skills() {
  return (
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
  );
}