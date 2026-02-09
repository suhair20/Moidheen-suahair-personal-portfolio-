import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <h1 className="mx-2 text-3xl font-bold text-white tracking-widest">MS.</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex m-8 items-center justify-center gap-8 text-base font-semibold">
                <a href="#home" className="text-neutral-300 hover:text-[#00dbfe] transition-colors">Home</a>
                <a href="#about" className="text-neutral-300 hover:text-[#00dbfe] transition-colors">About</a>
                <a href="#skills" className="text-neutral-300 hover:text-[#00dbfe] transition-colors">Skills</a>
                <a href="#services" className="text-neutral-300 hover:text-[#00dbfe] transition-colors">Services</a>
                <a href="#projects" className="text-neutral-300 hover:text-[#00dbfe] transition-colors">Projects</a>
                <a href="#contact" className="text-neutral-300 hover:text-[#00dbfe] transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-neutral-950 border-b border-neutral-800 flex flex-col items-center py-8 gap-6 md:hidden z-50">
                    <a href="#home" onClick={toggleMenu} className="text-lg font-medium text-neutral-300 hover:text-[#00dbfe] transition-colors">Home</a>
                    <a href="#about" onClick={toggleMenu} className="text-lg font-medium text-neutral-300 hover:text-[#00dbfe] transition-colors">About</a>
                    <a href="#skills" onClick={toggleMenu} className="text-lg font-medium text-neutral-300 hover:text-[#00dbfe] transition-colors">Skills</a>
                    <a href="#services" onClick={toggleMenu} className="text-lg font-medium text-neutral-300 hover:text-[#00dbfe] transition-colors">Services</a>
                    <a href="#projects" onClick={toggleMenu} className="text-lg font-medium text-neutral-300 hover:text-[#00dbfe] transition-colors">Projects</a>
                    <a href="#contact" onClick={toggleMenu} className="text-lg font-medium text-neutral-300 hover:text-[#00dbfe] transition-colors">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
