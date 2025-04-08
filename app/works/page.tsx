"use client";

import { works } from "@/components/data/worksData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const WorksPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="relative w-full">
        <img
          src="images/Works.Mainbg.png"
          alt="Main Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 text-center">
          <h1
            className={`${playfair.className} text-white text-[42px] whitespace-nowrap`}
          >
            Works
          </h1>
        </div>
      </div>
      <h1 className="text-5xl font-bold mb-20 mt-20 text-center mx-auto underline">
        今までに製作した成果物
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        {works.map((work) => (
          <div
            key={work.id}
            className="bg-[#434242] rounded-xl shadow-md hover:scale-105 transition cursor-pointer"
            onClick={() => router.push(`/works/${work.id}`)}
          >
            {/* ✅ 画像を固定サイズにして fill で埋める */}
            <div className="relative w-full h-[250px]">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>

            <div className="p-4 text-center font-semibold text-white">
              {work.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksPage;
