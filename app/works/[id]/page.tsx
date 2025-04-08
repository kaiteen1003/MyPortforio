// app/works/[id]/page.tsx
import { works } from "@/components/data/worksData";
import Image from "next/image";

type Props = {
  params: { id: string };
};

const WorkDetailPage = async ({ params }: Props) => {
  const work = works.find((w) => w.id === params.id);

  if (!work) return <div className="p-6">作品が見つかりませんでした。</div>;

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 max-w-5xl mx-auto">
      {/* 左：画像 */}
      <div className="w-full md:w-1/2">
        <Image
          src={work.image}
          alt={work.title}
          width={600}
          height={400}
          className="rounded-xl object-cover w-full"
        />
      </div>

      {/* 右：テキスト */}
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
};

export default WorkDetailPage;
