"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ContentBlock from "./contentblock";
import { servicesData } from "../data/services";

export default function Services() {
    const { scrollYProgress } = useScroll();

    // Use a spring-based transform for smoother motion
    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100, // Controls resistance (higher = less bouncy)
        damping: 20, // Controls speed of settling (higher = slower)
        mass: 0.5, // Adjusts how heavy the motion feels
    });

    // Parallax & fade-in effect
    const y = useTransform(smoothScroll, [0, 1], ["0%", "-10%"]); // Bigger shift for a stronger effect
    const opacity = useTransform(smoothScroll, [0, 0.3], [0, 1]); // Smoother fade-in

    return (
        <motion.section
            style={{ y, opacity }}
            className="mx-auto md:px-6 py-12 space-y-12 mt-6 bg-gray-50 dark:bg-[#111]"
        >
            {/* <h1 className="text-4xl font-bold mb-8 mx-6">Our Interior Services</h1> */}
            {servicesData.map((service) => (
                <ContentBlock key={service.id} {...service} />
            ))}
        </motion.section>
    );
}
