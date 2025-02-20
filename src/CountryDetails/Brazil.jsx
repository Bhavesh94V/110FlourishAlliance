import React, { useState } from 'react';
import './CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faGraduationCap, faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';

export default function Brazil() {
    const countries = [
        { name: "Canada", flag: "/Images/Canada.png" },
        { name: "Australia", flag: "/Images/Australiaflag.jpg" },
        { name: "UK", flag: "/Images/UK.jpg" },
        { name: "New Zealand", flag: "/Images/newZealand.jpg" },
        { name: "USA", flag: "/Images/US.png" },
        { name: "Denmark", flag: "/Images/Denmark.png" },
        { name: "Belgium", flag: "/Images/Belgium.png" },
        { name: "France", flag: "/Images/France.png" },
        { name: "Germany", flag: "/Images/Germany.png" },
        { name: "India", flag: "/Images/India.png" },
        { name: "Japan", flag: "/Images/Japan.png" },
        { name: "Brazil", flag: "/Images/Brazil.png" },
        { name: "South Africa", flag: "/Images/SouthAfrica.png" },
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
                    <h3>Welcome to Brazil</h3>
                    <p>
                        Explore Brazil’s vibrant culture, growing economy, and world-class education. A land of opportunity, innovation, and breathtaking landscapes for students, professionals, and entrepreneurs.
                    </p>
                    <a href="#contact-container" className="contact-button">
                        Get in Touch with Us Today!
                    </a>
                </div>
            </div>

            <div className="Country-And-Details-Section">


                <div className="Country-Paragraph-Section">
                    <div className="country-section-content">
                        <h1>Immigrate to Brazil</h1>
                        <h3>Helping You Achieve Your Dream Life in Brazil</h3>
                        <p>
                            Brazil is a dynamic country offering a strong economy, a welcoming culture, and vast opportunities for skilled professionals, students, and entrepreneurs. Its diverse job market and rapidly growing industries make it an attractive destination.
                        </p>
                        <p>
                            Our expert immigration consultants are here to guide you through every step, from visa applications to settling in. We ensure a smooth transition to your new life in Brazil.
                        </p>
                        <p>
                            With world-class universities, a high quality of life, and a strong business ecosystem, Brazil is an ideal place for those seeking growth and success. Enjoy its lively cities, scenic landscapes, and warm, inclusive society.
                        </p>
                        <div className="country-section-image">
                            <img src="/Images/BrazilSection.jpg" alt="Brazil Immigration" className='img-fluid' />
                        </div>
                    </div>

                    <div className="country-section-whyChooseUs mt-5 text-start">
                        <h1 className='ms-2'>Why Choose Brazil?</h1>
                        <div className="why-choose-us mt-5">
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faHandsHelping} />
                                    </span>
                                    <h4>Fast-Growing Economy & Business Opportunities</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </span>
                                    <h4>High-Quality Education & Research Institutions</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </span>
                                    <h4>Affordable Living & Healthcare</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </span>
                                    <h4>Diverse Culture & Beautiful Landscapes</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="universities-section">
                        <div className="universities-section-content">
                            <h1>Top Universities in Brazil</h1>
                            <p>
                                Brazil is home to some of Latin America’s most prestigious universities, known for their strong academic programs, cutting-edge research, and vibrant student culture. With diverse programs and a growing international presence, Brazilian universities provide excellent educational opportunities.
                            </p>
                            <p>
                                From top public institutions to renowned private universities, Brazil attracts students from around the world. With affordable tuition, scholarship options, and a dynamic learning environment, Brazil is an emerging destination for higher education in South America.
                            </p>
                        </div>

                        <div className="image-section-content">
                            <div className="university-content">
                                <ul>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of São Paulo (USP)</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> State University of Campinas (UNICAMP)</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Federal University of Rio de Janeiro (UFRJ)</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Federal University of São Paulo (UNIFESP)</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Federal University of Minas Gerais (UFMG)</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Federal University of Rio Grande do Sul (UFRGS)</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Federal University of Paraná (UFPR)</li>
                                </ul>
                            </div>
                            <div className="university-image">
                                <img
                                    src="/Images/student-girl.jpg"
                                    alt="Student in Brazil"
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Country-container-section mt-4">
                    <div className="country-list">
                        {countries.slice(0, showAll ? countries.length : 6).map((country, index) => (
                            <div key={index} className="country-item">
                                <span className="country-list-name-section ms-2">{country.name}</span>
                                <img src={country.flag} alt={`${country.name} Flag`} className="country-flag" />
                            </div>
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