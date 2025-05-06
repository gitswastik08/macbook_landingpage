import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Fifthpage = () => {
  const containerRef = useRef(null);
  const imgRefs = useRef([]);
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        end: "top 30%",
        start: "top 70%",
        scrub: true,
        // markers:true,
      },
    });

    // h1 paragraph animation
    tl.fromTo(
      h1Ref.current,
      { opacity: 0, y: 50 }, // Starting state
      { opacity: 1, y: 0, duration: 3, ease: "power2.out" }
    );

 

    // Cleanup
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[170%] bg-black relative flex gap-[5vh] flex-col items-center justify-evenly overflow-hidden  font-macFont"
    >
      {[
        "performance_screen_flame__bhg8ls5afrn6",
        "performance_screen_photoshop__gfpm4csj07ee",
        "performance_screen_blender__d52d3whfhtw2",
        "performance_screen_lightroom__dsnznus7aryq",
        "performance_screen_gaming__e5jif5ctnxm6",
        "performance_screen_touchdesigner__cu3p8w9e5t0m",
      ].map((imgName, i) => (
        <img
          key={i}
          ref={(el) => (imgRefs.current[i] = el)}
          className="absolute translate-x-[-50%] translate-y-[-50%] w-[30vw]"
          style={{
            left: `${[30, 70, 88, 92, 15, 5][i]}vw`,
            top: `${[20, 23, 30, 55, 43, 57][i]}vw`,
            zIndex: i === 1 ? 10 : "auto",
          }}
          src={`https://www.apple.com/v/macbook-pro/ar/images/overview/themes/performance/${imgName}_medium_2x.png`}
          alt=""
        />
      ))}

      <div className="flex w-[100%] h-[100%] flex-col  gap-[25vw] items-center">
        <h1 className="text-[#ffffffd7] text-5xl font-bold  text-center">
          Next-level graphics <br /> performance. Game on.
        </h1>
        <div className="w-full   flex  items-center justify-center ">
          <img
            className="w-[49%]"
            src="https://www.apple.com/v/macbook-pro/ar/images/overview/themes/performance/performance_hw__fs5zct4lwiy6_medium_2x.jpg"
            alt=""
          />
        </div>
      </div>
      <div
        ref={sectionRef}
        className=" w-[55%]   flex absolute top-[68%] flex-col items-center justify-start   py-[4vh] text-[#ffffff8e]"
      >
        <h1
          ref={h1Ref}
          className="text-center font-bold font-macFont w-[77%] text-lg"
        >
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimises fast on-chip memory to dramatically
          increase average GPU utilisation — driving a huge performance boost
          for the most demanding pro apps and games.
        </h1>
      </div>
    </div>
  );
};

export default Fifthpage;
