import React from "react";
import { motion } from "framer-motion";
import { easeIn } from "motion";
const Landing = () => {
  return (
    <div className="w-full h-[150vh] sm:h-[250vh] relative text-white  ">
      <div className="picture w-full h-full overflow-hidden ">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="h-full w-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className=" w-full absolute top-[10%] left-[5%]">
        <div className="text  max-w-screen-2xl mx-auto px-5 sm:px-10">
          <div className="para ">
            {[
              "Global digital design studio partnering with",
              "brands and businesses that create exceptional",
              "experiences where people live, work, and unwind.",
              "You are visiting in the Exoapp.com"
            ].map((item, index) => {
              return (
                <p key={index} className="masker text-md sm:text-2xl leading-none overflow-hidden">
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.5, delay: index * 0.2 }}
                    className="inline-block origin-left">
                    {item}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="headings  mt-9 sm:mt-[3%] leading-normal">
            {["Digital", "Design", "Experinces"].map((item, index) => {
              return (
                <h1
                  key={index}
                  className="text-7xl py-5 sm:text-[18rem] font-semibold overflow-hidden font-light tracking-tighter ">
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1.5,
                      delay: 1 + index * 0.12
                    }}
                    className="inline-block origin-left">
                    {item}
                  </motion.span>
                </h1>
              );
            })}
          </div>
          <div className="sm:w-1/2 para2 mt-20 sm:mt-10">
            <p className="sm:text-2xl ">
              We help experience-driven companies thrive by making their audience feel the refined
              intricacies of their brand and product in the digital space. Unforgettable journeys
              start with a click.
            </p>
          </div>
          <a
            className=" sm:text-xl border-b-[.3px] sm:border-b-[1px] border-zinc-100 pb-1 mt-4 inline-block"
            href="#">
            The Studio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
