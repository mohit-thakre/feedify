import React from "react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-full py-20  rounded-md shadow-md flex justify-around items-start  gap-4 text-left">
      <div>
        <h1 className=" font-extrabold text-3xl py-1 italic">FeedIFY</h1>
        <p>© feedify.io - All rights reserved.</p>
        <button className="flex items-center gap-1 px-3 py-2 rounded-sm my-2 text-sm border bg-black text-white">
          <span>
            <FaGithub />
          </span>{" "}
          Star
        </button>
      </div>
      <div>
        <h1 className=" font-semibold py-1">Product</h1>
        <li className=" hover:underline list-none text-gray-700">Features</li>
        <li className=" hover:underline list-none text-gray-700">
          Testemonial
        </li>
        <li className=" hover:underline list-none text-gray-700">Pricing</li>
      </div>
      <div>
        <h1 className=" font-semibold py-1">Legal</h1>
        <li className=" hover:underline list-none text-gray-700 ">
          Terms & Condition
        </li>
        <li className=" hover:underline list-none text-gray-700">
          Privacy Policy
        </li>
        <li className=" hover:underline list-none text-gray-700">
          Refund Policy
        </li>
      </div>
      <div>
        <h1 className=" font-semibold py-1">Social</h1>
        <li className=" hover:underline list-none text-gray-700 flex justify-start items-center gap-2">
          <FaXTwitter /> Twitter
        </li>
        <li className=" hover:underline list-none text-gray-700 flex justify-start items-center gap-2">
          <FaInstagram /> Instagram
        </li>
        <li className=" hover:underline list-none text-gray-700 flex justify-start items-center gap-2">
          <FaLinkedin /> Linkedin
        </li>
      </div>
    </div>
  );
};

export default Footer;
