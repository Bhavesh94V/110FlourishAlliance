import React, { useEffect } from 'react';
import '../assets/styles/Blog.css';
import blogimg1 from "../assets/imgs/Blog/blogimg1.jpg";
import blogimg2 from "../assets/imgs/Blog/blogimg2.jpg";
import blogimg3 from "../assets/imgs/Blog/blogimg3.jpg";
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
            img: blogimg1,
            date: new Date().toLocaleDateString(),
            title: 'Opportunities for Global Education',
            description: 'Explore how studying or working abroad can transform lives, offering academic success and global career growth through immersive experiences and access to world-class education and professional networks.',
            link: '/Blog/1'
        },
        {
            img: blogimg2,
            date: new Date().toLocaleDateString(),
            title: 'Success with Study Visas',
            description: 'Australia is a leading destination for professionals, students, and families, offering a strong economy, excellent healthcare, high-quality education, and a welcoming culture, making it perfect for international opportunities.',
            link: '/Blog/2'
        },
        {
            img: blogimg3,
            date: new Date().toLocaleDateString(),
            title: 'Pathway to Global Education',
            description: 'Australia is a top choice for Indian students seeking quality education and vibrant lifestyles, attracting thousands each year with its excellent institutions, dynamic multicultural environment, and career growth opportunities.',
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
