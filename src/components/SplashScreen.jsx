"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import imgGif from "@/assets/images/firstGif.gif";
export default function SplashScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // تغيير الحالة بعد 3 ثواني، يمكنك تعديل المدة حسب الحاجة
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <Image src={imgGif} alt="Loading..." width={500} height={500} />
      </div>
    );
  }

  return <>{children}</>;
}
