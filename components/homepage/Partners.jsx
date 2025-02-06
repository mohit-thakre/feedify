import React from "react";
import Google from "@/assets/logos/Google.svg";
import Microsoft from "@/assets/logos/Microsoft.svg";
import Amazon from "@/assets/logos/Amazon.svg";
import Netflix from "@/assets/logos/Netflix.svg";
import Instagram from "@/assets/logos/Instagram.svg";
import Uber from "@/assets/logos/Uber.svg";
import Spotify from "@/assets/logos/Spotify.svg";
import Image from "next/image";

const companyLogos = [
  { name: "Google", src: Google },
  { name: "Microsoft", src: Microsoft },
  { name: "Amazon", src: Amazon },
  { name: "Netflix", src: Netflix },
  { name: "Instagram", src: Instagram },
  { name: "Uber", src: Uber },
  { name: "Spotify", src: Spotify },
];

const Partners = () => {
  return (
    <div className="w-full h-full py-20 text-center">
      <button className="text-sm font-medium relative border border-black/20 text-black dark:text-white px-4 py-1 rounded-full">
        <span>Trusted customers</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>

      <h1 className="text-5xl font-bold mx-auto max-w-3xl mt-4">
        Trusted by Thousands of Happy Customers
      </h1>

      <p className="font-medium text-center max-w-3xl text-gray-600 font-sans py-6 mx-auto">
        Hear real stories from satisfied customers who have experienced our
        top-quality service. Their words inspire trust, confidence, and
        excellence—because your satisfaction is our greatest achievement!
      </p>

      <div className="w-full overflow-hidden py-10 mx-auto">
        <div className="flex gap-10 flex-wrap justify-center items-center ">
          {companyLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.name}
              className="h-10 w-28  grayscale-[100%] opacity-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
