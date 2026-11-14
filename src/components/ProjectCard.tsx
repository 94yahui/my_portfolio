import gitHubIcon from "../assets/github_dark.svg";
import webIcon from "../assets/external-link.png";

interface ProjectCardProps {
  iconUrl: string;
  iconUrlDark?: string;
  gitUrl: string;
  demoUrl: string;
  title: string;
  descrp: string;
  tools: string[];
}

const ProjectCard = ({
  iconUrl,
  iconUrlDark,
  demoUrl,
  gitUrl,
  title,
  descrp,
  tools,
}: ProjectCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-[#f5f5f7] dark:bg-gray-800/50 border border-black/5 dark:border-blue-500/20 flex gap-6 h-full">
      {iconUrlDark ? (
        <>
          <img src={iconUrl} className="w-20 h-20 drop-shadow-xl block dark:hidden" />
          <img src={iconUrlDark} className="w-20 h-20 drop-shadow-xl hidden dark:block" />
        </>
      ) : (
        <img src={iconUrl} className="w-20 h-20 drop-shadow-xl" />
      )}
      <div>
        <div className="flex items-center justify-between w-full">
          <h2 className="font-semibold text-2xl text-[#1d1d1f] dark:text-white tracking-tight">{title}</h2>
          <div className="flex items-center gap-3">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70 cursor-pointer"
          >
            <img src={webIcon} className="w-5 h-5 brightness-0 dark:invert" alt="website" />
          </a>
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70 cursor-pointer"
          >
            <img src={gitHubIcon} className="w-5 h-5 brightness-0 dark:invert" alt="github" />
          </a>
          </div>
        </div>
        <p className="py-3 text-slate-500 dark:text-slate-400">{descrp}</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="py-.8 px-2 border border-black/10 dark:border-gray-600 text-slate-500 dark:text-slate-400 rounded-4xl text-[14px]"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
