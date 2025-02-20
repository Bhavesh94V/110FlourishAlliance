import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Footer.css";
import WOW from 'wowjs';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import 'animate.css';

const Footer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const wow = new WOW.WOW({ live: false });
        wow.init();
    }, []);

    const handleSubscribe = async () => {
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setMessage("Please enter a valid email.");
            return;
        }
        try {
            await addDoc(collection(db, "newsletterSubscriptions"), { email });
            setMessage(alert('Thank you for subscribing!'));
            setEmail("");
        } catch (error) {
            setMessage("Subscription failed. Please try again.");
        }
    };
    return (
        <div className="footer">
            <div className="container">
                <div className="newsletter">
                    <h2 className="animate__animated animate__fadeInDown ServicesTitle">Subscribe to Our Newsletter</h2>
                    <p className="text-white mb-2">Stay updated with the latest immigration news, policies, and opportunities.</p>
                    <div className="form">
                        <input
                            className="form-control"
                            placeholder="Enter your email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="btn ServicesTitle" onClick={handleSubscribe}>Subscribe</button>
                    </div>
                    {message && <p className="text-white mt-2">{message}</p>}
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="footer-about">
                            <h3 className="animate__animated animate__zoomIn">About Us</h3>
                            <p>
                                At Flourish Alliance Immigration, we are dedicated to guiding you through your immigration journey. With years of experience, we provide expert consultation and personalized solutions for study, work, and permanent residency visas.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-8">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="footer-link">
                                    <h3 className="animate__animated animate__zoomIn">Services</h3>
                                    <Link to="/service/study-visa">&#8594; Study Abroad</Link>
                                    <Link to="/service/work-visa">&#8594; Work Visas</Link>
                                    <Link to="/service/visitor-visa">&#8594; Visitor Visas</Link>
                                    <Link to="/service/business-visa">&#8594; Business Visas</Link>
                                    <Link to="/service/tour-package">&#8594; Tour Packages</Link>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="footer-link">
                                    <h3 className="animate__animated animate__zoomIn">Navigation</h3>
                                    <Link to="/">&#8594; Home</Link>
                                    <Link to="/AboutPage">&#8594; About Us</Link>
                                    <Link to="/ServicePage">&#8594; Services</Link>
                                    <Link to="/BlogPage">&#8594; Blog</Link>
                                    <Link to="/ContactPage">&#8594; Contact Us</Link>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="footer-contact">
                                    <h3 className="animate__animated animate__zoomIn">Contact Us</h3>
                                    <p><i className="fa fa-map-marker-alt"></i> 456 Avenue, Suite 789, Toronto, Canada</p>
                                    <p><i className="fa fa-phone-alt"></i> +1 234 567 8901</p>
                                    <p><i className="fa fa-envelope"></i> support@flourishalliance.com</p>
                                    <div className="footer-social">
                                        <a href="#"><i className="fab fa-twitter animate__animated animate__zoomIn"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f animate__animated animate__zoomIn"></i></a>
                                        <a href="#"><i className="fab fa-youtube animate__animated animate__zoomIn"></i></a>
                                        <a href="#"><i className="fab fa-instagram animate__animated animate__zoomIn"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in animate__animated animate__zoomIn"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container footer-menu">
                <div className="f-menu">
                    <Link className="text-[13px] flex animate__animated animate__zoomIn">Terms of Service <span className="ms-2">|</span></Link>
                    <Link className="text-[13px] flex animate__animated animate__zoomIn">Privacy Policy <span className="ms-2">|</span></Link>
                    <Link className="text-[13px] flex animate__animated animate__zoomIn">Disclaimer <span className="ms-2">|</span></Link>
                    <Link className="text-[13px] flex animate__animated animate__zoomIn">Help <span className="ms-2">|</span></Link>
                    <Link className="text-[13px] flex animate__animated animate__zoomIn">FAQs</Link>
                </div>
            </div>

            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6 animate__animated animate__zoomIn">
                        <p>&copy; <Link to="/">Flourish Alliance Immigration</Link>, All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6 animate__animated animate__zoomIn">
                        <p>
                            <Link to="/privacy-policy">Privacy Policy | </Link>
                            <Link to="/terms">Terms & Conditions</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
