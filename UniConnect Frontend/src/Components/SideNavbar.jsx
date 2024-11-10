// SideNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FcInfo, FcDocument, FcMoneyTransfer, FcList, FcSettings, FcCheckmark, FcFeedback, FcGraduationCap, FcCalendar, FcSearch, FcBusinessman, FcApproval, FcHome, FcAssistant, FcLock, FcIdea } from "react-icons/fc";

function SideNavbar() {
    const navItems = [
        { name: 'Main', path: '/dashboard/main', icon: <FcInfo /> },
        { name: 'Personal Information', path: '/personal-information', icon: <FcDocument /> },
        { name: 'Account Statement', path: '/account-statement', icon: <FcMoneyTransfer /> },
        { name: 'Transaction', path: '/transaction', icon: <FcList /> },
        { name: 'Programme Plan', path: '/programme-plan', icon: <FcGraduationCap /> },
        { name: 'Course Registration', path: '/course-registration', icon: <FcCheckmark /> },
        { name: 'Resit Registration', path: '/resit-registration', icon: <FcFeedback /> },
        { name: 'Publish Result', path: '/publish-result', icon: <FcApproval /> },
        { name: 'Lecturer Evaluation', path: '/lecturer-evaluation', icon: <FcBusinessman /> },
        { name: 'Mark Attendance', path: '/mark-attendance', icon: <FcCalendar /> },
        { name: 'View Report', path: '/view-report', icon: <FcSearch /> },
        { name: 'Financial Aid', path: '/financial-aid', icon: <FcAssistant /> },
        { name: 'Student Attachment', path: '/student-attachment', icon: <FcIdea /> },
        { name: 'Document Request', path: '/document-request', icon: <FcDocument /> },
        { name: 'Clearance', path: '/clearance', icon: <FcLock /> },
        { name: 'Settings', path: '/settings', icon: <FcSettings /> },
        { name: 'Report Issues', path: '/report-issues', icon: <FcFeedback /> }
    ];

    return (
        <div className="w-auto h-screen bg-gray-200 shadow-md">
            <div className="block p-4 text-center text-3xl font-black text-blue-600 font-mono hover:text-4xl">
                UniConnect
            </div>
            <ul className="mt-6">
                {navItems.map((item, index) => (
                    <li key={index} className="hover:bg-blue-100">
                        <Link
                            to={item.path}
                            className="flex items-center block px-4 py-2 text-gray-800 hover:text-blue-600"
                        >
                            <span className="mr-2">{item.icon}</span>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <button className='block w-full px-4 py-2 text-red-500 font-semibold text-lg hover:bg-red-600 hover:text-white'>
                Logout
            </button>
        </div>
    );
};

export default SideNavbar;