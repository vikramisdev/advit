"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Hamburger & Close Icons
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"; // ShadCN

export default function Navbar() {
    const pathname = usePathname();
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false); // Hide navbar when scrolling down
            } else {
                setIsVisible(true); // Show navbar when scrolling up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Prevent body scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-opacity-80 text-white backdrop-blur-[2px] md:px-10 px-6 md:pt-8 pt-6 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl font-semibold">
                    <span className="text-blue-400 font-light">Advit</span>{" "}
                    <span className="font-normal">Design Studio</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {/* Home */}
                    <li>
                        <Link
                            href="/"
                            className={`relative pb-2 hover:text-[#111] transition ${pathname === "/"
                                ? "text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-400"
                                : ""
                                }`}
                        >
                            Home
                        </Link>
                    </li>

                    {/* ShadCN Projects Dropdown */}
                    <NavigationMenu className="bg-transparent text-white font-medium">
                        <NavigationMenuList className="flex items-center space-x-6">
                            <NavigationMenuItem className="relative">
                                <NavigationMenuTrigger className="hover:text-[#111] font-normal hover:cursor-pointer transition-all bg-transparent h-fit p-0 m-0 shadow-none text-base focus:ring-0 focus:outline-none focus:bg-transparent data-[state=open]:focus:bg-transparent data-[state=open]:hover:bg-transparent hover:bg-transparent active:bg-transparent">
                                    <Link href="/projects">Projects</Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-white dark:bg-[#111]">
                                    <ul className="space-y-2">
                                        <li><NavigationMenuLink href="/projects/exterior">Exterior</NavigationMenuLink></li>
                                        <li><NavigationMenuLink href="/projects/interior">Interior</NavigationMenuLink></li>
                                        <li><NavigationMenuLink href="/projects/3d-walkthroughs">3D Walkthroughs</NavigationMenuLink></li>
                                        <li><NavigationMenuLink href="/projects/graphic-design">Graphic Design</NavigationMenuLink></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* About */}
                    <li>
                        <Link
                            href="/about"
                            className={`relative pb-2 hover:text-[#111] transition ${pathname === "/about"
                                ? "text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-400"
                                : ""
                                }`}
                        >
                            About
                        </Link>
                    </li>

                    {/* Contact */}
                    <li>
                        <Link
                            href="/contact"
                            className={`relative pb-2 hover:text-[#111] transition ${pathname === "/contact"
                                ? "text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-400"
                                : ""
                                }`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Hamburger Menu (Mobile) */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-gray-100 dark:bg-[#111] text-black dark:text-white p-6 shadow-lg transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header with "Advit" and Close Button */}
                <div className="flex justify-between items-center mb-8">
                    <span className="text-xl font-semibold">Advit</span>
                    <button className="text-black dark:text-white" onClick={toggleMenu}>
                        <X size={28} />
                    </button>
                </div>

                {/* Navigation Links (Updated Order) */}
                <ul className="space-y-6">
                    {/* Home */}
                    <li>
                        <Link
                            href="/"
                            className="block text-lg hover:text-blue-400 transition"
                            onClick={toggleMenu} // Close menu on click
                        >
                            Home
                        </Link>
                    </li>

                    {/* mobile projects */}
                    <li className="mt-4">
                        <span className="block text-lg font-semibold">Projects</span>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <Link href="/exterior" className="block text-lg hover:text-blue-400 transition" onClick={toggleMenu}>
                                    Exterior
                                </Link>
                            </li>
                            <li>
                                <Link href="/interior" className="block text-lg hover:text-blue-400 transition" onClick={toggleMenu}>
                                    Interior
                                </Link>
                            </li>
                            <li>
                                <Link href="/3d-walkthroughs" className="block text-lg hover:text-blue-400 transition" onClick={toggleMenu}>
                                    3D Walkthroughs
                                </Link>
                            </li>
                            <li>
                                <Link href="/graphic-design" className="block text-lg hover:text-blue-400 transition" onClick={toggleMenu}>
                                    Graphic Design
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* About */}
                    <li>
                        <Link
                            href="/about"
                            className="block text-lg hover:text-blue-400 transition"
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                    </li>

                    {/* Contact */}
                    <li>
                        <Link
                            href="/contact"
                            className="block text-lg hover:text-blue-400 transition"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
