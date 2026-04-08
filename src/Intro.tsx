import Card from "./components/Card";
import cartoonPhoto from "./assets/cartoon.png";
import reactIcon from "./assets/react.svg";
import firebaseIcon from "./assets/firebase.svg";
import tsIcon from "./assets/ts.png";
import nodejsIcon from "./assets/nodejs.svg";
import swiftIcon from "./assets/swift.png";
import tailwindIcon from "./assets/tailwindcss.svg";
import openAIIcon from "./assets/openai_dark.svg";
import phoneIcon from "./assets/smartphone.png";
import folderIcon from "./assets/folder.png";
import penIcon from "./assets/pen.png";

const Intro = () => {
  return (
    <div className="relative m-auto max-w-270 bg-gray-200 rounded-2xl bg-linear-to-br from-blue-500 to-gray-800 w-full flex items-end">
      <div>
        <div className="p-8 text-center">
          <p className="text-gray-100 sm:text-2xl">Hi, I'm</p>
          <h1 className="p-2 sm:text-8xl text-5xl font-semibold text-white">
            Yahui Xu
          </h1>
          <h2 className="p-2 sm:text-4xl text-2xl font-semibold text-gray-100">
            Full stack developer
          </h2>

          <div className="mt-4 mb-2">
            <a
              href="/yahui_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>

          <p className="p-2 text-gray-200">
            Crafting exceptional web and mobile experiences with{" "}
            <span className="text-purple-400 text-xl">React</span>,{" "}
            <span className="text-white text-xl">Swift</span>,{" "}
            <span className="text-red-400 text-xl">TypeScript</span> and{" "}
            <span className="text-green-500 text-xl">Node.js</span>
          </p>
        </div>
        <div className="p-8 flex gap-3 justify-center flex-wrap sm:flex-nowrap">
          <Card iconUrl={openAIIcon} descrp="AI Driven Dev" />
          <Card iconUrl={phoneIcon} descrp="Cross Platform" />
          <Card iconUrl={folderIcon} descrp="10+ Projects" />
          <Card iconUrl={penIcon} descrp="UI/UX Mindset" />
        </div>
      </div>
      <div className="md:block hidden">
        <img
          src={cartoonPhoto}
          alt=""
          className="relative z-30 w-150 rounded-r-2xl"
        />
        <img
          src={reactIcon}
          alt=""
          className="z-10 hidden sm:block w-20 absolute top-12 right-10"
        />
        <img
          src={firebaseIcon}
          alt=""
          className="z-11 hidden sm:block w-15 absolute -top-10 right-5 rotate-20"
        />
        <img
          src={tsIcon}
          alt=""
          className="z-12 hidden sm:block w-20 absolute -top-15 right-40 -rotate-20"
        />
        <img
          src={nodejsIcon}
          alt=""
          className="z-16 hidden sm:block w-30 absolute top-3 right-70 rotate-10"
        />
        <img
          src={swiftIcon}
          alt=""
          className="z-14 hidden sm:block w-15 absolute top-45 right-5 rotate-10"
        />
        <img
          src={tailwindIcon}
          alt=""
          className="z-15 hidden sm:block w-15 absolute top-35 right-20 -rotate-20"
        />
      </div>
    </div>
  );
};

export default Intro;
