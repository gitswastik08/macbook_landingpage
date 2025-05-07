import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { FaApple } from "react-icons/fa";

const Loader = () => {
  const { progress } = useProgress(); // progress is percentage

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center mt-[20vh] gap-4">
        <FaApple className="text-white text-5xl animate-bounce" />
       
      </div>
    </Html>
  );
};

export default Loader;
