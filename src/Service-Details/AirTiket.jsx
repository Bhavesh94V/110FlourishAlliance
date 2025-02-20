import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Service-Details/test.css';
import Footer from '../components/Footer';
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import Service from '../components/Service';
import service1 from './Service-MiniSlider-Imgs/service6.jpg';
// import mapImage from '../ServicesDetails/Service-MiniSlider-Imgs/mapImg.png'
import StudyVisa from '../ServicesDetails/Service-MiniSlider-Imgs/Study-Visa.jpg'
import StudyUSA from '../ServicesDetails/Service-MiniSlider-Imgs/StudyUSA.jpg'
import StudyCanada from '../ServicesDetails/Service-MiniSlider-Imgs/StudyCanada.jpg'
import StudyAustralia from '../ServicesDetails/Service-MiniSlider-Imgs/StudyAustralia.jpg'
import StudyUK from '../ServicesDetails/Service-MiniSlider-Imgs/StudyUk.jpg'
import chooseimgbg from '../ServicesDetails/Service-MiniSlider-Imgs/chooseimgbg.png'
import WOW from 'wowjs';
import 'animate.css';
import EmailForm from './EmailForm';

const studyVisaSteps = [
    {
        title: "Booking Air Tickets",
        icon: "fa-plane",
        description: "Search and book the best flights based on your destination, budget, and travel dates for a smooth journey."
    },
    {
        title: "Visa Documentation for Air Travel",
        icon: "fa-passport",
        description: "Ensure all necessary documents like your visa, passport, and flight details are in place for seamless travel."
    },
    {
        title: "Flight Changes & Cancellations",
        icon: "fa-sync-alt",
        description: "Get assistance with changing flight dates or cancelling your bookings, ensuring flexibility and convenience."
    },
];
const studyVisaSteps2 = [
    {
        title: "Booking Your Flight",
        icon: "fa-plane-departure",
        description: "Select and book your flight tickets based on your travel preferences, ensuring you have the best options for your journey."
    },
    {
        title: "Travel Insurance & Protection",
        icon: "fa-shield-alt",
        description: "Buy travel insurance for coverage against cancellations, medical emergencies, and lost baggage during your trip."
    },
    {
        title: "Accommodation & Travel Itinerary",
        icon: "fa-map-marker-alt",
        description: "Provide your accommodation details and travel itinerary to ensure a smooth and organized travel experience."
    },
    // {
    //     title: "Visa Decision & Pre-Departure Preparation",
    //     icon: "fa-plane-departure",
    //     description: "Once your visa is approved, prepare for departure by arranging flight tickets, currency exchange, and understanding arrival procedures."
    // }
];


