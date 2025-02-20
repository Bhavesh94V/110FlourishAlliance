import React, { useEffect, useState } from 'react';
import ImmigrationService from '../assets/imgs/Pages/ImmigrationService.jpg';
import '../assets/styles/Pages/ServicePage.css';
import Footer from '../components/Footer';
import WOW from 'wowjs';
import 'animate.css';
import { Link } from 'react-router-dom';
import LogosSection from '../components/LogosSection ';
import Service from '../components/Service';
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import Testimonial from '../components/Testimonial';
import chooseimgbg from '../ServicesDetails/Service-MiniSlider-Imgs/chooseimgbg.png'

export default function ServicePage() {
  useEffect(() => {
    const wow = new WOW.WOW({ live: true });
    wow.init();
  }, []);

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

  return (
    <div className="ServicePageMain md:mt-5 pt-5 bg-transparent" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="bg-ServiceInnerContent mt-5 flex flex-col mb-5">
        <div className="ServiceInnerContent-image">
          <div className="overlay-gradient"></div>
          <img src='https://img.freepik.com/free-photo/travelling-concept-with-group-travelers-miniature_1150-17844.jpg?t=st=1739188093~exp=1739191693~hmac=ee67041549b4ca07abc8df5e6ec5d4a6bef2f942a9ab7441b85c03cc7682d29f&w=1380' alt="ServiceInnerContent Background" className="ServiceInnerContent-bg" />
        </div>
        <div className="ServiceInnerContent-text">
          <h3 className="text-white display-3 mb-4" style={{ fontWeight: '600' }}>
            Our Services
          </h3>
          <p>
           At Flourish Immigration Consultants, we believe immigration is more than just paperwork—it's about fulfilling dreams and building new beginnings. Our expert services make the process simple and seamless from start to finish.
          </p>
          <Link to="/ContactPage" className="contact-button">
            Get in Touch with Us Today
          </Link>
        </div>
        <div className="z-50">
          <div className="text-center pt-3" style={{ maxWidth: '900px' }}>
            <ul className="d-flex justify-content-center gap-2 mb-0 wow fadeInDown font-bold" data-wow-delay="0.3s" >
              <li className="item">
                <Link to="/">Home</Link> <span>/</span>
              </li>
              <li className="text-danger drop-shadow-lg">Services</li>
            </ul>
          </div>
        </div>
      </div>
      <Service></Service>
      <LogosSection />
      <Testimonial></Testimonial>

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
                    <button
                      className="w-full text-left p-4 bg-[#B21E24] text-white font-semibold rounded-t-lg flex justify-between items-center"
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
                      className="w-full text-left p-4 bg-[#B21E24] text-white font-semibold rounded-t-lg flex justify-between items-center"
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

      <Footer />
    </div>
  );
}
