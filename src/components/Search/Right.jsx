const Right = () => {
  return (
    <div className="relative h-full pb-40">
      <img className="h-full" src="src/assets/map.png" alt="map" />
      <div className="flex items-center justify-center rounded-full w-[40px] h-[40px] bg-[#42B3A2] absolute  left-4 top-8 transform -translate-y-1/2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <path
            fill="white"
            d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Right;
