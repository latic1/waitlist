"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";
import { useState } from "react";

// type Props = {};

const Icons = [
  { id: "twitter", name: <Twitter />, href: "https://x.com/latif1" },
  {
    id: "linkedin",
    name: <Linkedin />,
    href: "https://linkedin.com/in/latif-musah",
  },
  { id: "github", name: <Github />, href: "https://github.com/latic1" },
];

const HeaderComponent = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex justify-between md:max-w-5xl max-w-lg mx-auto lg:mt-16 mt-11 md:px-8 px-9">
      <div className="flex gap-x-3 items-center">
        {/* Fixed the Switch component props passing */}
        <Switch checked={checked} setIsDarkMode={setChecked} />

        <p className="text-sm dark:text-white hidden md:block">
          Download as Template
        </p>
      </div>
      <div className="flex gap-x-6">
        {Icons.map((icon) => (
          <div
            key={icon.id}
            className="hover:text-neutral-600 cursor-pointer transition-all ease-in text-xl  duration-200 "
          >
            <Link href={icon.href} className="">{icon.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

type SwitchProps = {
  checked: boolean;
  setIsDarkMode: (checked: boolean) => void;
};

// Switch Component
const Switch = ({ checked, setIsDarkMode }: SwitchProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  console.log("theme",resolvedTheme);
  
  const otherTheme = resolvedTheme === "dark" ? "light" : "dark";

  //   const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log("tt", otherTheme);

  //     const newChecked = e.target.checked;
  //     // setIsDarkMode(newChecked);
  //     // setTheme(otherTheme);
  //     // if (setTheme) {
  //     //   setTheme(newChecked ? "dark" : "light");
  //     // }
  //   };

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsDarkMode(newChecked);
    setTheme(otherTheme);
  };

  return (
    <form className="flex space-x-4 items-center">
      <label
        htmlFor="checkbox"
        className={cn(
          "h-7 px-1 flex items-center rounded-full w-[60px] cursor-pointer transition duration-200",
          checked ? "bg-cyan-500" : "bg-[#07070A]"
        )}
      >
        <motion.div
          initial={{ width: "20px", x: checked ? 0 : 32 }}
          animate={{
            height: ["20px", "10px", "20px"],
            width: ["20px", "30px", "20px", "20px"],
            x: checked ? 32 : 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          className={cn("h-[20px] block rounded-full bg-white shadow-md z-10")}
        />
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleTheme}
          className="absolute opacity-0 w-0 h-0"
          id="checkbox"
        />
      </label>
    </form>
  );
};

export default HeaderComponent;
