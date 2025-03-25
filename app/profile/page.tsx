import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import Status from "./Status";
import ThreePoint from "./ThreePoint";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div>
      <div className="relative w-full">
        <img
          src="images/profile.Mainbg.jpg"
          alt="Main Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 text-center">
          <h1
            className={`${playfair.className} text-white text-[42px]  whitespace-nowrap `}
          >
            Profile
          </h1>
        </div>
      </div>
      <Status />
      <ThreePoint />
    </div>
  );
}
