import React from "react";
import Button from "../Elements/Button";

const Navbar = () => {
  return (
    <header className="p-4 flex justify-between items-center container lg:mw-[1240px] ">
      <img
        src="src/assets/logo.png"
        alt="logo"
        className="sm:w-32 md:w-44 lg:w-56"
      />
      <nav className="flex items-center justify-center sm:gap-2 md:gap-10 ">
        <a href="#" className="hidden md:inline">
          Destinations
        </a>
        <a href="#" className="hidden md:inline">
          Activities
        </a>
        <a href="#" className="hidden md:inline">
          Learn
        </a>

        <Button text="Sign up" bgColor="#42b3a2" textColor="white" small={} />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          className="md:hidden"
        >
          <path
            fill="currentColor"
            d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
          ></path>
        </svg>
      </nav>
    </header>
  );
};

export default Navbar;
