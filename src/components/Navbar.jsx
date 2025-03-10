import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import brandLogo from '../assets/imgs/Brand-Logo/Brand-Logo3.png';
import WOW from 'wowjs';
import 'animate.css';

const navbarConfig = {
    contactInfo: [
        { icon: "fas fa-envelope", text: "info@flourishalliiance.com", href: "mailto:info@flourishalliiance.com" },
        { icon: "fas fa-phone-alt", text: "+91 75739-66606 ", href: "tel:+75739-66606   " },
    ],
    socialMedia: [
        { name: "twitter", href: "https://x.com/flourish_amd" },
        { name: "linkedin-in", href: "https://www.linkedin.com/in/flourish-alliance-034536341/" },
        { name: "instagram", href: "https://www.instagram.com/flourish_allince/" }
    ],
    navLinks: [
        { name: "Home", to: "/" },
        { name: "About Us", to: "/AboutPage" },
        { name: "Services", to: "/ServicePage" },
        { name: "Blog", to: "/BlogPage" },
        { name: "Opportunity", to: "/CareersPage" },
        { name: "Contact Us", to: "/ContactPage" },
    ],
};

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const wow = new WOW.WOW({ live: true });
        wow.init();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === "/") {
                setIsScrolled(window.scrollY > 300);
            } else {
                setIsScrolled(true);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const closeNavbar = () => {
        const navbarCollapse = document.getElementById('navbarCollapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    };

    return (
        <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
            {/* Top Bar */}
            <div className="container-fluid navbartop px-5 d-none d-lg-block">
                <div className="row gx-0 align-items-center">
                    <div className="col-lg-5 text-center text-lg-start">
                        <div className="d-flex">
                            {
                                navbarConfig.contactInfo.map((info, idx) => (
                                    <a
                                        key={idx}
                                        href={info.href}
                                        className="text-white me-4 animate__animated animate__zoomIn"
                                    >
                                        <i className={`${info.icon} text-white me-2`}></i>
                                        {info.text}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-lg-3 text-center">
                        <div className="d-inline-flex gap-2 align-items-center" style={{ height: "45px" }}>
                            {
                                navbarConfig.socialMedia.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-7 p-3 h-7 rounded-full border border-white text-white transition-all duration-300 hover:scale-105"
                                    >
                                        <i className={`fab fa-${social.name} text-lg`}></i>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: "45px" }}>
                            <Link to='/ContactPage' className="text-white me-2 animate__animated animate__zoomIn">Help</Link>
                            <small className="text-white">/</small>
                            <Link to='/BookNowPage' className="text-white mx-2 animate__animated animate__zoomIn">Appointment</Link>
                            <small className="text-white">/</small>
                            <Link to='/ContactPage' className="text-white ms-2 animate__animated animate__zoomIn">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className="container-fluid nav-bar relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-0 py-lg-0">
                    <a
                        onClick={() => navigate("/")}
                        className="navbar-brand p- "
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={brandLogo} className="img-fluid animate__animated animate__zoomIn" alt="Brand Logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse ps-5 navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            {
                                navbarConfig.navLinks.map((link, idx) => (
                                    <Link
                                        key={idx}
                                        to={link.to}
                                        className="nav-item nav-link visible animate__animated animate__zoomIn"
                                        style={{ textDecoration: 'none' }}
                                        onClick={closeNavbar}
                                    >
                                        {link.name}
                                    </Link>
                                ))
                            }
                        </div>
                        <Link
                            to={`/BookNowPage`}
                            className="btn Discovernow rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0 visible animate__animated animate__zoomIn"
                            onClick={closeNavbar}
                        >
                            Book Your Consultation
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}
