import { StudentModel } from "../Class/StudentModel";
import LoadingAnimation from "../Components/LoadingAnimation";
import SideNavBar from '../Components/SideNavbar.jsx';
import MainActivity from "./MainActivity.jsx";
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

const DashBoardActivity = () => {
    const Student = new StudentModel("Something");
    const [Loading, setLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    if (Loading) {
        return (
            <div>
                <LoadingAnimation />
            </div>
        );
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="h-screen flex flex-col md:flex-row">
            {/* Hamburger Menu Button */}
            <div className="md:hidden flex items-center p-4">
                <button onClick={toggleSidebar} className="text-2xl">
                    {isSidebarOpen ? '✖' : '☰'} {/* Hamburger icon */}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity md:relative md:bg-transparent md:opacity-100 md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <div className="w-64 bg-white h-svh shadow-lg md:shadow-none relative">
                    {/* Close Button for Sidebar */}
                    <button onClick={toggleSidebar} className="absolute top-4 right-4 text-2xl md:hidden">
                        ✖ {/* Close icon */}
                    </button>
                    <SideNavBar />
                </div>
            </div>

            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} md:ml-0`}>
                <Routes>
                    <Route path="main" element={<MainActivity />} />
                    {/* Add more routes here as needed */}
                </Routes>
            </div>
        </div>
    );
}

export default DashBoardActivity;