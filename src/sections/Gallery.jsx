import { useEffect, useMemo, useState } from "react";

const galleryModules = import.meta.glob(
    "../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
        eager: true,
        import: "default",
    }
);

const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = useMemo(() => {
        return Object.entries(galleryModules)
            .sort(([pathA], [pathB]) =>
                pathA.localeCompare(pathB, undefined, {
                    numeric: true,
                })
            )
            .map(([, src]) => src);
    }, []);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImage((previous) =>
                previous === images.length - 1
                    ? 0
                    : previous + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    const previousImage = () => {
        setCurrentImage((previous) =>
            previous === 0
                ? images.length - 1
                : previous - 1
        );
    };

    const nextImage = () => {
        setCurrentImage((previous) =>
            previous === images.length - 1
                ? 0
                : previous + 1
        );
    };

    if (images.length === 0) {
        return (
            <main className="simple-gallery-page">
                <div className="gallery-no-images">
                    No gallery images found.
                </div>
            </main>
        );
    }

    return (
        <main className="simple-gallery-page">

            <div className="gallery-slider">

                {images.map((image, index) => (
                    <img
                        key={image}
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className={`gallery-slide-image ${index === currentImage
                                ? "active"
                                : ""
                            }`}
                    />
                ))}

                {images.length > 1 && (
                    <>
                        <button
                            className="gallery-arrow gallery-arrow-left"
                            onClick={previousImage}
                            aria-label="Previous image"
                        >
                            ‹
                        </button>

                        <button
                            className="gallery-arrow gallery-arrow-right"
                            onClick={nextImage}
                            aria-label="Next image"
                        >
                            ›
                        </button>

                        <div className="gallery-slider-dots">

                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`gallery-slider-dot ${index === currentImage
                                            ? "active"
                                            : ""
                                        }`}
                                    onClick={() =>
                                        setCurrentImage(index)
                                    }
                                    aria-label={`Image ${index + 1}`}
                                />
                            ))}

                        </div>
                    </>
                )}

            </div>

        </main>
    );
};

export default Gallery;