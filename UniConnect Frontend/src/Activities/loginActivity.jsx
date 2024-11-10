import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [students, setStudents] = useState([{}]);
    const [errorMessage, setErrorMessage] = useState('');
    const Navigate = useNavigate();

    const handleChange = (e) => {
        const userObject = {
            "Index": e.target.name === "index" ? e.target.value : students.Index,
            "Password": e.target.name === "password" ? e.target.value : students.Password
        };
        console.log(e.target.name, e.target.value);
        setStudents(userObject); 
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Submitting: ", students);
        try {
            const response = await axios.post('http://localhost:3000/uniconnect/index', students);
            console.log('Login response:', response.data);
            Navigate('/dashboard')
        } catch (err) {
            setErrorMessage("Please check credentials well");
            console.log('Error Frontend: ', err.response ? err.response.data : err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="username">Index Number</label>
                        <input
                            type="text"
                            onChange={handleChange}
                            id="username"
                            name="index"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                        <input
                            type="password"
                            onChange={handleChange}
                            id="password"
                            name="password"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                    <button
                        name="submit_button"
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
                </p>
                <div className="flex justify-center mt-6">
                    <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200 mx-2">
                        <FaFacebookF className="text-blue-600" />
                    </a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200 mx-2">
                        <FaTwitter className="text-blue-400" />
                    </a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200 mx-2">
                        <FaGoogle className="text-red-500" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
