import React from "react";
import Left from "../components/Search/Left";
import Right from "../components/Search/Right";

const Search = () => {
  return (
    <div className="flex flex-row container">
      <div className="w-full md:w-[50%]">
        <Left />
      </div>
      <div className="w-full md:w-[50%] hidden md:block">
        <Right />
      </div>
    </div>
  );
};

export default Search;
