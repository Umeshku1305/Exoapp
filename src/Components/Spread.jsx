import React from "react";

const Spread = () => {
  return (
    <div className="w-full bg-white ">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 text-center ">
        <div className="svg flex gap-3 flex items-center justify-center mt-7 sm:mt-[19%]">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 "
            data-v-669b4a84="">
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""></path>
          </svg>
          <h3 className="font-semibold text-center  ">In the media</h3>
        </div>
        <div className="heading text-center ">
          <h1 className="text-7xl sm:text-[20vw] sm:traching-tight sm:font-light  tracking-tighter font-semibold">Spread</h1>
          <h1 className="text-7xl sm:text-[20vw] sm:traching-tight sm:font-light tracking-tighter font-semibold">the News </h1>
          <p className="w-2/3 mx-auto mt-5 text-md leading-2 sm:w-1/3 sm:mt-10 sm:text-xl">
            Find out more about our work on these leading design and technology platforms.
          </p>
          <a className="border-b-[3px] mb-20 sm:mb-20 mt-[10vh] border-zinc-900 pb-1 inline-block mt-5" href="#">
            Browser all news
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spread;
