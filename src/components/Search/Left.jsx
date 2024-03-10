import Button from "../Elements/Button";

const Card = ({ data }) => {
  const imgUrl = `/src/assets/card${(data % 3) + 1}.png`;
  return (
    <div className="block md:w-[90%]  rounded-3xl shadow-md bg-[#FDFCF9]">
      <div className="relative">
        <div className="flex flex-row">
          <img
            className="rounded-tl-2xl w-[64%] border-r-[1px] border-white"
            src={imgUrl}
            alt="card image"
          />
          <div className="flex flex-col">
            <img
              className="rounded-tr-2xl w-full h-[50%]"
              src={imgUrl}
              alt="card image"
            />
            <img
              className="w-full h-[50%] border-t-[1px]"
              src={imgUrl}
              alt="card image"
            />
          </div>
        </div>
        <Button
          extraClass="absolute right-2 top-6 transform -translate-y-1/2 cursor-pointer text-xs md:hidden"
          text="Low as $225"
          bgColor="#DB5037"
          textColor="white"
        />
        <Button
          extraClass="absolute left-2 bottom-0 transform -translate-y-1/2 cursor-pointer text-xs hidden md:block"
          text="Low as $225"
          bgColor="#DB5037"
          textColor="white"
        />
      </div>
      <div className="p-3">
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

const Left = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-[#F4EEE0] justify-center hidden md:block">
        <ul className="navbar-nav gap-4 w-full ml-32">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Activity
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Suitability
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Guests Size
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Pricel
            </a>
          </li>
        </ul>
      </nav>

      <div className="md:ml-32 mt-8 h-full">
        <span className="block text-2xl md:text-[34px]">
          Deschutes River, Oregon
        </span>
        <span className="mb-4 block text-base text-[#838381]">
          Deschutes River, Oregon
        </span>
        <div className="flex flex-col gap-16">
          {[1, 2, 3, 4].map((item) => (
            <Card data={item} key={item} />
          ))}
        </div>
        <div className="flex justify-around">
          <Button
            extraClass="block sm:hidden mt-4"
            text="View Map"
            bgColor="#FFDE77"
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 28 28"
                className="mt-[2px] mr-2"
              >
                <path
                  fill="currentColor"
                  d="M22 3c-3.301 0-6 2.699-6 6c0 .992.383 2.004.875 3.125a34.955 34.955 0 0 0 1.75 3.406a62.054 62.054 0 0 0 2.563 4.031L22 20.75l.813-1.188s1.288-1.836 2.562-4.03a35.07 35.07 0 0 0 1.75-3.407C27.617 11.004 28 9.992 28 9c0-3.301-2.699-6-6-6M11.969 4.938L4 8.344V27.53l8.031-3.468l8 3L28 23.655v-8.718a49.281 49.281 0 0 1-2 3.437v3.969l-5 2.125v-1.625l-1.469-2.125c-.156-.227-.34-.497-.531-.782v4.625l-6-2.25V7.438l1.094.407a7.865 7.865 0 0 1 .531-1.938zM22 5c2.219 0 4 1.781 4 4c0 .387-.241 1.3-.688 2.313c-.445 1.011-1.074 2.16-1.687 3.218c-.816 1.406-1.168 1.908-1.625 2.596c-.457-.688-.809-1.19-1.625-2.596c-.613-1.059-1.241-2.207-1.688-3.219C18.242 10.302 18 9.387 18 9c0-2.219 1.781-4 4-4M11 7.5v14.844l-5 2.125V9.656z"
                ></path>
              </svg>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Left;
