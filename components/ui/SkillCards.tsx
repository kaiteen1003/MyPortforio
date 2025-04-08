import React from "react";
import { Anton } from "next/font/google";
import { frontendSkills, backendSkills } from "../data/skillsData";
import { TbBrandNextjs } from "react-icons/tb";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const SkillCards = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16 text-white">
      <h3
        className={`${anton.className} text-6xl text-center text-black mb-12 tracking-wider uppercase drop-shadow-lg`}
      >
        Front-End
      </h3>
      {/* 説明文 + 画像 */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
          デザインから実装まで一貫してフロントエンドの構築、
          UI/UXを意識した開発や、レスポンシブデザインの実装なども対応可能です。
        </p>
        <img
          src="/images/DesignToImple.png"
          alt="Design to Implementation"
          className="mt-6 w-full  mx-auto rounded-xl shadow-lg"
        />
      </div>
      {/* Front-end */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-center">Front-end</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#2e2e2e] rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <h3
        className={`${anton.className} text-6xl text-center text-black mb-12 tracking-wider uppercase drop-shadow-lg`}
      >
        Back-End
      </h3>
      {/* 説明文 + 画像 */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
          仮想環境の構築からPythonやGASなどを用いたデータ操作やソフトの動作、
          通知の自動化など様々なシステムの構築経験があります。
        </p>
        <img
          src="/images/BackEnd.png"
          alt="Design to Implementation"
          className="mt-6 w-full  mx-auto rounded-xl shadow-lg"
        />
      </div>
      {/* Back-end */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-center">
          Back-end / Others
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {backendSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#2e2e2e] rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillCards;
