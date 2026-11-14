const progressColors = {
  blue: "bg-blue-500/30 border-blue-500 text-blue-500 border",
  purple: "bg-purple-500/30 border-purple-500 text-purple-500 border",
  green: "bg-green-500/30 border-green-500 text-green-500 border",
  orange: "bg-orange-500/30 border-orange-500 text-orange-500 border",
};

const devProcessColors = {
  blue: "bg-blue-500/30 text-blue-500",
  purple: "bg-purple-500/30 text-purple-500",
  green: "bg-green-500/30 text-green-500",
  orange: "bg-orange-500/30 text-orange-500",
  // 「城堡夜空」主题：图标和数字跟随各自卡片的主色
  dusk: "bg-indigo-500/25 text-indigo-500 dark:text-indigo-300",
  night: "bg-fuchsia-500/25 text-fuchsia-600 dark:text-fuchsia-300",
  fireworks: "bg-pink-500/25 text-pink-600 dark:text-pink-300",
};

const bgDevProcessColors = {
  blue: "bg-linear-to-br from-blue-500 to-purple-500",
  purple: "bg-linear-to-br from-purple-500 to-pink-500",
  green: "bg-linear-to-br from-green-500 to-blue-500",
  orange: "bg-linear-to-br from-orange-500 to-yellow-500",
  // 黄昏许愿星 → 魔法紫夜 → 城堡烟花：三张卡片首尾相接成一条渐变
  dusk: "bg-linear-to-br from-[#1E3A8A] to-[#6366F1]",
  night: "bg-linear-to-br from-[#6D28D9] to-[#C026D3]",
  fireworks: "bg-linear-to-br from-[#DB2777] to-[#F59E0B]",
};

const glowDevProcessColors = {
  blue: "hover:shadow-[0_0_35px_8px_rgba(59,130,246,0.45)] focus:shadow-[0_0_35px_8px_rgba(59,130,246,0.45)] active:shadow-[0_0_35px_8px_rgba(59,130,246,0.45)]",
  purple: "hover:shadow-[0_0_35px_8px_rgba(168,85,247,0.45)] focus:shadow-[0_0_35px_8px_rgba(168,85,247,0.45)] active:shadow-[0_0_35px_8px_rgba(168,85,247,0.45)]",
  green: "hover:shadow-[0_0_35px_8px_rgba(34,197,94,0.45)] focus:shadow-[0_0_35px_8px_rgba(34,197,94,0.45)] active:shadow-[0_0_35px_8px_rgba(34,197,94,0.45)]",
  orange: "hover:shadow-[0_0_35px_8px_rgba(249,115,22,0.45)] focus:shadow-[0_0_35px_8px_rgba(249,115,22,0.45)] active:shadow-[0_0_35px_8px_rgba(249,115,22,0.45)]",
  dusk: "hover:shadow-[0_0_35px_8px_rgba(99,102,241,0.45)] focus:shadow-[0_0_35px_8px_rgba(99,102,241,0.45)] active:shadow-[0_0_35px_8px_rgba(99,102,241,0.45)]",
  night: "hover:shadow-[0_0_35px_8px_rgba(192,38,211,0.45)] focus:shadow-[0_0_35px_8px_rgba(192,38,211,0.45)] active:shadow-[0_0_35px_8px_rgba(192,38,211,0.45)]",
  fireworks: "hover:shadow-[0_0_35px_8px_rgba(245,158,11,0.45)] focus:shadow-[0_0_35px_8px_rgba(245,158,11,0.45)] active:shadow-[0_0_35px_8px_rgba(245,158,11,0.45)]",
};

export {progressColors, devProcessColors, bgDevProcessColors, glowDevProcessColors};
