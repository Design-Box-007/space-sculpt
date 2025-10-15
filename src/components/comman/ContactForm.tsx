"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactForm as ContactFormType } from "@/types";

// Validation schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^\d+$/, "Mobile number must be a number"),
  location: z.string().min(1, "Location is required"),
  message: z.string().min(1, "Message is required"),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (formData: ContactFormType) => {
    setLoading(true);

    const res = await sendEmail(formData);

    if (res.success) {
      toast.success("Message sent successfully!");
      setTimeout(() => window.location.reload(), 2000);
    } else {
      toast.error("Failed to send email. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="relative rounded-xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/hero1.png')] bg-cover bg-center bg-no-repeat filter brightness-50"></div>

      {/* Content */}
      <div className="relative text-white p-8">
        <h2 className="text-3xl font-semibold">Book a Free Consultation</h2>
        <p className="italic text-sm mb-6"></p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="relative z-0 w-full">
              <input
                type="text"
                {...register("name")}
                className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white"
                placeholder=" "
              />
              <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Name
              </label>
              {errors.name && (
                <p className="text-yellow-300 text-xs">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="relative z-0 w-full">
              <input
                type="email"
                {...register("email")}
                className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white"
                placeholder=" "
              />
              <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email
              </label>
              {errors.email && (
                <p className="text-yellow-300 text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Mobile & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Mobile */}
            <div className="relative z-0 w-full">
              <input
                type="text"
                {...register("mobile")}
                className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white"
                placeholder=" "
              />
              <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Mobile No
              </label>
              {errors.mobile && (
                <p className="text-yellow-300 text-xs">
                  {errors.mobile.message}
                </p>
              )}
            </div>

            {/* Location */}
            <div className="relative z-0 w-full">
              <input
                type="text"
                {...register("location")}
                className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white"
                placeholder=" "
              />
              <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Location
              </label>
              {errors.location && (
                <p className="text-yellow-300 text-xs">
                  {errors.location.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="relative z-0 w-full">
            <textarea
              {...register("message")}
              className="peer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white resize-none"
              rows={3}
              placeholder=" "
            ></textarea>
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              How can we help you?
            </label>
            {errors.message && (
              <p className="text-yellow-300 text-xs">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-white text-red-600 font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
