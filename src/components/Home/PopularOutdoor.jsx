import Button from "../Elements/Button";

const PopularOutdoor = ({windowWidth}) => {

  const data = [
    {
      state: "Deschutes River, OP",
      content: "23 Adverntures",
    },
    {
      state: "Smith Rock State Park, OR",
      content: "5 Adverntures",
    },
    {
      state: "Crooked River, OR",
      content: "10 Adverntures",
    },
    {
      state: "Mt. Bachelor, OR",
      content: "15 Adverntures",
    },
    {
      state: "Mt. Hood, OR",
      content: "27 Adverntures",
    },
  ];

  return (
    <div className="container flex justify-center content-center flex-col w-full rounded-r-3xl lg:px-24 py-4 lg:py-16">
      <div className="flex justify-center">
        <span className="text-2xl lg:text-[34px] text-[#2F2F2E]">
          Popular outdoor destinations
        </span>
      </div>
      <div className="grid grid-rows-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 grid-flow-col p-4 sm:p-8 lg:p-12">
        {[1, 2, 3, 4].map((i) => (
          <div
            className="row col-span-2 sm:col-span-3 md:col-span-5 py-3"
            key={`row${i}`}
          >
            {(windowWidth < 768
              ? data.slice(3)
              : windowWidth < 992
              ? data.slice(2)
              : data
            ).map((item, index) => (
              <div className="col" key={`item${index}`}>
                <p className="text-[14px] font-bold">{item.state}</p>
                <p className="text-[#838381]">{item.content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-around">
        <Button
          extraClass="block sm:hidden mb-8"
          text="Load more"
          bgColor="#FFDE77"
        />
      </div>
    </div>
  );
};

export default PopularOutdoor;
