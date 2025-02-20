import React, { useState } from 'react'
import '../assets/styles/Opportunity.css'
import bgImage from '../assets/imgs/AboutArea/bginner.jpg';
import { Link, Links } from 'react-router-dom';
import LogosSection from '../components/LogosSection ';
import Argentina from '../assets/imgs/Pages/Country-Images/Country-Images/Argentina.jpg';
import Australia from '../assets/imgs/Pages/Country-Images/Country-Images/Australia.png';
import Belgium from '../assets/imgs/Pages/Country-Images/Country-Images/Belgium.png';
import Brazil from '../assets/imgs/Pages/Country-Images/Country-Images/brazil.jpg';
import Canada from '../assets/imgs/Pages/Country-Images/Country-Images/Canada.png';
import Denmark from '../assets/imgs/Pages/Country-Images/Country-Images/Denmark.png';
import France from '../assets/imgs/Pages/Country-Images/Country-Images/France.png';
import Germany from '../assets/imgs/Pages/Country-Images/Country-Images/Germany.png';
import Greece from '../assets/imgs/Pages/Country-Images/Country-Images/Greece.png';
import Hungary from '../assets/imgs/Pages/Country-Images/Country-Images/Hungary.png';
import Iceland from '../assets/imgs/Pages/Country-Images/Country-Images/Iceland.png';
import India from '../assets/imgs/Pages/Country-Images/Country-Images/india.jpg';
import Ireland from '../assets/imgs/Pages/Country-Images/Country-Images/Ireland.png';
import Italy from '../assets/imgs/Pages/Country-Images/Country-Images/Italy.png';
import Luxembourg from '../assets/imgs/Pages/Country-Images/Country-Images/Luxembourg.png';
import Peru from '../assets/imgs/Pages/Country-Images/Country-Images/Peru.png';
import Colombia from '../assets/imgs/Pages/Country-Images/Country-Images/Colombia.png';
import UK from '../assets/imgs/Pages/Country-Images/Country-Images/UK.jpg';
import Uruguay from '../assets/imgs/Pages/Country-Images/Country-Images/Uruguay.png';
import Ecuador from '../assets/imgs/Pages/Country-Images/Country-Images/Ecuador.png';
import USA from '../assets/imgs/Pages/Country-Images/Country-Images/usa.jpg';
import Japan from '../assets/imgs/Pages/Country-Images/Country-Images/Japan.jpg';
// import UK from '../assets/imgs/Pages/Country-Images/Country-Images/UK.jpg';
import NewZealand from '../assets/imgs/Pages/Country-Images/Country-Images/NewZealand.jpg';
import SouthAfrica from '../assets/imgs/Pages/Country-Images/Country-Images/SouthAfrica.jpg';
import chooseimgbg from '../ServicesDetails/Service-MiniSlider-Imgs/chooseimgbg.png'
import { FaUserCheck, FaFileAlt, FaHandHoldingUsd, FaClipboardCheck, FaChartLine, FaHeadset } from "react-icons/fa";
import Footer from '../components/Footer';
import EligibilityForm from './EligibilityForm';



