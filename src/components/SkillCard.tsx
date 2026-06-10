interface SkillCardProps {
  name: string;
  iconUrl: string;
  subname?: string;
}

const SkillCard = ({ name, iconUrl, subname }: SkillCardProps) => {
  return (
    <div
      tabIndex={0}
      className="relative p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-400 focus:border-blue-400 active:border-blue-400 hover:shadow-lg focus:shadow-lg active:shadow-lg transition-all duration-300 min-w-32 overflow-hidden group outline-none cursor-pointer"
    >
      <img
        src={iconUrl}
        alt={name}
        className="absolute -bottom-2 -right-2 w-16 h-16 object-contain opacity-10 grayscale group-hover:opacity-20 group-focus:opacity-20 group-active:opacity-20 group-hover:scale-110 group-focus:scale-110 group-active:scale-110 transition-all duration-300 z-0"
      />
      <p className="relative text-base font-semibold text-gray-800 dark:text-gray-400 z-10 tracking-wide">
        {name}
      </p>
      {subname && (
        <p className="relative text-xs text-blue-500 dark:text-blue-400 z-10 mt-0.5">
          {subname}
        </p>
      )}
      <div className="relative z-10 mt-2 w-6 h-0.5 bg-blue-400 rounded-full group-hover:w-10 group-focus:w-10 group-active:w-10 transition-all duration-300" />
    </div>
  );
};

export default SkillCard;
