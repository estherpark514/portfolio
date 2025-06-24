import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-6 px-10">
      <div className="flex-shrink-0">
        <Link to="/">
          <div className="text-2xl">Esther's Portfolio</div>
        </Link>
      </div>

      {/* <nav className="flex flex-wrap space-x-6">
        <Link to="/" className="text-2xl text-black hover:underline">
          About
        </Link>
        <Link to="/projects" className="text-2xl text-black hover:underline">
          Projects
        </Link>
        <a
          href="https://drive.google.com/file/d/1_zCR_9_ftAO-h4kev8YLHGuNjvEpdk9r/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black hover:underline"
        >
          Resume
        </a>
      </nav> */}
    </header>
  );
};

export default Header;
