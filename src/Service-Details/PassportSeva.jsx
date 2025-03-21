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
import PagesImage from '../assets/imgs/Pages/PagesImage';



const studyVisaSteps = [
    {
        title: "Choosing a Passport Processing Center",
        icon: "fas fa-building",
        description: "Research trusted passport centers, read reviews, and select a reliable center to ensure smooth passport application processing."
    },
    {
        title: "Document Preparation",
        icon: "fas fa-file-alt",
        description: "Gather necessary documents such as birth certificates, IDs, photographs, and travel documents for passport application."
    },
    {
        title: "Visa Interview Preparation",
        icon: "fa-comments",
        description: "Prepare for passport visa interviews by practicing common questions, tips, and guidelines for a smooth approval process."
    },
];
const studyVisaSteps2 = [
    {
        title: "Filling Out the Passport Application Form",
        icon: "fa-file-signature",
        description: "Complete the passport application form with accurate details, pay the required fee, and upload necessary documents for processing."
    },
    {
        title: "Biometrics and Medicals",
        icon: "fa-user-check",
        description: "Undergo biometric data collection and medical tests as mandated by passport authorities to proceed with the application."
    },
    {
        title: "Proof of Identity & Travel Plans",
        icon: "fa-hotel",
        description: "Submit valid identity proofs, photographs, and detailed travel plans to support your passport application and ensure approval."
    },
    // {
    //     title: "Visa Decision & Pre-Departure Preparation",
    //     icon: "fa-plane-departure",
    //     description: "Once your visa is approved, prepare for departure by arranging flight tickets, currency exchange, and understanding arrival procedures."
    // }
];



