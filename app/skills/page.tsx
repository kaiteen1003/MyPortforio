import React from "react";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
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
        <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 text-center">
          <h1
            className={`${playfair.className} text-white text-[42px]  whitespace-nowrap `}
          >
            Skills
          </h1>
        </div>
      </div>
    </div>
  );
}
