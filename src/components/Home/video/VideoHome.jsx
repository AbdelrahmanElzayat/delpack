"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import videoBanner from "@/assets/images/videoBanner.png";
import videoStop from "@/assets/icons/stopVideo.svg";
import videoPlay from "@/assets/icons/playVideo.svg";

const VideoHome = ({ media }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="VideoHome sticky top-0 z-10 min-h-[500px] max-h-screen overflow-hidden">
      {media?.type_file === "video" ? (
        <>
          {/* Video Banner */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={media?.image} // Replace with your video path
            muted
            loop
            poster={videoBanner}
          ></video>

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Image
              src={videoBanner}
              alt="Video Banner"
              className="absolute inset-0 w-full h-full object-cover z-[-1]"
            />
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? (
              <Image src={videoStop} alt="Pause Video" />
            ) : (
              <Image src={videoPlay} alt="Play Video" />
            )}
          </button>
        </>
      ) : (
        <>
          <Image
            src={media?.image}
            alt="media"
            width={100}
            height={100}
            className="object-cover w-full h-[80vh]"
          />
        </>
      )}
    </div>
  );
};

export default VideoHome;
