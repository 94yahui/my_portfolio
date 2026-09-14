import { useEffect, useRef, useState, type ReactNode } from "react";

interface TuckSectionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a section and, as it scrolls up out of view, tilts its top back
 * (narrows), shrinks, fades, and blurs — making the section feel like it
 * recedes/tucks into the screen.
 *
 * The scroll progress is measured from transform-independent layout offsets
 * (offsetTop / offsetHeight) so the element's own transform can't create a
 * feedback loop with the measurement.
 */
const TuckSection = ({ children, className = "" }: TuckSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
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

  return (
    <div
      ref={ref}
      style={{
        transform: `perspective(1000px) rotateX(${progress * 30}deg) scale(${1 - progress * 0.18})`,
        transformOrigin: "top center",
        filter: `blur(${progress * 16}px)`,
        opacity: 1 - progress * 0.75,
        willChange: "transform, filter, opacity",
      }}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
};

export default TuckSection;
