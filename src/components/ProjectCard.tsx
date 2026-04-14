import gitHubIcon from "../assets/github_dark.svg";
import webIcon from "../assets/external-link.png";

interface ProjectCardProps {
  iconUrl: string;
  gitUrl: string;
  demoUrl: string;
  title: string;
  descrp: string;
  tools: string[];
}

const ProjectCard = ({
  iconUrl,
  demoUrl,
  gitUrl,
  title,
  descrp,
  tools,
}: ProjectCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-linear-to-br to-blue-600 from-black flex gap-6 h-full">
      <img src={iconUrl} className="w-20 h-20" />
      <div>
        <div className="flex items-center justify-between w-full">
          <h2 className="font-semibold text-2xl text-white">{title}</h2>
          <div className="flex items-center gap-3">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70 cursor-pointer"
          >
            <img src={webIcon} className="w-5 h-5" alt="website" />
          </a>
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70 cursor-pointer"
          >
            <img src={gitHubIcon} className="w-5 h-5" alt="github" />
          </a>
          </div>
        </div>
        <p className="py-3 text-gray-50">{descrp}</p>
        <div className="flex flex-wrap gap-2 text-gray-300">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="py-.8 px-2 border border-blue-500 rounded-4xl text-[14px]"
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
