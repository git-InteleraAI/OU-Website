import ImageSlider from "../components/ImageSlider";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <ImageSlider />

      <div className="quick-info-wrapper">
        <div className="quick-info-card">
          
          <div className="quick-info-content">
            <h3>Our Vision</h3>

            <p>
              To create a national recognized Centre of Excellence in
              semiconductor systems, artificial intelligence, embedded
              technologies, advanced navigation systems, and indigenous chip
              design by fostering cutting-edge research, innovation, technology
              development, and industry-oriented skill development.
            </p>
          </div>
        </div>

        <div className="quick-info-card featured">
      
          <div className="quick-info-content">
            <h3>Our Mission</h3>

            <ul className="mission-list">
              <li>
                To promote advanced research and innovation in semiconductor
                design, artificial intelligence, embedded systems, FPGA/SoC
                technologies, and indigenous electronic systems.
              </li>

              <li>
                To develop skilled manpower through industry-oriented training,
                hands-on learning, internships, and exposure to advanced
                semiconductor design tools and hardware platforms.
              </li>

              <li>
                To establish state-of-the-art research infrastructure supporting
                IC design, simulation, FPGA prototyping, AI acceleration,
                post-silicon validation, and real-time embedded applications.
              </li>

              <li>
                To strengthen industry-academia collaboration through joint
                research projects, technology development, knowledge exchange,
                and innovation-driven partnerships.
              </li>

              <li>
                To contribute toward indigenous semiconductor technology
                development, national strategic missions, and sustainable
                technological growth.
              </li>

              <li>
                To foster interdisciplinary research in emerging areas such as
                AI, GNSS, navigation systems, edge intelligence, and advanced
                electronic systems.
              </li>

              <li>
                To support entrepreneurship, technology transfer, and societal
                applications through innovative research outcomes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
