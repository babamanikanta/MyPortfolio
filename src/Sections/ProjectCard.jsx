const ProjectCard = ({ data }) => {
  return (
    <div className="w-full bg-slate-800 rounded-2xl p-5 flex flex-col gap-4 shadow-md hover:scale-105 transition">
      {/* Image */}
      <img
        className="h-50 w-full object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1761839257961-4dce65b72d99?w=600"
        alt="project"
      />

      <div>
        {/* Title */}
        <h1 className="text-xl font-semibold text-white">{data.title}</h1>
        <button className="px-4 py-1   bg-black/60 rounded-full text-sm text-violet-400 hover:text-violet-300 transition">
          <a target="_blank" href={data.links.github}>
            live
          </a>
        </button>
      </div>

      {/* Description */}
      <p className="text-slate-300 text-sm">{data.description}</p>

      {/* Points */}
      <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
        {data.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 mt-2">
        {data.tools.map((tool, idx) => (
          <span key={idx} className="px-3 py-1 bg-black/60 text-xs rounded-full text-slate-200 gap-3">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
