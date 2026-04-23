import { useState } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import Navigator from "./Navigator";
import Intro from "./Intro";
import Techinical from "./Technical";
import Projects from "./Projects";
import DevProcess from "./DevProcess";
import Contact from "./Contact";
import About from "./About";
import Experience from "./Experience";
// import RealLiquidNav from './components/LiquidGlassNav'
import { LangContext } from "./context/LangContext";
import "./index.css";

function App() {
  const { dark, toggle } = useDarkMode();
  const [lang, setLang] = useState<"en" | "zh">("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "zh" : "en"));

  return (
    <LangContext.Provider value={lang}>
      <div className="mb-6 bg-white dark:bg-gray-900 min-h-screen">
        <Navigator
          dark={dark}
          toggle={toggle}
          lang={lang}
          toggleLang={toggleLang}
        />
        {/* <RealLiquidNav/> */}
        <div className="mt-25 p-2 flex flex-col gap-3">
          <Intro />
          <Projects />
          <Techinical />
          <Experience />
          <DevProcess />
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
