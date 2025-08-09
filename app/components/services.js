"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ContentBlock from "./contentblock";
import { servicesData } from "../data/services";

export default function Services() {
    const { scrollYProgress } = useScroll();

    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });

    const y = useTransform(smoothScroll, [0, 1], ["0%", "-10%"]);
    const opacity = useTransform(smoothScroll, [0, 0.3], [0, 1]);

    return (
        <motion.section
            style={{ y, opacity }}
            className="mx-auto md:px-6 py-12 space-y-12 mt-6 bg-gray-50 dark:bg-[#111]"
        >
            {servicesData.map((service) => (
                <ContentBlock key={service.id} {...service} />
            ))}
        </motion.section>
    );
}
