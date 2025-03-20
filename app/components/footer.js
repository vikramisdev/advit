"use client";

import { FaLinkedin, FaPinterest, FaFacebook, FaWhatsapp, FaBehance, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="text-white bg-black py-20 px-12 md:px-12 flex flex-col md:flex-row md:justify-between items-start md:items-center">
            {/* Company Details */}
            <div className="text-left">
                <h2 className="text-2xl font-bold">ADVIT</h2>
                <p className="text-sm text-gray-400">Design & Motion Studio</p>
                <p className="text-sm mt-2">Nashik 422001, Maharashtra, India</p>
                <p className="text-sm">Mail: <a href="mailto:advitdesign@gmail.com" className="text-blue-400 hover:underline">advitdesign@gmail.com</a></p>
                <p className="text-sm">Tel: <a href="tel:+917028773502" className="text-blue-400 hover:underline">+91 7028773502</a></p>
                <p className="text-sm mt-4">© {new Date().getFullYear()} by Advit Studio</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaPinterest /></a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaFacebook /></a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaWhatsapp /></a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaBehance /></a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
            </div>
        </footer>
    );
}
