import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const News = () => {
  return (
    <div className="w-[100vw] h-[100vh] p-20  bg-zinc-300 w-full h-[100vh] bg-zinc-300">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        <div>
          <SwiperSlide>
            <div className="w-[100%] h-full ">
              <video
                loop
                muted
                autoPlay
                className="w- full h-full object-cover"
                src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-full ">
              <img
                className="w-full h-full object-cover"
                src="https://a.storyblok.com/f/133769/3000x2000/2bd9e21f3c/team.jpg/m/2400x1600/filters:quality(90)"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-[100%] h-full">
              <video
                loop
                muted
                autoPlay
                className="w-full h-full object-cover"
                src="https://www.exoape.com/video/video-6.mp4"></video>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-full">
                <video
                  loop
                  muted
                  autoPlay
                  className="w-full h-full object-cover "
                  src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"></video>
              </div>
            </SwiperSlide>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-full bg-red-300">Slide 5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-full bg-red-600">Slide 6</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-full bg-red-900">Slide 7</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-[50vh] bg-red-300">Slide 8</div>
          </SwiperSlide>
        </div>
        ...
      </Swiper>
    </div>
  );
};

export default News;
