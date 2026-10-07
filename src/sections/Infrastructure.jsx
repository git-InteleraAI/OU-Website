import { useEffect, useMemo, useState } from "react";

const infrastructureModules = import.meta.glob(
    "../assets/infrastructure/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
        eager: true,
        import: "default",
    }
);

const Infrastructure = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = useMemo(() => {
        return Object.entries(infrastructureModules)
            .sort(([pathA], [pathB]) =>
                pathA.localeCompare(pathB, undefined, {
                    numeric: true,
                })
            )
            .map(([path, src]) => {
                const fileName = path
                    .split("/")
                    .pop()
                    .replace(/\.[^/.]+$/, "");

                const title = fileName
                    .replace(/[-_]/g, " ")
                    .replace(/\b\w/g, (letter) =>
                        letter.toUpperCase()
                    );

                return {
                    path,
                    src,
                    title,
                };
            });
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, []);

    return (
        <main className="infrastructure-page">

            {/* HEADER */}
            <section className="infrastructure-hero">
                <div className="infrastructure-hero-inner">

                    <span className="infrastructure-badge">
                        CAIIC
                    </span>

                    <h1>
                        Infrastructure
                    </h1>

                    <p>
                        Advanced facilities supporting research,
                        semiconductor design, artificial intelligence,
                        FPGA/SoC development, embedded systems and
                        high-performance computing.
                    </p>

                </div>
            </section>

            {/* IMAGE SECTION */}
            <section className="infrastructure-content">

                <div className="infrastructure-container">

                    <div className="infrastructure-heading">

                        <span>
                            OUR FACILITIES
                        </span>

                        <h2>
                            Research & Development Infrastructure
                        </h2>

                        <div className="infrastructure-title-line"></div>

                    </div>

                    {images.length > 0 ? (

                        <div className="infrastructure-grid">

                            {images.map((image, index) => (

                                <div
                                    className="infrastructure-card"
                                    key={image.path}
                                    onClick={() =>
                                        setSelectedImage(image)
                                    }
                                >

                                    <div className="infrastructure-image-wrapper">

                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="infrastructure-image"
                                            loading="lazy"
                                        />

                                        <div className="infrastructure-image-overlay">
                                            <span>
                                                View
                                            </span>
                                        </div>

                                    </div>

                                    <div className="infrastructure-card-bottom">

                                        <span className="infrastructure-number">
                                            {String(index + 1).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>

                                        <h3>
                                            {image.title}
                                        </h3>

                                    </div>

                                </div>

                            ))}

                        </div>

                    ) : (

                        <div className="infrastructure-empty">

                            <h3>
                                Infrastructure images will appear here
                            </h3>

                            <p>
                                Add images inside
                                {" "}
                                <strong>
                                    src/assets/infrastructure/
                                </strong>
                            </p>

                        </div>

                    )}

                </div>

            </section>

            {/* FULL IMAGE VIEW */}
            {selectedImage && (

                <div
                    className="infrastructure-lightbox"
                    onClick={() =>
                        setSelectedImage(null)
                    }
                >

                    <button
                        className="infrastructure-lightbox-close"
                        onClick={() =>
                            setSelectedImage(null)
                        }
                    >
                        ×
                    </button>

                    <div
                        className="infrastructure-lightbox-content"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                        />

                        <p>
                            {selectedImage.title}
                        </p>

                    </div>

                </div>

            )}

        </main>
    );
};

export default Infrastructure;