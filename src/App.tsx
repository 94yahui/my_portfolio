import { useState } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import Navigator from "./Navigator";
import Intro from "./Intro";
import Techinical from "./Technical";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Experience from "./Experience";
import SideContactRail from "./components/SideContactRail";
// import RealLiquidNav from './components/LiquidGlassNav'
import { LangContext } from "./context/LangContext";
import "./index.css";

function App() {
  const { dark, toggle } = useDarkMode();
  const [lang, setLang] = useState<"en" | "zh">("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "zh" : "en"));

  return (
    <LangContext.Provider value={lang}>
      <div className="relative mb-6 bg-white dark:bg-gray-900 min-h-screen overflow-x-clip">
        <Navigator
          dark={dark}
          toggle={toggle}
          lang={lang}
          toggleLang={toggleLang}
        />
        <SideContactRail />
        {/* 整页点阵背景：铺满整页、跟内容一起滚动（不用 fixed，避免手机上滚动时反复重绘） */}
        <div aria-hidden className="page-grid pointer-events-none absolute inset-0 z-0" />
        {/* <RealLiquidNav/> */}
        <div className="relative mt-25 p-2 flex flex-col gap-3">
          <Intro />
          <Projects />
          <Techinical />
          <Experience />
          <About />
          <Contact />
          <footer className="text-center py-6 text-gray-400 dark:text-gray-600 text-sm">
            © 2026 Yahui Xu. All rights reserved.
          </footer>
        </div>
      </div>
    </LangContext.Provider>
  );
}

export default App;
