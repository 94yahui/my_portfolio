interface SkillCardProps {
  name: string;
  iconUrl: string;
}

const SkillCard = ({ name, iconUrl }: SkillCardProps) => {
  return (
    <div className="relative p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 min-w-32 overflow-hidden group">
      <img
        src={iconUrl}
        alt={name}
        className="absolute -bottom-2 -right-2 w-16 h-16 object-contain opacity-10 grayscale group-hover:opacity-20 group-hover:scale-110 transition-all duration-300 z-0"
      />
      <p className="relative text-base font-semibold text-gray-800 z-10 tracking-wide">
        {name}
      </p>
      <div className="relative z-10 mt-2 w-6 h-0.5 bg-blue-400 rounded-full group-hover:w-10 transition-all duration-300" />
    </div>
  );
};

export default SkillCard;