import { useState } from "react";
import "./Opportunities.css";

const Opportunities = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="opportunities-page">
            <section className="opportunities-hero">
                <div className="opportunities-hero-inner">
                    <span className="opportunities-badge">CAIIC</span>

                    <h1>Opportunities</h1>

                    <p>
                        Explore opportunities to engage with CAIIC through Internships,
                        UG/PG Projects, Research Guidance and Technical Manpower Training
                        on EDA Tools. Submit your details below and our team will review your
                        request.
                    </p>
                </div>
            </section>

            <section className="opportunities-content">
                <div className="opportunities-container">
                    <div className="opportunities-intro">
                        <span>APPLY &amp; CONNECT</span>

                        <h2>Submit Your Area of Interest</h2>

                        <p>
                            Share your contact details and select the opportunity you are
                            interested in. This helps us understand your requirement and
                            connect you with the appropriate guidance or program.
                        </p>
                    </div>

                    <div className="opportunities-form-card">
                        <form className="opportunities-form" onSubmit={handleSubmit}>
                            <p className="required-note">
                                Fields marked with <span>*</span> are mandatory.
                            </p>

                            <div className="opportunities-form-grid">
                                <div className="opportunities-field">
                                    <label htmlFor="fullName">
                                        Full Name <span className="required-star">*</span>
                                    </label>

                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                <div className="opportunities-field">
                                    <label htmlFor="mobile">
                                        Mobile Number <span className="required-star">*</span>
                                    </label>

                                    <input
                                        id="mobile"
                                        name="mobile"
                                        type="tel"
                                        placeholder="Enter your mobile number"
                                        required
                                    />
                                </div>

                                <div className="opportunities-field">
                                    <label htmlFor="email">
                                        Email Address <span className="required-star">*</span>
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>

                                <div className="opportunities-field">
                                    <label htmlFor="applyFor">
                                        Applying For <span className="required-star">*</span>
                                    </label>

                                    <select
                                        id="applyFor"
                                        name="applyFor"
                                        defaultValue=""
                                        required
                                    >
                                        <option value="" disabled>
                                            Select an opportunity
                                        </option>

                                        <option value="internship">
                                            Internship
                                        </option>

                                        <option value="ug-pg-project">
                                            UG/PG Project
                                        </option>

                                        <option value="research-guidance">
                                            Research Guidance
                                        </option>

                                        <option value="manpower-training">
                                            Manpower Training
                                        </option>
                                    </select>
                                </div>

                                <div className="opportunities-field opportunities-field-full">
                                    <label htmlFor="address">
                                        Address <span className="required-star">*</span>
                                    </label>

                                    <textarea
                                        id="address"
                                        name="address"
                                        rows="3"
                                        placeholder="Enter your address"
                                        required
                                    ></textarea>
                                </div>

                                <div className="opportunities-field opportunities-field-full">
                                    <label htmlFor="details">
                                        Additional Details <span className="required-star">*</span>
                                    </label>

                                    <textarea
                                        id="details"
                                        name="details"
                                        rows="5"
                                        placeholder="Briefly describe your area of interest, project topic, research guidance requirement, training requirement, or any other relevant information"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="opportunities-submit-row">
                                <button
                                    type="submit"
                                    className="opportunities-submit-button"
                                >
                                    Submit Enquiry
                                </button>
                            </div>

                            {submitted && (
                                <div
                                    className="opportunities-form-note"
                                    role="status"
                                >
                                    Your details have been entered successfully. Backend submission
                                    can be connected when the enquiry API is added.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Opportunities;
