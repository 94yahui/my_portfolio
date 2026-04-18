import DevProcessCard from "./components/DevProcess";
import { Lightbulb, CodeXml, CircleCheck } from "lucide-react";
import { devProcessColors } from "./style/color";

const DevProcess = () => {
  return (
    <div className="mt-30 max-w-270 m-auto">
      <div className="text-center">
        <h1 className="text-3xl dark:text-gray-300">Development Process</h1>
        <p className="mt-3 text-gray-400">
          A systematic approach to building web and mobile applications
        </p>
      </div>
      <div className="mt-8 flex flex-col md:flex-row flex-wrap gap-6 items-stretch">
        <DevProcessCard
          title="Ideation & Planning"
          steps={[
            "Requirements gathering and market research",
            "User flow and wireframe design",
            "Interactive prototype development",
          ]}
          color="blue"
        >
          <Lightbulb
            className={`${devProcessColors.blue} w-15 h-15 p-3 flex items-center justify-center rounded-2xl`}
          />
        </DevProcessCard>
        <DevProcessCard
          title="Development"
          steps={[
            "Architecture setup and tech stack selection",
            "Agile development with regular sprints",
            "Continuous testing and code reviews",
          ]}
          color="purple"
        >
          <CodeXml
            className={`${devProcessColors.purple} w-15 h-15 p-3 flex items-center justify-center rounded-2xl`}
          />
        </DevProcessCard>
        <DevProcessCard
          title="Launch & Growth"
          steps={[
            "App store optimization and submission",
            "Analytics integration and monitoring",
            "Regular updates and feature enhancements",
          ]}
          color="green"
        >
          <CircleCheck
            className={`${devProcessColors.green} w-15 h-15 p-3 flex items-center justify-center rounded-2xl`}
          />
        </DevProcessCard>
        
      </div>
    </div>
  );
};

export default DevProcess;
