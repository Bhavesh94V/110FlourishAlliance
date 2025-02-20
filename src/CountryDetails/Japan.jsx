import React, { useState } from 'react';
import './CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faGraduationCap, faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';

export default function Japan() {
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
          <h3>Welcome to Japan</h3>
          <p>
            Experience Japan’s rich culture, advanced technology, and top-tier education. A global leader in innovation and a land of endless opportunities for students and professionals.
          </p>
          <a href="#contact-container" className="contact-button">
            Get in Touch with Us Today!
          </a>
        </div>
      </div>

      <div className="Country-And-Details-Section">


        <div className="Country-Paragraph-Section">
          <div className="country-section-content">
            <h1>Immigrate to Japan</h1>
            <h3>Helping You Achieve Your Dream Life in Japan</h3>
            <p>
              Japan is a top destination for immigrants, offering a thriving economy, cutting-edge technology, and a rich cultural heritage. Whether you're a skilled professional, student, or entrepreneur, Japan provides incredible opportunities for career growth and personal development.
            </p>
            <p>
              Our expert immigration consultants are here to guide you through every step of the process. From visa applications to settling in, we ensure a smooth and stress-free transition to life in Japan.
            </p>
            <p>
              With its world-class education, advanced industries, and excellent quality of life, Japan is an ideal place for individuals and families looking for new opportunities. Experience its vibrant cities, innovation-driven economy, and unique cultural traditions.
            </p>
            <div className="country-section-image">
              <img src="/Images/JapanSection.jpg" alt="Japan Immigration" className='img-fluid' />
            </div>
          </div>

          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className='ms-2'>Why Choose Japan?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHandsHelping} />
                  </span>
                  <h4>Strong Economy & Innovation Hub</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <h4>World-Class Education & Research</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <h4>Excellent Healthcare & High Quality of Life</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <h4>Rich Cultural Heritage & Technological Advancements</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="universities-section">
            <div className="universities-section-content">
              <h1>Top Universities in Japan</h1>
              <p>
                Japan is home to some of Asia’s most prestigious universities, known for their academic excellence, advanced research, and strong industry ties. With cutting-edge facilities and diverse programs, Japanese universities provide students with world-class education and global career opportunities.
              </p>
              <p>
                From renowned national institutions to top private universities, Japan attracts students from all over the world. With scholarship opportunities, innovative learning environments, and a unique blend of tradition and technology, Japan remains a leading destination for higher education.
              </p>
            </div>

            <div className="image-section-content">
              <div className="university-content">
                <ul>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> The University of Tokyo</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Kyoto University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Osaka University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Tohoku University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Nagoya University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Tokyo Institute of Technology</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Kyushu University</li>
                </ul>
              </div>
              <div className="university-image">
                <img
                  src="/Images/student-girl.jpg"
                  alt="Student in Japan"
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