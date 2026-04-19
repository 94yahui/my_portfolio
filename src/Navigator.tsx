import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon.svg";

interface NavigatorProps {
  dark: boolean;
  toggle: () => void;
}

interface PillState {
  left: number;
  width: number;
  scaleY: number;
}

const Navigator = ({ dark, toggle }: NavigatorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pill, setPill] = useState<PillState>({ left: 0, width: 0, scaleY: 1 });

  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const animIdRef = useRef<number | null>(null);
  const fromRectRef = useRef<{ left: number; width: number } | null>(null);
  const activeIndexRef = useRef(0);

  const buttons = ["Projects", "Experience", "About", "Contact"];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const getRect = useCallback((btn: HTMLButtonElement) => {
    return { left: btn.offsetLeft, width: btn.offsetWidth };
  }, []);

  const easeInOut = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const easeOutElastic = (t: number) => {
    if (t === 0 || t === 1) return t;
    const p = 0.65, s = p / 4;
    return Math.pow(2, -8 * t) * Math.sin(((t - s) * (2 * Math.PI)) / p) + 1;
  };

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animateTo = useCallback(
    (targetBtn: HTMLButtonElement) => {
      const from = fromRectRef.current ?? getRect(targetBtn);
      const to = getRect(targetBtn);
      fromRectRef.current = from;

      const dist = Math.abs(
        to.left + to.width / 2 - (from.left + from.width / 2)
      );
      const stretchX = Math.min(1 + dist / 160, 1.6);
      const squishY = Math.max(0.6, 1 - dist / 300);
      const duration = Math.min(440 + dist * 0.7, 740);

      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
      let startTime: number | null = null;

      const frame = (ts: number) => {
        if (!startTime) startTime = ts;
        const t = Math.min((ts - startTime) / duration, 1);
        let left: number, width: number, scaleY: number;

        if (t < 0.42) {
          const p = t / 0.42;
          const ep = easeInOut(p);
          const midX = lerp(from.left + from.width / 2, to.left + to.width / 2, ep);
          const w = lerp(from.width, from.width * stretchX, Math.sin(p * Math.PI));
          const sy = lerp(1, squishY, Math.sin(p * Math.PI));
          left = midX - w / 2; width = w; scaleY = sy;
        } else {
          const p = (t - 0.42) / 0.58;
          const ep = easeOutElastic(p);
          const midX = to.left + to.width / 2;
          const w = lerp(from.width * stretchX * 0.55, to.width, ep);
          const sy = lerp(squishY * 1.1, 1, easeOutElastic(Math.min(p * 0.85, 1)));
          left = midX - w / 2; width = w; scaleY = sy;
        }

        setPill({ left, width, scaleY });

        if (t < 1) {
          animIdRef.current = requestAnimationFrame(frame);
        } else {
          setPill({ left: to.left, width: to.width, scaleY: 1 });
          fromRectRef.current = to;
        }
      };

      animIdRef.current = requestAnimationFrame(frame);
    },
    [getRect]
  );

  // offsetLeft 不依赖 fixed 容器的屏幕位置，初始化即准确
  useLayoutEffect(() => {
    const btn = btnRefs.current[0];
    if (!btn) return;
    const r = getRect(btn);
    setPill({ left: r.left, width: r.width, scaleY: 1 });
    fromRectRef.current = r;
  }, [getRect]);

  // 同步 activeIndex 到 ref
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // resize 重新对齐当前激活项
  useEffect(() => {
    const handleResize = () => {
      const btn = btnRefs.current[activeIndexRef.current];
      if (!btn) return;
      const r = getRect(btn);
      setPill({ left: r.left, width: r.width, scaleY: 1 });
      fromRectRef.current = r;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getRect]);

  return (
    <div className="flex justify-center">
      <div className="fixed top-6 z-100 bg-gray-700/80 backdrop-blur-md rounded-full p-2 shadow-2xl border-blue-500/50 border">
        <div className="relative flex gap-2 items-center">

          <div
            className="absolute top-0 bottom-0 rounded-full pointer-events-none z-0 bg-blue-500 shadow-lg"
            style={{
              left: pill.left,
              width: pill.width,
              transform: `scaleY(${pill.scaleY})`,
              transformOrigin: "center center",
            }}
          />

          {buttons.map((label, index) => (
            <button
              key={label}
              ref={(el) => { btnRefs.current[index] = el; }}
              onClick={() => {
                // if (index === activeIndex) return;
                const btn = btnRefs.current[index];
                if (btn) animateTo(btn);
                setActiveIndex(index);
                scrollTo(label);
              }}
              className={`relative z-10 text-sm p-2 px-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? "text-white scale-110"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}

          <button
            onClick={toggle}
            className="relative z-10 text-sm p-2 px-3 rounded-full cursor-pointer transition-all duration-300 text-gray-300 hover:text-white hover:bg-gray-600"
          >
            <img src={dark ? sunIcon : moonIcon} />
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navigator;