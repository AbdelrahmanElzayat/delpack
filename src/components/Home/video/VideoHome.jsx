"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import videoBanner from "@/assets/images/videoBanner.png";
import videoStop from "@/assets/icons/stopVideo.svg";
import videoPlay from "@/assets/icons/playVideo.svg";
import { motion } from "framer-motion";

const VideoHome = ({ media }) => {
  const videoRef = useRef(null);
  // عند التشغيل يكون الزر مخفي افتراضياً
  const [isPlaying, setIsPlaying] = useState(false);
  // حالة ظهور الزر (عند تشغيل الفيديو تكون مخفية إلا عند حركة الماوس)
  const [showControls, setShowControls] = useState(true);
  const timerRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        // عند الإيقاف يكون الزر ظاهرًا دائمًا
        setShowControls(true);
      } else {
        videoRef.current.play();
        // عند التشغيل نخفي الزر بشكل افتراضي حتى تتحرك الماوس
        setShowControls(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseMove = () => {
    if (isPlaying) {
      // عند حركة الماوس في حالة تشغيل الفيديو، نجعل الزر ظاهرًا
      setShowControls(true);
      // مسح أي مؤقت سابق
      if (timerRef.current) clearTimeout(timerRef.current);
      // بعد مرور ثانيتين من عدم حركة الماوس، نخفي الزر
      timerRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
  };

  useEffect(() => {
    // تنظيف المؤقت عند فك التركيب
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      style={{ overflow: "hidden" }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 1 }}
      className="VideoHome sticky top-0 z-10 min-h-[500px] max-h-screen overflow-hidden"
    >
      {media?.type_file === "video" ? (
        <>
          {/* فيديو البنر */}
          <video
            ref={videoRef}
            className="w-full h-full min-h-[500px] object-cover"
            src={media?.image}
            muted
            loop
            poster={videoBanner}
          ></video>
          {/* طبقة تظليل للفيديو */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Image
                src={videoBanner}
                alt="Video Banner"
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
              />
            </div>
          )}
          {/* زر التشغيل/الإيقاف */}
          <button
            onClick={handlePlayPause}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${
              // إذا كان الفيديو متوقف (paused) يكون الزر ظاهر دائمًا،
              // وإذا كان الفيديو شغال يظهر فقط إذا كانت showControls true
              !isPlaying || showControls ? "opacity-100" : "opacity-0"
            }`}
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? (
              <Image
                src={videoStop}
                alt="Pause Video"
                className="xl:w-[177px] xl:h-[177px] lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]"
              />
            ) : (
              <Image
                src={videoPlay}
                alt="Play Video"
                className="xl:w-[177px] xl:h-[177px] lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]"
              />
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
    </motion.div>
  );
};

export default VideoHome;
