"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { useForm, ValidationError } from "@formspree/react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyzeoeeg");

  if (state.succeeded) {
    return (
      <div className="relative w-full">
        <img
          src="images/Contact.Mainbg.png"
          alt="Main Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 sm:top-[32%] left-1/2 transform -translate-x-1/2 text-center">
          <h1
            className={`${playfair.className} text-white text-[21px] whitespace-nowrap`}
          >
            メッセージを送信いただきありがとうございます。内容を確認のうえ、追ってご連絡いたします。
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative w-full">
        <img
          src="images/Contact.Mainbg.png"
          alt="Main Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 sm:top-[32%] left-1/2 transform -translate-x-1/2 text-center">
          <h1
            className={`${playfair.className} text-white text-[42px] whitespace-nowrap`}
          >
            Contact
          </h1>
        </div>
      </div>

      <p className="text-center text-gray-600 mb-8 mt-8">
        お仕事のご依頼やご質問などがありましたら、以下のフォームまたはSNSよりお気軽にご連絡ください。
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="お名前"
          required
          className="w-full border p-3 rounded"
        />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="メールアドレス"
          required
          className="w-full border p-3 rounded"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="件名（任意）"
          className="w-full border p-3 rounded"
        />

        <textarea
          id="message"
          name="message"
          placeholder="お問い合わせ内容"
          required
          rows={5}
          className="w-full border p-3 rounded"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-600 text-white py-2 px-6 rounded mb-8 hover:bg-blue-700 disabled:opacity-50"
        >
          送信
        </button>
      </form>
    </div>
  );
}
