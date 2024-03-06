import Button from "../Elements/Button";

const NewActivity = () => {
  const Card = ({ imgSrc, title }) => {
    return (
      <div className="relative">
        <img className="w-full rounded-3xl" src={imgSrc} alt={title} />
        <div
          className="absolute left-0 bottom-0 w-full h-8 md:h-12 rounded-b-3xl"
          style={{
            background: `linear-gradient(180deg, rgba(47, 47, 46, 0) 0%, #2F2F2E 100%)`,
          }}
        >
          <span className="pl-4 text-white text-base sm:text-2xl text-bold">
            {title}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="container px-4 py-4 md:px-20 md:py-6 lg:px-32 lg:py-8 mt-4 md:mt-10">
      <div className="flex justify-around sm:justify-between mb-3">
        <span className="sm:text-2xl md:text-[34px]">
          Explore a new activity
        </span>
        <Button
          extraClass="hidden sm:block"
          text="See all activities"
          bgColor="#FFDE77"
        />
      </div>
      <div className="grid grid-rows-3 sm:grid-rows-2 grid-cols-2 sm:grid-cols-3 grid-flow-col gap-4 mb-8">
        <div className="row-span-2">
          <Card imgSrc="src/assets/new_activity1.png" title="Rock Climbing" />
        </div>
        <div className="col">
          <Card imgSrc="src/assets/new_activity2.png" title="Backpacking" />
        </div>
        <div className="col">
          <Card imgSrc="src/assets/new_activity3.png" title="Snowshoeing" />
        </div>
        <div className="col">
          <Card imgSrc="src/assets/new_activity4.png" title="Kayaking" />
        </div>
        <div className="col">
          <Card imgSrc="src/assets/new_activity5.png" title="Rafting" />
        </div>
      </div>

      <div className="flex justify-around">
        <Button
          extraClass="block sm:hidden mb-4"
          text="See all destinations"
          bgColor="#FFDE77"
        />
      </div>
    </div>
  );
};

export default NewActivity;
