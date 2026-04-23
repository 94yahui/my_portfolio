import DevProcessCard from "./components/DevProcess";
import { useLang } from "./context/LangContext";
import { Lightbulb, CodeXml, CircleCheck } from "lucide-react";
import { devProcessColors } from "./style/color";

const t = {
  en: {
    title: "Development Process",
    subtitle: "A systematic approach to building web and mobile applications",
    cards: [
      {
        title: "Ideation & Planning",
        steps: [
          "Requirements gathering and market research",
          "User flow and wireframe design",
          "Interactive prototype development",
        ],
      },
      {
        title: "Development",
        steps: [
          "Architecture setup and tech stack selection",
          "Agile development with regular sprints",
          "Continuous testing and code reviews",
        ],
      },
      {
        title: "Launch & Growth",
        steps: [
          "App store optimization and submission",
          "Analytics integration and monitoring",
          "Regular updates and feature enhancements",
        ],
      },
    ],
  },
  zh: {
    title: "开发流程",
    subtitle: "系统化构建 Web 与移动端应用的方法论",
    cards: [
      {
        title: "创意与规划",
        steps: [
          "需求收集与市场调研",
          "用户流程与线框图设计",
          "交互原型开发",
        ],
      },
      {
        title: "开发阶段",
        steps: [
          "架构搭建与技术栈选型",
          "敏捷开发与定期迭代",
          "持续测试与代码审查",
        ],
      },
      {
        title: "上线与增长",
        steps: [
          "应用商店优化与提交",
          "数据分析集成与监控",
          "定期更新与功能迭代",
        ],
      },
    ],
  },
};

const cardColors = ["blue", "purple", "green"] as const;

const cardIcons = [
  (color: string) => (
    <Lightbulb
      className={`${devProcessColors[color as keyof typeof devProcessColors]} w-15 h-15 p-3 flex items-center justify-center rounded-2xl`}
    />
  ),
  (color: string) => (
    <CodeXml
      className={`${devProcessColors[color as keyof typeof devProcessColors]} w-15 h-15 p-3 flex items-center justify-center rounded-2xl`}
    />
  ),
  (color: string) => (
    <CircleCheck
      className={`${devProcessColors[color as keyof typeof devProcessColors]} w-15 h-15 p-3 flex items-center justify-center rounded-2xl`}
    />
  ),
];

const DevProcess = () => {
  const lang = useLang();
  const text = t[lang];

  return (
    <div className="mt-30 max-w-270 m-auto">
      <div className="text-center">
        <h1 className="text-3xl dark:text-gray-300">{text.title}</h1>
        <p className="mt-3 text-gray-400">{text.subtitle}</p>
      </div>
      <div className="mt-8 flex flex-col md:flex-row flex-wrap gap-6 items-stretch">
        {text.cards.map((card, i) => (
          <DevProcessCard
            key={i}
            title={card.title}
            steps={card.steps}
            color={cardColors[i]}
          >
            {cardIcons[i](cardColors[i])}
          </DevProcessCard>
        ))}
      </div>
    </div>
  );
};

export default DevProcess;