import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux } from 'react-icons/si';
import { FaNodeJs, FaJsSquare, FaHtml5, FaCss3, FaGitAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: "MERN Stack", icon: <FaNodeJs className="text-4xl text-green-500" /> },
        { name: "React", icon: <RiReactjsLine className="text-4xl text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-4xl text-gray-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-500" /> },
        { name: "Redux", icon: <SiRedux className="text-4xl text-purple-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-sky-400" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-4xl text-yellow-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3 className="text-4xl text-blue-500" /> },
        { name: "Git", icon: <FaGitAlt className="text-4xl text-red-500" /> },
    ];

    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl bg-gradient-to-r from-[#00dbfe] to-[#9a38f3] bg-clip-text text-transparent font-bold'>Skills & Expertise</motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 hover:bg-neutral-800 hover:border-cyan-500/30 transition-all duration-300 group"
                    >
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                        </div>
                        <span className="font-semibold text-neutral-300">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills
