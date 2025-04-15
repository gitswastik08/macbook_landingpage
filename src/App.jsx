import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
import { div } from "three/tsl";
const App = () => {
  return (
    <div className="w-full h-full">
      <div className="absolute left-[50%] translate-x-[-50%] top-[14.5vh] flex flex-col items-center gap-1 text-white">
        <h3 className="glow text-6xl tracking-tighter font-[300]">macbook pro.</h3>
        <h5 className="text-base">Oh so pro!</h5>
        <p className="text-center w-3/6 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a
          repellat nihil .
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
