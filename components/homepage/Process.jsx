import React from "react";
import { Fa500Px, FaAccessibleIcon } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdManageSearch, MdOutlineCollectionsBookmark } from "react-icons/md";
import { PiSlideshowDuotone } from "react-icons/pi";
const Process = () => {
  const TimeLine = [
    {
      Logo: <IoIosCreate />,
      Heading: "Create",
      Description: "Fully committed to the success company",
    },
    {
      Logo: <MdOutlineCollectionsBookmark />,
      Heading: "Share",
      Description: "Students will always be our top priority",
    },
    {
      Logo: <MdManageSearch />,
      Heading: "Manage",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: <PiSlideshowDuotone />,
      Heading: "Showcase",
      Description: "Code your way to a solution",
    },
  ];

  return (
    <div className="w-full h-full py-20 text-center">
      <button className="text-sm font-medium relative border border-black/20 text-black dark:text-white px-4 py-1 rounded-full">
        <span>Working</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>

      <h1 className="text-5xl font-bold mx-auto max-w-3xl ">
        Simple steps to powerful testimonials
      </h1>

      <p className="font-medium text-center max-w-3xl text-gray-600 font-sans py-6 mx-auto">
        Follow these four straightforward steps to effectively utilize customer
        testimonials and significantly enhance your business's credibility and
        growth potential in today's competitive market.
      </p>
      <div className=" mx-auto font-sans">
        <div className="full  py-10 flex justify-center items-center flex-wrap gap-3">
          {TimeLine.map((item, index) => {
            return (
              <div
                key={index}
                className=" p-2 rounded-md border"
                style={{ borderRadius: "20px" }}
              >
                <div
                  className=" flex  w-[400px] items-center justify-start gap-5 rounded-xl shadow-lg hover:shadow-2xl px-4 py-3 "
                  style={{ borderRadius: "12px" }}
                >
                  <div>
                    <div className="icon2 text-3xl flex justify-center items-center  rounded-full  p-3 shadow-2xl">
                      {item.Logo}
                    </div>
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold text-left ">
                      {item.Heading}
                    </h1>
                    <p className="text-md text-pure-greys-600">
                      {item.Description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Process;
