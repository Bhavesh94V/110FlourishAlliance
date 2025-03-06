import React, { useState } from 'react'
import '../assets/styles/Opportunity.css'
import bgImage from '../assets/imgs/AboutArea/bginner.jpg';
import { Link } from 'react-router-dom';
import LogosSection from '../components/LogosSection ';
import Australia from '../assets/imgs/Pages/Country-Images/Country-Images/Australia.png';
import Belgium from '../assets/imgs/Pages/Country-Images/Country-Images/Belgium.png';
import Brazil from '../assets/imgs/Pages/Country-Images/Country-Images/brazil.jpg';
import Canada from '../assets/imgs/Pages/Country-Images/Country-Images/Canada.png';
import Denmark from '../assets/imgs/Pages/Country-Images/Country-Images/Denmark.png';
import France from '../assets/imgs/Pages/Country-Images/Country-Images/France.png';
import Germany from '../assets/imgs/Pages/Country-Images/Country-Images/Germany.png';
import Italy from '../assets/imgs/Pages/Country-Images/Country-Images/Italy.png';
import UK from '../assets/imgs/Pages/Country-Images/Country-Images/UK.jpg';
import USA from '../assets/imgs/Pages/Country-Images/Country-Images/usa.jpg';
import Japan from '../assets/imgs/Pages/Country-Images/Country-Images/Japan.jpg';
import NewZealand from '../assets/imgs/Pages/Country-Images/Country-Images/NewZealand.jpg';
import SouthAfrica from '../assets/imgs/Pages/Country-Images/Country-Images/SouthAfrica.jpg';
import chooseimgbg from '../ServicesDetails/Service-MiniSlider-Imgs/chooseimgbg.png'
import { FaUserCheck, FaFileAlt, FaHandHoldingUsd, FaClipboardCheck, FaChartLine, FaHeadset } from "react-icons/fa";
import EligibilityForm from './EligibilityForm';
import PagesImage from '../assets/imgs/Pages/PagesImage';



export default function CareersPage() {

  const countryImages = {
    Canada: Canada,
    Australia: Australia,
    SouthAfrica: SouthAfrica,
    Belgium: Belgium,
    Denmark: Denmark,
    UK: UK,
    USA: USA,
    France: France,
    Germany: Germany,
    Japan: Japan,
    Brazil: Brazil,
    NewZealand: NewZealand,
    Italy: Italy,
  };

  const locations = [
    { name: "All", countries: Object.keys(countryImages) },
    { name: "North America", countries: ["Canada", "USA"] },
    { name: "Europe", countries: ["France", "Germany", "Belgium", "Denmark", "UK"] },
    { name: "Asia", countries: ["Japan"] },
    { name: "South America", countries: ["Brazil"] },
    { name: "Oceania", countries: ["Australia", "NewZealand"] },
    { name: "Africa", countries: ["SouthAfrica"] },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);



  return (
    <div className="CareersPage md:mt-5 pt-5 " style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="about-section-container mt-5">


        <div className="bg-breadcrumb flex flex-col">
          <div className="breadcrumb-image ">

            <div className="overlay-gradient"></div>

            <img src={PagesImage.oppourtinity} alt="Breadcrumb Background" className="breadcrumb-bg" />

          </div>
          <div className="breadcrumb-text">
            <h3>Welcome to Our Journey</h3>
            <p>
              Discover a world of possibilities with our dedicated team. <br />
              Your dreams, our mission—together we create success.
            </p>
            <Link to="/ContactPage" className="contact-button bg-[#B21E24] p-2 px-3 rounded-full">
              Get in Touch with Us Today!
            </Link>
          </div>
          <div className="z-50">
            <div className="text-center pt-3" style={{ maxWidth: '900px' }}>
              <ul className="d-flex justify-content-center gap-2 font-bold text-white mb-0 wow fadeInDown" data-wow-delay="0.3s" >
                <li className="item">
                  <Link to="/">Home</Link> <span className=''>/</span>
                </li>
                <li className="text-danger">Opportunity</li>
              </ul>
            </div>
          </div>
        </div>



        <div className="container-fluid  bg-white"
          style={{
            backgroundImage: `url(${chooseimgbg})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="container max-w-[1300px]">
            <section class="about-section pt-5">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-6 image-container">
                    <div class="main-image max-w-[500px]">
                      <img src={PagesImage.cardsPassport} className='rounded-b-full border-5 max-h-[600px] w-full border-danger' alt="Main Image" />
                    </div>
                    <div class="overlay-image">
                      <img src={PagesImage.visago} className='rounded-t-full border-5' alt="Small Image" />
                    </div>
                    <div class="visa-success">
                      <div class="visa-circle">100%<br />Proven Visa Success Rate</div>
                    </div>
                  </div>

                  <div class="col-lg-6 content-column">
                    <span class="sub-title">🛫 ABOUT US</span>
                    <h2 className='mb-4'>Your Trusted Partner for Immigration & Visa Success</h2>
                    <p>With over two decades of experience, we simplify your journey to international opportunities. Our expert team ensures a smooth, hassle-free immigration process.</p>

                    <ul class="features-list my-4">
                      <li>✔️ Personalized consultation tailored to your needs.</li>
                      <li>✔️ Expert legal guidance for a stress-free process.</li>
                      <li>✔️ 25+ years of successful visa approvals worldwide.</li>
                    </ul>

                    <a href="#" class="theme-btn">Explore More</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>



        <div className='my-5'>
          <LogosSection></LogosSection>
        </div>


        <div className="OpportunitySection my-5">
          <div className="container">
            <div className="content-section">
              <div className="main-content">
                <h1 className='font-bold text-danger'>Discover Your Perfect Destination <br /> <span>For a Better Future</span></h1>
              </div>
              <div className="para-content">
                <p>Your ideal destination awaits. We’re here to guide you to the right choice for a brighter future.</p>
              </div>
            </div>

            {/* Location Buttons */}
            <div className="buttons">
              {
                locations.map((location, index) => (
                  <div key={location.name} className="button-group">
                    <button
                      className={`location-button ${selectedLocation.name === location.name ? "active" : ""}`}
                      onClick={() => setSelectedLocation(location)}
                    >
                      {location.name}
                    </button>
                    {index !== locations.length - 1 && <span className="separator">|</span>}
                  </div>
                ))
              }
            </div>

            {/* Country Grid */}
            {
              selectedLocation && (
                <div className="country-grid fade-in">
                  {
                    selectedLocation.countries.map((country, index) => (
                      <div className="country-card" key={index}>
                        <div className="country-content">
                          <img
                            src={countryImages[country] || "/Images/default.jpg"}
                            alt={country}
                            className="country-flag"
                          />
                          <span className="country-name">
                            <Link to={`/country/${country}`}>{country}</Link>
                          </span>
                        </div>
                      </div>
                    ))
                  }
                </div>
              )
            }
          </div>
        </div>

      </div>

      <EligibilityForm></EligibilityForm>

    </div >
  )
}

