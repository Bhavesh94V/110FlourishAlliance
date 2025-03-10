import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Service-Details/test.css';
import Footer from '../components/Footer';
import Service from '../components/Service';
import service1 from './Service-MiniSlider-Imgs/service1.jpg';
import StudyVisa from '../ServicesDetails/Service-MiniSlider-Imgs/Study-Visa.jpg'
import chooseimgbg from '../ServicesDetails/Service-MiniSlider-Imgs/chooseimgbg.png'

import Image1 from '../Service-Details/Images/SVImage1.jpg'
import Image2 from '../Service-Details/Images/SVImage2.jpg'
import Image3 from '../Service-Details/Images/SVImage3.jpg'
import Image4 from '../Service-Details/Images/SVImage4.jpg'
import SVAbout from '../Service-Details/Images/SVAbout.jpg'
import SVAbout2 from '../Service-Details/Images/SVAbout2.jpg'

import emailjs from '@emailjs/browser';
import WOW from 'wowjs';
import 'animate.css';
import EmailForm from './EmailForm';

const studyVisaSteps = [
    {
        title: "Choosing a University/School",
        icon: "fa-university",
        description: "Research your options based on career goals, location, and course fees. Ensure institution is accredited for a smooth visa process."
    },
    {
        title: "Preparing Documents",
        icon: "fa-file-alt",
        description: "Gather necessary documents including passport, academic transcripts, admission letter, financial proofs."
    },
    {
        title: "Attending Visa Interviews",
        icon: "fa-comments",
        description: "Some countries require a visa interview. Prepare for common questions about your study plans, university choice."
    },
];
const studyVisaSteps2 = [
    {
        title: "Filling Out the Visa Application Form",
        icon: "fa-file-signature",
        description: "Complete the online visa application form, pay the visa fee, and upload all required supporting documents."
    },
    {
        title: "Biometrics and Medicals",
        icon: "fa-user-check",
        description: "Many countries require biometrics  and medical tests. Ensure you complete these steps as part of the visa process."
    },
    {
        title: "Proof of Accommodation & Travel Plans",
        icon: "fa-hotel",
        description: "Submit details of your accommodation, whether university housing or private arrangements, along with your travel itinerary."
    },
    // {
    //     title: "Visa Decision & Pre-Departure Preparation",
    //     icon: "fa-plane-departure",
    //     description: "Once your visa is approved, prepare for departure by arranging flight tickets, currency exchange, and understanding arrival procedures."
    // }
];



