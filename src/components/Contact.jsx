import { useState } from 'react';
import { CONTACT } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaTimes } from 'react-icons/fa';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = new URLSearchParams();
        for (const pair of formData) {
            data.append(pair[0], pair[1]);
        }

        try {
            await fetch(
                "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdUPyGrTxwnowvzI_LqboxFsqBVZs9EampQy4Gs2qSe3H3h3A/formResponse",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: data,
                }
            );
            setIsSubmitted(true);
            e.target.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='border-b border-neutral-900 pb-24 relative'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className='my-10 text-center text-4xl bg-gradient-to-r from-[#00dbfe] to-[#9a38f3] bg-clip-text text-transparent font-bold'>
                Get In Touch
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
                {/* Left Side - Contact Info */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center space-y-8"
                >
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-4">Let's Talk</h3>
                        <p className="text-neutral-400 leading-relaxed max-w-md">
                            Have a project in mind or want to collaborate? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-neutral-300 hover:text-[#00dbfe] transition-colors cursor-pointer group">
                            <div className="p-3 rounded-full bg-neutral-900 border border-neutral-800 group-hover:border-[#00dbfe]/50 transition-colors">
                                <FaEnvelope className="text-[#00dbfe]" />
                            </div>
                            <a href={`mailto:${CONTACT.email}`} className="text-sm md:text-base">
                                {CONTACT.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-4 text-neutral-300 group">
                            <div className="p-3 rounded-full bg-neutral-900 border border-neutral-800">
                                <FaMapMarkerAlt className="text-[#00dbfe]" />
                            </div>
                            <span className="text-sm md:text-base">
                                {CONTACT.address}
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Form */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-neutral-900/30 p-8 md:p-10 rounded-3xl border border-neutral-800"
                >
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-400 ml-1">Your Name</label>
                            <input
                                type="text"
                                name="entry.1092070513"
                                placeholder="John Doe"
                                required
                                className="w-full rounded-xl bg-neutral-900/50 border border-neutral-800 px-4 py-3 text-neutral-300 focus:border-[#00dbfe] focus:outline-none focus:ring-1 focus:ring-[#00dbfe] transition-colors placeholder:text-neutral-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-400 ml-1">Your Email</label>
                            <input
                                type="email"
                                name="entry.658371148"
                                placeholder="john@example.com"
                                required
                                className="w-full rounded-xl bg-neutral-900/50 border border-neutral-800 px-4 py-3 text-neutral-300 focus:border-[#00dbfe] focus:outline-none focus:ring-1 focus:ring-[#00dbfe] transition-colors placeholder:text-neutral-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-400 ml-1">Your Message</label>
                            <textarea
                                rows="4"
                                name="entry.1104923262"
                                placeholder="Tell me about your project..."
                                required
                                className="w-full rounded-xl bg-neutral-900/50 border border-neutral-800 px-4 py-3 text-neutral-300 focus:border-[#00dbfe] focus:outline-none focus:ring-1 focus:ring-[#00dbfe] transition-colors resize-none placeholder:text-neutral-600"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full md:w-auto bg-gradient-to-r from-[#00dbfe] to-[#9a38f3] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,219,254,0.3)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            <FaPaperPlane className="text-sm" />
                        </button>
                    </form>
                </motion.div>
            </div>

            {/* Success Popup */}
            <AnimatePresence>
                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                        onClick={() => setIsSubmitted(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl max-w-md w-full relative shadow-[0_0_50px_rgba(0,219,254,0.1)] text-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
                            >
                                <FaTimes />
                            </button>
                            <div className="w-16 h-16 bg-[#00dbfe]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaCheckCircle className="text-4xl text-[#00dbfe]" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-neutral-400 mb-6">
                                Thank you for reaching out. I'll get back to you as soon as possible.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="bg-gradient-to-r from-[#00dbfe] to-[#9a38f3] text-white px-8 py-2 rounded-full font-bold hover:opacity-90 transition-opacity w-full"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Contact
