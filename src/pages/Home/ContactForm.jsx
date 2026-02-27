import React from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email(),
  number: z
    .string()
    .min(10, { message: "Contact number must be 10 digits" })
    .max(10, { message: "Contact number must be 10 digits" }),
  option: z.string().min(1, { message: "Please select a service" }),
  textarea: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    const templateParams = {
      user_name: data.name,
      user_email: data.email,
      user_number: data.number,
      service_option: data.option,
      message: data.textarea,
    };

    emailjs.send(
  import.meta.env.VITE_EMAIL_SERVICE_ID,
  import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAIL_PUBLIC_KEY
)
      .then(
        (response) => {
          alert("Message sent successfully ✅");
          reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error);
        }
      );
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Your Name"
        {...register("name")}
        className="border px-4 py-3 rounded-lg"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Your Email"
        {...register("email")}
        className="border px-4 py-3 rounded-lg"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        type="text"
        placeholder="Contact Number"
        {...register("number")}
        className="border px-4 py-3 rounded-lg"
      />
      {errors.number && <p className="text-red-500">{errors.number.message}</p>}

      <select {...register("option")} className="border px-4 py-3 rounded-lg">
        <option value="">Select Service</option>
        <option>SEO</option>
        <option>PPC Advertising</option>
        <option>Social Media Marketing</option>
        <option>Web Design</option>
        <option>Brand Strategy</option>
      </select>
      {errors.option && <p className="text-red-500">{errors.option.message}</p>}

      <textarea
        rows="4"
        placeholder="Enter your message"
        {...register("textarea")}
        className="border px-4 py-3 rounded-lg"
      ></textarea>
      {errors.textarea && (
        <p className="text-red-500">{errors.textarea.message}</p>
      )}

      <button
        type="submit"
        className="bg-[#2F36C6] text-white py-3 rounded-xl"
      >
        Submit Request
      </button>
    </form>
  );
};

export default ContactForm;