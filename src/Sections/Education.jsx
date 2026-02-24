import React from "react";
import educationData from "../data/EducationData";


const Education = () => {
  return (
    <section id="education" className="min-h-screen bg-slate-900 text-white px-12 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-violet-400 mb-12">Education</h2>

        <div className="relative">
          {/* vertical line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-violet-700/40 rounded">
            <div className="w-full h-full opacity-80" />
          </div>

          <div className="space-y-12">
            {educationData.map((item, idx) => (
              <div key={idx} className="relative pl-16 md:pl-24">
                {/* circle marker */}
                <div className="absolute left-4 md:left-8 -top-1">
                  <div className="h-5 w-5 rounded-full bg-slate-900 border-4 border-violet-400 shadow-md" />
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-slate-400">{item.period}</p>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mt-2">{item.title}</h3>
                      <p className="text-sm text-slate-300 mt-1">{item.org}</p>
                      <p className="text-sm text-slate-300 mt-3 font-medium">{item.extra}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
