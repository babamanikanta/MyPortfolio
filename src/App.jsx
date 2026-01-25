import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const Language = [
    {
      Title: "Python",
      level: "Intermediate",
      percent: "70%",
    },
    {
      Title: "C,C++",
      level: "Intermediate",
      percent: "70%",
    },
    {
      Title: "Java",
      level: "Basic",
      percent: "50%",
    },
    {
      Title: "JavaScript",
      level: "Advannced",
      percent: "95%",
    },
    {
      Title: "SQL",
      level: "Advanced",
      percent: "90%",
    },
  ];
  return (
    <div className="bg-slate-600 min-h-screen pt-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills data={Language} />} />
      </Routes>
    </div>
  );
};

export default App;
