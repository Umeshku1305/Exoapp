import React from "react";

const Images = () => {
  return (
    <div className="w-full h-[70vh] sm:h-screen  bg-white flex items-center justify-center ">
      <div className="w-[50%] sm:w-[23%] sm:h-[65vh] h-1/2 relative ">
        <div className="absolute w-20 h-32 sm:w-40 sm:h-52 sm:-right-1/2 -right-1/3 top-7 ">
        <img className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" alt="" />
        </div>
        <div className="absolute w-32 h-20 sm:w-80 sm:h-40 sm:-left-3/4 aspect-video  top-1/4 -left-1/3">
        <video loop muted autoPlay className="w-full h-full  object-cover" src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"></video>
        </div>
        <div className="absolute w-40 h-20 sm:w-[20vw] sm:h-[20vw] sm:-bottom-1/2 -bottom-1/4 -left-1/2">
        <img className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" />
        </div>
        <div className="absolute  w-32 h-32 sm:w-[25vw] sm:h-[25vw] sm:left-[90%] sm:top-[85%] -bottom-1/2 -right-1/2">
        <video loop muted autoPlay className="w-full h-full object-cover" src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;
