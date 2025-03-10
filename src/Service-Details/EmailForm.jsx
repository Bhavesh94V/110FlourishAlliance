import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitEmailRequest } from "../components/redux/actions/contactActions";

export default function EmailForm() {
    const dispatch = useDispatch();
    const { loading, message, error } = useSelector((state) => state.contact);

    const [contactData, setContactData] = useState({
        fullname: "",
        email: "",
        message: "",
    });

    const [touched, setTouched] = useState({
        fullname: false,
        email: false,
        message: false,
    });

    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (message) {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 5000);
        } else if (error) {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 5000);
        }
    }, [message, error]);

    const validateForm = () => {
        const errors = {};
        if (!contactData.fullname.trim()) errors.fullname = "Name is required.";
        if (!contactData.email.trim()) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(contactData.email)) {
            errors.email = "Invalid email format.";
        }
        if (!contactData.message.trim()) errors.message = "Message is required.";
        return errors;
    };

    const errors = validateForm();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (Object.keys(errors).length > 0) {
            setTouched({ fullname: true, email: true, message: true });
            return;
        }

        dispatch(submitEmailRequest(contactData));

        setContactData({ fullname: "", email: "", message: "" });
        setTouched({ fullname: false, email: false, message: false });
    };

    return (
        <div className="mx-auto bg-white rounded-lg p-4">
            <form onSubmit={sendEmail} className="space-y-4 max-w-[90%] mt-2">
                <div>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Enter your name"
                        value={contactData.fullname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {touched.fullname && errors.fullname && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
                    )}
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={contactData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {touched.email && errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                <div>
                    <textarea
                        name="message"
                        placeholder="Describe your message"
                        value={contactData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {touched.message && errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className={`w-full p-2 text-white font-semibold rounded transition ${loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#B21E24] hover:bg-[#871216]"
                        }`}
                    disabled={loading || Object.keys(errors).length > 0}
                >
                    {loading ? "Sending..." : "Send Now"}
                </button>

                {showMessage && message && <p className="text-green-600 mt-2">{message}</p>}
                {showMessage && error && <p className="text-red-600 mt-2">{error}</p>}
            </form>
        </div>
    );
}
