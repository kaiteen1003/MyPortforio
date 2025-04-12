"use client";

import { works } from "@/components/data/worksData";
import Image from "next/image";

export default function ClientWorksGrid() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-16">
      {works.map((work) => (
        <div
          key={work.id}
          className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-lg"
        >
          <div className="w-full md:w-1/2">
            <Image
              src={work.image}
              alt={work.title}
              width={600}
              height={400}
              className="rounded-xl object-cover w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{work.title}</h2>
            <p className="text-gray-700 text-lg mb-4">{work.description}</p>
            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                このサイトを表示する
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
