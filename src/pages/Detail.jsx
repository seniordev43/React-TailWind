import React from "react";
import ImageOverView from "../components/Detail/ImageOverview";
import Content from "../components/Detail/Content";
import Adventure from "../components/Detail/Adventure";
import MobileAdventure from "../components/Detail/MobileAdventure";

const Detail = ({ windowWidth }) => {
  return (
    <div className="sm:container sm:px-32">
      <div className="py-[16px] px-[16px] sm:px-0 text-[#3E3E3D]">
        <span className="">Oregon &gt; Deschutes River</span>
      </div>
      <ImageOverView windowWidth={windowWidth} />
      {/* <MobileAdventure /> */}
      <div className="row">
        <div className={windowWidth > 768 ? "col-8" : "col-12"}>
          <Content />
        </div>
        <div className="col-4 hidden sm:block">
          <Adventure />
        </div>
      </div>
    </div>
  );
};

export default Detail;
