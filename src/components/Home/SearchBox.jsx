const SearchBox = () => {
  return (
    <div className="bg-[url('/src/assets/bg1.png')] min-h-[429px] bg-cover flex justify-center content-center flex-col">
      <div className="flex flex-col items-center sm:flex-row justify-center content-center h-fit w-fit text-white text-2xl sm:text-4xl md:text-5xl mx-auto mb-12">
        <span className="sm:mb-0 sm:mr-2">Find your next outdoor</span>
        <span className="sm:ml-2"> adventure</span>
      </div>
      <div className=" flex flex-wrap items-center bg-white rounded-full sm:min-w-[600px] outline-none mx-auto px-3 py-2">
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
          placeholder="Search by activity or location"
        />
        <div className="flex items-center justify-center rounded-full w-[40px] h-[40px] bg-[#42B3A2]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="white"
              d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
