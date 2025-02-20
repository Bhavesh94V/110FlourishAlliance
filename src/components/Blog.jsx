import React, { useEffect } from 'react';
import '../assets/styles/Blog.css';
import img1 from '../assets/imgs/Blog/img1.jpg';
import img2 from '../assets/imgs/Blog/img2.jpg';
import img3 from '../assets/imgs/Blog/img3.jpg';
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import { Link } from 'react-router-dom';
import WOW from 'wowjs';
import 'animate.css';
import Testimonial from './Testimonial';

export default function Blog() {
    useEffect(() => {
        const wow = new WOW.WOW({
            live: false,
        });
        wow.init();
    }, []);

    const blogPosts = [
        {
            img: img1,
            date: '3 Jan 2025',
            title: 'The Future of Studying Abroad: Opportunities in Australia',
            description: 'As the world is getting more and more linked, the prospect of moving abroad for studying or for work abroad has become a life-changing experience for those looking for academic success and worldwide professional ...',
            link: '/Blog/1'
        },
        {
            img: img2,
            date: '10 Jan 2025',
            title: 'How to Navigate the Australia PR Application Process ?',
            description: 'Australia has established as a top choice for qualified professionals, students, and families globally. It is known for its strong economy, outstanding healthcare, high-quality education, and hospitable culture, as well as ...',
            link: '/Blog/2'
        },
        {
            img: img3,
            date: '5 Jan 2025',
            title: 'How Studying in Australia can Impact PR Application Success?',
            description: 'Australia ranks as the third most preferred destination for Indian students among various countries worldwide. Every year, hundreds of thousands of Indian students choose Australia for its high-quality education and lifestyle. As ...',
            link: '/Blog/3'
        }
    ];

    return (
        <>
            <div>
                <div className="container-fluid blog Blog-Start" style={{ backgroundImage: `url(${bgImage})` }}>
                    <div className="container py-3">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                            <h4 className="FromBlog wow animate__animated animate__fadeInDown" data-wow-delay="0.2s">From Blog</h4>
                            <h1 className="mb-4 BlogMainTitle wow animate__animated animate__fadeInDown BlogTitle" data-wow-delay="0.3s">News And Updates</h1>
                            <p className="mb-0 mx-auto wow animate__animated animate__fadeInDown max-w-[600px]" data-wow-delay="0.4s">Discover a world where ideas ignite, stories inspire, and knowledge transforms. Expert Insights and Strategic Solutions for Your Success.</p>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {blogPosts.map((blog, index) => (
                                <div key={index} className="col-lg-6 col-xl-4 wow fadeInUp BlogInnerContainer" data-wow-delay={`${0.2 * (index + 1)}s`}>
                                    <div className="blog-item BlogMainshadow wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                                        <div className="blog-img">
                                            <img src={blog.img} className="img-fluid w-100" alt={`Blog ${index + 1}`} />
                                            <div className="blog-categiry py-2 px-4">
                                                <span>Business</span>
                                            </div>
                                        </div>
                                        <div className="blog-content p-4">
                                            <div className="blog-comment d-flex justify-content-between mb-3">
                                                <div className="text-[22px] text-[#B21E24]">
                                                    <h2>Flourish Alliance</h2>
                                                </div>
                                                <div className="small">
                                                    <span className="fa fa-calendar text-[#B21E24]"></span> {blog.date}
                                                </div>
                                            </div>
                                            <Link to={blog.link} className="h4 d-inline-block mb-3">{blog.title}</Link>
                                            <p className="mb-3">{blog.description}</p>
                                            <Link to={blog.link} className="btn ReadMore-Btn liquid ReadMore">Read More  <i className="fa fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
