import Image from "next/image";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Status() {
  return (
    <div>
      <div className="bg-[#434242] rounded-2xl p-8 mx-6 my-12 flex items-center max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 w-full">
          {/* 画像エリア：横幅50%・高さは正方形に自動調整 */}
          <div className="w-full md:w-1/2 relative aspect-square">
            <Image
              src="/Status.jpg"
              alt="Profile Photo"
              fill
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* テキストエリア */}
          <div className="w-full md:w-1/2 text-center md:text-left text-white">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              <br /> 山口大学工学部 <br />
              創成科学研究科
              <br />
              電気電子情報工学科 <br />
              <br />
              石飛海斗(22歳)
            </h2>
            <p className="text-lg leading-relaxed font-serif">
              大学では主にプログラミングとそれを取り巻く技術に関する勉強をしております。
              <br />
              現在2027年春の就職に向けて活動中です。
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
