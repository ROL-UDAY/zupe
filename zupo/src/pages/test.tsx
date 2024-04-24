import Image from "next/image";
import React, { useState } from "react";
import { z } from "zod";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import Header from "~/components/Header";

// import { getServerAuthSession } from "~/server/auth";
// import { GetServerSidePropsContext } from "next";

// Main Test

export const questionSchema = z.object({
  question: z.string(),
  frequency: z.string(),
});

// const hello = api.post.hello.useQuery()

const Test = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormdata] = useState<z.infer<typeof questionSchema>>({
    question: "",
    frequency: "One Time",
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      frequency: value,
    }));
  };

  const handleClick = () => {
    mutate(formData);
  };

  // Session Data
  const { data: userData } = api.session.getAllSessionData.useQuery();
  console.log({ userData });

  // user data
  const { data: sessionData } = useSession();
  console.log("this is", sessionData?.user.name);

  const { data: counter, refetch } =
    api.questions.getContributionCount.useQuery();

  const { mutate } = api.questions.create.useMutation({
    onSuccess: async () => {
      await refetch();
      setFormdata({
        question: "",
        frequency: "One Time",
      });
      setSubmitted(true);
    },
  });

  return (
    <div className="flex h-screen w-full flex-col items-center sm:bg-white xs:bg-white">
      {/* Header */}
      <div className=" w-full max-w-[1100px] items-center justify-between">
        <Header
          counterData={counter ?? 0}
          session={sessionData?.user.name ?? undefined}
        />
      </div>
      {/* Header */}
      {/* Main Content */}
      <div className="main-container mt-1 w-full max-w-[1300px] xs:h-screen xs:overflow-auto">
        <div className="relative mx-auto mt-0 max-w-[1200px] rounded-[32px] p-4 sm:bg-[#E8F7D0] xs:mb-10 xs:grid xs:grid-cols-1 xs:gap-6 xs:bg-white  xs:p-0 xs:pb-10 xs:pl-4 xs:pr-4">
          {/* Image Div */}
          <div className="h-[700px] w-full max-w-[500px] sm:absolute sm:right-10 sm:top-[70%] lg:top-12 xs:sticky xs:top-2 xs:h-[500px] xs:max-w-[440px] xs:rounded-3xl xs:shadow-lg">
            <div className="">
              <Image
                src="/Doodle.png"
                alt="Doodle"
                width={600}
                height={400}
                className="relative xs:h-[500px] xs:w-full xs:rounded-3xl"
              />
            </div>
          </div>
          {/* Image Div */}
          {/* Content div */}
          <div className=" flex h-[580px] flex-col overflow-auto p-8 xs:sticky xs:top-[20%] xs:h-[450px] xs:items-center xs:rounded-3xl xs:bg-[#E8F7D0] xs:shadow-lg">
            <div className="text-wrap font-montserrat text-5xl font-bold leading-[3.5rem] text-[#334C1B] sm:mb-6 xs:items-center xs:text-3xl">
              <span>Shape Our AI Driven</span>
              <br /> Knowledge Base: <br></br>
              <span className="text-[#74AF28] xs:text-3xl">
                Your Questions <br></br> Matter!
              </span>
            </div>
            <div className="max-w-[480px] text-wrap font-montserrat text-[16px] font-medium text-[#334C1B] xs:mt-5 xs:max-w-[300px] xs:text-sm">
              <div>
                <p className="">
                  Help us build the ultimate resource hub by submitting your
                  questions. Your input will train our AI to provide accurate
                  and helpful responses across all departments.
                </p>
              </div>
              <p className=" mt-5">
                Don`t hesitate—add your queries as they arise and be a driving
                force behind our smarter, more efficient knowledge base!
              </p>
            </div>
          </div>
          {/* Content div */}
          {/* Bottom div */}
          <div className="xs:rounded-fill :top-[82%] flex h-[365px] w-[486px] flex-col flex-wrap items-center rounded-[32px] bg-black shadow-lg sm:absolute sm:left-[4%] sm:top-[82%] sm:pb-10 sm:pt-10 xs:sticky xs:mx-auto xs:h-[380px] xs:w-full xs:pt-10 xs:shadow-none">
            {/* sub-bottom div */}

            <div className="w-[382px] xs:w-[290px]">
              {/* TextArea */}
              <div className="pb-4">
                <label
                  htmlFor="questionTextArea"
                  className="block font-montserrat text-base font-medium text-white"
                >
                  Add your questions here:
                </label>
                <textarea
                  name="question"
                  id="questionTextArea"
                  className="block h-32 w-full resize-none rounded-[8px] border border-gray-300 bg-gray-100 px-3 py-4 font-montserrat"
                  placeholder="Are there any compatibility issues between EV chargers and electric cars?"
                  value={formData.question}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* TextArea */}

              {/* DropDownMenu */}
              <div className="pb-4">
                <label
                  htmlFor="questionFrequency"
                  className="mr-30 block font-montserrat text-base font-medium text-white "
                >
                  Question Frequency:
                </label>
                <select
                  id="questionFrequency"
                  className="h-[38px] rounded-[8px] border border-gray-300 bg-gray-100 px-3 text-left font-montserrat sm:w-[250px] xs:w-[290px]"
                  value={formData.frequency}
                  onChange={handleDropdown}
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              {/* DropDownMenu */}

              {/* submitButton */}
              <div className="">
                <button
                  className="sm-w-[250px] h-[40px] rounded-[8px] bg-[#74AF28] px-4 py-2 font-montserrat text-white hover:bg-orange-600 xs:w-[290px]"
                  onClick={handleClick}
                >
                  Submit Your Question Now!
                </button>
              </div>
              {/* submitButton */}
            </div>

            {/* sub-bottom div */}
          </div>
          {/* Bottom div */}
        </div>
        {/* Main Content */}
      </div>
    </div>
  );
};
export default Test;
