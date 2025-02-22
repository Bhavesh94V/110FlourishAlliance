import React, { useState } from 'react';
import { Clock, MapPin, Mail, Phone, Link } from 'lucide-react';
import "../assets/styles/BookNowPage.css";
import Footer from '../components/Footer';
import PlaneBg from '../BlogDetails/paperplane.png'
import BookNowPageFooter from '../assets/imgs/Pages/BookNowPageFooter.png'
import BookNowForm from './BookNowForm';

export default function BookNowPage() {




  return (
    <div className='bookNowPage pt-5'>


      <div>
        <div class="bg-[#B21E24] lg:mt-[109px] md:mt-[50px] py-5 bg-custom mt-custom"
          style={{
            backgroundImage: `url(${PlaneBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '90%',
            backgroundSize: 'contain',
            animation: 'bgMove 2s infinite alternate ease-in-out'
          }}
        >
          <div class="container mx-auto text-white px-5">
            <div class="flex flex-col items-start justify-between">
              <div className='border-b border-dashed py-3'>
                <h1 class="text-4xl font-semibold md:mt-[10px]">Book a Consultation with Flourish Immigration</h1>
              </div>
              <div class="max-w-3xl mt-4 md:mt-0">
                <p class="text-lg">
                  Schedule a personalized consultation with our expert immigration consultants. We provide guidance for visa applications, permanent residency, and more to help you achieve your global goals.
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
                  <Link to="/" className="text-danger hover:underline cursor-pointer">
                    Flourish Immigration
                  </Link>
                </li>

                <span>/</span>
                <li>
                  <span class="text-gray-500">Book a Consultation</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

      </div>


      <BookNowForm></BookNowForm>


      <div className="w-full bg-white shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center bg-[#B21E24]">
          <div className="w-full md:w-1/3">
            <img
              src={BookNowPageFooter}
              alt="Office"
              className="w-full md:rounded-e-full  h-full object-cover"
            />
          </div>

          <div className="w-full md:w-2/3 p-6">
            <h3 className="text-xl text-white font-bold mb-4">India</h3>
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="h-5 w-5 text-white" />
              <p className="text-white text-base">11, Govardhan Galaxy Banglows, opp Yash platina, near Hari Darshan Chowk, Nava Naroda, Ahmedabad - 382330</p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <Mail className="h-5 w-5 text-white" />
              <p className="text-white text-base">contact@amrutacademy.com</p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <Phone className="h-5 w-5 text-white" />
              <p className="text-white text-base">+91 7043435337</p>
            </div>

            <div className="mt-4 border-t border-gray-300 pt-4">
              <h4 className="text-lg font-medium mb-2 text-white">Office Hours</h4>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-white" />
                <div>
                  <p className="text-sm text-white">Monday to Friday: 9:00 am - 7:00 pm</p>
                  <p className="text-sm text-white">Saturday: 9:00 am - 5:30 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-64">
          <iframe
            className="w-full h-full border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.757894613714!2d72.67780727561264!3d23.069335979141005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83a7762edeff%3A0xfb3812c996eb0fc2!2sStriver%20Technosoft%20LLP%C2%AE!5e0!3m2!1sen!2sin!4v1737554839376!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
