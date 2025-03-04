import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import blogimg9 from "../assets/imgs/Blog/blogimg9.jpg";
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import Footer from '../components/Footer';
import chooseimgbg from '../BlogDetails/chooseimgbg.png';
import LogosSection from "../components/LogosSection ";
import Comment from './Comment';
import { Link } from 'react-router-dom';

export default function Blog9() {

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
                        <div className='border-b border-dashed py-3'>
                            <h1 class="text-4xl font-semibold md:mt-[10px]">
                                Expert Guidance for Study Visas
                            </h1>
                        </div>
                        <div class="max-w-3xl mt-4 md:mt-0">
                            <p class="text-lg">
                                Secure your future with our professional support in navigating the study visa process.
                                From application to approval, we provide tailored advice to make studying abroad a hassle-free experience.
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
                                <span class="text-gray-500">Guidance for Study Visas</span>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>



            <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-6">
                <main className="w-full lg:w-3/4">
                    <article className="bg-white rounded-lg overflow-hidden">
                        <div className="post-img mb-4">
                            <img src={blogimg9} alt="" className='w-full h-auto rounded-t-lg' />
                        </div>

                        <div className='bg-white px-5 pt-3 rounded-lg mb-5'>
                            <h2 className="text-3xl font-bold my-4 text-danger text-center">
                                Expert Guidance for Study Visas: Your Pathway to Global Education
                            </h2>
                            <blockquote className="border-l-4 border-danger pl-3 italic mb-3">
                                <p>
                                    "With the right guidance, your dreams of studying at top international institutions can become a reality."
                                </p>
                            </blockquote>
                            <div className="content mb-3">
                                <h3 className="text-xl font-semibold mb-2 text-danger">1. Why Study Abroad?</h3>
                                <p className="mb-3">
                                    Studying abroad opens doors to world-class education, cultural experiences, and global career opportunities.
                                    It allows students to gain a competitive edge and broaden their horizons.
                                </p>

                                <h3 className="text-xl font-semibold mb-2 text-danger">2. Types of Study Visas</h3>
                                <ul className="list-disc pl-4 mb-3">
                                    <li><strong>Student Visa:</strong> For full-time academic programs.</li>
                                    <li><strong>Exchange Visa:</strong> Short-term study opportunities under exchange programs.</li>
                                    <li><strong>Vocational Training Visa:</strong> For specialized skill and vocational courses.</li>
                                    <li><strong>Research Visa:</strong> Ideal for postgraduate and PhD students.</li>
                                    <li><strong>Short-Term Study Visa:</strong> For language courses or short-duration studies.</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-2 text-danger">3. How We Can Help</h3>
                                <p className="mb-3">
                                    Our experts guide you through the visa application process, assist with document preparation,
                                    and provide personalized advice to enhance your chances of approval.
                                </p>

                                <div style={{ backgroundImage: `url(${chooseimgbg})`, backgroundPosition: '350px 20px', backgroundRepeat: 'no-repeat' }}>
                                    <h3 className="text-xl font-semibold mb-2 text-danger">4. Essential Documents for Study Visa</h3>
                                    <ul className="list-disc pl-4 mb-3">
                                        <li>Valid passport</li>
                                        <li>Acceptance letter from a recognized institution</li>
                                        <li>Proof of financial stability</li>
                                        <li>Academic transcripts and certificates</li>
                                        <li>Language proficiency test results (e.g., IELTS, TOEFL)</li>
                                        <li>Medical and health insurance</li>
                                        <li>Completed visa application form</li>
                                    </ul>
                                </div>

                                <h3 className="text-xl font-semibold mb-2 text-danger">5. Tips to Avoid Visa Rejection</h3>
                                <ul className="list-disc pl-4 mb-3">
                                    <li><strong>Provide Accurate Information:</strong> Ensure all details match official records.</li>
                                    <li><strong>Show Financial Proof:</strong> Demonstrate the ability to cover tuition and living expenses.</li>
                                    <li><strong>Highlight Academic Intent:</strong> Clearly state your study objectives and return plans.</li>
                                    <li><strong>Prepare for the Interview:</strong> Answer confidently and truthfully if required.</li>
                                    <li><strong>Submit Complete Documents:</strong> Double-check all paperwork before submission.</li>
                                </ul>

                                <h3 className="text-xl font-semibold mb-2 text-danger">6. What to Expect During the Process</h3>
                                <p className="mb-3">
                                    From filling out applications to attending visa interviews, we provide step-by-step support.
                                    We also offer pre-departure sessions to help you settle into your new academic environment.
                                </p>

                                <h3 className="text-xl font-semibold mb-2 text-danger">7. Final Thoughts</h3>
                                <p className="mb-3">
                                    A study visa is your gateway to global education. With our expert guidance,
                                    you can confidently pursue your academic ambitions and thrive in an international setting.
                                </p>
                            </div>
                        </div>
                    </article>
                    <Comment />
                </main>
                <aside className="w-full lg:w-1/4 h-fit bg-white p-5 rounded-lg shadow-md">
                    <div class="">
                        {/* Related Blogs Section */}
                        <div class="mb-8">
                            <h3 class="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                <i class="fas fa-blog text-danger mr-2"></i> Other Blogs
                            </h3>

                            <ul class="space-y-4">

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

                                <li>
                                    <Link
                                        to='/Blog/3'
                                        class="text-gray-600 flex items-center group transition duration-300"
                                    >
                                        <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                                        <span class="group-hover:text-danger">International Education</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to='/Blog/4'
                                        class="text-gray-600 flex items-center group transition duration-300"
                                    >
                                        <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                                        <span class="group-hover:text-danger">Guiding Students to Global Success</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to='/Blog/5'
                                        class="text-gray-600 flex items-center group transition duration-300"
                                    >
                                        <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                                        <span class="group-hover:text-danger">Study Visa Process</span>
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