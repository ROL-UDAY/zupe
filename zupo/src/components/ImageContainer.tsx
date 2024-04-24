import React from "react";
import Image from "next/image";

const ImageContainer = () => {
  return (
    <div>
      <div className="h-[700px] w-full max-w-[500px] sm:absolute sm:right-10 sm:top-[70%] lg:top-12 xs:sticky xs:top-2 xs:h-[485px] xs:w-[350px] xs:rounded-3xl xs:shadow-lg">
        <div className="">
          <Image
            src="/Doodle.png"
            alt="Doodle"
            width={600}
            height={800}
            className="relative xs:h-full xs:w-full xs:rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
