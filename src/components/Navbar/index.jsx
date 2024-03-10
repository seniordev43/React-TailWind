import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../Elements/Button";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="shadow-md">
      <header className="p-4 flex justify-between items-center container lg:mw-[1240px] ">
        <img
          src="src/assets/logo.png"
          alt="logo"
          className="sm:w-32 md:w-44 lg:w-56"
        />
        <nav className="flex items-center justify-center sm:gap-2 md:gap-10">
          {pathname !== "/" && (
            <div className="flex-wrap items-center bg-white rounded-full outline-none mx-auto px-3 py-2 border-1  hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 48 48"
                className="mr-2"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={17.808} cy={17.804} r={13.041}></circle>
                  <path d="m28.903 32.01l3.225-3.226l9.755 9.755l-3.226 3.225zm1.483-4.963l-3.222 3.223"></path>
                </g>
              </svg>
              <input
                className="flex-1 outline-none"
                placeholder="Deschutes River, Oregon"
              />
            </div>
          )}
          <a href="#" className="hidden md:inline">
            Destinations
          </a>
          <a href="#" className="hidden md:inline">
            Activities
          </a>
          <a href="#" className="hidden md:inline">
            Learn
          </a>

          <Button text="Sign up" bgColor="#42b3a2" textColor="white" small />

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
      <div className="flex md:hidden bg-[#f4eee0] w-full py-2 justify-center gap-10">
        <div className="flex flex-wrap bg-white items-center w-[70%] rounded-full outline-none px-3 py-2 border-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 48 48"
            className="mr-2"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={17.808} cy={17.804} r={13.041}></circle>
              <path d="m28.903 32.01l3.225-3.226l9.755 9.755l-3.226 3.225zm1.483-4.963l-3.222 3.223"></path>
            </g>
          </svg>
          <input
            className="flex-1 outline-none"
            placeholder="Deschutes River, Oregon"
          />
        </div>
        <div className="flex items-center justify-center rounded-full w-[40px] h-[40px] bg-[#3E3E3D]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 28 28"
          >
            <path
              fill="white"
              d="M17 19a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2zm4-6a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zm3-6a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
