import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import blogimg1 from "../assets/imgs/Blog/blogimg2.jpg";
import bgImage from "../assets/imgs/AboutArea/bginner.jpg";
import Footer from '../components/Footer';
import LogosSection from "../components/LogosSection ";
import Comment from './Comment';
import { Link } from 'react-router-dom';

export default function Blog2() {

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
              <h1 class="text-4xl font-semibold md:mt-[10px]">Achieving Success Through Study Visas</h1>
            </div>
            <div class="max-w-3xl mt-4 md:mt-0">
              <p class="text-lg">
                Study visas have helped students unlock global opportunities, gain quality education,
                and build successful careers abroad.
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
                <span class="text-gray-500">Study Visas</span>
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
                Achieving Success Through Study Visas: Everything You Need to Know
              </h2>
              <blockquote className="border-l-4 border-danger pl-4 italic mb-4">
                <p>
                  "A study visa is the first step toward unlocking global education and building a brighter future."
                </p>
              </blockquote>
              <div className="content mb-4">
                <h3 className="text-2xl font-semibold mb-2 text-danger">1. Why Choose a Study Visa?</h3>
                <p className="mb-4">
                  Study visas offer students the opportunity to gain world-class education, experience diverse cultures, and enhance career prospects by studying abroad.
                </p>

                <h3 className="text-2xl font-semibold mb-2 text-danger">2. Top Benefits of Studying Abroad</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li><strong>Quality Education:</strong> Access to globally recognized universities and courses.</li>
                  <li><strong>Career Growth:</strong> Improved job prospects with an international degree.</li>
                  <li><strong>Global Exposure:</strong> Experience new cultures and build a global network.</li>
                  <li><strong>Personal Development:</strong> Become independent and gain valuable life skills.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-2 text-danger">3. Key Steps to Apply for a Study Visa</h3>
                <p className="mb-4">
                  Research your desired course and university, prepare required documents, apply for admission, and submit a study visa application with proof of funds and intent to study.
                </p>

                <h3 className="text-2xl font-semibold mb-2 text-danger">4. Common Challenges & How to Overcome Them</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li><strong>Visa Interview:</strong> Prepare well and present genuine study intentions.</li>
                  <li><strong>Financial Proof:</strong> Maintain clear financial documentation.</li>
                  <li><strong>Academic Requirements:</strong> Ensure eligibility for the chosen program.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-2 text-danger">5. Real Success Stories</h3>
                <p className="mb-4">
                  Many students have transformed their lives through study visas, securing prestigious jobs and achieving their dreams of living abroad.
                </p>

                <h3 className="text-2xl font-semibold mb-2 text-danger">6. Final Thoughts</h3>
                <p className="mb-4">
                  With the right preparation and guidance, a study visa can be your gateway to a successful international career and a life-changing experience.
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
                    <span class="group-hover:text-danger">Guidance Of Expert</span>
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
                <li>
                  <Link
                    to='/Blog/7'
                    class="text-gray-600 flex items-center group transition duration-300"
                  >
                    <i class="fas fa-chevron-right text-sm mr-2 text-danger group-hover:translate-x-2 transition duration-300"></i>
                    <span class="group-hover:text-danger">Study Visa Stories</span>
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