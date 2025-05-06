import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Secondpage = () => {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = horizontalRef.current;

    let totalScroll = container.scrollWidth - window.innerWidth;

    let ctx = gsap.context(() => {
      gsap.to(container, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="secondpage w-full h-full  bg-[#161617] overflow-hidden"
    >
      <div className="secondupper flex items-end justify-between h-[19%] text-white px-16 py-4 font-macFont  font-[500]">
        <h1 className="text-6xl">Get the highlights.</h1>
        <div className="flex items-center gap-6 text-2xl">
          <h4 className="text-[#2997FF]">
            Watch the announcement <i className="ri-play-circle-line "></i>
          </h4>
          <h4 className="text-[#2997FF]">
            Watch in ASL <i className="ri-play-circle-line"></i>
          </h4>
        </div>
      </div>

      <div
        ref={horizontalRef}
        className="secondlower flex flex-shrink-0 items-center h-[80%] min-w-max text-white"
      >
        <div className="w-[86vw] h-[90%] mx-24 rounded-[2vw] shadow-cyan-50 relative  bg-black overflow-hidden">
          <h1 className="absolute z-10 top-10 left-10 text-2xl  font-macFont font-bold">
           Built for Apple Intelligence. <br />
          Personal, private, powerful.1
          </h1>
          <img
            className="w-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  "
            src="https://www.apple.com/in/macbook-pro/images/overview/highlights/highlights_apple_intelligence_siri__d970vf0sy32a_medium.jpg"
            alt=""
          />
        </div>

        <div className="w-[86vw] h-[90%] mx-24 rounded-[2vw] shadow-cyan-50 relative  bg-black overflow-hidden ">
          <h1 className="absolute z-10 top-10 left-10 text-2xl  font-macFont font-bold">
          M4, M4 Pro and M4 Max. <br />
          Ready for whatever’s impossible.
          </h1>
          <video autoPlay muted loop src="https://www.apple.com/105/media/ww/macbook-pro/2024/00a46e4c-adb6-4301-aa38-917d219bff07/anim/highlights-center-stage/medium_2x.mp4" className="w-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] "></video>
        </div>

        <div className="w-[86vw] h-[90%] mx-24 rounded-[2vw] shadow-cyan-50 relative  bg-black overflow-hidden">
          <h1 className="absolute z-10  top-10 left-10 text-2xl  font-macFont font-bold">
            Longest battery life ever in a Mac. <br />
            Up to 24 hours.3
          </h1>
          <img
            className="w-full content-center  "
            src="https://www.apple.com/v/macbook-pro/ar/images/overview/highlights/highlights_battery__ua2dmuk7jvmm_medium.jpg"
            alt=""
          />
        </div>

        <div className="w-[86vw] h-[90%] mx-24 rounded-[2vw] shadow-cyan-50 relative  bg-black overflow-hidden">
          <h1 className="absolute z-10  top-10 left-10 text-2xl  font-macFont font-bold">
          Liquid Retina XDR display. <br />
          Bright beyond belief.
          </h1>
          <img
            className="w-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  "
            src="https://www.apple.com/v/macbook-pro/ar/images/overview/highlights/highlights_display__ed8l4csvmfee_medium.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
