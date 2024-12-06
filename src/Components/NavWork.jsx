import React from "react";
import { useNavigate } from "react-router-dom";

const NavWork = () => {
  const navigate = useNavigate();
  const GoBackHandler = () => {
    navigate("/contact");
  };
  return (
    <div className="w-full">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full h-screen ">
          <video
            muted
            loop
            autoPlay
            className="w-full h-full object-cover "
            src="https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04"></video>
        </div>

        <div className="w-full h-screen mt-20">
          <video
            muted
            loop
            autoPlay
            className="w-full h-full object-cover "
            src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
        </div>

        <div className="w-full h-screen mt-20">
          <video
            muted
            loop
            autoPlay
            className="w-full h-full object-cover "
            src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"></video>
        </div>
      </div>
    </div>
  );
};

export default NavWork;
