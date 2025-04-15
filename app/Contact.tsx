import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Contact = () => {
  return (
    <div className="bg-[#434242] rounded-2xl p-8 mx-6 my-12 flex items-center max-w-5xl mx-auto">
      {/* 左側：画像 */}
      <div className="w-1/2 flex justify-center">
        <Image
          src="/images/Contact.png"
          alt="Contact Image"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>

      {/* 右側：タイトル・説明・ボタン */}
      <div className="w-1/2 flex flex-col justify-center items-center text-white space-y-4">
        <h2 className={`${playfair.className} text-3xl `}>Contact</h2>
        <p className="text-lg text-center">
          連絡などはこちらから
          <br />
          お願いいたします。
        </p>
        <Link href="/contact">
          <Button className="bg-white text-black hover:bg-gray-300">
            View More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
