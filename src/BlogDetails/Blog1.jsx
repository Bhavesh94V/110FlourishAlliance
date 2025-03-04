import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import blogimg1 from "../assets/imgs/Blog/blogimg1.jpg";
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import Footer from '../components/Footer';
import chooseimgbg from '../BlogDetails/chooseimgbg.png';
import LogosSection from "../components/LogosSection ";
import Comment from './Comment';
import { Link } from 'react-router-dom';


export default function Blog1() {

  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return alert('Please enter your email');
    await addDoc(collection(db, 'newsletterSubscriptions'), { email: newsletterEmail });
    alert('Subscribed successfully!');
    setNewsletterEmail('');
  };

  return (
    <div className="pt-5 bg-cover bg-center min-h-screen Blog-Details" style={{ backgroundImage: `url(${bgImage}) ` }}>

      <div class="bg-[#B21E24] lg:mt-[109px] md:mt-[50px] py-5 bg-custom mt-custom">
        <div class="container mx-auto text-white px-5">
          <div class="flex flex-col items-start justify-between">
            <div className="border-b border-dashed py-3">
              <h1 class="text-4xl font-semibold md:mt-[10px]">
                Opportunities for Global Education
              </h1>
            </div>
            <div class="max-w-3xl mt-4 md:mt-0">
              <p class="text-lg">
                Explore new horizons with global education and gain valuable international experiences...
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
                <span class="text-gray-500">Opportunities for Global Education</span>
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
                Unlocking Opportunities for Global Education: <br /> Your Pathway to Success
              </h2>
              <blockquote className="border-l-4 border-danger pl-4 italic mb-4">
                <p>
                  "A global education can transform your future by offering new perspectives and limitless opportunities."
                </p>
              </blockquote>
              <div className="content mb-4">

                <h3 className="text-2xl font-semibold mb-2 text-danger">1. Benefits of Global Education</h3>
                <p className="mb-4">
                  Studying abroad helps students gain international exposure, access world-class education, and enhance career prospects.
                </p>

                <h3 className="text-2xl font-semibold mb-2 text-danger">2. Top Study Destinations</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li><strong>Canada:</strong> Known for quality education and student-friendly policies.</li>
                  <li><strong>USA:</strong> Offers diverse programs and renowned institutions.</li>
                  <li><strong>UK:</strong> Home to prestigious universities and rich academic history.</li>
                  <li><strong>Australia:</strong> Provides excellent research opportunities and a vibrant culture.</li>
                  <li><strong>Germany:</strong> Offers affordable education with a focus on innovation.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-2 text-danger">3. How to Apply for a Study Visa</h3>
                <p className="mb-4">
                  Choose a program, gather necessary documents, apply for a visa, and prepare for interviews or biometrics appointments.
                </p>

                <div style={{ backgroundImage: `url(${chooseimgbg})`, backgroundPositionX: '350px', backgroundRepeat: 'no-repeat', backgroundPositionY: '20px' }}>
                  <h3 className="text-2xl font-semibold mb-2 text-danger">4. Key Documents Required</h3>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Valid passport</li>
                    <li>Acceptance letter from an educational institution</li>
                    <li>Proof of financial support</li>
                    <li>Academic transcripts and certificates</li>
                    <li>Language proficiency test scores</li>
                    <li>Medical examination results (if required)</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold mb-2 text-danger">5. Tips for a Successful Application</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li><strong>Start Early:</strong> Research visa requirements and prepare documents in advance.</li>
                  <li><strong>Accurate Documentation:</strong> Double-check all information to avoid delays.</li>
                  <li><strong>Clear Financial Proof:</strong> Show adequate funds for tuition and living expenses.</li>
                  <li><strong>Expert Consultation:</strong> Consider professional guidance for better results.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-2 text-danger">6. Final Thoughts</h3>
                <p className="mb-4">
                  Global education offers life-changing experiences and opportunities. With proper planning and preparation, you can achieve your academic and career goals abroad.
                </p>
              </div>
            </div>
          </article>

          <Comment></Comment>


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
                    to='/Blog/2'
                    class="text-gray-600 flex items-center group transition duration-300"
                  >
                    <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                    <span class="group-hover:text-danger">Study Visas</span>
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
                    <span class="group-hover:text-danger">Global Success</span>
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
                <li>
                  <Link
                    to='/Blog/6'
                    class="text-gray-600 flex items-center group transition duration-300"
                  >
                    <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                    <span class="group-hover:text-danger">Study Abroad Dreams</span>
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