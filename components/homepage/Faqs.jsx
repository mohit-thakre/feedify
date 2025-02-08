"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faqs = () => {
  const faqs = [
    {
      question: "How do I collect testimonials from users?",
      answer:
        "Users can submit testimonials through a simple form shared via a link or embedded on your website.",
    },
    {
      question: "Can I edit or manage submitted testimonials?",
      answer:
        "Yes, the admin dashboard allows you to approve, edit, or organize testimonials before displaying them.",
    },
    {
      question: "How can I embed testimonials on my website?",
      answer:
        "You can use an iframe or JavaScript snippet to display testimonials dynamically.",
    },
    {
      question: "Is it possible to customize the look of the testimonials?",
      answer:
        "Yes, you can customize fonts, colors, and layouts to match your brand.",
    },
    {
      question: "How secure is the testimonial data?",
      answer:
        "All testimonials are securely stored with encryption, ensuring data protection and compliance.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full h-full py-20 text-center">
      <button className="text-sm font-medium relative border border-black/20 text-black dark:text-white px-4 py-1 rounded-full">
        <span>FAQs</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>

      <h1 className="text-5xl font-bold mx-auto max-w-3xl ">
        Recently raisedqueries about feedIFY
      </h1>

      <p className="font-medium text-center max-w-3xl text-gray-600 font-sans py-6 mx-auto">
        Everything you need to know about our testimonial platform.
      </p>
      <div className=" mx-auto font-sans">
        <div className="full  py-10 flex justify-center items-center flex-wrap gap-3">
          {faqs.map((item, index) => {
            return (
              <div
                key={index}
                className="p-2 border cursor-pointer font-sans"
                style={{ borderRadius: "20px" }}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div
                  className=" w-[700px]  gap-5 rounded-xl shadow  hover:shadow-2xl px-4 py-3"
                  style={{ borderRadius: "12px" }}
                >
                  <div className="w-full flex justify-between items-center">
                    <h1 className="text-lg font-semibold text-left">
                      {item.question}
                    </h1>
                    <h1
                      className={`hover:rotate-180 duration-500 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <IoIosArrowUp />
                    </h1>
                  </div>

                  {activeIndex === index ? (
                    <p className="text-md text-pure-greys-600 font-medium text-left py-2 ">
                      {item.answer}
                    </p>
                  ) : (
                    <span className=" hidden"></span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
