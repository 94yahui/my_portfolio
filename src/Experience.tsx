import { Briefcase, ExternalLink } from "lucide-react";

const Experience = () => {
  return (
    <div id="experience" className="mt-30 scroll-mt-30 max-w-270 m-auto">
      <div className="text-center">
        <h1 className="text-3xl dark:text-gray-300">Experience</h1>
        <p className="mt-3 text-gray-400">
          Real-world projects and professional contributions
        </p>
      </div>

      <div className="mt-8 border border-blue-500/20 rounded-2xl p-6 shadow-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="flex gap-2 items-center mb-8">
          <Briefcase className="w-6 h-6 text-blue-500" />
          <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-100">
            Work Experience
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
                  Web Developer & Maintainer
                </h3>
                <span className="text-sm font-medium text-gray-400 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded-md">
                  Jan 2026 – Apr 2026
                </span>
              </div>

              <div className="flex items-center gap-1.5 mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Langara College — Fine Arts Department
                </span>
                {/* 修复点：添加了缺失的 <a 标签起始部分 */}
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
                Acted as the primary technical liaison for the Fine Arts
                department, translating design requirements into functional web
                updates for the graduation showcase.
              </p>

              <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">▸</span>
                  <span>
                    Collaborated directly with the{" "}
                    <span className="font-bold text-gray-800 dark:text-gray-200">
                      Fine Arts Department
                    </span>{" "}
                    to implement regular content updates, ensuring the 2026 grad
                    show site accurately reflected departmental branding and
                    student data.
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">▸</span>
                  <span>
                    Deployed the 2026 showcase on{" "}
                    <span className="font-bold text-gray-800 dark:text-gray-200">Netlify</span> and
                    managed DNS records via{" "}
                    <span className="font-bold text-gray-800 dark:text-gray-200">
                      AWS Route 53
                    </span>{" "}
                    to configure subdomains for yearly archive sites.
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">▸</span>
                  <span>
                    Maintained legacy archive sites on{" "}
                    <span className="font-bold text-gray-800 dark:text-gray-200">AWS EC2</span>,
                    managing server configuration and using{" "}
                    <span className="font-bold text-gray-800 dark:text-gray-200">PM2</span> for
                    Node.js process management, deployment, and testing.
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">▸</span>
                  <span>
                    Administered{" "}
                    <span className="font-bold text-gray-800 dark:text-gray-200">WordPress</span>{" "}
                    to manage student portfolios, configure account permissions,
                    and support graduates in uploading and organizing their
                    artwork.
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">▸</span>
                  <span>
                    Integrated{" "}
                    <span className="font-bold text-gray-800 dark:text-gray-200">
                      Google Analytics (GA4)
                    </span>{" "}
                    into the website to monitor visitor engagement and track
                    site performance.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js", "WordPress", "AWS EC2", "AWS Route 53",
                  "Netlify", "PM2", "Google Analytics",
                ].map((tech) => (
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
