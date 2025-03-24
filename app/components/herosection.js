"use client"

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Logo moves up & scales slightly on scroll
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <div ref={ref} className="relative w-full h-screen overflow-hidden">
            {/* Background Video with Cinematic Zoom Effect */}
            <motion.video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay loop muted playsInline
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 5, ease: "easeOut" }}
            >
                <source src="/videos/house_interior_design.mp4" type="video/mp4" />
            </motion.video>

            {/* Adjusted Overlay with Less Opacity */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/30 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.8 }}
            >
                {/* Animated Logo with Scroll Effect */}
                <motion.div
                    style={{ y, scale }}
                    initial={{ y: 50, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative flex flex-col items-center"
                >
                    <Image
                        src="/images/advit_center.avif"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="md:size-96 dark:invert-100"
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}
