import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Sixthpage = () => {
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const cardsRef = useRef(null);

  

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        end: "top 30%",
        start:"top 70%",
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

    // cards container animation
    tl.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 3, ease: "power2.out" }
    );

    // Cleanup
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);


  return (
    <div className="bg-black w-full flex flex-col pb-40 items-center gap-[15vh] font-macFont">
      <div className="text-white flex flex-col gap-4 tracking-wide items-start  ">
        <h4 className="text-xl font-bold ">BATTERY</h4>
        <h1 className="text-7xl font-bold">
          {" "}
          We can do this all day. <br />
          And night.
        </h1>
      </div>
      <div className=" rounded-t-lg overflow-hidden">
        <img
          className="w-full "
          src="https://www.apple.com/v/macbook-pro/ar/images/overview/themes/battery/battery_hero__d5zgrstiu9si_medium_2x.jpg"
          alt=""
        />
      </div>

      <div
        ref={sectionRef}
        className="w-[55%] h-fit flex flex-col font-macFont gap-14 py-[4vh] font-bold text-[#ffffff8e]"
      >
        <h1 ref={h1Ref} className="text-start w-[77%] text-lg">
          The new MacBook Pro has the{" "}
          <span className="text-white">longest battery life ever in a Mac</span>{" "}
          — up to 24 hours — and supports fast charge, allowing it to charge up
          to 50% in just 30 minutes. 50 All models provide the same performance
          whether they’re plugged in or not, so you can spend more time thinking
          about an outlet for your passion, not your laptop.
        </h1>

        <div ref={cardsRef} className="w-full flex justify-between items-start">
          {["24 hours", "14 more"].map((val, i) => (
            <div key={i} className="relative py-7">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-t-xl"></div>
              <p className="text-lg leading-snug">
                Up to
                <h2 className="text-white text-[3vw]">{val}</h2>
                {["battery life3,6", " hours than Intel-based MacBook Pro5"][i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sixthpage;
