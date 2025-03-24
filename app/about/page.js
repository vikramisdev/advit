import React from 'react';
import Navbar from '../components/navbar';

function Page() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-12">
                {/* Left - Image */}
                <div className="w-full md:w-2/4 bg-red-400">
                    <img
                        src="https://img.freepik.com/free-photo/ai-generated-modern-styled-entryway_23-2150692325.jpg?t=st=1742826573~exp=1742830173~hmac=af3d6113df760c133b217d6c52ab8814b331658de35afe5d0547fadfe697b4c5&w=740"
                        alt="About Image"
                        className="md:h-[100vh] w-full h-[20rem] md:h-auto"
                    />
                </div>

                {/* Right - Text Content */}
                <div className="w-full px-8 md:px-0 py-4 md:py-0">
                    <h2 className="md:text-8xl text-4xl font-normal text-gray-800 mb-4 dark:text-gray-300">About</h2>
                    <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-3"><span className="text-blue-400">Advit</span> is an architectural design & motion studio based in India.</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Advit is one of the leading architectural visualization firms in India. Advit specializes in creating realistic illustrations for various sectors, including Residential, Commercial, Industrial, and more.
                        <br /><br />
                        We work closely with architects, interior designers, and developers worldwide to understand their needs and transform their ideas, designs, and visions into breathtaking 3D visuals.
                        <br /><br />
                        We can enrich your marketing promotion for your commercial and residential properties, hotels, and retail buildings. We bring new designs to virtual 3D life, allowing you to see everything in its glory as though it was already built or produced. We are often an aid to architectural design throughout the process of preparing marketing material.
                        <br /><br />
                        Our company provides a complete range of digital visualization services in the field of CG Architecture, offering a one-stop solution for all your 3D presentation needs. All our services are a cost-effective solution that adds great value to your marketing, advertising, and creative needs.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page;
