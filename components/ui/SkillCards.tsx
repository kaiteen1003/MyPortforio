import React from "react";
import { Anton } from "next/font/google";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiGnubash,
  SiMysql,
  SiC,
  SiGooglecloud,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});
const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} className="text-blue-600" />,
  },
  { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: "Next.js", icon: <TbBrandNextjs size={40} className="text-white" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} className="text-sky-400" />,
  },
];

const backendSkills = [
  {
    name: "Firebase",
    icon: <SiFirebase size={40} className="text-yellow-400" />,
  },
  {
    name: "SQL / MySQL",
    icon: <SiMysql size={40} className="text-blue-600" />,
  },
  { name: "Java", icon: <FaJava size={40} className="text-red-600" /> },
  { name: "Python", icon: <FaPython size={40} className="text-yellow-300" /> },
  { name: "C", icon: <SiC size={40} className="text-blue-500" /> },

  {
    name: "Git / GitHub",
    icon: <FaGitAlt size={40} className="text-orange-400" />,
  },
];

const SkillCards = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16 text-white">
      <h3
        className={`${anton.className} text-6xl text-center text-black mb-12 tracking-wider uppercase drop-shadow-lg`}
      >
        Front-End
      </h3>

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
      {/* Back-end & Others */}
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
