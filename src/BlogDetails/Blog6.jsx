import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import blogimg6 from "../assets/imgs/Blog/blogimg6.jpg";
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import Footer from '../components/Footer';
import chooseimgbg from '../BlogDetails/chooseimgbg.png';
import LogosSection from "../components/LogosSection ";
import Comment from './Comment';
import { Link } from 'react-router-dom';

export default function Blog6() {

    const [newsletterEmail, setNewsletterEmail] = useState('');

    const handleSubmit2 = async (e) => {
        e.preventDefault();
        if (!newsletterEmail) return alert('Please enter your email');
        await addDoc(collection(db, 'newsletterSubscriptions'), { email: newsletterEmail });
        alert('Subscribed successfully!');
        setNewsletterEmail('');
    };

    return (
        <div className="pt-5 bg-cover bg-center min-h-screen Blog-Details" style={{ backgroundImage: `url(${bgImage})` }}>

            <div class="bg-[#B21E24] lg:mt-[109px] md:mt-[50px] py-5 bg-custom mt-custom">
                <div class="container mx-auto text-white px-5">
                    <div class="flex flex-col items-start justify-between">
                        <div class='border-b border-dashed py-3'>
                            <h1 class="text-4xl font-semibold md:mt-[10px]">Study Abroad</h1>
                        </div>
                        <div class="max-w-3xl mt-4 md:mt-0">
                            <p class="text-lg">
                                Turn your dreams of studying abroad into reality with professional support.
                                Get expert guidance on applications, visas, and university selection to make your journey seamless.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-100 py-3">
                <div class="container mx-auto">
                    <nav class="text-sm text-gray-600">
                        <ol class="flex space-x-2">
                            <li>
                                <Link to='/' class="text-danger hover:underline">Home</Link>
                            </li>
                            <span>/</span>
                            <li>
                                <Link to='/BlogPage' class="text-danger hover:underline">Blog</Link>
                            </li>
                            <span>/</span>
                            <li>
                                <span class="text-gray-500">Study Abroad</span>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>



            <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-6">
                <main className="w-full lg:w-3/4">
                    <article className="bg-white rounded-lg overflow-hidden">
                        <div className="post-img mb-4">
                            <img src={blogimg6} alt="" className='w-full h-auto rounded-t-lg' />
                        </div>

                        <div className='bg-white px-5 pt-3 rounded-lg mb-5'>
                            <h2 className="text-4xl font-bold my-5 text-danger text-center">
                                Your Ultimate Guide to Studying Abroad: <br /> Everything You Need to Know
                            </h2>
                            <blockquote className="border-l-4 border-danger pl-4 italic mb-4">
                                <p>
                                    "With the right guidance, your dreams of living and studying abroad can become a reality."
                                </p>
                            </blockquote>
                            <div className="content mb-4">
                                <h3 className="text-2xl font-semibold mb-2 text-danger">1. Why Study Abroad?</h3>
                                <p className="mb-4">
                                    Studying abroad offers a unique opportunity to gain a world-class education, experience new cultures, and develop a global perspective. Whether it’s for undergraduate, postgraduate, or short-term courses, international education can transform your career and personal growth.
                                </p>

                                <h3 className="text-2xl font-semibold mb-2 text-danger">2. Popular Study Destinations</h3>
                                <ul className="list-disc pl-5 mb-4">
                                    <li><strong>Canada:</strong> Known for high-quality education and a welcoming environment.</li>
                                    <li><strong>USA:</strong> Offers a diverse range of programs and top-ranked universities.</li>
                                    <li><strong>UK:</strong> Home to historic institutions and globally recognized degrees.</li>
                                    <li><strong>Australia:</strong> Famous for research opportunities and student-friendly policies.</li>
                                    <li><strong>Germany:</strong> Provides affordable education with strong technical programs.</li>
                                </ul>

                                <h3 className="text-2xl font-semibold mb-2 text-danger">3. How to Choose the Right Program</h3>
                                <p className="mb-4">
                                    Consider your career goals, interests, and the course curriculum. Research universities, compare program lengths, and evaluate the potential return on investment. Consulting with education advisors can help align your academic choices with your career aspirations.
                                </p>

                                <div style={{ backgroundImage: `url(${chooseimgbg})`, backgroundPositionX: '350px', backgroundRepeat: 'no-repeat', backgroundPositionY: '20px' }}>
                                    <h3 className="text-2xl font-semibold mb-2 text-danger">4. Essential Documents for Study Visa</h3>
                                    <ul className="list-disc pl-5 mb-4">
                                        <li>Valid passport</li>
                                        <li>Offer letter from an accredited institution</li>
                                        <li>Proof of financial stability</li>
                                        <li>Academic transcripts and certificates</li>
                                        <li>Language proficiency test results (e.g., IELTS, TOEFL)</li>
                                        <li>Statement of Purpose (SOP)</li>
                                        <li>Medical examination and health insurance</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-semibold mb-2 text-danger">5. Financial Planning & Scholarships</h3>
                                <p className="mb-4">
                                    Studying abroad can be expensive, but scholarships, grants, and financial aid can ease the burden. Research scholarship opportunities, apply early, and consider part-time work options if allowed by your study visa.
                                </p>

                                <h3 className="text-2xl font-semibold mb-2 text-danger">6. Preparing for Life Abroad</h3>
                                <ul className="list-disc pl-5 mb-4">
                                    <li><strong>Accommodation:</strong> Research on-campus and off-campus housing.</li>
                                    <li><strong>Culture:</strong> Learn about local customs, traditions, and lifestyle.</li>
                                    <li><strong>Health & Safety:</strong> Secure health insurance and understand emergency contacts.</li>
                                    <li><strong>Networking:</strong> Connect with student communities and support groups.</li>
                                </ul>

                                <h3 className="text-2xl font-semibold mb-2 text-danger">7. Final Thoughts</h3>
                                <p className="mb-4">
                                    Studying abroad is a life-changing experience that offers immense academic, personal, and professional growth. With proper planning, guidance, and a proactive approach, you can make the most of this opportunity and set a strong foundation for your future.
                                </p>
                            </div>
                        </div>
                    </article>

                    <Comment></Comment>
                </main>
                <aside className="w-full lg:w-1/4 h-fit bg-white p-5 rounded-lg shadow-md">
                    <div class="">
                        <div class="mb-8">
                            <h3 class="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                <i class="fas fa-blog text-danger mr-2"></i> Other Blogs
                            </h3>

                            <ul class="space-y-4">

                                <li>
                                    <Link
                                        to='/Blog/7'
                                        class="text-gray-600 flex items-center group transition duration-300"
                                    >
                                        <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                                        <span class="group-hover:text-danger">Study Visa Success Stories</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to='/Blog/8'
                                        class="text-gray-600 flex items-center group transition duration-300"
                                    >
                                        <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                                        <span class="group-hover:text-danger">Achieving Educational Dreams Abroad</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to='/Blog/9'
                                        class="text-gray-600 flex items-center group transition duration-300"
                                    >
                                        <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                                        <span class="group-hover:text-danger">Expert Guidance & Study Visas</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to='/Blog/1'
                                        class="text-gray-600 flex items-center group transition duration-300"
                                    >
                                        <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                                        <span class="group-hover:text-danger">Global Education</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to='/Blog/2'
                                        class="text-gray-600 flex items-center group transition duration-300"
                                    >
                                        <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                                        <span class="group-hover:text-danger"> Study Visas</span>
                                    </Link>
                                </li>

                            </ul>


                        </div>

                        <hr /><br />

                        <div class="mb-8">

                            <h3 class="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                <i class="fas fa-headset text-danger mr-2"></i> Contact a Consultant
                            </h3>

                            <p class="text-gray-600 mb-4">
                                Need expert advice on immigration? Get in touch with our experienced consultants.
                            </p>
                            <Link to='/ContactPage'>
                                <button class="bg-danger text-white px-4 py-2 rounded-lg hover:bg-danger-dark hover:scale-105 transition duration-300">
                                    <i class="fas fa-envelope mr-2"></i> Contact Us
                                </button>
                            </Link>
                        </div>

                        <hr /><br />

                        <div class="mb-8">
                            <h3 class="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                <i class="fas fa-envelope-open-text text-danger mr-2"></i> Subscribe to Newsletter
                            </h3>
                            <form class="space-y-4" onSubmit={handleSubmit2}>
                                <input
                                    type="email"
                                    class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-danger transition duration-300"
                                    placeholder="Your Email Address"
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    class="bg-danger text-white px-4 py-2 rounded-lg hover:bg-danger-dark hover:scale-105 transition duration-300 w-full"
                                >
                                    <i class="fas fa-paper-plane mr-2"></i> Subscribe
                                </button>
                            </form>
                        </div>

                        <hr /><br />

                        {/* Social Media Links */}
                        <div>
                            <h3 class="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                <i class="fas fa-share-alt text-danger mr-2"></i> Follow Us
                            </h3>
                            <div class="flex space-x-4">
                                <Link
                                    to='/Blog/2'
                                    class="text-gray-600 hover:text-danger text-2xl transition duration-300"
                                >
                                    <i class="fab fa-facebook"></i>
                                </Link>
                                <Link
                                    to='/Blog/2'
                                    class="text-gray-600 hover:text-danger text-2xl transition duration-300"
                                >
                                    <i class="fab fa-twitter"></i>
                                </Link>
                                <Link
                                    to='/Blog/2'
                                    class="text-gray-600 hover:text-danger text-2xl transition duration-300"
                                >
                                    <i class="fab fa-linkedin"></i>
                                </Link>
                                <Link
                                    to='/Blog/2'
                                    class="text-gray-600 hover:text-danger text-2xl transition duration-300"
                                >
                                    <i class="fab fa-instagram"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Contact a Consultant</h2>
                    <p>Need help with your immigration process? Contact our expert consultants.</p>

                    <Link to='/BookNowPage'>
                        <button className="bg-danger text-white px-4 py-2 mt-4 rounded-lg w-full">Get Consultation</button>
                    </Link>
                </aside>
            </div>
            <LogosSection />
            <Footer />
        </div>
    );
}