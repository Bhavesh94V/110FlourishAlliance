import React, { useEffect, useState } from 'react';
import '../assets/styles/Opportunity.css';
import chooseimgbg from '../ServicesDetails/Service-MiniSlider-Imgs/chooseimgbg.png';
import { FaUserCheck, FaFileAlt, FaHandHoldingUsd, FaClipboardCheck, FaChartLine, FaHeadset } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { submitEligibilityRequest } from '../components/redux/actions/contactActions';
import Footer from '../components/Footer';

export default function EligibilityForm() {
    const sidebarDetails = [
        { title: "Check Your Eligibility", icon: <FaUserCheck className="text-blue-600 text-3xl" />, description: "Find out if you qualify for visa programs." },
        { title: "Required Documents", icon: <FaFileAlt className="text-green-600 text-3xl" />, description: "Know which documents you need for eligibility." },
        { title: "Financial Requirements", icon: <FaHandHoldingUsd className="text-yellow-600 text-3xl" />, description: "Understand the financial aspects of immigration." },
        { title: "Processing Time", icon: <FaClipboardCheck className="text-purple-600 text-3xl" />, description: "Estimated timelines for different visa applications." },
        { title: "Success Stories", icon: <FaChartLine className="text-orange-600 text-3xl" />, description: "Read about people who successfully immigrated." },
        { title: "Talk to an Expert", icon: <FaHeadset className="text-red-600 text-3xl" />, description: "Get a free consultation with our experts." },
    ];

    const countries = ["Canada", "Australia", "USA", "UK", "Germany", "Paris", "New Zealand"];
    const enquiries = ["Study Visa", "Work Visa", "Business Visa", "PR", "Tourist Visa", "Permanent Residency"];
    const educations = ["High School", "Diploma", "Bachelor's", "Master's"];

    const dispatch = useDispatch();
    const { loading, message, error } = useSelector((state) => state.eligibility);

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", contact: "", email: "",
        country: "", enquiry: "", education: "", dob: "", sex: "", cv: null
    });

    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (message || error) {
            setShowMessage(true);
            const timer = setTimeout(() => setShowMessage(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [message, error]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value
        });
    };

    const validateForm = () => {
        const { firstName, lastName, contact, email, country, enquiry, education, dob, sex, cv } = formData;
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!firstName || !lastName || !contact || !email || !country || !enquiry || !education || !dob || !sex || !cv) {
            alert("All fields are required.");
            return false;
        }
        if (!phoneRegex.test(contact)) {
            alert("Invalid contact number. It should be 10 digits.");
            return false;
        }
        if (!emailRegex.test(email)) {
            alert("Invalid email format.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        dispatch(submitEligibilityRequest(formDataToSend));
        setFormData({
            firstName: "", middleName: "", lastName: "",
            contact: "", email: "", country: "",
            enquiry: "", education: "", dob: "",
            sex: "", cv: null
        });
    };

    return (
        <div className="CareersPage md:mt-5 pt-5">
            <div className='flex flex-col lg:flex-row bg-white lg:px-5 pb-5 rounded-lg mx-4 my-6'>
                {/* Form Section */}
                <div className="form-container w-full lg:w-1/2 pt-5 bg-[#B21E24] rounded-lg shadow-lg p-6 ">
                    <h2 className="form-title text-white text-3xl font-bold text-center mb-6">Eligibility Criteria</h2>
                    <form onSubmit={handleSubmit} className="form space-y-6">
                        <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-group">
                                <label className="text-white font-semibold">First Name:</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-dark placeholder-white focus:outline-none focus:ring-2 focus:ring-[#B21E24]" required />
                            </div>
                            <div className="form-group">
                                <label className="text-white font-semibold">Middle Name:</label>
                                <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-dark placeholder-white focus:outline-none focus:ring-2 focus:ring-[#B21E24]" />
                            </div>
                            <div className="form-group">
                                <label className="text-white font-semibold">Last Name:</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-dark placeholder-white focus:outline-none focus:ring-2 focus:ring-[#B21E24]" required />
                            </div>
                        </div>

                        <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-group">
                                <label className="text-white font-semibold">Contact No:</label>
                                <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-dark placeholder-white focus:outline-none focus:ring-2 focus:ring-[#B21E24]" required />
                            </div>
                            <div className="form-group">
                                <label className="text-white font-semibold">Email ID:</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-dark placeholder-white focus:outline-none focus:ring-2 focus:ring-[#B21E24]" required />
                            </div>
                        </div>

                        <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-group">
                                <label className="text-white font-semibold">Country:</label>
                                <select name="country" value={formData.country} onChange={handleChange} className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-dark focus:outline-none focus:ring-2 focus:ring-[#B21E24]" required>
                                    <option value="">Select Country</option>
                                    {countries.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="text-white font-semibold">Enquiry Type:</label>
                                <select name="enquiry" value={formData.enquiry} onChange={handleChange} className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-dark focus:outline-none focus:ring-2 focus:ring-[#B21E24]" required>
                                    <option value="">Select Enquiry Type</option>
                                    {enquiries.map((e) => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-group">
                                <label className="text-white font-semibold">Education:</label>
                                <select name="education" value={formData.education} onChange={handleChange} className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-dark focus:outline-none focus:ring-2 focus:ring-[#B21E24]" required>
                                    <option value="">Select Education</option>
                                    {educations.map((edu) => (
                                        <option key={edu} value={edu}>{edu}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="text-white font-semibold">Date of Birth:</label>
                                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-dark focus:outline-none focus:ring-2 focus:ring-[#B21E24]" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="text-white font-semibold">Sex:</label>
                            <div className="radio-group flex space-x-4">
                                {["Male", "Female", "Other"].map((gender) => (
                                    <label key={gender} className="flex items-center space-x-2">
                                        <input type="radio" name="sex" value={gender} checked={formData.sex === gender} onChange={handleChange} className="form-radio h-5 w-5 text-[#B21E24] focus:ring-2 focus:ring-[#B21E24]" required />
                                        <span className="text-white">{gender}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="text-white font-semibold">Upload CV:</label>
                            <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleChange} className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-dark focus:outline-none focus:ring-2 focus:ring-[#B21E24]" required />
                        </div>

                        <button type="submit" className="submit-btn w-full p-3 rounded-lg bg-white text-[#B21E24] font-bold hover:bg-opacity-90 transition-all" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>

                        {showMessage && message && <p className="message-success text-green-500 text-center mt-4">{message}</p>}
                        {showMessage && error && <p className="message-error text-red-500 text-center mt-4">{error}</p>}
                    </form>
                </div>

                {/* Sidebar Section */}
                <div className="relative w-full lg:w-1/2 p-6 flex bg-white flex-col items-center rounded-lg shadow-lg" style={{
                    backgroundImage: `url(${chooseimgbg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionY: '100%',
                }}>
                    <div className="p-6 max-w-2xl mx-auto text-gray-700 rounded-lg">
                        <h2 className="text-3xl font-bold text-[#B21E24] text-center">Quick Contact</h2>
                        <p className="mt-2 text-md text-gray-600 text-center">
                            We are pleased to speak with you to discuss your qualifications and options under various immigration programs. Feel free to contact us with any questions.
                        </p>
                        <div className="p-6 w-full rounded-lg mx-auto">
                            <h2 className="text-2xl font-bold text-[#B21E24] text-center mt-3 mb-5">Immigration Assistance</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    sidebarDetails.map((item, index) => (
                                        <div key={index} className="py-4 bg-white shadow-md rounded-lg flex flex-col items-center gap-2 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
                                            <div className="mb-3">{item.icon}</div>
                                            <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}