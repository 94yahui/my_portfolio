import { useState, useEffect } from "react";
import Card from "./components/Card";
import { useLang } from "./context/LangContext";
import cartoonSpring from "./assets/cartoon-spring.png";
import cartoonSummer from "./assets/cartoon-summer.png";
import cartoonWinter from "./assets/cartoon-winter.png";
import cartoonFall from "./assets/cartoon-guy.png";
import cartoonFall1 from "./assets/cartoon-fall1.png";
import cartoonRain from "./assets/cartoon-rain.png";
import cartoonSnow from "./assets/cartoon-snow.png";
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

const t = {
  en: {
    hi: "Hi, I'm",
    title: "Full stack developer",
    download: "Download Resume",
    description: (
      <>
        Crafting exceptional web and mobile experiences with{" "}
        <span className="text-purple-400 text-xl">React</span>,{" "}
        <span className="text-white text-xl">Swift</span>,{" "}
        <span className="text-red-400 text-xl">TypeScript</span> and{" "}
        <span className="text-green-500 text-xl">Node.js</span>
      </>
    ),
    cards: ["AI Driven Dev", "Cross Platform", "10+ Projects", "UI/UX Mindset"],
    weatherCity: "Vancouver, BC"
  },
  zh: {
    hi: "你好，我是",
    title: "全栈开发者",
    download: "下载简历",
    description: (
      <>
        专注于使用{" "}
        <span className="text-purple-400 text-xl">React</span>、{" "}
        <span className="text-white text-xl">Swift</span>、{" "}
        <span className="text-red-400 text-xl">TypeScript</span> 和{" "}
        <span className="text-green-500 text-xl">Node.js</span>{" "}
        构建优质的 Web 与移动端体验
      </>
    ),
    cards: ["AI 驱动开发", "跨平台应用", "10+ 项目", "UI/UX 思维"],
    weatherCity: "温哥华, BC"
  },
};

const cardIcons = [openAIIcon, phoneIcon, folderIcon, penIcon];

const Intro = () => {
  const lang = useLang();
  const text = t[lang];
  const [weatherImg, setWeatherImg] = useState(cartoonSpring);

  useEffect(() => {
    const fetchWeather = async () => {
      const currentMonth = new Date().getMonth() + 1;

      const getFallbackSeasonImg = () => {
        if (currentMonth >= 3 && currentMonth <= 5) return cartoonSpring;
        if (currentMonth >= 6 && currentMonth <= 8) return cartoonSummer;
        if (currentMonth >= 9 && currentMonth <= 11) return cartoonFall;
        return cartoonWinter;
      };

      try {
        const API_KEY = (import.meta.env as any).VITE_WEATHER_API_KEY;
        const city = "Vancouver";
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) throw new Error("Weather API error");

        const data = await response.json();
        const temp = data.main.temp;
        const condition = data.weather[0].main;

        if (["Rain", "Drizzle", "Thunderstorm"].includes(condition)) {
          setWeatherImg(cartoonRain);
        } else if (condition === "Snow") {
          setWeatherImg(cartoonSnow);
        } else if (temp <= 5) {
          setWeatherImg(cartoonWinter);
        } else if (temp <= 10) {
          setWeatherImg(cartoonFall1);
        } else if (temp <= 15) {
          setWeatherImg(cartoonFall);
        } else if (temp <= 20) {
          setWeatherImg(cartoonSpring);
        } else {
          setWeatherImg(cartoonSummer);
        }
      } catch (error) {
        console.error("Using fallback season logic:", error);
        setWeatherImg(getFallbackSeasonImg());
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="relative m-auto max-w-270 bg-gray-200 rounded-2xl bg-linear-to-br from-blue-500 to-black w-full flex items-center">
      <div>
        <div className="p-8 text-center">
          <p className="text-gray-100 sm:text-2xl">{text.hi}</p>
          <h1 className="p-2 sm:text-8xl text-5xl font-semibold text-white">
            Yahui Xu
          </h1>
          <h2 className="p-2 sm:text-4xl text-2xl font-semibold text-gray-100">
            {text.title}
          </h2>

          <div className="mt-4 mb-2">
            <a
              href={lang === 'en'? "/yahui_resume.pdf" : "/yahui_resume_zh.pdf"}
              download
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-400 text-white text-sm font-medium hover:bg-blue-500/50 transition-colors duration-200"
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
              {text.download}
            </a>
          </div>

          <p className="p-2 text-gray-200">{text.description}</p>
        </div>

        <div className="p-8 flex gap-3 justify-center flex-wrap sm:flex-nowrap">
          {cardIcons.map((icon, i) => (
            <Card key={i} iconUrl={icon} descrp={text.cards[i]} />
          ))}
        </div>
      </div>

      <div className="md:block hidden self-end">
        <img src={weatherImg} alt="" className="relative z-30 w-150 rounded-r-2xl" />
        <div className="absolute bottom-4 right-4 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20">
          <div className="relative -left-1 flex items-center justify-center w-4 h-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60 [animation-duration:2.5s]" />
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-40 [animation-duration:2.5s] [animation-delay:1.2s]" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-red-400" />
          </div>
          {text.weatherCity}
        </div>
        <img src={reactIcon} alt="" className="z-10 hidden sm:block w-20 absolute top-8 right-25 blur-[2px]" />
        <img src={firebaseIcon} alt="" className="z-11 hidden sm:block w-15 absolute -top-10 right-5 rotate-30 blur-[2px]" />
        <img src={tsIcon} alt="" className="z-12 hidden sm:block w-20 absolute -top-15 right-50 -rotate-20 blur-[1px]" />
        <img src={nodejsIcon} alt="" className="z-16 hidden sm:block w-30 absolute top-55 right-2 rotate-320 blur-[2px]" />
        <img src={swiftIcon} alt="" className="z-14 hidden sm:block w-15 absolute top-30 right-8 rotate-10 blur-[1px]" />
        <img src={tailwindIcon} alt="" className="z-15 hidden sm:block w-20 absolute top-45 right-25 -rotate-20 blur-[2px]" />
      </div>
    </div>
  );
};

export default Intro;