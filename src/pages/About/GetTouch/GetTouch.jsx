import React from "react";
import { motion } from "framer-motion";

const GetTouch = () => {
    return (
        <div className="p-5 py-10 md:py-20 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left Image */}
                <motion.img
                    src="https://www.zentexx.com/assets/astronautImg-CRBivsfq.svg"
                    alt="Astronaut"
                    className="w-full h-auto"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                />

                {/* Right Form */}
                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-5 w-full"
                >
                    <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
                        Get In Touch
                    </h2>

                    {/* Name */}
                    <div className="relative">
                        <input
                            type="text"
                            required
                            className="peer w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-black dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                        />
                        <label className="absolute left-3 top-2 text-sm text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200 dark:text-gray-400">
                            Your Name
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            required
                            className="peer w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-black dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Email"
                        />
                        <label className="absolute left-3 top-2 text-sm text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200 dark:text-gray-400">
                            Your Email
                        </label>
                    </div>

                    {/* Country */}
                    <div className="relative">
                        <input
                            type="text"
                            required
                            className="peer w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-black dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Country"
                        />
                        <label className="absolute left-3 top-2 text-sm text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200 dark:text-gray-400">
                            Your Country
                        </label>
                    </div>

                    {/* Subject */}
                    <div className="relative">
                        <input
                            type="text"
                            required
                            className="peer w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-black dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Subject"
                        />
                        <label className="absolute left-3 top-2 text-sm text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200 dark:text-gray-400">
                            Subject
                        </label>
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <textarea
                            required
                            rows={4}
                            className="peer w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-black dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Message"
                        />
                        <label className="absolute left-3 top-2 text-sm text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200 dark:text-gray-400">
                            Message
                        </label>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition duration-300"
                        type="submit"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </div>
    );
};

export default GetTouch;
