import { Rating } from "react-simple-star-rating";

const Content = () => {
  const data = [
    {
      content: "Family Friendly",
      count: null,
    },
    {
      content: "Beginner Friendly",
      count: null,
    },
    {
      content: "Minimum Age",
      count: 4,
    },
    {
      content: "Maximum Guests",
      count: 20,
    },
  ];

  const menus = [
    "Overview",
    "Location",
    "Itinerary",
    "Gear included",
    "What to pack",
    "Reviews",
  ];

  const reviews = [
    {
      avatar: "src/assets/avatar.png",
      author: "John Smith",
      date: "June 5, 2022",
      rating: 5,
      content:
        "Sed ut justo non mi molestie porta. Mauris at nisl justo. Pellentesque vel consectetur lectus. Sed ac bibendum libero.",
      images: ["src/assets/comment1.png", "src/assets/comment2.png"],
    },
    {
      avatar: "src/assets/avatar.png",
      author: "John Smith",
      date: "June 5, 2022",
      rating: 5,
      content:
        "Sed ut justo non mi molestie porta. Mauris at nisl justo. Pellentesque vel consectetur lectus. Sed ac bibendum libero.",
      images: [],
    },
    {
      avatar: "src/assets/avatar.png",
      author: "John Smith",
      date: "June 5, 2022",
      rating: 5,
      content:
        "Sed ut justo non mi molestie porta. Mauris at nisl justo. Pellentesque vel consectetur lectus. Sed ac bibendum libero.",
      images: ["src/assets/comment1.png", "src/assets/comment2.png"],
    },
    {
      avatar: "src/assets/avatar.png",
      author: "John Smith",
      date: "June 5, 2022",
      rating: 5,
      content:
        "Sed ut justo non mi molestie porta. Mauris at nisl justo. Pellentesque vel consectetur lectus. Sed ac bibendum libero.",
      images: [],
    },
  ];

  return (
    <div className="p-4 bg-white rounded-2xl">
      <span className="block text-[24px] sm:text-2xl md:text-[34px]">
        Deschutes River Full-Day
      </span>
      <div className="flex mt-2 text-[14px] sm:text-[18px] text-[#838381]">
        <span>Deschutes River, Oregon</span>
        <span className="flex items-center ml-4">
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
          4.2 - 5 Reviews
        </span>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 sm:grid-rows-1  sm:grid-cols-4  grid-flow-col gap-2 mt-4 text-[12px] sm:text-[14px]">
        {data.map((item) => (
          <div className="col bg-[#EFF9F4] flex justify-around rounded-full py-1 text-[12px] sm:text-base">
            {item.content}:
            {item.count === null ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="20px"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#42B3A2"
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"
                ></path>
              </svg>
            ) : (
              <span className="font-bold">{item.count}</span>
            )}
          </div>
        ))}
        {/* </div> */}
      </div>

      <nav className="flex items-center mt-4 whitespace-nowrap overflow-x-auto">
        {menus.map((menu, index) => (
          <a
            href="#"
            className={`text-[18px] font-bold ${
              index === 0 ? "text-black" : "text-[#838381]"
            }  border-b-[2px] px-2 py-1 ${index === 0 && "border-black"}`}
          >
            {menu}
          </a>
        ))}
      </nav>
      <div>
        <p className="text-[24px] font-bold py-4">Adventure overview</p>
        <p className="text-base leading-10">
          Rafting on the Deschutes River is ideal for families, first-timers,
          and experienced outdoor enthusiasts looking for exciting whitewater
          rapids on a half-day up to a 5-day river trip. Outpost facilities
          include retail, changing rooms, restrooms, grassy picnic area, and
          plentiful parking on 5 acres to facilitate large groups, youth
          organizations, and team building. Warm desert sunshine and
          temperature, reliable summer water flows, and easy access to white
          water rafting 90 miles from Bend and 90 miles from Portland. The Lower
          Deschutes River offers a beautiful desert canyon filled with
          sagebrush, osprey, incredible basalt rock formations, and an abundance
          of wil...
        </p>
        <div className="mt-4 underline ">
          <a href="#" className="font-bold text-base text-decoration">
            Show more
          </a>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-[24px] font-bold py-4">Location</p>
        <img src="src/assets/map1.png" className="w-full" />
      </div>
      <div>
        <p className="text-[24px] font-bold py-4">Adventure Itinerary</p>
        <div className="flex flex-col gap-4">
          <p>
            9:30am - Arrive at the River Drifters Office in Maupin, Oregon.
            Change into river clothes, get outfitted with a PFD and splash
            jacket (River Drifters to provide), use the restroom, etc.
          </p>
          <p>10:00am - Shuttle departs for the river put-in</p>
          <p>
            10:15am - Unload gear. Guides will give a safety talk and provide
            instructions for the basic paddle strokes you will need for a safe
            and fun trip. Then, the group will put-in and start rafting!
          </p>
          <p>
            12:00pm - Stop mid-way for BBQ lunch at the Maupin City Park. Then,
            head back to the river for more thrilling rapids.
          </p>
          <p>
            3:30pm - Arrive at take-out at Sandy Beach and board shuttle back to
            Maupin.
          </p>
        </div>
        <div className="mt-4 underline ">
          <a href="#" className="font-bold text-base text-decoration">
            Show more
          </a>
        </div>
      </div>
      <div className="min-h-[300px]">
        <p className="text-[24px] font-bold py-4">Gear included</p>
      </div>
      <div className="min-h-[300px]">
        <p className="text-[24px] font-bold py-4">What to pack</p>
      </div>
      <div>
        <p className="text-[24px] font-bold py-4">Reviews</p>
        <div className="flex flex-col gap-12">
          {reviews.map((review) => (
            <div className="flex flex-col gap-2">
              <div className="flex">
                <img
                  className="w-[64px] h-[64px]"
                  src={review.avatar}
                  alt="avatar"
                />
                <div className="ml-2 flex flex-col">
                  <div className="text-base font-bold">{review.author}</div>
                  <div className="text-[14px] text-[#838381] mt-[-4px]">
                    {review.date}
                  </div>
                  <div className="mt-[-8px]">
                    <Rating initialValue={review.rating} size={16} />
                  </div>
                </div>
              </div>
              <p className="text-base text-[#838381] mt-[-4px]">
                {review.content}
              </p>
              <div className="row">
                {review.images.map((item) => (
                  <div className="col-6 sm:col-3">
                    <img
                      src={item}
                      alt="image"
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="underline ">
            <a href="#" className="font-bold text-base text-decoration">
              Show more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
