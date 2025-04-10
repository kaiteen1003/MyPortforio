import ClientWorksGrid from "./ClientWorksGrid";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function WorksPage() {
  return (
    <div>
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/images/Works.Mainbg.png"
          alt="Main Background"
          fill
          priority
          className="object-cover"
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

      <ClientWorksGrid />
    </div>
  );
}
