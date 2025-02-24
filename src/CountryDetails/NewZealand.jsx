import React, { useState } from 'react';
import './CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faGraduationCap, faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';
import countryImages from './countryImages';
import { Link } from 'react-router-dom';

export default function NewZealand() {
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
                    <h3>Welcome to New Zealand</h3>
                    <p>
                        Experience New Zealand’s stunning landscapes, world-class education, and thriving economy. A land of opportunity, innovation, and a high quality of life in the heart of the Pacific.
                    </p>
                    <a href="#contact-container" className="contact-button">
                        Get in Touch with Us Today!
                    </a>
                </div>
            </div>

            <div className="Country-And-Details-Section">


                <div className="Country-Paragraph-Section">
                    <div className="country-section-content">
                        <h1>Immigrate to New Zealand</h1>
                        <h3>Helping You Achieve Your Dream Life in New Zealand</h3>
                        <p>
                            New Zealand is a top destination for immigrants, offering a strong economy, excellent education, and an outstanding quality of life. Whether you're a skilled worker, student, or entrepreneur, New Zealand provides countless opportunities to grow and thrive.
                        </p>
                        <p>
                            Our expert immigration consultants are here to guide you through every step of the application process. From visa support to settling in, we make your transition to New Zealand smooth and stress-free.
                        </p>
                        <p>
                            With breathtaking landscapes, a welcoming culture, and a thriving job market, New Zealand is the perfect place for individuals and families seeking a fresh start. Explore its vibrant cities, outdoor adventures, and endless possibilities.
                        </p>
                        <div className="country-section-image">
                            <img src="/Images/NewZealand-Section.jpg" alt="New Zealand Immigration" className='img-fluid' />
                        </div>
                    </div>

                    <div className="country-section-whyChooseUs mt-5 text-start">
                        <h1 className='ms-2'>Why Choose New Zealand?</h1>
                        <div className="why-choose-us mt-5">
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faHandsHelping} />
                                    </span>
                                    <h4>Strong Economy & Job Opportunities</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </span>
                                    <h4>Globally Recognized Education System</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </span>
                                    <h4>High Quality of Life & Healthcare</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </span>
                                    <h4>Safe, Multicultural, & Beautiful Environment</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="universities-section">
                        <div className="universities-section-content">
                            <h1>Top New Zealand Universities</h1>
                            <p>
                                New Zealand is home to some of the world's most highly ranked universities, offering top-tier education, cutting-edge research, and a strong focus on innovation. With a student-friendly environment and globally recognized degrees, it is an ideal destination for international students.
                            </p>
                            <p>
                                New Zealand universities provide a diverse range of programs, from engineering and medicine to business and arts. With a focus on practical learning, strong industry connections, and excellent post-study work opportunities, New Zealand remains one of the best places for higher education.
                            </p>
                        </div>

                        <div className="image-section-content">
                            <div className="university-content">
                                <ul>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Auckland</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Otago</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Victoria University of Wellington</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Canterbury</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Massey University</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Waikato</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Lincoln University</li>
                                </ul>
                            </div>
                            <div className="university-image">
                                <img
                                    src="/Images/student-girl.jpg"
                                    alt="Student in New Zealand"
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