import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Skill = () => {
  return (
    <div className="bg-[#434242] rounded-2xl p-8 mx-6 my-12 flex items-center max-w-5xl mx-auto">
      {/* 左側：画像 */}
      <div className="w-1/2 flex justify-center">
        <Image
          src="/Skills.png"
          alt="Skills Image"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>

      {/* 右側：タイトル・説明・ボタン */}
      <div className="w-1/2 flex flex-col justify-center items-center text-white space-y-4">
        <h2 className={`${playfair.className} text-3xl `}>Skills</h2>
        <p className="text-lg text-center">
          私の持っている技術や資格に関する
          <br />
          内容はこちらをご覧ください。
        </p>
        <Button className="bg-white text-black hover:bg-gray-300">
          View More
        </Button>
      </div>
    </div>
  );
};

export default Skill;
