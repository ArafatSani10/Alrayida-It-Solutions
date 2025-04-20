import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About Us' },
        { to: '/service', label: 'Service' },
        { to: '/blogs', label: 'Blogs' },
        { to: '/career', label: 'Career' },
    ];

    const menuVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
    };

    return (
        <div className="relative h-auto max-w-7xl mx-auto font-orbitron z-50">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <NavLink to='/' onClick={closeMenu}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <img
                            className="w-[130px] hover:scale-105 transition-transform duration-300"
                            src="https://i.ibb.co/G3MTtRss/download-1.png"
                            alt="Logo"
                        />
                    </motion.div>
                </NavLink>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex mt-5 p-3 gap-5 text-[12px] items-center 
                    rounded-2xl border border-white/10 bg-white/5 
                    backdrop-blur-3xl shadow-md shadow-black/30 
                    transition-all duration-300">
                    {navItems.map(({ to, label }, index) => (
                        <NavLink
                            key={label}
                            to={to}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `relative font-semibold transition-all duration-300 transform hover:scale-105 px-3 py-1 rounded-md 
                                ${isActive
                                    ? 'text-white border border-yellow-400 bg-gradient-to-r from-gray-700/60 to-slate-700/60 shadow-lg shadow-yellow-400/20'
                                    : 'text-white/80 hover:text-white'
                                }`
                            }
                        >
                            <motion.li
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                            >
                                {label}
                            </motion.li>
                        </NavLink>
                    ))}
                </ul>

                {/* Desktop Contact Button */}
                <NavLink to="/contactus" onClick={closeMenu}>
                    <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="hidden lg:flex items-center text-[15px] opacity-50 px-6 py-2 rounded-xl
                            border-4 border-white/20 bg-white text-black 
                            backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.15)]
                            hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]
                            transition-all duration-300"
                    >
                        Contact Us
                    </motion.button>
                </NavLink>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center gap-3">
                    <span className="text-3xl text-white cursor-pointer" onClick={toggleMenu}>
                        {menuOpen ? <IoMdClose /> : <FaBars />}
                    </span>
                </div>
            </div>

        {/* Mobile Menu */}
<AnimatePresence>
    {menuOpen && (
        <motion.div
            className="lg:hidden fixed top-0 left-0 w-full h-full overflow-y-auto p-6 z-[999] backdrop-blur-md"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.50), rgba(0,0,0,1)), url('https://i.ibb.co.com/NgC6XmhT/group-people-sitting-front-computer-screen-with-word-code-it-979520-107199.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="flex justify-end mb-6">
                <IoMdClose className="text-3xl cursor-pointer text-white hover:scale-110 transition duration-300" onClick={closeMenu} />
            </div>

            <ul className="flex flex-col gap-5 text-[18px] text-start w-full items-start">
                {navItems.map(({ to, label }, index) => (
                    <NavLink
                        key={label}
                        to={to}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `group font-semibold inline-block w-full ${isActive ? 'text-blue-400' : 'text-white'}`
                        }
                    >
                        <motion.li
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="relative w-full px-5 py-3 rounded-xl
                            bg-white/5 border border-white/10
                            backdrop-blur-sm text-white
                            shadow-md transition-all duration-500 ease-in-out

                            group-hover:bg-white/10
                            group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
                            group-hover:border-transparent

                            after:content-[''] after:absolute after:left-0 after:-bottom-1
                            after:h-[2px] after:bg-gradient-to-r
                            after:from-blue-400 after:via-purple-500 after:to-pink-500
                            after:w-0 group-hover:after:w-full
                            after:transition-all after:duration-500"
                        >
                            {label}
                        </motion.li>
                    </NavLink>
                ))}
            </ul>

            {/* Contact Us Button */}
            <div className="mt-10 w-full">
                <NavLink to="/contactus" onClick={closeMenu}>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 text-white font-bold rounded-xl
                            shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        Contact Us
                    </motion.button>
                </NavLink>
            </div>
        </motion.div>
    )}
</AnimatePresence>

        </div>
    );
};

export default Navbar;
