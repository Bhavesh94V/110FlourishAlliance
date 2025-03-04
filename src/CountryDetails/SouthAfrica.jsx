import React, { useState } from 'react';
import './CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faGraduationCap, faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';
import countryImages from './countryImages';
import { Link } from 'react-router-dom';

export default function SouthAfrica() {
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
          <img src={countryImages.southafrica1} alt="Canada Background" className="breadcrumb-bg" />
        </div>
        <div className="breadcrumb-text">
          <h3>Welcome to South Africa</h3>
          <p>
            Explore South Africa’s rich heritage, dynamic economy, and world-class education. A land of opportunity, innovation, and breathtaking landscapes for students, professionals, and entrepreneurs.
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
                <li className="text-white">South Africa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Country-And-Details-Section">


        <div className="Country-Paragraph-Section">
          <div className="country-section-content">
            <h1>Immigrate to South Africa</h1>
            <h3>Helping You Achieve Your Dream Life in South Africa</h3>
            <p>
              South Africa is a thriving nation with a strong economy, a diverse cultural heritage, and numerous career and educational opportunities. Whether you’re a skilled worker, student, or entrepreneur, South Africa offers a promising future.
            </p>
            <p>
              Our experienced immigration consultants are here to guide you through every step of the process. From visa applications to settling in, we ensure a smooth and stress-free transition to your new life in South Africa.
            </p>
            <p>
              With top-tier universities, a flourishing business environment, and stunning natural landscapes, South Africa is an ideal place for those seeking growth, success, and a high quality of life.
            </p>
            <div className="country-section-image">
              <img src={countryImages.southafrica2} alt="South Africa Immigration" className='img-fluid' />
            </div>
          </div>

          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className='ms-2'>Why Choose South Africa?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHandsHelping} />
                  </span>
                  <h4>Growing Economy & Business Opportunities</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <h4>Top-Ranked Universities & Research Institutions</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <h4>Affordable Living & Quality Healthcare</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <h4>Diverse Culture & Stunning Natural Beauty</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="universities-section">
            <div className="universities-section-content">
              <h1>Top Universities in South Africa</h1>
              <p>
                South Africa is home to some of Africa’s leading universities, renowned for their academic excellence, innovative research, and international collaborations. With a strong educational system, students in South Africa gain access to world-class opportunities.
              </p>
              <p>
                Offering diverse programs across multiple disciplines, South African universities provide high-quality education, scholarship opportunities, and a rich student life. The country remains a preferred destination for students from around the world.
              </p>
            </div>

            <div className="image-section-content">
              <div className="university-content">
                <ul>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Cape Town (UCT)</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of the Witwatersrand (Wits)</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Stellenbosch University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Pretoria (UP)</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of KwaZulu-Natal (UKZN)</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Rhodes University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Johannesburg (UJ)</li>
                </ul>
              </div>
              <div className="university-image">
                <img src={countryImages.southafrica3} alt="Student in South Africa" className='img-fluid' />
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
            <img className="background-pattern" src={countryImages.southafrica4} alt="Background Pattern" />
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