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
          src="images/Contact.Mainbg.png"
          alt="Main Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 text-center">
          <h1
            className={`${playfair.className} text-white text-[42px]  whitespace-nowrap `}
          >
            Contact
          </h1>
        </div>
      </div>
      <p className="text-center text-gray-600 mb-8 mt-8 ">
        お仕事のご依頼やご質問がありましたら、以下のフォームまたはSNSよりお気軽にご連絡ください。
      </p>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="お名前"
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="email"
          placeholder="メールアドレス"
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="text"
          placeholder="件名（任意）"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="お問い合わせ内容"
          rows={5}
          className="w-full border p-3 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
        >
          送信
        </button>
      </form>
    </div>
  );
}
