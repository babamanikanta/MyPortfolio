const SkillCard = ({ skill }) => {
  //   const Icon = skill.icon;

  return (
    <div className="w-40 h-40 bg-slate-900 rounded-2xl flex flex-col items-center justify-center shadow-md hover:scale-105 transition">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Progress Circle */}
        <svg className="absolute top-0 left-0" width="80" height="80">
          {/* Background circle */}
          <circle cx="40" cy="40" r="36" stroke="#334155" strokeWidth="6" fill="none" />

          {/* Progress circle */}
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="#a855f7"
            strokeWidth="6"
            fill="none"
            strokeDasharray={`${(skill.percent / 100) * 226} 226`}
            strokeLinecap="round"
            transform="rotate(-90 40 40)"
          />
        </svg>

        {/* Icon */}
        <i className={`${skill.icon} text-3xl text-violet-400 z-10`}></i>
      </div>

      {/* <i className={`${skill.icon} text-5xl mb-3`}></i> */}
      <p className="font-medium">{skill.name}</p>
      <span className="text-sm text-violet-400">{skill.percent}%</span>
    </div>
  );
};

export default SkillCard;
