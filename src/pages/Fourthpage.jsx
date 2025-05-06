import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const Fourthpage = () => {
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
    <div className="bg-black w-full flex flex-col gap-12 items-center h-[180%] relative font-macFont font-bold">
      <div className="absolute left-64 top-0">
        <h4 className="text-white text-xl mb-4 uppercase">Performance</h4>
        <h2 className="text-7xl text-white">Pro all out.</h2>
      </div>

      <div className="w-[95%] h-fit flex justify-center items-center rounded-[2vw] mt-[20vh] bg-black border border-white/10 shadow-[0_0_30px_5px_#1d0c6b]">
        <img src="/images/chip.jpg" className="object-cover w-[80%]" alt="" />
      </div>

      <div
        ref={sectionRef}
        className="w-[55%] h-fit flex flex-col font-macFont gap-14 py-[4vh] text-[#ffffff8e]"
      >
        <h1 ref={h1Ref} className="text-start w-[77%] text-lg">
          MacBook Pro features the{" "}
          <span className="text-white">
            most advanced line-up of chips ever built for a pro laptop.
          </span>{" "}
          Phenomenal single- and multithreaded CPU performance, faster unified
          memory, enhanced machine learning accelerators — the M4 family of
          chips gives you the kind of speed and capability you’ve never thought
          possible. And the powerful Neural Engine makes AI tasks like image
          upscaling and video caption creation fly.
        </h1>

        <div ref={cardsRef} className="w-full flex justify-between items-start">
          {[3.4, 3, 3.5].map((val, i) => (
            <div key={i} className="relative py-7">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-t-xl"></div>
              <p className="text-lg leading-snug">
                MacBook Pro with <br /> M4{["", " Pro", " Max"][i]} is up to
                <h2 className="text-white text-[3vw]">{val}x faster</h2>
                than M1{["", " Pro", " Max"][i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fourthpage;
