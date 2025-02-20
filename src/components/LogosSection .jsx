import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'animate.css';
import logo1 from '../assets/imgs/LogosSection/logo1.jpg';
import logo2 from '../assets/imgs/LogosSection/logo2.jpg';
import logo3 from '../assets/imgs/LogosSection/logo3.jpg';
import logo4 from '../assets/imgs/LogosSection/logo4.jpg';
import logo5 from '../assets/imgs/LogosSection/logo5.jpg';
import logo6 from '../assets/imgs/LogosSection/logo6.jpg';
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";


const LogosSection = () => {
    useEffect(() => {
        const wow = new WOW.WOW({
            live: false,
        });
        wow.init();
    }, []);

    const logos = [
        { src: logo1, alt: "CICC Logo" },
        { src: logo2, alt: "NAFSA Logo" },
        { src: logo3, alt: "ICEF Logo" },
        { src: logo4, alt: "ABA Logo" },
        { src: logo5, alt: "PIER Logo" },
        { src: logo6, alt: "Education UK Logo" },
        { src: logo1, alt: "Bureau Veritas Logo" },
    ];

    return (
        <>
            <div style={{ backgroundColor: '#f7fafc', padding: '2rem 0', backgroundImage: `url(${bgImage})` }}>
                <div className="container">
                    <h2 className="text-center mb-4 wow animate__animated animate__fadeInDown" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
                        Our Certifications
                    </h2>
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="wow animate__animated animate__zoomIn d-flex justify-content-center align-items-center"
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '8px',
                                    padding: '10px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                }}
                                data-wow-delay={`${index * 0.2}s`} // Delay for each logo
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    style={{ maxHeight: '100px', maxWidth: '100px', objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogosSection;
