import React, { useState } from 'react';
import './CountryDetails.css';
import { Plus, Minus, Download } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faGraduationCap, faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';
import countryImages from './countryImages';
import { Link } from 'react-router-dom';

export default function Germany() {
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
          <img src="Images/Canada-Background.jpg" alt="Canada Background" className="breadcrumb-bg" />
        </div>
        <div className="breadcrumb-text">
          <h3>Welcome to Germany</h3>
          <p>
            Discover Germany’s strong economy, top-tier education, and vibrant culture. A land of innovation and opportunity in the heart of Europe.
          </p>
          <a href="#contact-container" className="contact-button">
            Get in Touch with Us Today!
          </a>
        </div>

      </div>

      <div className="Country-And-Details-Section">


        <div className="Country-Paragraph-Section">
          <div className="country-section-content">
            <h1>Immigrate to Germany</h1>
            <h3>Helping You Achieve Your Dream Life in Germany</h3>
            <p>
              Germany is one of the most sought-after destinations for immigrants, offering a strong economy, world-class education, and an excellent healthcare system. Whether you're a skilled worker, student, or entrepreneur, Germany provides countless opportunities to build a successful future.
            </p>
            <p>
              Our expert immigration consultants are here to guide you through every step of the application process. From visa assistance to settling in, we ensure your transition to Germany is seamless and stress-free.
            </p>
            <p>
              With its rich history, vibrant culture, and strong career prospects, Germany is an ideal destination for individuals and families seeking a fresh start. Explore its dynamic cities, breathtaking landscapes, and unparalleled quality of life.
            </p>
            <div className="country-section-image">
              <img src="/Images/Germany-Section.jpg" alt="Germany Immigration" className='img-fluid' />
            </div>
          </div>



          <div className="country-section-whyChooseUs mt-5 text-start">
            <h1 className='ms-2'>Why Choose Germany?</h1>
            <div className="why-choose-us mt-5">
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faHandsHelping} />
                  </span>
                  <h4>Strong Economy & Job Opportunities</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <h4>Top-Quality Education System</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <h4>Excellent Healthcare & Infrastructure</h4>
                </div>
              </div>
              <div className="feature">
                <div className="content">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <h4>Rich History & Cultural Diversity</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="universities-section">
            <div className="universities-section-content">
              <h1>Top German Universities</h1>
              <p>
                Germany is home to some of the world's most prestigious universities, known for their academic excellence, cutting-edge research, and strong ties to industry. International students benefit from high-quality education, globally recognized degrees, and a thriving innovation-driven environment.
              </p>
              <p>
                German universities offer a diverse range of programs, from engineering and technology to business and humanities. With low or no tuition fees, numerous scholarship options, and excellent career prospects, Germany remains one of the top destinations for higher education.
              </p>
            </div>

            <div className="image-section-content">
              <div className="university-content">
                <ul>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Ludwig Maximilian University of Munich</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Heidelberg University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Technical University of Munich</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> Humboldt University of Berlin</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> RWTH Aachen University</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Freiburg</li>
                  <li><span className="star"><i class="fa-solid fa-arrow-right"></i></span> University of Stuttgart</li>
                </ul>
              </div>
              <div className="university-image">
                <img
                  src="/Images/student-girl.jpg"
                  alt="Student in Germany"
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