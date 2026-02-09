import React from 'react';
import { motion } from 'framer-motion';
// Assuming we might want a services section similar to Experience or standalone
// Since the prompt asked for Services, we'll create a dedicated component.
// I'll adapt a structure similar to Experience but tailored for Services.

const SERVICES = [
    {
        title: "Web Development",
        description: "Building responsive and performant web applications using modern technologies like React, Next.js, and Node.js.",
    },
    {
        title: "Mobile App Development",
        description: "Creating cross-platform mobile applications using React Native.",
    },
    {
        title: "API Development",
        description: "Designing and implementing RESTful APIs for seamless data communication.",
    },
    {
        title: "Database Management",
        description: "Managing and optimizing databases like MongoDB and SQL for data integrity and performance.",
    },
];

const Services = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Services</motion.h2>
            <div className='flex flex-wrap justify-center gap-8'>
                {SERVICES.map((service, index) => (
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={index}
                        className='w-full max-w-sm rounded-lg border border-neutral-800 bg-neutral-900/50 p-6'
                    >
                        <h3 className='mb-2 text-xl font-semibold text-purple-400'>{service.title}</h3>
                        <p className='text-neutral-400'>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Services
