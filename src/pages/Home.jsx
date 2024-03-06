import React from "react";
import SearchBox from "../components/Home/SearchBox";
import Carousel from "../components/Home/Carousel";
import NewActivity from "../components/Home/NewActivity";
import GuestHaveToSay from "../components/Home/GuestHaveToSay";
import PopularOutdoor from "../components/Home/PopularOutdoor";
import AmazingDestination from "../components/Home/AmazingDestination";

const Home = ({ windowWidth }) => {
  return (
    <div>
      <SearchBox />
      <Carousel
        title="Trending adventures"
        data={[1, 2, 3, 4, 5, 6]}
        windowWidth={windowWidth}
      />
      <Carousel
        title="Family Friendly adventures"
        data={[7, 8, 9, 0]}
        windowWidth={windowWidth}
      />
      <AmazingDestination windowWidth={windowWidth} />
      <NewActivity />
      <GuestHaveToSay />
      <PopularOutdoor windowWidth={windowWidth} />
    </div>
  );
};

export default Home;
