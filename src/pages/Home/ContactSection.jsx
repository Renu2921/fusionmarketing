import React from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ContactForm from "./ContactForm";

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


const ContactSection = () => {

    const {register, reset, handleSubmit, formState:{errors}}=useForm({
        resolver:zodResolver(formSchema)
    })

    const onSubmit=(data)=>{
    console.log(data);
    }
  return (
    <section className="w-full  py-20">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-[4.5rem] font-bold text-gray-900 leading-tight">
            Get Ready to Grow Your <br />
            <span className="text-[#2F36C6]"> Business</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-md">
            Let’s discuss how our digital marketing strategies can help you
            increase traffic, leads, and revenue.
          </p>
        </div>

        <div className="border border-[#2F36C6] bg-white rounded-2xl shadow-lg p-10">
          <ContactForm/>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
