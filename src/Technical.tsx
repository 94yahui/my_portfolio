import ProgressBar from "./components/ProgressBar";
import SkillCard from "./components/SkillCard";
import { Layers, Box } from "lucide-react";
import mongoIcon from "./assets/mongodb-icon-dark.svg"
import fireBaseIcon from "./assets/firebase.svg"
import awsIcon from "./assets/aws_light.svg"
import reactIcon from "./assets/react.svg"
import tailWindIcon from "./assets/tailwindcss.svg"
import jwtIcon from "./assets/jwt.svg"
import linuxIcon from "./assets/linux.svg"
import openAIIcon from "./assets/openai.svg"

const Techinical = () => {
  return (
    <div className="mt-30">
      <div className="text-center">
        <h1 className="text-3xl">Technical Expertise</h1>
        <p className="mt-3 text-gray-500">
          Building full-stack web and mobile applications across the entire development lifecycle
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-10 border border-blue-500/20 rounded-2xl p-6 shadow-2xl">

        <div className="flex-1">
          <div className="flex gap-2 items-center mb-4">
            <Box className="w-5.5 h-5.5 text-blue-500" />
            <h2 className="font-semibold text-2xl">Core Technologies</h2>
          </div>
          <ProgressBar name="React.js" subname="Frontend Framework" length={85} color="blue" />
          <ProgressBar name="TypeScript" subname="Language" length={80} color="blue" />
          <ProgressBar name="Node.js" subname="Backend Runtime" length={78} color="green" />
          <ProgressBar name="Swift" subname="iOS Development" length={72} color="orange" />
          <ProgressBar name="JavaScript" subname="Language" length={85} color="purple" />
        </div>

        <div className="flex-1">
          <div className="flex gap-2 items-center mb-4">
            <Layers className="w-5 h-5 text-purple-500" />
            <h2 className="font-semibold text-2xl">Tools & Platforms</h2>
          </div>
          <div className="flex flex-row flex-wrap gap-3">
            <SkillCard name="AI / LLM" iconUrl={openAIIcon}/>
            <SkillCard name="MongoDB" iconUrl={mongoIcon} />
            <SkillCard name="Firebase" iconUrl={fireBaseIcon}/>
            <SkillCard name="AWS" iconUrl={awsIcon}/>
            <SkillCard name="React Native" iconUrl={reactIcon}/>
            <SkillCard name="Tailwind CSS" iconUrl={tailWindIcon}/>
            <SkillCard name="JWT / Auth" iconUrl={jwtIcon}/>
            <SkillCard name="Linux / Bash" iconUrl={linuxIcon}/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Techinical;