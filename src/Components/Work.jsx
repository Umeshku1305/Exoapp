import React, { useState } from "react";
import { motion } from "framer-motion";
import { easeIn } from "motion";
const Work = () => {
  const [elems, setElems] = useState([
    {
      heading: "Pixelflakes",
      subheading: "Architectural Marketing Agency",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)"
    },
    {
      heading: "Rino & palle",
      subheading: "Effortless chic lifestyle",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
    },
    {
      heading: "Aebele Interiors",
      subheading: "Luxurrious design experiences",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"
    },
    {
      heading: "studio D",
      subheading: "Urban and Landscape design",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798702/rendition/720p/file.mp4?loc=external&log_user=0&signature=b76cb0994de6beca7f6ba29e7eb52db1750d34600352dab2566c6ca16fcd817f",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/1300x1620/filters:quality(90)"
    }
  ]);
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto py-20 px-5 sm:px-10">
        <div className="featured flex gap-3 sm:ml-[70%] ">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84="">
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""></path>
          </svg>
          <h1>Featured Projects</h1>
        </div>
        <div className="sm:flex justify-between">
          <h1 className="text-6xl sm:text-[13vw]  mt-10 font-semibold overflow-hidden">
            <motion.span
              initial={{ rotate: 90, y: ["40%"], opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.5 }}
              viewport={{ once: true }}
              className="inline-block origin-left">
              Work
            </motion.span>
          </h1>
          <p className="text-xl  mt-10 sm:w-1/3 sm:mt-[3%] leading-2">
            Highlights of cases that we passionately built with forward-thinking clients and friends
            over the years.
          </p>
        </div>
        <div className="elems mt-10 sm:flex gap-4 sm:flex-wrap justify-between ">
          {elems.map((item, index) => {
            return (
              <div className="elem w-full sm:w-[40%] mt-10">
                <div className="video w-full h-[104vw] sm:h-96 relative overflow-hidden">
                  <motion.img
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    data-scroll
                    data-scroll-speed="-.3"
                    className=" hidden  sm:absolute sm:z-[2] sm:top-0 sm:left-0 sm:block w-full h-full object-cover"
                    src={item.image}
                    alt=""
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="block z-[1]  w-full h-full scale-[1.5] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover "
                    src={item.video}></video>
                </div>
                <div className="mt-5 ">
                  <h3 className="font-semibold">{item.heading}</h3>
                  <p className="opacity-40">{item.subheading}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
