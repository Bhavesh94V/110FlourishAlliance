import React, { useState } from 'react';
import './CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faGraduationCap, faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';

export default function France() {
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
          <h3>Welcome to France</h3>
          <p>
            Experience France’s rich culture, prestigious education, flourishing economy, and unparalleled quality of life. Your pathway to new opportunities in the heart of Europe.
          </p>
          <a href="#contact-container" className="contact-button">
            Get in Touch with Us Today!
          </a>
        </div>
      </div>

      <div className="Country-And-Details-Section">


        <div className="Country-Paragraph-Section">
          <div className="country-section-content">
            <h1>Immigrate to France</h1>
            <h3>Helping You Achieve Your Dream Life in France</h3>
            <p>France is renowned for its world-class education, thriving economy, and exceptional healthcare system. Whether you're a skilled worker, student, or entrepreneur, France offers a wealth of opportunities for those looking to build a new life.</p>
            <p>Our expert immigration consultants are here to guide you through every step of the application process. From visa assistance to settling in, we ensure your transition to France is seamless and stress-free.</p>
            <p>With a rich history, diverse cultural experiences, and strong career prospects, France is an ideal destination for individuals and families seeking a fresh start.</p>
            <div className="country-section-image">
              <img src="/Images/France-Section.jpg" alt="France Immigration" className='img-fluid' />
            </div>
          </div>


          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className='ms-2'>Why Choose France?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHandsHelping} />
                  </span>
                  <h4>Rich Cultural Heritage</h4>
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
                  <h4>Thriving Job Market</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <h4>Beautiful Landscapes & Architecture</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="universities-section">
            <div className="universities-section-content">
              <h1>Top French Universities</h1>
              <p>
                France is home to some of the world's most prestigious universities, known for their academic excellence, research opportunities, and strong industry connections. International students benefit from globally recognized degrees and a dynamic learning environment.
              </p>
              <p>
                French universities offer a diverse range of programs, from arts and humanities to engineering and business. With affordable tuition fees, numerous scholarship options, and pathways to employment, France remains a top choice for higher education.
              </p>
            </div>

            <div className="image-section-content">
              <div className="university-content">
                <ul>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Sorbonne University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> École Normale Supérieure</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Paris</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> HEC Paris</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Sciences Po</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> École Polytechnique</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Lyon</li>
                </ul>
              </div>
              <div className="university-image">
                <img
                  src="/Images/student-girl.jpg"
                  alt="Student in France"
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