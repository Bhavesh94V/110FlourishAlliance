import React, { useState, useEffect } from "react";
import axios from "axios";
import { X } from "lucide-react"; 

const PopUpForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        contact: "",
        category: "",
    });

    const [isFormFilled, setIsFormFilled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== "");
        setIsFormFilled(allFieldsFilled);
    }, [formData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormFilled) return;

        setLoading(true);
        try {
            await axios.post("http://localhost:5000/send-email", formData);
            setMessage("Form submitted successfully!");
            setTimeout(() => {
                setMessage("");
                onClose();
            }, 2000);
        } catch (error) {
            console.error("Error sending email:", error);
            setMessage("Failed to submit form. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative animate-popUp">
                {/* Close Icon */}
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
                    <X size={20} />
                </button>

                <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Fill the Details</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" />
                    <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" />
                    <input type="tel" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" />
                    <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" />

                    <button
                        type="submit"
                        disabled={!isFormFilled || loading}
                        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400">
                        {loading ? "Submitting..." : "Submit"}
                    </button>

                    {message && <p className="text-center mt-2 text-green-500">{message}</p>}
                </form>
            </div>
        </div>
    );
};

const AppWrapper = () => {
    const [showPopup, setShowPopup] = useState(true);

    return (
        <div>
            {showPopup && <PopUpForm onClose={() => setShowPopup(false)} />}
        </div>
    );
};

export default AppWrapper;
