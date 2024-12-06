import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const PlayReel = () => {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const Reel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        // markers: true,
        top: "0 0",
        pin: true,
        scrub: 1
      }
    });
    tl.to(
      videodiv.current,
      {
        width: "100%",
        height: "100%",
        // ease: Power4,
        duration: 2,
        ease: "power4.inOut",
        scale: 1.2
      },
      "a"
    )
      .from(
        play.current,
        {
          x: "-80%",
          // ease: "power4.inOut"
          scale: 1,
          color: "red"
        },
        "a"
      )

      .from(
        Reel.current,
        {
          x: "80%",
          color: "green",
          // ease: "power4.inOut"
          scale: 1
        },
        "a"
      );
  });
  return (
    <div ref={parent} className="w-full h-screen object-cover overflow-hidden bg-black relative">
      <div
        ref={videodiv}
        className="w-40 sm:w-[40%]  aspect-video overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <video
          muted
          loop
          autoPlay
          className="w-full h-full object-cover scale-[2.5] "
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
      </div>
      <div className="overlay absolute flex items-center justify-between py-20 flex-col w-full h-full  text-white  ]">
        {/* <h1 className="text-white absolute left-[25%]">Browse all work</h1> */}
        <div className="flex items-center justify-center  gap-3 font-bold">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-[20px] text-white"
            data-v-669b4a84="">
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""></path>
          </svg>
          <h1 className="text-white">work in Motion</h1>
        </div>
        <h1 className="w-full mt-9 flex items-center gap-[19%] sm:gap-52 items-center justify-center ">
          <div ref={play} className=" text-7xl font-semibold sm:text-[20vw]">
            Play
          </div>
          <div ref={Reel} className="text-7xl font-semibold sm:text-[20vw]">
            Reel
          </div>
        </h1>
        <p className="w-[80%] text-center sm:w-[30%] ">
          Our work is best experienced in motion. Don’t forget to put on your headphones.
        </p>
      </div>
    </div>
  );
};

export default PlayReel;
