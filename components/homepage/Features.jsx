import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

import { featuresData } from "@/data/data";

const Features = () => {
  return (
    <div className=" w-full h-full py-20">
      <button className=" text-sm font-medium relative border border-black/[0.2] text-black dark:text-white px-4 py-1 rounded-full">
        <span>Features</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </button>
      <h1 className=" text-5xl font-bold mx-auto max-w-3xl ">
        Collect and display testimonials all in one solution
      </h1>
      <p className=" font-medium text-center max-w-3xl text-pure-greys-600 font-sans py-6 mx-auto">
        Copy and paste our HTML code to integrate the Wall Of Love (👉 full
        version) into your website. We are compatible with all no-code platforms
        (Webflow, WordPress, and more!)
      </p>
      <div className=" flex flex-wrap justify-center items-center gap-5 w-full h-auto py-10  ">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className=" p-2 border-2 rounded-2xl border-gray-200"
            style={{ borderRadius: "20px" }}
          >
            <div
              style={{ borderRadius: "12px" }}
              className="  bg-white   shadow-xl rounded-2xl p-6 w-80 flex flex-col items-center text-center   h-96
         backdrop-blur-lg bg-opacity-80 transition-transform transform  hover:shadow-2xl duration-300"
            >
              {/* Icon Section */}
              <div className="icon  p-4 rounded-full flex items-center justify-center shadow-md">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mt-4 text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              {/* Description List */}
              <ul className="text-gray-600 dark:text-gray-300 mt-4 text-sm text-left space-y-3 w-full px-4">
                {feature.description.map((desc, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <BsPatchCheckFill className="text-lg text-green-500" />
                    <span className="leading-tight">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
