import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiVercel } from "react-icons/si";
import { FaReact } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#434242] text-white p-4 text-center">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-1 mb-4 w-full">
          <img
            src="images//HeaderIcon.png"
            alt="Logo 1"
            className="h-15 w-auto"
          />
          <div className="static sm:absolute sm:left-1/2 flex items-center justify-center gap-4 py-4">
            {/* Next.js Icon */}
            <TbBrandNextjs size={20} className="text-white block sm:hidden" />
            <TbBrandNextjs size={40} className="text-white hidden sm:block" />

            <span className="text-white text-2xl">×</span>

            {/* TypeScript Icon */}
            <SiTypescript size={20} className="text-white block sm:hidden" />
            <SiTypescript size={40} className="text-white hidden sm:block" />

            <span className="text-white text-2xl">×</span>

            {/* React Icon */}
            <FaReact size={20} className="text-white block sm:hidden" />
            <FaReact size={40} className="text-white hidden sm:block" />

            <span className="text-white text-2xl">×</span>

            {/* shadcn/ui */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center text-[8px] sm:text-xs font-semibold">
              shadcn/ui
            </div>

            <span className="text-white text-2xl">×</span>

            {/* Vercel Icon */}
            <SiVercel size={20} className="text-white block sm:hidden" />
            <SiVercel size={40} className="text-white hidden sm:block" />
          </div>

          <div className="h-15 w-15"></div>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/kaiteen1003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a href="mailto:kaijobhunting1003@gmail.com">
              <MdEmail size={30} />
            </a>
          </div>
        </div>

        <p className="text-sm"> Copyright © 2025 my portfolio</p>
      </footer>
    </div>
  );
};

export default Footer;
