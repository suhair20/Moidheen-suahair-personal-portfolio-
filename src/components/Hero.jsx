import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { HERO_CONTENT, CONTACT } from '../constants';
import { motion } from 'framer-motion';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 pt-5 lg:pt-10 px-4 lg:px-20">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.span
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="mb-2 text-sm font-bold tracking-widest text-[#00dbfe] uppercase"
                        >
                            Hello, I'm
                        </motion.span>
                        <motion.h1
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="pb-2 text-5xl md:text-7xl font-black tracking-tighter lg:text-8xl flex flex-col uppercase leading-none text-center lg:text-left"
                        >
                            <span className='text-white'>Moidheen</span>
                            <span className="bg-gradient-to-r from-[#00dbfe] to-[#9a38f3] bg-clip-text text-transparent">
                                Suhair
                            </span>
                        </motion.h1>
                        <motion.h3
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="text-xl md:text-2xl font-bold text-neutral-500 mb-6 mt-4 text-center lg:text-left"
                        >
                            MERN Stack Developer
                        </motion.h3>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl font-light tracking-wide text-neutral-400 mb-10 text-center lg:text-left text-sm md:text-base"
                        >
                            Specializing in <span className="text-white font-medium">React.js, Node.js, and MongoDB</span>. Building scalable, secure, and user-centric web applications.
                        </motion.p>

                        <motion.div
                            variants={container(1.2)}
                            initial="hidden"
                            animate="visible"
                            className='flex gap-6 mb-12 items-center justify-center lg:justify-start'
                        >
                            <a href="https://github.com/suhair20" target="_blank" rel="noopener noreferrer" className='text-2xl text-neutral-400 hover:text-white transition-colors'><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/moidheen-suhair-81a0a32a7" target="_blank" rel="noopener noreferrer" className='text-2xl text-[#00dbfe] hover:text-[#00dbfe]/80 transition-colors bg-[#00dbfe]/10 p-3 rounded-full'><FaLinkedin className="text-[#00dbfe]" /></a>
                            <a href={`mailto:${CONTACT.email}`} className='text-2xl text-neutral-400 hover:text-white transition-colors'><FaEnvelope /></a>

                        </motion.div>

                        <motion.div
                            variants={container(1.4)}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-4 items-center justify-center lg:justify-start"
                        >
                            <a
                                href="https://drive.google.com/file/d/1pBxenPtTsEKyBhLoK6LCBUvSf2U7PlgA/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-[#00dbfe] to-[#00dbfe] text-neutral-950 px-4 py-2 text-sm md:px-8 md:py-3 md:text-base rounded-full font-bold hover:shadow-[0_0_20px_rgba(0,219,254,0.5)] transition-shadow"
                            >
                                Resume
                            </a>
                            <a
                                href="#projects"
                                className="border border-[#00dbfe] text-[#00dbfe] px-4 py-2 text-sm md:px-8 md:py-3 md:text-base rounded-full font-bold hover:bg-[#00dbfe]/10 transition-colors flex items-center justify-center"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="border border-[#00dbfe] text-[#00dbfe] px-4 py-2 text-sm md:px-8 md:py-3 md:text-base rounded-full font-bold hover:bg-[#00dbfe]/10 transition-colors flex items-center justify-center"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Right side content/background glow */}
                <div className="w-full lg:w-1/2 lg:p-8 relative mt-10 lg:mt-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-[#00dbfe]/20 to-[#9a38f3]/20 rounded-full blur-[80px] lg:blur-[100px] -z-10"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
