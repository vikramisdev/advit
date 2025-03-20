import React from 'react';
import Navbar from '../components/navbar';

function Page() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-12">
                {/* Left - Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://images.pexels.com/photos/19803079/pexels-photo-19803079/free-photo-of-woman-drinking-coffee-with-milk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="About Image"
                        className="w-full md:h-[100vh] h-[calc(100vh/2)]"
                    />
                </div>

                {/* Right - Text Content */}
                <div className="w-full md:w-1/2 px-8 md:px-0 py-4 md:py-0">
                    <h2 className="md:text-8xl text-4xl font-normal text-gray-800 mb-4">About</h2>
                    <h3 className="text-2xl font-semibold text-gray-600 mb-3">Advit is an architectural design & motion studio based in India.</h3>
                    <p className="text-gray-600 text-lg">
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