export default function CareersPage() {

  const sidebarDetails = [
    { title: "Check Your Eligibility", icon: <FaUserCheck className="text-blue-600 text-3xl" />, description: "Find out if you qualify for visa programs.", link: "#" },
    { title: "Required Documents", icon: <FaFileAlt className="text-green-600 text-3xl" />, description: "Know which documents you need for eligibility.", link: "#" },
    { title: "Financial Requirements", icon: <FaHandHoldingUsd className="text-yellow-600 text-3xl" />, description: "Understand the financial aspects of immigration.", link: "#" },
    { title: "Processing Time", icon: <FaClipboardCheck className="text-purple-600 text-3xl" />, description: "Estimated timelines for different visa applications.", link: "#" },
    { title: "Success Stories", icon: <FaChartLine className="text-orange-600 text-3xl" />, description: "Read about people who successfully immigrated.", link: "#" },
    { title: "Talk to an Expert", icon: <FaHeadset className="text-red-600 text-3xl" />, description: "Get a free consultation with our experts.", link: "#" },
  ];



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

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    contact: "",
    email: "",
    country: "",
    enquiry: "",
    education: "",
    dob: "",
    sex: "",
    cv: null,
  });

  const countries = ["Canada", "Australia", "USA", "UK", "Germany", "Paris", "New Zealand"];
  const enquiries = ["Study Visa", "Work Visa", "Business Visa", "PR", "Tourist Visa", "Permanent Residency"];
  const educations = ["High School", "Diploma", "Bachelor's", "Master's"];

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Thank you! We will get back to you shortly.");
  };


  return (
    <div className="CareersPage md:mt-5 pt-5 " style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="about-section-container mt-5">


        <div className="bg-breadcrumb flex flex-col">
          <div className="breadcrumb-image">

            <div className="overlay-gradient"></div>

            <img src='https://img.freepik.com/free-photo/career-employment-job-work-concept_53876-123876.jpg?t=st=1739191089~exp=1739194689~hmac=b6e0ede2df067e7a614005b1d6811c9290644885505ea0101a5a2a93b1641b50&w=1800' alt="Breadcrumb Background" className="breadcrumb-bg" />

          </div>
          <div className="breadcrumb-text">
            <h3>Welcome to Our Journey</h3>
            <p>
              Discover a world of possibilities with our dedicated team. <br />
              Your dreams, our mission—together we create success.
            </p>
            <Link to="/ContactPage" className="contact-button">
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
                    <div class="main-image">
                      <img src="https://html.kodesolution.com/2024/visago-php/images/resource/about1-1.jpg" className='rounded-b-full border-5 border-danger' alt="Main Image" />
                    </div>
                    <div class="overlay-image">
                      <img src="https://img.freepik.com/free-photo/green-cards-passports-flat-lay_23-2149828138.jpg?t=st=1739272243~exp=1739275843~hmac=a8d0c263d752fb2c346854f0b82fb3e11a3aeede66d1d473b257d79d36616017&w=740" className='rounded-t-full border-5' alt="Small Image" />
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



      {/* <div className='flex flex-col lg:flex-row bg-white lg:px-5 pb-5'>




        <div className="form-container mt-4">
          <h2 className="form-title text-danger text-start">Eligibility Criteria :</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name : </label>
                <input type="text" name="firstName" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Middle Name : </label>
                <input type="text" name="middleName" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Last Name : </label>
                <input type="text" name="lastName" onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Contact No : </label>
                <input type="text" name="contact" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email ID : </label>
                <input type="email" name="email" onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Country : </label>
                <select name="country" onChange={handleChange} required>
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Enquiry Type : </label>
                <select name="enquiry" onChange={handleChange} required>
                  <option value="">Select Enquiry Type</option>
                  {enquiries.map((e) => (
                    <option key={e} value={e}>{e}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Education : </label>
                <select name="education" onChange={handleChange} required>
                  <option value="">Select Education</option>
                  {educations.map((edu) => (
                    <option key={edu} value={edu}>{edu}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Date of Birth : </label>
                <input type="date" name="dob" onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Sex : </label>
              <div className="radio-group">
                <label><input type="radio" name="sex" value="Male" onChange={handleChange} required /> Male</label>
                <label><input type="radio" name="sex" value="Female" onChange={handleChange} required /> Female</label>
                <label><input type="radio" name="sex" value="Other" onChange={handleChange} required /> Other</label>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Upload CV : </label>
              <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleChange} required />
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>





        <div className="relative w-full p-6 flex bg-white flex-col items-center" style={{
          backgroundImage: `url(${chooseimgbg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '140%',
        }}>


          <div className="p-6 max-w-2xl mx-auto text-gray-700 rounded-lg">
            <h2 className="text-3xl font-bold text-danger">Quick Contact</h2>
            <p className="mt-2 text-md text-gray-600">
              We are pleased to speak with you to discuss your qualifications and options under various immigration programs. Feel free to contact us with any questions.
            </p>



            <div className="p-6 w-full rounded-lg mx-auto">
              <h2 className="text-2xl font-bold text-[#d71c3b] text-center mt-3 mb-5">Immigration Assistance</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  sidebarDetails.map((item, index) => (
                    <div key={index} className="py-4 w-fit bg-white shadow-md rounded-lg flex flex-col items-center gap-2 text-center transition-transform transform hover:scale-105">
                      <div className="mb-3">{item.icon}</div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>

                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

      </div> */}

      <EligibilityForm></EligibilityForm>

      <Footer></Footer>
    </div >
  )
}

