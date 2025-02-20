"use client";
import { useState } from "react";
import splash from "@/assets/images/splash.mp4";

export default function SplashScreen({ children }) {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <div className="splash-screen">
      <video
        src={splash}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        onEnded={() => setLoading(false)} // يتغير لما الفيديو يخلص
      />
    </div>
  ) : (
    <>{children}</>
  );
}
