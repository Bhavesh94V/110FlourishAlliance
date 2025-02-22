import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import ContactUsImg from '../assets/imgs/Pages/ContactUsImg.jpg';
import '../assets/styles/Pages/ContactPage.css';
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactRequest } from '../components/redux/actions/contactActions';
import LogosSection from '../components/LogosSection ';

const ContactInfoItem = ({ icon, title, text }) => (
  <div className="info-item">
    <i className={`fas ${icon} icon`}></i>
    <div className="info-text">
      <h5>{title}</h5>
      {
        Array.isArray(text) ? (
          text.map((line, index) => <p key={index}>{line}</p>)
        ) : (
          <p>{text}</p>
        )}
    </div>
  </div>
);

export default function ContactPage() {

  const contactInfo = [
    {
      icon: 'fa-map-marked-alt',
      title: 'Our Location',
      text: 'B-502, Ananta Square, Near S.P Ring Road, Ahmedabad-382330',
    },
    {
      icon: 'fa-phone-alt',
      title: 'Contact Us',
      text: [
        <>
          <span style={{ fontWeight: '600' }}>Phone:</span> +91 7573966606
        </>,
        <>
          <span style={{ fontWeight: '600' }}>Email:</span> info@flourishalliance.com
        </>
      ],
    },
    {
      icon: 'fa-clock',
      title: 'Operating Hours',
      text: [
        <>
          <span style={{ fontWeight: '600' }}>Monday - Friday:</span> 9:00 AM - 6:00 PM
        </>,
        <>
          <span style={{ fontWeight: '600' }}>Saturday:</span> Closed
        </>
      ],
    },
  ];


  const [formData, setFormData] = useState({ full_name: '', email: '', phone: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const contactState = useSelector((state) => state.contact);

  useEffect(() => {
    if (contactState.message) {
      setStatusMessage(contactState.message);
    } else if (contactState.error) {
      setStatusMessage(contactState.error);
    }

    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [contactState]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage('');
    dispatch(submitContactRequest(formData));
    setIsButtonDisabled(true);
    setFormData({ full_name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsButtonDisabled(false), 20000);
  };


  return (
    <>
      <div className="contact-section-Footer md:mt-5 pt-5 bg-transparent" style={{ backgroundImage: `url(${bgImage})` }}>


        <div className="container-fluid bg-breadcrumb mt-5 flex flex-col">
          <div className="breadcrumb-image">
            <div className="overlay-gradient"></div>
            <img src={ContactUsImg} alt="Breadcrumb Background" className="breadcrumb-bg" />
          </div>
          <div className="container text-center py-4">
            <h3 className="text-white display-3 mb-4" style={{ fontWeight: '600' }}>Get in Touch</h3>
            <p className="text-white mb-4">
              Experience unmatched service with a touch of luxury. <br /> We’re here to help you every step of the way.
            </p>
            <a href="#contact-container" className="btn btn-gold px-4 py-2">Fill out the form below and build trust with us</a>
          </div>
          <div className="z-50">
            <div className="text-center" style={{ maxWidth: '900px' }}>
              <ul className="d-flex justify-content-center gap-2 font-bold text-white mb-0 wow fadeInDown" data-wow-delay="0.3s">
                <li className="item"><Link to="/">Home</Link> <span className=''>/</span></li>
                <li className="text-danger">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>



        <div className="contact-container" id="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h5 className="section-title">Quick Contact</h5>
              <h1 className="main-title">Need Assistance with Immigration? Get in Touch</h1>
              <p className="description">Our team is here to guide you through every step of the process. Reach out for personalized assistance.</p>
              <div className="info-block">
                {contactInfo.map((info, index) => (
                  <ContactInfoItem key={index} {...info} />
                ))}
              </div>
            </div>

            <div className="contact-form">
              <h5 className="section-title">We’re Here to Help</h5>
              <h1 className="main-title">Submit Your Inquiry</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="input-field"
                    name="full_name"
                    placeholder="Full Name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    className="input-field"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    className="input-field"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <textarea
                    className="input-field"
                    name="message"
                    placeholder="General Message or Questions"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button py-3" disabled={isButtonDisabled}>
                  {isButtonDisabled ? "Please wait..." : "Submit"}
                </button>
              </form><br />
              {statusMessage && <p className="status-message">{statusMessage}</p>}
            </div>
          </div>
        </div>
      </div>
      <LogosSection />
      <Footer />
    </>
  );
}
