"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import { ChevronDown } from "lucide-react";
import Footer from "../components/footer";

function Page() {
    const router = useRouter();

    // Project Data
    const projects = [
        {
            name: "Exterior",
            slug: "exterior",
            img: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            name: "Interior",
            slug: "interior",
            img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            name: "3D Walkthroughs",
            slug: "3d-walkthroughs",
            img: "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            name: "Graphic Design",
            slug: "graphic-design",
            img: "https://images.pexels.com/photos/1080865/pexels-photo-1080865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ];

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div
                className="relative h-[100vh] bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/1632788/pexels-photo-1632788.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')",
                }}
            >
                <h1 className="text-4xl md:text-6xl font-bold text-center">Collection</h1>
                <ChevronDown className="mt-4 animate-bounce w-8 h-8" />
            </div>

            {/* Projects Grid (Responsive Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 sm:p-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden aspect-square flex items-center justify-center cursor-pointer bg-cover bg-center group"
                        style={{ backgroundImage: `url(${project.img})` }}
                        onClick={() => router.push(`/projects/${project.slug}`)} // Navigate on click
                    >
                        <div className="opacity-35 bg-black absolute inset-0 transition duration-300 group-hover:opacity-50"></div>
                        <h2 className="relative z-10 text-white text-4xl md:text-6xl font-thin uppercase text-center transition duration-300 group-hover:scale-105">
                            {project.name}
                        </h2>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Page;
