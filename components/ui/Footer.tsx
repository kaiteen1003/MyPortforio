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
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4 w-full">
          <img
            src="images//HeaderIcon.png"
            alt="Logo 1"
            className="h-15 w-auto"
          />
          <div className="static sm:absolute sm:left-1/2 flex items-center justify-center gap-4 py-4">
            <TbBrandNextjs size={40} className="text-white" />
            <span className="text-white text-2xl">×</span>
            <SiTypescript size={40} className="text-white" />
            <span className="text-white text-2xl">×</span>
            <FaReact size={40} className="text-white" />
            <span className="text-white text-2xl">×</span>
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-semibold">
              shadcn/ui
            </div>
            <span className="text-white text-2xl">×</span>
            <SiVercel size={40} className="text-white" />
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
