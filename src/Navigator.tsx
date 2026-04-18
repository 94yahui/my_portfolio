import { useState } from "react";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon.svg";

interface NavigatorProps {
  dark: boolean;
  toggle: () => void;
}

const Navigator = ({ dark, toggle }: NavigatorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const buttons = ["Projects", "Experience", "About", "Contact"];

  const scrollTo = (id:string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="fixed top-6 z-100 bg-gray-700/80 backdrop-blur-md rounded-3xl p-2 flex gap-2 justify-around w-fit shadow-2xl border-blue-500/50 border">
        {buttons.map((label, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={label}
              onClick={() => {
                setActiveIndex(index);
                scrollTo(label);
              }}
              className={`text-sm p-2 px-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                isActive 
                  ? "bg-blue-500 scale-105 text-white shadow-lg" 
                  : "text-gray-300 hover:text-white hover:bg-gray-600"
              }`}
            >
              {label}
            </button>
          );
        })}

        <button
          onClick={toggle}
          className="text-sm p-2 px-3 rounded-2xl cursor-pointer transition-all duration-300 text-gray-300 hover:text-white hover:bg-gray-600"
        >
          <img src={dark? sunIcon : moonIcon}/>
        </button>
      </div>
    </div>
  );
};

export default Navigator;