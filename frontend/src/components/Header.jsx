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

      <nav className="flex flex-wrap space-x-6">
        <Link to="/about" className="text-2xl text-black hover:underline">
          About
        </Link>
        <Link to="/work" className="text-2xl text-black hover:underline">
          Work
        </Link>
        <Link to="/resume" className="text-2xl text-black hover:underline">
          Resume
        </Link>
      </nav>
    </header>
  );
};

export default Header;
