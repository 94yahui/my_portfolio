import ProjectCard from "./components/ProjectCard";
import { useLang } from "./context/LangContext";
import clario from "./assets/clario.svg";
import skinu from "./assets/skinu.png";
import guardian from "./assets/guardian.svg";
import { useScrollReveal } from "./hooks/useScrollReveal";

const t = {
  en: {
    title: "Featured Projects",
    projects: [
      {
        title: "Guardian",
        descrp:
          "An AI-driven navigation assistant designed for the visually impaired to provide real-time scene description, LiDAR-based object tracking, and integrated emergency support.",
      },
      {
        title: "Clario",
        descrp:
          "An all-in-one platform designed for freelancers to streamline project management, track finances, and handle contracts.",
      },
      {
        title: "SkinU",
        descrp:
          "A responsive web app that personalizes skincare through smart ingredient analysis, local weather matching, and integrated shopping.",
      },
    ],
  },
  zh: {
    title: "精选项目",
    projects: [
      {
        title: "Guardian",
        descrp:
          "一款专为视障人士设计的 AI 导航助手，提供实时场景描述、基于 LiDAR 的物体追踪以及紧急求助支持。",
      },
      {
        title: "Clario",
        descrp:
          "一个面向自由职业者的一站式平台，整合了项目管理、财务追踪与合同处理功能。",
      },
      {
        title: "SkinU",
        descrp:
          "一款响应式 Web 应用，通过智能成分分析、本地天气匹配和一体化购物功能，为用户提供个性化护肤方案。",
      },
    ],
  },
};

const projects = [
  {
    demoUrl: "https://guardian-mu-three.vercel.app/",
    gitUrl: "",
    iconUrl: guardian,
    tools: [
      "SwiftUI",
      "CoreML",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "AWS EC2",
    ],
  },
  {
    demoUrl: "https://www.c-lario.com/",
    gitUrl: "https://github.com/94yahui/clario",
    iconUrl: clario,
    tools: ["Node JS", "TypeScript", "Tailwind", "Firebase", "MangoDB"],
  },
  {
    demoUrl: "https://skinu-danielvelasteguis-projects.vercel.app/signup",
    gitUrl: "https://github.com/94yahui/SkinU-Project",
    iconUrl: skinu,
    tools: ["JavaScript", "HTML/CSS", "Firebase"],
  },
];

const Projects = () => {
  const lang = useLang();
  const text = t[lang];
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`mt-30 scroll-mt-30 max-w-270 m-auto transition-all duration-700 ease-out
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      id="projects"
    >
      <h1 className="text-3xl text-center dark:text-gray-300">{text.title}</h1>
      <div className="flex flex-wrap gap-6 mt-8">
        {projects.map((project, i) => (
          <div key={i} className="w-full sm:w-[calc(50%-12px)]">
            <ProjectCard
              demoUrl={project.demoUrl}
              gitUrl={project.gitUrl}
              iconUrl={project.iconUrl}
              title={text.projects[i].title}
              descrp={text.projects[i].descrp}
              tools={project.tools}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
