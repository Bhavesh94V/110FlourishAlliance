import React, { useState } from 'react';
import './CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faGraduationCap, faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';

export default function Belgium() {
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
          <h3>Welcome to Belgium</h3>
          <p>
            Explore Belgium’s rich history, excellent education system, and thriving economy. A gateway to Europe, offering innovation, culture, and new opportunities.
          </p>
          <a href="#contact-container" className="contact-button">
            Get in Touch with Us Today!
          </a>
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
              <img src="/Images/Belgium-Section.jpg" alt="Belgium Immigration" className='img-fluid' />
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
                  src="/Images/student-girl.jpg"
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