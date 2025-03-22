'use client';

import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Import assets directly
import logo from '../../assets/logo/logo-black.png';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-jet py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-timberWolf">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-xs mb-3 font-semibold">Get in Touch</h4>
          <p className="text-sm">Feel free to reach out for any inquiries!</p>
        </div>

        {/* Center Section */}
        <div className="text-center mb-4 md:flex-1">
          <p className="text-sm">
            © {currentYear || '...'} Umar Rabbani. All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <p className="text-sm">
            Email:
            <a
              href="mailto:umar.rabbani.191@gmail.com"
              className="ml-1 hover:text-battleGray transition duration-200"
            >
              umar.rabbani.191@gmail.com
            </a>
          </p>
          <p className="text-sm">
            Phone:
            <a
              href="tel:+923332927191"
              className="ml-1 hover:text-battleGray transition duration-200"
            >
              +923332927191
            </a>
          </p>
          <div className="flex justify-center md:justify-end space-x-3 mt-3">
            {[
              {
                href: 'https://www.linkedin.com/in/urabbani191/',
                icon: <FaLinkedinIn size={16} />,
                label: 'LinkedIn',
              },
              {
                href: 'https://www.upwork.com/freelancers/bestfullstack',
                icon: <SiUpwork size={16} />,
                label: 'Upwork',
              },
              {
                href: 'https://www.instagram.com/urabbani191/',
                icon: <FaInstagram size={16} />,
                label: 'Instagram',
              },
              {
                href: 'https://www.facebook.com/umar.rabbani.191',
                icon: <FaFacebookF size={16} />,
                label: 'Facebook',
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-8 h-8 flex items-center justify-center bg-battleGray rounded-full hover:bg-timberWolf transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <motion.div>
        <Image
          src={logo}
          alt="Logo"
          width={96}
          height={48}
          className="object-contain"
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
