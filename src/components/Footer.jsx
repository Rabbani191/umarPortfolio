import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si'; // Importing Upwork icon from react-icons
import { styles } from '../styles';

const Footer = () => {
  return (
    <footer className="bg-jet py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-timberWolf">
        {/* Left Section */}
        <div className="flex flex-col mb-4 md:mb-0 text-center md:text-left">
          <h4 className={`${styles.sectionHeadTextLight} text-xs mb-5`}>Get in Touch</h4>
          <p className="text-taupe mt-2">Feel free to reach out for any inquiries!</p>
        </div>

        {/* Center Section */}
        <div className="text-center mb-4 md:flex-1">
          <p className="text-sm text-taupe">© {new Date().getFullYear()} Umar Rabbani. All rights reserved.</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end text-center">
          <p className="text-taupe text-sm">Email: <a href="mailto:umar.rabbani.191@gmail.com" className="hover:text-battleGray transition duration-200">umar.rabbani.191@gmail.com</a></p>
          <p className="text-taupe text-sm">Phone: <a href="tel:+1234567890" className="hover:text-battleGray transition duration-200">+923332927191</a></p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.linkedin.com/in/urabbani191/"
              className="text-taupe hover:text-battleGray transition duration-200"
              aria-label="LinkedIn"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security improvement
            >
              <div className="flex items-center justify-center w-8 h-8 bg-battleGray rounded-full hover:bg-timberWolf transition duration-200">
                <FaLinkedinIn size={16} className="text-white" />
              </div>
            </a>
            <a
              href="https://www.upwork.com/freelancers/bestfullstack"
              className="text-taupe hover:text-battleGray transition duration-200"
              aria-label="Upwork"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security improvement
            >
              <div className="flex items-center justify-center w-8 h-8 bg-battleGray rounded-full hover:bg-timberWolf transition duration-200">
                <SiUpwork size={16} className="text-white" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/urabbani191/"
              className="text-taupe hover:text-battleGray transition duration-200"
              aria-label="Instagram"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security improvement
            >
              <div className="flex items-center justify-center w-8 h-8 bg-battleGray rounded-full hover:bg-timberWolf transition duration-200">
                <FaInstagram size={16} className="text-white" />
              </div>
            </a>
            <a
              href="https://www.facebook.com/umar.rabbani.191"
              className="text-taupe hover:text-battleGray transition duration-200"
              aria-label="Facebook"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security improvement
            >
              <div className="flex items-center justify-center w-8 h-8 bg-battleGray rounded-full hover:bg-timberWolf transition duration-200">
                <FaFacebookF size={16} className="text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
