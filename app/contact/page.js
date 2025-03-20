"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // ShadCN toast notifications

function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);

        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                toast.success("Message sent successfully!");
                reset(); // Reset the form
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error("Something went wrong! 🚨");
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Navbar />

            {/* Contact Section */}
            <section className="container mx-auto px-6 py-12 mt-[60px] flex flex-col md:flex-row gap-12">

                {/* Left - Contact Form */}
                <div className="w-full md:w-1/2 bg-white p-8 rounded-md">
                    <img
                        src="https://images.pexels.com/photos/3878622/pexels-photo-3878622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Contact Us"
                        className="w-full h-40 object-cover rounded-md mb-6"
                    />
                    <h2 className="text-[2rem] md:text-8xl font-thin text-gray-900 mb-4">Lets Connect</h2>
                    <p className="text-[1rem] text-gray-700 mb-6">
                        Reach out to us and well respond as soon as possible.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                        <div>
                            <label className="text-gray-800 font-medium">Your Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                {...register("name", { required: "Name is required" })}
                                className="mt-1 w-full border border-gray-300 px-4 py-3 rounded-md"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label className="text-gray-800 font-medium">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email format",
                                    },
                                })}
                                className="mt-1 w-full border border-gray-300 px-4 py-3 rounded-md"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className="text-gray-800 font-medium">Your Message</label>
                            <textarea
                                placeholder="Type your message..."
                                {...register("message", { required: "Message cannot be empty" })}
                                className="mt-1 w-full border border-gray-300 px-4 py-3 rounded-md h-36"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                        </div>
                        <Button type="submit" className="w-full bg-black py-5 text-white rounded-none cursor-pointer font-medium" disabled={isLoading}>
                            {isLoading ? (
                                <div className="flex items-center gap-2">
                                    <Loader2 className="animate-spin" size={20} />
                                    Submitting...
                                </div>
                            ) : (
                                "Send Message"
                            )}
                        </Button>
                    </form>
                </div>

                {/* Right - Contact Details & Map */}
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <div className="bg-white p-8 rounded-md">
                        <img
                            src="https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Contact Us"
                            className="w-full h-40 object-cover rounded-md mb-6"
                        />
                        <h3 className="text-[1.5rem] md:text-4xl font-normal text-gray-900 mb-4">Contact Details</h3>
                        <div className="flex items-center gap-4 text-gray-700 mb-2">
                            <MapPin className="text-blue-600" size={24} />
                            <p>Nashik 422001, Maharashtra, India</p>
                        </div>
                        <div className="flex items-center gap-4 text-gray-700 mb-2">
                            <Phone className="text-blue-600" size={24} />
                            <p>+91 7028773502</p>
                        </div>
                        <div className="flex items-center gap-4 text-gray-700 mb-2">
                            <Mail className="text-blue-600" size={24} />
                            <p>advitdesign@gmail.com</p>
                        </div>
                        <p className="text-gray-700 mt-3">🕘 Monday - Friday: 9 AM - 6 PM</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="bg-white p-8 rounded-md">
                        <h3 className="text-[1.5rem] md:text-2xl font-normal text-gray-900 mb-4">Follow Us</h3>
                        <div className="flex flex-wrap gap-4">
                            {[{ icon: Facebook, url: "https://facebook.com", name: "Facebook" },
                            { icon: Twitter, url: "https://twitter.com", name: "Twitter" },
                            { icon: Instagram, url: "https://instagram.com", name: "Instagram" },
                            { icon: Linkedin, url: "https://linkedin.com", name: "LinkedIn" }
                            ].map((social, index) => (
                                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-gray-800 rounded-full border border-gray-700 hover:bg-gray-100 transition">
                                    <social.icon size={24} />
                                    <span className="hidden md:inline">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Google Map Embed */}
                    <iframe className="w-full h-64 rounded-md"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2196.2717689593715!2d73.78488685498546!3d20.006265493368893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1742451744657!5m2!1sen!2sin"
                        allowFullScreen="" loading="lazy"></iframe>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ContactPage;
