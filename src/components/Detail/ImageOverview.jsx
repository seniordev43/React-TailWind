import Button from "../Elements/Button";

const ImageOverview = ({ windowWidth }) => {
  return (
    <div className="grid grid-rows-2  grid-cols-3  grid-flow-col gap-4 mb-8 h-auto">
      <div className="row-span-2 col-span-3 sm:col-span-2 relative">
        <img
          className="sm:rounded-l-2xl w-full sm:h-full object-cover"
          src="src/assets/detail1.jpeg"
          alt="Your Image"
        />

        <Button
          extraClass="absolute right-32 sm:left-4 bottom-0 transform -translate-y-1/2 cursor-pointer"
          text="Share"
          bgColor="#DB5037"
          textColor="white"
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 20 18"
              className="mt-[2px] mr-[4px]"
            >
              <path
                fill="currentColor"
                d="M14 5v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19l7-7zm2 4.83L18.17 12L16 14.17V12.9h-2c-2.07 0-3.93.38-5.66.95c1.4-1.39 3.2-2.48 5.94-2.85l1.72-.27z"
              ></path>
            </svg>
          }
        />
        <Button
          extraClass="absolute right-4 sm:left-32 bottom-0 transform -translate-y-1/2 cursor-pointer"
          text={windowWidth > 768 ? "View 15 photos" : "1/15"}
          bgColor="#DB5037"
          textColor="white"
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 24 18"
              className="mt-[2px] mr-[4px]"
            >
              <path
                fill="currentColor"
                d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a2.81 2.81 0 0 0 .49-.05l.3-.07h.12l.37-.14l.13-.07c.1-.06.21-.11.31-.18a3.79 3.79 0 0 0 .38-.32l.07-.09a2.69 2.69 0 0 0 .27-.32l.09-.13a2.31 2.31 0 0 0 .18-.35a1 1 0 0 0 .07-.15c.05-.12.08-.25.12-.38v-.15a2.6 2.6 0 0 0 .1-.6V5a3 3 0 0 0-3-3M5 20a1 1 0 0 1-1-1v-4.31l3.29-3.3a1 1 0 0 1 1.42 0l8.6 8.61Zm15-1a1 1 0 0 1-.07.36a1 1 0 0 1-.08.14a.94.94 0 0 1-.09.12l-5.35-5.35l.88-.88a1 1 0 0 1 1.42 0l3.29 3.3Zm0-5.14L18.12 12a3.08 3.08 0 0 0-4.24 0l-.88.88L10.12 10a3.08 3.08 0 0 0-4.24 0L4 11.86V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
              ></path>
            </svg>
          }
        />
      </div>
      <div className="col hidden sm:block">
        <img
          className="rounded-tr-2xl w-full h-full object-cover"
          src="src/assets/detail2.jpeg"
          alt="Your Image"
        />
      </div>
      <div className="col hidden sm:block w-full h-full object-cover">
        <img
          className="rounded-br-2xl"
          src="src/assets/detail3.jpeg"
          alt="Your Image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default ImageOverview;
