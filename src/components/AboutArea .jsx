import React, { useEffect } from "react";
import "../assets/styles/AboutArea.css";
import carousel1 from "../assets/imgs/AboutArea/cardpassport.jpg";
import carousel2 from "../assets/imgs/FactsAndFeatures/Facts2.jpg";
import WOW from 'wowjs';
import 'animate.css';
import LogosSection from "./LogosSection ";

const features = [
    {
        icon: "fa-graduation-cap",
        title: "Student Visas",
        description: "Pursue your education abroad seamlessly with our expert guidance.",
        delay: "0.2s",
    },
    {
        icon: "fa-passport",
        title: "Immigration Visas (Canada & Australia PR)",
        description: "Turn your dream of living abroad into reality with our support.",
        delay: "0.6s",
    },
    {
        icon: "fa-globe-europe",
        title: "Germany / Portugal Visas",
        description: "Visit Germany or Portugal without a job offer and explore opportunities.",
        delay: "0.4s",
    },
    {
        icon: "fa-suitcase",
        title: "Non-Immigration Visas",
        description: "Get the visa you need (visit, work, or explore) for any country.",
        delay: "0.8s",
    },
    {
        icon: "fa-briefcase",
        title: "Work Visas",
        description: "Secure the right work visa to take your career to new heights abroad.",
        delay: "0.5s",
    },
    {
        icon: "fa-building",
        title: "Business Visas",
        description: "Expand your business globally with the right business visa options.",
        delay: "0.9s",
    },
    {
        icon: "fa-heart",
        title: "Family Visas",
        description: "Reunite with your loved ones through efficient family visa options.",
        delay: "0.7s",
    },
    {
        icon: "fa-id-card",
        title: "Visitor Visa",
        description: "Enjoy living abroad with a visitor visa – your first step towards permanent residency!",
        delay: "0.6s",
    },
    {
        icon: "fa-handshake",
        title: "Investor Visas",
        description: "Make profitable investments and gain residence through investor visas.",
        delay: "0.5s",
    },
];

export default function AboutArea() {

    useEffect(() => {
        const wow = new WOW.WOW({
            live: false,
        });
        wow.init();
    }, []);

    return (
        <>
            <div className="container-fluid AboutAreaCOntainer pb-0  wow fadeInDown" data-wow-delay="0.3s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                        <h5 className="font-bold text-[22px] text-uppercase WhyChoose wow animate__animated animate__fadeInDown">Why Choose Us</h5>
                        <h1 className="mb-0 mainHead wow animate__animated animate__fadeInDown">Simplifying Your Global Journey with Expert Guidance</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 wow animate__animated animate__zoomIn">
                            <div className="row g-5 mx-auto">
                                {
                                    features.slice(0, 2).map((feature, index) => (
                                        <FeatureBox key={index} feature={feature} />
                                    ))
                                }
                            </div>
                        </div>

                        <div className="col-lg-4 wow animate__animated animate__zoomIn">
                            <div className="row g-5 mx-auto">
                                {
                                    features.slice(2, 4).map((feature, index) => (
                                        <FeatureBox key={index} feature={feature} />
                                    ))
                                }
                            </div>
                        </div>

                        <div className="col-lg-4 wow zoomIn wow animate__animated animate__zoomIn" data-wow-delay="0.1s" style={{ minHeight: "350px" }}>
                            <div className="position-relative img-div h-100">
                                <img className="position-absolute w-100 h-100 rounded" src={carousel1} alt="Travel Agency" style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 mt-2">
                        <div className="col-lg-4 wow zoomIn wow animate__animated animate__zoomIn" data-wow-delay="0.1s" style={{ minHeight: "350px" }}>
                            <div className="position-relative img-div h-100">
                                <img className="position-absolute w-100 h-100 rounded" src={carousel2} alt="Travel Agency" style={{ objectFit: "cover" }} />
                            </div>
                        </div>

                        <div className="col-lg-4 wow animate__animated animate__zoomIn">
                            <div className="row g-5 mx-auto">
                                {
                                    features.slice(4, 6).map((feature, index) => (
                                        <FeatureBox key={index} feature={feature} />
                                    ))
                                }
                            </div>
                        </div>

                        <div className="col-lg-4 wow animate__animated animate__zoomIn">
                            <div className="row g-5 mx-auto">
                                {
                                    features.slice(6, 8).map((feature, index) => (
                                        <FeatureBox key={index} feature={feature} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function FeatureBox({ feature }) {
    return (
        <div className="col-12 wow zoomIn" data-wow-delay={feature.delay}>
            <div className="ServicesPro rounded d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px", transition: "all 0.3s ease" }}>
                <i className={`fa ${feature.icon} text-white`}></i>
            </div>
            <h4 className="titlePro">{feature.title}</h4>
            <p className="mb-0">{feature.description}</p>
        </div>
    );
}
