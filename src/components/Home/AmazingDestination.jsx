import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../Elements/Button";

const AmazingDestination = ({ windowWidth }) => {
  const Card = ({ data }) => {
    const { imgSrc, title, content } = data;
    return (
      <div className="flex flex-col-reverse sm:flex-row bg-white rounded-3xl h-full">
        <div className="p-4 w-full sm:w-[50%]">
          <span className="text-[18px] font-bold block">Steve Hunt</span>
          <p className="mt-2 text-[#838381]">{content}</p>
          <Button
            bgColor="white"
            text="See all adventures"
            textColor="#DB5037"
            border="2px solid #DB5037"
            marginTop="8px"
          />
        </div>
        <div className="w-full sm:w-[50%] flex items-center justify-center overflow-hidden h-60 sm:h-full">
          <img
            className="w-full h-full object-cover transform scale-x-[-1] sm:rounded-bl-3xl sm:rounded-t-none rounded-tr-3xl rounded-tl-3xl"
            src={imgSrc}
            alt="image"
          />
        </div>
      </div>
    );
  };

  const swiperRef = useRef(null);

  const data = [
    {
      title: "Deschutes River, Oregon",
      imgSrc: "/src/assets/amazing1.png",
      content:
        "ddd ddd dd dddd ddddddddddd dddddddddd The Deschutes River offers a wide range of outdoor activities, including fishing, kayaking, rafting, stand-up paddleboarding, and hiking. Surrounded by stunning wilderness areas, the river is a nature lover's paradise, perfect for both avid outdoor enthusiasts and those looking for a peaceful day in nature.",
    },
    {
      title: "San Juan Islands, Washington",
      imgSrc: "/src/assets/amazing2.png",
      content:
        "The San Juan Islands offer a wide range of outdoor activities, including kayaking, stand-up paddleboarding, whale watching, birdwatching, hiking, and biking. The islands' stunning natural beauty and abundance of wildlife make them a true paradise for outdoor enthusiasts.",
    },
    {
      title: "Deschutes River, Oregon",
      imgSrc: "/src/assets/amazing1.png",
      content:
        "The Deschutes River offers a wide range of outdoor activities, including fishing, kayaking, rafting, stand-up paddleboarding, and hiking. Surrounded by stunning wilderness areas, the river is a nature lover's paradise, perfect for both avid outdoor enthusiasts and those looking for a peaceful day in nature.",
    },
    {
      title: "San Juan Islands, Washington",
      imgSrc: "/src/assets/amazing2.png",
      content:
        "The San Juan Islands offer a wide range of outdoor activities, including kayaking, stand-up paddleboarding, whale watching, birdwatching, hiking, and biking. The islands' stunning natural beauty and abundance of wildlife make them a true paradise for outdoor enthusiasts.",
    },
  ];

  return (
    <div className="flex justify-center content-center flex-col w-full sm:rounded-l-3xl md:px-[160px] mt-8 sm:mt-20 bg-[#D7EBE2]">
      <div className="container mt-8">
        <div className="flex justify-around sm:justify-between mb-3">
          <span className="text-2xl sm:text-[34px]">Amazing Destinations</span>
          <Button
            extraClass="hidden sm:block"
            text="See all destinations"
            bgColor="#FFDE77"
          />
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={windowWidth < 992 ? 1 : 2}
          pagination={{
            el: ".my-custom-pagination-div",
            clickable: true,
          }}
          style={{
            "--swiper-pagination-color": "#838381",
            "--swiper-pagination-bullet-inactive-color": "#838381",
            "--swiper-pagination-bullet-inactive-opacity": "0.2",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "5px",
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card data={item} />
            </SwiperSlide>
          ))}
          <div className="flex justify-center w-full my-10 relative">
            <div className="max-w-max my-custom-pagination-div" />
            <div
              className="absolute left-1/4 sm:left-1/3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => {
                swiperRef.current.swiper?.slidePrev();
              }}
            >
              <img src="/src/assets/btn_prev.png" alt="Prev" />
            </div>
            <div
              className="absolute right-1/4 sm:right-1/3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => swiperRef.current.swiper?.slideNext()}
            >
              <img src="/src/assets/btn_next.png" alt="next" />
            </div>
          </div>
        </Swiper>

        <div className="flex justify-around">
          <Button
            extraClass="block sm:hidden mb-8"
            text="See all destinations"
            bgColor="#FFDE77"
          />
        </div>
      </div>
    </div>
  );
};

export default AmazingDestination;
