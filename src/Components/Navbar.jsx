import React from 'react';
import GibWorkImage from '../assets/gib.jpeg';
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="bg-white p-4 flex justify-between items-center mb-10 w-auto mx-auto">
            {/* Image on the left */}
            <div>
                <img src={GibWorkImage} alt="Gib Work" className="h-12 w-12" />
            </div>

            {/* Icons on the right */}
            <div className="flex space-x-4">
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="text-[#8151fd] h-10 w-10 hover:text-[#6934f3] transition-colors duration-200" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="text-[#8151fd] h-10 w-10 hover:text-[#6934f3] transition-colors duration-200" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-[#8151fd] h-10 w-10 hover:text-[#6934f3] transition-colors duration-200" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
