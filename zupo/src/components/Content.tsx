import React from "react";

const Content = () => {
  return (
    <>
      <div className="text-wrap bg-green-500 font-montserrat text-5xl font-bold leading-[3.5rem] text-[#334C1B] sm:mb-6 xs:items-center xs:text-3xl">
        <span>Shape Our AI Driven</span>
        <br /> Knowledge Base: <br></br>
        <span className="text-[#74AF28] xs:text-3xl">
          Your Questions <br></br> Matter!
        </span>
      </div>
      <div className="max-w-[480px] text-wrap font-montserrat text-[16px] font-medium text-[#334C1B] xs:mt-5 xs:max-w-[300px] xs:text-sm">
        <div>
          <p className=" bg-purple-500">
            Help us build the ultimate resource hub by submitting your
            questions. Your input will train our AI to provide accurate and
            helpful responses across all departments.
          </p>
        </div>
        <p className=" mt-5">
          Don`t hesitate—add your queries as they arise and be a driving force
          behind our smarter, more efficient knowledge base!
        </p>
      </div>
    </>
  );
};

export default Content;
