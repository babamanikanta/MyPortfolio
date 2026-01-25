import { useState } from "react";
import skillsData from "../data/skillsData";
import SkillCard from "../Components/SkillCard";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillsData.map((group) => group.category)];
  // console.log(categories);
  return (
    <section id="skills" className="min-h-screen bg-slate-900 text-white px-12 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-violet-400 mb-4">My Skills</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Technologies, tools, and competencies I have developed through academics, projects, and continuous learning.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
              ${
                activeCategory === cat ? "bg-violet-500 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Categories */}
      {skillsData
        .filter((group) => {
          console.log(group.category, activeCategory);
          return activeCategory === "All" || group.category === activeCategory;
        })
        .map((group, idx) => {
          console.log("Rendering group:", group.category);
          return (
            <div key={idx} className="w-fit mb-20 rounded-3xl bg-slate-800/60 p-10 shadow-xl">
              {/* Category Title */}
              <h2 className="text-3xl font-semibold text-violet-300 mb-10">{group.category}</h2>

              {/* Skills */}
              <div className="flex flex-wrap gap-6">
                {group.skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Skills;
