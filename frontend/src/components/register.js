import React, { useState } from 'react';
import axiosInstance from '../axios.js';
import { NavLink, useNavigate } from 'react-router-dom';



export default function SignUp() {
    const history = useNavigate();
    const initialFormData = Object.freeze({
        email: '',
        username: '',
        firstname: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance
            .post('http://localhost:8000/api/user/register/', {
                email: formData.email,
                username: formData.username,
                firstname: formData.firstname,
                password: formData.password,
            })
            .then((res) => {
                history('/user/login');
            });
    };

    return (
        <div class = 'container'>
            <h1> Sign up </h1>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    variant = "outlined"
                    required
                    fullWidth
                    id = "email"
                    label = "Email Address"
                    name = "email"
                    type = "email"
                    autoComplete = "email"
                    onChange = {handleChange}
                />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    variant = "outlined"
                    required
                    fullWidth
                    id = "username"
                    label = "Username"
                    name = "username"
                    autoComplete = "username"
                    onChange = {handleChange}
                />
                <p>Username needs at least 8 letters</p>
            </div>
            <div>
                <label htmlFor="firstname">First Name</label>
                <input
                    variant = "outlined"
                    required
                    fullWidth
                    id = "firstname"
                    label = "First Name"
                    name = "firstname"
                    autoComplete = "first-name"
                    onChange = {handleChange}
                />
            </div>
            <div>
                <label htmlFor="name">Password</label>
                <input
                    variant = "outlined"
                    required
                    fullWidth
                    id = "password"
                    label = "Password"
                    name = "password"
                    type = "password"
                    autoComplete = "current-password"
                    onChange = {handleChange}
                />
            </div>
            <div>
                <NavLink to = '/user/signin/'>
                    <button
                        type = "submit"
                        fullWidth
                        variant = "contained"
                        color = "primary"
                        onClick = {handleSubmit}
                    >
                    Sign Up 
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

