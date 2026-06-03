import ProjectCard from "./components/ProjectCard";
import { useLang } from "./context/LangContext";
import clario from "./assets/clario.svg";
import skinu from "./assets/skinu.png";
import guardian from "./assets/guardian.svg";
import jianli from "./assets/logo-white.png";
import { useScrollReveal } from "./hooks/useScrollReveal";

const t = {
  en: {
    title: "Featured Projects",
    projects: [
      {
        title: "JianliQuanKai",
        descrp: "A live, AI-powered resume builder for the Chinese market. Features 135+ templates, DeepSeek-driven content optimization, WeChat auth, subscription billing, and one-click PDF export.",
      },
      {
        title: "Clario",
        descrp: "An intelligent ecosystem for freelancers providing automated contract auditing, AI-assisted data ingestion from uploads, and streamlined financial tracking for independent business management.",
      },
      {
        title: "Guardian",
        descrp: "An AI-driven navigation assistant designed for the visually impaired to provide real-time scene description, LiDAR-based object tracking, and integrated emergency support.",
      },
      {
        title: "SkinU",
        descrp: "A responsive web app that personalizes skincare through smart ingredient analysis, local weather matching, and integrated shopping.",
      },
    ],
  },
  zh: {
    title: "精选项目",
    projects: [
      {
        title: "简力全开",
        descrp: "已上线运营的 AI 简历 SaaS 工具。集成 135+ 套模版、DeepSeek 内容优化、微信登录、订阅付费及一键 PDF 导出功能。",
      },
      {
        title: "Clario",
        descrp: "专为自由职业者打造的智能生态系统，提供自动化合同审计、AI 数据解析导入及流线型财务管理功能。",
      },
      {
        title: "Guardian",
        descrp: "一款专为视障人士设计的 AI 导航助手，提供实时场景描述、基于 LiDAR 的物体追踪以及紧急求助支持。",
      },
      {
        title: "SkinU",
        descrp: "一款响应式 Web 应用，通过智能成分分析、本地天气匹配和一体化购物功能，为用户提供个性化护肤方案。",
      },
    ],
  },
};

const projects = [
  {
    demoUrl: "https://www.jianliquankai.com/",
    gitUrl: "https://github.com/94yahui/jianliquankai",
    iconUrl: jianli, 
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "DeepSeek AI", "Vercel"],
  },
  {
    demoUrl: "https://www.c-lario.com/",
    gitUrl: "https://github.com/94yahui/clario",
    iconUrl: clario,
    tools: ["Node JS", "TypeScript", "Tailwind", "Firebase", "MangoDB", "Redux", "Axios", "Vercel"],
  },
  {
    demoUrl: "https://guardian-mu-three.vercel.app/",
    gitUrl: "",
    iconUrl: guardian,
    tools: ["SwiftUI", "CoreML", "Spring Boot", "PostgreSQL", "Docker", "AWS EC2", "Java", "JWT"],
  },
  {
    demoUrl: "https://skinu-danielvelasteguis-projects.vercel.app/signup",
    gitUrl: "https://github.com/94yahui/SkinU-Project",
    iconUrl: skinu,
    tools: ["JavaScript", "HTML/CSS", "Firebase", "Vercel"],
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
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
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