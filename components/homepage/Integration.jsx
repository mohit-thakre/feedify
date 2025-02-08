import { logos } from "@/data/data";
import React from "react";
import { BsPatchCheck } from "react-icons/bs";

const Integration = () => {
  return (
    <div className="w-full h-full py-20 text-center">
      <button className="text-sm font-medium relative border border-black/20 text-black dark:text-white px-4 py-1 rounded-full">
        <span>Integration</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>

      <h1 className="text-5xl font-bold mx-auto max-w-3xl mt-4">
        Integrate with any platform
      </h1>

      <p className="font-medium text-center max-w-3xl text-gray-600 font-sans py-6 mx-auto">
        We built the ultimate tool for showcasing your satisfied customers. With
        3-lines of HTML code, you can embed all your testimonials to any
        platform!
      </p>

      <div className="full overflow-hidden py-10 mx-auto flex flex-row items-center justify-center flex-wrap gap-4">
        {logos.map((item, idx) => (
          <div
            key={idx}
            className="w-80 h-36 bg-gradient-to-br to-gray-100 from-white border border-gray-300 rounded-xl  p-5 flex flex-col justify-center "
          >
            <div className="flex justify-between items-center">
              <button className="p-2 bg-gray-100 hover:bg-gray-300 transition-colors rounded-lg">
                <span className={` text-xl ${item.color}`}>{item.logo}</span>
              </button>
              <button className="px-3 py-1 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-200 hover:text-black transition">
                Connect
              </button>
            </div>

            <div className="font-bold text-xl py-2 font-sans text-left">
              {item.name}
            </div>

            <p className="font-medium text-sm text-gray-800   font-sans text-justify ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <p className=" flex justify-center items-center gap-2 ">
        {" "}
        <BsPatchCheck className="text-[#3979da] " /> Supports 10+ platforms you
        love
      </p>
    </div>
  );
};

export default Integration;
