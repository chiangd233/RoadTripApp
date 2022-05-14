import React, { useState } from 'react';
import axiosInstance from '../axios.js';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const history = useNavigate();
    const initialFormData = Object.freeze({
        email: '',
        username: '',
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
            .post('user/create/', {
                email: formData.email,
                username: formData.username,
                password: formData.password,
            })
            .then((res) => {
                history.push('/login');
                console.log(res);
                console.log(res.data);
            });
    };

    return (
        <div class = 'container'>
            <h1> Sign up </h1>
            
 
        </div>
    )
}

