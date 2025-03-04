import React, { useState } from 'react';
import './CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faGraduationCap, faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';
import countryImages from './countryImages';
import { Link } from 'react-router-dom';

export default function USA() {
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
          <img src={countryImages.usa1} alt="Canada Background" className="breadcrumb-bg" />
        </div>
        <div className="breadcrumb-text">
          <h3>Welcome to the United States</h3>
          <p>
            Discover world-class education, innovation, and career opportunities in the USA. A hub for students, professionals, and entrepreneurs seeking growth and success.
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
                <li className="text-white">USA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Country-And-Details-Section">


        <div className="Country-Paragraph-Section">
          <div className="country-section-content">
            <h1>Immigrate to the United States</h1>
            <h3>Helping You Achieve Your Dream Life in the USA</h3>
            <p>
              The United States is one of the most sought-after destinations for immigrants, offering a thriving economy, world-renowned universities, and limitless career opportunities. Whether you're a skilled professional, student, or entrepreneur, the USA provides a dynamic environment for growth and success.
            </p>
            <p>
              Our expert immigration consultants are here to assist you at every stage of the process. From visa applications to settling in, we ensure a smooth and hassle-free transition to life in the USA.
            </p>
            <p>
              With its cultural diversity, cutting-edge industries, and high standard of living, the USA is the perfect place to build a bright future. Explore its iconic cities, leading job markets, and outstanding quality of life.
            </p>
            <div className="country-section-image">
              <img src={countryImages.usa2} alt="USA Immigration" className='img-fluid' />
            </div>
          </div>

          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className='ms-2'>Why Choose the United States?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHandsHelping} />
                  </span>
                  <h4>World’s Largest Economy & Career Opportunities</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <h4>Top-Ranked Universities & Research Centers</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <h4>High Standard of Living & Advanced Healthcare</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <h4>Diverse Culture & Global Influence</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="universities-section">
            <div className="universities-section-content">
              <h1>Top Universities in the United States</h1>
              <p>
                The United States is home to some of the most prestigious universities in the world, known for their academic excellence, groundbreaking research, and strong industry connections. With diverse programs and state-of-the-art facilities, U.S. universities provide students with world-class education and career opportunities.
              </p>
              <p>
                From Ivy League institutions to top public and private universities, the U.S. attracts students from all over the globe. With extensive research funding, scholarship opportunities, and innovative learning environments, the U.S. remains a premier destination for higher education.
              </p>
            </div>

            <div className="image-section-content">
              <div className="university-content">
                <ul>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Harvard University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Stanford University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Massachusetts Institute of Technology (MIT)</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> California Institute of Technology (Caltech)</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Chicago</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Columbia University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Yale University</li>
                </ul>
              </div>
              <div className="university-image">
                <img
                  src={countryImages.usa3}
                  alt="Student in the USA"
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
        </div>

        <div className="Country-container-section mt-4">
          <div className="country-list">
            {
              countries.slice(0, showAll ? countries.length : 6).map((country, index) => (
                <Link key={index} to={country.path} className="country-item">
                  <span className="country-list-name-section ms-2">{country.name}</span>
                  <img src={country.flag} alt={`${country.name} Flag`} className="country-flag" />
                </Link>
              ))
            }

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
            <img className="background-pattern" src={countryImages.usa4} alt="Background Pattern" />
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