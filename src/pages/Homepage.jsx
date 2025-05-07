import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "../MacContainer";
import Loader from "../components/Loader";

const Homepage = () => {
  return (
    <div className="homepage w-full h-full relative">
      {/* Top Text & Image */}
      <div className="w-full absolute left-[50%] translate-x-[-50%] top-[13.5vh] flex flex-col items-center justify-start gap-1 text-white z-10 pointer-events-none">
        <div className="absolute top-1">
          <h1 className="glow">macbook pro</h1>
        </div>
        <img
          className="w-[80vw]"
          src="https://www.apple.com/in/macbook-pro/images/overview/welcome/hero_apple_intelligence_headline__d3q0g47xl682_medium_2x.png"
          alt=""
        />
      </div>

      {/* Canvas with Loader inside */}
      <div className="w-full h-screen relative z-10">
        <Canvas camera={{ fov: 20, position: [10, 0, 220] }}>
          <Suspense fallback={<Loader />}>
            <Environment
              files={[
                "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
              ]}
            />
            <ScrollControls pages={3}>
              <MacContainer />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>

      {/* Buy Button */}
      <div className="h-10 w-12 z-30 absolute left-[50%] top-[80%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-4">
        <button className="bg-[#2177c8] py-1 px-6 text-lg font-macFont text-white rounded-2xl">
          Buy
        </button>
        <h2 className="text-[#ffffff78] whitespace-nowrap text-lg font-macFont">
          From ₹169900.00*
        </h2>
      </div>
    </div>
  );
};

export default Homepage;
