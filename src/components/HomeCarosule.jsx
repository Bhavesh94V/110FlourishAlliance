import React, { useEffect } from 'react';
import '../assets/styles/HomeCarosule.css';
import img1 from '../assets/imgs/HomeSlider/img1.jpg';
import img2 from '../assets/imgs/HomeSlider/img2.jpg';
import img3 from '../assets/imgs/HomeSlider/img3.jpg';
import WOW from 'wowjs';
import 'animate.css';

export default function HomeCarousel() {

    const carouselData = [
        {
            imgSrc: img1,
            altText: "Immigration Opportunities",
            heading: "Start Your Immigration Journey",
            subHeading: "Explore new opportunities with expert guidance.",
            paragraph: "At Flourish Alliance Immigration, we specialize in providing tailored solutions for study visas, work permits, and permanent residency. Let us help you open doors to a brighter future.",
            buttonText: "Explore Our Services",
            link: "#services"
        },
        {
            imgSrc: img2,
            altText: "Work Visa Guidance",
            heading: "Secure Your Work Visa Today",
            subHeading: "Professional support for a seamless visa process.",
            paragraph: "Our team helps you navigate the complexities of work visa applications with confidence. Whether you're looking to work abroad or transition into permanent residency, we've got you covered.",
            buttonText: "Get Started",
            link: "#services"
        },
        {
            imgSrc: img3,
            altText: "Study Abroad Assistance",
            heading: "Achieve Your Study Abroad Dreams",
            subHeading: "The first step toward global education starts here.",
            paragraph: "Study abroad with the support of our expert consultants. From choosing the right course to visa processing, we ensure a smooth path to your academic goals.",
            buttonText: "Start Your Journey",
            link: "#services"
        }
    ];

    useEffect(() => {
        const wow = new WOW.WOW({
            live: false,
        });
        wow.init();
    }, []);

    useEffect(() => {
        const carousel = document.querySelector('#carouselId');
        const bootstrapCarousel = new window.bootstrap.Carousel(carousel, {
            interval: 5000,
            ride: 'carousel',
            pause: true,
        });

        const handleNavigation = () => {
            bootstrapCarousel.cycle();
        };

        const prevButton = carousel.querySelector('.carousel-control-prev');
        const nextButton = carousel.querySelector('.carousel-control-next');
        prevButton.addEventListener('click', handleNavigation);
        nextButton.addEventListener('click', handleNavigation);

        return () => {
            prevButton.removeEventListener('click', handleNavigation);
            nextButton.removeEventListener('click', handleNavigation);
        };
    }, []);

    return (
        <>
            <div className="carousel-header">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        {carouselData.map((_, index) => (
                            <li key={index} data-bs-target="#carouselId" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></li>
                        ))}
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        {carouselData.map((slide, index) => (
                            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                <img src={slide.imgSrc} className="img-fluid" alt={slide.altText} />
                                <div className="carousel-caption">
                                    <div className="p-3 wow animate__animated animate__zoomIn" style={{ maxWidth: '900px' }}>
                                        <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>
                                            {slide.heading}
                                        </h4>
                                        <h1 className="display-2 text-capitalize text-white mb-4">
                                            {slide.subHeading}
                                        </h1>
                                        <p className="mb-5 fs-5">
                                            {slide.paragraph}
                                        </p>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <a className="btn-hover-bg btn Discovernow rounded-pill text-white py-3 px-5" href={slide.link}>
                                                {slide.buttonText}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon btn bg-[#B21E24]" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon btn bg-[#B21E24]" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}
