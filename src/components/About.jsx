import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className='my-10 text-center text-4xl bg-gradient-to-r from-[#00dbfe] to-[#9a38f3] bg-clip-text text-transparent font-bold'>
                About Me
            </motion.h2>

            <div className="flex flex-col items-center">
                <motion.h3
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-bold text-[#00dbfe] mb-8"
                >
                    Who I Am
                </motion.h3>

                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center text-neutral-400 max-w-3xl mb-16 leading-relaxed px-6"
                >
                    I am <span className="text-white font-semibold">Moidheen Suhair</span>, a dedicated <span className="text-white font-semibold">MERN Stack Developer</span>.
                    My expertise lies in building scalable, production-ready web applications using React.js, Node.js, and MongoDB.
                    <br /><br />
                    I have successfully deployed multiple full-stack projects, including complex e-commerce platforms and ride-hailing applications. My focus is on writing clean, maintainable code and delivering seamless user experiences.
                    <br /><br />
                    I am constantly exploring new technologies to optimize performance and security in web development.
                </motion.p>

                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-16 md:gap-32 text-center"
                >
                    <div>
                        <h3 className="text-5xl font-bold text-[#9a38f3]">1+</h3>
                        <p className="text-xs tracking-widest text-neutral-500 mt-2 uppercas">Years Exp.</p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold text-[#9a38f3]">5+</h3>
                        <p className="text-xs tracking-widest text-neutral-500 mt-2 uppercase">Projects</p>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default About;
