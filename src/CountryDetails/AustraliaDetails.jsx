import React, { useState } from 'react';
import '../CountryDetails/CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faGraduationCap, faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';
import countryImages from './countryImages';
import { Link } from 'react-router-dom';

export default function AustraliaDetails() {
    const countries = [
        { name: "Canada", flag: countryImages.Canada, path: "/country/Canada" },
        { name: "Australia", flag: countryImages.Australia, path: "/country/Australia" },
        { name: "UK", flag: countryImages.UK, path: "/country/UK" },
        { name: "New Zealand", flag: countryImages.NewZealand, path: "/country/NewZealand" },
        { name: "USA", flag: countryImages.USA, path: "/country/USA" },
        { name: "Denmark", flag: countryImages.Denmark, path: "/country/Denmark" },
        { name: "Belgium", flag: countryImages.Belgium, path: "/country/Belgium" },
        { name: "France", flag: countryImages.France, path: "/country/France" },
        { name: "Germany", flag: countryImages.Germany, path: "/country/Germany" },
        { name: "Italy", flag: countryImages.Italy, path: "/country/Italy" },
        { name: "Japan", flag: countryImages.Japan, path: "/country/Japan" },
        { name: "Brazil", flag: countryImages.Brazil, path: "/country/Brazil" },
        { name: "South Africa", flag: countryImages.SouthAfrica, path: "/country/SouthAfrica" },
    ];

    const downloads = [
        { title: "Application Form", size: "3.9 KB", link: "/path/to/toefl.pdf" },
        { title: "Terms & Conditions", size: "3.9 KB", link: "/path/to/terms.pdf" },
    ];

    const [showAll, setShowAll] = useState(false);

    return (
        <div className="country-details-section md:mt-5 pt-5">
            <div className="bg-breadcrumb">
                <div className="breadcrumb-image">
                    <div className="overlay-gradient"></div>
                    <img src="Images/Canada-Background.jpg" alt="Canada Background" className="breadcrumb-bg" />
                </div>
                <div className="breadcrumb-text">
                    <h3>Welcome to Australia</h3>
                    <p>
                        Explore Australia’s stunning landscapes, world-class education, thriving job market, and exceptional quality of life. Your gateway to a brighter future.
                    </p>
                    <a href="#contact-container" className="contact-button">
                        Get in Touch with Us Today!
                    </a>
                </div>
            </div>

            <div className="Country-And-Details-Section">


                <div className="Country-Paragraph-Section">
                    <div className="country-section-content">
                        <h1>Immigrate to Australia</h1>
                        <h3>Helping You Achieve Your Dream Life in Australia</h3>
                        <p>Australia is renowned for its high standard of living, cultural diversity, and opportunities for skilled workers, students, and families. With a strong economy and a welcoming immigration system, Australia offers a bright future for those seeking a new home.</p>
                        <p>Our dedicated immigration consultants are here to assist you in navigating the application process seamlessly. Whether you aim to study, work, or settle permanently, we ensure that your transition is smooth and stress-free.</p>
                        <p>From visa applications to finding a place to live, we provide end-to-end support, making your move to Australia as easy as possible.</p>
                        <div className="country-section-image">
                            <img src="/Images/Australia-Section.jpg" alt="Australia Immigration" className='img-fluid' />
                        </div>
                    </div>

                    <div className="country-section-whyChooseUs mt-5 text-start">
                        <h1 className='ms-2'>Why Choose Australia?</h1>
                        <div className="why-choose-us mt-5">
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faHandsHelping} />
                                    </span>
                                    <h4>Friendly & Multicultural Society</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </span>
                                    <h4>Top-Ranked Universities</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </span>
                                    <h4>Strong Job Market</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </span>
                                    <h4>Beautiful Natural Scenery</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="universities-section">
                        <div className="universities-section-content">
                            <h1>Top Australian Universities</h1>
                            <p>
                                Australia is home to some of the world's top universities, offering high-quality education and research opportunities. International students benefit from globally recognized degrees, diverse campus life, and a vibrant academic environment.
                            </p>
                            <p>
                                Australian universities consistently rank among the best globally, providing a wide range of programs across various fields. Many institutions focus on practical learning, research excellence, and strong industry connections, ensuring students graduate with real-world skills.With its excellent education system, strong support for students, and thriving job market, Australia is a prime destination for higher education and career growth. Students also benefit from scholarships, post-study work visas, and opportunities for permanent residency.
                            </p>
                        </div>

                        <div className="image-section-content">
                            <div className="university-content">
                                <ul>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Melbourne</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Australian National University</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Sydney</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Queensland</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Monash University</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of New South Wales</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Western Australia</li>
                                </ul>
                            </div>
                            <div className="university-image">
                                <img
                                    src="/Images/student-girl.jpg"
                                    alt="Student"
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Country-container-section mt-4">
                    <div className="country-list">
                        {countries.slice(0, showAll ? countries.length : 6).map((country, index) => (
                            <Link key={index} to={country.path} className="country-item">
                                <span className="country-list-name-section ms-2">{country.name}</span>
                                <img src={country.flag} alt={`${country.name} Flag`} className="country-flag" />
                            </Link>
                        ))}

                        <div className="toggle-button">
                            {!showAll ? (
                                <button className='plus-section' onClick={() => setShowAll(true)}>
                                    <span>More Countries</span>
                                    <Plus size={20} className='ms-2' />
                                </button>
                            ) : (
                                <button className='plus-section' onClick={() => setShowAll(false)}>
                                    <span>Less Countries</span>
                                    <Minus size={20} className='ms-2' />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="downloads-container p-5">
                        <h3 className="downloads-title">Downloads</h3>
                        <div className="downloads-list">
                            {downloads.map((file, index) => (
                                <a key={index} href={file.link} download className="download-item mt-3">
                                    <div className="download-icon">
                                        <Download size={24} />
                                    </div>
                                    <div className="download-info">
                                        <p className="download-title">{file.title}</p>
                                        <p className="download-size">{file.size}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="approval-card">
                        <img className="background-pattern" src="/Images/patterns.jpg" alt="Background Pattern" />
                        <div className="card-content">

                            <h3>Your Approval, Just One Click Away!</h3>
                            <button className="get-in-touch-btn">Get in Touch</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}