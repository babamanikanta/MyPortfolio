import React from "react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowDownToLine } from "lucide-react";
const Home = () => {
  return (
    <div className=" flex min-h-full">
      {/* Left Content */}
      <div className=" px-40 py-15 h-150 w-2/3 flex flex-col justify-evenly">
        <div className="flex gap-8 color-white">
          <a href="">
            <Linkedin size={50} color="#ffffff" strokeWidth={1.75} />
          </a>
          <a href="">
            {" "}
            <Github size={50} color="#ffffff" strokeWidth={1.75} />
          </a>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white color-white mb-10">Hi,i'm Kurmala Chenchu Baba Manikanta</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto voluptas saepe dicta, aspernatur
            suscipit, velit tenetur facere labore esse libero aut quasi modi officia impedit mollitia assumenda
            reiciendis ab explicabo repellendus! Non voluptas voluptatem omnis perspiciatis iste, eum repellat dolores?
          </h2>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-yellow-300 text-black px-4 py-2 rounded-3xl">
            <ArrowDownToLine size={20} color="#1a1919" strokeWidth={1} />
            Download CV
          </button>
          <button className="bg-yellow-300 text-black px-4 py-2 rounded-3xl">Contact Me</button>
        </div>
      </div>
      {/* Right Content */}
      <div>
        <img className="h-96 mt-20" src="src/Components/Alert.png" alt="jhhfgjkl" />
      </div>
    </div>
  );
};

export default Home;
