import Button from "../Elements/Button";

const MobileAdventure = () => {
  return (
    <div className="flex-col gap-4 hidden sm:flex">
      <p className="font-bold text-[18px]">Adventure guide</p>
      <div className="bg-[#F4EEE0] rounded-2xl flex p-[16px] items-center gap-2">
        <img src="src/assets/brand.png" alt="brand" />
        <span className="font-bold text-[18px]">Wunderlust Tours</span>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-[14px]">Adventure time</p>
          <p className="font-bold">8 hours</p>
        </div>
        <div>
          <p className="text-[14px]">Activity</p>
          <p className="font-bold">Rafting</p>
        </div>
        <div>
          <p className="text-[14px]">Guide licensed</p>
          <p className="font-bold">Yes</p>
        </div>
      </div>
      <div className="rounded-3xl shadow-md">
        <p className="bg-[#3E3E3D] text-white text-[25px] p-[16px] rounded-t-3xl">
          As low as $50
        </p>
        <div className="flex flex-col p-[20px] gap-2">
          <div className="flex flex-wrap items-center gap-2 bg-white w-full outline-none mx-auto px-3 py-2 border-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#838381"
                d="M7 2h1a1 1 0 0 1 1 1v1h5V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3V3a1 1 0 0 1 1-1m8 2h1V3h-1zM8 4V3H7v1zM6 5a2 2 0 0 0-2 2v1h15V7a2 2 0 0 0-2-2zM4 18a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9H4zm8-5h5v5h-5zm1 1v3h3v-3z"
              ></path>
            </svg>
            <input
              className="flex-1 outline-none text-[18px]"
              placeholder="Date"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 bg-white w-full outline-none mx-auto px-3 py-2 border-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#838381"
                d="M12 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 3c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15"
              ></path>
            </svg>
            <input
              className="flex-1 outline-none text-[18px]"
              placeholder="Guests"
            />
          </div>
          <div>
            <Button
              extraClass="w-full font-bold place-content-center"
              text="Request to Book"
              bgColor="#FFDE77"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAdventure;
