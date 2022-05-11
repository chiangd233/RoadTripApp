import React, { useState } from 'react';
import axiosInstance from '../axios'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
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
        <body>
            <header>
            <h1>Login Form Using Skeleton CSS</h1>
            </header>
            <div class="main">
                <form>
                    <div class="row">
                        <div class="twelve">
                            <input type="text" placeholder="Email Address*" onChange = {handleChange} class="u-full-width" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="twelve">
                            <input type="password" placeholder="Password*" onChange = {handleChange} class="u-full-width" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="twelve">
                            <input type="submit" name="" onChange = {handleSubmit} class="button-primary u-full-width" value="Login" />
                        </div>
                    </div>
                </form>
            </div>
        </body>
    )
}