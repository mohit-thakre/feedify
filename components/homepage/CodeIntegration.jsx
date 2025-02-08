"use client";
import { useState } from "react";

import GitHubButton from "react-github-btn";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {
  materialDark,
  materialLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
const CodeIntegration = () => {
  const [active, setActive] = useState("javascript");
  const iframeCode = `
  <script src="https://feedify.com/embed-testimonials.js"></script>
  <iframe src="https://feedify.com/testimonials.html"
    width="100%" height="200">
  </iframe>`;

  const jsCode = `
  (async function () {
    const response = await fetch("https://feedify.com/api/testimonials");
    const testimonials = await response.json();
    
    console.log(testimonials);
  })();`;
  return (
    <div className="w-full h-full py-20">
      <button className="text-sm font-medium relative border border-black/[0.2] text-black dark:text-white px-4 py-1 rounded-full">
        <span>Features</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>
      <h1 className="text-5xl font-bold mx-auto max-w-3xl text-center">
        If it's code, show how it works
      </h1>
      <p className="font-medium text-center max-w-3xl text-pure-greys-600 font-sans py-6 mx-auto">
        We built the ultimate tool for showcasing your satisfied customers. With
        3-lines of HTML code, you can embed all your testimonials to any
        platform!
      </p>

      {/* Code Display Box */}
      <div className=" py-10">
        <div
          className="max-w-3xl min-h-[200px] border-2 rounded-xl mx-auto p-2 "
          style={{ borderRadius: "20px" }}
        >
          <div
            style={{ borderRadius: "12px" }}
            className="  backdrop-blur-lg bg-opacity-80 shadow-xl"
          >
            <div className="w-full h-14 border-b-2 flex justify-between items-center px-4 gap-2 font-mono">
              <div className="flex gap-2">
                <button
                  className={`px-4 py-1 ${
                    active === "javascript"
                      ? "bg-[#3979da] text-white"
                      : "bg-gray-200"
                  } rounded-md border-2`}
                  onClick={() => setActive("javascript")}
                >
                  JavaScript
                </button>
                <button
                  className={`px-4 py-1 ${
                    active === "iframe"
                      ? "bg-[#3979da] text-white"
                      : "bg-gray-200"
                  } rounded-md border-2 `}
                  onClick={() => setActive("iframe")}
                >
                  Iframe
                </button>
              </div>
              <div className=" flex gap-2">
                <GitHubButton
                  href="https://github.com/d/github-buttons"
                  data-color-scheme="no-preference: light; light: light; dark: dark;"
                  data-icon="octicon-star"
                  data-size="large"
                  aria-label="Star buttons/github-buttons on GitHub"
                >
                  Star
                </GitHubButton>
                <GitHubButton
                  href="https://github.com/d/github-buttons/fork"
                  data-color-scheme="no-preference: light; light: light; dark: dark;"
                  data-icon="octicon-repo-forked"
                  data-size="large"
                  aria-label="Fork buttons/github-buttons on GitHub"
                >
                  Fork
                </GitHubButton>
              </div>
            </div>

            <div className="p-3 bg-gray-50 rounded-b-xl">
              <div className="text-zinc-900 overflow-hidden bg-gray-100 p-4 rounded-lg text-left">
                <SyntaxHighlighter
                  language={active === "iframe" ? "html" : "javascript"}
                  style={materialOceanic}
                  // showLineNumbers={true}
                  customStyle={{ borderRadius: "0.375rem" }}
                >
                  {active === "iframe" ? iframeCode : jsCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeIntegration;
