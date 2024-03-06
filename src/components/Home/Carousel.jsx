import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../Elements/Button";

const Card = ({ data }) => {
  return (
    <div className="blockmax-w-sm  rounded-3xl shadow-md bg-[#FDFCF9]">
      <div className="relative">
        <img
          className="rounded-t-3xl w-full"
          src={`/src/assets/card${(data % 3) + 1}.png`}
          alt="card image"
        />
        <Button
          extraClass="absolute right-2 top-8 transform -translate-y-1/2 cursor-pointer"
          text="Low as $225"
          bgColor="#DB5037"
          textColor="white"
        />
      </div>
      <div className="p-4">
        <p className="text-lg text-gray-900">Cascade Lake Trip - Half Day</p>
        <p className="font-normal text-base text-[#838381]">
          Cascade Lakes, OR
        </p>
        <div className="flex justify-between h-[36px]">
          <div className="flex items-center">
            <img src="/src/assets/image1.png" alt="card image" />
            <p className="font-normal text-base pl-1 text-[#838381]">
              Fly & Field Outfitters
            </p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 28"
            >
              <path
                fill="#FFDE77"
                d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
              ></path>
            </svg>
            <span>4.2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ windowWidth, title, data = [1, 2, 3, 4, 5, 6] }) => {
  const swiperRef = useRef(null);

  return (
    <div className="container relative md:px-32 py-12">
      <div className="hidden md:block">
        {/* prev button start */}
        <div
          className="absolute left-10 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => {
            swiperRef.current.swiper?.slidePrev();
          }}
        >
          <img src="/src/assets/btn_prev.png" alt="Prev" />
        </div>

        {/* next button start */}
        <div
          className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => swiperRef.current.swiper?.slideNext()}
        >
          <img src="/src/assets/btn_next.png" alt="next" />
        </div>
      </div>

      {/* title start */}
      <div className="mb-3">
        <span className="text-2xl md:text-[34px]">{title}</span>
      </div>

      {/* carousel start */}
      <Swiper
        ref={swiperRef}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={windowWidth < 768 ? 1 : windowWidth < 992 ? 2 : 3}
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
        <div className="flex relative justify-center w-full mt-3 py-2">
          <div className="max-w-max my-custom-pagination-div" />

          <div className="block md:hidden">
            {/* prev button start */}
            <div
              className="absolute left-10 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => {
                swiperRef.current.swiper?.slidePrev();
              }}
            >
              <img src="/src/assets/btn_prev.png" alt="Prev" />
            </div>

            {/* next button start */}
            <div
              className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => swiperRef.current.swiper?.slideNext()}
            >
              <img src="/src/assets/btn_next.png" alt="next" />
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
