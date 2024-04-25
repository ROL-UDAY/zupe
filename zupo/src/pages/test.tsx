import Image from "next/image";
import React, { useState, useEffect } from "react";
import type { questionSchema } from "~/server/api/routers/questions";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import Header from "~/components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Content from "~/components/Content";
import type { z } from "zod";

const Test = () => {
  const router = useRouter();

  const [formData, setFormdata] = useState<z.infer<typeof questionSchema>>({
    question: "",
    frequency: "Daily",
  });

  const [disabled, setDisabled] = useState(false); // State to control button disable

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

  const handleClick = async () => {
    if (!formData.question) {
      toast.error("Please enter your question.");
      return;
    }
    setDisabled(true); // Disable the button on click
    try {
      mutate(formData);
      toast.success("Your question has been submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit the question. Please try again.");
    } finally {
      setTimeout(() => {
        setDisabled(false); // Re-enable the button after 4 seconds
      }, 5500); // 4000 milliseconds = 4 seconds
    }
  };

  // Session Data
  const { data: userData } = api.session.getAllSessionData.useQuery();
  console.log({ userData });

  // user data
  const { data: sessionData } = useSession();
  console.log("this is", sessionData?.user.name);
  //

  // Check if the session has expired
  useEffect(() => {
    const isSessionExpired =
      sessionData?.expires && new Date() > new Date(sessionData.expires);
    if (isSessionExpired) {
      void router.push("/");
    }
  }, [sessionData, router]);

  const { data: counter, refetch } =
    api.questions.getQuestionCountByUser.useQuery();

  const { mutate } = api.questions.create.useMutation({
    onSuccess: async () => {
      await refetch();
      setFormdata({
        question: "",
        frequency: "Daily",
      });
    },
  });

  return (
    <div className="flex h-screen w-full flex-col items-center sm:bg-white xs:bg-white">
      <div className=" w-full max-w-[1200px]  xs:px-[12px]">
        <Header
          questionCountByUser={counter ?? 0}
          session={sessionData?.user.name ?? undefined}
        />
      </div>

      <div className="main-container mt-1 w-full max-w-[1300px] xs:h-screen xs:overflow-auto">
        <ToastContainer
          toastStyle={{
            backgroundColor: "black",
            color: "#ffffff",
            fontSize: "16px",
          }}
        />
        <div className="relative mx-auto mt-0 max-w-[1200px] rounded-[32px] p-4 sm:bg-[#E8F7D0] xs:mb-10 xs:grid xs:grid-cols-1 xs:gap-6 xs:bg-white  xs:p-0 xs:pb-10 xs:pl-4 xs:pr-4">
          <div className="h-[700px] w-full max-w-[500px] sm:absolute sm:right-10 sm:top-[70%] lg:top-12 xs:sticky xs:top-2 xs:h-[500px] xs:max-w-[440px] xs:rounded-3xl xs:shadow-lg">
            <div className="">
              <Image
                src="/Hero.png"
                alt="Doodle"
                width={600}
                height={400}
                className="relative xs:h-[500px] xs:w-full xs:rounded-3xl"
              />
            </div>
          </div>
          <div className=" flex h-[580px] flex-col overflow-auto p-8 xs:sticky xs:top-[20%] xs:h-[450px] xs:items-center xs:rounded-3xl xs:bg-[#E8F7D0] xs:shadow-lg">
            <Content />
          </div>
          <div className="xs:rounded-fill :top-[82%] flex h-[365px] w-[486px] flex-col flex-wrap items-center rounded-[32px] bg-black shadow-lg sm:absolute sm:left-[4%] sm:top-[82%] sm:pb-10 sm:pt-10 xs:sticky xs:mx-auto xs:h-[380px] xs:w-full xs:pt-10 xs:shadow-none">
            <div className="w-[382px] xs:w-[290px]">
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
              <div className="">
                <button
                  className={`sm-w-[250px] h-[40px] rounded-[8px] px-4 py-2 font-montserrat text-white xs:w-[290px] ${
                    disabled ? "cursor-not-allowed bg-gray-300" : "bg-[#74AF28]"
                  }`}
                  onClick={handleClick}
                  disabled={disabled} // Disable the button based on state
                >
                  Submit Your Question Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
