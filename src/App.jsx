import { Canvas } from "@react-three/fiber";
import "remixicon/fonts/remixicon.css";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
import { div } from "three/tsl";
const App = () => {
  return (
    <div className="w-full h-full">
      <div className="navbar w-full fixed flex items-center justify-center ">
        <div className="flexdiv flex pt-8 pb-1 items-center justify-center gap-4 font-sans  text-[1vw]  border-b border-[#ffffff6f] text-[#ffffffa9] w-fit">
          <h4>
            <i class="ri-apple-fill text-sm text-[#ffffffc0]"></i>
          </h4>
          <h4>Store</h4>
          <h4>Mac</h4>
          <h4>iPad</h4>
          <h4>iPhone</h4>
          <h4>Watch</h4>
          <h4>Airpods</h4>
          <h4>TV & Home</h4>
          <h4>Entertainment</h4>
          <h4>Accessories</h4>
          <h4>Support</h4>
          <h4>
            <i class="ri-search-line text-sm text-[#ffffffc0]"></i>
          </h4>
          <h4>
            <i class="ri-shopping-bag-line text-sm text-[#ffffffc0]"></i>
          </h4>
        </div>
      </div>
      <div className="absolute left-[50%] translate-x-[-50%] top-[13.5vh] flex flex-col items-center gap-1  text-white">
        <h3 className="glow  tracking-tighter font-[300]">
          macbook pro.
        </h3>
        <h5 className="text-2xl mb-3">Oh so pro!</h5>
        <p className="text-center w-3/6 text-sm text-[#ffffff99]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a
          repellat nihil hukhu
           .
        </p>
      </div>
      <Canvas camera={{ fov: 20, position: [10, 0, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
