import React from "react";
import { FiCheck, FiX } from "react-icons/fi";

const pricingData = [
  {
    name: "Starter Pack",
    price: "$0/mo",
    description: "Best for individuals",
    features: [
      { text: "Up to 5 testimonials", included: true },
      { text: "Email support", included: true },
      { text: "Basic analytics", included: true },
      { text: "Custom branding", included: false },
      { text: "Priority support", included: false },
      { text: "API access", included: false },
    ],
    buttonText: "Get started free",
    buttonBg: "bg-black text-white border border-black/50",
  },
  {
    name: "Pro Pack",
    price: "$15/mo",
    description: "Best for small businesses",
    features: [
      { text: "Up to 50 testimonials", included: true },
      { text: "Priority email support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom branding", included: true },
      { text: "Priority support", included: false },
      { text: "API access", included: false },
    ],
    buttonText: "Get started",
    buttonBg: "bg-[#3979da] hover:bg-[#315ea8] text-white",
  },
  {
    name: "Enterprise Pack",
    price: "$49/mo",
    description: "Best for large teams",
    features: [
      { text: "Unlimited testimonials", included: true },
      { text: "Dedicated support", included: true },
      { text: "Comprehensive analytics", included: true },
      { text: "Custom branding", included: true },
      { text: "Priority support", included: true },
      { text: "API access", included: true },
    ],
    buttonText: "Contact us",
    buttonBg: "bg-[#3979da] hover:bg-[#315ea8] text-white",
  },
];

const Pricing = () => {
  return (
    <div className="w-full h-full py-20">
      <button className="text-sm font-medium relative border border-black/[0.2] text-black dark:text-white px-4 py-1 rounded-full">
        <span>Pricing</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>
      <h1 className="text-5xl font-bold mx-auto max-w-3xl text-center">
        Collect and display testimonials all in one solution
      </h1>
      <p className="font-medium text-center max-w-3xl text-pure-greys-600 font-sans py-6 mx-auto">
        Copy and paste our HTML code to integrate the Wall Of Love (👉 full
        version) into your website. We are compatible with all no-code platforms
        (Webflow, WordPress, and more!)
      </p>
      <div className=" py-9 flex flex-wrap justify-center items-center gap-5">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className=" p-2 border-2 rounded-2xl border-gray-200"
            style={{ borderRadius: "20px" }}
          >
            <div
              key={index}
              className="relative h-[600px] w-[330px] overflow-hidden rounded-2xl    p-6 shadow-lg transition-all hover:shadow-2xl"
              style={{ borderRadius: "12px" }}
            >
              <div className="flex flex-col items-center border-b border-gray-200 pb-6">
                <span className="mb-6 inline-block text-gray-700 font-medium">
                  {plan.name}
                </span>
                <span className="mb-3 inline-block text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm">
                  {plan.description}
                </span>
              </div>

              <div className="space-y-4 py-9">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span
                      className={`grid size-6 place-content-center rounded-full text-sm font-medium ${
                        feature.included
                          ? "bg-[#3979da] text-white"
                          : "bg-gray-300 text-gray-500"
                      }`}
                    >
                      {feature.included ? (
                        <FiCheck size={14} />
                      ) : (
                        <FiX size={14} />
                      )}
                    </span>
                    <span className="text-sm text-gray-600">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full rounded-lg px-5 py-3 text-lg font-medium  transition-all active:scale-95 ${plan.buttonBg}`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
