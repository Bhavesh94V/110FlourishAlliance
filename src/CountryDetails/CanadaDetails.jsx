import React, { useState } from 'react';
import './CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faGraduationCap, faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';
import countryImages from './countryImages';
import { Link } from 'react-router-dom';

export default function CanadaDetails() {
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
          <img src={countryImages.canada1} alt="Canada Background" className="breadcrumb-bg" />
        </div>
        <div className="breadcrumb-text">
          <h3>Welcome to Canada</h3>
          <p>
            Discover Canada's opportunities, stunning landscapes, thriving economy, and diverse communities. A perfect destination for work, study, and settlement.
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
                <li className="text-white">Canada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Country-And-Details-Section">


        <div className="Country-Paragraph-Section">
          <div className="country-section-content">
            <h1>Immigrate to Canada</h1>
            <h3>Guiding You Through Your Path to a New Life in Canada</h3>
            <p>Canada offers incredible opportunities for those looking to build a new life. As one of the most welcoming countries in the world, Canada’s immigration system allows skilled workers, families, and students to start fresh in a multicultural and thriving society.</p>
            <p>Our expert immigration consultants provide comprehensive support, helping you navigate the complex immigration process. Whether you're seeking to work, study, or reunite with family, we ensure that your application is handled with care and efficiency.</p>
            <p>From the application process to settling into your new home, we’re with you every step of the way, ensuring that your journey to Canada is smooth and stress-free.</p>
            <div className="country-section-image">
              <img src={countryImages.canada3} alt="Canada Immigration" className='img-fluid max-h-[600px]' />
            </div>
          </div>

          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className='ms-2'>Why Choose Canada ?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHandsHelping} />
                  </span>
                  <h4>Welcoming Culture</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <h4>World-Class Education</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <h4>Global Career Opportunities</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <h4>Diverse Community</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="universities-section">
            <div className="universities-section-content">
              <h1>Top Canadian Immigration Services</h1>
              <p>
                Canada offers a wealth of opportunities for individuals looking to start a new life or pursue education in one of the world’s most welcoming countries. The country’s immigration services are renowned for their efficiency and support, making the process smoother for students, professionals, and families. From securing work permits to applying for permanent residency, Canada's immigration system is designed to provide guidance at every step.
              </p>
              <p>
                Whether you're considering studying in Canada or looking to make it your home, there are numerous pathways to explore. With Canada's high quality of life, safe environment, and growing economy, it's no wonder that people from all over the world choose to move here.
              </p>
            </div>

            <div className="image-section-content">
              <div className="university-content">
                <ul>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span>University of Toronto</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of British Columbia (UBC)</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> McGill University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Montreal (Université de Montréal)</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Waterloo</li>
                </ul>
              </div>
              <div className="university-image">
                <img
                  src={countryImages.canada2}
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
            <img className="background-pattern" src={countryImages.canada4} alt="Background Pattern" />
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
