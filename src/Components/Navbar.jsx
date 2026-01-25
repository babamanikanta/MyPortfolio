import React, { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "skills", "certifications", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");

  // scroll to section
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // observe active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }, // 60% visible
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="max-w-5xl mx-auto px-12 py-4 bg-black text-white flex items-center justify-between rounded-2xl sticky top-4 z-50">
      {/* Logo */}
      <h1 className="font-bold text-2xl cursor-pointer" onClick={() => scrollTo("home")}>
        Portfolio
      </h1>

      {/* Links */}
      <ul className="flex gap-8 items-center">
        {sections.map((sec) => (
          <li
            key={sec}
            onClick={() => scrollTo(sec)}
            className={`cursor-pointer capitalize transition
              ${active === sec ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"}`}
          >
            {sec}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => scrollTo("contact")}
        className="bg-yellow-300 text-black px-5 py-2 rounded-3xl font-medium hover:bg-yellow-400 transition"
      >
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;
