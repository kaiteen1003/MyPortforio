"use client";

import { works } from "@/components/data/worksData";
import Image from "next/image";
import { useRouter } from "next/navigation";

const WorksPage = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {works.map((work) => (
        <div
          key={work.id}
          className="rounded-xl shadow-md hover:scale-105 transition cursor-pointer"
          onClick={() => router.push(`/works/${work.id}`)}
        >
          <Image
            src={work.image}
            alt={work.title}
            width={400}
            height={250}
            className="w-full h-auto object-cover rounded-t-xl"
          />
          <div className="p-4 text-center font-semibold">{work.title}</div>
        </div>
      ))}
    </div>
  );
};

export default WorksPage;
