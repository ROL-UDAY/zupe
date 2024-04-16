import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen flex-col items-center bg-green-500 font-[Montserrat]">
      <div className="relative mt-40 h-[580px] w-[1200px] rounded-[20px] bg-red-500">
        <div className="absolute left-0 top-0 h-full w-3/4 p-8">
          <div>
            <div className=" absolute left-20 top-[60px] h-[200px] w-[500px] bg-orange-300 font-[Montserrat] text-5xl font-bold leading-[3.5rem] ">
              <span>Shape Our AI Driven</span>
              <br /> Knowledge Base: <br></br>
              <span className="text-green-600">
                Your Questions <br></br> Matter!
              </span>
            </div>
            {/* Top-left div */}
            <div className="absolute bottom-20 left-20 h-[200px] w-[500px] rounded-[20px] bg-gray-500">
              {/* Content of the gray div */}
              <p className="p-2 font-[Montserrat] text-base font-medium leading-loose">
                Help us build the ultimate resource hub by submitting your
                questions. Your input will train our AI to provide accurate and
                helpful responses across all departments.
                <br />
                Don`t hesitate—add your queries as they arise and be a driving
                force behind our smarter, more efficient knowledge base!
              </p>
            </div>{" "}
          </div>
          {/* Bottom-left div */}
        </div>
        <div className="absolute right-20 top-[54px] h-[690px] w-[480px] rounded-lg  bg-blue-500">
          {/* Content of the blue div */}
          <div className="h-full w-full">
            <Image
              src="/Doodle.png"
              className="h-full w-full object-cover"
              alt="Doodle"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="relative -left-[270px] z-10 -mt-8 flex h-[360px] w-[500px] items-center justify-center rounded-[20px] bg-black">
        {/* Content of the yellow div */}
        <div className="p-7 text-center">
          <div className="mb-4 text-left">
            <label
              htmlFor="questionTextArea"
              className="block font-[montserrat] text-base font-medium text-white"
            >
              Add your questions here:
            </label>
            <textarea
              id="questionTextArea"
              className="mb-4 block h-32 w-[382px] resize-none rounded-[12px] border border-gray-300 bg-gray-100 px-3 py-2"
              placeholder="e.g., What steps should I take if an EV charger at a residential location is displaying an error code and failing to initiate a charging session?"
            ></textarea>
          </div>
          <div className="relative mb-4 text-left">
            <label
              htmlFor="questionFrequency"
              className="font-montserrat block text-base font-medium text-white"
            >
              Question Frequency:
            </label>
            <select
              id="questionFrequency"
              className="absolute left-0 block h-[48px] w-[250px] rounded-[8px] border border-gray-300 bg-gray-100 px-4 py-2"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button className="mr-40 mt-14 h-[48px] w-[250px] rounded-[8px] bg-[#74AF28] px-7 py-2 font-semibold text-white hover:bg-orange-600">
              Submit Your Question Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
