import React, { useEffect, useState } from "react";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
];

const TakeCloserLook = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative top-52 w-full h-[70vh]  flex flex-col  items-center justify-center ">
     <div className="flex items-center gap-10 justify-center">
     <button
        onClick={handlePrev}
        className=" text-white bg-white/15 hover:bg-white/30 p-3 rounded-full"
      >
        <i className="ri-arrow-left-s-line text-3xl text-white"></i>
      </button>

      <img
        src={images[currentIndex]}
        alt="nhii aayiii"
        className="w-[80%] h-[90%] object-cover rounded-xl shadow-lg transition-opacity duration-500 opacity-100"
      />

      <button
        onClick={handleNext}
        className=" text-white bg-white/15 hover:bg-white/30 p-3 rounded-full"
      >
        <i class="ri-arrow-right-s-line text-3xl text-white"></i>
      </button>
     </div>

      <div className="flex gap-3 mt-4 h-4 items-center justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white w-4 h-4"
                : "bg-white/30 hover:bg-white/50"
            }`}
          ></button>
        ))}
      </div>

    </div>
  );
};

export default TakeCloserLook;
