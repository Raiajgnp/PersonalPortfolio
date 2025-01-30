import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-primary text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-lg mb-4">&copy; {new Date().getFullYear()} RHJ's Personal Website. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/roanjagunap.15/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/rnjgnp/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/roan-jagunap-0b0490322/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Raiajgnp" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
