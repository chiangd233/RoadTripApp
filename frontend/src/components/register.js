import React, { useState } from 'react';
import axiosInstance from '../axios'
import { useHistory } from 'react-router-dom';

export default function SignUp() {
    const history = useHistory();
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
}