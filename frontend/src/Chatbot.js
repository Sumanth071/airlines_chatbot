import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Ensure you have this CSS file for styling

function App() {
    const [userInput, setUserInput] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    // Function to handle user input and send request to backend
    const handleUserInput = async () => {
        try {
            let endpoint = '';

            // Determine the appropriate endpoint based on user input
            if (userInput.toLowerCase().includes('book')) {
                endpoint = 'book_ticket';
            } else if (userInput.toLowerCase().includes('greet')) {
                endpoint = 'greet_passenger';
            } else if (userInput.toLowerCase().includes('ground')) {
                endpoint = 'assist_ground_staff';
            } else if (userInput.toLowerCase().includes('flight')) {
                endpoint = 'handle_flight_attendant';
            } else if (userInput.toLowerCase().includes('security')) {
                endpoint = 'assist_security_personnel';
            } else if (userInput.toLowerCase().includes('pilot')) {
                endpoint = 'pilot_assistance';
            } else {
                setResponseMessage("Sorry, I didn't understand that. Could you please provide more details?");
                return;
            }

            // Send POST request to backend
            const response = await axios.post(`http://localhost:5000/${endpoint}`, {
                task_description: userInput
            });

            // Set the response message
            setResponseMessage(response.data.message || response.data.details);
        } catch (error) {
            setResponseMessage("Oops! Something went wrong. Please try again.");
        }
    };

    return (
        <div className="container">
            <nav className="navbar">
                <h1>Indigo Airlines Support</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-bar"
                />
            </nav>
            <div className="main-content">
                <div className="card">
                    <h2>Welcome to Indigo Airlines!</h2>
                    <p>How can we assist you today?</p>
                    <textarea
                        placeholder="Enter your request here..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="input-field"
                    />
                    <button onClick={handleUserInput} className="button">Submit</button>
                </div>
            </div>
            <div className="response-card">
                <p>{responseMessage}</p>
            </div>
        </div>
    );
}

export default App;
