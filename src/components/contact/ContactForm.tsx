"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email format"),
    mobile: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits"),
    location: z.string().min(2, "Location must be at least 2 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        location: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const validation = contactSchema.safeParse(formData);

        if (!validation.success) {
            validation.error.errors.forEach((err) => {
                toast.error(err.message);
            });
            setLoading(false);
            return;
        }

        try {
            console.log("Form Data Submitted:", formData);
            toast.success("Form submitted successfully!");
            setFormData({ name: "", email: "", mobile: "", location: "", message: "" });
        } catch (error) {
            toast.error("Something went wrong, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#323232] text-white p-8 rounded-xl">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>
            <p className="italic text-sm mb-6">{" // Reach out today and take the first step towards a brighter display experience."}</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="relative z-0 w-full">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white"
                            placeholder=" "
                        />
                        <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Name
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative z-0 w-full">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white"
                            placeholder=" "
                        />
                        <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email
                        </label>
                    </div>
                </div>

                {/* Mobile & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Mobile No */}
                    <div className="relative z-0 w-full">
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white"
                            placeholder=" "
                        />
                        <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Mobile No
                        </label>
                    </div>

                    {/* Location */}
                    <div className="relative z-0 w-full">
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white"
                            placeholder=" "
                        />
                        <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Location
                        </label>
                    </div>
                </div>

                {/* Message */}
                <div className="relative z-0 w-full">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white resize-none"
                        rows={3}
                        placeholder=" "
                    ></textarea>
                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        How can we help you?
                    </label>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-primary text-white font-semibold py-3 rounded-lg transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200 hover:text-primary"}`}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
