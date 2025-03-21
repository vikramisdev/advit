"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";

export default function QuoteForm() {
    const {
        register,
        handleSubmit,
        reset, // ✅ Reset function
        formState: { errors },
    } = useForm();

    const [fileName, setFileName] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Email sending failed");

            toast.success("Quote request submitted successfully!")

            // ✅ Reset form fields and clear file name
            reset();
            setFileName("");

            setLoading(false);
        } catch (error) {
            console.error(error);
            toast.error("Failed to send email. Please try again.");
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-50 dark:bg-[#111111] flex items-center justify-center min-h-screen p-6">
            <div className="flex w-full gap-24 overflow-hidden">
                {/* Image Section */}
                <div className="hidden md:block w-1/2 relative">
                    <Image
                        src="/images/cool_form.svg"
                        alt="Cool Quote Image"
                        width={500}
                        height={500}
                        className="rounded-l-lg rounded-full p-12 size-full"
                    />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 md:p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                        Get a Quote
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Name</label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                                })}
                                className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Phone Number</label>
                            <input
                                type="tel"
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" }
                                })}
                                className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your phone number"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Upload File</label>
                            <input
                                type="file"
                                {...register("file", { required: "File is required" })}
                                className="w-full border rounded py-2 px-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                onChange={(e) => setFileName(e.target.files[0]?.name || "")}
                            />
                            {fileName && <p className="text-gray-500 text-sm mt-1">{fileName}</p>}
                            {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Message</label>
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                                rows="4"
                                placeholder="Enter your message"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </div>

                        <Button
                            type="submit"
                            className="w-full cursor-pointer py-6 rounded-none relative overflow-hidden group text-white"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin mr-2" size={18} />
                                    Submitting...
                                </>
                            ) : (
                                    <span className="relative z-20 transition-all group-hover:text-black duration-500 ease-in-out">
                                        Get Quote
                                    </span>
                            )}

                            {/* Green Overlay (No Text) */}
                            <span className="absolute hidden md:block inset-0 bg-blue-400 h-0 group-hover:h-full transition-all duration-300 ease-in-out"></span>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
