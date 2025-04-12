import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiVercel } from "react-icons/si";
import { FaReact } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#434242] text-white p-4 relative">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto relative">
          {/* 左：ロゴ */}
          <div className="flex-shrink-0">
            <img
              src="images//HeaderIcon.png"
              alt="Logo 1"
              className="h-10 w-auto"
            />
          </div>

          {/* 中央：技術スタック（absoluteで中央に固定） */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-3">
              <TbBrandNextjs size={30} />
              <span className="text-xl">×</span>
              <SiTypescript size={30} />
              <span className="text-xl">×</span>
              <FaReact size={30} />
              <span className="text-xl">×</span>
              <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-xs font-semibold">
                shadcn/ui
              </div>
              <span className="text-xl">×</span>
              <SiVercel size={30} />
            </div>
          </div>

          {/* 右：SNSアイコン */}
          <div className="flex gap-4">
            <a
              href="https://github.com/kaiteen1003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} />
            </a>
            <a href="mailto:kaijobhunting1003@gmail.com">
              <MdEmail size={28} />
            </a>
          </div>
        </div>

        {/* 著作権フッター */}
        <p className="text-sm text-center mt-4">
          Copyright © 2025 my portfolio
        </p>
      </footer>
    </div>
  );
};

export default Footer;
