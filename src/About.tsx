import myphoto from "./assets/IMG_3592.png";
const About = () => {
  return (
    <div id="about" className="mt-30 scroll-mt-30 max-w-270 m-auto">
      <div className="text-center">
        <h1 className="text-3xl dark:text-gray-300">About Me</h1>

        <div className="mt-5 flex flex-col items-center ">
          <img
            src={myphoto}
            alt="me"
            className="rounded-full w-50 h-50 object-cover object-bottom shadow-2xl"
          />
          <p className="px-10 pt-10 text-gray-800 dark:text-gray-400 leading-relaxed font-normal">
            I am a{" "}
            <span className="font-extrabold text-black dark:text-gray-300">
              Full-stack Developer
            </span>{" "}
            who bridges the gap between sophisticated design and
            high-performance code. Currently completing the{" "}
            <span className="italic font-bold text-black dark:text-gray-300">
              Web and Mobile App Development
            </span>{" "}
            program at{" "}
            <span className="font-bold text-[#f05a22]">Langara College</span>, I
            specialize in building intuitive,{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f05a22] to-[#a855f7] hover:opacity-80 transition-opacity cursor-default">
              AI-enhanced applications
            </span>{" "}
            using <span className="text-blue-600 font-medium">React</span>,{" "}
            <span className="text-blue-600 font-medium">Swift</span>, and{" "}
            <span className="text-blue-600 font-medium">Node.js</span>. My
            mission is simple: transforming complex user needs into seamless
            digital realities through clean architecture and thoughtful UX.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
