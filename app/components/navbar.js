"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Hamburger & Close Icons
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"; // ShadCN
import { useTheme } from "next-themes";
import ThemeSwitcher from "./themeswitcher";

export default function Navbar() {
    const pathname = usePathname();
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef(null);

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
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                toggleMenu();
            }
        }

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "hidden"; // Prevent scrolling
        } else {
            document.body.style.overflow = ""; // Restore scrolling
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = ""; // Ensure scrolling is restored
        };
    }, [isMenuOpen]);


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-opacity-80 text-black backdrop-blur-[2px] md:px-10 px-6 md:pt-8 pt-6 z-50 transition-transform duration-100 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl">
                    <span className="text-blue-400 font-light">Advit</span>{" "}
                    <span className="font-medium dark:text-white">Design Studio</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 dark:text-white">
                    {/* Home */}
                    <li>
                        <Link
                            href="/"
                            className={`relative pb-2 hover:text-blue-400 transition ${pathname === "/"
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
                                <NavigationMenuTrigger className="hover:text-blue-400 dark:text-white text-black font-normal hover:cursor-pointer transition-all bg-transparent h-fit p-0 m-0 shadow-none text-base focus:ring-0 focus:outline-none focus:bg-transparent data-[state=open]:focus:bg-transparent data-[state=open]:hover:bg-transparent hover:bg-transparent active:bg-transparent">
                                    <Link href="/projects">Projects</Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-white dark:bg-[#111]">
                                    <ul className="space-y-2">
                                        <li><NavigationMenuLink href="/projects/exterior">Exterior</NavigationMenuLink></li>
                                        <li><NavigationMenuLink href="/projects/interior">Interior</NavigationMenuLink></li>
                                        <li><NavigationMenuLink href="/projects/walkthroughs">3D Walkthroughs</NavigationMenuLink></li>
                                        <li><NavigationMenuLink href="/projects/graphicdesign">Graphic Design</NavigationMenuLink></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* About */}
                    <li>
                        <Link
                            href="/about"
                            className={`relative pb-2 hover:text-blue-400 transition ${pathname === "/about"
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
                            className={`relative pb-2 hover:text-blue-400 transition ${pathname === "/contact"
                                ? "text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-400"
                                : ""
                                }`}
                        >
                            Contact
                        </Link>
                    </li>

                    <ThemeSwitcher />
                </ul>

                {/* Hamburger Menu (Mobile) */}
                <button
                    className="md:hidden text-black focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`fixed top-0 right-0 h-screen w-64 bg-gray-100 dark:bg-[#111] text-black dark:text-white p-6 shadow-xl transition-all duration-100 transform ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
            >
                {/* Header with "Advit" and Close Button */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-300 dark:border-gray-800">
                    <span className="text-xl font-semibold">Advit</span>
                    <button className="text-black dark:text-white" onClick={toggleMenu}>
                        <X size={28} />
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className="mt-6 space-y-4">
                    <li>
                        <Link href="/" className="block text-lg font-medium hover:text-blue-500 transition" onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>

                    {/* Projects Section */}
                    <li>
                        <span className="block text-lg font-semibold">Projects</span>
                        <ul className="mt-2 space-y-2 pl-5 border-l-2 border-gray-300 dark:border-gray-700">
                            <li>
                                <Link href="/projects/exterior" className="block text-lg hover:text-blue-400 transition" onClick={toggleMenu}>
                                    Exterior
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects/interior" className="block text-lg hover:text-blue-400 transition" onClick={toggleMenu}>
                                    Interior
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects/walkthroughs" className="block text-lg hover:text-blue-400 transition" onClick={toggleMenu}>
                                    3D Walkthroughs
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects/graphicdesign" className="block text-lg hover:text-blue-400 transition" onClick={toggleMenu}>
                                    Graphic Design
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link href="/about" className="block text-lg font-medium hover:text-blue-500 transition" onClick={toggleMenu}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="block text-lg font-medium hover:text-blue-500 transition" onClick={toggleMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Theme Switcher */}
                <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-800">
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
}
