import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import Introduce from "./Introduce";
import Skill from "./Skill";
import Works from "./Works";
import Contact from "./Contact";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div>
      <div className="relative w-full">
        <img src="images/Mainbg.png" alt="Main Background" className="h-auto" />
        <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 text-center">
          <h1
            className={`${playfair.className} text-white text-[42px]  whitespace-nowrap `}
          >
            Welcome to My Portfolio .
          </h1>
          <p className={`${playfair.className} text-white text-[20px] mt-6`}>
            ご覧いただきありがとうございます。
            <br /> 石飛海斗と申します。
            <br />
            ここでは私のスキルなどについて紹介しています。
          </p>
          <Button className="bg-white hover:bg-[#434242] text-black  mt-6">
            View More
          </Button>
        </div>
      </div>
      <Introduce />
      <Skill />
      <Works />
      <Contact />
    </div>
  );
}
