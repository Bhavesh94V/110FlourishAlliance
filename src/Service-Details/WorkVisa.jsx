import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Service-Details/test.css';
import Footer from '../components/Footer';
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import Service from '../components/Service';
import service1 from './Service-MiniSlider-Imgs/service2.jpg';
import StudyVisa from '../ServicesDetails/Service-MiniSlider-Imgs/Study-Visa.jpg'
import chooseimgbg from '../ServicesDetails/Service-MiniSlider-Imgs/chooseimgbg.png'

import Image1 from '../Service-Details/Images/SVImage1.jpg'
import Image2 from '../Service-Details/Images/SVImage2.jpg'
import Image3 from '../Service-Details/Images/SVImage3.jpg'
import Image4 from '../Service-Details/Images/SVImage4.jpg'

import WOW from 'wowjs';
import 'animate.css';
import EmailForm from './EmailForm';
import countryImages from '../CountryDetails/countryImages';

const studyVisaSteps = [
    {
        title: "Finding a Job with Sponsorship",
        icon: "fa-briefcase",
        description: "Research companies that offer work visa sponsorships. Apply to roles that align with your skills and visa requirements."
    },
    {
        title: "Preparing Work Visa Documents",
        icon: "fa-file-alt",
        description: "Gather documents such as your resume, job offer letter, passport, and proof of qualifications and work experience."
    },
    {
        title: "Attending Visa Interviews",
        icon: "fa-comments",
        description: "Some countries require a visa interview. Be ready to discuss your job role, employer, and why you chose to work abroad."
    },
];
const studyVisaSteps2 = [
    {
        title: "Submit Your Work Visa Application",
        icon: "fa-file-signature",
        description: "Fill out your work visa application form, attach necessary documents, and pay the application fee for processing."
    },
    {
        title: "Undergo Biometrics and Health Checks",
        icon: "fa-user-check",
        description: "Complete biometric and medical tests as required. Ensure your health and security clearances are in place for approval."
    },
    {
        title: "Submit Employment & Travel Info",
        icon: "fa-hotel",
        description: "Submit details of your job contract, employer sponsorship, and travel plans to support your work visa application."
    },
    // {
    //     title: "Visa Decision & Pre-Departure Preparation",
    //     icon: "fa-plane-departure",
    //     description: "Once your visa is approved, prepare for departure by arranging flight tickets, currency exchange, and understanding arrival procedures."
    // }
];


