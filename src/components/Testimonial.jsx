import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import img1 from "../assets/imgs/Testimonial/img1.jpg";
import img2 from "../assets/imgs/Testimonial/img2.jpg";
import img3 from "../assets/imgs/Testimonial/img3.jpg";
import img4 from "../assets/imgs/Testimonial/img4.jpg";
import img5 from "../assets/imgs/Testimonial/img5.jpg";
import img6 from "../assets/imgs/Testimonial/img6.jpg";
import '../assets/styles/Testimonial.css'
import WOW from 'wowjs';
import 'animate.css';
import Footer from './Footer';

export default function Testimonial() {
  useEffect(() => {
    const wow = new WOW.WOW({ live: false });
    wow.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: (
      <div className="slick-prev ">
        {/* <i className="fa fa-chevron-left"></i> */}
      </div>
    ),
    nextArrow: (
      <div className="slick-next">
        {/* <i className="fas fa-chevron-right"></i> */}
      </div>
    ),
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
    ],
  };


  const testimonials = [
    {
      name: "Amit Kumar",
      profession: "Web Developer",
      content:
        "The team at Flourish Alliance Immigration simplified the entire process for me. Their guidance was invaluable and helped me start my new career journey abroad.",
      image: img1,
    },
    {
      name: "Neha Patel",
      profession: "International Student",
      content:
        "Flourish Alliance Immigration made the admission process seamless. Their support was prompt, and they clarified every question I had about studying overseas.",
      image: img2,
    },
    {
      name: "Vikram Joshi",
      profession: "Entrepreneur",
      content:
        "Thanks to Flourish Alliance, I successfully expanded my business internationally. Their team provided expert advice at every step of the visa process.",
      image: img3,
    },
    {
      name: "Anjali Mehta",
      profession: "Graphic Designer",
      content:
        "I am grateful for the professional services of Flourish Alliance Immigration. They made my transition to a new country smooth and hassle-free.",
      image: img4,
    },
    {
      name: "Rohit Singh",
      profession: "Healthcare Professional",
      content:
        "Flourish Alliance Immigration provided excellent support throughout my visa process. Their expertise and dedication helped me achieve my goals.",
      image: img5,
    },
    {
      name: "Sneha Kapoor",
      profession: "Marketing Specialist",
      content:
        "I highly recommend Flourish Alliance Immigration for their exceptional service. They made a complicated process simple and stress-free for me.",
      image: img6,
    },
  ];

  return (
    <div style={{ background: `url(${bgImage})` }}>
      <div className="container-fluid testimonial overflow-hidden pb-3">
        <div className="container py-5">
          <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style">
              <h5 className="sub-title text-danger px-3 text-[28px] font-bold wow animate__animated animate__fadeInDown">CLIENTS REVIEWS</h5>
            </div>
            <h1 className="display-5 mb-2 TestimonialTitle font-bold text-[38px] wow animate__animated animate__fadeInDown">What Our Clients Say</h1>
          </div>
          <Slider {...settings} className='max-w-[95%] mx-auto'>
            {
              testimonials.map((testimonial, index) => (
                <div className="testimonial-item mt-4 " key={index}>
                  <div className="testimonial-content p-4 mb-5">
                    <p className="fs-5 mb-0 wow animate__animated animate__fadeInDown">{testimonial.content}</p>
                    <div className="d-flex justify-content-end">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-danger mt-2"></i>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="rounded-circle me-4" style={{ width: '100px', height: '100px', objectFit: "contain" }}>
                      <img
                        className="img-fluid"
                        src={testimonial.image}
                        alt={`Client Testimonial ${index}`}
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                    <div className="my-auto">
                      <h5 className='font-bold text-[22px]'>{testimonial.name}</h5>
                      <p className="mb-0">{testimonial.profession}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}
