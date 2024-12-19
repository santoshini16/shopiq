'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HeroSection() {
  const images = [
    "https://azbookhouse.wordpress.com/wp-content/uploads/2014/01/online-shopping.jpg",
    "https://i.pinimg.com/736x/b6/89/96/b68996b0aeb13339740f961ada455a77.jpg",
    "https://static.vecteezy.com/system/resources/previews/036/528/297/non_2x/hand-drawn-online-shopping-horizontal-banner-vector.jpg",
    "https://www.cartrollers.com/wp-content/uploads/2018/11/SLIDER-1.jpg",
    "https://www.cartrollers.com/wp-content/uploads/2018/11/SLIDER-2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="h-auto md:h-[40rem] bg-red flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
     
   
      <div className="w-full h-[18rem] md:h-[20rem] lg:h-[30rem] mr-6 mt-16 md:mt-0 relative p-4">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute w-full h-full object-fit rounded-md"
          />
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          ></button>
        ))}
      </div>

      {/* Control Buttons */}
      <button
        className="absolute top-[60%] left-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <button
        className="absolute top-[60%] right-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
}

export default HeroSection;



