"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContentBlock = ({ imageSrc, title, description, reverseLayout = false, redirectUrl = "/" }) => {
    const imageRef = useRef(null);
    const textRef = useRef(null);

    return (
        <motion.div
            className={`flex flex-col md:flex-row items-center bg-gray-50 dark:bg-black dark:text-white w-full mx-auto p-6 gap-24
                ${reverseLayout ? "md:flex-row-reverse" : ""}`}
        >
            {/* Image Animation */}
            <motion.div
                ref={imageRef}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }} // 👈 Ensures it replays when scrolling back
                className="w-full md:w-1/2 overflow-hidden cursor-pointer"
            >
                <Image
                    src={imageSrc}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-auto md:hover:scale-105 transition-all duration-500"
                />
            </motion.div>

            {/* Text Animation */}
            <motion.div
                ref={textRef}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }} // 👈 Ensures text also replays
                className="w-full md:w-1/2 text-center md:text-left"
            >
                <h2 className="md:text-8xl text-3xl font-thin mb-4">{title}</h2>
                <p className="text-gray-500 mb-6 md:text-lg">{description}</p>
                <a
                    href={redirectUrl}
                    className="group inline-flex items-center border-2 dark:border-white px-4 py-2 gap-x-3 rounded-full text-blue-600 md:hover:bg-white transition"
                >
                    <span className="font-semibold text-black group-hover:text-black">Know More</span>
                    <ArrowRight className="w-5 h-5 md:group-hover:-rotate-45 transition-all duration-500" />
                </a>
            </motion.div>
        </motion.div>
    );
};

export default ContentBlock;
