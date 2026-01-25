import React from "react";

const Skills = (props) => {
  props.data.map(function (elem) {
    console.log(elem.Title[0]);
  });
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Heading */}
      <div className="text-center py-12">
        <h1 className="text-5xl mb-4 font-bold text-violet-400">My Skills</h1>
        <h4 className="max-w-2xl mx-auto text-slate-300">
          Technologies and tools I have worked with and continue to improve every day.
        </h4>
      </div>

      {/* Cards Container */}
      <div className="ml-30 mr-30 mt-5 px-10 py-12 bg-slate-800 flex flex-wrap justify-center gap-8">
        {props.data.map(function (elem, idx) {
          return (
            <>
              {/* CARD */}
              <div key={idx} className="bg-slate-700 h-50 w-60 flex flex-col justify-around p-4 rounded-xl shadow-lg">
                {/* Top */}
                <div className="bg-slate-800 px-4 py-3 flex items-center gap-3 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-violet-500 flex items-center justify-center font-bold">
                    {elem.Title[0]}
                  </div>
                  <h3 className="text-xl font-semibold">{elem.Title}</h3>
                </div>

                {/* Level */}
                <div className="flex justify-between mt-2 text-slate-300">
                  <h3>{elem.level}</h3>
                  <h3 className="text-amber-400 font-semibold">{elem.percent}</h3>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-slate-600 rounded-full">
                  <div className="h-full bg-violet-500 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
