import ProjectCard from "./components/ProjectCard";
import clario from "./assets/clario.svg";
import skinu from "./assets/skinu.png";

const Projects = () => {
  return (
    <div className="mt-30 scroll-mt-30" id="projects">
      <h1 className="text-3xl text-center">Featured Projects</h1>
      <div className="flex flex-col sm:flex-row gap-6 mt-8">
        <div className="flex-1">
        <ProjectCard
          demoUrl="https://www.c-lario.com/"
          gitUrl="https://github.com/94yahui/clario"
          iconUrl={clario}
          title="Clario"
          descrp="An all-in-one platform designed for freelancers to streamline project management, track finances, and handle contracts."
          tools={["Node JS", "TypeScript", "Tailwind", "Firebase", "MangoDB"]}
        />
        </div>
        <div className="flex-1">
        <ProjectCard
          demoUrl="https://skinu-danielvelasteguis-projects.vercel.app/signup"
          gitUrl="https://github.com/94yahui/SkinU-Project"
          iconUrl={skinu}
          title="SkinU"
          descrp="A responsive web app that personalizes skincare through smart ingredient analysis, local weather matching, and integrated shopping."
          tools={["JavaScript", "HTML/CSS", "Firebase"]}
        />
        </div>
      </div>
    </div>
  );
};

export default Projects;