export default function WorkVisa() {

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
                            <h3>Work Visa service </h3>
                            <p>
                                A work visa is an official document that allows individuals <br /> to legally work in a foreign country for a specific period.
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
                                    <li className="text-white font-bold">Work Visa</li>
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
                                        src={countryImages.australia3}
                                        className="rounded-b-full border-4 border-danger w-full max-h-[500px]"

                                        alt="Main Image"
                                    />
                                    {/* Overlay Image */}
                                    <img
                                        src={countryImages.australia4}
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
                            <div className="text-start lg:text-left max-w-2xl mb-auto md:mt-0">
                                <h1 className="font-bold text-[#B21E24] text-[32px] mb-3">
                                    Work Visa Services for Global Career Opportunities
                                </h1>
                                <p className="text-gray-700">
                                    At Flourish Alliance, we assist professionals in securing work visas to pursue career opportunities abroad. Our dedicated team ensures a seamless work visa application process, helping you achieve your international employment goals efficiently.
                                </p>
                                <div className="mt-3 space-y-3 text-gray-600">
                                    <p>
                                        <span className="font-bold text-dark">Visa Application Support: </span>
                                        Complete assistance to apply for work visas with accuracy and confidence.
                                    </p>
                                    <p>
                                        <span className="font-bold text-dark">Career Counseling: </span>
                                        Personalized advice to help you choose the right job opportunities and career paths abroad.
                                    </p>
                                    <p>
                                        <span className="font-bold text-dark">Document Preparation: </span>
                                        Help in organizing, verifying, and submitting essential documents for a successful application.
                                    </p>
                                </div>
                                {/* Skills Tags */}
                                <div className="pt-5 flex flex-wrap gap-3 justify-center lg:justify-start">
                                    {["Visa Application", "Career Counseling", "Document Assistance"].map(
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
                                    <h1 className="ServiceHeadingPro font-bold text-center">Why Choose Our <br /> Work Visa Services?</h1>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mt-md-2 m-0">
                                        <span className="badge-info badge rounded-pill px-3 py-1 my-2 font-weight-light">
                                            What We Do
                                        </span>
                                        <h4 className='font-semibold'>Secure Your Work Visa with Confidence</h4>
                                        <h6 className="subtitle">
                                            Expert visa processing, employer sponsorship guidance, legal compliance support, and personalized assistance from application to approval — we make your work visa journey smooth and successful.
                                        </h6>
                                        <div className="row md:mt-5">
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Employer Sponsorship Assistance</h6>
                                                <p className='text-black mt-2'>Get comprehensive support in securing employer sponsorship and fulfilling all legal requirements.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Visa Documentation</h6>
                                                <p className='text-black mt-2'>We assist in preparing, reviewing, and submitting all essential documents for a successful work visa application.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Legal Compliance</h6>
                                                <p className='text-black mt-2'>Ensure full compliance with immigration laws and work permit regulations of your destination country.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Relocation Assistance</h6>
                                                <p className='text-black mt-2'>Get expert advice on relocation, accommodation, and adapting to your new workplace environment.</p>
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
                                                        <img alt="Work Visa" className="rounded image-down img-shadow img-fluid w-full h-48 object-contain" src={Image1} />
                                                    </div>
                                                    <div className="col-md-12 img-hover mb-4 bg-white">
                                                        <img alt="Visa Processing" className="rounded image-down img-shadow img-fluid w-full h-48 object-contain" src={Image2} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 uneven-box">
                                                <div className="row">
                                                    <div className="col-md-12 img-hover mb-4 bg-white">
                                                        <img alt="Global Work Visa" className="rounded image-up img-shadow img-fluid w-full h-48 object-contain" src={Image3} />
                                                    </div>
                                                    <div className="col-md-12 img-hover mb-4 bg-white">
                                                        <img alt="Work Permit" className="rounded image-up img-shadow img-fluid w-full h-48 object-contain" src={Image4} />
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


                <div className="container-fluid px-2 feature">
                    <div className="container py-5">

                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
                            <h1 className="text-[28px] text-capitalize mb-3 font-bold">
                                Work Visa Assistance <span className="text-danger font-bold"> & Career Opportunities</span>
                            </h1>
                            <p className="mb-0 font-semibold">
                                Flourish Alliance Immigration offers expert assistance in securing work visas, ensuring a smooth and hassle-free process. Our team provides end-to-end support, from document preparation to visa application guidance, helping you unlock global career opportunities with ease.
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
                                        <div className="feature-item flex items-center p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-id-card-alt"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h5 className="mb-3 font-semibold">Work Visa Eligibility Assessment</h5>
                                                <p className="mb-0">
                                                    We evaluate your qualifications and guide you through visa requirements, ensuring a smooth application process.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="feature-item flex items-center p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-people-carry"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h5 className="mb-3 font-semibold">Employer Sponsorship Support</h5>
                                                <p className="mb-0">
                                                    We connect you with companies offering work visa sponsorships and assist with job applications and interviews.
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
                                                <h5 className="mb-3 font-semibold">Visa Interview Coaching</h5>
                                                <p className="mb-0">
                                                    Get expert coaching for your work visa interview to help you navigate tricky questions and improve approval chances.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="feature-item flex items-center justify-end p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-paper-plane"></i>
                                            </div>
                                            <div className="text-start ms-4">
                                                <h5 className="mb-3 font-semibold">Work Visa Application Guidance</h5>
                                                <p className="mb-0">
                                                    Receive guidance through every step of your work visa application, ensuring all forms are filled accurately for a fast approval.
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


                <div className="section-4 px-2">
                    <div className="container-fluid service overflow-hidden py-5">
                        <div className="container py-3">
                            <div
                                className="section-4__header text-center mx-auto pb-5 wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <h4 className="section-4__title text-uppercase text-danger font-bold text-[22px]">Our Service</h4>
                                <h1 className="section-4__main-title text-3xl font-bold mb-3">
                                    Get Your Work Visa with Expert Guidance
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


                <div className="ServiceForm  mx- w-full overflow-hidden">
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