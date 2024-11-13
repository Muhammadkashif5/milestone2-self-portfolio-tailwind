import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <span className="relative text-transparent w-[2.5em] h-[2.5em] rounded-full animate-[bblFadInOut_1.8s_infinite_ease-in-out]">
        <span className="absolute top-0 left-[-3.5em] w-[2.5em] h-[2.5em] rounded-full animate-[bblFadInOut_1.8s_infinite_ease-in-out] animate-delay-[0.32s]" />
        <span className="absolute top-0 left-0 w-[2.5em] h-[2.5em] rounded-full animate-[bblFadInOut_1.8s_infinite_ease-in-out] animate-delay-[0.16s]" />
        <span className="absolute top-0 left-[3.5em] w-[2.5em] h-[2.5em] rounded-full animate-[bblFadInOut_1.8s_infinite_ease-in-out]" />
      </span>
    </div>
  );
};

export default Loader;
