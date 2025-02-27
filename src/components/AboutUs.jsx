import React, { useEffect } from 'react';
import '../assets/styles/Aboutus.css';
import img2 from '../assets/imgs/About-us/About-RAO.png';
import aboutBg from '../assets/imgs/About-us/aboutusbg.png';
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import bgplane from '../BlogDetails/chooseimgbg.png'
import WOW from 'wowjs';
import 'animate.css';
import { Link } from 'react-router-dom';

export default function AboutUs() {

    useEffect(() => {
        const wow = new WOW.WOW({
            live: false,
        });
        wow.init();
    }, []);


    return (
        <>
            <div>
                <div className="container-fluid about py-5 bg-[#ffffff]"
                    style={{
                        backgroundImage: `url(${bgplane})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: '90%',
                        backgroundPositionY: '10%',
                        animation: 'bgMove 2s infinite alternate ease-in-out'
                    }}
                >
                    <div className="text-center mx-auto About-title position-relative">
                        <h1 className="wow animate__animated animate__fadeInDown ServicesTitle">About Us</h1>
                        <h1 className="wow animate__animated animate__fadeInDown ServicesTitle aboutAnimation">Our Mission and Vision</h1>
                    </div>
                    <div className="container pt-5">

                        <div className="row g-5 align-items-center">
                            <div className="col-lg-5">
                                <div className="h-100" style={{ border: '50px solid', borderColor: 'transparent #B21E24 transparent #B21E24' }}>
                                    <img src='https://img.freepik.com/free-photo/tall-building-center-city_657883-758.jpg?t=st=1740140155~exp=1740143755~hmac=a29afdc590cf2d3d4bf979d7360ea5c317e4004213b1d520e07dd46982f2d8cc&w=740' className="img-fluid w-100 h-100 wow animate__animated animate__zoomIn" alt="About Image" style={{ maxHeight: "450px" }} />
                                </div>
                            </div>
                            <div className="col-lg-7 about-content py-2" style={{ background: `linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(${aboutBg})` }}>
                                {/* <h5 className="section-about-title pe-3 wow animate__animated animate__fadeInDown">About Us</h5> */}
                                <h1 className="mb-4 section-about-head wow animate__animated animate__fadeInDown">Welcome to <span className="text-[#B21E24]">Flourish Alliance</span></h1>
                                <p className="mb-4 AboutContent">At Flourish Alliance Immigration, we are committed to providing expert immigration consultancy services. With years of experience, our team helps individuals and families navigate the complex immigration process with ease and confidence. Whether you're looking to study, work, or settle abroad, we are here to guide you every step of the way.</p>
                                <p className="mb-4 AboutContent">Our services include visa consultancy, permanent residency assistance, citizenship applications, and more. We specialize in making your immigration journey smooth, transparent, and successful.</p>
                                <div className="row gy-2 gx-4 mb-4">
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-[#B21E24] me-2"></i>Personalized Immigration Solutions</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-[#B21E24] me-2"></i>Comprehensive Visa Guidance</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-[#B21E24] me-2"></i>Permanent Residency Assistance</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-[#B21E24] me-2"></i>Expert Citizenship Advice</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-[#B21E24] me-2"></i>Transparent Process</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-[#B21E24] me-2"></i>24/7 Customer Support</p>
                                    </div>
                                </div>
                                <Link className="btn Readmore rounded-pill py-3 px-5 mt-2 wow animate__animated animate__zoomIn About-Read-More liquid" to='/AboutPage'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
