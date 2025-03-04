import React, { useState } from 'react';
import './CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faGraduationCap, faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';
import countryImages from './countryImages';
import { Link } from 'react-router-dom';

export default function Belgium() {
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
          <img src={countryImages.belgium1} alt="Canada Background" className="breadcrumb-bg" />
        </div>
        <div className="breadcrumb-text">
          <h3>Welcome to Belgium</h3>
          <p>
            Explore Belgium’s rich history, excellent education system, and thriving economy. A gateway to Europe, offering innovation, culture, and new opportunities.
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
                <li className="text-white">Belgium</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Country-And-Details-Section">


        <div className="Country-Paragraph-Section">
          <div className="country-section-content">
            <h1>Immigrate to Belgium</h1>
            <h3>Helping You Achieve Your Dream Life in Belgium</h3>
            <p>
              Belgium is an excellent destination for immigrants, offering a stable economy, world-class education, and a high standard of living. Whether you're a skilled professional, student, or entrepreneur, Belgium provides numerous opportunities to build a successful future.
            </p>
            <p>
              Our expert immigration consultants are here to assist you at every step of the application process. From visa support to settling in, we ensure your transition to Belgium is smooth and hassle-free.
            </p>
            <p>
              With its rich history, multilingual culture, and strategic location in the heart of Europe, Belgium is the perfect place for individuals and families seeking new opportunities. Explore its charming cities, diverse job market, and excellent quality of life.
            </p>
            <div className="country-section-image">
              <img src={countryImages.belgium2} alt="Belgium Immigration" className='img-fluid' />
            </div>
          </div>

          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className='ms-2'>Why Choose Belgium?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHandsHelping} />
                  </span>
                  <h4>Stable Economy & Career Opportunities</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <h4>Renowned Education System</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <h4>High Standard of Living & Healthcare</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <h4>Multicultural Society & Strategic Location</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="universities-section">
            <div className="universities-section-content">
              <h1>Top Belgian Universities</h1>
              <p>
                Belgium is home to some of Europe's most prestigious universities, known for their strong academic programs, world-class research, and international student-friendly environment. Students benefit from high-quality education, multilingual opportunities, and strong connections to global industries.
              </p>
              <p>
                Belgian universities offer a wide range of programs, from business and engineering to arts and social sciences. With affordable tuition, excellent scholarship opportunities, and a strong emphasis on research and innovation, Belgium is a top choice for higher education in Europe.
              </p>
            </div>

            <div className="image-section-content">
              <div className="university-content">
                <ul>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> KU Leuven</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Ghent University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Université Catholique de Louvain (UCLouvain)</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Vrije Universiteit Brussel (VUB)</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Antwerp</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Hasselt University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Université Libre de Bruxelles (ULB)</li>
                </ul>
              </div>
              <div className="university-image">
                <img
                  src={countryImages.belgium3}
                  alt="Student in Belgium"
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
            <img className="background-pattern" src={countryImages.belgium4} alt="Background Pattern" />
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