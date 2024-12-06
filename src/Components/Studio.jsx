import React from "react";

const Studio = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-2xl mx-auto relative">
        <div className="w-full h-[200vh] relative">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/2500x2626/63a902ce2b/exo-ape-studio-hero.jpg/m/2400x2521/filters:quality(90)"
            alt=""
          />
          <div className="absolute top-[15%] left-[10%] text-white font-semibold">
            <h1 className="text-9xl ">Building</h1>
            <h1 className="text-9xl ">Digital</h1>
            <h1 className="text-9xl ">Presence</h1>
            <p className="mt-5">Digital Experience with maximum emotional impact</p>
          </div>
        </div>
        <div className="absolute bottom-[10%] p-10 tracking-tight left-[50%] text-white font-semibold ">
          <p className="text-2xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea ipsum laborum
            animi culpa repellat. Alias sed, voluptatum laboriosam recusandae vel reprehenderit modi
            obcaecati inventore temporibus consequuntur quas minus autem? Lorem, ipsum dolor sit
          </p>
          <p className="text-sm mt-[10%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda, sit, quaerat
            doloribus recusandae a cumque veritatis aut est, dolores quidem nesciunt modi harum.
            Repellat amet ea odit minus, iste quidem reiciendis aliquid, libero porro dolore,
            laboriosam rem reprehenderit in!
          </p>
          <a className="mb-2px-red inline-block mt-10" href="#"> Our story</a>
        </div>
      </div>
    </div>
  );
};

export default Studio;
