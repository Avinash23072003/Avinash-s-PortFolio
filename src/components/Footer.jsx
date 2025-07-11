import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/i_avinash23/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://x.com/chitareavinash6" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/avinash-chitare-02933824a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        
        <FaLinkedin size={24} />
      </a>
      <a>8261048834 - Avinash Chitare</a>
    </footer>
  );
};

export default Footer;