export default function PassportSeva() {

    useEffect(() => {
        const wow = new WOW.WOW({ live: true });
        wow.init();
    }, []);

    return (
        <div className="ServicesDetailsMain md:mt-5 pt-4" style={{ backgroundImage: `url(${bgImage})`, scrollBehavior: 'smooth' }}>
            <div className="container-fluid p-0 pt-5">


                <div className='CareersPage'>
                    <div className="bg-breadcrumb  flex flex-col">
                        <div className="breadcrumb-image">

                            <div className="overlay-gradient"></div>

                            <img src={service1} alt="Breadcrumb Background" className="breadcrumb-bg" />

                        </div>
                        <div className="breadcrumb-text">
                            <h3>Passport Visa Service</h3>
                            <p>
                                Get expert help for a smooth passport application. <br />
                                We handle everything from start to finish.
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
                                    <li className="text-white font-bold">Passport Visa Visa</li>
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
                                    src={PagesImage.passport1}
                                    className="rounded-b-full border-4 border-danger w-full max-h-[500px]"

                                    alt="Main Image"
                                />
                                {/* Overlay Image */}
                                <img
                                    src={PagesImage.passport2}
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
                                Passport Seva Services for Your Hassle-Free Journey
                            </h1>
                            <p className="text-gray-700">
                                At Flourish Alliance, we simplify the passport application process with expert guidance and personalized support.
                                Our dedicated team ensures a smooth experience from document preparation to final submission, so you can focus on your journey ahead.
                            </p>
                            <div className="mt-3 space-y-3 text-gray-600">
                                <p>
                                    <span className="font-bold text-dark">Application Guidance: </span>
                                    Step-by-step support to ensure accurate and timely submission of your passport application.
                                </p>
                                <p>
                                    <span className="font-bold text-dark">Document Assistance: </span>
                                    Help with gathering and organizing necessary documents for a seamless passport application.
                                </p>
                                <p>
                                    <span className="font-bold text-dark">Tracking & Updates: </span>
                                    Stay informed with real-time tracking and updates on the status of your passport application.
                                </p>
                            </div>
                            {/* Skills Tags */}
                            <div className="about-skills pt-5 flex flex-wrap gap-3 justify-center lg:justify-start">
                                {["Application Guidance", "Document Assistance", "Tracking & Updates"].map((skill, index) => (
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
                                    <h1 className="ServiceHeadingPro font-bold text-center">Why Choose Our <br /> Passport Visa Services?</h1>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mt-md-2 m-0">
                                        <span className="badge-info badge rounded-pill px-3 py-1 my-2 font-weight-light">
                                            What We Do
                                        </span>
                                        <h4>Secure Your Passport with Expert Guidance</h4>
                                        <h6 className="subtitle">
                                            From document preparation to submission, we offer comprehensive support to ensure a smooth passport application process.
                                        </h6>
                                        <div className="row md:mt-5">
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Application Guidance</h6>
                                                <p className='text-black mt-2'>We guide you through every step of filling out your passport application accurately and efficiently.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Document Assistance</h6>
                                                <p className='text-black mt-2'>We help you gather and organize necessary documents to ensure your application is complete.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Tracking & Updates</h6>
                                                <p className='text-black mt-2'>Stay updated on your application status with real-time tracking and notifications.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Passport Collection</h6>
                                                <p className='text-black mt-2'>Once processed, we assist you in collecting your passport and other related documents.</p>
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
                                                            alt="Passport Application"
                                                            className="rounded image-down img-shadow img-fluid"
                                                            src={StudyAustralia}
                                                        />
                                                    </div>
                                                    <div className="col-md-12 img-hover mb-4">
                                                        <img
                                                            alt="Document Assistance"
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
                                                            alt="Tracking Services"
                                                            className="rounded image-up img-shadow img-fluid"
                                                            src={StudyUK}
                                                        />
                                                    </div>
                                                    <div className="col-md-12 img-hover mb-4">
                                                        <img
                                                            alt="Passport Collection"
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
                                Passport Services <span className="text-danger font-bold"> & Document Assistance</span>
                            </h1>
                            <p className="mb-0 font-semibold">
                                We offer expert guidance on passport application processes and document preparation, ensuring a smooth and efficient submission. Let us assist you in every step of obtaining your passport hassle-free.
                            </p>
                        </div>

                        {/* Features Section */}
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                                <img src={PagesImage.passport2} className="img-fluid h-[330px] object-cover rounded-lg" alt="Features" />
                            </div>

                            <div className="col-xl-4">
                                <div className="row gy-4 gx-0">
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="feature-item flex items-center p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-passport"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h5 className="mb-3 font-semibold">Passport Application Assistance</h5>
                                                <p className="mb-0">
                                                    Get step-by-step assistance in completing and submitting your passport application, ensuring a smooth process.
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
                                                <h5 className="mb-3 font-semibold">Document Verification</h5>
                                                <p className="mb-0">
                                                    We help you gather and verify all necessary documents to ensure your passport application meets all requirements.
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
                                                <i className="fas fa-check-circle"></i>
                                            </div>
                                            <div className="text-start ms-4">
                                                <h5 className="mb-3 font-semibold">Application Status Tracking</h5>
                                                <p className="mb-0">
                                                    Track your passport application status with real-time updates, ensuring peace of mind throughout the process.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="feature-item flex items-center justify-end p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-users"></i>
                                            </div>
                                            <div className="text-start ms-4">
                                                <h5 className="mb-3 font-semibold">Family Passport Services</h5>
                                                <p className="mb-0">
                                                    We also provide passport services for families, helping all members with their passport applications.
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
                                    Get Your Passport Visa with Expert Guidance
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
                    <div className="container mx-auto">
                        <div className="content">
                            <div className="left-side">
                                <div className="address details">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="topic">Address</div>
                                    <div className="text-one">B-502, Ananta Square, Near</div>
                                    <div className="text-two">S.P. Ring Road, Ahmedabad-382330</div>
                                </div>
                                <div className="phone details">
                                    <i className="fas fa-phone-alt"></i>
                                    <div className="topic">Phone</div>
                                    <div className="text-one">+91 75739-66606</div>
                                </div>
                                <div className="email details">
                                    <i className="fas fa-envelope"></i>
                                    <div className="topic">Email</div>
                                    <div className="text-one">info@flourishalliiance.com</div>
                                    {/* <div className="text-two">info.codinglab@gmail.com</div> */}
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