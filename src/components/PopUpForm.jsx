import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import WOW from 'wowjs';
import 'animate.css';
import { useDispatch, useSelector } from "react-redux";
import { submitPopUpFormRequest } from "./redux/actions/contactActions";

const PopUpForm = ({ onClose }) => {
    useEffect(() => {
        const wow = new WOW.WOW({ live: false });
        wow.init();
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = "auto"; };
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        contact: "",
        category: "",
    });

    const dispatch = useDispatch();
    const { loading, message } = useSelector((state) => state.popUp);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => { setIsVisible(true); }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitPopUpFormRequest(formData));
        setTimeout(() => handleClose(), 2000);
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => onClose(), 300);
    };

    return (
        <div className={`fixed inset-0 z-[1000000] flex items-center justify-center bg-gray-900 bg-opacity-60 backdrop-blur-md transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className={`bg-white mt-5 flex flex-col md:flex-row rounded-3xl shadow-2xl w-[90%] md:w-[700px] relative transition-all duration-300 transform ${isVisible ? "scale-100" : "scale-95"}`}>
                <div className="md:w-2/4 hidden md:flex flex-col justify-center items-center bg-[#B21E24] text-white p-6">
                    <h2 className="text-2xl font-bold mb-4">Get updates! Enter your email to stay informed.</h2>
                    <ul className="text-sm me-auto space-y-2">
                        <li>✔ Expert Guidance</li>
                        <li>✔ Hassle-Free Process</li>
                        <li>✔ 24/7 Support</li>
                        <li>✔ Quick Response</li>
                    </ul>
                </div>
                <div className="w-full md:w-2/3 p-6 relative">
                    <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition" aria-label="Close">
                        <X size={24} />
                    </button>
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Fill Your Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {Object.keys(formData).map((field) => (
                            <input key={field} type={field === "email" ? "email" : "text"} name={field} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} value={formData[field]} onChange={handleChange} required className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500" />
                        ))}
                        <button type="submit" disabled={loading} className={`w-full p-3 rounded-xl font-semibold transition ${loading ? "bg-gray-400" : "bg-[#B21E24] text-white hover:opacity-90"}`}>
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                        {message?.text && (
                            <p className={`text-center mt-3 font-medium ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
                                {message.text}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

const AppWrapper = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return <>{showPopup && <PopUpForm onClose={() => setShowPopup(false)} />}</>;
};

export default AppWrapper;
