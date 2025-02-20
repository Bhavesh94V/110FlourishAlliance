import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Calendar, Clock, User, ClipboardList, MapPin, Mail, Phone, Link } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import "../assets/styles/BookNowPage.css";
import Footer from '../components/Footer';
import PlaneBg from '../BlogDetails/paperplane.png'
import BookNowPageFooter from '../assets/imgs/Pages/BookNowPageFooter.png'
import { useDispatch, useSelector } from 'react-redux';
import { submitAppointmentRequest } from '../components/redux/actions/contactActions';

export default function BookNowPage() {


  const dispatch = useDispatch();
  const { loading, message, error } = useSelector(state => state.appointment);

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    details: "",
    address: ""
  });

  const handleDateSelection = (e) => setSelectedDate(e.target.value);
  const handleTimeSelection = (time) => setSelectedTime(time);
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const isFormValid = () => Object.values(formData).every(field => field.trim() !== "");

  const handleNext = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    } else if (step === 2 && isFormValid()) {
      setStep(3);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handlePrevious = () => step > 1 && setStep(step - 1);


  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentData = { ...formData, date: selectedDate, time: selectedTime };

    dispatch(submitAppointmentRequest(appointmentData));

    setStep(1);
    setFormData({ firstName: "", lastName: "", email: "", phone: "", reason: "", details: "", address: "" });
    setSelectedDate("");
    setSelectedTime("");
  };

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


      <div className="immigration-steps my-5 pt-5">

        <div className="steps-header">
          <div className={`step ${step === 1 ? "active" : ""}`}>Appointment Date & Time</div>
          <div className={`step ${step === 2 ? "active" : ""}`}>Personal Information</div>
          <div className={`step ${step === 3 ? "active" : ""}`}>Confirmation</div>
        </div>

        <div className="appointment-container">

          <div className="left-panel">
            <h3 className='font-semibold'>Schedule a Consultation</h3>
            <p className='py-2'>Select a Date & Time for Your Appointment</p>
            <ul>
              <li className='p-1'>📌 With Consultant</li>
              <li className='p-1'>⏳ 45 Min Session</li>
              <li className='p-1'>📍 Online Meeting</li>
              <li className='p-1'>🔗 Zoom Video Call</li>
            </ul>
            <hr />
            {selectedDate && selectedTime && (
              <div className="selected-info my-4 text-start">
                <p className='flex gap-2 items-center mb-2'><FaCalendarAlt /> Date: {selectedDate}</p>
                <p className='flex gap-2 items-center mb-2'><FontAwesomeIcon icon={faClock} /> Time: {selectedTime}</p>
              </div>
            )}
          </div>

          <div className="right-panel">
            {
              step === 1 && (
                <div className="date-time-selection">
                  <div className="date-selection">
                    <h4>Pick a Date:</h4>
                    <input type="date" value={selectedDate} onChange={handleDateSelection} />
                  </div>
                  <div className="time-selection">
                    <h4>Pick a Time:</h4>
                    <div className="time-grid w-full">
                      {
                        ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00"].map((time) => (
                          <button key={time} className={`time-btn max-w-24 ${selectedTime === time ? 'selected' : ''}`} onClick={() => handleTimeSelection(time)}>{time}</button>
                        ))
                      }
                    </div>
                  </div>
                  <button className="next-button" onClick={handleNext} disabled={!selectedDate || !selectedTime}>
                    Next
                  </button>
                </div>
              )}

            {step === 2 && (
              <div className="form-container">
                <h3>Enter Your Details</h3>
                <form>
                  <div className="input-group">
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required />
                  </div>
                  <div className="input-group">
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                    <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                  <input type="text" name="reason" placeholder="Reason for Consultation" value={formData.reason} onChange={handleInputChange} required className="full-width" />
                  <textarea name="details" placeholder="Additional Details" value={formData.details} onChange={handleInputChange} required className="full-width"></textarea>
                  <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} required className="full-width" />
                  <div className="button-group">
                    <button type="button" className="previous-button" onClick={handlePrevious}>Previous</button>
                    <button type="button" className="next-button" onClick={handleNext}>Next</button>
                  </div>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="confirmation-container p-4 border rounded-lg shadow-lg bg-white">
                <h3 className="text-xl font-bold mb-4">Confirm Your Details</h3>
                <div className="details-summary space-y-3">
                  <p className="flex items-center gap-2"><Calendar className='text-danger shrink-0' /> <span className="break-words">Date: {selectedDate}</span></p>
                  <p className="flex items-center gap-2"><Clock className='text-danger shrink-0' /> <span className="break-words">Time: {selectedTime}</span></p>
                  <p className="flex items-center gap-2"><User className='text-danger shrink-0' /> <span className="break-words">Name: {formData.firstName} {formData.lastName}</span></p>
                  <p className="flex items-center gap-2"><Mail className='text-danger shrink-0' /> <span className="break-words">Email: {formData.email}</span></p>
                  <p className="flex items-center gap-2"><Phone className='text-danger shrink-0' /> <span className="break-words">Phone: {formData.phone}</span></p>
                  <p className="flex items-center gap-2"><ClipboardList className='text-danger shrink-0' /> <span className="break-words">Reason: {formData.reason}</span></p>
                  <p className="flex items-center gap-2">
                    <ClipboardList className='text-danger shrink-0' />
                    <span className="break-words max-h-40 overflow-y-auto">
                      Details: {formData.details}
                    </span>
                  </p>
                  <p className="flex items-center gap-2"><MapPin className='text-danger shrink-0' /> <span className="break-words">Address: {formData.address}</span></p>
                </div>
                <div className="button-group flex mt-4 gap-2">
                  <button className="previous-button px-4 py-2 border border-gray-400 rounded hover:bg-gray-100" onClick={handlePrevious}>Previous</button>
                  <button className="bg-[#cf2429] text-white px-4 rounded hover:bg-[#871216]" onClick={handleSubmit}>Book Appointment</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>


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
