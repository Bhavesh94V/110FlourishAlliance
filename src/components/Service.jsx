import React, { useEffect } from 'react';
import '../assets/styles/Service.css';
import WOW from 'wowjs';
import 'animate.css';
import { Link } from 'react-router-dom';

import { ReactComponent as Countries } from '../assets/imgs/Service/countries.svg';
import { ReactComponent as Family } from '../assets/imgs/Service/Family.svg';
import { ReactComponent as Job } from '../assets/imgs/Service/job.svg';
import { ReactComponent as Passport } from '../assets/imgs/Service/passport.svg';
import { ReactComponent as Transition } from '../assets/imgs/Service/transition.svg';
import { ReactComponent as AirTicket } from '../assets/imgs/Service/AirTicket.svg';
import { ReactComponent as PassportSeva } from '../assets/imgs/Service/PassportSeva.svg';
import { ReactComponent as StartUpVisa } from '../assets/imgs/Service/StartUpVisa.svg';

export default function Service() {
    useEffect(() => {
        const wow = new WOW.WOW({ live: false });
        wow.init();
    }, []);

    const services = [
        {
            id: 1,
            title: 'Study Visa',
            description: 'Allows students to study abroad, gain global education, and explore new opportunities.',
            icon: <Countries className="svg-icon" />,
        },
        {
            id: 2,
            title: 'Work Visa',
            description: 'Work Visa allows you to work legally in another country for a specific period of Time',
            icon: <Family className="svg-icon" />,
        },
        {
            id: 3,
            title: 'Visitor Visa',
            description: 'Visitor Visa allows short-term travel to explore, meet family, or attend events in another country.',
            icon: <Job className="svg-icon" />,
        },
        {
            id: 4,
            title: 'Business Visa',
            description: 'Business Visa allows entrepreneurs, professionals, or investors to travel for work or meetings abroad.',
            icon: <Passport className="svg-icon" />,
        },
        {
            id: 5,
            title: 'Tour Package',
            description: 'Tour Package offers organized trips with transportation and activities for an easy vacation experience.',
            icon: <Transition className="svg-icon" />,
        },
        {
            id: 6,
            title: 'Air Ticket',
            description: 'Air Ticket service helps you book flights for domestic or international travel at affordable rates.',
            icon: <AirTicket className="svg-icon" />,
        },
        {
            id: 7,
            title: 'Passport Service',
            description: 'Get assistance for passport applications, renewals, and related services.',
            icon: <PassportSeva className="svg-icon" />,
        },
        {
            id: 8,
            title: 'Start-Up Visa',
            description: 'Helps entrepreneurs establish startups abroad with residency options.',
            icon: <StartUpVisa className="svg-icon" />,
        },
    ];

    return (
        <div className="AboutAreaContainer">
            <div className="container-fluid pb-5">
                <div className="container">
                    <div className="text-center mx-auto Service-title position-relative" style={{ maxWidth: '500px' }}>
                        <h1 className="ServicesTitle mb-5 pb-2 wow animate__animated animate__fadeInDown">
                            We Provide Professional Immigration Services
                        </h1>
                    </div>
                    <div className="row gap-y-10 justify-content-center text-start">
                        {
                            services.map((service, index) => (
                                <div
                                    className="col-lg-3 col-md-6 d-flex justify-content-center mt-4 animate__animated animate__zoomIn"
                                    key={service.id}
                                >
                                    <div className="service-item rounded h-100 px-4 py-2" style={{ maxWidth: "320px", minHeight: "280px" }}>
                                        <div className="d-flex align-items-center ms-n3 mb-2">
                                            <div className="service-icon flex-shrink-0 rounded-end">{service.icon}</div>
                                            <h5 className="mb-0 Immigration-Heads ms-2 ">{service.title}</h5>
                                        </div>
                                        <p className="mb-4 text-start">{service.description}</p>
                                        <Link to={`/service/${service.title.replace(/\s+/g, '-').toLowerCase()}`} className="btn Service-Read-More liquid px-3 mb-0">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}
