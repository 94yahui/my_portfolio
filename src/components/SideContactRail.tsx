import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yahui-xu",
    icon: faLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/94yahui",
    icon: faGithub,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:xuyahui12@gmail.com",
    icon: faEnvelope,
    external: false,
  },
];

// 桌面端左下角竖排联系方式：滚过首屏后出现，到 Contact 区时隐藏（那里已有同样的图标）
const SideContactRail = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const compute = () => {
      rafId = null;
      const pastHero = window.scrollY > window.innerHeight * 0.6;
      const contact = document.getElementById("contact");
      const contactInView =
        !!contact && contact.getBoundingClientRect().top < window.innerHeight;
      setVisible(pastHero && !contactInView);
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(compute);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    compute();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <nav
      aria-label="Contact links"
      aria-hidden={!visible}
      className={`hidden xl:flex fixed left-8 bottom-0 z-50 flex-col items-center gap-5 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {links.map(({ label, href, icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          tabIndex={visible ? 0 : -1}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 transition duration-200"
        >
          <FontAwesomeIcon icon={icon} className="text-xl" />
        </a>
      ))}
      <div className="w-px h-24 bg-gray-300 dark:bg-gray-600" />
    </nav>
  );
};

export default SideContactRail;
