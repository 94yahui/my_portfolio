import { Briefcase, ExternalLink } from "lucide-react";
import { useLang } from "./context/LangContext";

const t = {
  en: {
    title: "Experience",
    subtitle: "Real-world projects and professional contributions",
    sectionTitle: "Work Experience",
    date: "Jan 2026 – Present",
    jobTitle: "Web Developer & Maintainer",
    company: "Langara College — Fine Arts Department",
    summary:
      "Acted as the primary technical liaison for the Fine Arts department, translating design requirements into functional web updates for the graduation showcase.",
    bullets: [
      "Collaborated directly with the [Fine Arts Department] to implement regular content updates, ensuring the 2026 grad show site accurately reflected departmental branding and student data.",
      "Deployed the 2026 showcase on [Netlify] and managed DNS records via [AWS Route 53] to configure subdomains for yearly archive sites.",
      "Maintained legacy archive sites on [AWS EC2], managing server configuration and using [PM2] for Node.js process management, deployment, and testing.",
      "Administered [WordPress] to manage student portfolios, configure account permissions, and support graduates in uploading and organizing their artwork.",
      "Integrated [Google Analytics (GA4)] into the website to monitor visitor engagement and track site performance.",
    ],
  },
  zh: {
    title: "工作经历",
    subtitle: "真实项目经验与专业贡献",
    sectionTitle: "工作经历",
    date: "2026年1月 – 现在",
    jobTitle: "Web 开发与维护",
    company: "兰加拉学院 — 美术系",
    summary:
      "担任美术系主要技术对接人，将设计需求转化为毕业展示网站的功能更新。",
    bullets: [
      "与 [美术系] 直接协作，定期实施内容更新，确保 2026 届毕业展网站准确呈现系部品牌形象与学生信息。",
      "将 2026 届展示网站部署至 [Netlify]，并通过 [AWS Route 53] 管理 DNS 记录，为历年归档站点配置子域名。",
      "在 [AWS EC2] 上维护历年归档站点，负责服务器配置，并使用 [PM2] 进行 Node.js 进程管理、部署与测试。",
      "管理 [WordPress]，负责学生作品集管理、账户权限配置，并协助毕业生上传和整理作品。",
      "在网站中集成 [Google Analytics (GA4)]，用于监控访客互动行为及追踪网站性能。",
    ],
  },
};

// 把 [关键词] 渲染成加粗样式
const renderBullet = (text: string) => {
  const parts = text.split(/\[(.+?)\]/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-bold text-gray-800 dark:text-gray-200">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const techs = [
  "Next.js", "WordPress", "AWS EC2", "AWS Route 53",
  "Netlify", "PM2", "Google Analytics",
];

const Experience = () => {
  const lang = useLang();
  const text = t[lang];

  return (
    <div id="experience" className="mt-30 scroll-mt-30 max-w-270 m-auto">
      <div className="text-center">
        <h1 className="text-3xl dark:text-gray-300">{text.title}</h1>
        <p className="mt-3 text-gray-400">{text.subtitle}</p>
      </div>

      <div className="mt-8 border border-blue-500/20 rounded-2xl p-6 shadow-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="flex gap-2 items-center mb-8">
          <Briefcase className="w-6 h-6 text-blue-500" />
          <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-100">
            {text.sectionTitle}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <div className="w-0.5 bg-gray-200 dark:bg-gray-700 flex-1 mt-2" />
            </div>

            <div className="pb-8 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100">
                  {text.jobTitle}
                </h3>
                <span className="text-sm font-medium text-gray-400 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded-md">
                  {text.date}
                </span>
              </div>

              <div className="flex items-center gap-1.5 mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {text.company}
                </span>
                <a
                  href="https://langarafinagradshow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed italic">
                {text.summary}
              </p>

              <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-400 mb-6">
                {text.bullets.map((bullet, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-blue-500 font-bold mt-0.5">▸</span>
                    <span>{renderBullet(bullet)}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;