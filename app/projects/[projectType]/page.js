"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { projectsList } from "../../data/services";


function SubProjectPage() {
    const { projectType } = useParams();
    const project = projectsList[projectType] || null;

    if (!projectType) return <div className="h-screen flex justify-center items-center text-xl">Loading...</div>;
    if (!project) return <div className="h-screen flex justify-center items-center text-xl text-red-500">Project not found!</div>;

    return (
        <div>
            <Navbar />

            <div className="relative bg-cover bg-center flex justify-between px-8 flex-col md:flex-row md:px-28 py-24 md:gap-x-24 gap-y-6">
                <h1 className="text-6xl font-normal uppercase">{project.name}</h1>
                <h1 className="text-2xl font-thin">{project.description}</h1>
            </div>

            {/* rendered images */}
            <motion.div className="md:flex gap-12 px-8 md:px-28 py-8">
                {/* Left Column */}
                <div className="md:w-1/2 space-y-12">
                    {Array.from({ length: project.imgCount }, (_, index) =>
                        index % 2 === 0 ? ( // Add even-indexed images to the left column
                            <motion.div
                                key={index}
                                className="overflow-hidden shadow-lg cursor-pointer group bg-black"
                                onClick={() => openDialog(index)}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <motion.img
                                    src={`${project.images}img (${index + 1}).jpg`}
                                    alt={`Project Image ${index + 1}`}
                                    className="w-full h-auto object-cover transition-transform"
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 1.5, ease: "linear" },
                                    }}
                                />
                            </motion.div>
                        ) : null
                    )}
                </div>

                {/* Right Column */}
                <div className="md:w-1/2 space-y-12">
                    {Array.from({ length: project.imgCount }, (_, index) =>
                        index % 2 !== 0 ? ( // Add odd-indexed images to the right column
                            <motion.div
                                key={index}
                                className="overflow-hidden shadow-lg cursor-pointer group bg-black"
                                onClick={() => openDialog(index)}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >S
                                <motion.img
                                    src={`${project.images}img (${index + 1}).jpg`}
                                    alt={`Project Image ${index + 1}`}
                                    className="w-full h-auto object-cover transition-transform"
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 1.5, ease: "linear" },
                                    }}
                                />
                            </motion.div>
                        ) : null
                    )}
                </div>
            </motion.div>

            <Footer />
        </div>
    );
}

export default SubProjectPage;
