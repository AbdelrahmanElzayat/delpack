import React from "react";
import loadingImg from "@/assets/images/loading.gif";
import Image from "next/image";

const LoadingPage = ({ message = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-background-dark">
      <div className="text-center">
        <Image src={loadingImg} alt="Loading" className="w-full h-full" />
        <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
          {message}
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
