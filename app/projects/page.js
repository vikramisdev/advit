"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import { ChevronDown } from "lucide-react";
import Footer from "../components/footer";

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

function Page() {
    const router = useRouter();

    const handleProjectClick = useCallback(
        (slug) => {
            router.push(`/projects/${slug}`);
        },
        [router]
    );

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section
                className="relative h-96 flex flex-col items-center justify-center text-white bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/1632788/pexels-photo-1632788.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')",
                }}
            >
                <h1 className="text-4xl md:text-6xl font-bold text-center">Collection</h1>
                <ChevronDown className="mt-4 animate-bounce w-8 h-8" />
            </section>

            {/* Projects Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-12">
                {projects.map(({ name, slug, img }, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden aspect-square rounded-lg flex items-center justify-center cursor-pointer bg-cover bg-center group"
                        style={{ backgroundImage: `url(${img})` }}
                        onClick={() => handleProjectClick(slug)}
                        role="button"
                        aria-label={`View ${name}`}
                    >
                        <div className="absolute inset-0 bg-black opacity-40 transition duration-300 group-hover:opacity-60"></div>
                        <h2 className="relative z-10 text-white text-3xl md:text-5xl font-light uppercase text-center transition duration-300 group-hover:scale-110">
                            {name}
                        </h2>
                    </div>
                ))}
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Page;
