import React from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

const Main = () => {
    const username = "Kaden16";
    const indexNumber = "B1293881";
    const course = "Computer Science";
    const progressPercentage = 13; 
    const tasks = ["Complete assignment 1", "Prepare for midterms", "Attend group study"];
    const score = 85; 
    const cgpa = 3.5;
    const gpa = 3.8; 
    const events = [
        { dateSent: "2023-10-01", eventDate: "2023-10-15", eventName: "Tech Conference", eventTime: "10:00 AM", location: "Main Hall", sender: "Admin" },
        { dateSent: "2023-10-02", eventDate: "2023-10-20", eventName: "Career Fair", eventTime: "11:00 AM", location: "Auditorium", sender: "Career Services" }
    ];
    const announcements = [
        "Midterm exams will start on October 10.",
        "Library will be closed for maintenance on October 5."
    ];
    const assessment = {
        homework: 90,
        classwork: 80,
        attendance: 95
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="mb-6">
                <h1 className="text-4xl font-bold">Welcome, {username}</h1>
                <p className="text-lg">Index Number: {indexNumber}</p>
                <p className="text-lg">Course: {course}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Progress Card */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Progress</h2>
                    <div className="flex items-center justify-center">
                        <Progress percent={progressPercentage} style={{ width: '100px', height: '100px' }} />
                        <p className="block text-2xl font-bold">{progressPercentage}%</p>
                    </div>
                </div>

                {/* Task Card */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Tasks</h2>
                    <ul className="list-disc pl-5">
                        {tasks.map((task, index) => (
                            <li key={index} className="text-gray-700">{task}</li>
                        ))}
                    </ul>
                </div>

                {/* Score Card */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Score</h2>
                    <p className="text-2xl font-bold">{score}</p>
                </div>

                {/* CGPA Card */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">CGPA</h2>
                    <Progress percent={(cgpa / 4.0) * 100} />
                    <p className="text-lg font-bold">{cgpa} / 4.0</p>
                </div>

                {/* GPA Card */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">GPA</h2>
                    <p className="text-2xl font-bold">{gpa}</p>
                </div>

                {/* Uni Events Card */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">University Events</h2>
                    <ul>
                        {events.map((event, index) => (
                            <li key={index} className="border-b py-2">
                                <p><strong>Event Name:</strong> {event.eventName}</p>
                                <p><strong>Date:</strong> {event.eventDate} at {event.eventTime}</p>
                                <p><strong>Location:</strong> {event.location}</p>
                                <p><strong>Sender:</strong> {event.sender}</p>
                                <p><strong>Date Sent:</strong> {event.dateSent}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Announcements Card */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Announcements</h2>
                    <ul>
                        {announcements.map((announcement, index) => (
                            <li key={index} className="border-b py-2 text-gray-700">
                                {announcement}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Assessment Card */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Assessment</h2>
                    <ul>
                        <li className="flex justify-between">
                            <span>Homework Completed:</span>
                            <span>{assessment.homework}%</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Classwork Completed:</span>
                            <span>{assessment.classwork}%</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Attendance Signed:</span>
                            <span>{assessment.attendance}%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;