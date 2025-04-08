"use client";

import { works } from "@/components/data/worksData";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ClientWorksGrid() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
      {works.map((work) => (
        <div
          key={work.id}
          className="bg-[#434242] rounded-xl shadow-md hover:scale-105 transition cursor-pointer"
          onClick={() => router.push(`/works/${work.id}`)}
        >
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
  );
}
