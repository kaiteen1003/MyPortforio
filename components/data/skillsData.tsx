import { Anton } from "next/font/google";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaGitAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiMysql,
  SiC,
  SiVercel,
  SiAnaconda,
  SiFigma,
  SiSupabase,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} className="text-blue-600" />,
  },
  { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: "Vue.js", icon: <FaVuejs size={40} className="text-green-500" /> },
  { name: "Next.js", icon: <TbBrandNextjs size={40} className="text-white" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} className="text-sky-400" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel size={40} className="text-white" />,
  },
  {
    name: "Figma",
    icon: <SiFigma size={40} className="text-pink-500" />,
  },
];

export const backendSkills = [
  {
    name: "Firebase",
    icon: <SiFirebase size={40} className="text-yellow-400" />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase size={40} className="text-green-500" />,
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
  {
    name: "Anaconda",
    icon: <SiAnaconda size={40} className="text-green-600" />,
  },
  {
    name: "Google Apps Script",
    icon: (
      <img
        src="/images/Google_Apps_Script.png"
        alt="Google Apps Script"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "VBA",
    icon: <img src="/images/VBA_logo.png" alt="VBA" className="w-10 h-10" />,
  },
];
