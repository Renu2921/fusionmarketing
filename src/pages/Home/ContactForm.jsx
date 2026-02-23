import React from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" }),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),

  number: z
    .string()
    .min(10, { message: "Contact number must be at least 10 digits" })
    .max(10, { message: "Contact number must be 10 digits" })
    .regex(/^[0-9]+$/, { message: "Only numbers are allowed" }),

  option: z
    .string()
    .min(1, { message: "Please select a service" }),

  textarea: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});


const ContactForm = () => {

    const {register, reset, handleSubmit, formState:{errors}}=useForm({
        resolver:zodResolver(formSchema)
    })

    const onSubmit=(data)=>{
    console.log(data);
    }
  return (

          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

            <input
            name="name"
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F36C6]"
              {...register("name")}
            />
             {errors.name && (
                 <p className="text-red-500 text-sm">{errors.name.message}</p>
             )}
            <input
            name="email"
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F36C6]"
               {...register("email")}
            />
             {errors.email && (
                 <p className="text-red-500 text-sm">{errors.email.message}</p>
             )}
            <input
            name="number"
              type="number"
              placeholder="Contact Number"
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F36C6]"
               {...register("number")}
            />
            {errors.number && (
                 <p className="text-red-500 text-sm">{errors.number.message}</p>
             )}
            <select
            name="option"
              className="border border-gray-300 px-4 py-3 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2F36C6]"
               {...register("option")}
            >
              <option value="">Select Service</option>
              <option>SEO</option>
              <option>PPC Advertising</option>
              <option>Social Media Marketing</option>
              <option>Web Design</option>
              <option>Brand Strategy</option>
            </select>
             {errors.option && (
                 <p className="text-red-500 text-sm">{errors.option.message}</p>
             )}
            <textarea
            name="textarea"
              rows="4"
              placeholder="Enter your message"
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F36C6]"
                {...register("textarea")}
            ></textarea>
              {errors.textarea && (
                 <p className="text-red-500 text-sm">{errors.textarea.message}</p>
             )}
            <button
              type="submit"
              className="mt-4 bg-[#2F36C6] text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Submit Request
            </button>

          </form>

  );
};

export default ContactForm;
