import ProgressBar from "./components/ProgressBar";
import SkillCard from "./components/SkillCard";
import { useLang } from "./context/LangContext";
import { Layers, Box } from "lucide-react";
import mongoIcon from "./assets/mongodb-icon-dark.svg";
import fireBaseIcon from "./assets/firebase.svg";
import awsIcon from "./assets/aws_light.svg";
import reactIcon from "./assets/react.svg";
import tailWindIcon from "./assets/tailwindcss.svg";
import jwtIcon from "./assets/jwt.svg";
import linuxIcon from "./assets/linux.svg";
import openAIIcon from "./assets/openai.svg";

const t = {
  en: {
    title: "Technical Expertise",
    subtitle: "Building full-stack web and mobile applications across the entire development lifecycle",
    coreTitle: "Core Technologies",
    toolsTitle: "Tools & Platforms",
    skills: [
      { name: "React.js", subname: "Frontend Framework" },
      { name: "TypeScript", subname: "Language" },
      { name: "Node.js", subname: "Backend Runtime" },
      { name: "Swift", subname: "iOS Development" },
      { name: "JavaScript", subname: "Language" },
    ],
    tools: [
      "AI / LLM",
      "MongoDB",
      "Firebase",
      "AWS",
      "React Native",
      "Tailwind CSS",
      "JWT / Auth",
      "Linux / Bash",
    ],
  },
  zh: {
    title: "技术专长",
    subtitle: "覆盖全栈 Web 与移动端应用的完整开发周期",
    coreTitle: "核心技术",
    toolsTitle: "工具与平台",
    skills: [
      { name: "React.js", subname: "前端框架" },
      { name: "TypeScript", subname: "编程语言" },
      { name: "Node.js", subname: "后端运行" },
      { name: "Swift", subname: "iOS 开发" },
      { name: "JavaScript", subname: "编程语言" },
    ],
    tools: [
      "AI / 大模型",
      "MongoDB",
      "Firebase",
      "AWS",
      "React Native",
      "Tailwind CSS",
      "JWT / Auth",
      "Linux / Bash",
    ],
  },
};

const skillBars = [
  { length: 85, color: "blue" },
  { length: 80, color: "blue" },
  { length: 78, color: "green" },
  { length: 72, color: "orange" },
  { length: 85, color: "purple" },
] as const;

const toolIcons = [
  openAIIcon,
  mongoIcon,
  fireBaseIcon,
  awsIcon,
  reactIcon,
  tailWindIcon,
  jwtIcon,
  linuxIcon,
];

const Techinical = () => {
  const lang = useLang();
  const text = t[lang];

  return (
    <div className="mt-30 max-w-270 m-auto">
      <div className="text-center">
        <h1 className="text-3xl dark:text-gray-300">{text.title}</h1>
        <p className="mt-3 text-gray-400">{text.subtitle}</p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-10 border border-blue-500/20 rounded-2xl p-6 shadow-2xl">

        <div className="flex-1">
          <div className="flex gap-2 items-center mb-4">
            <Box className="w-5.5 h-5.5 text-blue-500" />
            <h2 className="font-semibold text-2xl dark:text-gray-400">{text.coreTitle}</h2>
          </div>
          {text.skills.map((skill, i) => (
            <ProgressBar
              key={i}
              name={skill.name}
              subname={skill.subname}
              length={skillBars[i].length}
              color={skillBars[i].color}
            />
          ))}
        </div>

        <div className="flex-1">
          <div className="flex gap-2 items-center mb-4">
            <Layers className="w-5 h-5 text-purple-500" />
            <h2 className="font-semibold text-2xl dark:text-gray-400">{text.toolsTitle}</h2>
          </div>
          <div className="flex flex-row flex-wrap gap-3">
            {text.tools.map((name, i) => (
              <SkillCard key={i} name={name} iconUrl={toolIcons[i]} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Techinical;