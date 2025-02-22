import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore';
import blogimg1 from "../assets/imgs/Blog/blogimg2.jpg";
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import Footer from '../components/Footer';
import chooseimgbg from '../BlogDetails/chooseimgbg.png';
import paperplane from '../BlogDetails/paperplane.png';
import LogosSection from "../components/LogosSection ";
import service1 from '../ServicesDetails/Service-MiniSlider-Imgs/service2.jpg';

export default function Blog8() {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        const q = query(collection(db, 'comments'), orderBy("date", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const updatedComments = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setComments(updatedComments);
            localStorage.setItem("comments", JSON.stringify(updatedComments));
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const savedComments = localStorage.getItem("comments");
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !text) return alert('All fields are required');
        await addDoc(collection(db, 'comments'), {
            name,
            email,
            text,
            date: new Date().toISOString()
        });
        setName('');
        setEmail('');
        setText('');
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "comments", id));
    };

    return (
        <div className="pt-5 bg-cover bg-center min-h-screen Blog-Details" style={{ backgroundImage: `url(${ bgImage })` }}>

            <div class="bg-[#B21E24] lg:mt-[109px] md:mt-[50px] py-5 bg-custom mt-custom">
                <div class="container mx-auto text-white px-5">
                    <div class="flex flex-col items-start justify-between">
                        <div className='border-b border-dashed py-3'>
                            <h1 class="text-4xl font-semibold md:mt-[10px]">Achieving Educational Dreams Abroad</h1>
                        </div>
                        <div class="max-w-3xl mt-4 md:mt-0">
                            <p class="text-lg">
                                Transform your future by studying at top global institutions.
                                Gain knowledge, experience new cultures, and achieve your academic goals abroad.
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
                                <a href="#" class="text-danger hover:underline">VisaHub</a>
                            </li>
                            <span>/</span>
                            <li>
                                <a href="#" class="text-danger hover:underline">Blog</a>
                            </li>
                            <span>/</span>
                            <li>
                                <span class="text-gray-500">Achieving Educational Dreams Abroad</span>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>



            <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-6">
                <main className="w-full lg:w-3/4">
                    <article className="bg-white rounded-lg overflow-hidden">
                        <div className="post-img mb-4">
                            <img src={blogimg1} alt="" className='w-full h-auto rounded-t-lg' />
                        </div>

                        <div className='bg-white px-5 pt-3 rounded-lg mb-5'>
                            <h2 className="text-4xl font-bold my-5 text-danger text-center">
                                Comprehensive Guide to Immigration: <br /> Key Insights You Need
                            </h2>
                            <blockquote className="border-l-4 border-danger pl-4 italic mb-4">
                                <p>
                                    "The right guidance can turn your dream of living and studying abroad into reality."
                                </p>
                            </blockquote>
                            <div className="content mb-4">
                                <h3 className="text-2xl font-semibold mb-2 text-danger">1. Immigration Simplified</h3>
                                <p className="mb-4">
                                    Navigate the immigration process with ease. Understand visa types, documents, and avoid common pitfalls.
                                </p>

                                <h3 className="text-2xl font-semibold mb-2 text-danger">2. Visa Types at a Glance</h3>
                                <ul className="list-disc pl-5 mb-4">
                                    <li><strong>Work Visa:</strong> Employment opportunities abroad.</li>
                                    <li><strong>Study Visa:</strong> Pursue education at global institutions.</li>
                                    <li><strong>PR Visa:</strong> Permanent residency options.</li>
                                    <li><strong>Business Visa:</strong> For entrepreneurs and professionals.</li>
                                    <li><strong>Tourist Visa:</strong> Short-term travel and exploration.</li>
                                </ul>

                                <h3 className="text-2xl font-semibold mb-2 text-danger">3. Immigration vs. Work Permit</h3>
                                <p className="mb-4">
                                    An <strong>immigration visa</strong> offers long-term residency, while a <strong>work permit</strong> provides temporary work authorization.
                                </p>

                                <div style={{ backgroundImage: `url(${ chooseimgbg })`, backgroundPosition: '350px 20px', backgroundRepeat: 'no-repeat' }}>
                                    <h3 className="text-2xl font-semibold mb-2 text-danger">4. Essential Documents</h3>
                                    <ul className="list-disc pl-5 mb-4">
                                        <li>Passport, Visa application</li>
                                        <li>Financial proof, Certificates</li>
                                        <li>Medical reports, Biometrics</li>
                                        <li>Employment letter (if needed)</li>
                                    </ul>
                                </div>

                                <h3 className="text-2xl font-semibold mb-2 text-danger">5. Avoiding Visa Rejection</h3>
                                <ul className="list-disc pl-5 mb-4">
                                    <li><strong>Complete Documents:</strong> Submit all required paperwork.</li>
                                    <li><strong>Financial Stability:</strong> Provide solid financial evidence.</li>
                                    <li><strong>Accurate Information:</strong> Double-check every detail.</li>
                                    <li><strong>Legal Transparency:</strong> Disclose any legal history.</li>
                                    <li><strong>Show Ties:</strong> Demonstrate commitments at home.</li>
                                </ul>

                                <h3 className="text-2xl font-semibold mb-2 text-danger">6. Biometrics & Medicals</h3>
                                <p className="mb-4">
                                    Complete identity verification and health assessments, including tests and general check-ups.
                                </p>

                                <h3 className="text-2xl font-semibold mb-2 text-danger">7. Conclusion</h3>
                                <p className="mb-4">
                                    With preparation and guidance, immigration becomes manageable. Stay informed and consult experts when needed.
                                </p>
                            </div>
                        </div>
                    </article>
                    <section className="comments-section p-6 bg-white rounded-lg shadow-md mt-6">
                        <h3 className="text-2xl mb-4 text-danger font-bold">Comments ({comments.length})</h3>
                        {
                            comments.map((comment) => (
                                <div key={comment.id} className="p-4 bg-gray-100 rounded-lg shadow-sm mt-4">
                                    <h2 className="font-bold text-lg">{comment.name} <span className="text-sm text-gray-600">({new Date(comment.date).toLocaleDateString()})</span></h2>
                                    <p className="text-gray-800 mt-1">{comment.text}</p>
                                    {/* <button onClick={() => handleDelete(comment.id)} className="text-red-500 mt-2 hover:underline">Delete</button> */}
                                </div>
                            ))
                        }
                    </section>
                    <section className="comment-form mt-6 bg-white flex flex-col md:flex-row p-6 rounded-lg shadow-md">
                        <div>
                            <h4 className="text-2xl font-semibold mb-4 text-danger">Post a Comment</h4>
                            <form onSubmit={handleSubmit} className="space-y-4 max-w-[500px]">
                                <input type="text" className="border p-3 w-full rounded-lg" placeholder="Your Name*" value={name} onChange={(e) => setName(e.target.value)} required />
                                <input type="email" className="border p-3 w-full rounded-lg" placeholder="Your Email*" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <textarea className="border p-3 w-full rounded-lg" placeholder="Your Comment*" rows="4" value={text} onChange={(e) => setText(e.target.value)} required></textarea>
                                <button type="submit" className="bg-danger text-white px-6 py-3 rounded-lg w-full">Post Comment</button>
                            </form>
                        </div>
                        <div className='max-w-[500px] mx-auto my-auto pt-4'>
                            <img src="https://img.freepik.com/free-vector/reviews-concept-landing-page_52683-18566.jpg?t=st=1739184528~exp=1739188128~hmac=c86d5d55b0ad59b16b42d6e5bfcb473e14716daf9b2fc40c41e53bbe984c4303&w=1380" alt="" className='img-fluid w-full' />
                        </div>
                    </section>
                </main>
                <aside className="w-full lg:w-1/4 h-fit bg-white p-5 rounded-lg shadow-md">


                    <div class="">
                        {/* Related Blogs Section */}
                        <div class="mb-8">
                            <h3 class="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                <i class="fas fa-blog text-danger mr-2"></i> Related Blogs
                            </h3>
                            <ul class="space-y-4">
                                <li>
                                    <a
                                        href="#"
                                        class="text-gray-600 flex items-center group transition duration-300"
                                    >
                                        <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                                        <span class="group-hover:text-danger">Work Visa Guide</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-gray-600 flex items-center group transition duration-300"
                                    >
                                        <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                                        <span class="group-hover:text-danger">Study Abroad Tips</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-gray-600 flex items-center group transition duration-300"
                                    >
                                        <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                                        <span class="group-hover:text-danger">Business Visa Essentials</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact a Consultant */}
                        <div class="mb-8">
                            <h3 class="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                <i class="fas fa-headset text-danger mr-2"></i> Contact a Consultant
                            </h3>
                            <p class="text-gray-600 mb-4">
                                Need expert advice on immigration? Get in touch with our experienced consultants.
                            </p>
                            <button class="bg-danger text-white px-4 py-2 rounded-lg hover:bg-danger-dark hover:scale-105 transition duration-300">
                                <i class="fas fa-envelope mr-2"></i> Contact Us
                            </button>
                        </div>

                        {/* Newsletter Subscription */}
                        <div class="mb-8">
                            <h3 class="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                <i class="fas fa-envelope-open-text text-danger mr-2"></i> Subscribe to Newsletter
                            </h3>
                            <form class="space-y-4">
                                <input
                                    type="email"
                                    class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-danger transition duration-300"
                                    placeholder="Your Email Address"
                                />
                                <button
                                    type="submit"
                                    class="bg-danger text-white px-4 py-2 rounded-lg hover:bg-danger-dark hover:scale-105 transition duration-300 w-full"
                                >
                                    <i class="fas fa-paper-plane mr-2"></i> Subscribe
                                </button>
                            </form>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <h3 class="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                <i class="fas fa-share-alt text-danger mr-2"></i> Follow Us
                            </h3>
                            <div class="flex space-x-4">
                                <a
                                    href="#"
                                    class="text-gray-600 hover:text-danger text-2xl transition duration-300"
                                    aria-label="Facebook"
                                >
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a
                                    href="#"
                                    class="text-gray-600 hover:text-danger text-2xl transition duration-300"
                                    aria-label="Twitter"
                                >
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    class="text-gray-600 hover:text-danger text-2xl transition duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a
                                    href="#"
                                    class="text-gray-600 hover:text-danger text-2xl transition duration-300"
                                    aria-label="Instagram"
                                >
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>




                    <h2 className="text-2xl font-semibold mt-6 mb-4">Contact a Consultant</h2>
                    <p>Need help with your immigration process? Contact our expert consultants.</p>
                    <button className="bg-danger text-white px-4 py-2 mt-4 rounded-lg w-full">Get Consultation</button>
                </aside>
            </div>
            <LogosSection />
            <Footer />
        </div>
    );
}