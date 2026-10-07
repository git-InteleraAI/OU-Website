import { useEffect, useState } from "react";

const images = [
    "/images/slider/OU_eng.png",
    "/images/slider/Technology.png",
    "/images/slider/PM.png",
    "/images/slider/Vice.png",
];

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((previous) =>
                previous === images.length - 1
                    ? 0
                    : previous + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentImage((previous) =>
            previous === 0
                ? images.length - 1
                : previous - 1
        );
    };

    const goToNext = () => {
        setCurrentImage((previous) =>
            previous === images.length - 1
                ? 0
                : previous + 1
        );
    };

    return (
        <div className="slider">

            {images.map((image, index) => (
                <img
                    key={image}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`slider-image ${index === currentImage ? "active" : ""
                        }`}
                />
            ))}

            <div className="slider-overlay"></div>

            <div className="slider-content">
                <span className="slider-tag">
                    Welcome
                </span>

                <h2>
                    Inspiring Progress Through
                    <br />
                    Excellence & Innovation
                </h2>

                <p>
                    Building a stronger future through knowledge,
                    innovation and meaningful initiatives.
                </p>

                <button className="hero-button">
                    Explore More
                </button>
            </div>

            <button
                className="slider-arrow slider-arrow-left"
                onClick={goToPrevious}
            >
                ‹
            </button>

            <button
                className="slider-arrow slider-arrow-right"
                onClick={goToNext}
            >
                ›
            </button>

            <div className="slider-dots">

                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`slider-dot ${index === currentImage ? "active" : ""
                            }`}
                        onClick={() => setCurrentImage(index)}
                    />
                ))}

            </div>

        </div>
    );
};

export default ImageSlider;