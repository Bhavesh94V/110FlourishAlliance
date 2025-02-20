import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import '../Service-Details/test.css';

export default function EmailForm() {

    const [contactData, setContactData] = useState({ fullname: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData((prev) => ({ ...prev, [name]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            to_name: 'Bhavesh Vishwakarma',
            from_name: contactData.fullname,
            user_email: contactData.email,
            reply_to: contactData.email,
            message: contactData.message
        };

        emailjs.send(
            'service_3yis346',
            'template_xkl1rdv',
            templateParams,
            'L8GmcYhOcLNhacDJz'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Failed to send message. Please check your EmailJS configuration.');
            });
    };
    return (
        <div>
            <form onSubmit={sendEmail}>
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

                <div className="button bg-[#B21E24] text-white font-semibold px-[16px] cursor-pointer py-[8px] rounded hover:bg-[#871216]">
                    <input type="submit" value="Send Now" />
                </div>
            </form>
        </div>
    )
}
