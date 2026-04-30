import myphoto from "./assets/myPhoto.png";
import { useLang } from "./context/LangContext";
import { useScrollReveal } from "./hooks/useScrollReveal";

const t = {
  en: {
    title: "About Me",
    paragraph: (
      <>
        I am a{" "}
        <span className="font-extrabold text-black dark:text-gray-300">
          Full-stack Developer
        </span>{" "}
        who bridges the gap between sophisticated design and high-performance
        code. Currently completing the{" "}
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
        <span className="text-blue-600 font-medium">Node.js</span>. My mission
        is simple: transforming complex user needs into seamless digital
        realities through clean architecture and thoughtful UX.
      </>
    ),
  },
  zh: {
    title: "关于我",
    paragraph: (
      <>
        我是一名{" "}
        <span className="font-extrabold text-black dark:text-gray-300">
          全栈开发者
        </span>
        ，专注于在精美设计与高性能代码之间架起桥梁。目前就读于{" "}
        <span className="font-bold text-[#f05a22]">兰加拉学院</span>的{" "}
        <span className="italic font-bold text-black dark:text-gray-300">
          Web 与移动端应用开发
        </span>{" "}
        专业，擅长使用 <span className="text-blue-600 font-medium">React</span>
        、 <span className="text-blue-600 font-medium">Swift</span> 和{" "}
        <span className="text-blue-600 font-medium">Node.js</span> 构建直观的{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f05a22] to-[#a855f7] hover:opacity-80 transition-opacity cursor-default">
          AI 增强型应用
        </span>
        。我的使命很简单：通过清晰的架构与用心的用户体验设计，将复杂的用户需求转化为流畅的数字产品。
      </>
    ),
  },
};

const About = () => {
  const lang = useLang();
  const text = t[lang];
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <div
      id="about"
      ref={ref}
      className={`mt-30 scroll-mt-30 max-w-270 m-auto transition-all duration-700 ease-out
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
    >
      <div className="text-center">
        <h1 className="text-3xl dark:text-gray-300">{text.title}</h1>
        <div className="mt-5 flex flex-col items-center">
          <img
            src={myphoto}
            alt="me"
            className="rounded-full w-50 h-50 object-cover object-bottom shadow-2xl"
          />
          <p className="px-10 pt-10 text-gray-800 dark:text-gray-400 leading-relaxed font-normal">
            {text.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
