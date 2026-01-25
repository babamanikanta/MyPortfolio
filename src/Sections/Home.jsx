import React from "react";
import { Linkedin, Github, ArrowDownToLine } from "lucide-react";
import heroImg from "../assets/Alert.png";

const Home = () => {
  return (
    <section className="bg-slate-900 text-white max-h-screen">
      <div className="max-w-5xl mx-auto px-12 py-20 flex items-center justify-between">
        {/* Left */}
        <div className="max-w-xl flex flex-col gap-8">
          {/* Socials */}
          <div className="flex gap-6">
            <Linkedin size={36} className="hover:text-yellow-300 cursor-pointer" />
            <Github size={36} className="hover:text-yellow-300 cursor-pointer" />
          </div>

          {/* Text */}
          <div>
            <h1 className="text-4xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-yellow-300">
                Kurmala Chenchu <br />
                Baba Manikanta
              </span>
            </h1>
            <p className="text-slate-300 leading-relaxed">
              I am a frontend developer passionate about building clean, modern, and responsive web applications using
              React and Tailwind CSS.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-yellow-300 text-black px-5 py-2 rounded-full font-medium">
              <ArrowDownToLine size={18} />
              Download CV
            </button>
            <button className="border border-yellow-300 text-yellow-300 px-5 py-2 rounded-full">Contact Me</button>
          </div>
        </div>

        {/* Right */}
        <div>
          <img src={heroImg} alt="hero" className="h-96" />
        </div>
      </div>
    </section>
  );
};

export default Home;
