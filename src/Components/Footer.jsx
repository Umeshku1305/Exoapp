import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-screen-2xl mx-auto text-white text-center  ">
        <div className="flex items-center sm:w-full sm:justify-evenly justify-center gap-7 py-20">
          <div className="rounding tracking-tight sm:text-[10vw]  font-semibold  text-6xl font-light">
            <h1>Our</h1>
            <h1>Story</h1>
          </div>
          <video
            muted
            loop
            autoPlay
            className="w-52 sm:w-[66%]"
            src="https://www.exoape.com/video/video-6.mp4"></video>
        </div>
        <p className="text-xl tracking-tight sm:w-96 sm:ml-5 font-tight">
          The story behind Exo Ape is one of exploration, creativity and curiosity.
        </p>
        <div className="story sm:mt-20">
          {/* <svg
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 text-white "
            data-v-5152decb="">
            <circle cx="25" cy="25" r="23" data-v-5152decb=""></circle>
          </svg> */}
          <a className=" text-xl border-b-[1.3px] sm:ml-96 mt-10 inline-block mb-10 " href="#">
            Our story
          </a>
          <div className="w-[90%] ml-5 h-[1.5px] sm:mt-5 bg-white"></div>
        </div>
        <div className="footer2 w-full h-52 mt-10 px-20 ">
          <div className="flex items-center justify-between  gap-5">
          <div className=" hidden sm:flex flex flex-col gap-2 ">
            <a href="#">Willen || Single 8</a>
            <a href="#">6041 HS , Indrapuri  </a>
            <a href="#">The NeatherLands</a>
            <a href="#">umeshkumarmahto1305@gmail.com</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">Work</a>
            <a href="#">Studio</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">Behance</a>
            <a href="#">Dribble</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
