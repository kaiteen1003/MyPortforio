"use client";

import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import Introduce from "./Introduce";
import Image from "next/image";
import Skill from "./Skill";
import Works from "./Works";
import Contact from "./Contact";
import { motion } from "framer-motion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div>
      {/* メインビジュアル */}
      <div className="relative w-screen">
        <Image
          src="/images/Mainbg.png"
          alt="Main Background"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 text-center">
          <motion.h1
            className={`${playfair.className} text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl whitespace-nowrap`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to My Portfolio .
          </motion.h1>

          <motion.p
            className={`${playfair.className} text-white  text-[0.625rem] mt-3  md:text-xl lg:text-2xl lg:mt-6`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            ご覧いただきありがとうございます。
            <br /> 石飛海斗と申します。
            <br />
            ここでは私のスキルなどについて紹介しています。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button
              className="bg-white hover:bg-[#434242] text-black text-xs px-4 py-2 mt-2 
             sm:text-base sm:px-6 sm:py-3 
             lg:text-lg lg:px-8 lg:py-4 lg:mt-6"
            >
              View More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* フェードイン部分 */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Introduce />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Skill />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Works />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}
