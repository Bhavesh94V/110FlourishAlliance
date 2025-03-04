import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Service-Details/test.css';

export default function EmailForm() {
    const [contactData, setContactData] = useState({
        fullname: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData((prev) => ({ ...prev, [name]: value }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!contactData.fullname || !contactData.email || !contactData.message) {
            alert('Please fill all the fields.');
            setLoading(false);
            return;
        }

        const templateParams = {
            to_name: 'Bhavesh Vishwakarma',
            from_name: contactData.fullname,
            user_email: contactData.email,
            reply_to: contactData.email,
            message: contactData.message
        };

        try {
            const response = await emailjs.send(
                'service_3yis346',
                'template_xkl1rdv',
                templateParams,
                'L8GmcYhOcLNhacDJz'
            );
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            setContactData({ fullname: '', email: '', message: '' });
        } catch (err) {
            console.error('FAILED...', err);
            alert('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={sendEmail} className="max-w-[90%]">
                <div className="input-box">
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Enter your name"
                        value={contactData.fullname}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-box">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={contactData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-box message-box">
                    <textarea
                        name="message"
                        placeholder="Describe your message"
                        value={contactData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="button bg-[#B21E24] text-white font-semibold px-[16px] cursor-pointer py-[8px] rounded hover:bg-[#871216] disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Send Now'}
                </button>
            </form>
        </div>
    );
}
