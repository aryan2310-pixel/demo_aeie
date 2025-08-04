import React from "react";
import { motion } from "motion/react";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

export function Footer() {
  const socialLinks = [
    { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
    { icon: <FaYoutube />, url: "https://youtube.com", label: "YouTube" },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-blue-900/80 backdrop-blur-md border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center sm:text-left">
          
          {/* 1st section - Logos */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <img
              src="/path-to-your-logo1.png"
              alt="Logo 1"
              className="h-12 object-contain"
            />
            <img
              src="/path-to-your-logo2.png"
              alt="Logo 2"
              className="h-12 object-contain"
            />
          </div>

          {/* 2nd section - Text */}
          <div>
            <h1 className="text-xl font-bold text-white">HIT AEIE</h1>
            <p className="mt-2 text-sm text-gray-400 max-w-md mx-auto sm:mx-0">
              Department of Applied Electronics & Instrumentation Engineering at Haldia Institute of Technology.
              Inspiring innovation and learning with a passion for technology and research.
            </p>
          </div>

          {/* 3rd section - Social media */}
          <div className="flex justify-center sm:justify-end space-x-5">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-300 hover:text-pink-400 text-lg"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} HIT AEIE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
