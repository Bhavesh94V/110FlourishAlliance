import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/AnimatedLoader.css";
import brandLogo from '../assets/imgs/Brand-Logo/Brand-Logo3.png';

const AnimatedLoader = () => {
    return (
        <div className="loader-container">
            <div className="loader-content">
                {/* Animated SVG Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: [0, -60] }}
                    transition={{
                        opacity: { duration: 1.5, ease: "easeInOut" },
                        scale: { duration: 1.5, ease: "easeInOut" },
                        x: { delay: 1, duration: 0.8, ease: "easeInOut" },
                    }}
                >
                    <img src={brandLogo} alt="" className="responsive-logo" />
                </motion.div>

                {/* Animated Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
                >
                    <motion.h1
                        className="loader-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
                    >
                        {Array.from("Flourish Alliance").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2 + index * 0.1, duration: 0.5, ease: "easeInOut" }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </motion.div>
            </div>
        </div>
    );
};

export default AnimatedLoader;