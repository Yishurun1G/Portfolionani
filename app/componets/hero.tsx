import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
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
              I'm a passionate full-stack developer focused on front-end technologies. I enjoy building responsive, modern
              web apps and constantly seek to learn, grow, and collaborate with others in the field.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/Yishuruncv.pdf"
                download
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors"
              >
                Download Resume
              </a>
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
                alt="Yishurun Getachew"
                fill
                className="object-cover scale-140 object-bottom transform"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}