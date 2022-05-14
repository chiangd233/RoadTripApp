import React, { useState, useEffect } from "react";
import {NavLink, useParams} from 'react-router-dom'
import axiosInstance from '../axios.js';

function ThingsTodoDetail () {
    const { id } = useParams();
    const [detail, setDetail] = useState ({});
    
    const deleteThingsTodo = (id) => {
        axiosInstance.delete(`thingstodo/${id}`).then(() => console.log("delete successful"));
    };

    useEffect(() => {
        const apiUrl = `http://127.0.0.1:8000/api/thingstodo/${id}`;
        fetch(apiUrl)
            .then((data) => data.json())
            .then((payload) => {
                setDetail(payload);
            });
    }, [id]);

    return (
        <div class = 'container'>
            <h1> Explore Things to Do</h1>
            <div>
                <div>
                    <p> {detail.name} </p>
                    <p> Category: {detail.category} </p>
                    <p> {detail.city}, {detail.state}</p>
                    <p> Estimated time: {detail.time} hours</p>
                    <p> {detail.description} </p>
                    <NavLink to="edit"><button>Edit</button></NavLink>
                    <NavLink to='/thingstodo'><button onClick={() => deleteThingsTodo(id)}>Delete</button> </NavLink>
                </div>
            </div>
        </div>
	);
};



export default ThingsTodoDetail