import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Service-Details/test.css';
import Footer from '../components/Footer';
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import Service from '../components/Service';
import service1 from './Service-MiniSlider-Imgs/service3.jpg';
// import mapImage from '../ServicesDetails/Service-MiniSlider-Imgs/mapImg.png'
import StudyVisa from '../ServicesDetails/Service-MiniSlider-Imgs/Study-Visa.jpg'
import StudyUSA from '../ServicesDetails/Service-MiniSlider-Imgs/StudyUSA.jpg'
import StudyCanada from '../ServicesDetails/Service-MiniSlider-Imgs/StudyCanada.jpg'
import StudyAustralia from '../ServicesDetails/Service-MiniSlider-Imgs/StudyAustralia.jpg'
import StudyUK from '../ServicesDetails/Service-MiniSlider-Imgs/StudyUk.jpg'
import WOW from 'wowjs';
import 'animate.css';
import chooseimgbg from '../ServicesDetails/Service-MiniSlider-Imgs/chooseimgbg.png'
import EmailForm from './EmailForm';
import PagesImage from '../assets/imgs/Pages/PagesImage';

const studyVisaSteps = [
    {
        title: "Selecting Your Travel Destination",
        icon: "fa-map-marker-alt",
        description: "Research destinations based on interests and visit purpose, ensuring the selected location meets visa requirements."
    },
    {
        title: "Organizing Travel Documents",
        icon: "fa-file-alt",
        description: "Prepare essential documents like passport, travel itinerary, hotel bookings, and financial proof for your visa submission."
    },
    {
        title: "Preparing for Visa Interview",
        icon: "fa-comments",
        description: "If required, practice for your visa interview by reviewing common questions related to travel plans and financials."
    },
];
const studyVisaSteps2 = [
    {
        title: "Filling Out the Visa Application Form",
        icon: "fa-file-signature",
        description: "Complete the online application form, submit personal details and upload all necessary documents."
    },
    {
        title: "Biometrics and Medicals",
        icon: "fa-user-check",
        description: "Complete biometrics (fingerprints) and medical tests if required by the country as part of the visa process."
    },
    {
        title: "Proof of Accommodation & Travel Plans",
        icon: "fa-hotel",
        description: "Submit accommodation details (hotel or host) and travel itinerary to support your visa application process."
    }
    // {
    //     title: "Visa Decision & Pre-Departure Preparation",
    //     icon: "fa-plane-departure",
    //     description: "Once your visa is approved, prepare for departure by arranging flight tickets, currency exchange, and understanding arrival procedures."
    // }
];



