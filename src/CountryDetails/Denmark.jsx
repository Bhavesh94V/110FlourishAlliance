import React, { useState } from 'react';
import './CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faGraduationCap, faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';

export default function Denmark() {
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
          <h3>Welcome to Denmark</h3>
          <p>
            Experience Denmark’s high quality of life, world-class education, and thriving economy. A land of innovation, sustainability, and endless opportunities in Northern Europe.
          </p>
          <a href="#contact-container" className="contact-button">
            Get in Touch with Us Today!
          </a>
        </div>
      </div>

      <div className="Country-And-Details-Section">


        <div className="Country-Paragraph-Section">
          <div className="country-section-content">
            <h1>Immigrate to Denmark</h1>
            <h3>Helping You Achieve Your Dream Life in Denmark</h3>
            <p>
              Denmark is one of the best destinations for immigrants, known for its strong economy, excellent work-life balance, and top-tier education system. Whether you are a skilled worker, student, or entrepreneur, Denmark offers a wealth of opportunities for a prosperous future.
            </p>
            <p>
              Our expert immigration consultants are here to guide you through every step of the application process. From visa assistance to settling in, we ensure a smooth and hassle-free transition to Denmark.
            </p>
            <p>
              With its progressive society, high living standards, and a commitment to sustainability, Denmark is the ideal destination for individuals and families seeking new opportunities. Discover its welcoming communities, career prospects, and exceptional quality of life.
            </p>
            <div className="country-section-image">
              <img src="/Images/Denmark-Section.jpg" alt="Denmark Immigration" className='img-fluid' />
            </div>
          </div>

          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className='ms-2'>Why Choose Denmark?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHandsHelping} />
                  </span>
                  <h4>Strong Economy & Job Market</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <h4>World-Class Education System</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <h4>Excellent Work-Life Balance</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <h4>Green Living & Sustainability</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="universities-section">
            <div className="universities-section-content">
              <h1>Top Danish Universities</h1>
              <p>
                Denmark is home to some of the world's leading universities, known for their innovative teaching methods, strong industry collaborations, and emphasis on research and sustainability. Students benefit from a high-quality education system, modern facilities, and a welcoming international atmosphere.
              </p>
              <p>
                Danish universities offer diverse programs in technology, business, health sciences, and the arts. With a strong focus on creativity, problem-solving, and real-world applications, Denmark is an ideal destination for students looking to build a global career.
              </p>
            </div>

            <div className="image-section-content">
              <div className="university-content">
                <ul>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Copenhagen</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Aarhus University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Technical University of Denmark (DTU)</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Copenhagen Business School (CBS)</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Aalborg University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Southern Denmark</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Roskilde University</li>
                </ul>
              </div>
              <div className="university-image">
                <img
                  src="/Images/student-girl.jpg"
                  alt="Student in Denmark"
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