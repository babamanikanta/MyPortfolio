import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Sections/Home";
import Education from "./Sections/Education";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Certifications from "./Sections/Certifications";
import Contact from "./Sections/Contact";
import AllSkills from "./Sections/AllSkills";

function App() {
  return (
    <>
      <Navbar className="bg-slate-900" />

      <Routes>
        {/* MAIN SINGLE PAGE */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Home />
              </section>
              <section id="education">
                <Education />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="skills">
                <Skills />
              </section>

              <section id="certifications">
                <Certifications />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          }
        />

        {/* EXTRA PAGE */}
        <Route path="/skills/all" element={<AllSkills />} />
      </Routes>
    </>
  );
}

export default App;
