import React from 'react'
import { FaClipboardCheck, FaEnvelope, FaCalendarCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function FormIcons() {
    const navigate = useNavigate();

    const icons = [
        { icon: FaClipboardCheck, title: 'Eligibility Check', path: '/CareersPage' },
        { icon: FaEnvelope, title: 'Contact Us', path: '/ContactPage' },
        { icon: FaCalendarCheck, title: 'Book a Consultation', path: '/BookNowPage' }
    ];

    return (
        <div className="fixed top-1/2 left-0 z-[10000] -translate-y-1/2 flex flex-col gap-4">
            {
                icons.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="group flex items-center gap-2 cursor-pointer hover:translate-x-2 -translate-x-4 transition-transform duration-300"
                            onClick={() => navigate(item.path)}
                        >
                            {/* Icon with hover effect */}
                            <div className="p-3 border-3 border-white rounded-r w-16 h-12 flex items-center justify-center shadow-lg bg-[#B21E24] text-white transition-colors duration-300 group-hover:bg-white">
                                <Icon className="text-xl group-hover:text-[#B21E24]" />
                            </div>

                            {/* Tooltip */}
                            <span className="hidden group-hover:block text-sm font-semibold text-[#B21E24] bg-white shadow-md px-2 py-1 rounded-md transition-opacity duration-300">
                                {item.title}
                            </span>
                        </div>
                    );
                })
            }
        </div>
    );
}
