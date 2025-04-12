import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#434242] text-white p-4 text-center">
        <div className="flex justify-between items-center gap-4 mb-4 w-full">
          <img
            src="images//HeaderIcon.png"
            alt="Logo 1"
            className="h-15 w-auto"
          />
          <div className="flex-1 flex justify-center">
            <img
              src="images//TeckStack.png"
              alt="Logo 2"
              className="h-15 w-auto mr-8"
            />
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