export default function VisitorVisa() {

    useEffect(() => {
        const wow = new WOW.WOW({ live: true });
        wow.init();
    }, []);


    return (
        <div className="ServicesDetailsMain md:mt-5 pt-5" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container-fluid p-0 pt-5">


                <div className='CareersPage'>
                    <div className="bg-breadcrumb  flex flex-col">
                        <div className="breadcrumb-image">

                            <div className="overlay-gradient"></div>

                            <img src={service1} alt="Breadcrumb Background" className="breadcrumb-bg" />

                        </div>
                        <div className="breadcrumb-text">
                            <h3>Visitor Visa Service</h3>
                            <p>
                                Get expert help to secure your visitor visa smoothly. <br />
                                Your journey starts here—let us assist you.
                            </p>
                            <Link to="/ContactPage" className="contact-button bg-[#B21E24] p-2 px-3 rounded-full">
                                Get in Touch with Us Today
                            </Link>
                        </div>

                        <div className="z-50 animate__animated animate__fadeInDown">
                            <div className="text-center pt-3" style={{ maxWidth: '900px' }}>
                                <ul className="d-flex justify-content-center gap-2 font-semibold text-white mb-0 wow fadeInDown" data-wow-delay="0.3s" >
                                    <li className="item hover:scale-110 transition-all">
                                        <Link to="/ServicePage">Service</Link> <span className=''>/</span>
                                    </li>
                                    <li className="text-white font-bold">Visitor Visa</li>
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
                            <div className=" w-[250px] md:w-[300px] lg:w-[450px] relative">
                                {/* Main Image */}
                                <img
                                    src={PagesImage.Visitor1}
                                    className="rounded-b-full border-4 border-danger w-full max-h-[500px]"

                                    alt="Main Image"
                                />
                                {/* Overlay Image */}
                                <img
                                    src={PagesImage.Visitor2}
                                    className="absolute bottom-0 md:h-60 h-48 left-0 w-28 lg:w-44 rounded-t-full border-5 border-white"
                                    alt="Small Image"
                                    style={{ objectFit: "cover" }}
                                />
                                {/* Visa Success Badge */}
                                <div className="absolute top-10 hidden md:block -left-14 bg-[#B21E24] text-white text-center text-sm font-bold p-3 rounded-full border-5 border-white">
                                    100% <br /> Proven <br /> Visa <br />Success Rate
                                </div>
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="text-start lg:text-left max-w-2xl px-3 mt-0 mb-auto md:mt-0">
                            <h1 className="font-bold text-[#B21E24] text-[32px] mb-3">
                                Visitor Visa Services for Your Global Journey
                            </h1>
                            <p className="text-gray-700">
                                Flourish Alliance helps you navigate the visitor visa process with ease. We provide expert support to ensure you travel without any visa hassles.
                            </p>
                            <div className="mt-3 space-y-3 text-gray-600">
                                <p>
                                    <span className="font-bold text-dark">Visa Application Support: </span>
                                    Get expert help in completing and submitting your visitor visa application with the correct documents.
                                </p>
                                <p>
                                    <span className="font-bold text-dark">Travel Document Review: </span>
                                    We assist in reviewing your travel documents to ensure everything is in order for a successful application.
                                </p>
                                <p>
                                    <span className="font-bold text-dark">Visa Interview Preparation: </span>
                                    Receive guidance on preparing for any required visa interviews, boosting your chances of approval.
                                </p>
                            </div>
                            {/* Skills Tags */}
                            <div className="about-skills pt-5 flex flex-wrap gap-3 justify-center lg:justify-start">
                                {["Visa Application Support", "Travel Document Review", "Visa Interview Preparation"].map(
                                    (skill, index) => (
                                        <span
                                            key={index}
                                            className="text-white bg-[#B21E24] px-2 py-1 rounded-full text-center flex items-center gap-2 shadow-md"
                                        >
                                            <span className="text-[18px]">&#9758;</span> {skill}
                                        </span>
                                    )
                                )}
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
                                    <h1 className="ServiceHeadingPro font-bold text-center">Why Choose Our <br /> Visitor Visa Services?</h1>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mt-md-2 m-0">
                                        <span className="badge-info badge rounded-pill px-3 py-1 my-2 font-weight-light">
                                            What We Do
                                        </span>
                                        <h4>Make Your Visitor Visa Journey Effortless</h4>
                                        <h6 className="subtitle">
                                            Our expert team offers seamless visa processing, travel guidance, and full support from application to arrival — ensuring your smooth travel experience.
                                        </h6>
                                        <div className="row md:mt-5">
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Visa Application Support</h6>
                                                <p className='text-black mt-2'>Get expert assistance in completing your visa application, ensuring all documents and information are properly submitted.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Travel Document Guidance</h6>
                                                <p className='text-black mt-2'>We provide guidance on the necessary travel documents, ensuring all requirements for the visa application are met.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Itinerary and Accommodation Support</h6>
                                                <p className='text-black mt-2'>Receive assistance in preparing a travel itinerary and accommodation details that meet visa requirements.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Pre-Departure Assistance</h6>
                                                <p className='text-black mt-2'>We provide tips and advice for your travel preparations, including your journey, accommodation, and cultural adjustments.</p>
                                            </div>
                                            <div className="col-lg-12 my-4">
                                                <Link to='/BookNowPage' className="btn btn-small btn-info" href="#">Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-md-5 m-0">
                                        <div className="row wrap-service">
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-md-12 img-hover mb-4">
                                                        <img
                                                            alt="Visitor Visa"
                                                            className="rounded image-down img-shadow img-fluid"
                                                            src={StudyAustralia}
                                                        />
                                                    </div>
                                                    <div className="col-md-12 img-hover mb-4">
                                                        <img
                                                            alt="Visa Services"
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
                                                            alt="Tourist Visa"
                                                            className="rounded image-up img-shadow img-fluid"
                                                            src={StudyUK}
                                                        />
                                                    </div>
                                                    <div className="col-md-12 img-hover mb-4">
                                                        <img
                                                            alt="Travel Visa"
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
                                Visitor Visa <span className="text-danger font-bold"> & Travel Preparation</span>
                            </h1>
                            <p className="mb-0 font-semibold">
                                We offer expert guidance on securing your visitor visa and provide tailored travel preparation tips to ensure a smooth journey. Let us help you at every stage of your visa application and travel plans!
                            </p>
                        </div>

                        {/* Features Section */}
                        <div className="row g-4 align-items-center">

                            <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                                <img src={PagesImage.Visitor2} className="img-fluid h-[330px] object-cover rounded-lg" alt="Features" />
                            </div>


                            <div className="col-xl-4">
                                <div className="row gy-4 gx-0">
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="feature-item flex items-center p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-plane"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h5 className="mb-3 font-semibold">Travel Itinerary Support</h5>
                                                <p className="mb-0">
                                                    We help you organize your travel itinerary to ensure it meets the requirements for your visitor visa approval.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="feature-item flex items-center p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-file-alt"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h5 className="mb-3 font-semibold">Travel Document Review</h5>
                                                <p className="mb-0">
                                                    Ensure your travel documents are reviewed and meet all requirements for a smooth visa application process.
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
                                                <i className="fas fa-question-circle"></i>
                                            </div>
                                            <div className="text-start ms-4">
                                                <h5 className="mb-3 font-semibold">Visa Interview Guidance</h5>
                                                <p className="mb-0">
                                                    Receive expert guidance to confidently prepare for your visitor visa interview, increasing your chances of successful approval.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="feature-item flex items-center justify-end p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="text-start ms-4">
                                                <h5 className="mb-3 font-semibold">Accommodation Assistance</h5>
                                                <p className="mb-0">
                                                    We assist with finding suitable accommodation options that align with your travel plans and visa requirements.
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
                                    Get Your Visitor Visa with Expert Guidance
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
                                <p className='max-w-[70%]'>If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.</p>

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