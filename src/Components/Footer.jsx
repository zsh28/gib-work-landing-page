import React from 'react';
import GibWorkImage from '../assets/gib.jpeg';
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white p-4 flex justify-between items-center mt-10 w-auto mx-auto">
      {/* Left Side: GibWork Logo */}
      <div className="flex items-center space-x-4">
        <img src={GibWorkImage} alt="Gib Work" className="h-12 w-12" />
        <span className="text-[20px] font-semibold hidden-on-sm">GibWork</span>
      </div>

      {/* Center: Text */}
      <div className="text-center">
        <p>Made with ❤️ by zsh28</p>
      </div>

      {/* Right Side: Social Icons */}
      <div className="flex flex-col items-end space-y-2">
        <p className="text-[20px] font-medium text-black">Join our community</p>
        <div className="flex space-x-4">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="text-black h-10 w-10 hover:text-[#6934f3] transition-colors duration-200" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-black h-10 w-10 hover:text-[#6934f3] transition-colors duration-200" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-black h-10 w-10 hover:text-[#6934f3] transition-colors duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
