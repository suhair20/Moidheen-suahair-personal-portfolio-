import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl bg-gradient-to-r from-[#00dbfe] to-[#9a38f3] bg-clip-text text-transparent font-bold'>Featured Projects</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className='group relative flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 hover:border-purple-500/50 transition-colors duration-300'
                    >
                        <div>
                            <h3 className='mb-4 text-2xl font-bold text-white group-hover:text-[#00dbfe] transition-colors'>{project.title}</h3>
                            <p className='mb-6 text-neutral-400 text-sm leading-relaxed'>{project.description}</p>
                            <div className='mb-6 flex flex-wrap gap-2'>
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className='rounded-full bg-neutral-900/80 px-3 py-1 text-xs font-medium text-[#00dbfe] border border-neutral-800'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-medium hover:text-[#00dbfe] transition-colors w-fit">
                                <FaGithub className="text-xl" />
                                <span>Code</span>
                            </a>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-medium hover:text-[#00dbfe] transition-colors w-fit">
                                    <FaExternalLinkAlt className="text-lg" />
                                    <span>Live Demo</span>
                                </a>
                            )}
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute -inset-0.5 -z-10 rounded-3xl bg-gradient-to-r from-[#00dbfe] to-[#9a38f3] opacity-0 transition-opacity duration-300 group-hover:opacity-10 blur-xl"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects
