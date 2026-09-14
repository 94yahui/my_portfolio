import { useState, useEffect, useRef } from "react";
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
import claudeIcon from "./assets/claude.svg";
import phoneIcon from "./assets/smartphone.png";
import folderIcon from "./assets/folder.png";
import penIcon from "./assets/pen.png";
import ContactIcon from "./components/ContactIcons";

const t = {
  en: {
    hi: "Hi, I'm",
    name: "Yahui Xu",
    title: "Full stack developer",
    download: "View Resume",
    description: (
      <>
        Crafting exceptional web and mobile experiences with{" "}
        <span className="text-green-500 text-xl">Next.js</span>,{" "}
        <span className="text-purple-400 text-xl">React</span>,{" "}
        <span className="text-red-400 text-xl">TypeScript</span> and{" "}
        <span className="text-yellow-400 text-xl">Swift</span>{" "}
      </>
    ),
    cards: ["AI Driven Dev", "Cross Platform", "10+ Projects", "UI/UX Mindset"],
    weatherCity: "Vancouver, BC",
  },
  zh: {
    hi: "你好，我是",
    name: "许亚辉",
    title: "全栈开发者",
    download: "查看简历",
    description: (
      <>
        专注于使用 <span className="text-green-500 text-xl">Next.js</span>、{" "}
        <span className="text-purple-400 text-xl">React</span>、{" "}
        <span className="text-red-400 text-xl">TypeScript</span> 和{" "}
        <span className="text-yellow-400 text-xl">Swift</span> 构建优质的 Web
        与移动端体验
      </>
    ),
    cards: ["AI 驱动开发", "跨平台应用", "10+ 项目", "UI/UX 思维"],
    weatherCity: "温哥华, 不列颠哥伦比亚省",
  },
};

const cardIcons = [claudeIcon, phoneIcon, folderIcon, penIcon];

const Intro = () => {
  const lang = useLang();
  const text = t[lang];
  const [weatherImg, setWeatherImg] = useState(cartoonSpring);

  // Scroll-driven "tuck away" effect: as the hero scrolls out, it tilts back
  // at the top (narrows), shrinks, blurs and fades — like it's receding.
  const heroRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = heroRef.current;
      if (!el) return;
      // Use layout offsets (transform-independent) to avoid a feedback loop:
      // the hero's own transform would otherwise distort getBoundingClientRect.
      let top = 0;
      let node: HTMLElement | null = el;
      while (node) {
        top += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      const height = el.offsetHeight || window.innerHeight;
      // Anchor to the section's BOTTOM edge: stay at 0 until the section is
      // actually leaving, then ramp 0→1 over the last `ramp` px before its
      // bottom exits the top of the viewport.
      const vh = window.innerHeight;
      const ramp = Math.min(vh * 0.6, height);
      const p = Math.min(
        Math.max((window.scrollY - (top + height - ramp)) / ramp, 0),
        1,
      );
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

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
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
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
    <div
      ref={heroRef}
      style={{
        transform: `perspective(1000px) rotateX(${progress * 30}deg) scale(${1 - progress * 0.18})`,
        transformOrigin: "top center",
        filter: `blur(${progress * 16}px)`,
        opacity: 1 - progress * 0.75,
        willChange: "transform, filter, opacity",
      }}
      className="relative m-auto max-w-270 rounded-2xl bg-linear-to-b from-[#0f2a4a] via-[#0b1c33] to-[#06101d] w-full flex items-center"
    >
      <div>
        <div className="p-8 text-center">
          <p className="text-[#86868b] sm:text-2xl">{text.hi}</p>
          <h1 className="p-2 sm:text-8xl text-5xl font-semibold text-white tracking-tight">
            {text.name}
          </h1>
          <h2 className="p-2 sm:text-4xl text-2xl font-semibold text-[#86868b] tracking-tight">
            {text.title}
          </h2>

          <p className="p-2 text-[#a1a1a6]">{text.description}</p>

          <div className="mt-4">
            <a
              href={
                lang === "en" ? "/yahui_resume.pdf" : "/许亚辉简历.pdf"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
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
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {text.download}
            </a>
            <div className="mt-5">
              <ContactIcon disableDarkMode={true} />
            </div>
          </div>

        </div>

        <div className="p-8 flex gap-3 justify-center flex-wrap sm:flex-nowrap">
          {cardIcons.map((icon, i) => (
            <Card key={i} iconUrl={icon} descrp={text.cards[i]} iconClassName={i === 0 ? "brightness-0 invert" : ""} />
          ))}
        </div>
      </div>

      <div className="md:block hidden self-end">
        <img
          src={weatherImg}
          alt=""
          className="relative z-30 w-150 rounded-r-2xl"
        />
        <div className="absolute bottom-4 right-4 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20">
          <div className="relative -left-1 flex items-center justify-center w-4 h-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 [animation-duration:2.5s]" />
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 [animation-duration:2.5s] [animation-delay:1.2s]" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-green-400" />
          </div>
          {text.weatherCity}
        </div>
        <img
          src={reactIcon}
          alt=""
          className="z-60 hidden sm:block w-20 absolute top-8 right-25 blur-[2px]"
        />
        <img
          src={firebaseIcon}
          alt=""
          className="z-61 hidden sm:block w-15 absolute -top-10 right-5 rotate-30 blur-[2px]"
        />
        <img
          src={tsIcon}
          alt=""
          className="z-62 hidden sm:block w-20 absolute -top-15 right-50 -rotate-20 blur-[1px]"
        />
        <img
          src={nodejsIcon}
          alt=""
          className="z-66 hidden sm:block w-30 absolute top-55 right-2 rotate-320 blur-[2px]"
        />
        <img
          src={swiftIcon}
          alt=""
          className="z-64 hidden sm:block w-15 absolute top-30 right-8 rotate-10 blur-[1px]"
        />
        <img
          src={tailwindIcon}
          alt=""
          className="z-65 hidden sm:block w-20 absolute top-45 right-25 -rotate-20 blur-[2px]"
        />
      </div>

      {/* Gradient border ring: bright blue highlight on top, fading down (like
          the About avatar circle) instead of a flat single-color border. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-50 rounded-2xl"
        style={{
          padding: "1.5px",
          background:
            "linear-gradient(to bottom, rgba(41,151,255,0.6), rgba(255,255,255,0.05))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </div>
  );
};

export default Intro;