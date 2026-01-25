import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) => (isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300 transition");

  return (
    <nav className="max-w-5xl mx-auto px-12 py-4 bg-black text-white flex items-center justify-between rounded-2xl">
      {/* Logo */}
      <h1 className="font-bold text-2xl">Portfolio</h1>

      {/* Navigation Links */}
      <ul className="flex gap-8 items-center">
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={linkClass}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/certifications" className={linkClass}>
            Certifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* CTA */}
      <button className="bg-yellow-300 text-black px-5 py-2 rounded-3xl font-medium hover:bg-yellow-400 transition">
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;
