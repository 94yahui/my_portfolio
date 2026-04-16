import ProjectCard from "./components/ProjectCard";
import clario from "./assets/clario.svg";
import skinu from "./assets/skinu.png";
import guardian from "./assets/guardian.svg"

const Projects = () => {
  return (
    <div className="mt-30 scroll-mt-30" id="projects">
      <h1 className="text-3xl text-center">Featured Projects</h1>
      <div className="flex flex-wrap gap-6 mt-8">
        <div className="w-full sm:w-[calc(50%-12px)]">
          <ProjectCard
            demoUrl="https://guardian-mu-three.vercel.app/"
            gitUrl=""
            iconUrl={guardian}
            title="Guardian"
            descrp="An AI-driven navigation assistant designed for the visually impaired to provide real-time scene description, LiDAR-based object tracking, and integrated emergency support."
            tools={[
              "SwiftUI",
              "CoreML",
              "Spring Boot",
              "PostgreSQL",
              "Docker",
              "AWS EC2",
            ]}
          />
        </div>
        <div className="w-full sm:w-[calc(50%-12px)]">
          <ProjectCard
            demoUrl="https://www.c-lario.com/"
            gitUrl="https://github.com/94yahui/clario"
            iconUrl={clario}
            title="Clario"
            descrp="An all-in-one platform designed for freelancers to streamline project management, track finances, and handle contracts."
            tools={["Node JS", "TypeScript", "Tailwind", "Firebase", "MangoDB"]}
          />
        </div>
        <div className="w-full sm:w-[calc(50%-12px)]">
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