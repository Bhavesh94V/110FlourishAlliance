import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Pages/AboutPage.css';
import consultancyImg from '../assets/imgs/Pages/Consultancy.jpg';
import consultancyImg2 from '../assets/imgs/Pages/Consultancy2.jpg';
import teamMember1 from '../assets/imgs/Pages/TeamMember1.jpg';
import teamMember2 from '../assets/imgs/Pages/TeamMember2.jpg';
import teamMember3 from '../assets/imgs/Pages/TeamMember3.jpg';
import teamMember4 from '../assets/imgs/Pages/TeamMember4.jpg';
import Footer from '../components/Footer';
import chooseimgbg from '../ServicesDetails/Service-MiniSlider-Imgs/chooseimgbg.png'
import WOW from 'wowjs';
import 'animate.css';
import countryImages from '../CountryDetails/countryImages';

export default function AboutPage() {

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  const teamMembers = [
    {
      name: 'Aryan Mehta',
      role: 'Immigration Specialist',
      image: teamMember1,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      name: 'Kiara Sharma',
      role: 'Visa Consultant',
      image: teamMember2,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      name: 'Ananya Verma',
      role: 'Documentation Expert',
      image: teamMember3,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      name: 'Rohan Kapoor',
      role: 'Client Relationship Manager',
      image: teamMember4,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
  ];


  const faqData1 = [
    {
      question: "How can I apply for a visa?",
      answer: "You need to submit the required documents and fill out the application form on our website."
    },
    {
      question: "How long does the visa process take?",
      answer: "Processing times vary based on the visa type and country, typically ranging from a few weeks to months."
    },
    {
      question: "Do you assist with work permits?",
      answer: "Yes, we provide complete guidance and support for obtaining work permits in various countries."
    },
    {
      question: "Will my application be approved?",
      answer: "Approval depends on meeting the eligibility criteria and document verification by the immigration authorities."
    }
  ];

  const faqData2 = [
    {
      question: "Do you offer post-visa services?",
      answer: "Yes, we assist with accommodation, job search, and settlement guidance after visa approval."
    },
    {
      question: "What if my visa gets rejected?",
      answer: "We analyze the rejection reasons and help you reapply with a stronger case."
    },
    {
      question: "Can you help with student visas?",
      answer: "Yes, we provide consultancy for student visas, including university selection and application assistance."
    },
    {
      question: "Are there low-cost visa options?",
      answer: "Yes, we offer budget-friendly visa consultancy plans to suit your financial needs."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);

  const toggleFAQ = (index, section) => {
    if (section === 1) {
      setOpenIndex(openIndex === index ? null : index);
    } else {
      setOpenIndex2(openIndex2 === index ? null : index);
    }
  };


  const images = [
    { src: countryImages.australia3, alt: 'Australia', text: 'Australia is known for its top universities, beautiful landscapes, and student-friendly environment.' },
    { src: countryImages.usa3, alt: 'United States', text: 'The United States offers world-class education, diverse culture, and excellent career opportunities for students.' },
    { src: countryImages.southafrica3, alt: 'South Africa', text: 'South Africa is known for its rich culture, stunning scenery, and affordable education options.' },
    { src: countryImages.brazil3, alt: 'Brazil', text: 'Brazil is famous for its vibrant culture, strong academic institutions, and welcoming atmosphere for international students.' },
    { src: countryImages.france3, alt: 'France', text: 'France is a top destination for students, offering high-quality education, historic universities, and cultural richness.' },
    { src: countryImages.denmark2, alt: 'Denmark', text: 'Denmark provides a high standard of education, innovative teaching methods, and a great quality of life.' },
    { src: countryImages.italy3, alt: 'Italy', text: 'Italy is home to prestigious universities, historical landmarks, and excellent study-abroad opportunities.' },
    { src: countryImages.uk3, alt: 'United Kingdom', text: 'The UK is a global leader in education, known for its prestigious universities and research opportunities.' },
  ];

  return (
    <div className="AboutPageMain md:mt-5 pt-5 bg-transparent">
      <div className="about-section-container mt-5">

        <div className="CareersPage">
          <div className="bg-breadcrumb flex flex-col">
            <div className="breadcrumb-image">

              <div className="overlay-gradient"></div>

              <img src={consultancyImg} alt="Breadcrumb Background" className="breadcrumb-bg" />

            </div>
            <div className="breadcrumb-text animate__animated animate__fadeInDown">
              <h3>Welcome to Our Journey</h3>
              <p>
                Discover a world of possibilities with our dedicated team. <br />
                Your dreams, our mission—together we create success.
              </p>
              <Link to="/ContactPage" className="contact-button bg-[#B21E24] p-2 px-3 rounded-full">
                Get in Touch with Us Today
              </Link>
            </div>
            <div className="z-50 animate__animated animate__fadeInDown">
              <div className="text-center pt-3" style={{ maxWidth: '900px' }}>
                <ul className="d-flex justify-content-center gap-2 font-bold text-white mb-0 wow fadeInDown" data-wow-delay="0.3s" >
                  <li className="item">
                    <Link to="/">Home</Link> <span className=''>/</span>
                  </li>
                  <li className="text-danger ">About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="about-content">
          <div className="image-section">
            <img src={consultancyImg2} alt="Main Image" className="main-image" />
          </div>
          <div className="content-section">
            <h3>About Flourish Alliance</h3>
            <p>
              At Flourish Alliance Immigration, we believe in empowering dreams and bridging boundaries. Our expert team
              is dedicated to providing comprehensive immigration solutions tailored to your needs.
            </p>
            <div className="icons">
              <div className="icon-box animate__animated animate__zoomIn">
                <i className="fa fa-graduation-cap"></i>
                <h4>Study Abroad</h4>
                <p>Helping you with your study visa process for a bright future.</p>
              </div>
              <div className="icon-box animate__animated animate__zoomIn">
                <i className="fa fa-briefcase"></i>
                <h4>Career Opportunities</h4>
                <p>Providing career-related immigration solutions globally.</p>
              </div>
              <div className="icon-box animate__animated animate__zoomIn">
                <i className="fa fa-home"></i>
                <h4>Settlement Services</h4>
                <p>Guiding you through the process of settling in a new country.</p>
              </div>
            </div>
            <p>Trust us to make your journey seamless and successful. Together, let's make your aspirations a reality.</p>
            <div className="luxury-buttons">
              <Link to="/BookNowPage" className="btn-primary animate__animated animate__zoomIn">
                Book a Consultation
              </Link>
              <Link to="/ServicePage" className="btn-secondary animate__animated animate__zoomIn">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Country Section */}
        <div className="country-section">
          <div className="text-center mt-4  animate__animated animate__fadeInDown">
            <h1 className="slider-title ">Countries We Offer</h1>
            <p className="slider-subtitle">
              Explore the world with us! Discover iconic destinations, rich cultures, and breathtaking landscapes from
              around the globe.
            </p>
          </div>
          <div className="slider-container">
            <div className="slider">
              {images.map((image, index) => (
                <div className="slider-item" key={index}>
                  <img src={image.src} alt={image.alt} className="slider-image" />
                  <div className="hover-text">{image.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-container">
          <div className="section-header  animate__animated animate__fadeInDown">
            <h6 className="section-title">Meet Our Team</h6>
            <h1 className="section-subtitle">Our Skilled Professionals</h1>
            <div className="divider"></div>
          </div>
          <div className="team-row">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <div className="image-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="social-icons">
                  <a href={member.social.facebook}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={member.social.twitter}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={member.social.instagram}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="member-info">
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="py-10 bg-white"
        style={{
          backgroundImage: `url(${chooseimgbg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'inherit',
          backgroundPositionX: "100%",
          backgroundPositionY: "10%",
          animation: "moveBackground 2s infinite alternate ease-in-out",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${chooseimgbg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'inherit',
            backgroundPositionX: "-25%",
            backgroundPositionY: "100%",
            animation: "moveBackground2 2s infinite alternate ease-in-out",
          }}
        >
          <div className="max-w-4xl mx-auto text-center  animate__animated animate__fadeInDown">
            <button
              className="border-2 border-[#B21E24] hover:border-white hover:bg-[#B21E24]  text-[#B21E24]  hover:text-white font-semibold px-4 py-1 rounded-full mb-3">
              Popular FAQs
            </button>
            <h1 className="text-3xl font-bold text-[#B21E24] mb-5">Frequently Asked Questions</h1>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-3">
            <div>
              {
                faqData1.map((faq, index) => (
                  <div key={index} className="mb-4 border border-gray-300 rounded-lg animate__animated animate__zoomIn">
                    {/* <button
                      className="w-full text-left p-4 bg-[#B21E24] text-white font-semibold rounded-t-lg flex justify-between items-center"
                      onClick={() => toggleFAQ(index, 1)}
                    > */}
                    <button
                      className="w-full text-left p-4 bg-[#B21E24] text-white font-semibold rounded-t-lg flex justify-between items-center transition-all duration-300 ease-linear
  hover:bg-gradient-to-r hover:from-[#FF370F] hover:to-[#d64130]"
                      onClick={() => toggleFAQ(index, 1)}
                    >
                      {faq.question}
                      <span>{openIndex === index ? "−" : "+"}</span>
                    </button>
                    {openIndex === index && (
                      <div className="p-4 bg-white rounded-b-lg text-gray-700">{faq.answer}</div>
                    )}
                  </div>
                ))
              }
            </div>
            <div>
              {
                faqData2.map((faq, index) => (
                  <div key={index} className="mb-4 border border-gray-300 rounded-lg animate__animated animate__zoomIn">
                    <button
                      className="w-full text-left p-4 bg-[#B21E24] text-white font-semibold rounded-t-lg flex justify-between items-center transition-all duration-300 ease-linear
  hover:bg-gradient-to-r hover:from-[#FF370F] hover:to-[#d64130]"
                      onClick={() => toggleFAQ(index, 2)}
                    >
                      {faq.question}
                      <span>{openIndex2 === index ? "−" : "+"}</span>
                    </button>
                    {openIndex2 === index && (
                      <div className="p-4 bg-white rounded-b-lg text-gray-700">{faq.answer}</div>
                    )}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
