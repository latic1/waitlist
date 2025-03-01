"use client";
import HeaderComponent from "@/components/header";
import { useState } from "react";
import Snowfall from "react-snowfall";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { ArrowBigLeft, ListFilterPlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isDirty, isValid },
    reset,
  } = useForm({
    defaultValues: { email: "" },
  });

  // Dummy data for testimonials (replace with real data)
  const people = [
    { id: 1, name: "John Doe", href: "/john", image: "/john.jpg" },
    { id: 2, name: "Jane Smith", href: "/jane", image: "/jane.jpg" },
  ];

  // Email validation function
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  // Form submission handler
  const onSubmit = async (data: string) => {
    console.log("Form submitted:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    reset(); // Reset form after submission
  };

  // Mouse move handler for Image (optional)
  const handleMouseMove = () => {
    // console.log("Mouse moved:", e.clientX, e.clientY);
  };

  return (
    <div className="h-full w-full p-3 flex items-center justify-center relative z-50">
      <Snowfall
        color="gray"
        snowflakeCount={200}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -9,
        }}
      />

      <div className="mt-5">
        <div className="space-y-4">
          <div className="space-y-2 text-center">
            <div className="flex justify-center">
              <Image
                src="/file.png"
                alt="Placeholder"
                width={128}
                height={128}
                className="w-32 h-32"
              />
            </div>
            <div className="flex items-center justify-center">
              <span>👋</span>
              <div className="p-[1px] bg-transparent relative">
                <div className="p-2">
                  <span className="absolute inset-0 px-3 rounded-3xl overflow-hidden">
                    <motion.span
                      className="w-[500%] aspect-square absolute bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-50"
                      initial={{ rotate: -90 }}
                      animate={{ rotate: 90 }}
                      transition={{
                        duration: 3.8,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      style={{
                        translateX: "-50%",
                        translateY: "-10%",
                        zIndex: -1,
                      }}
                    />
                  </span>
                  <span className="bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:to-gray-500">
                    Learn, Build, and Grow with Expert-Led Courses{" "}
                  </span>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-800 capitalize md:max-w-2xl lg:max-w-3xl mx-auto">
              Get Early Access to the Ultimate Course Community!
            </h1>
            <p className="max-w-[600px] leading-7 text-center text-[16px] bg-clip-text text-transparent bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-700 mx-auto">
              Unlock exclusive courses, actionable resources, and a thriving
              community of creators. Join the waitlist now to be the first to
              know when we launch!
            </p>
          </div>

          <div className="w-full space-y-2">
            <form
              // onSubmit={}
              className="flex flex-col lg:flex-row mx-auto lg:space-x-2 max-w-lg"
            >
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    placeholder="Email"
                    className={`flex-1 py-2.5 outline-none focus:border-2 focus:border-neutral-100 dark:border bg-opacity-20 shadow-md border border-neutral-400 dark:text-white dark:border-white/20 placeholder:text-neutral-500 pl-5 rounded-lg focus-within:border-none ${
                      isDirty && !isValid
                        ? "bg-[#f5a524]"
                        : isDirty && isValid
                        ? "bg-green-500"
                        : ""
                    }`}
                  />
                )}
                rules={{
                  required: "Email is required!",
                  validate: (value) =>
                    validateEmail(value) || "Invalid email format",
                }}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
              <button
                disabled={isSubmitting}
                className="flex items-center justify-center gap-x-3 bg-gradient-to-tr from-black from-50% via-black/40 to-gray-600/40 border-t-gray-700 disabled:cursor-not-allowed lg:w-36 shadow-md border border-b-0 border-r-0 border-l-0 bg-black mt-4 lg:mt-0 rounded-md px-2 py-2.5 w-full font-medium text-sm text-gray-200 dark:text-gray-500"
                type="submit"
              >
                <ListFilterPlus className="text-[#383127]" />
                {isSubmitting ? (
                  "Loading..."
                ) : (
                  <span className="shrink-0">Reserve My Spot</span>
                )}
              </button>
            </form>

            {/* Testimonials Section */}
            <div className="flex justify-center gap-4 mt-4">
              {people.map((testimonial) => (
                <div
                  className="relative group"
                  key={testimonial.id}
                  onMouseEnter={() => setHoveredIndex(null)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link href={testimonial.href}>
                    <Image
                      onMouseMove={handleMouseMove}
                      height={44}
                      width={44}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover hidden lg:block rounded-full h-11 w-11 group-hover:scale-105 group-hover:z-30 relative transition duration-500"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
