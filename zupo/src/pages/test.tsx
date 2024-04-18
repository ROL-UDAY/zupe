import Image from "next/image";
import React from "react";

const Test = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-blue-400">
      {/* Header */}
      <div className="header mt-10 flex w-full max-w-[1000px] items-center justify-around bg-gray-200 px-4 py-4 sm:px-20 xs:bg-cyan-500">
        <div>
          <Image src="/EVLogo.png" alt="Logo" width={80} height={80} />
        </div>
        <p className="text-black">Username</p>
      </div>
      {/* Header */}
      {/* Main Content */}
      <div className="main-container mt-10 w-full max-w-[1300px] xs:h-screen xs:overflow-auto">
        <div className="relative mx-auto mt-10 max-w-[1200px] bg-green-300 p-4 xs:mt-0 xs:grid xs:grid-cols-1 xs:gap-4 xs:p-0">
          {/* Image Div */}
          <div className="h-[700px] w-full max-w-[500px] bg-red-500 sm:absolute sm:right-10 xs:sticky xs:top-0 xs:h-[400px] xs:rounded-3xl xs:shadow-lg">
            <Image
              src="/Doodle.png"
              alt="Doodle"
              height={421}
              width={600}
              className="xs:h-[343px] xs:w-[490px] xs:rounded-3xl"
            />
          </div>
          {/* Image Div */}
          {/* Content div */}
          <div className="h-[580px] max-w-[1200px] bg-yellow-400 p-4 xs:sticky xs:top-40 xs:h-[400px] xs:rounded-3xl xs:bg-orange-500 xs:shadow-lg"></div>
          {/* Content div */}
          <div className="sm:top-120 h-[200px] w-full max-w-[500px] bg-purple-400 sm:absolute sm:left-10 xs:sticky xs:top-0 xs:h-[400px] xs:rounded-3xl xs:shadow-lg"></div>
        </div>
        {/* Main Content */}
      </div>
    </div>
  );
};

export default Test;
