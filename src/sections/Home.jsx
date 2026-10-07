import ImageSlider from "../components/ImageSlider";

const Home = () => {
    return (
        <section id="home" className="home-section">
            <ImageSlider />

            <div className="quick-info-wrapper">

                <div className="quick-info-card">
                    <div className="info-icon">
                        01
                    </div>

                    <div>
                        <h3>Our Vision</h3>
                        <p>
                            Creating meaningful progress through
                            knowledge and innovation.
                        </p>
                    </div>
                </div>

                <div className="quick-info-card featured">
                    <div className="info-icon">
                        02
                    </div>

                    <div>
                        <h3>Our Mission</h3>
                        <p>
                            Empowering people and organizations with
                            opportunities for growth.
                        </p>
                    </div>
                </div>

                <div className="quick-info-card">
                    <div className="info-icon">
                        03
                    </div>

                    <div>
                        <h3>Our Commitment</h3>
                        <p>
                            Delivering excellence with integrity,
                            purpose and responsibility.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;