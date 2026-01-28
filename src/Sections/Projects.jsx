import React from "react";
import { useState } from "react";
import projectsData from "../data/ProjectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...projectsData.map((group) => group.category)];
  console.log(categories);
  return (
    <section id="projects" className="min-h-screen bg-slate-900 text-white px-12 py-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-violet-400 mb-4">My Projects</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Technologies, tools, and competencies I have developed through academics, projects, and continuous learning.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveCategory(cat);
            }}
            className={`px-6 py-2  rounded-full text-sm font-medium transition ${activeCategory === cat ? "bg-violet-500 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Categories */}
      {projectsData
        .filter((group) => {
          return activeCategory === "All" || group.category === activeCategory;
        })
        .map((group, idx) => {
          return (
            <div key={idx} className="flex flex-wrap">
              <ProjectCard data={group} />
            </div>
          );
        })}
    </section>
  );
};

export default Projects;
