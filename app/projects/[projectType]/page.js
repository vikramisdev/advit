"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = {
    exterior: {
        name: "Exterior",
        description: "Explore stunning exterior designs that blend creativity with functionality.",
        img: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        images: [
            "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
            "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
        ],
    },
    interior: {
        name: "Interior",
        description: "Discover elegant and modern interior designs tailored to perfection.",
        img: "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg",
        images: [
            "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg",
            "https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg",
        ],
    },
};

function SubProjectPage() {
    const { projectType } = useParams();
    const project = projects[projectType] || null;

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

            <div className="relative h-[50vh] bg-cover bg-center flex flex-col items-center justify-center text-white" style={{ backgroundImage: `url(${project.img})` }}>
                <h1 className="text-5xl font-bold uppercase">{project.name}</h1>
            </div>

            <div className="flex flex-wrap gap-3 p-6">
                {project.images.map((img, index) => (
                    <div key={index} className="w-[calc(50%-6px)] rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => openDialog(index)}>
                        <img src={img} alt={`Project ${project.name}`} className="w-full h-auto object-cover" />
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeDialog}
                    >
                        <motion.div
                            className="relative bg-white rounded-xl shadow-xl p-6 max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition" onClick={closeDialog}>
                                <X size={24} />
                            </button>
                            {selectedImage && (
                                <div className="w-full md:w-1/2 flex justify-center relative">
                                    <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition" onClick={prevImage}>
                                        <ChevronLeft size={24} />
                                    </button>
                                    <img src={selectedImage} alt="Expanded view" className="w-full h-auto rounded-lg shadow-lg" />
                                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition" onClick={nextImage}>
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            )}
                            <div className="w-full md:w-1/2 p-4">
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
