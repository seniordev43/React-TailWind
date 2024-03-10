import React from "react";
import { useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import Button from "../Elements/Button";

const DropDownComponent = ({ title, data }) => (
  <Dropdown>
    <Dropdown.Toggle as={CustomToggle}>{title}</Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item>
        <div className="flex p-4 gap-4">
          <div className="flex flex-col gap-3 m-0">
            <span className="font-bold text-[18px]">
              {title === "Destinations"
                ? "Popular Outdoor Destinations"
                : "Popular Activities"}
            </span>
            <div className="flex gap-24">
              {data.map((colItems, index) => (
                <div className="flex flex-col gap-1" key={`col${index}`}>
                  {colItems.map((item, index) => (
                    <span
                      className="flex whitespace-nowrap text=[#2F2F2E] hover:text-[#42B3A2] text-[#2F2F2E] hover:underline"
                      key={`item${index}`}
                    >
                      {item}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 20 48"
                        className="mt-1 ml-2"
                      >
                        <path
                          fill="none"
                          stroke="#2F2F2E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={4}
                          d="m19 12l12 12l-12 12"
                        ></path>
                      </svg>
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <span className="flex whitespace-nowrap text=[#2F2F2E] hover:text-[#42B3A2]  hover:underline">
              See all destination
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 20 48"
                className="mt-1 ml-2"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="m19 12l12 12l-12 12"
                ></path>
              </svg>
            </span>
          </div>
          {title === "Activities" && (
            <div className="flex flex-col gap-3 w-[180px]" key="img">
              <span className="font-bold text-[18px]">Upcoming</span>
              {[1, 2].map((subItem) => (
                <div key={subItem}>
                  <img
                    src="src/assets/amazing1.png"
                    className="w-full h-[100px] object-cover rounded-2xl"
                    alt="img"
                  />
                  <p className="font-bold text-[14px] mt-2">
                    Deschutes River, Oregon
                  </p>
                  <p className="text-[12px] text-[#838381]">25.04.2023</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="flex"
  >
    {children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 48 24"
      className="ml-2"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M36 18L24 30L12 18"
      ></path>
    </svg>
  </a>
));

const Navbar = ({ windowWidth }) => {
  const { pathname } = useLocation();

  const destinations = [
    [
      "Anchorage",
      "Atlanta",
      "Austin",
      "Boston",
      "Chicago",
      "Denver",
      "Houston",
      "Las Vegas",
      "Los Angeles",
      "Maui",
    ],
    [
      "Miami",
      "New York",
      "Orland",
      "Phoenix",
      "Portland",
      "Salt Lake City",
      "San Diego",
      "San Francisco",
      "Seattle",
      "Tampa",
    ],
  ];

  const activities = [
    [
      "Animals",
      "Fishing Charters",
      "Rock Climbing",
      "Backpacking",
      "Day trips",
      "Horse Riding",
      "Kayaking",
      "Photography",
      "Mountain Biking",
      "Scuba Diving",
    ],
    [
      "Survival Tranining",
      "Hunting",
      "Snowboarding",
      "Skiing",
      "Snowshoeing",
      "Sledding",
      "Overlanding",
      "4x4ing",
      "ATVs",
      "Motorcycling",
    ],
  ];

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
          {windowWidth > 768 && (
            <>
              <DropDownComponent title="Destinations" data={destinations} />
              <DropDownComponent title="Activities" data={activities} />
            </>
          )}
          <a href="#" className="hidden md:inline">
            Learn
          </a>

          {pathname !== "/detail" && (
            <Button
              text="Sign up"
              bgColor="#42b3a2"
              textColor="white"
              small={windowWidth < 768}
            />
          )}

          {pathname === "/detail" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              height="28px"
              viewBox="0 0 48 48"
              className="md:hidden mr-1"
            >
              <g
                fill="none"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={17.808} cy={17.804} r={13.041}></circle>
                <path d="m28.903 32.01l3.225-3.226l9.755 9.755l-3.226 3.225zm1.483-4.963l-3.222 3.223"></path>
              </g>
            </svg>
          )}

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
      {pathname !== "/detail" && (
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
                stroke="#3E3E3D"
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
      )}
    </div>
  );
};

export default Navbar;
