import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const [hover, setHover] = useState(false);

    const phoneNumber = "917573966606";
    const message = "Hello! I need some information.";

    const openWhatsApp = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div
            className="fixed bottom-10 right-5 sm:bottom-16 sm:right-7 md:bottom-[13%] z-50 flex flex-col items-center space-y-2"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div
                className="bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-bounce"
                onClick={openWhatsApp}
            >
                <FaWhatsapp size={28} className="" />
            </div>
        </div>
    );
}