export default function AirTiket() {

    useEffect(() => {
        const wow = new WOW.WOW({ live: true });
        wow.init();
    }, []);



    return (
        <div className="ServicesDetailsMain md:mt-5 pt-4" style={{ backgroundImage: `url(${bgImage})`, scrollBehavior: 'smooth' }}>
            <div className="container-fluid pt-5">


                <div className='CareersPage'>
                    <div className="bg-breadcrumb  flex flex-col">
                        <div className="breadcrumb-image">

                            <div className="overlay-gradient"></div>

                            <img src={service1} alt="Breadcrumb Background" className="breadcrumb-bg" />

                        </div>
                        <div className="breadcrumb-text">
                            <h3>Air Ticket Visa</h3>
                            <p>
                                Simplify your travel with our expert Air Ticket Visa services. <br />
                                We handle the details, so you can focus on your journey.
                            </p>
                            <Link to="/ContactPage" className="contact-button bg-[#B21E24] p-2 rounded">
                                Contact Us Today
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
                </div>


                {/* Section 1 */}


                <section className="about-section pt-5 w-full"
                    style={{
                        backgroundImage: `url(${chooseimgbg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'inherit',
                        backgroundPositionX: "-45%",
                        backgroundPositionY: "100%",
                        animation: "moveBackground2 2s infinite alternate ease-in-out",
                    }}
                >
                    <div className="flex flex-col lg:flex-row items-center justify-around  mx-auto"
                        style={{
                            backgroundImage: `url(${chooseimgbg})`,
                            backgroundRepeat: 'no-repeat',
                            // backgroundSize: 'contain'
                            backgroundPositionX: "20%",
                            animation: "moveBackground 2s infinite alternate ease-in-out",
                        }}
                    >
                        {/* Image Container */}
                        <div className="relative flex justify-center mb-5">
                            <div className="w-[300px] lg:w-[450px] relative">
                                {/* Main Image */}
                                <img
                                    src="https://html.kodesolution.com/2024/visago-php/images/resource/about1-1.jpg"
                                    className="rounded-b-full border-4 border-danger"
                                    alt="Main Image"
                                />
                                {/* Overlay Image */}
                                <img
                                    src="https://img.freepik.com/free-photo/green-cards-passports-flat-lay_23-2149828138.jpg?t=st=1739272243~exp=1739275843~hmac=a8d0c263d752fb2c346854f0b82fb3e11a3aeede66d1d473b257d79d36616017&w=740"
                                    className="absolute bottom-0 left-0 w-28 lg:w-44 rounded-t-full border-5 border-white"
                                    alt="Small Image"

                                />
                                {/* Visa Success Badge */}
                                <div className="absolute top-10 -left-14 bg-[#B21E24] text-white text-center text-sm font-bold p-3 rounded-full border-5 border-white">
                                    100% <br /> Proven <br /> Visa <br />Success Rate
                                </div>
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="text-start lg:text-left max-w-2xl mb-auto md:mt-0">
                            <h1 className="font-bold text-[#B21E24] text-[32px] mb-3">
                                Air Ticket Visa Services for a Seamless Travel Experience
                            </h1>
                            <p className="text-gray-700">
                                At Flourish Alliance, we offer comprehensive Air Ticket Visa services to ensure a smooth and stress-free journey abroad.
                                Our experienced team guides you through every step, from securing the visa to booking the perfect flight.
                            </p>
                            <div className="mt-3 space-y-3 text-gray-600">
                                <p>
                                    <span className="font-bold text-dark">Visa Assistance: </span>
                                    Expert help with visa applications, ensuring a hassle-free approval process.
                                </p>
                                <p>
                                    <span className="font-bold text-dark">Flight Booking: </span>
                                    Personalized flight options for your travel, ensuring the best deals and comfort.
                                </p>
                                <p>
                                    <span className="font-bold text-dark">Travel Support: </span>
                                    Ongoing support for all your travel needs, from document management to last-minute changes.
                                </p>
                            </div>
                            {/* Skills Tags */}
                            <div className="about-skills pt-5 flex flex-wrap gap-3 justify-center lg:justify-start">
                                {["Visa Assistance", "Flight Booking", "Travel Support"].map((skill, index) => (
                                    <span
                                        key={index}
                                        className="text-white bg-[#B21E24] px-3 py-1 rounded-full text-center flex items-center gap-2 shadow-md"
                                    >
                                        <span className="text-[18px]">&#9758;</span> {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                {/* Section 1 */}




                {/* Section 2 */}



                <div className="ServiceContent">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-10 col-11 mx-auto">
                                <div className="mt-2 mb-5 text-center">
                                    <h1 className="ServiceHeadingPro font-bold text-center">Why Choose Our <br /> Air Ticket Visa Services?</h1>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mt-md-2 m-0">
                                        <span className="badge-info badge rounded-pill px-3 py-1 my-2 font-weight-light">
                                            What We Do
                                        </span>
                                        <h4>Air Ticket Visa Services for Your Global Travel</h4>
                                        <h6 className="subtitle">
                                            Whether for business, study, or leisure, we provide expert guidance and seamless support in securing your Air Ticket Visa, ensuring a smooth journey from booking to departure.
                                        </h6>
                                        <div className="row md:mt-5">
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Visa Consultation</h6>
                                                <p className="text-black mt-2">Expert advice on visa requirements for your destination, tailored to your travel needs.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Flight Booking</h6>
                                                <p className="text-black mt-2">Assistance in booking the best flights with flexible options and competitive prices.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Travel Insurance</h6>
                                                <p className="text-black mt-2">
                                                    Protect your journey with coverage for cancellations, medical emergencies, lost baggage, and delays.
                                                </p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Pre-Departure Support</h6>
                                                <p className="text-black mt-2">Assistance with airport transfer, accommodation booking, and last-minute travel advice.</p>
                                            </div>
                                            <div className="col-lg-12 my-4">
                                                <a className="btn btn-small btn-info" href="#">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-md-5 m-0">
                                        <div className="row wrap-service">
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-md-12 img-hover mb-4">
                                                        <img
                                                            alt="Flight Booking"
                                                            className="rounded image-down img-shadow img-fluid"
                                                            src={StudyAustralia}
                                                        />
                                                    </div>
                                                    <div className="col-md-12 img-hover mb-4">
                                                        <img
                                                            alt="Visa Assistance"
                                                            className="rounded image-down img-shadow img-fluid"
                                                            src={StudyCanada}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 uneven-box">
                                                <div className="row">
                                                    <div className="col-md-12 img-hover mb-4">
                                                        <img
                                                            alt="Travel Insurance"
                                                            className="rounded image-up img-shadow img-fluid"
                                                            src={StudyUK}
                                                        />
                                                    </div>
                                                    <div className="col-md-12 img-hover mb-4">
                                                        <img
                                                            alt="Pre-Departure Support"
                                                            className="rounded image-up img-shadow img-fluid"
                                                            src={StudyUSA}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Section 2 */}


                {/* Section 3 */}


                <div className="container-fluid feature">
                    <div className="container py-5">

                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
                            <h1 className="text-[28px] text-capitalize mb-3 font-bold">
                                Air Ticket Visa Services  <span className="text-danger font-bold"> & Travel Assistance</span>
                            </h1>
                            <p className="mb-0 font-semibold">
                                We offer expert guidance in securing your Air Ticket Visa, along with personalized travel assistance for a smooth and worry-free journey. From booking flights to ensuring visa approval, we’re with you at every step.
                            </p>
                        </div>

                        {/* Features Section */}
                        <div className="row g-4 align-items-center">

                            <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                                <img src={StudyVisa} className="img-fluid h-[330px] object-cover rounded-lg" alt="Air Ticket Visa" />
                            </div>

                            <div className="col-xl-4">
                                <div className="row gy-4 gx-0">
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="feature-item flex items-center p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-plane"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h5 className="mb-3 font-semibold">Air Ticket Booking Assistance</h5>
                                                <p className="mb-0">
                                                    We help you secure the best flight tickets for your travel, offering flexible options and competitive prices.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="feature-item flex items-center p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-calendar-check"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h5 className="mb-3 font-semibold">Flexible Booking & Changes</h5>
                                                <p className="mb-0">
                                                    Our services allow you to make changes to your flight booking with ease, offering full flexibility for your travel plans.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="row gy-4 gx-0">
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="feature-item flex items-center justify-end p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-passport"></i>
                                            </div>
                                            <div className="text-start ms-4">
                                                <h5 className="mb-3 font-semibold">Visa Documentation Assistance</h5>
                                                <p className="mb-0">
                                                    We guide you in gathering and submitting the necessary documents for your air ticket visa application, ensuring compliance.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="feature-item flex items-center justify-end p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-phone-alt"></i>
                                            </div>
                                            <div className="text-start ms-4">
                                                <h5 className="mb-3 font-semibold">24/7 Travel Support</h5>
                                                <p className="mb-0">
                                                    Our dedicated team is available around the clock to assist you with any travel-related queries and issues.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* Section 3 */}



                {/* Section 4 */}


                <div className="section-4">
                    <div className="container-fluid service overflow-hidden py-5">
                        <div className="container py-3">
                            <div
                                className="section-4__header text-center mx-auto pb-5 wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <h4 className="section-4__title text-uppercase text-danger font-bold text-[22px]">Our Service</h4>
                                <h1 className="section-4__main-title text-3xl font-bold mb-3">
                                    Get Your Air Ticket Visa with Expert Guidance
                                </h1>
                            </div>
                            <div className="row gx-0 gy-4 align-items-center">
                                <div className="col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay="0.2s">
                                    {
                                        studyVisaSteps.map((step, index) => (
                                            <div key={index} className="section-4__service-item bg-white rounded-lg shadow-lg p-4 mb-4 relative overflow-hidden">
                                                <div className="flex">
                                                    <div className="section-4__service-content text-end">
                                                        <a href="#" className="text-lg font-semibold mb-3 block">
                                                            {step.title}
                                                        </a>
                                                        <p className="mb-0 text-gray-600">{step.description}</p>
                                                    </div>
                                                    <div className="ps-4">
                                                        <div className="section-4__service-btn bg-red-500 rounded-full flex items-center justify-center w-20 h-20 transition duration-500">
                                                            <i className={`fas ${step.icon} text-white text-2xl`}></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="col-lg-6 col-xl-4 mt-0 wow px-4 fadeInUp max-h-[540px] rounded-custom overflow-hidden ImageBorder" data-wow-delay="0.3s">
                                    <div className="bg-[#B21E24] rounded">
                                        <img src="https://img.freepik.com/free-photo/waist-table-professional-project-building_1301-1585.jpg?t=st=1738580555~exp=1738584155~hmac=8b73854b7919441dda33fad863ee4e3a85e65a87893417ccf505c962ea532f3b&w=740" className="img-fluid w-full rounded-t-full" alt="Water" />
                                    </div>
                                </div>



                                <div className="col-lg-6 col-xl-4 wow fadeInRight" data-wow-delay="0.2s">
                                    {
                                        studyVisaSteps2.map((step, index) => (
                                            <div key={index} className="section-4__service-item bg-white rounded-lg shadow-lg p-4 mb-4 relative overflow-hidden">
                                                <div className="flex">
                                                    <div className="pe-4">
                                                        <div className="section-4__service-btn bg-red-500 rounded-full flex items-center justify-center w-20 h-20 transition duration-500">
                                                            <i className={`fas ${step.icon} text-white text-2xl`}></i>
                                                        </div>
                                                    </div>
                                                    <div className="section-4__service-content">
                                                        <a href="#" className="text-lg font-semibold mb-3 block">
                                                            {step.title}
                                                        </a>
                                                        <p className="mb-0 text-gray-600">{step.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Section 4 */}

                <Service></Service>


                {/* Section 5 */}


                <div className="ServiceForm mx- w-full overflow-hidden">
                    <div className="container">
                        <div className="content">
                            <div className="left-side">
                                <div className="address details">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="topic">Address</div>
                                    <div className="text-one">Surkhet, NP12</div>
                                    <div className="text-two">Birendranagar 06</div>
                                </div>
                                <div className="phone details">
                                    <i className="fas fa-phone-alt"></i>
                                    <div className="topic">Phone</div>
                                    <div className="text-one">+0098 9893 5647</div>
                                    <div className="text-two">+0096 3434 5678</div>
                                </div>
                                <div className="email details">
                                    <i className="fas fa-envelope"></i>
                                    <div className="topic">Email</div>
                                    <div className="text-one">codinglab@gmail.com</div>
                                    <div className="text-two">info.codinglab@gmail.com</div>
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="topic-text">Send us a message</div>
                                <p>If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.</p>
                                
                                <EmailForm></EmailForm>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Section 5 */}
            </div>

            <Footer></Footer>
        </div>
    );
}