import React from "react";
import { Playfair_Display } from "next/font/google";
import SkillCards from "@/components/ui/SkillCards";
import { Anton } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div>
      <div className="relative w-full">
        <img
          src="images/Skills.Mainbg.png"
          alt="Main Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 sm:top-[32%] left-1/2 transform -translate-x-1/2 text-center">
          <h1
            className={`${playfair.className} text-white text-[42px] whitespace-nowrap`}
          >
            Skills
          </h1>
        </div>
      </div>

      {/* Tech Stack タイトル */}
      <div className="text-center mt-16">
        <h2
          className={`${anton.className} text-5xl sm:text-6xl underline underline-offset-8 decoration-indigo-800 font-bold bg-gradient-to-r from-red-500 via-black-500 to-indigo-700 bg-clip-text text-transparent`}
        >
          My Tech Stack
        </h2>
      </div>

      {/* SkillCards */}
      <SkillCards />
    </div>
  );
}
