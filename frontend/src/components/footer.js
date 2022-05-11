import React from 'react';
import '../index.css';


const Footer = (props) => {
	return (
        <>
        <div class = 'container'>
            <div class = 'footer'>
                <div class = 'footer-component'>
                    <h3>Company</h3>
                    <div>
                        <ul>
                            <li>Team</li>
                            <li>History</li>
                            <li>Contact Us</li>
                            <li>Locations</li>
                        </ul>
                    </div>
                </div>

                <div class = 'footer-component'>
                    <h3>Resources</h3>
                    <div>
                        <ul>
                            <li>Resource</li>
                            <li>Education</li>
                            <li>Business</li>
                        </ul>
                    </div>
                </div>

                <div class = 'footer-component'>
                    <h3>About the App</h3>
                    <div>
                        <ul>
                            <li>About</li>
                            <li>History</li>
                            <li>Learn More</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
	);
};

export default Footer
