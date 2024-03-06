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
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="mr-2"
        >
          <path
            fill="currentColor"
            d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.977 6.977 0 0 0 4.875-1.975z"
          ></path>
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
