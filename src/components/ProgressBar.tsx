import { useEffect, useState } from "react";
import {progressColors} from "../style/color.ts";

interface ProgressBarParams {
  name: string;
  length: number;
  subname: string;
  color: "blue" | "purple" | "green" | "orange";
}

const ProgressBar = ({
  name,
  length,
  subname,
  color = "blue",
}: ProgressBarParams) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(length);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [length]);

  return (
    <div className="py-2">
      <p className="font-semibold mb-1 dark:text-gray-500">
        {name}
        <span
          className={`pl-1 pr-1 text-[12px] ml-1 font-normal ${progressColors[color]} rounded-2xl`}
        >
          {subname}
        </span>
      </p>
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
        <div
          className="bg-linear-to-r to-blue-500 h-3 rounded-full transition-all duration-1000"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
