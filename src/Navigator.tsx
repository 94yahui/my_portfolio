import {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon.svg";

interface NavigatorProps {
  dark: boolean;
  toggle: () => void;
  lang: "en" | "zh";
  toggleLang: () => void;
}

interface PillState {
  left: number;
  width: number;
  scaleY: number;
}

const Navigator = ({ dark, toggle, lang, toggleLang }: NavigatorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pill, setPill] = useState<PillState>({ left: 0, width: 0, scaleY: 1 });

  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const animIdRef = useRef<number | null>(null);
  const fromRectRef = useRef<{ left: number; width: number } | null>(null);
  const activeIndexRef = useRef(0);
  // 标记是否正在程序化滚动（点击导航触发的滚动），期间忽略 scroll spy
  const isScrollingByClickRef = useRef(false);
  const clickScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const buttons = {
    en: ["Projects", "Experience", "About", "Contact"],
    zh: ["项目", "经历", "关于", "联系"],
  };

  const labels = buttons[lang];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const getRect = useCallback((btn: HTMLButtonElement) => {
    return { left: btn.offsetLeft, width: btn.offsetWidth };
  }, []);

  const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const easeOutElastic = (t: number) => {
    if (t === 0 || t === 1) return t;
    const p = 0.65,
      s = p / 4;
    return Math.pow(2, -8 * t) * Math.sin(((t - s) * (2 * Math.PI)) / p) + 1;
  };

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animateTo = useCallback(
    (targetBtn: HTMLButtonElement) => {
      const from = fromRectRef.current ?? getRect(targetBtn);
      const to = getRect(targetBtn);
      fromRectRef.current = from;

      const dist = Math.abs(
        to.left + to.width / 2 - (from.left + from.width / 2),
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
          const midX = lerp(
            from.left + from.width / 2,
            to.left + to.width / 2,
            ep,
          );
          const w = lerp(
            from.width,
            from.width * stretchX,
            Math.sin(p * Math.PI),
          );
          const sy = lerp(1, squishY, Math.sin(p * Math.PI));
          left = midX - w / 2;
          width = w;
          scaleY = sy;
        } else {
          const p = (t - 0.42) / 0.58;
          const ep = easeOutElastic(p);
          const midX = to.left + to.width / 2;
          const w = lerp(from.width * stretchX * 0.55, to.width, ep);
          const sy = lerp(
            squishY * 1.1,
            1,
            easeOutElastic(Math.min(p * 0.85, 1)),
          );
          left = midX - w / 2;
          width = w;
          scaleY = sy;
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
    [getRect],
  );

  // 切换激活项（统一入口：scroll spy 和点击都走这里）
  const setActive = useCallback(
    (index: number) => {
      if (index === activeIndexRef.current) return;
      const btn = btnRefs.current[index];
      if (btn) animateTo(btn);
      setActiveIndex(index);
    },
    [animateTo],
  );

  useLayoutEffect(() => {
    const btn = btnRefs.current[0];
    if (!btn) return;
    const r = getRect(btn);
    setPill({ left: r.left, width: r.width, scaleY: 1 });
    fromRectRef.current = r;
  }, [getRect]);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // 🌟 Scroll Spy：监听各个 section 进入视口
  useEffect(() => {
    const sectionIds = buttons.en.map((name) => name.toLowerCase());
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // 记录每个 section 的可见比例
    const visibilityMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        // 点击导航触发的滚动期间，不要让 scroll spy 干扰
        if (isScrollingByClickRef.current) return;

        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        // 找出当前可见比例最高的 section
        let maxRatio = 0;
        let mostVisibleId: string | null = null;
        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleId = id;
          }
        });

        if (mostVisibleId !== null && maxRatio > 0) {
          const idx = sectionIds.indexOf(mostVisibleId);
          if (idx !== -1) setActive(idx);
        }
      },
      {
        // 多个阈值 → 能精确比较哪个更"可见"
        threshold: [0, 0.25, 0.5, 0.75, 1],
        // 顶部留出导航高度，让切换时机更自然
        rootMargin: "-80px 0px -35% 0px",
      },
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
    // 只依赖 setActive；section 列表是稳定的（页面结构不变）
  }, [setActive]);

  // resize 重新对齐当前激活项
  useEffect(() => {
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    let lastWidth = window.innerWidth;

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth === lastWidth) return;
      lastWidth = currentWidth;

      if (debounceTimer) clearTimeout(debounceTimer);
      setPill((prev) => ({ ...prev, width: 0 }));

      debounceTimer = setTimeout(() => {
        const btn = btnRefs.current[activeIndexRef.current];
        if (!btn) return;
        const r = getRect(btn);
        setPill({ left: r.left, width: r.width, scaleY: 1 });
        fromRectRef.current = r;
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, [getRect]);

  // 语言切换后重新对齐
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const btn = btnRefs.current[activeIndex];
      if (!btn) return;
      const r = getRect(btn);
      setPill({ left: r.left, width: r.width, scaleY: 1 });
      fromRectRef.current = r;
    });
    return () => cancelAnimationFrame(id);
  }, [lang, getRect]);

  return (
    <div className="flex justify-center w-full px-4">
      <div className="fixed top-6 z-100 bg-gray-700/80 backdrop-blur-md rounded-full p-1.5 md:p-2 shadow-2xl border-blue-500/50 border max-w-[95vw]">
        <div className="relative flex gap-0.5 md:gap-2 items-center">
          <div
            className="absolute top-0 bottom-0 rounded-full pointer-events-none z-0 bg-blue-500 shadow-lg"
            style={{
              left: pill.left,
              width: pill.width,
              transform: `scaleY(${pill.scaleY})`,
              transformOrigin: "center center",
            }}
          />

          {labels.map((label, index) => (
            <button
              key={buttons.en[index]}
              ref={(el) => {
                btnRefs.current[index] = el;
              }}
              onClick={() => {
                // 点击时锁定 scroll spy，等滚动结束再解锁
                isScrollingByClickRef.current = true;
                if (clickScrollTimerRef.current)
                  clearTimeout(clickScrollTimerRef.current);
                clickScrollTimerRef.current = setTimeout(() => {
                  isScrollingByClickRef.current = false;
                }, 800); // 略大于 smooth scroll 的时间

                setActive(index);
                scrollTo(buttons.en[index]);
              }}
              className={`relative z-10 text-[12px] md:text-sm py-2 px-2.5 md:px-4 rounded-2xl cursor-pointer transition-all duration-300 shrink-0 ${
                activeIndex === index
                  ? "text-white scale-105 md:scale-110"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}

          <div className="w-px h-4 dark:bg-gray-500/50 bg-gray-400/50 mx-1 shrink-0" />

          <div className="flex items-center">
            <button
              onClick={toggle}
              className="relative z-10 p-2 rounded-full cursor-pointer transition-all duration-300 text-gray-300 hover:text-white hover:bg-gray-600 shrink-0"
            >
              <img
                src={dark ? sunIcon : moonIcon}
                className="w-4 h-4 md:w-5 md:h-5 min-w-4"
                alt="theme"
              />
            </button>

            <button
              onClick={toggleLang}
              className="relative z-10 text-[12px] md:text-[14px] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 text-gray-300 hover:text-white hover:bg-gray-600 font-bold shrink-0"
            >
              {lang === "en" ? "中" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigator;