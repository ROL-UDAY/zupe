import React, { useState } from "react";
import Image from "next/image";
import { count } from "console";

const Header = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div className="header flex w-full max-w-[1100px] items-center justify-between px-4 py-4 sm:mb-12 sm:mt-12 sm:px-12 xs:mt-4">
        <div>
          <Image src="/EVLogo.png" alt="Logo" width={130} height={100} />
        </div>
        <p className="text-black">{counter}</p>
      </div>
    </div>
  );
};

export default Header;
