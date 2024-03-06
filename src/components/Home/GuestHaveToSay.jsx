import { Rating } from "react-simple-star-rating";

const GuestHaveToSay = () => {
  const Card = ({ imgSrc, author, content }) => {
    return (
      <div>
        <div className="flex">
          <img
            className="w-[40px] h-[40px]"
            src="/src/assets/guest1.png"
            alt="avatar"
          />
          <div className="ml-2">
            <span className="text-[18px] font-bold block">Steve Hunt</span>
            <div style={{ marginTop: -13 }}>
              <Rating initialValue={5} size={16} />
            </div>
          </div>
        </div>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam ex ea commodo consequat. Duis aute irure dolor in reprehe
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    );
  };

  const data = [1, 2, 3];
  return (
    <div className="flex justify-center content-centerw-full md:rounded-r-3xl md:px-[160px] py-10 md:py-20 md:mt-20 md:mb-20 bg-[#D7EBE2]">
      <div className="container ">
        <div className="flex justify-center">
          <span className="text-2xl lg:text-[34px] text-[#2F2F2E]">
            What guests have to say
          </span>
        </div>
        <div className="flex justify-between gap-20 mt-8 flex-col md:flex-row">
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestHaveToSay;
