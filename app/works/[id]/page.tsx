import { works } from "@/components/data/worksData";
import Image from "next/image";

export default async function Page(props: { params: { id: string } }) {
  const { id } = await props.params;
  const work = works.find((w) => w.id === id);

  if (!work) return <div className="p-6">作品が見つかりませんでした。</div>;

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 max-w-5xl mx-auto">
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
        <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
        <p className="text-lg text-gray-700">{work.description}</p>
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
  );
}

// 必須：静的パス生成
export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }));
}
