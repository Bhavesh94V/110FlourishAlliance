import React, { useState, useEffect } from "react";
import "../assets/styles/FactsAndFeatures.css";
import carousel1 from "../assets/imgs/FactsAndFeatures/TravelAgency.jpg";
import carousel2 from "../assets/imgs/FactsAndFeatures/Facts2.jpg";
import AboutArea from "./AboutArea ";

export default function KeyHighlights() {
    const [counters, setCounters] = useState({
        clients: 0,
        projects: 0,
        awards: 0,
        teamMembers: 0,
    });

    useEffect(() => {
        const targetCounts = {
            clients: 1500,
            projects: 1200,
            awards: 650,
            teamMembers: 500,
        };

        const duration = 2000;
        const increment = 50;

        const interval = setInterval(() => {
            setCounters((prevCounters) => {
                const updatedCounters = { ...prevCounters };

                Object.keys(targetCounts).forEach((key) => {
                    if (prevCounters[key] < targetCounts[key]) {
                        updatedCounters[key] = Math.min(
                            prevCounters[key] + Math.ceil(targetCounts[key] / (duration / increment)),
                            targetCounts[key]
                        );
                    }
                });

                if (
                    Object.values(updatedCounters).every(
                        (value, index) =>
                            value === Object.values(targetCounts)[index]
                    )
                ) {
                    clearInterval(interval);
                }

                return updatedCounters;
            });
        }, increment);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div>
                <div className="container-fluid overflow-hidden KeyHighlights px-lg-0">
                    <div className="container facts px-lg-0">
                        <div className="row g-0 mx-lg-0">

                            <div
                                className="col-lg-6 facts-text"
                                style={{
                                    background: `linear-gradient(rgba(178, 30, 36, 0.3), rgba(178, 30, 36, 0.3)), url(${carousel1}) center right no-repeat`,
                                    backgroundSize: "cover",
                                }}
                            >
                                <div className="h-100 px-4 ps-lg-0">
                                    <h1 className="text-white mb-4 IndividualsOrg">
                                        Empowering Dreams with Expert Solutions
                                    </h1>
                                    <p className="text-light mb-5">
                                        At Flourish Alliance , we specialize in simplifying the complex
                                        world of immigration. Whether you're an individual seeking
                                        opportunities abroad or a business looking for global
                                        expansion, our expert team is here to guide you every step of
                                        the way.
                                    </p>
                                    <a
                                        href="#"
                                        className="align-self-start btn liquid More-Details-btn border bg-transparent hover:bg-[#871216] py-3 px-5"
                                    >
                                        More Details
                                    </a>
                                </div>
                            </div>


                            <div
                                className="col-lg-6 facts-counter"
                                style={{
                                    background: `linear-gradient(rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), url(${carousel2}) center right no-repeat`,
                                    backgroundSize: "cover",
                                }}
                            >
                                <div className="h-100 px-4 pe-lg-0 counterUp">
                                    <div className="row g-5">
                                        <div className="col-sm-6">
                                            <h1 className="display-5">{counters.clients}+</h1>
                                            <p className="fs-5">Happy Clients</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <h1 className="display-5">{counters.projects}+</h1>
                                            <p className="fs-5">Projects Succeed</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <h1 className="display-5">{counters.awards}+</h1>
                                            <p className="fs-5">Awards Won</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <h1 className="display-5">{counters.teamMembers}+</h1>
                                            <p className="fs-5">Expert Team Members</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
