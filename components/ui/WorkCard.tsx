"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  title: string;
  image: string;
};

export const WorkCard = ({ id, title, image }: Props) => {
  const router = useRouter();

  return (
    <div
      className="rounded-xl shadow-lg hover:scale-105 transition cursor-pointer"
      onClick={() => router.push(`/works/${id}`)}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="rounded-t-xl"
      />
      <div className="p-4 text-center font-semibold">{title}</div>
    </div>
  );
};
