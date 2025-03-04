import React, { useState } from 'react';
import './CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faGraduationCap, faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';
import countryImages from './countryImages';
import { Link } from 'react-router-dom';

export default function UK() {
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
                    <img src={countryImages.uk1} alt="Canada Background" className="breadcrumb-bg" />
                </div>
                <div className="breadcrumb-text">
                    <h3>Welcome to the United Kingdom</h3>
                    <p>
                        Discover the United Kingdom’s world-class education, strong economy, and rich cultural heritage. A global hub for innovation, business, and academic excellence, offering endless opportunities.
                    </p>
                   <Link to="/ContactPage" className="contact-button bg-[#B21E24] p-2 px-3 rounded-full">
                               Get in Touch with Us Today
                             </Link>
                   
                             <div className="z-50 animate__animated animate__fadeInDown">
                               <div className="text-center pt-3" style={{ maxWidth: '900px' }}>
                                 <ul className="d-flex justify-content-center gap-2 font-semibold text-white mb-0 wow fadeInDown" data-wow-delay="0.3s" >
                                   <li className="item hover:scale-125 transition-all">
                                     <Link to="/CareersPage">Opportunity</Link> <span className=''>/</span>
                                   </li>
                                   <li className="text-white">Uk</li>
                                 </ul>
                               </div>
                             </div>
                </div>
            </div>

            <div className="Country-And-Details-Section">


                <div className="Country-Paragraph-Section">
                    <div className="country-section-content">
                        <h1>Immigrate to the United Kingdom</h1>
                        <h3>Helping You Achieve Your Dream Life in the UK</h3>
                        <p>
                            The United Kingdom is a top destination for immigrants, offering a strong economy, prestigious universities, and a high quality of life. Whether you're a skilled worker, student, or entrepreneur, the UK provides numerous opportunities for career growth and personal success.
                        </p>
                        <p>
                            Our expert immigration consultants are here to guide you through every step of the process. From visa applications to settling in, we ensure your transition to the UK is smooth and stress-free.
                        </p>
                        <p>
                            With its rich cultural heritage, diverse job market, and global connectivity, the UK is an ideal place for individuals and families looking for a fresh start. Experience its vibrant cities, historic landmarks, and excellent public services.
                        </p>
                        <div className="country-section-image">
                            <img src={countryImages.uk2} alt="UK Immigration" className='img-fluid' />
                        </div>
                    </div>

                    <div className="country-section-whyChooseUs mt-5 text-start">
                        <h1 className='ms-2'>Why Choose the United Kingdom?</h1>
                        <div className="why-choose-us mt-5">
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faHandsHelping} />
                                    </span>
                                    <h4>Strong Economy & Global Job Market</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </span>
                                    <h4>World-Renowned Education System</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </span>
                                    <h4>Excellent Healthcare & Quality of Life</h4>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="content">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </span>
                                    <h4>Rich History & Multicultural Society</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="universities-section">
                        <div className="universities-section-content">
                            <h1>Top Universities in the United Kingdom</h1>
                            <p>
                                The United Kingdom is home to some of the world’s most prestigious universities, renowned for their academic excellence, cutting-edge research, and global recognition. UK universities provide students with top-tier education, innovative learning environments, and strong industry connections.
                            </p>
                            <p>
                                With a diverse range of programs across multiple disciplines, students in the UK benefit from world-class faculty, scholarship opportunities, and a thriving student life. The UK remains a leading destination for international students seeking high-quality education and career prospects.
                            </p>
                        </div>

                        <div className="image-section-content">
                            <div className="university-content">
                                <ul>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Oxford</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Cambridge</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Imperial College London</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> London School of Economics and Political Science (LSE)</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University College London (UCL)</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Edinburgh</li>
                                    <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> King's College London</li>
                                </ul>
                            </div>
                            <div className="university-image">
                                <img
                                    src={countryImages.uk3}
                                    alt="Student in the UK"
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
                        <img className="background-pattern" src={countryImages.uk4} alt="Background Pattern" />
                        <div className="card-content">

                            <h3>Your Approval, Just One Click Away!</h3>
                            <Link to='/ContactPage' className="get-in-touch-btn">Get in Touch</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}