export default function Studyvisa() {

    useEffect(() => {
        const wow = new WOW.WOW({ live: true });
        wow.init();
    }, []);


    const [contactData, setContactData] = useState({ fullname: '', email: '', message: '' });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData((prev) => ({ ...prev, [name]: value }));
    };

    // Send email using emailjs
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_3yis346',
            'template_xkl1rdv',
            contactData,
            'L8GmcYhOcLNhacDJz'
        )
            .then(() => alert('Message sent successfully!'))
            .catch(() => alert('Failed to send message.'));
    };


    return (
        <div className="ServicesDetailsMain  md:mt-5 pt-5">
            <div className="container-fluid p-0 pt-5">

                <div className="CareersPage">
                    <div className="bg-breadcrumb flex flex-col">
                        <div className="breadcrumb-image">

                            <div className="overlay-gradient"></div>

                            <img src={service1} alt="Breadcrumb Background" className="breadcrumb-bg" />

                        </div>
                        <div className="breadcrumb-text">
                            <h3>Study Visa Services</h3>
                            <p>
                                We provide expert guidance for students to achieve their dream of studying abroad with hassle-free visa services.
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
                                    <li className="text-white font-bold">Study Visa</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>


                {/* Section 1 */}

                <div className="flex flex-col w-full items-center px-4 md:px-12 lg:px-24 my-5 bg-white mt-0 pt-5">
                    {/* About Section */}
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
                                        src={SVAbout}
                                        className="rounded-b-full border-4 border-danger"
                                        alt="Main Image"
                                    />
                                    {/* Overlay Image */}
                                    <img
                                        src={SVAbout2}
                                        className="absolute bottom-0 left-0 w-28 lg:w-44 rounded-t-full border-5 border-white"
                                        alt="Small Image"

                                    />
                                    {/* Visa Success Badge */}
                                    <div className="absolute top-10 hidden md:block -left-14 bg-[#B21E24] text-white text-center text-sm font-bold p-3 rounded-full border-5 border-white">
                                        100% <br /> Proven <br /> Visa <br />Success Rate
                                    </div>
                                </div>
                            </div>

                            {/* About Content */}
                            <div className="text-start lg:text-left max-w-2xl mb-auto md:mt-0">
                                <h1 className="font-bold text-[#B21E24] text-[32px] mb-3">
                                    Study Visa Services for a Bright Future Abroad
                                </h1>
                                <p className="text-gray-700">
                                    At Flourish Alliance, we specialize in helping students fulfill their
                                    dreams of studying abroad by providing top-notch study visa services.
                                    Our experienced team is dedicated to guiding you through the complex
                                    process of obtaining a study visa, ensuring a hassle-free experience.
                                </p>
                                <div className="mt-3 space-y-3 text-gray-600">
                                    <p>
                                        <span className="font-bold text-dark">Visa Guidance: </span>
                                        Expert support to navigate the visa application process with ease
                                        and confidence.
                                    </p>
                                    <p>
                                        <span className="font-bold text-dark">University Selection: </span>
                                        Personalized recommendations to choose the right institution for
                                        your academic and career goals.
                                    </p>
                                    <p>
                                        <span className="font-bold text-dark">Document Assistance: </span>
                                        Comprehensive help in preparing, reviewing, and organizing all
                                        required documents for a successful visa application.
                                    </p>
                                </div>
                                {/* Skills Tags */}
                                <div className="about-skills pt-5 flex flex-wrap gap-3 justify-center lg:justify-start">
                                    {["Visa Guidance", "University Selection", "Document Assistance"].map(
                                        (skill, index) => (
                                            <span
                                                key={index}
                                                className="text-white bg-[#B21E24] px-3 py-1 rounded-full text-center flex items-center gap-2 shadow-md"
                                            >
                                                <span className="text-[18px]">&#9758;</span> {skill}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Section 1 */}


                {/* Section 2 */}

                <div className="ServiceContent">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-10 col-11 mx-auto">
                                <div className="mt-2 mb-5 text-center">
                                    <h1 className="ServiceHeadingPro font-bold text-center">Why Choose Our <br /> Study Visa Services?</h1>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mt-md-2 m-0">
                                        <span className="badge-info badge rounded-pill px-3 py-1 my-2 font-weight-light">
                                            What We Do
                                        </span>
                                        <h4 className='font-semibold'>Turn Your Study Abroad Dreams into Reality</h4>
                                        <h6 className="subtitle">
                                            Expert guidance, seamless visa processing, financial advice, and complete support from application to pre-departure — we make your study abroad journey stress-free and successful.
                                        </h6>
                                        <div className="row md:mt-5">
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">University & Course Selection</h6>
                                                <p className='text-black mt-2'>Get expert guidance to choose the best university and course based on your academic profile.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Visa Documentation</h6>
                                                <p className='text-black mt-2'>We help you prepare and submit all required documents to ensure a successful visa application.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Scholarship Assistance</h6>
                                                <p className='text-black mt-2'>Explore various scholarships and funding opportunities to support your education abroad.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Pre-Departure Support</h6>
                                                <p className='text-black mt-2'> Get valuable tips on travel, accommodation, and adapting to a new country.</p>
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
                                                    <div className="col-md-12 img-hover mb-4 bg-white">
                                                        <img
                                                            alt="Study Visa"
                                                            className="rounded image-down img-shadow img-fluid w-full h-48 object-contain"
                                                            src={Image1}
                                                        />
                                                    </div>
                                                    <div className="col-md-12 img-hover mb-4 bg-white">
                                                        <img
                                                            alt="Visa Services"
                                                            className="rounded image-down img-shadow img-fluid w-full h-48 object-contain"
                                                            src={Image2}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 uneven-box">
                                                <div className="row">
                                                    <div className="col-md-12 img-hover mb-4 bg-white">
                                                        <img
                                                            alt="Canada Study Visa"
                                                            className="rounded image-up img-shadow img-fluid w-full h-48 object-contain"
                                                            src={Image3}
                                                        />
                                                    </div>
                                                    <div className="col-md-12 img-hover mb-4 bg-white">
                                                        <img
                                                            alt="Study Permit"
                                                            className="rounded image-up img-shadow img-fluid w-full h-48 object-contain"
                                                            src={Image4}
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
                                Funding Opportunities  <span className="text-danger font-bold"> & Interview Preparation</span>
                            </h1>
                            <p className="mb-0 font-semibold">
                                We provide expert guidance on securing financial aid and scholarships, alongside tailored interview preparation to help you succeed in your visa application process. Let us support you every step of the way!
                            </p>
                        </div>

                        {/* Features Section */}
                        <div className="row g-4 align-items-center">

                            <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                                <img src={StudyVisa} className="img-fluid h-[330px] object-cover rounded-lg" alt="Features" />
                            </div>


                            <div className="col-xl-4">
                                <div className="row gy-4 gx-0">
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="feature-item flex items-center p-4  shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-graduation-cap"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h5 className="mb-3 font-semibold">Scholarships for International Students</h5>
                                                <p className="mb-0">
                                                    Get access to a variety of scholarships available for students worldwide. We help you find the best options to reduce financial burden.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="feature-item flex items-center p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-university"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h5 className="mb-3 font-semibold">Education Loan Assistance</h5>
                                                <p className="mb-0">
                                                    We assist you in securing education loans with easy repayment options, ensuring a smooth journey towards your academic goals.
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
                                                <i className="fas fa-comments"></i>
                                            </div>
                                            <div className="text-start ms-4">
                                                <h5 className="mb-3 font-semibold">Visa Interview Preparation</h5>
                                                <p className="mb-0">
                                                    Get expert guidance on how to prepare for your study visa interview, ensuring a high success rate in visa approval.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="feature-item flex items-center justify-end p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-question-circle"></i>
                                            </div>
                                            <div className="text-start ms-4">
                                                <h5 className="mb-3 font-semibold">Common Interview Questions</h5>
                                                <p className="mb-0">
                                                    Prepare for your visa interview with a list of frequently asked questions and expert tips to answer them effectively.
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
                                    Get Your Study Visa with Expert Guidance
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