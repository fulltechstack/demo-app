import React, { useState, useEffect } from "react";

const images = [
    "/banner/Banner1.jpg",
    "/banner/Banner2.jpg",
    "/banner/Banner3.jpg"
  ];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Change image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval); // Cleanup
    }, []);

    return (
        <div className="w-full overflow-hidden shadow-md">
            <img
                src={images[currentIndex]}
                alt="Banner Slide"
                className="w-full h-[300px] object-cover transition-all duration-700"
            />
        </div>
    );
};

export default Banner;
