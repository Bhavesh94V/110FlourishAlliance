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
        "title": "Choosing a Start-Up Business Idea",
        "icon": "fa-lightbulb",
        "description": "Identify a viable business idea based on market demand, your expertise, and potential for growth. Ensure it's innovative and feasible."
    },
    {
        "title": "Preparing Business Plan & Documents",
        "icon": "fa-file-alt",
        "description": "Prepare key documents such as your business plan, financial projections, market analysis, and proof of funds for your visa application."
    },
    {
        "title": "Start-Up Visa Interview Preparation",
        "icon": "fa-comments",
        "description": "Some countries require an interview for a Start-Up Visa. Be ready to explain your business concept, funding, and long-term goals."
    },
];
const studyVisaSteps2 = [
    {
        "title": "Filling Out the Start-Up Visa Application Form",
        "icon": "fa-pencil-alt",
        "description": "Complete the online Start-Up Visa application form, pay applicable fees, and upload your business plan and supporting documents."
    },
    {
        "title": "Biometrics and Medicals",
        "icon": "fa-stethoscope",
        "description": "Some countries require biometrics and medical tests as part of the Start-Up Visa application. Complete these for approval."
    },
    {
        "title": "Proof of Business Location & Travel Plans",
        "icon": "fa-map-marker-alt",
        "description": "Provide details of your business location, whether rented or owned, and your travel itinerary for the visa process."
    },
    // {
    //     title: "Visa Decision & Pre-Departure Preparation",
    //     icon: "fa-plane-departure",
    //     description: "Once your visa is approved, prepare for departure by arranging flight tickets, currency exchange, and understanding arrival procedures."
    // }
];



export default function StartUpVisa() {

    useEffect(() => {
        const wow = new WOW.WOW({ live: true });
        wow.init();
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        purpose: '',
        country: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Full name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.phone) errors.phone = 'Phone number is required';
        if (!formData.purpose) errors.purpose = 'Please select a purpose';
        if (!formData.country) errors.country = 'Please select a country';
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };


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
                            <h3>Start-Up Visa</h3>
                            <p>
                                Get expert guidance on your Start-Up Visa application. <br />
                                Turn your business dreams into reality!
                            </p>
                            <Link to="/ContactPage" className="contact-button bg-[#B21E24] p-2 rounded">
                                Get in Touch with Us Today
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
                                Start-Up Visa Services to Build Your Business Abroad
                            </h1>
                            <p className="text-gray-700">
                                At Flourish Alliance, we specialize in guiding entrepreneurs through the Start-Up Visa process, helping you establish your business in a foreign country. Our experienced team ensures a smooth and efficient application, from idea to execution.
                            </p>
                            <div className="mt-3 space-y-3 text-gray-600">
                                <p>
                                    <span className="font-bold text-dark">Visa Consultation: </span>
                                    Expert advice to navigate the Start-Up Visa process and maximize your chances of approval.
                                </p>
                                <p>
                                    <span className="font-bold text-dark">Business Planning: </span>
                                    Assistance in preparing your business plan to meet visa and investment requirements.
                                </p>
                                <p>
                                    <span className="font-bold text-dark">Document Support: </span>
                                    Guidance in compiling necessary documents like financial records, business plans, and personal information.
                                </p>
                            </div>
                            {/* Skills Tags */}
                            <div className="about-skills pt-5 flex flex-wrap gap-3 justify-center lg:justify-start">
                                {["Visa Consultation", "Business Planning", "Document Support"].map(
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


                {/* Section 1 */}




                {/* Section 2 */}



                <div className="ServiceContent">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-10 col-11 mx-auto">
                                <div className="mt-2 mb-5 text-center">
                                    <h1 className="ServiceHeadingPro font-bold text-center">Why Choose Our <br /> Start-up Visa Services?</h1>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mt-md-2 m-0">
                                        <span className="badge-info badge rounded-pill px-3 py-1 my-2 font-weight-light">
                                            What We Do
                                        </span>
                                        <h4>Turn Your Start-Up Vision into Reality</h4>
                                        <h6 className="subtitle">
                                            Expert advice, seamless visa application processing, business planning, and complete support from ideation to execution — we make your start-up journey abroad successful and hassle-free.
                                        </h6>
                                        <div className="row md:mt-5">
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Business Planning & Strategy</h6>
                                                <p className='text-black mt-2'>Get guidance to develop a solid business plan tailored for your Start-Up Visa application.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Visa Documentation</h6>
                                                <p className='text-black mt-2'>Assistance with preparing all required documents for your Start-Up Visa application.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Investment & Funding</h6>
                                                <p className='text-black mt-2'>Explore various investment opportunities and funding options to launch your business abroad.</p>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <h6 className="text-black font-semibold">Pre-Departure Support</h6>
                                                <p className='text-black mt-2'>Receive valuable tips on relocating, business setup, and adapting to a new market.</p>
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
                                                            alt="Start-Up Visa"
                                                            className="rounded image-down img-shadow img-fluid"
                                                            src={StudyAustralia}
                                                        />
                                                    </div>
                                                    <div className="col-md-12 img-hover mb-4">
                                                        <img
                                                            alt="Business Services"
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
                                                            alt="Visa Process"
                                                            className="rounded image-up img-shadow img-fluid"
                                                            src={StudyUK}
                                                        />
                                                    </div>
                                                    <div className="col-md-12 img-hover mb-4">
                                                        <img
                                                            alt="Start-Up Support"
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
                                Start-Up Funding Assistance <span className="text-danger font-bold"> & Business Interview Coaching</span>
                            </h1>
                            <p className="mb-0 font-semibold">
                                We offer expert guidance on securing funding for your start-up, along with personalized interview coaching to help you succeed in your Start-Up Visa application. Let us help you take your business idea to the next level!
                            </p>
                        </div>

                        {/* Features Section */}
                        <div className="row g-4 align-items-center">

                            <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                                <img src={StudyVisa} className="img-fluid h-[330px] object-cover rounded-lg" alt="Start-Up Features" />
                            </div>

                            <div className="col-xl-4">
                                <div className="row gy-4 gx-0">
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="feature-item flex items-center p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-money-bill-wave"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h5 className="mb-3 font-semibold">Start-Up Funding Assistance</h5>
                                                <p className="mb-0">
                                                    We assist you in securing funding for your start-up through various grants and investment opportunities.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="feature-item flex items-center p-4 shadow rounded-lg">
                                            <div className="feature-icon text-danger text-3xl">
                                                <i className="fas fa-business-time"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h5 className="mb-3 font-semibold">Business Strategy & Planning</h5>
                                                <p className="mb-0">
                                                    Get personalized advice and strategies to structure your business plan, ensuring success in your start-up journey.
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
                                                <h5 className="mb-3 font-semibold">Start-Up Visa Interview Preparation</h5>
                                                <p className="mb-0">
                                                    Expert guidance to help you prepare for your Start-Up Visa interview with confidence and precision.
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
                                                <h5 className="mb-3 font-semibold">Common Start-Up Visa Interview Questions</h5>
                                                <p className="mb-0">
                                                    Prepare for your Start-Up Visa interview with a curated list of common questions and tips on how to answer effectively.
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
                                    Get Your Start-up Visa with Expert Guidance
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