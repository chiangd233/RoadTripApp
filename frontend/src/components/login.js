import React, { useState } from 'react';
import axiosInstance from '../axios'
import { NavLink, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const history = useNavigate();
    const initialFormData = Object.freeze({
        email: '',
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

        axiosInstance
            .post('token/', {
                email: formData.email,
                password: formData.password,
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh)
                axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
                history('/');
                console.log(res);
                console.log(res.data);
            });
    };

    return (
        <div class = 'container'>
            <h1> Sign in </h1>
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
                    autoFocus 
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
                <NavLink to = '/'>
                    <button
                        type = "submit"
                        fullWidth
                        variant = "contained"
                        color = "primary"
                        onClick = {handleSubmit}
                    >
                    Sign In
                    </button>
                </NavLink>
            </div>
        </div>
    )
}