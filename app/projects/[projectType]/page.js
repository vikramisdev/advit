"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { projectsList } from "../../data/services";


function SubProjectPage() {
    const { projectType } = useParams();
    const project = projectsList[projectType] || null;

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = (index) => {
        setCurrentIndex(index);
        setSelectedImage(project.images[index]);
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
        setTimeout(() => setSelectedImage(null), 300);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        const newIndex = (currentIndex - 1 + project.images.length) % project.images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(project.images[newIndex]);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        const newIndex = (currentIndex + 1) % project.images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(project.images[newIndex]);
    };

    if (!projectType) return <div className="h-screen flex justify-center items-center text-xl">Loading...</div>;
    if (!project) return <div className="h-screen flex justify-center items-center text-xl text-red-500">Project not found!</div>;

    return (
        <div>
            <Navbar />

            <div className="relative bg-cover bg-center flex justify-between px-8 flex-col md:flex-row md:px-28 py-24 md:gap-x-24 gap-y-6">
                <h1 className="text-6xl font-normal uppercase">{project.name}</h1>
                <h1 className="text-2xl font-thin">{project.description}</h1>
            </div>

            <motion.div
                className="grid grid-cols-2 gap-6 px-8 md:px-28 py-8 auto-rows-auto"
            >
                {project.images.map((img, index) => (
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
                            src={img}
                            alt={`Project ${project.name}`}
                            className="w-full h-auto max-h-[600px] object-contain transition-transform"
                            whileHover={{
                                scale: 1.1, // Slight zoom instead of extreme scaling
                                transition: { duration: 1.5, ease: "linear" }, // Smooth effect
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 backdrop-blur-[5px] bg-black/50 flex justify-center items-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeDialog}
                    >
                        <motion.div
                            className="relative bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button (Fixed Position) */}
                            <button className="absolute top-2 right-2 hidden md:block cursor-pointer bg-gray-200 p-1 md:p-2 rounded-full hover:bg-gray-300 transition z-50" onClick={closeDialog}>
                                <X className="size-6" />
                            </button>

                            {/* Image Section */}
                            {selectedImage && (
                                <div className="relative w-full md:w-1/2 flex justify-center">
                                    {/* Left Arrow */}
                                    <button className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer bg-gray-200 p-1 md:p-2 rounded-full hover:bg-gray-300 transition z-50" onClick={prevImage}>
                                        <ChevronLeft size={28} />
                                    </button>

                                    <img src={selectedImage} alt="Expanded view" className="w-full h-auto shadow-lg" />

                                    {/* Right Arrow */}
                                    <button className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer bg-gray-200 p-1 md:p-2 rounded-full hover:bg-gray-300 transition z-50" onClick={nextImage}>
                                        <ChevronRight size={28} />
                                    </button>
                                </div>
                            )}

                            {/* Text Section */}
                            <div className="w-full md:w-1/2 p-4 text-center md:text-left">
                                <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                                <p className="text-gray-700">{project.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}

export default SubProjectPage;
